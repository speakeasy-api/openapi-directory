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
                    advertiserId = "quibusdam";
                    idFilter = new IdFilter() {{
                        adGroupAdIds = new String[]{{
                            add("minus"),
                        }};
                        adGroupIds = new String[]{{
                            add("id"),
                            add("architecto"),
                        }};
                        campaignIds = new String[]{{
                            add("perspiciatis"),
                            add("quod"),
                            add("magni"),
                            add("incidunt"),
                        }};
                        insertionOrderIds = new String[]{{
                            add("quisquam"),
                        }};
                        lineItemIds = new String[]{{
                            add("quidem"),
                            add("iure"),
                        }};
                        mediaProductIds = new String[]{{
                            add("culpa"),
                            add("illo"),
                        }};
                    }};;
                    inventorySourceFilter = new InventorySourceFilter() {{
                        inventorySourceIds = new String[]{{
                            add("ipsum"),
                            add("doloremque"),
                            add("quod"),
                            add("dignissimos"),
                        }};
                    }};;
                    parentEntityFilter = new ParentEntityFilter() {{
                        fileType = new org.openapis.openapi.models.shared.ParentEntityFilterFileTypeEnum[]{{
                            add(ParentEntityFilterFileTypeEnum.FILE_TYPE_AD_GROUP),
                        }};
                        filterIds = new String[]{{
                            add("exercitationem"),
                            add("quidem"),
                            add("ea"),
                            add("molestiae"),
                        }};
                        filterType = ParentEntityFilterFilterTypeEnum.FILTER_TYPE_UNSPECIFIED;
                    }};;
                    partnerId = "excepturi";
                    version = CreateSdfDownloadTaskRequestVersionEnum.SDF_VERSION5;
                }};;
                accessToken = "iste";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "magnam";
                key = "consequuntur";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "nobis";
                uploadProtocol = "expedita";
            }};            

            DisplayvideoSdfdownloadtasksCreateResponse res = sdk.sdfdownloadtasks.displayvideoSdfdownloadtasksCreate(req, new DisplayvideoSdfdownloadtasksCreateSecurity("modi", "adipisci") {{
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

            DisplayvideoSdfdownloadtasksOperationsGetRequest req = new DisplayvideoSdfdownloadtasksOperationsGetRequest("atque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "rem";
                alt = AltEnum.MEDIA;
                callback = "tempore";
                fields = "eos";
                key = "laboriosam";
                oauthToken = "aperiam";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "perspiciatis";
                uploadProtocol = "dicta";
            }};            

            DisplayvideoSdfdownloadtasksOperationsGetResponse res = sdk.sdfdownloadtasks.displayvideoSdfdownloadtasksOperationsGet(req, new DisplayvideoSdfdownloadtasksOperationsGetSecurity() {{
                option1 = new DisplayvideoSdfdownloadtasksOperationsGetSecurityOption1("assumenda", "reprehenderit") {{
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
