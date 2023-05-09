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
                                sound = "repellendus";
                                sticky = false;
                                tag = "sapiente";
                                ticker = "quo";
                                title = "Mr.";
                                titleLocArgs = new String[]{{
                                    add("at"),
                                    add("maiores"),
                                    add("molestiae"),
                                    add("quod"),
                                }};
                                titleLocKey = "quod";
                                vibrateTimings = new String[]{{
                                    add("totam"),
                                    add("porro"),
                                }};
                                visibility = AndroidNotificationVisibilityEnum.PUBLIC_;
                            }};;
                            priority = AndroidConfigPriorityEnum.NORMAL;
                            restrictedPackageName = "nam";
                            ttl = "officia";
                        }};;
                        apns = new ApnsConfig() {{
                            fcmOptions = new ApnsFcmOptions() {{
                                analyticsLabel = "occaecati";
                                image = "fugit";
                            }};;
                            headers = new java.util.HashMap<String, String>() {{
                                put("hic", "optio");
                                put("totam", "beatae");
                                put("commodi", "molestiae");
                            }};
                            payload = new java.util.HashMap<String, Object>() {{
                                put("qui", "impedit");
                                put("cum", "esse");
                            }};
                        }};;
                        condition = "ipsum";
                        data = new java.util.HashMap<String, String>() {{
                            put("aspernatur", "perferendis");
                            put("ad", "natus");
                            put("sed", "iste");
                        }};
                        fcmOptions = new FcmOptions() {{
                            analyticsLabel = "dolor";
                        }};;
                        name = "Lester Welch";
                        notification = new Notification() {{
                            body = "in";
                            image = "corporis";
                            title = "Miss";
                        }};;
                        token = "iure";
                        topic = "saepe";
                        webpush = new WebpushConfig() {{
                            data = new java.util.HashMap<String, String>() {{
                                put("architecto", "ipsa");
                                put("reiciendis", "est");
                                put("mollitia", "laborum");
                            }};
                            fcmOptions = new WebpushFcmOptions() {{
                                analyticsLabel = "dolores";
                                link = "dolorem";
                            }};;
                            headers = new java.util.HashMap<String, String>() {{
                                put("explicabo", "nobis");
                                put("enim", "omnis");
                            }};
                            notification = new java.util.HashMap<String, Object>() {{
                                put("minima", "excepturi");
                                put("accusantium", "iure");
                            }};
                        }};;
                    }};;
                    validateOnly = false;
                }};;
                accessToken = "culpa";
                alt = AltEnum.PROTO;
                callback = "sapiente";
                fields = "architecto";
                key = "mollitia";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "culpa";
                uploadType = "consequuntur";
                uploadProtocol = "repellat";
            }};            

            FcmProjectsMessagesSendResponse res = sdk.projects.fcmProjectsMessagesSend(req, new FcmProjectsMessagesSendSecurity() {{
                option1 = new FcmProjectsMessagesSendSecurityOption1("mollitia", "occaecati") {{
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