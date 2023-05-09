# test

## Overview

Operations related to API and Services tests

### Available Operations

* [createTest](#createtest) - Create a new Test
* [getEventsByTestCase](#geteventsbytestcase) - Get events for TestCase
* [getMessagesByTestCase](#getmessagesbytestcase) - Get messages for TestCase
* [getTestResult](#gettestresult) - Get TestResult
* [getTestResultsByService](#gettestresultsbyservice) - Get TestResults by Service
* [getTestResultsByServiceCounter](#gettestresultsbyservicecounter) - Get the TestResults for Service counter
* [reportTestCaseResult](#reporttestcaseresult) - Report and create a new TestCaseResult

## createTest

Create a new Test

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTestResponse;
import org.openapis.openapi.models.operations.CreateTestSecurity;
import org.openapis.openapi.models.shared.HeaderDTO;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TestRequest;
import org.openapis.openapi.models.shared.TestRunnerTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.TestRequest req = new TestRequest(TestRunnerTypeEnum.GRPC_PROTOBUF, "maxime", "ea", 569101L) {{
                filteredOperations = new String[]{{
                    add("ea"),
                }};
                operationHeaders = new java.util.HashMap<String, org.openapis.openapi.models.shared.HeaderDTO[]>() {{
                    put("ab", new org.openapis.openapi.models.shared.HeaderDTO[]{{
                        add(new HeaderDTO("pariatur", "nemo") {{
                            name = "Clyde Kling";
                            values = "eaque";
                        }}),
                        add(new HeaderDTO("hic", "libero") {{
                            name = "Joseph Steuber DDS";
                            values = "corporis";
                        }}),
                        add(new HeaderDTO("quis", "nesciunt") {{
                            name = "Ernest Hayes";
                            values = "eaque";
                        }}),
                        add(new HeaderDTO("vero", "nostrum") {{
                            name = "Dorothy Dach";
                            values = "dolor";
                        }}),
                    }});
                }};
                secretName = "hic";
            }};            

            CreateTestResponse res = sdk.test.createTest(req, new CreateTestSecurity("recusandae") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.testResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEventsByTestCase

Get events for TestCase

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventsByTestCaseRequest;
import org.openapis.openapi.models.operations.GetEventsByTestCaseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetEventsByTestCaseRequest req = new GetEventsByTestCaseRequest("facilis", "perspiciatis");            

            GetEventsByTestCaseResponse res = sdk.test.getEventsByTestCase(req);

            if (res.unidirectionalEvents != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMessagesByTestCase

Get messages for TestCase

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMessagesByTestCaseRequest;
import org.openapis.openapi.models.operations.GetMessagesByTestCaseResponse;
import org.openapis.openapi.models.operations.GetMessagesByTestCaseSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMessagesByTestCaseRequest req = new GetMessagesByTestCaseRequest("voluptatem", "porro");            

            GetMessagesByTestCaseResponse res = sdk.test.getMessagesByTestCase(req, new GetMessagesByTestCaseSecurity("consequuntur") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.requestResponsePairs != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTestResult

Get TestResult

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTestResultRequest;
import org.openapis.openapi.models.operations.GetTestResultResponse;
import org.openapis.openapi.models.operations.GetTestResultSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTestResultRequest req = new GetTestResultRequest("blanditiis");            

            GetTestResultResponse res = sdk.test.getTestResult(req, new GetTestResultSecurity("error") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.testResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTestResultsByService

Get TestResults by Service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTestResultsByServiceRequest;
import org.openapis.openapi.models.operations.GetTestResultsByServiceResponse;
import org.openapis.openapi.models.operations.GetTestResultsByServiceSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTestResultsByServiceRequest req = new GetTestResultsByServiceRequest("eaque");            

            GetTestResultsByServiceResponse res = sdk.test.getTestResultsByService(req, new GetTestResultsByServiceSecurity("occaecati") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.testResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTestResultsByServiceCounter

Get the TestResults for Service counter

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTestResultsByServiceCounterRequest;
import org.openapis.openapi.models.operations.GetTestResultsByServiceCounterResponse;
import org.openapis.openapi.models.operations.GetTestResultsByServiceCounterSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTestResultsByServiceCounterRequest req = new GetTestResultsByServiceCounterRequest("rerum");            

            GetTestResultsByServiceCounterResponse res = sdk.test.getTestResultsByServiceCounter(req, new GetTestResultsByServiceCounterSecurity("adipisci") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.counter != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reportTestCaseResult

Report a TestCaseResult (typically used by a Test runner)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReportTestCaseResultRequest;
import org.openapis.openapi.models.operations.ReportTestCaseResultResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TestCaseReturnDTO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ReportTestCaseResultRequest req = new ReportTestCaseResultRequest(                new TestCaseReturnDTO("earum");, "modi");            

            ReportTestCaseResultResponse res = sdk.test.reportTestCaseResult(req);

            if (res.testCaseResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
