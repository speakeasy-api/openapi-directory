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

            FcmProjectsMessagesSendRequest req = new FcmProjectsMessagesSendRequest("animi") {{
                dollarXgafv = XgafvEnum.ONE;
                sendMessageRequest = new SendMessageRequest() {{
                    message = new Message() {{
                        android = new AndroidConfig() {{
                            collapseKey = "odit";
                            data = new java.util.HashMap<String, String>() {{
                                put("sequi", "tenetur");
                                put("ipsam", "id");
                                put("possimus", "aut");
                                put("quasi", "error");
                            }};
                            directBootOk = false;
                            fcmOptions = new AndroidFcmOptions() {{
                                analyticsLabel = "temporibus";
                            }};;
                            notification = new AndroidNotification() {{
                                body = "laborum";
                                bodyLocArgs = new String[]{{
                                    add("reiciendis"),
                                }};
                                bodyLocKey = "voluptatibus";
                                bypassProxyNotification = false;
                                channelId = "vero";
                                clickAction = "nihil";
                                color = "praesentium";
                                defaultLightSettings = false;
                                defaultSound = false;
                                defaultVibrateTimings = false;
                                eventTime = "voluptatibus";
                                icon = "ipsa";
                                image = "omnis";
                                lightSettings = new LightSettings() {{
                                    color = new Color() {{
                                        alpha = 4511.59;
                                        blue = 7392.64;
                                        green = 199.87;
                                        red = 391.87;
                                    }};;
                                    lightOffDuration = "reprehenderit";
                                    lightOnDuration = "ut";
                                }};;
                                localOnly = false;
                                notificationCount = 979587;
                                notificationPriority = AndroidNotificationNotificationPriorityEnum.PRIORITY_UNSPECIFIED;
                                proxy = AndroidNotificationProxyEnum.ALLOW;
                                sound = "dolore";
                                sticky = false;
                                tag = "iusto";
                                ticker = "dicta";
                                title = "Miss";
                                titleLocArgs = new String[]{{
                                    add("accusamus"),
                                    add("commodi"),
                                }};
                                titleLocKey = "repudiandae";
                                vibrateTimings = new String[]{{
                                    add("ipsum"),
                                }};
                                visibility = AndroidNotificationVisibilityEnum.PUBLIC_;
                            }};;
                            priority = AndroidConfigPriorityEnum.HIGH;
                            restrictedPackageName = "excepturi";
                            ttl = "pariatur";
                        }};;
                        apns = new ApnsConfig() {{
                            fcmOptions = new ApnsFcmOptions() {{
                                analyticsLabel = "modi";
                                image = "praesentium";
                            }};;
                            headers = new java.util.HashMap<String, String>() {{
                                put("voluptates", "quasi");
                                put("repudiandae", "sint");
                                put("veritatis", "itaque");
                            }};
                            payload = new java.util.HashMap<String, Object>() {{
                                put("enim", "consequatur");
                                put("est", "quibusdam");
                            }};
                        }};;
                        condition = "explicabo";
                        data = new java.util.HashMap<String, String>() {{
                            put("distinctio", "quibusdam");
                            put("labore", "modi");
                            put("qui", "aliquid");
                        }};
                        fcmOptions = new FcmOptions() {{
                            analyticsLabel = "cupiditate";
                        }};;
                        name = "Christopher Cummerata";
                        notification = new Notification() {{
                            body = "alias";
                            image = "fugit";
                            title = "Miss";
                        }};;
                        token = "excepturi";
                        topic = "tempora";
                        webpush = new WebpushConfig() {{
                            data = new java.util.HashMap<String, String>() {{
                                put("tempore", "labore");
                                put("delectus", "eum");
                                put("non", "eligendi");
                            }};
                            fcmOptions = new WebpushFcmOptions() {{
                                analyticsLabel = "sint";
                                link = "aliquid";
                            }};;
                            headers = new java.util.HashMap<String, String>() {{
                                put("necessitatibus", "sint");
                                put("officia", "dolor");
                                put("debitis", "a");
                            }};
                            notification = new java.util.HashMap<String, Object>() {{
                                put("in", "in");
                                put("illum", "maiores");
                                put("rerum", "dicta");
                            }};
                        }};;
                    }};;
                    validateOnly = false;
                }};;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "facere";
                fields = "ea";
                key = "aliquid";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "non";
                uploadProtocol = "occaecati";
            }};            

            FcmProjectsMessagesSendResponse res = sdk.projects.fcmProjectsMessagesSend(req, new FcmProjectsMessagesSendSecurity() {{
                option1 = new FcmProjectsMessagesSendSecurityOption1("enim", "accusamus") {{
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
