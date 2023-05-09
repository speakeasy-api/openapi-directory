<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeAbuseReportsInsertRequest;
import org.openapis.openapi.models.operations.YoutubeAbuseReportsInsertResponse;
import org.openapis.openapi.models.operations.YoutubeAbuseReportsInsertSecurity;
import org.openapis.openapi.models.operations.YoutubeAbuseReportsInsertSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeAbuseReportsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AbuseReport;
import org.openapis.openapi.models.shared.AbuseType;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Entity;
import org.openapis.openapi.models.shared.RelatedEntity;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeAbuseReportsInsertRequest req = new YoutubeAbuseReportsInsertRequest(                new String[]{{
                                add("provident"),
                                add("distinctio"),
                                add("quibusdam"),
                            }}) {{
                dollarXgafv = XgafvEnum.TWO;
                abuseReport = new AbuseReport() {{
                    abuseTypes = new org.openapis.openapi.models.shared.AbuseType[]{{
                        add(new AbuseType() {{
                            id = "8d69a674-e0f4-467c-8879-6ed151a05dfc";
                        }}),
                        add(new AbuseType() {{
                            id = "2ddf7cc7-8ca1-4ba9-a8fc-816742cb7392";
                        }}),
                        add(new AbuseType() {{
                            id = "05929396-fea7-4596-ab10-faaa2352c595";
                        }}),
                        add(new AbuseType() {{
                            id = "5907aff1-a3a2-4fa9-8677-39251aa52c3f";
                        }}),
                    }};
                    description = "ipsam";
                    relatedEntities = new org.openapis.openapi.models.shared.RelatedEntity[]{{
                        add(new RelatedEntity() {{
                            entity = new Entity() {{
                                id = "d019da1f-fe78-4f09-bb00-74f15471b5e6";
                                typeId = "repudiandae";
                                url = "quae";
                            }};
                        }}),
                        add(new RelatedEntity() {{
                            entity = new Entity() {{
                                id = "3b99d488-e1e9-41e4-90ad-2abd44269802";
                                typeId = "assumenda";
                                url = "ipsam";
                            }};
                        }}),
                        add(new RelatedEntity() {{
                            entity = new Entity() {{
                                id = "02a94bb4-f63c-4969-a9a3-efa77dfb14cd";
                                typeId = "ea";
                                url = "aliquid";
                            }};
                        }}),
                    }};
                    subject = new Entity() {{
                        id = "ae395efb-9ba8-48f3-a669-97074ba4469b";
                        typeId = "eum";
                        url = "vero";
                    }};;
                }};;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "magnam";
                fields = "et";
                key = "excepturi";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "quos";
                uploadProtocol = "sint";
            }};            

            YoutubeAbuseReportsInsertResponse res = sdk.abuseReports.youtubeAbuseReportsInsert(req, new YoutubeAbuseReportsInsertSecurity() {{
                option1 = new YoutubeAbuseReportsInsertSecurityOption1("accusantium", "mollitia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.abuseReport != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->