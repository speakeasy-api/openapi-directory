<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.YoutubeAbuseReportsInsertSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeAbuseReportsInsertSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeAbuseReportsInsertSecurity;
import org.openapis.openapi.models.operations.YoutubeAbuseReportsInsertQueryParams;
import org.openapis.openapi.models.operations.YoutubeAbuseReportsInsertRequest;
import org.openapis.openapi.models.operations.YoutubeAbuseReportsInsertResponse;
import org.openapis.openapi.models.shared.AbuseReport;
import org.openapis.openapi.models.shared.Entity;
import org.openapis.openapi.models.shared.RelatedEntity;
import org.openapis.openapi.models.shared.AbuseType;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    part = new String[]{{
                        add("vel"),
                        add("error"),
                        add("deserunt"),
                        add("suscipit"),
                    }};
                    prettyPrint = false;
                    quotaUser = "iure";
                    uploadType = "magnam";
                    uploadProtocol = "debitis";
                }};
                request = new AbuseReport() {{
                    abuseTypes = new org.openapis.openapi.models.shared.AbuseType[]{{
                        add(new AbuseType() {{
                            id = "delectus";
                        }}),
                    }};
                    description = "tempora";
                    relatedEntities = new org.openapis.openapi.models.shared.RelatedEntity[]{{
                        add(new RelatedEntity() {{
                            entity = new Entity() {{
                                id = "molestiae";
                                typeId = "minus";
                                url = "placeat";
                            }};
                        }}),
                        add(new RelatedEntity() {{
                            entity = new Entity() {{
                                id = "voluptatum";
                                typeId = "iusto";
                                url = "excepturi";
                            }};
                        }}),
                    }};
                    subject = new Entity() {{
                        id = "nisi";
                        typeId = "recusandae";
                        url = "temporibus";
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