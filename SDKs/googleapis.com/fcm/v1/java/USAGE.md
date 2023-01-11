<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    parent = "sit";
                }};
                queryParams = new FcmProjectsMessagesSendQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new SendMessageRequest() {{
                    message = new Message() {{
                        android = new AndroidConfig() {{
                            collapseKey = "dicta";
                            data = new java.util.HashMap<String, String>() {{
                                put("voluptatum", "et");
                            }};
                            directBootOk = false;
                            fcmOptions = new AndroidFcmOptions() {{
                                analyticsLabel = "dolorem";
                            }};
                            notification = new AndroidNotification() {{
                                body = "et";
                                bodyLocArgs = new String[]() {{
                                    add("iste"),
                                }};
                                bodyLocKey = "vitae";
                                bypassProxyNotification = true;
                                channelId = "dolores";
                                clickAction = "illum";
                                color = "debitis";
                                defaultLightSettings = false;
                                defaultSound = false;
                                defaultVibrateTimings = true;
                                eventTime = "id";
                                icon = "aspernatur";
                                image = "accusantium";
                                lightSettings = new LightSettings() {{
                                    color = new Color() {{
                                        alpha = 45.099998;
                                        blue = 78.199997;
                                        green = 0.100000;
                                        red = 49.099998;
                                    }};
                                    lightOffDuration = "omnis";
                                    lightOnDuration = "aut";
                                }};
                                localOnly = true;
                                notificationCount = 5558237345453186302;
                                notificationPriority = "PRIORITY_MIN";
                                sound = "autem";
                                sticky = true;
                                tag = "nobis";
                                ticker = "odio";
                                title = "qui";
                                titleLocArgs = new String[]() {{
                                    add("at"),
                                    add("ipsum"),
                                    add("eveniet"),
                                }};
                                titleLocKey = "modi";
                                vibrateTimings = new String[]() {{
                                    add("inventore"),
                                }};
                                visibility = "PUBLIC";
                            }};
                            priority = "NORMAL";
                            restrictedPackageName = "aut";
                            ttl = "reprehenderit";
                        }};
                        apns = new ApnsConfig() {{
                            fcmOptions = new ApnsFcmOptions() {{
                                analyticsLabel = "tempore";
                                image = "maiores";
                            }};
                            headers = new java.util.HashMap<String, String>() {{
                                put("dolor", "beatae");
                                put("veritatis", "in");
                                put("et", "omnis");
                            }};
                            payload = new java.util.HashMap<String, Object>() {{
                                put("ex", "dolores");
                            }};
                        }};
                        condition = "placeat";
                        data = new java.util.HashMap<String, String>() {{
                            put("rerum", "mollitia");
                            put("voluptas", "quam");
                        }};
                        fcmOptions = new FcmOptions() {{
                            analyticsLabel = "reprehenderit";
                        }};
                        name = "qui";
                        notification = new Notification() {{
                            body = "qui";
                            image = "unde";
                            title = "in";
                        }};
                        token = "autem";
                        topic = "qui";
                        webpush = new WebpushConfig() {{
                            data = new java.util.HashMap<String, String>() {{
                                put("itaque", "ab");
                                put("neque", "ullam");
                                put("et", "accusantium");
                            }};
                            fcmOptions = new WebpushFcmOptions() {{
                                analyticsLabel = "esse";
                                link = "architecto";
                            }};
                            headers = new java.util.HashMap<String, String>() {{
                                put("velit", "cumque");
                            }};
                            notification = new java.util.HashMap<String, Object>() {{
                                put("sunt", "voluptates");
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