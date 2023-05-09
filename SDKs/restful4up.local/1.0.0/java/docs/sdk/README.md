# SDK

## Overview

RESTful API 4 Unipacker

### Available Operations

* [applyYaraRules](#applyyararules) - apply given YARA rules to the given executable. (upto 10 rules)
* [clean](#clean) - clean up the uploaded files
* [emulationOutput](#emulationoutput) - try to get the emulation output after unpacking the file
* [generatePartialYaraRule](#generatepartialyararule) - generate partial YARA rules for give executable. (Rule without the condition section)
* [unpack](#unpack) - try to unpack the given file

## applyYaraRules

apply given YARA rules to the given executable. (upto 10 rules)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApplyYaraRulesRequestBody;
import org.openapis.openapi.models.operations.ApplyYaraRulesRequestBodyFile;
import org.openapis.openapi.models.operations.ApplyYaraRulesRequestBodyIsUnpackingRequiredEnum;
import org.openapis.openapi.models.operations.ApplyYaraRulesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApplyYaraRulesRequestBody req = new ApplyYaraRulesRequestBody(                new ApplyYaraRulesRequestBodyFile("illum".getBytes(), "vel");,                 new String[]{{
                                add("deserunt"),
                                add("suscipit"),
                                add("iure"),
                            }}) {{
                isUnpackingRequired = ApplyYaraRulesRequestBodyIsUnpackingRequiredEnum.TRUE;
            }};            

            ApplyYaraRulesResponse res = sdk.sdk.applyYaraRules(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clean

clean up the uploaded files

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CleanResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CleanResponse res = sdk.sdk.clean();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## emulationOutput

try to get the emulation output after unpacking the file

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EmulationOutputRequestBody;
import org.openapis.openapi.models.operations.EmulationOutputRequestBodyFile;
import org.openapis.openapi.models.operations.EmulationOutputResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EmulationOutputRequestBody req = new EmulationOutputRequestBody(                new EmulationOutputRequestBodyFile("debitis".getBytes(), "ipsa"););            

            EmulationOutputResponse res = sdk.sdk.emulationOutput(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## generatePartialYaraRule

generate partial YARA rules for give executable. (Rule without the condition section)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GeneratePartialYaraRuleRequestBody;
import org.openapis.openapi.models.operations.GeneratePartialYaraRuleRequestBodyFile;
import org.openapis.openapi.models.operations.GeneratePartialYaraRuleRequestBodyIsUnpackingRequiredEnum;
import org.openapis.openapi.models.operations.GeneratePartialYaraRuleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GeneratePartialYaraRuleRequestBody req = new GeneratePartialYaraRuleRequestBody(                new GeneratePartialYaraRuleRequestBodyFile("delectus".getBytes(), "tempora");) {{
                isUnpackingRequired = GeneratePartialYaraRuleRequestBodyIsUnpackingRequiredEnum.TRUE;
                minimumStringLength = "molestiae";
                stringsToIgnore = new String[]{{
                    add("placeat"),
                    add("voluptatum"),
                    add("iusto"),
                    add("excepturi"),
                }};
            }};            

            GeneratePartialYaraRuleResponse res = sdk.sdk.generatePartialYaraRule(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unpack

try to unpack the given file

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnpackRequestBody;
import org.openapis.openapi.models.operations.UnpackRequestBodyFile;
import org.openapis.openapi.models.operations.UnpackResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UnpackRequestBody req = new UnpackRequestBody(                new UnpackRequestBodyFile("nisi".getBytes(), "recusandae"););            

            UnpackResponse res = sdk.sdk.unpack(req);

            if (res.unpack200WildcardBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
