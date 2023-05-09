# projects

### Available Operations

* [fcmProjectsMessagesSend](#fcmprojectsmessagessend) - Send a message to specified target (a registration token, topic or condition).

## fcmProjectsMessagesSend

Send a message to specified target (a registration token, topic or condition).

### Example Usage

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

            FcmProjectsMessagesSendRequest req = new FcmProjectsMessagesSendRequest("numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                sendMessageRequest = new SendMessageRequest() {{
                    message = new Message() {{
                        android = new AndroidConfig() {{
                            collapseKey = "quam";
                            data = new java.util.HashMap<String, String>() {{
                                put("velit", "error");
                                put("quia", "quis");
                            }};
                            directBootOk = false;
                            fcmOptions = new AndroidFcmOptions() {{
                                analyticsLabel = "vitae";
                            }};;
                            notification = new AndroidNotification() {{
                                body = "laborum";
                                bodyLocArgs = new String[]{{
                                    add("enim"),
                                    add("odit"),
                                    add("quo"),
                                }};
                                bodyLocKey = "sequi";
                                bypassProxyNotification = false;
                                channelId = "tenetur";
                                clickAction = "ipsam";
                                color = "id";
                                defaultLightSettings = false;
                                defaultSound = false;
                                defaultVibrateTimings = false;
                                eventTime = "possimus";
                                icon = "aut";
                                image = "quasi";
                                lightSettings = new LightSettings() {{
                                    color = new Color() {{
                                        alpha = 6228.46;
                                        blue = 8379.45;
                                        green = 6736.6;
                                        red = 960.98;
                                    }};;
                                    lightOffDuration = "reiciendis";
                                    lightOnDuration = "voluptatibus";
                                }};;
                                localOnly = false;
                                notificationCount = 878194;
                                notificationPriority = AndroidNotificationNotificationPriorityEnum.PRIORITY_LOW;
                                sound = "praesentium";
                                sticky = false;
                                tag = "voluptatibus";
                                ticker = "ipsa";
                                title = "Miss";
                                titleLocArgs = new String[]{{
                                    add("cum"),
                                    add("perferendis"),
                                }};
                                titleLocKey = "doloremque";
                                vibrateTimings = new String[]{{
                                    add("ut"),
                                    add("maiores"),
                                }};
                                visibility = AndroidNotificationVisibilityEnum.VISIBILITY_UNSPECIFIED;
                            }};;
                            priority = AndroidConfigPriorityEnum.NORMAL;
                            restrictedPackageName = "dolore";
                            ttl = "iusto";
                        }};;
                        apns = new ApnsConfig() {{
                            fcmOptions = new ApnsFcmOptions() {{
                                analyticsLabel = "dicta";
                                image = "harum";
                            }};;
                            headers = new java.util.HashMap<String, String>() {{
                                put("accusamus", "commodi");
                                put("repudiandae", "quae");
                            }};
                            payload = new java.util.HashMap<String, Object>() {{
                                put("quidem", "molestias");
                            }};
                        }};;
                        condition = "excepturi";
                        data = new java.util.HashMap<String, String>() {{
                            put("modi", "praesentium");
                            put("rem", "voluptates");
                            put("quasi", "repudiandae");
                            put("sint", "veritatis");
                        }};
                        fcmOptions = new FcmOptions() {{
                            analyticsLabel = "itaque";
                        }};;
                        name = "Erin Altenwerth";
                        notification = new Notification() {{
                            body = "explicabo";
                            image = "deserunt";
                            title = "Miss";
                        }};;
                        token = "quibusdam";
                        topic = "labore";
                        webpush = new WebpushConfig() {{
                            data = new java.util.HashMap<String, String>() {{
                                put("qui", "aliquid");
                                put("cupiditate", "quos");
                            }};
                            fcmOptions = new WebpushFcmOptions() {{
                                analyticsLabel = "perferendis";
                                link = "magni";
                            }};;
                            headers = new java.util.HashMap<String, String>() {{
                                put("ipsam", "alias");
                                put("fugit", "dolorum");
                                put("excepturi", "tempora");
                                put("facilis", "tempore");
                            }};
                            notification = new java.util.HashMap<String, Object>() {{
                                put("delectus", "eum");
                                put("non", "eligendi");
                            }};
                        }};;
                    }};;
                    validateOnly = false;
                }};;
                accessToken = "sint";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "necessitatibus";
                key = "sint";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "debitis";
                uploadProtocol = "a";
            }};            

            FcmProjectsMessagesSendResponse res = sdk.projects.fcmProjectsMessagesSend(req, new FcmProjectsMessagesSendSecurity() {{
                option1 = new FcmProjectsMessagesSendSecurityOption1("dolorum", "in") {{
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
