# certificateActions

### Available Operations

* [getCertificatesIdActions](#getcertificatesidactions) - Get all Actions for a Certificate
* [getCertificatesIdActionsActionId](#getcertificatesidactionsactionid) - Get an Action for a Certificate
* [postCertificatesIdActionsRetry](#postcertificatesidactionsretry) - Retry Issuance or Renewal

## getCertificatesIdActions

Returns all Action objects for a Certificate. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.

Only type `managed` Certificates can have Actions. For type `uploaded` Certificates the `actions` key will always contain an empty array.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCertificatesIdActionsRequest;
import org.openapis.openapi.models.operations.GetCertificatesIdActionsResponse;
import org.openapis.openapi.models.operations.GetCertificatesIdActionsSortParameterSortEnum;
import org.openapis.openapi.models.operations.GetCertificatesIdActionsStatusParameterStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCertificatesIdActionsRequest req = new GetCertificatesIdActionsRequest(847252L) {{
                sort = GetCertificatesIdActionsSortParameterSortEnum.STATUS_ASC;
                status = GetCertificatesIdActionsStatusParameterStatusEnum.SUCCESS;
            }};            

            GetCertificatesIdActionsResponse res = sdk.certificateActions.getCertificatesIdActions(req);

            if (res.actionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCertificatesIdActionsActionId

Returns a specific Action for a Certificate. Only type `managed` Certificates have Actions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCertificatesIdActionsActionIdRequest;
import org.openapis.openapi.models.operations.GetCertificatesIdActionsActionIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCertificatesIdActionsActionIdRequest req = new GetCertificatesIdActionsActionIdRequest(645894L, 384382L);            

            GetCertificatesIdActionsActionIdResponse res = sdk.certificateActions.getCertificatesIdActionsActionId(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCertificatesIdActionsRetry

Retry a failed Certificate issuance or renewal.

Only applicable if the type of the Certificate is `managed` and the issuance or renewal status is `failed`.

#### Call specific error codes

| Code                                                    | Description                                                               |
|---------------------------------------------------------|---------------------------------------------------------------------------|
| `caa_record_does_not_allow_ca`                          | CAA record does not allow certificate authority                           |
| `ca_dns_validation_failed`                              | Certificate Authority: DNS validation failed                              |
| `ca_too_many_authorizations_failed_recently`            | Certificate Authority: Too many authorizations failed recently            |
| `ca_too_many_certificates_issued_for_registered_domain` | Certificate Authority: Too many certificates issued for registered domain |
| `ca_too_many_duplicate_certificates`                    | Certificate Authority: Too many duplicate certificates                    |
| `could_not_verify_domain_delegated_to_zone`             | Could not verify domain delegated to zone                                 |
| `dns_zone_not_found`                                    | DNS zone not found                                                        |
| `dns_zone_is_secondary_zone`                            | DNS zone is a secondary zone                                              |


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCertificatesIdActionsRetryRequest;
import org.openapis.openapi.models.operations.PostCertificatesIdActionsRetryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCertificatesIdActionsRetryRequest req = new PostCertificatesIdActionsRetryRequest(437587L);            

            PostCertificatesIdActionsRetryResponse res = sdk.certificateActions.postCertificatesIdActionsRetry(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
