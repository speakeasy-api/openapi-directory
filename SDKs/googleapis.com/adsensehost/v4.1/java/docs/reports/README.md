# reports

### Available Operations

* [adsensehostReportsGenerate](#adsensehostreportsgenerate) - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

## adsensehostReportsGenerate

Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsensehostReportsGenerateRequest;
import org.openapis.openapi.models.operations.AdsensehostReportsGenerateResponse;
import org.openapis.openapi.models.operations.AdsensehostReportsGenerateSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensehostReportsGenerateRequest req = new AdsensehostReportsGenerateRequest("distinctio", "quod") {{
                alt = AltEnum.CSV;
                dimension = new String[]{{
                    add("facilis"),
                    add("vero"),
                    add("ducimus"),
                }};
                fields = "dolore";
                filter = new String[]{{
                    add("illum"),
                    add("sequi"),
                    add("natus"),
                    add("impedit"),
                }};
                key = "aut";
                locale = "voluptatibus";
                maxResults = 347233L;
                metric = new String[]{{
                    add("fugit"),
                    add("porro"),
                    add("maiores"),
                    add("doloribus"),
                }};
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "eligendi";
                sort = new String[]{{
                    add("alias"),
                    add("officia"),
                }};
                startIndex = 269479L;
                userIp = "ipsam";
            }};            

            AdsensehostReportsGenerateResponse res = sdk.reports.adsensehostReportsGenerate(req, new AdsensehostReportsGenerateSecurity("ea", "aspernatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.report != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
