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

            YoutubeAbuseReportsInsertRequest req = new YoutubeAbuseReportsInsertRequest() {{
                security = new YoutubeAbuseReportsInsertSecurity() {{
                    option1 = new YoutubeAbuseReportsInsertSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new YoutubeAbuseReportsInsertQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "pariatur";
                    alt = "json";
                    callback = "dolorem";
                    fields = "debitis";
                    key = "necessitatibus";
                    oauthToken = "doloribus";
                    part = new String[]() {{
                        add("est"),
                        add("rerum"),
                        add("laborum"),
                    }};
                    prettyPrint = true;
                    quotaUser = "non";
                    uploadType = "molestias";
                    uploadProtocol = "eum";
                }};
                request = new AbuseReport() {{
                    abuseTypes = new openapisdk.models.shared.AbuseType[]() {{
                        add(new AbuseType() {{
                            id = "quae";
                        }}),
                        add(new AbuseType() {{
                            id = "vel";
                        }}),
                        add(new AbuseType() {{
                            id = "ut";
                        }}),
                    }};
                    description = "ea";
                    relatedEntities = new openapisdk.models.shared.RelatedEntity[]() {{
                        add(new RelatedEntity() {{
                            entity = new Entity() {{
                                id = "quod";
                                typeId = "et";
                                url = "aut";
                            }};
                        }}),
                        add(new RelatedEntity() {{
                            entity = new Entity() {{
                                id = "error";
                                typeId = "nulla";
                                url = "quia";
                            }};
                        }}),
                        add(new RelatedEntity() {{
                            entity = new Entity() {{
                                id = "vel";
                                typeId = "quis";
                                url = "qui";
                            }};
                        }}),
                    }};
                    subject = new Entity() {{
                        id = "sint";
                        typeId = "et";
                        url = "et";
                    }};
                }};
            }};

            YoutubeAbuseReportsInsertResponse res = sdk.abuseReports.youtubeAbuseReportsInsert(req);

            if (res.abuseReport.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->