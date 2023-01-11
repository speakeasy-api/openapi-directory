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
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    key = "dolor";
                    oauthToken = "expedita";
                    part = new String[]() {{
                        add("fugit"),
                        add("et"),
                        add("nihil"),
                    }};
                    prettyPrint = true;
                    quotaUser = "dicta";
                    uploadType = "debitis";
                    uploadProtocol = "voluptatum";
                }};
                request = new AbuseReport() {{
                    abuseTypes = new openapisdk.models.shared.AbuseType[]() {{
                        add(new AbuseType() {{
                            id = "ut";
                        }}),
                    }};
                    description = "dolorem";
                    relatedEntities = new openapisdk.models.shared.RelatedEntity[]() {{
                        add(new RelatedEntity() {{
                            entity = new Entity() {{
                                id = "voluptate";
                                typeId = "iste";
                                url = "vitae";
                            }};
                        }}),
                        add(new RelatedEntity() {{
                            entity = new Entity() {{
                                id = "totam";
                                typeId = "dolores";
                                url = "illum";
                            }};
                        }}),
                    }};
                    subject = new Entity() {{
                        id = "debitis";
                        typeId = "vel";
                        url = "odio";
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