<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateSecurity;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContactCenterInput;
import org.openapis.openapi.models.shared.URIs;
import org.openapis.openapi.models.shared.SAMLParams;
import org.openapis.openapi.models.shared.InstanceConfigInstanceSizeEnum;
import org.openapis.openapi.models.shared.InstanceConfig;
import org.openapis.openapi.models.shared.AdminUser;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest req = new ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest() {{
                dollarXgafv = "2";
                contactCenterInput = new ContactCenterInput() {{
                    adminUser = new AdminUser() {{
                        familyName = "provident";
                        givenName = "distinctio";
                    }};
                    ccaipManagedUsers = false;
                    customerDomainPrefix = "quibusdam";
                    displayName = "unde";
                    instanceConfig = new InstanceConfig() {{
                        instanceSize = "STANDARD_3XLARGE";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("illum", "vel");
                        put("error", "deserunt");
                        put("suscipit", "iure");
                    }};
                    name = "magnam";
                    samlParams = new SAMLParams() {{
                        certificate = "debitis";
                        entityId = "ipsa";
                        ssoUri = "delectus";
                        userEmail = "tempora";
                    }};
                    uris = new URIs() {{
                        chatBotUri = "suscipit";
                        mediaUri = "molestiae";
                        rootUri = "minus";
                        virtualAgentStreamingServiceUri = "placeat";
                    }};
                    userEmail = "voluptatum";
                }};
                accessToken = "iusto";
                alt = "media";
                callback = "nisi";
                contactCenterId = "recusandae";
                fields = "temporibus";
                key = "ab";
                oauthToken = "quis";
                parent = "veritatis";
                prettyPrint = false;
                quotaUser = "deserunt";
                requestId = "perferendis";
                uploadType = "ipsam";
                uploadProtocol = "repellendus";
            }}            

            ContactcenteraiplatformProjectsLocationsContactCentersCreateResponse res = sdk.projects.contactcenteraiplatformProjectsLocationsContactCentersCreate(req, new ContactcenteraiplatformProjectsLocationsContactCentersCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->