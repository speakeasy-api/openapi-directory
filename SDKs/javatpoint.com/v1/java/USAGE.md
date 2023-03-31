<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FcmProjectsMessagesSendSecurityOption1;
import org.openapis.openapi.models.operations.FcmProjectsMessagesSendSecurityOption2;
import org.openapis.openapi.models.operations.FcmProjectsMessagesSendSecurity;
import org.openapis.openapi.models.operations.FcmProjectsMessagesSendPathParams;
import org.openapis.openapi.models.operations.FcmProjectsMessagesSendQueryParams;
import org.openapis.openapi.models.operations.FcmProjectsMessagesSendRequest;
import org.openapis.openapi.models.operations.FcmProjectsMessagesSendResponse;
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
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FcmProjectsMessagesSendRequest req = new FcmProjectsMessagesSendRequest() {{
                security = new FcmProjectsMessagesSendSecurity() {{
                    option1 = new FcmProjectsMessagesSendSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new FcmProjectsMessagesSendPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new FcmProjectsMessagesSendQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new SendMessageRequest() {{
                    message = new Message() {{
                        android = new AndroidConfig() {{
                            collapseKey = "suscipit";
                            data = new java.util.HashMap<String, String>() {{
                                put("magnam", "debitis");
                                put("ipsa", "delectus");
                            }};
                            directBootOk = false;
                            fcmOptions = new AndroidFcmOptions() {{
                                analyticsLabel = "tempora";
                            }};
                            notification = new AndroidNotification() {{
                                body = "suscipit";
                                bodyLocArgs = new String[]{{
                                    add("minus"),
                                    add("placeat"),
                                }};
                                bodyLocKey = "voluptatum";
                                bypassProxyNotification = false;
                                channelId = "iusto";
                                clickAction = "excepturi";
                                color = "nisi";
                                defaultLightSettings = false;
                                defaultSound = false;
                                defaultVibrateTimings = false;
                                eventTime = "recusandae";
                                icon = "temporibus";
                                image = "ab";
                                lightSettings = new LightSettings() {{
                                    color = new Color() {{
                                        alpha = 3373.96;
                                        blue = 871.29;
                                        green = 6481.72;
                                        red = 202.18;
                                    }};
                                    lightOffDuration = "ipsam";
                                    lightOnDuration = "repellendus";
                                }};
                                localOnly = false;
                                notificationCount = 957156;
                                notificationPriority = "PRIORITY_HIGH";
                                sound = "odit";
                                sticky = false;
                                tag = "at";
                                ticker = "at";
                                title = "Dr.";
                                titleLocArgs = new String[]{{
                                    add("quod"),
                                    add("quod"),
                                }};
                                titleLocKey = "esse";
                                vibrateTimings = new String[]{{
                                    add("porro"),
                                    add("dolorum"),
                                    add("dicta"),
                                }};
                                visibility = "PUBLIC";
                            }};
                            priority = "HIGH";
                            restrictedPackageName = "occaecati";
                            ttl = "fugit";
                        }};
                        apns = new ApnsConfig() {{
                            fcmOptions = new ApnsFcmOptions() {{
                                analyticsLabel = "deleniti";
                                image = "hic";
                            }};
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
                        }};
                        condition = "ad";
                        data = new java.util.HashMap<String, String>() {{
                            put("sed", "iste");
                            put("dolor", "natus");
                            put("laboriosam", "hic");
                        }};
                        fcmOptions = new FcmOptions() {{
                            analyticsLabel = "saepe";
                        }};
                        name = "fuga";
                        notification = new Notification() {{
                            body = "in";
                            image = "corporis";
                            title = "Miss";
                        }};
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
                            }};
                            headers = new java.util.HashMap<String, String>() {{
                                put("explicabo", "nobis");
                                put("enim", "omnis");
                            }};
                            notification = new java.util.HashMap<String, Object>() {{
                                put("minima", "excepturi");
                                put("accusantium", "iure");
                            }};
                        }};
                    }};
                    validateOnly = false;
                }};
            }};            

            FcmProjectsMessagesSendResponse res = sdk.projects.fcmProjectsMessagesSend(req);

            if (res.message.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->