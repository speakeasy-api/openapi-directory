# documents

### Available Operations

* [mergeTemplate](#mergetemplate) - Generate document
* [mergeTemplates](#mergetemplates) - Generate document (multiple templates)

## mergeTemplate

Merges template with data and returns base64 encoded document or a public URL to a document. You can send json encoded data in request body or a public URL to your json file as the data parameter. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MergeTemplateRequest;
import org.openapis.openapi.models.operations.MergeTemplateResponse;
import org.openapis.openapi.models.shared.Data;
import org.openapis.openapi.models.shared.FormatEnum;
import org.openapis.openapi.models.shared.OutputEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    jsonWebTokenAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            MergeTemplateRequest req = new MergeTemplateRequest(                new Data() {{
                                id = 12312L;
                                name = "Sample Data";
                            }};, 19375L) {{
                format = FormatEnum.PDF;
                name = "My document";
                output = OutputEnum.BASE64;
            }};            

            MergeTemplateResponse res = sdk.documents.mergeTemplate(req);

            if (res.mergeTemplate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mergeTemplates

Allows to merge multiples template with data and returns base64 encoded document or public URL to a document. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MergeTemplatesRequest;
import org.openapis.openapi.models.operations.MergeTemplatesResponse;
import org.openapis.openapi.models.shared.BatchData;
import org.openapis.openapi.models.shared.Data;
import org.openapis.openapi.models.shared.FormatEnum;
import org.openapis.openapi.models.shared.OutputEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    jsonWebTokenAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            MergeTemplatesRequest req = new MergeTemplatesRequest(                new org.openapis.openapi.models.shared.BatchData[]{{
                                add(new BatchData() {{
                                    data = new Data() {{
                                        id = 12312L;
                                        name = "Sample Data";
                                    }};
                                    template = 52272L;
                                }}),
                                add(new BatchData() {{
                                    data = new Data() {{
                                        id = 12312L;
                                        name = "Sample Data";
                                    }};
                                    template = 52272L;
                                }}),
                                add(new BatchData() {{
                                    data = new Data() {{
                                        id = 12312L;
                                        name = "Sample Data";
                                    }};
                                    template = 52272L;
                                }}),
                                add(new BatchData() {{
                                    data = new Data() {{
                                        id = 12312L;
                                        name = "Sample Data";
                                    }};
                                    template = 52272L;
                                }}),
                            }}) {{
                format = FormatEnum.PDF;
                name = "My document";
                output = OutputEnum.BASE64;
            }};            

            MergeTemplatesResponse res = sdk.documents.mergeTemplates(req);

            if (res.mergeTemplates200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
