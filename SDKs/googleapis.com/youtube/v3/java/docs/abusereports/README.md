# abuseReports

### Available Operations

* [youtubeAbuseReportsInsert](#youtubeabusereportsinsert) - Inserts a new resource into this collection.

## youtubeAbuseReportsInsert

Inserts a new resource into this collection.

### Example Usage

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
                                add("mollitia"),
                                add("ad"),
                                add("eum"),
                                add("dolor"),
                            }}) {{
                dollarXgafv = XgafvEnum.TWO;
                abuseReport = new AbuseReport() {{
                    abuseTypes = new org.openapis.openapi.models.shared.AbuseType[]{{
                        add(new AbuseType() {{
                            id = "516fe4c8-b711-4e5b-bfd2-ed028921cddc";
                        }}),
                    }};
                    description = "ea";
                    relatedEntities = new org.openapis.openapi.models.shared.RelatedEntity[]{{
                        add(new RelatedEntity() {{
                            entity = new Entity() {{
                                id = "2601fb57-6b0d-45f0-930c-5fbb25870532";
                                typeId = "perferendis";
                                url = "dolores";
                            }};
                        }}),
                        add(new RelatedEntity() {{
                            entity = new Entity() {{
                                id = "c73d5fe9-b90c-4289-89b3-fe49a8d9cbf4";
                                typeId = "quos";
                                url = "aliquid";
                            }};
                        }}),
                        add(new RelatedEntity() {{
                            entity = new Entity() {{
                                id = "33323f9b-77f3-4a41-8067-4ebf69280d1b";
                                typeId = "dolorum";
                                url = "iusto";
                            }};
                        }}),
                    }};
                    subject = new Entity() {{
                        id = "7a89ebf7-37ae-4420-bce5-e6a95d8a0d44";
                        typeId = "vel";
                        url = "quod";
                    }};;
                }};;
                accessToken = "officiis";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "a";
                key = "esse";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "ipsum";
                uploadProtocol = "quisquam";
            }};            

            YoutubeAbuseReportsInsertResponse res = sdk.abuseReports.youtubeAbuseReportsInsert(req, new YoutubeAbuseReportsInsertSecurity() {{
                option1 = new YoutubeAbuseReportsInsertSecurityOption1("tenetur", "amet") {{
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
