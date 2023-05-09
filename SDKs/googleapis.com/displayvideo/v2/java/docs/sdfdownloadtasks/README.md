# sdfdownloadtasks

### Available Operations

* [displayvideoSdfdownloadtasksCreate](#displayvideosdfdownloadtaskscreate) - Creates an SDF Download Task. Returns an Operation. An SDF Download Task is a long-running, asynchronous operation. The metadata type of this operation is SdfDownloadTaskMetadata. If the request is successful, the response type of the operation is SdfDownloadTask. The response will not include the download files, which must be retrieved with media.download. The state of operation can be retrieved with sdfdownloadtask.operations.get. Any errors can be found in the error.message. Note that error.details is expected to be empty.
* [displayvideoSdfdownloadtasksOperationsGet](#displayvideosdfdownloadtasksoperationsget) - Gets the latest state of an asynchronous SDF download task operation. Clients should poll this method at intervals of 30 seconds.

## displayvideoSdfdownloadtasksCreate

Creates an SDF Download Task. Returns an Operation. An SDF Download Task is a long-running, asynchronous operation. The metadata type of this operation is SdfDownloadTaskMetadata. If the request is successful, the response type of the operation is SdfDownloadTask. The response will not include the download files, which must be retrieved with media.download. The state of operation can be retrieved with sdfdownloadtask.operations.get. Any errors can be found in the error.message. Note that error.details is expected to be empty.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoSdfdownloadtasksCreateRequest;
import org.openapis.openapi.models.operations.DisplayvideoSdfdownloadtasksCreateResponse;
import org.openapis.openapi.models.operations.DisplayvideoSdfdownloadtasksCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreateSdfDownloadTaskRequest;
import org.openapis.openapi.models.shared.CreateSdfDownloadTaskRequestVersionEnum;
import org.openapis.openapi.models.shared.IdFilter;
import org.openapis.openapi.models.shared.InventorySourceFilter;
import org.openapis.openapi.models.shared.ParentEntityFilter;
import org.openapis.openapi.models.shared.ParentEntityFilterFileTypeEnum;
import org.openapis.openapi.models.shared.ParentEntityFilterFilterTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoSdfdownloadtasksCreateRequest req = new DisplayvideoSdfdownloadtasksCreateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                createSdfDownloadTaskRequest = new CreateSdfDownloadTaskRequest() {{
                    advertiserId = "ipsa";
                    idFilter = new IdFilter() {{
                        adGroupAdIds = new String[]{{
                            add("dolorum"),
                            add("blanditiis"),
                            add("recusandae"),
                        }};
                        adGroupIds = new String[]{{
                            add("dignissimos"),
                            add("doloremque"),
                            add("quibusdam"),
                        }};
                        campaignIds = new String[]{{
                            add("minus"),
                        }};
                        insertionOrderIds = new String[]{{
                            add("id"),
                            add("architecto"),
                        }};
                        lineItemIds = new String[]{{
                            add("perspiciatis"),
                            add("quod"),
                            add("magni"),
                            add("incidunt"),
                        }};
                        mediaProductIds = new String[]{{
                            add("quisquam"),
                        }};
                    }};;
                    inventorySourceFilter = new InventorySourceFilter() {{
                        inventorySourceIds = new String[]{{
                            add("quidem"),
                            add("iure"),
                        }};
                    }};;
                    parentEntityFilter = new ParentEntityFilter() {{
                        fileType = new org.openapis.openapi.models.shared.ParentEntityFilterFileTypeEnum[]{{
                            add(ParentEntityFilterFileTypeEnum.FILE_TYPE_LINE_ITEM),
                            add(ParentEntityFilterFileTypeEnum.FILE_TYPE_UNSPECIFIED),
                        }};
                        filterIds = new String[]{{
                            add("ipsum"),
                            add("doloremque"),
                            add("quod"),
                            add("dignissimos"),
                        }};
                        filterType = ParentEntityFilterFilterTypeEnum.FILTER_TYPE_NONE;
                    }};;
                    partnerId = "facere";
                    version = CreateSdfDownloadTaskRequestVersionEnum.SDF_VERSION55;
                }};;
                accessToken = "exercitationem";
                alt = AltEnum.PROTO;
                callback = "ea";
                fields = "molestiae";
                key = "vitae";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "voluptatum";
                uploadType = "iste";
                uploadProtocol = "eaque";
            }};            

            DisplayvideoSdfdownloadtasksCreateResponse res = sdk.sdfdownloadtasks.displayvideoSdfdownloadtasksCreate(req, new DisplayvideoSdfdownloadtasksCreateSecurity("reiciendis", "magnam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoSdfdownloadtasksOperationsGet

Gets the latest state of an asynchronous SDF download task operation. Clients should poll this method at intervals of 30 seconds.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoSdfdownloadtasksOperationsGetRequest;
import org.openapis.openapi.models.operations.DisplayvideoSdfdownloadtasksOperationsGetResponse;
import org.openapis.openapi.models.operations.DisplayvideoSdfdownloadtasksOperationsGetSecurity;
import org.openapis.openapi.models.operations.DisplayvideoSdfdownloadtasksOperationsGetSecurityOption1;
import org.openapis.openapi.models.operations.DisplayvideoSdfdownloadtasksOperationsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoSdfdownloadtasksOperationsGetRequest req = new DisplayvideoSdfdownloadtasksOperationsGetRequest("consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempora";
                alt = AltEnum.PROTO;
                callback = "expedita";
                fields = "modi";
                key = "adipisci";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "rem";
                uploadProtocol = "exercitationem";
            }};            

            DisplayvideoSdfdownloadtasksOperationsGetResponse res = sdk.sdfdownloadtasks.displayvideoSdfdownloadtasksOperationsGet(req, new DisplayvideoSdfdownloadtasksOperationsGetSecurity() {{
                option1 = new DisplayvideoSdfdownloadtasksOperationsGetSecurityOption1("tempore", "eos") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
