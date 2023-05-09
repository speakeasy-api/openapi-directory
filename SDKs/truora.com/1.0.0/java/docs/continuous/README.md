# continuous

## Overview

Allows creating recurring checks with customizable frequency that notify whenever there are changes in check scores.

### Available Operations

* [getContinuousCheck](#getcontinuouscheck) - Lists history associated with a Check. It can be paginated
* [listContinuousChecks](#listcontinuouschecks) - Lists all continuous checks
* [updateContinuousCheck](#updatecontinuouscheck) - Updates a continuous check
* [createContinuousCheck](#createcontinuouscheck) - Creates a continuous check that will run background checks recurrently according to the frequency provided.
* [getV1ContinuousChecksContinuousCheckIdHistory](#getv1continuouscheckscontinuouscheckidhistory) - Lists background check logs. It can be paginated


## getContinuousCheck

Lists history associated with a Check. It can be paginated

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContinuousCheckRequest;
import org.openapis.openapi.models.operations.GetContinuousCheckResponse;
import org.openapis.openapi.models.operations.GetContinuousCheckSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContinuousCheckRequest req = new GetContinuousCheckRequest(6169.34);            

            GetContinuousCheckResponse res = sdk.continuous.getContinuousCheck(req, new GetContinuousCheckSecurity("laboriosam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.continuousCheck != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listContinuousChecks

Lists all continuous checks

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListContinuousChecksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListContinuousChecksResponse res = sdk.continuous.listContinuousChecks();

            if (res.listContinuousChecksOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateContinuousCheck

Updates a continuous check

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateContinuousCheckRequest;
import org.openapis.openapi.models.operations.UpdateContinuousCheckResponse;
import org.openapis.openapi.models.operations.UpdateContinuousCheckSecurity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateContinuousCheckInput;
import org.openapis.openapi.models.shared.UpdateContinuousCheckInputStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateContinuousCheckRequest req = new UpdateContinuousCheckRequest(                new UpdateContinuousCheckInput("saepe", UpdateContinuousCheckInputStatusEnum.DISABLED);, 4499.5);            

            UpdateContinuousCheckResponse res = sdk.continuous.updateContinuousCheck(req, new UpdateContinuousCheckSecurity("corporis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.continuousCheck != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createContinuousCheck

Creates a continuous check that will run background checks recurrently according to the frequency provided.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateContinuousCheckResponse;
import org.openapis.openapi.models.operations.CreateContinuousCheckSecurity;
import org.openapis.openapi.models.shared.CreateContinuousCheckInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateContinuousCheckInput req = new CreateContinuousCheckInput() {{
                checkId = "iste";
                frequency = "iure";
                status = "saepe";
            }};            

            CreateContinuousCheckResponse res = sdk.continuous.createContinuousCheck(req, new CreateContinuousCheckSecurity("quidem") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.continuousCheck != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV1ContinuousChecksContinuousCheckIdHistory

Lists background check logs. It can be paginated


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV1ContinuousChecksContinuousCheckIdHistoryRequest;
import org.openapis.openapi.models.operations.GetV1ContinuousChecksContinuousCheckIdHistoryResponse;
import org.openapis.openapi.models.operations.GetV1ContinuousChecksContinuousCheckIdHistorySecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1ContinuousChecksContinuousCheckIdHistoryRequest req = new GetV1ContinuousChecksContinuousCheckIdHistoryRequest("architecto");            

            GetV1ContinuousChecksContinuousCheckIdHistoryResponse res = sdk.continuous.getV1ContinuousChecksContinuousCheckIdHistory(req, new GetV1ContinuousChecksContinuousCheckIdHistorySecurity("ipsa") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getContiuousCheckHistoryOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
