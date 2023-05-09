# instanceSettings

### Available Operations

* [computeInstanceSettingsGet](#computeinstancesettingsget) - Get Instance settings.
* [computeInstanceSettingsPatch](#computeinstancesettingspatch) - Patch Instance settings

## computeInstanceSettingsGet

Get Instance settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceSettingsGetRequest;
import org.openapis.openapi.models.operations.ComputeInstanceSettingsGetResponse;
import org.openapis.openapi.models.operations.ComputeInstanceSettingsGetSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceSettingsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceSettingsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstanceSettingsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceSettingsGetRequest req = new ComputeInstanceSettingsGetRequest("minima", "nemo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "tempore";
                alt = AltEnum.MEDIA;
                callback = "excepturi";
                fields = "necessitatibus";
                key = "perferendis";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "doloremque";
                uploadType = "excepturi";
                uploadProtocol = "quod";
                userIp = "vel";
            }};            

            ComputeInstanceSettingsGetResponse res = sdk.instanceSettings.computeInstanceSettingsGet(req, new ComputeInstanceSettingsGetSecurity() {{
                option1 = new ComputeInstanceSettingsGetSecurityOption1("ea", "error") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.instanceSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstanceSettingsPatch

Patch Instance settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceSettingsPatchRequest;
import org.openapis.openapi.models.operations.ComputeInstanceSettingsPatchResponse;
import org.openapis.openapi.models.operations.ComputeInstanceSettingsPatchSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceSettingsPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceSettingsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceSettings;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceSettingsPatchRequest req = new ComputeInstanceSettingsPatchRequest("explicabo", "temporibus") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceSettings = new InstanceSettings() {{
                    email = "Mohamed.Emmerich@yahoo.com";
                    kind = "aspernatur";
                    machineType = "sed";
                    zone = "eaque";
                }};;
                accessToken = "veritatis";
                alt = AltEnum.MEDIA;
                callback = "voluptas";
                fields = "error";
                key = "error";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "eius";
                requestId = "deserunt";
                updateMask = "voluptates";
                uploadType = "in";
                uploadProtocol = "harum";
                userIp = "vitae";
            }};            

            ComputeInstanceSettingsPatchResponse res = sdk.instanceSettings.computeInstanceSettingsPatch(req, new ComputeInstanceSettingsPatchSecurity() {{
                option1 = new ComputeInstanceSettingsPatchSecurityOption1("fuga", "ipsam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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
