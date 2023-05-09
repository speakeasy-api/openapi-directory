# fundsConfirmations

### Available Operations

* [createFundsConfirmationConsents](#createfundsconfirmationconsents) - Create Funds Confirmation Consent
* [createFundsConfirmations](#createfundsconfirmations) - Create Funds Confirmation
* [deleteFundsConfirmationConsentsConsentId](#deletefundsconfirmationconsentsconsentid) - Delete Funds Confirmation Consent
* [getFundsConfirmationConsentsConsentId](#getfundsconfirmationconsentsconsentid) - Get Funds Confirmation Consent

## createFundsConfirmationConsents

Create Funds Confirmation Consent

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFundsConfirmationConsentsRequest;
import org.openapis.openapi.models.operations.CreateFundsConfirmationConsentsResponse;
import org.openapis.openapi.models.operations.CreateFundsConfirmationConsentsSecurity;
import org.openapis.openapi.models.shared.OBFundsConfirmationConsent1;
import org.openapis.openapi.models.shared.OBFundsConfirmationConsent1Data;
import org.openapis.openapi.models.shared.OBFundsConfirmationConsent1DataDebtorAccount;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateFundsConfirmationConsentsRequest req = new CreateFundsConfirmationConsentsRequest("delectus",                 new OBFundsConfirmationConsent1(                new OBFundsConfirmationConsent1Data(                new OBFundsConfirmationConsent1DataDebtorAccount("tempora", "suscipit") {{
                                                                name = "Alexandra Schulist";
                                                                secondaryIdentification = "excepturi";
                                                            }};) {{
                                                expirationDateTime = OffsetDateTime.parse("2022-01-28T03:46:24.500Z");
                                            }};);) {{
                xCustomerUserAgent = "temporibus";
                xFapiAuthDate = "ab";
                xFapiCustomerIpAddress = "quis";
                xFapiInteractionId = "veritatis";
            }};            

            CreateFundsConfirmationConsentsResponse res = sdk.fundsConfirmations.createFundsConfirmationConsents(req, new CreateFundsConfirmationConsentsSecurity("deserunt") {{
                tppoAuth2Security = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.obFundsConfirmationConsentResponse1 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFundsConfirmations

Create Funds Confirmation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFundsConfirmationsRequest;
import org.openapis.openapi.models.operations.CreateFundsConfirmationsResponse;
import org.openapis.openapi.models.operations.CreateFundsConfirmationsSecurity;
import org.openapis.openapi.models.shared.OBFundsConfirmation1;
import org.openapis.openapi.models.shared.OBFundsConfirmation1Data;
import org.openapis.openapi.models.shared.OBFundsConfirmation1DataInstructedAmount;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateFundsConfirmationsRequest req = new CreateFundsConfirmationsRequest("perferendis",                 new OBFundsConfirmation1(                new OBFundsConfirmation1Data("ipsam",                 new OBFundsConfirmation1DataInstructedAmount("repellendus", "sapiente");, "quo"););) {{
                xCustomerUserAgent = "odit";
                xFapiAuthDate = "at";
                xFapiCustomerIpAddress = "at";
                xFapiInteractionId = "maiores";
            }};            

            CreateFundsConfirmationsResponse res = sdk.fundsConfirmations.createFundsConfirmations(req, new CreateFundsConfirmationsSecurity("molestiae") {{
                psuoAuth2Security = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.obFundsConfirmationResponse1 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFundsConfirmationConsentsConsentId

Delete Funds Confirmation Consent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFundsConfirmationConsentsConsentIdRequest;
import org.openapis.openapi.models.operations.DeleteFundsConfirmationConsentsConsentIdResponse;
import org.openapis.openapi.models.operations.DeleteFundsConfirmationConsentsConsentIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteFundsConfirmationConsentsConsentIdRequest req = new DeleteFundsConfirmationConsentsConsentIdRequest("quod", "quod") {{
                xCustomerUserAgent = "esse";
                xFapiAuthDate = "totam";
                xFapiCustomerIpAddress = "porro";
                xFapiInteractionId = "dolorum";
            }};            

            DeleteFundsConfirmationConsentsConsentIdResponse res = sdk.fundsConfirmations.deleteFundsConfirmationConsentsConsentId(req, new DeleteFundsConfirmationConsentsConsentIdSecurity("dicta") {{
                tppoAuth2Security = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFundsConfirmationConsentsConsentId

Get Funds Confirmation Consent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFundsConfirmationConsentsConsentIdRequest;
import org.openapis.openapi.models.operations.GetFundsConfirmationConsentsConsentIdResponse;
import org.openapis.openapi.models.operations.GetFundsConfirmationConsentsConsentIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFundsConfirmationConsentsConsentIdRequest req = new GetFundsConfirmationConsentsConsentIdRequest("nam", "officia") {{
                xCustomerUserAgent = "occaecati";
                xFapiAuthDate = "fugit";
                xFapiCustomerIpAddress = "deleniti";
                xFapiInteractionId = "hic";
            }};            

            GetFundsConfirmationConsentsConsentIdResponse res = sdk.fundsConfirmations.getFundsConfirmationConsentsConsentId(req, new GetFundsConfirmationConsentsConsentIdSecurity("optio") {{
                tppoAuth2Security = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.obFundsConfirmationConsentResponse1 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
