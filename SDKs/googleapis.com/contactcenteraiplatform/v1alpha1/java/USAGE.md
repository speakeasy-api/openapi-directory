<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateResponse;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateSecurity;
import org.openapis.openapi.models.shared.AdminUser;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContactCenterInput;
import org.openapis.openapi.models.shared.InstanceConfig;
import org.openapis.openapi.models.shared.InstanceConfigInstanceSizeEnum;
import org.openapis.openapi.models.shared.SAMLParams;
import org.openapis.openapi.models.shared.URIs;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest req = new ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                contactCenterInput = new ContactCenterInput() {{
                    adminUser = new AdminUser() {{
                        familyName = "distinctio";
                        givenName = "quibusdam";
                    }};;
                    ccaipManagedUsers = false;
                    customerDomainPrefix = "unde";
                    displayName = "nulla";
                    instanceConfig = new InstanceConfig() {{
                        instanceSize = InstanceConfigInstanceSizeEnum.STANDARD_LARGE;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("vel", "error");
                        put("deserunt", "suscipit");
                        put("iure", "magnam");
                        put("debitis", "ipsa");
                    }};
                    name = "Ricky Hoppe";
                    samlParams = new SAMLParams() {{
                        certificate = "placeat";
                        entityId = "voluptatum";
                        ssoUri = "iusto";
                        userEmail = "excepturi";
                    }};;
                    uris = new URIs() {{
                        chatBotUri = "nisi";
                        mediaUri = "recusandae";
                        rootUri = "temporibus";
                        virtualAgentStreamingServiceUri = "ab";
                    }};;
                    userEmail = "quis";
                }};;
                accessToken = "veritatis";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                contactCenterId = "ipsam";
                fields = "repellendus";
                key = "sapiente";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "odit";
                requestId = "at";
                uploadType = "at";
                uploadProtocol = "maiores";
            }};            

            ContactcenteraiplatformProjectsLocationsContactCentersCreateResponse res = sdk.projects.contactcenteraiplatformProjectsLocationsContactCentersCreate(req, new ContactcenteraiplatformProjectsLocationsContactCentersCreateSecurity("molestiae", "quod") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->