# agreements

### Available Operations

* [acceptEUA](#accepteua) - Accept an end-user agreement via the API
* [createEUAV2](#createeuav2) - API endpoints related to end-user agreements.
* [deleteEUAByIdV2](#deleteeuabyidv2) - Delete an end user agreement
* [retrieveEUAByIdV2](#retrieveeuabyidv2) - Retrieve end user agreement by ID
* [retrieveAllEUAsForAnEndUserV2](#retrievealleuasforanenduserv2) - API endpoints related to end-user agreements.

## acceptEUA

Accept an end-user agreement via the API

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptEUARequest;
import org.openapis.openapi.models.operations.AcceptEUAResponse;
import org.openapis.openapi.models.shared.EnduserAcceptanceDetailsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            AcceptEUARequest req = new AcceptEUARequest(                new EnduserAcceptanceDetailsRequest("ipsum", "quidem");, "99d488e1-e91e-4450-ad2a-bd44269802d5");            

            AcceptEUAResponse res = sdk.agreements.acceptEUA(req);

            if (res.endUserAgreement != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEUAV2

API endpoints related to end-user agreements.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEUAV2Response;
import org.openapis.openapi.models.shared.EndUserAgreementRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.EndUserAgreementRequest req = new EndUserAgreementRequest("fugit") {{
                accessScope = new Object[][]{{
                    add(new Object[]{{
                        add("tempora"),
                        add("facilis"),
                        add("tempore"),
                    }}),
                    add(new Object[]{{
                        add("delectus"),
                        add("eum"),
                    }}),
                    add(new Object[]{{
                        add("eligendi"),
                    }}),
                }};
                accessValidForDays = 576157L;
                maxHistoricalDays = 396098L;
            }};            

            CreateEUAV2Response res = sdk.agreements.createEUAV2(req);

            if (res.endUserAgreement != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEUAByIdV2

Delete an end user agreement

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEUAByIdV2Request;
import org.openapis.openapi.models.operations.DeleteEUAByIdV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            DeleteEUAByIdV2Request req = new DeleteEUAByIdV2Request("e9a3efa7-7dfb-414c-966a-e395efb9ba88");            

            DeleteEUAByIdV2Response res = sdk.agreements.deleteEUAByIdV2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveEUAByIdV2

Retrieve end user agreement by ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveEUAByIdV2Request;
import org.openapis.openapi.models.operations.RetrieveEUAByIdV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            RetrieveEUAByIdV2Request req = new RetrieveEUAByIdV2Request("3a669970-74ba-4446-9b6e-2141959890af");            

            RetrieveEUAByIdV2Response res = sdk.agreements.retrieveEUAByIdV2(req);

            if (res.endUserAgreement != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveAllEUAsForAnEndUserV2

API endpoints related to end-user agreements.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveAllEUAsForAnEndUserV2Request;
import org.openapis.openapi.models.operations.RetrieveAllEUAsForAnEndUserV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            RetrieveAllEUAsForAnEndUserV2Request req = new RetrieveAllEUAsForAnEndUserV2Request() {{
                limit = 320997L;
                offset = 431418L;
            }};            

            RetrieveAllEUAsForAnEndUserV2Response res = sdk.agreements.retrieveAllEUAsForAnEndUserV2(req);

            if (res.paginatedEndUserAgreementList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
