<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FcmProjectsMessagesSendRequest;
import org.openapis.openapi.models.operations.FcmProjectsMessagesSendResponse;
import org.openapis.openapi.models.operations.FcmProjectsMessagesSendSecurity;
import org.openapis.openapi.models.operations.FcmProjectsMessagesSendSecurityOption1;
import org.openapis.openapi.models.operations.FcmProjectsMessagesSendSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AndroidConfig;
import org.openapis.openapi.models.shared.AndroidConfigPriorityEnum;
import org.openapis.openapi.models.shared.AndroidFcmOptions;
import org.openapis.openapi.models.shared.AndroidNotification;
import org.openapis.openapi.models.shared.AndroidNotificationNotificationPriorityEnum;
import org.openapis.openapi.models.shared.AndroidNotificationProxyEnum;
import org.openapis.openapi.models.shared.AndroidNotificationVisibilityEnum;
import org.openapis.openapi.models.shared.ApnsConfig;
import org.openapis.openapi.models.shared.ApnsFcmOptions;
import org.openapis.openapi.models.shared.Color;
import org.openapis.openapi.models.shared.FcmOptions;
import org.openapis.openapi.models.shared.LightSettings;
import org.openapis.openapi.models.shared.Message;
import org.openapis.openapi.models.shared.Notification;
import org.openapis.openapi.models.shared.SendMessageRequest;
import org.openapis.openapi.models.shared.WebpushConfig;
import org.openapis.openapi.models.shared.WebpushFcmOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FcmProjectsMessagesSendRequest req = new FcmProjectsMessagesSendRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                sendMessageRequest = new SendMessageRequest() {{
                    message = new Message() {{
                        android = new AndroidConfig() {{
                            collapseKey = "distinctio";
                            data = new java.util.HashMap<String, String>() {{
                                put("unde", "nulla");
                                put("corrupti", "illum");
                                put("vel", "error");
                                put("deserunt", "suscipit");
                            }};
                            directBootOk = false;
                            fcmOptions = new AndroidFcmOptions() {{
                                analyticsLabel = "iure";
                            }};;
                            notification = new AndroidNotification() {{
                                body = "magnam";
                                bodyLocArgs = new String[]{{
                                    add("ipsa"),
                                    add("delectus"),
                                    add("tempora"),
                                    add("suscipit"),
                                }};
                                bodyLocKey = "molestiae";
                                bypassProxyNotification = false;
                                channelId = "minus";
                                clickAction = "placeat";
                                color = "voluptatum";
                                defaultLightSettings = false;
                                defaultSound = false;
                                defaultVibrateTimings = false;
                                eventTime = "iusto";
                                icon = "excepturi";
                                image = "nisi";
                                lightSettings = new LightSettings() {{
                                    color = new Color() {{
                                        alpha = 9255.97;
                                        blue = 8360.79;
                                        green = 710.36;
                                        red = 3373.96;
                                    }};;
                                    lightOffDuration = "veritatis";
                                    lightOnDuration = "deserunt";
                                }};;
                                localOnly = false;
                                notificationCount = 20218;
                                notificationPriority = AndroidNotificationNotificationPriorityEnum.PRIORITY_LOW;
                                proxy = AndroidNotificationProxyEnum.IF_PRIORITY_LOWERED;
                                sound = "sapiente";
                                sticky = false;
                                tag = "quo";
                                ticker = "odit";
                                title = "Dr.";
                                titleLocArgs = new String[]{{
                                    add("maiores"),
                                    add("molestiae"),
                                    add("quod"),
                                    add("quod"),
                                }};
                                titleLocKey = "esse";
                                vibrateTimings = new String[]{{
                                    add("porro"),
                                    add("dolorum"),
                                    add("dicta"),
                                }};
                                visibility = AndroidNotificationVisibilityEnum.PUBLIC_;
                            }};;
                            priority = AndroidConfigPriorityEnum.HIGH;
                            restrictedPackageName = "occaecati";
                            ttl = "fugit";
                        }};;
                        apns = new ApnsConfig() {{
                            fcmOptions = new ApnsFcmOptions() {{
                                analyticsLabel = "deleniti";
                                image = "hic";
                            }};;
                            headers = new java.util.HashMap<String, String>() {{
                                put("totam", "beatae");
                                put("commodi", "molestiae");
                                put("modi", "qui");
                                put("impedit", "cum");
                            }};
                            payload = new java.util.HashMap<String, Object>() {{
                                put("ipsum", "excepturi");
                                put("aspernatur", "perferendis");
                            }};
                        }};;
                        condition = "ad";
                        data = new java.util.HashMap<String, String>() {{
                            put("sed", "iste");
                            put("dolor", "natus");
                            put("laboriosam", "hic");
                        }};
                        fcmOptions = new FcmOptions() {{
                            analyticsLabel = "saepe";
                        }};;
                        name = "Harvey Hessel";
                        notification = new Notification() {{
                            body = "saepe";
                            image = "quidem";
                            title = "Mr.";
                        }};;
                        token = "ipsa";
                        topic = "reiciendis";
                        webpush = new WebpushConfig() {{
                            data = new java.util.HashMap<String, String>() {{
                                put("mollitia", "laborum");
                                put("dolores", "dolorem");
                                put("corporis", "explicabo");
                            }};
                            fcmOptions = new WebpushFcmOptions() {{
                                analyticsLabel = "nobis";
                                link = "enim";
                            }};;
                            headers = new java.util.HashMap<String, String>() {{
                                put("nemo", "minima");
                                put("excepturi", "accusantium");
                                put("iure", "culpa");
                            }};
                            notification = new java.util.HashMap<String, Object>() {{
                                put("sapiente", "architecto");
                                put("mollitia", "dolorem");
                                put("culpa", "consequuntur");
                                put("repellat", "mollitia");
                            }};
                        }};;
                    }};;
                    validateOnly = false;
                }};;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "commodi";
                fields = "quam";
                key = "molestiae";
                oauthToken = "velit";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "quia";
                uploadProtocol = "quis";
            }};            

            FcmProjectsMessagesSendResponse res = sdk.projects.fcmProjectsMessagesSend(req, new FcmProjectsMessagesSendSecurity() {{
                option1 = new FcmProjectsMessagesSendSecurityOption1("vitae", "laborum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.message != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->