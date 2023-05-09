# customers

### Available Operations

* [prodTtSasportalCustomersList](#prodttsasportalcustomerslist) - Returns a list of requested customers.
* [prodTtSasportalCustomersProvisionDeployment](#prodttsasportalcustomersprovisiondeployment) - Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found.

## prodTtSasportalCustomersList

Returns a list of requested customers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProdTtSasportalCustomersListRequest;
import org.openapis.openapi.models.operations.ProdTtSasportalCustomersListResponse;
import org.openapis.openapi.models.operations.ProdTtSasportalCustomersListSecurity;
import org.openapis.openapi.models.operations.ProdTtSasportalCustomersListSecurityOption1;
import org.openapis.openapi.models.operations.ProdTtSasportalCustomersListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProdTtSasportalCustomersListRequest req = new ProdTtSasportalCustomersListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                pageSize = 812169L;
                pageToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "excepturi";
                uploadProtocol = "nisi";
            }};            

            ProdTtSasportalCustomersListResponse res = sdk.customers.prodTtSasportalCustomersList(req, new ProdTtSasportalCustomersListSecurity() {{
                option1 = new ProdTtSasportalCustomersListSecurityOption1("recusandae", "temporibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sasPortalListCustomersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## prodTtSasportalCustomersProvisionDeployment

Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProdTtSasportalCustomersProvisionDeploymentRequest;
import org.openapis.openapi.models.operations.ProdTtSasportalCustomersProvisionDeploymentResponse;
import org.openapis.openapi.models.operations.ProdTtSasportalCustomersProvisionDeploymentSecurity;
import org.openapis.openapi.models.operations.ProdTtSasportalCustomersProvisionDeploymentSecurityOption1;
import org.openapis.openapi.models.operations.ProdTtSasportalCustomersProvisionDeploymentSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SasPortalProvisionDeploymentRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProdTtSasportalCustomersProvisionDeploymentRequest req = new ProdTtSasportalCustomersProvisionDeploymentRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                sasPortalProvisionDeploymentRequest = new SasPortalProvisionDeploymentRequest() {{
                    newDeploymentDisplayName = "quis";
                    newOrganizationDisplayName = "veritatis";
                }};;
                accessToken = "deserunt";
                alt = AltEnum.JSON;
                callback = "ipsam";
                fields = "repellendus";
                key = "sapiente";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "at";
                uploadProtocol = "at";
            }};            

            ProdTtSasportalCustomersProvisionDeploymentResponse res = sdk.customers.prodTtSasportalCustomersProvisionDeployment(req, new ProdTtSasportalCustomersProvisionDeploymentSecurity() {{
                option1 = new ProdTtSasportalCustomersProvisionDeploymentSecurityOption1("maiores", "molestiae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sasPortalProvisionDeploymentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
