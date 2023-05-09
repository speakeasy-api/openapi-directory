# loginSecurity

### Available Operations

* [getOrganizationLoginSecurity](#getorganizationloginsecurity) - Returns the login security settings for an organization.
* [updateOrganizationLoginSecurity](#updateorganizationloginsecurity) - Update the login security settings for an organization

## getOrganizationLoginSecurity

Returns the login security settings for an organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationLoginSecurityRequest;
import org.openapis.openapi.models.operations.GetOrganizationLoginSecurityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationLoginSecurityRequest req = new GetOrganizationLoginSecurityRequest("assumenda");            

            GetOrganizationLoginSecurityResponse res = sdk.loginSecurity.getOrganizationLoginSecurity(req);

            if (res.getOrganizationLoginSecurity200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationLoginSecurity

Update the login security settings for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationLoginSecurityRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationLoginSecurityRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationLoginSecurityRequestBodyApiAuthentication;
import org.openapis.openapi.models.operations.UpdateOrganizationLoginSecurityRequestBodyApiAuthenticationIpRestrictionsForKeys;
import org.openapis.openapi.models.operations.UpdateOrganizationLoginSecurityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationLoginSecurityRequest req = new UpdateOrganizationLoginSecurityRequest("eum") {{
                requestBody = new UpdateOrganizationLoginSecurityRequestBody() {{
                    accountLockoutAttempts = 460887L;
                    apiAuthentication = new UpdateOrganizationLoginSecurityRequestBodyApiAuthentication() {{
                        ipRestrictionsForKeys = new UpdateOrganizationLoginSecurityRequestBodyApiAuthenticationIpRestrictionsForKeys() {{
                            enabled = false;
                            ranges = new String[]{{
                                add("distinctio"),
                            }};
                        }};;
                    }};;
                    enforceAccountLockout = false;
                    enforceDifferentPasswords = false;
                    enforceIdleTimeout = false;
                    enforceLoginIpRanges = false;
                    enforcePasswordExpiration = false;
                    enforceStrongPasswords = false;
                    enforceTwoFactorAuth = false;
                    idleTimeoutMinutes = 283637L;
                    loginIpRanges = new String[]{{
                        add("exercitationem"),
                    }};
                    numDifferentPasswords = 534738L;
                    passwordExpirationDays = 203956L;
                }};;
            }};            

            UpdateOrganizationLoginSecurityResponse res = sdk.loginSecurity.updateOrganizationLoginSecurity(req);

            if (res.updateOrganizationLoginSecurity200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
