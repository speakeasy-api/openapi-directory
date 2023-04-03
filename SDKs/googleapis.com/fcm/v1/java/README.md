# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FcmProjectsMessagesSendSecurityOption1;
import org.openapis.openapi.models.operations.FcmProjectsMessagesSendSecurityOption2;
import org.openapis.openapi.models.operations.FcmProjectsMessagesSendSecurity;
import org.openapis.openapi.models.operations.FcmProjectsMessagesSendRequest;
import org.openapis.openapi.models.operations.FcmProjectsMessagesSendResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SendMessageRequest;
import org.openapis.openapi.models.shared.Message;
import org.openapis.openapi.models.shared.WebpushConfig;
import org.openapis.openapi.models.shared.WebpushFcmOptions;
import org.openapis.openapi.models.shared.Notification;
import org.openapis.openapi.models.shared.FcmOptions;
import org.openapis.openapi.models.shared.ApnsConfig;
import org.openapis.openapi.models.shared.ApnsFcmOptions;
import org.openapis.openapi.models.shared.AndroidConfigPriorityEnum;
import org.openapis.openapi.models.shared.AndroidConfig;
import org.openapis.openapi.models.shared.AndroidNotificationNotificationPriorityEnum;
import org.openapis.openapi.models.shared.AndroidNotificationVisibilityEnum;
import org.openapis.openapi.models.shared.AndroidNotification;
import org.openapis.openapi.models.shared.LightSettings;
import org.openapis.openapi.models.shared.Color;
import org.openapis.openapi.models.shared.AndroidFcmOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FcmProjectsMessagesSendRequest req = new FcmProjectsMessagesSendRequest() {{
                dollarXgafv = "2";
                sendMessageRequest = new SendMessageRequest() {{
                    message = new Message() {{
                        android = new AndroidConfig() {{
                            collapseKey = "provident";
                            data = new java.util.HashMap<String, String>() {{
                                put("quibusdam", "unde");
                                put("nulla", "corrupti");
                                put("illum", "vel");
                            }};
                            directBootOk = false;
                            fcmOptions = new AndroidFcmOptions() {{
                                analyticsLabel = "error";
                            }};
                            notification = new AndroidNotification() {{
                                body = "deserunt";
                                bodyLocArgs = new String[]{{
                                    add("iure"),
                                    add("magnam"),
                                }};
                                bodyLocKey = "debitis";
                                bypassProxyNotification = false;
                                channelId = "ipsa";
                                clickAction = "delectus";
                                color = "tempora";
                                defaultLightSettings = false;
                                defaultSound = false;
                                defaultVibrateTimings = false;
                                eventTime = "suscipit";
                                icon = "molestiae";
                                image = "minus";
                                lightSettings = new LightSettings() {{
                                    color = new Color() {{
                                        alpha = 8121.69;
                                        blue = 5288.95;
                                        green = 4799.77;
                                        red = 5680.45;
                                    }};
                                    lightOffDuration = "nisi";
                                    lightOnDuration = "recusandae";
                                }};
                                localOnly = false;
                                notificationCount = 836079;
                                notificationPriority = "PRIORITY_UNSPECIFIED";
                                sound = "quis";
                                sticky = false;
                                tag = "veritatis";
                                ticker = "deserunt";
                                title = "Mr.";
                                titleLocArgs = new String[]{{
                                    add("repellendus"),
                                    add("sapiente"),
                                }};
                                titleLocKey = "quo";
                                vibrateTimings = new String[]{{
                                    add("at"),
                                }};
                                visibility = "SECRET";
                            }};
                            priority = "HIGH";
                            restrictedPackageName = "molestiae";
                            ttl = "quod";
                        }};
                        apns = new ApnsConfig() {{
                            fcmOptions = new ApnsFcmOptions() {{
                                analyticsLabel = "quod";
                                image = "esse";
                            }};
                            headers = new java.util.HashMap<String, String>() {{
                                put("porro", "dolorum");
                                put("dicta", "nam");
                                put("officia", "occaecati");
                            }};
                            payload = new java.util.HashMap<String, Object>() {{
                                put("deleniti", "hic");
                            }};
                        }};
                        condition = "optio";
                        data = new java.util.HashMap<String, String>() {{
                            put("beatae", "commodi");
                            put("molestiae", "modi");
                            put("qui", "impedit");
                        }};
                        fcmOptions = new FcmOptions() {{
                            analyticsLabel = "cum";
                        }};
                        name = "esse";
                        notification = new Notification() {{
                            body = "ipsum";
                            image = "excepturi";
                            title = "Mr.";
                        }};
                        token = "perferendis";
                        topic = "ad";
                        webpush = new WebpushConfig() {{
                            data = new java.util.HashMap<String, String>() {{
                                put("sed", "iste");
                                put("dolor", "natus");
                                put("laboriosam", "hic");
                            }};
                            fcmOptions = new WebpushFcmOptions() {{
                                analyticsLabel = "saepe";
                                link = "fuga";
                            }};
                            headers = new java.util.HashMap<String, String>() {{
                                put("corporis", "iste");
                                put("iure", "saepe");
                            }};
                            notification = new java.util.HashMap<String, Object>() {{
                                put("architecto", "ipsa");
                                put("reiciendis", "est");
                                put("mollitia", "laborum");
                            }};
                        }};
                    }};
                    validateOnly = false;
                }};
                accessToken = "dolores";
                alt = "json";
                callback = "corporis";
                fields = "explicabo";
                key = "nobis";
                oauthToken = "enim";
                parent = "omnis";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "minima";
                uploadProtocol = "excepturi";
            }}            

            FcmProjectsMessagesSendResponse res = sdk.projects.fcmProjectsMessagesSend(req, new FcmProjectsMessagesSendSecurity() {{
                option1 = new FcmProjectsMessagesSendSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.message.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `fcmProjectsMessagesSend` - Send a message to specified target (a registration token, topic or condition).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
