# tabledata

### Available Operations

* [bigqueryTabledataInsertAll](#bigquerytabledatainsertall) - Streams data into BigQuery one record at a time without needing to run a load job. Requires the WRITER dataset role.
* [bigqueryTabledataList](#bigquerytabledatalist) - Retrieves table data from a specified set of rows. Requires the READER dataset role.

## bigqueryTabledataInsertAll

Streams data into BigQuery one record at a time without needing to run a load job. Requires the WRITER dataset role.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryTabledataInsertAllRequest;
import org.openapis.openapi.models.operations.BigqueryTabledataInsertAllResponse;
import org.openapis.openapi.models.operations.BigqueryTabledataInsertAllSecurity;
import org.openapis.openapi.models.operations.BigqueryTabledataInsertAllSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryTabledataInsertAllSecurityOption2;
import org.openapis.openapi.models.operations.BigqueryTabledataInsertAllSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TableDataInsertAllRequest;
import org.openapis.openapi.models.shared.TableDataInsertAllRequestRows;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryTabledataInsertAllRequest req = new BigqueryTabledataInsertAllRequest("ratione", "fuga", "minima") {{
                tableDataInsertAllRequest = new TableDataInsertAllRequest() {{
                    ignoreUnknownValues = false;
                    kind = "aliquid";
                    rows = new org.openapis.openapi.models.shared.TableDataInsertAllRequestRows[]{{
                        add(new TableDataInsertAllRequestRows() {{
                            insertId = "laboriosam";
                            json = new java.util.HashMap<String, Object>() {{
                                put("architecto", "totam");
                                put("alias", "hic");
                                put("tenetur", "iure");
                            }};
                        }}),
                        add(new TableDataInsertAllRequestRows() {{
                            insertId = "consequatur";
                            json = new java.util.HashMap<String, Object>() {{
                                put("cum", "occaecati");
                                put("fuga", "ex");
                                put("autem", "nostrum");
                                put("atque", "saepe");
                            }};
                        }}),
                        add(new TableDataInsertAllRequestRows() {{
                            insertId = "eum";
                            json = new java.util.HashMap<String, Object>() {{
                                put("fuga", "non");
                                put("nam", "totam");
                                put("ut", "non");
                            }};
                        }}),
                        add(new TableDataInsertAllRequestRows() {{
                            insertId = "illum";
                            json = new java.util.HashMap<String, Object>() {{
                                put("totam", "explicabo");
                            }};
                        }}),
                    }};
                    skipInvalidRows = false;
                    templateSuffix = "quibusdam";
                }};;
                alt = AltEnum.JSON;
                fields = "harum";
                key = "itaque";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "ducimus";
                userIp = "ad";
            }};            

            BigqueryTabledataInsertAllResponse res = sdk.tabledata.bigqueryTabledataInsertAll(req, new BigqueryTabledataInsertAllSecurity() {{
                option1 = new BigqueryTabledataInsertAllSecurityOption1("optio", "ea") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.tableDataInsertAllResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryTabledataList

Retrieves table data from a specified set of rows. Requires the READER dataset role.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryTabledataListRequest;
import org.openapis.openapi.models.operations.BigqueryTabledataListResponse;
import org.openapis.openapi.models.operations.BigqueryTabledataListSecurity;
import org.openapis.openapi.models.operations.BigqueryTabledataListSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryTabledataListSecurityOption2;
import org.openapis.openapi.models.operations.BigqueryTabledataListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryTabledataListRequest req = new BigqueryTabledataListRequest("corrupti", "minus", "autem") {{
                alt = AltEnum.JSON;
                fields = "aut";
                key = "nisi";
                maxResults = 332831L;
                oauthToken = "cupiditate";
                pageToken = "aliquam";
                prettyPrint = false;
                quotaUser = "suscipit";
                selectedFields = "atque";
                startIndex = "minus";
                userIp = "debitis";
            }};            

            BigqueryTabledataListResponse res = sdk.tabledata.bigqueryTabledataList(req, new BigqueryTabledataListSecurity() {{
                option1 = new BigqueryTabledataListSecurityOption1("neque", "doloremque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.tableDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
