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
                    parent = "deserunt";
                }};
                queryParams = new FcmProjectsMessagesSendQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "sunt";
                    alt = "media";
                    callback = "amet";
                    fields = "omnis";
                    key = "eos";
                    oauthToken = "necessitatibus";
                    prettyPrint = false;
                    quotaUser = "voluptas";
                    uploadType = "hic";
                    uploadProtocol = "et";
                }};
                request = new SendMessageRequest() {{
                    message = new Message() {{
                        android = new AndroidConfig() {{
                            collapseKey = "rerum";
                            data = new java.util.HashMap<String, String>() {{
                                put("et", "omnis");
                                put("quia", "maiores");
                                put("veniam", "quia");
                            }};
                            directBootOk = true;
                            fcmOptions = new AndroidFcmOptions() {{
                                analyticsLabel = "omnis";
                            }};
                            notification = new AndroidNotification() {{
                                body = "iusto";
                                bodyLocArgs = new String[]() {{
                                    add("ducimus"),
                                    add("quia"),
                                    add("est"),
                                }};
                                bodyLocKey = "amet";
                                bypassProxyNotification = true;
                                channelId = "ut";
                                clickAction = "soluta";
                                color = "tempora";
                                defaultLightSettings = false;
                                defaultSound = true;
                                defaultVibrateTimings = true;
                                eventTime = "qui";
                                icon = "exercitationem";
                                image = "saepe";
                                lightSettings = new LightSettings() {{
                                    color = new Color() {{
                                        alpha = 60.200001;
                                        blue = 67.099998;
                                        green = 42.200001;
                                        red = 57.200001;
                                    }};
                                    lightOffDuration = "maiores";
                                    lightOnDuration = "quia";
                                }};
                                localOnly = false;
                                notificationCount = 6137466947054968535;
                                notificationPriority = "PRIORITY_MAX";
                                sound = "labore";
                                sticky = true;
                                tag = "optio";
                                ticker = "ut";
                                title = "fuga";
                                titleLocArgs = new String[]() {{
                                    add("ea"),
                                    add("ut"),
                                }};
                                titleLocKey = "quia";
                                vibrateTimings = new String[]() {{
                                    add("eum"),
                                }};
                                visibility = "PRIVATE";
                            }};
                            priority = "HIGH";
                            restrictedPackageName = "est";
                            ttl = "quod";
                        }};
                        apns = new ApnsConfig() {{
                            fcmOptions = new ApnsFcmOptions() {{
                                analyticsLabel = "rerum";
                                image = "dolorem";
                            }};
                            headers = new java.util.HashMap<String, String>() {{
                                put("optio", "occaecati");
                                put("aspernatur", "vel");
                                put("et", "odit");
                            }};
                            payload = new java.util.HashMap<String, Object>() {{
                                put("modi", "sed");
                                put("earum", "aut");
                            }};
                        }};
                        condition = "corrupti";
                        data = new java.util.HashMap<String, String>() {{
                            put("soluta", "nam");
                            put("corrupti", "minima");
                        }};
                        fcmOptions = new FcmOptions() {{
                            analyticsLabel = "et";
                        }};
                        name = "aperiam";
                        notification = new Notification() {{
                            body = "excepturi";
                            image = "debitis";
                            title = "omnis";
                        }};
                        token = "illum";
                        topic = "minima";
                        webpush = new WebpushConfig() {{
                            data = new java.util.HashMap<String, String>() {{
                                put("laudantium", "ut");
                                put("recusandae", "tempore");
                            }};
                            fcmOptions = new WebpushFcmOptions() {{
                                analyticsLabel = "itaque";
                                link = "fugit";
                            }};
                            headers = new java.util.HashMap<String, String>() {{
                                put("sint", "aut");
                                put("temporibus", "ea");
                                put("ducimus", "necessitatibus");
                            }};
                            notification = new java.util.HashMap<String, Object>() {{
                                put("culpa", "ea");
                                put("eos", "sint");
                            }};
                        }};
                    }};
                    validateOnly = true;
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