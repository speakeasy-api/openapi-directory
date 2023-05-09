# indexing

### Available Operations

* [cloudsearchIndexingDatasourcesDeleteSchema](#cloudsearchindexingdatasourcesdeleteschema) - Deletes the schema of a data source. **Note:** This API requires an admin or service account to execute.
* [cloudsearchIndexingDatasourcesGetSchema](#cloudsearchindexingdatasourcesgetschema) - Gets the schema of a data source. **Note:** This API requires an admin or service account to execute.
* [cloudsearchIndexingDatasourcesItemsDelete](#cloudsearchindexingdatasourcesitemsdelete) - Deletes Item resource for the specified resource name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [cloudsearchIndexingDatasourcesItemsDeleteQueueItems](#cloudsearchindexingdatasourcesitemsdeletequeueitems) - Deletes all items in a queue. This method is useful for deleting stale items. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [cloudsearchIndexingDatasourcesItemsGet](#cloudsearchindexingdatasourcesitemsget) - Gets Item resource by item name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [cloudsearchIndexingDatasourcesItemsIndex](#cloudsearchindexingdatasourcesitemsindex) - Updates Item ACL, metadata, and content. It will insert the Item if it does not exist. This method does not support partial updates. Fields with no provided values are cleared out in the Cloud Search index. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [cloudsearchIndexingDatasourcesItemsList](#cloudsearchindexingdatasourcesitemslist) - Lists all or a subset of Item resources. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [cloudsearchIndexingDatasourcesItemsPoll](#cloudsearchindexingdatasourcesitemspoll) - Polls for unreserved items from the indexing queue and marks a set as reserved, starting with items that have the oldest timestamp from the highest priority ItemStatus. The priority order is as follows: ERROR MODIFIED NEW_ITEM ACCEPTED Reserving items ensures that polling from other threads cannot create overlapping sets. After handling the reserved items, the client should put items back into the unreserved state, either by calling index, or by calling push with the type REQUEUE. Items automatically become available (unreserved) after 4 hours even if no update or push method is called. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [cloudsearchIndexingDatasourcesItemsPush](#cloudsearchindexingdatasourcesitemspush) - Pushes an item onto a queue for later polling and updating. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [cloudsearchIndexingDatasourcesItemsUnreserve](#cloudsearchindexingdatasourcesitemsunreserve) - Unreserves all items from a queue, making them all eligible to be polled. This method is useful for resetting the indexing queue after a connector has been restarted. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [cloudsearchIndexingDatasourcesItemsUpload](#cloudsearchindexingdatasourcesitemsupload) - Creates an upload session for uploading item content. For items smaller than 100 KB, it's easier to embed the content inline within an index request. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [cloudsearchIndexingDatasourcesUpdateSchema](#cloudsearchindexingdatasourcesupdateschema) - Updates the schema of a data source. This method does not perform incremental updates to the schema. Instead, this method updates the schema by overwriting the entire schema. **Note:** This API requires an admin or service account to execute.

## cloudsearchIndexingDatasourcesDeleteSchema

Deletes the schema of a data source. **Note:** This API requires an admin or service account to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesDeleteSchemaRequest;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesDeleteSchemaResponse;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesDeleteSchemaSecurity;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption2;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchIndexingDatasourcesDeleteSchemaRequest req = new CloudsearchIndexingDatasourcesDeleteSchemaRequest("iure") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quidem";
                alt = AltEnum.JSON;
                callback = "ipsa";
                debugOptionsEnableDebugging = false;
                fields = "reiciendis";
                key = "est";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "dolores";
                uploadProtocol = "dolorem";
            }};            

            CloudsearchIndexingDatasourcesDeleteSchemaResponse res = sdk.indexing.cloudsearchIndexingDatasourcesDeleteSchema(req, new CloudsearchIndexingDatasourcesDeleteSchemaSecurity() {{
                option1 = new CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption1("corporis", "explicabo") {{
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

## cloudsearchIndexingDatasourcesGetSchema

Gets the schema of a data source. **Note:** This API requires an admin or service account to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesGetSchemaRequest;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesGetSchemaResponse;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesGetSchemaSecurity;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesGetSchemaSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesGetSchemaSecurityOption2;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesGetSchemaSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchIndexingDatasourcesGetSchemaRequest req = new CloudsearchIndexingDatasourcesGetSchemaRequest("nobis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "omnis";
                alt = AltEnum.MEDIA;
                callback = "minima";
                debugOptionsEnableDebugging = false;
                fields = "excepturi";
                key = "accusantium";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "culpa";
                uploadType = "doloribus";
                uploadProtocol = "sapiente";
            }};            

            CloudsearchIndexingDatasourcesGetSchemaResponse res = sdk.indexing.cloudsearchIndexingDatasourcesGetSchema(req, new CloudsearchIndexingDatasourcesGetSchemaSecurity() {{
                option1 = new CloudsearchIndexingDatasourcesGetSchemaSecurityOption1("architecto", "mollitia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.schema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchIndexingDatasourcesItemsDelete

Deletes Item resource for the specified resource name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsDeleteModeEnum;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsDeleteRequest;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsDeleteResponse;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsDeleteSecurity;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchIndexingDatasourcesItemsDeleteRequest req = new CloudsearchIndexingDatasourcesItemsDeleteRequest("dolorem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequuntur";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                connectorName = "occaecati";
                debugOptionsEnableDebugging = false;
                fields = "numquam";
                key = "commodi";
                mode = CloudsearchIndexingDatasourcesItemsDeleteModeEnum.SYNCHRONOUS;
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "error";
                uploadProtocol = "quia";
                version = "quis";
            }};            

            CloudsearchIndexingDatasourcesItemsDeleteResponse res = sdk.indexing.cloudsearchIndexingDatasourcesItemsDelete(req, new CloudsearchIndexingDatasourcesItemsDeleteSecurity() {{
                option1 = new CloudsearchIndexingDatasourcesItemsDeleteSecurityOption1("vitae", "laborum") {{
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

## cloudsearchIndexingDatasourcesItemsDeleteQueueItems

Deletes all items in a queue. This method is useful for deleting stale items. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsDeleteQueueItemsRequest;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsDeleteQueueItemsResponse;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurity;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DebugOptions;
import org.openapis.openapi.models.shared.DeleteQueueItemsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchIndexingDatasourcesItemsDeleteQueueItemsRequest req = new CloudsearchIndexingDatasourcesItemsDeleteQueueItemsRequest("animi") {{
                dollarXgafv = XgafvEnum.ONE;
                deleteQueueItemsRequest = new DeleteQueueItemsRequest() {{
                    connectorName = "odit";
                    debugOptions = new DebugOptions() {{
                        enableDebugging = false;
                    }};;
                    queue = "quo";
                }};;
                accessToken = "sequi";
                alt = AltEnum.PROTO;
                callback = "ipsam";
                fields = "id";
                key = "possimus";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "error";
                uploadProtocol = "temporibus";
            }};            

            CloudsearchIndexingDatasourcesItemsDeleteQueueItemsResponse res = sdk.indexing.cloudsearchIndexingDatasourcesItemsDeleteQueueItems(req, new CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurity() {{
                option1 = new CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurityOption1("laborum", "quasi") {{
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

## cloudsearchIndexingDatasourcesItemsGet

Gets Item resource by item name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsGetRequest;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsGetResponse;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsGetSecurity;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsGetSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchIndexingDatasourcesItemsGetRequest req = new CloudsearchIndexingDatasourcesItemsGetRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vero";
                alt = AltEnum.MEDIA;
                callback = "praesentium";
                connectorName = "voluptatibus";
                debugOptionsEnableDebugging = false;
                fields = "ipsa";
                key = "omnis";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "perferendis";
                uploadProtocol = "doloremque";
            }};            

            CloudsearchIndexingDatasourcesItemsGetResponse res = sdk.indexing.cloudsearchIndexingDatasourcesItemsGet(req, new CloudsearchIndexingDatasourcesItemsGetSecurity() {{
                option1 = new CloudsearchIndexingDatasourcesItemsGetSecurityOption1("reprehenderit", "ut") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.item != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchIndexingDatasourcesItemsIndex

Updates Item ACL, metadata, and content. It will insert the Item if it does not exist. This method does not support partial updates. Fields with no provided values are cleared out in the Cloud Search index. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsIndexRequest;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsIndexResponse;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsIndexSecurity;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsIndexSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsIndexSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContextAttribute;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.DateValues;
import org.openapis.openapi.models.shared.DebugOptions;
import org.openapis.openapi.models.shared.DoubleValues;
import org.openapis.openapi.models.shared.EnumValues;
import org.openapis.openapi.models.shared.FieldViolation;
import org.openapis.openapi.models.shared.GSuitePrincipal;
import org.openapis.openapi.models.shared.HtmlValues;
import org.openapis.openapi.models.shared.IndexItemOptions;
import org.openapis.openapi.models.shared.IndexItemRequest;
import org.openapis.openapi.models.shared.IndexItemRequestModeEnum;
import org.openapis.openapi.models.shared.IntegerValues;
import org.openapis.openapi.models.shared.Interaction;
import org.openapis.openapi.models.shared.InteractionTypeEnum;
import org.openapis.openapi.models.shared.Item;
import org.openapis.openapi.models.shared.ItemAcl;
import org.openapis.openapi.models.shared.ItemAclAclInheritanceTypeEnum;
import org.openapis.openapi.models.shared.ItemContent;
import org.openapis.openapi.models.shared.ItemContentContentFormatEnum;
import org.openapis.openapi.models.shared.ItemItemTypeEnum;
import org.openapis.openapi.models.shared.ItemMetadata;
import org.openapis.openapi.models.shared.ItemStatus;
import org.openapis.openapi.models.shared.ItemStatusCodeEnum;
import org.openapis.openapi.models.shared.ItemStructuredData;
import org.openapis.openapi.models.shared.NamedProperty;
import org.openapis.openapi.models.shared.ObjectValues;
import org.openapis.openapi.models.shared.Principal;
import org.openapis.openapi.models.shared.ProcessingError;
import org.openapis.openapi.models.shared.ProcessingErrorCodeEnum;
import org.openapis.openapi.models.shared.RepositoryError;
import org.openapis.openapi.models.shared.RepositoryErrorTypeEnum;
import org.openapis.openapi.models.shared.SearchQualityMetadata;
import org.openapis.openapi.models.shared.StructuredDataObject;
import org.openapis.openapi.models.shared.TextValues;
import org.openapis.openapi.models.shared.TimestampValues;
import org.openapis.openapi.models.shared.UploadItemRef;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchIndexingDatasourcesItemsIndexRequest req = new CloudsearchIndexingDatasourcesItemsIndexRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                indexItemRequest = new IndexItemRequest() {{
                    connectorName = "corporis";
                    debugOptions = new DebugOptions() {{
                        enableDebugging = false;
                    }};;
                    indexItemOptions = new IndexItemOptions() {{
                        allowUnknownGsuitePrincipals = false;
                    }};;
                    item = new Item() {{
                        acl = new ItemAcl() {{
                            aclInheritanceType = ItemAclAclInheritanceTypeEnum.CHILD_OVERRIDE;
                            deniedReaders = new org.openapis.openapi.models.shared.Principal[]{{
                                add(new Principal() {{
                                    groupResourceName = "dicta";
                                    gsuitePrincipal = new GSuitePrincipal() {{
                                        gsuiteDomain = false;
                                        gsuiteGroupEmail = "harum";
                                        gsuiteUserEmail = "enim";
                                    }};
                                    userResourceName = "accusamus";
                                }}),
                                add(new Principal() {{
                                    groupResourceName = "commodi";
                                    gsuitePrincipal = new GSuitePrincipal() {{
                                        gsuiteDomain = false;
                                        gsuiteGroupEmail = "repudiandae";
                                        gsuiteUserEmail = "quae";
                                    }};
                                    userResourceName = "ipsum";
                                }}),
                            }};
                            inheritAclFrom = "quidem";
                            owners = new org.openapis.openapi.models.shared.Principal[]{{
                                add(new Principal() {{
                                    groupResourceName = "excepturi";
                                    gsuitePrincipal = new GSuitePrincipal() {{
                                        gsuiteDomain = false;
                                        gsuiteGroupEmail = "pariatur";
                                        gsuiteUserEmail = "modi";
                                    }};
                                    userResourceName = "praesentium";
                                }}),
                                add(new Principal() {{
                                    groupResourceName = "rem";
                                    gsuitePrincipal = new GSuitePrincipal() {{
                                        gsuiteDomain = false;
                                        gsuiteGroupEmail = "voluptates";
                                        gsuiteUserEmail = "quasi";
                                    }};
                                    userResourceName = "repudiandae";
                                }}),
                                add(new Principal() {{
                                    groupResourceName = "sint";
                                    gsuitePrincipal = new GSuitePrincipal() {{
                                        gsuiteDomain = false;
                                        gsuiteGroupEmail = "veritatis";
                                        gsuiteUserEmail = "itaque";
                                    }};
                                    userResourceName = "incidunt";
                                }}),
                            }};
                            readers = new org.openapis.openapi.models.shared.Principal[]{{
                                add(new Principal() {{
                                    groupResourceName = "consequatur";
                                    gsuitePrincipal = new GSuitePrincipal() {{
                                        gsuiteDomain = false;
                                        gsuiteGroupEmail = "est";
                                        gsuiteUserEmail = "quibusdam";
                                    }};
                                    userResourceName = "explicabo";
                                }}),
                                add(new Principal() {{
                                    groupResourceName = "deserunt";
                                    gsuitePrincipal = new GSuitePrincipal() {{
                                        gsuiteDomain = false;
                                        gsuiteGroupEmail = "distinctio";
                                        gsuiteUserEmail = "quibusdam";
                                    }};
                                    userResourceName = "labore";
                                }}),
                            }};
                        }};;
                        content = new ItemContent() {{
                            contentDataRef = new UploadItemRef() {{
                                name = "Tina Jacobi";
                            }};;
                            contentFormat = ItemContentContentFormatEnum.UNSPECIFIED;
                            hash = "magni";
                            inlineContent = "assumenda";
                        }};;
                        itemType = ItemItemTypeEnum.CONTENT_ITEM;
                        metadata = new ItemMetadata() {{
                            containerName = "alias";
                            contentLanguage = "fugit";
                            contextAttributes = new org.openapis.openapi.models.shared.ContextAttribute[]{{
                                add(new ContextAttribute() {{
                                    name = "Eddie Prosacco";
                                    values = new String[]{{
                                        add("eum"),
                                        add("non"),
                                        add("eligendi"),
                                        add("sint"),
                                    }};
                                }}),
                                add(new ContextAttribute() {{
                                    name = "Sherri Tremblay";
                                    values = new String[]{{
                                        add("debitis"),
                                    }};
                                }}),
                                add(new ContextAttribute() {{
                                    name = "Wilbur King";
                                    values = new String[]{{
                                        add("rerum"),
                                        add("dicta"),
                                        add("magnam"),
                                        add("cumque"),
                                    }};
                                }}),
                            }};
                            createTime = "facere";
                            hash = "ea";
                            interactions = new org.openapis.openapi.models.shared.Interaction[]{{
                                add(new Interaction() {{
                                    interactionTime = "laborum";
                                    principal = new Principal() {{
                                        groupResourceName = "accusamus";
                                        gsuitePrincipal = new GSuitePrincipal() {{
                                            gsuiteDomain = false;
                                            gsuiteGroupEmail = "non";
                                            gsuiteUserEmail = "occaecati";
                                        }};
                                        userResourceName = "enim";
                                    }};
                                    type = InteractionTypeEnum.EDIT;
                                }}),
                                add(new Interaction() {{
                                    interactionTime = "delectus";
                                    principal = new Principal() {{
                                        groupResourceName = "quidem";
                                        gsuitePrincipal = new GSuitePrincipal() {{
                                            gsuiteDomain = false;
                                            gsuiteGroupEmail = "provident";
                                            gsuiteUserEmail = "nam";
                                        }};
                                        userResourceName = "id";
                                    }};
                                    type = InteractionTypeEnum.VIEW;
                                }}),
                            }};
                            keywords = new String[]{{
                                add("sapiente"),
                                add("amet"),
                                add("deserunt"),
                            }};
                            mimeType = "nisi";
                            objectType = "vel";
                            searchQualityMetadata = new SearchQualityMetadata() {{
                                quality = 6188.09;
                            }};;
                            sourceRepositoryUrl = "omnis";
                            title = "Ms.";
                            updateTime = "perferendis";
                        }};;
                        name = "Megan Rau";
                        payload = "labore";
                        queue = "suscipit";
                        status = new ItemStatus() {{
                            code = ItemStatusCodeEnum.NEW_ITEM;
                            processingErrors = new org.openapis.openapi.models.shared.ProcessingError[]{{
                                add(new ProcessingError() {{
                                    code = ProcessingErrorCodeEnum.UNSUPPORTED_CONTENT_FORMAT;
                                    errorMessage = "vero";
                                    fieldViolations = new org.openapis.openapi.models.shared.FieldViolation[]{{
                                        add(new FieldViolation() {{
                                            description = "architecto";
                                            field = "magnam";
                                        }}),
                                    }};
                                }}),
                                add(new ProcessingError() {{
                                    code = ProcessingErrorCodeEnum.PROCESSING_ERROR_CODE_UNSPECIFIED;
                                    errorMessage = "excepturi";
                                    fieldViolations = new org.openapis.openapi.models.shared.FieldViolation[]{{
                                        add(new FieldViolation() {{
                                            description = "provident";
                                            field = "quos";
                                        }}),
                                        add(new FieldViolation() {{
                                            description = "sint";
                                            field = "accusantium";
                                        }}),
                                    }};
                                }}),
                                add(new ProcessingError() {{
                                    code = ProcessingErrorCodeEnum.INDIRECT_BROKEN_ACL;
                                    errorMessage = "reiciendis";
                                    fieldViolations = new org.openapis.openapi.models.shared.FieldViolation[]{{
                                        add(new FieldViolation() {{
                                            description = "ad";
                                            field = "eum";
                                        }}),
                                        add(new FieldViolation() {{
                                            description = "dolor";
                                            field = "necessitatibus";
                                        }}),
                                        add(new FieldViolation() {{
                                            description = "odit";
                                            field = "nemo";
                                        }}),
                                    }};
                                }}),
                            }};
                            repositoryErrors = new org.openapis.openapi.models.shared.RepositoryError[]{{
                                add(new RepositoryError() {{
                                    errorMessage = "iure";
                                    httpStatusCode = 984043;
                                    type = RepositoryErrorTypeEnum.SERVICE_UNAVAILABLE;
                                }}),
                            }};
                        }};;
                        structuredData = new ItemStructuredData() {{
                            hash = "eius";
                            object = new StructuredDataObject() {{
                                properties = new org.openapis.openapi.models.shared.NamedProperty[]{{
                                    add(new NamedProperty() {{
                                        booleanValue = false;
                                        dateValues = new DateValues() {{
                                            values = new org.openapis.openapi.models.shared.Date[]{{
                                                add(new Date() {{
                                                    day = 703889;
                                                    month = 447926;
                                                    year = 100226;
                                                }}),
                                                add(new Date() {{
                                                    day = 99569;
                                                    month = 919483;
                                                    year = 352312;
                                                }}),
                                                add(new Date() {{
                                                    day = 714242;
                                                    month = 469249;
                                                    year = 998848;
                                                }}),
                                            }};
                                        }};
                                        doubleValues = new DoubleValues() {{
                                            values = new Double[]{{
                                                add(1494.48),
                                                add(9046.48),
                                                add(8681.26),
                                                add(375.59),
                                            }};
                                        }};
                                        enumValues = new EnumValues() {{
                                            values = new String[]{{
                                                add("praesentium"),
                                            }};
                                        }};
                                        htmlValues = new HtmlValues() {{
                                            values = new String[]{{
                                                add("magni"),
                                                add("sunt"),
                                                add("quo"),
                                            }};
                                        }};
                                        integerValues = new IntegerValues() {{
                                            values = new String[]{{
                                                add("pariatur"),
                                                add("maxime"),
                                                add("ea"),
                                                add("excepturi"),
                                            }};
                                        }};
                                        name = "Dr. Rosemary Bartoletti";
                                        objectValues = new ObjectValues() {{
                                            values = new org.openapis.openapi.models.shared.StructuredDataObject[]{{
                                                add(new StructuredDataObject() {{}}),
                                                add(new StructuredDataObject() {{}}),
                                            }};
                                        }};
                                        textValues = new TextValues() {{
                                            values = new String[]{{
                                                add("autem"),
                                                add("nam"),
                                            }};
                                        }};
                                        timestampValues = new TimestampValues() {{
                                            values = new String[]{{
                                                add("pariatur"),
                                            }};
                                        }};
                                    }}),
                                    add(new NamedProperty() {{
                                        booleanValue = false;
                                        dateValues = new DateValues() {{
                                            values = new org.openapis.openapi.models.shared.Date[]{{
                                                add(new Date() {{
                                                    day = 975522;
                                                    month = 16627;
                                                    year = 855804;
                                                }}),
                                                add(new Date() {{
                                                    day = 230742;
                                                    month = 11714;
                                                    year = 764912;
                                                }}),
                                            }};
                                        }};
                                        doubleValues = new DoubleValues() {{
                                            values = new Double[]{{
                                                add(9441.24),
                                                add(7299.91),
                                            }};
                                        }};
                                        enumValues = new EnumValues() {{
                                            values = new String[]{{
                                                add("dolores"),
                                                add("quis"),
                                                add("totam"),
                                            }};
                                        }};
                                        htmlValues = new HtmlValues() {{
                                            values = new String[]{{
                                                add("eaque"),
                                                add("quis"),
                                            }};
                                        }};
                                        integerValues = new IntegerValues() {{
                                            values = new String[]{{
                                                add("eos"),
                                            }};
                                        }};
                                        name = "Jacqueline Schimmel";
                                        objectValues = new ObjectValues() {{
                                            values = new org.openapis.openapi.models.shared.StructuredDataObject[]{{
                                                add(new StructuredDataObject() {{}}),
                                                add(new StructuredDataObject() {{}}),
                                                add(new StructuredDataObject() {{}}),
                                                add(new StructuredDataObject() {{}}),
                                            }};
                                        }};
                                        textValues = new TextValues() {{
                                            values = new String[]{{
                                                add("hic"),
                                                add("recusandae"),
                                            }};
                                        }};
                                        timestampValues = new TimestampValues() {{
                                            values = new String[]{{
                                                add("facilis"),
                                                add("perspiciatis"),
                                                add("voluptatem"),
                                            }};
                                        }};
                                    }}),
                                    add(new NamedProperty() {{
                                        booleanValue = false;
                                        dateValues = new DateValues() {{
                                            values = new org.openapis.openapi.models.shared.Date[]{{
                                                add(new Date() {{
                                                    day = 164694;
                                                    month = 500026;
                                                    year = 621479;
                                                }}),
                                                add(new Date() {{
                                                    day = 50370;
                                                    month = 577229;
                                                    year = 699098;
                                                }}),
                                                add(new Date() {{
                                                    day = 237893;
                                                    month = 992397;
                                                    year = 934214;
                                                }}),
                                                add(new Date() {{
                                                    day = 267262;
                                                    month = 613966;
                                                    year = 679091;
                                                }}),
                                            }};
                                        }};
                                        doubleValues = new DoubleValues() {{
                                            values = new Double[]{{
                                                add(8642.82),
                                                add(5899.1),
                                                add(7508.44),
                                            }};
                                        }};
                                        enumValues = new EnumValues() {{
                                            values = new String[]{{
                                                add("delectus"),
                                                add("quaerat"),
                                                add("quos"),
                                            }};
                                        }};
                                        htmlValues = new HtmlValues() {{
                                            values = new String[]{{
                                                add("dolorem"),
                                                add("dolorem"),
                                            }};
                                        }};
                                        integerValues = new IntegerValues() {{
                                            values = new String[]{{
                                                add("qui"),
                                            }};
                                        }};
                                        name = "Mindy Marks";
                                        objectValues = new ObjectValues() {{
                                            values = new org.openapis.openapi.models.shared.StructuredDataObject[]{{
                                                add(new StructuredDataObject() {{}}),
                                                add(new StructuredDataObject() {{}}),
                                            }};
                                        }};
                                        textValues = new TextValues() {{
                                            values = new String[]{{
                                                add("amet"),
                                                add("dolorum"),
                                                add("numquam"),
                                                add("veritatis"),
                                            }};
                                        }};
                                        timestampValues = new TimestampValues() {{
                                            values = new String[]{{
                                                add("ipsa"),
                                            }};
                                        }};
                                    }}),
                                    add(new NamedProperty() {{
                                        booleanValue = false;
                                        dateValues = new DateValues() {{
                                            values = new org.openapis.openapi.models.shared.Date[]{{
                                                add(new Date() {{
                                                    day = 487838;
                                                    month = 311796;
                                                    year = 881005;
                                                }}),
                                                add(new Date() {{
                                                    day = 696344;
                                                    month = 976405;
                                                    year = 377752;
                                                }}),
                                            }};
                                        }};
                                        doubleValues = new DoubleValues() {{
                                            values = new Double[]{{
                                                add(1796.03),
                                                add(5424.99),
                                                add(246.78),
                                            }};
                                        }};
                                        enumValues = new EnumValues() {{
                                            values = new String[]{{
                                                add("ab"),
                                                add("soluta"),
                                                add("dolorum"),
                                                add("iusto"),
                                            }};
                                        }};
                                        htmlValues = new HtmlValues() {{
                                            values = new String[]{{
                                                add("dolorum"),
                                                add("deleniti"),
                                            }};
                                        }};
                                        integerValues = new IntegerValues() {{
                                            values = new String[]{{
                                                add("necessitatibus"),
                                                add("distinctio"),
                                                add("asperiores"),
                                            }};
                                        }};
                                        name = "Edna Klocko";
                                        objectValues = new ObjectValues() {{
                                            values = new org.openapis.openapi.models.shared.StructuredDataObject[]{{
                                                add(new StructuredDataObject() {{}}),
                                                add(new StructuredDataObject() {{}}),
                                            }};
                                        }};
                                        textValues = new TextValues() {{
                                            values = new String[]{{
                                                add("perferendis"),
                                            }};
                                        }};
                                        timestampValues = new TimestampValues() {{
                                            values = new String[]{{
                                                add("optio"),
                                            }};
                                        }};
                                    }}),
                                }};
                            }};;
                        }};;
                        version = "accusamus";
                    }};;
                    mode = IndexItemRequestModeEnum.UNSPECIFIED;
                }};;
                accessToken = "saepe";
                alt = AltEnum.MEDIA;
                callback = "deserunt";
                fields = "provident";
                key = "minima";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "similique";
                uploadProtocol = "alias";
            }};            

            CloudsearchIndexingDatasourcesItemsIndexResponse res = sdk.indexing.cloudsearchIndexingDatasourcesItemsIndex(req, new CloudsearchIndexingDatasourcesItemsIndexSecurity() {{
                option1 = new CloudsearchIndexingDatasourcesItemsIndexSecurityOption1("at", "quaerat") {{
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

## cloudsearchIndexingDatasourcesItemsList

Lists all or a subset of Item resources. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsListRequest;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsListResponse;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsListSecurity;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsListSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchIndexingDatasourcesItemsListRequest req = new CloudsearchIndexingDatasourcesItemsListRequest("tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quod";
                alt = AltEnum.PROTO;
                brief = false;
                callback = "qui";
                connectorName = "dolorum";
                debugOptionsEnableDebugging = false;
                fields = "a";
                key = "esse";
                oauthToken = "harum";
                pageSize = 483409L;
                pageToken = "ipsum";
                prettyPrint = false;
                quotaUser = "quisquam";
                uploadType = "tenetur";
                uploadProtocol = "amet";
            }};            

            CloudsearchIndexingDatasourcesItemsListResponse res = sdk.indexing.cloudsearchIndexingDatasourcesItemsList(req, new CloudsearchIndexingDatasourcesItemsListSecurity() {{
                option1 = new CloudsearchIndexingDatasourcesItemsListSecurityOption1("tempore", "accusamus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listItemsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchIndexingDatasourcesItemsPoll

Polls for unreserved items from the indexing queue and marks a set as reserved, starting with items that have the oldest timestamp from the highest priority ItemStatus. The priority order is as follows: ERROR MODIFIED NEW_ITEM ACCEPTED Reserving items ensures that polling from other threads cannot create overlapping sets. After handling the reserved items, the client should put items back into the unreserved state, either by calling index, or by calling push with the type REQUEUE. Items automatically become available (unreserved) after 4 hours even if no update or push method is called. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsPollRequest;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsPollResponse;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsPollSecurity;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsPollSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsPollSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DebugOptions;
import org.openapis.openapi.models.shared.PollItemsRequest;
import org.openapis.openapi.models.shared.PollItemsRequestStatusCodesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchIndexingDatasourcesItemsPollRequest req = new CloudsearchIndexingDatasourcesItemsPollRequest("numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                pollItemsRequest = new PollItemsRequest() {{
                    connectorName = "dolorem";
                    debugOptions = new DebugOptions() {{
                        enableDebugging = false;
                    }};;
                    limit = 957451;
                    queue = "totam";
                    statusCodes = new org.openapis.openapi.models.shared.PollItemsRequestStatusCodesEnum[]{{
                        add(PollItemsRequestStatusCodesEnum.CODE_UNSPECIFIED),
                        add(PollItemsRequestStatusCodesEnum.NEW_ITEM),
                    }};
                }};;
                accessToken = "neque";
                alt = AltEnum.JSON;
                callback = "vel";
                fields = "libero";
                key = "voluptas";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "quam";
                uploadType = "ipsum";
                uploadProtocol = "incidunt";
            }};            

            CloudsearchIndexingDatasourcesItemsPollResponse res = sdk.indexing.cloudsearchIndexingDatasourcesItemsPoll(req, new CloudsearchIndexingDatasourcesItemsPollSecurity() {{
                option1 = new CloudsearchIndexingDatasourcesItemsPollSecurityOption1("qui", "cupiditate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.pollItemsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchIndexingDatasourcesItemsPush

Pushes an item onto a queue for later polling and updating. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsPushRequest;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsPushResponse;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsPushSecurity;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsPushSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsPushSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DebugOptions;
import org.openapis.openapi.models.shared.PushItem;
import org.openapis.openapi.models.shared.PushItemRequest;
import org.openapis.openapi.models.shared.PushItemTypeEnum;
import org.openapis.openapi.models.shared.RepositoryError;
import org.openapis.openapi.models.shared.RepositoryErrorTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchIndexingDatasourcesItemsPushRequest req = new CloudsearchIndexingDatasourcesItemsPushRequest("maxime") {{
                dollarXgafv = XgafvEnum.TWO;
                pushItemRequest = new PushItemRequest() {{
                    connectorName = "soluta";
                    debugOptions = new DebugOptions() {{
                        enableDebugging = false;
                    }};;
                    item = new PushItem() {{
                        contentHash = "dicta";
                        metadataHash = "laborum";
                        payload = "totam";
                        queue = "incidunt";
                        repositoryError = new RepositoryError() {{
                            errorMessage = "aspernatur";
                            httpStatusCode = 174909;
                            type = RepositoryErrorTypeEnum.QUOTA_EXCEEDED;
                        }};;
                        structuredDataHash = "facilis";
                        type = PushItemTypeEnum.MODIFIED;
                    }};;
                }};;
                accessToken = "quam";
                alt = AltEnum.MEDIA;
                callback = "temporibus";
                fields = "qui";
                key = "neque";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "odio";
                uploadProtocol = "sunt";
            }};            

            CloudsearchIndexingDatasourcesItemsPushResponse res = sdk.indexing.cloudsearchIndexingDatasourcesItemsPush(req, new CloudsearchIndexingDatasourcesItemsPushSecurity() {{
                option1 = new CloudsearchIndexingDatasourcesItemsPushSecurityOption1("ullam", "nam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.item != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchIndexingDatasourcesItemsUnreserve

Unreserves all items from a queue, making them all eligible to be polled. This method is useful for resetting the indexing queue after a connector has been restarted. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsUnreserveRequest;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsUnreserveResponse;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsUnreserveSecurity;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsUnreserveSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsUnreserveSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DebugOptions;
import org.openapis.openapi.models.shared.UnreserveItemsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchIndexingDatasourcesItemsUnreserveRequest req = new CloudsearchIndexingDatasourcesItemsUnreserveRequest("hic") {{
                dollarXgafv = XgafvEnum.ONE;
                unreserveItemsRequest = new UnreserveItemsRequest() {{
                    connectorName = "cumque";
                    debugOptions = new DebugOptions() {{
                        enableDebugging = false;
                    }};;
                    queue = "soluta";
                }};;
                accessToken = "nobis";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "ipsum";
                key = "veritatis";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "tempore";
                uploadProtocol = "cupiditate";
            }};            

            CloudsearchIndexingDatasourcesItemsUnreserveResponse res = sdk.indexing.cloudsearchIndexingDatasourcesItemsUnreserve(req, new CloudsearchIndexingDatasourcesItemsUnreserveSecurity() {{
                option1 = new CloudsearchIndexingDatasourcesItemsUnreserveSecurityOption1("aperiam", "delectus") {{
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

## cloudsearchIndexingDatasourcesItemsUpload

Creates an upload session for uploading item content. For items smaller than 100 KB, it's easier to embed the content inline within an index request. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsUploadRequest;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsUploadResponse;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsUploadSecurity;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsUploadSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesItemsUploadSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DebugOptions;
import org.openapis.openapi.models.shared.StartUploadItemRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchIndexingDatasourcesItemsUploadRequest req = new CloudsearchIndexingDatasourcesItemsUploadRequest("dolorem") {{
                dollarXgafv = XgafvEnum.ONE;
                startUploadItemRequest = new StartUploadItemRequest() {{
                    connectorName = "labore";
                    debugOptions = new DebugOptions() {{
                        enableDebugging = false;
                    }};;
                }};;
                accessToken = "adipisci";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "quae";
                key = "aut";
                oauthToken = "quas";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "consequatur";
                uploadProtocol = "est";
            }};            

            CloudsearchIndexingDatasourcesItemsUploadResponse res = sdk.indexing.cloudsearchIndexingDatasourcesItemsUpload(req, new CloudsearchIndexingDatasourcesItemsUploadSecurity() {{
                option1 = new CloudsearchIndexingDatasourcesItemsUploadSecurityOption1("repellendus", "porro") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.uploadItemRef != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchIndexingDatasourcesUpdateSchema

Updates the schema of a data source. This method does not perform incremental updates to the schema. Instead, this method updates the schema by overwriting the entire schema. **Note:** This API requires an admin or service account to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesUpdateSchemaRequest;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesUpdateSchemaResponse;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesUpdateSchemaSecurity;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption2;
import org.openapis.openapi.models.operations.CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BooleanOperatorOptions;
import org.openapis.openapi.models.shared.BooleanPropertyOptions;
import org.openapis.openapi.models.shared.DateOperatorOptions;
import org.openapis.openapi.models.shared.DatePropertyOptions;
import org.openapis.openapi.models.shared.DebugOptions;
import org.openapis.openapi.models.shared.DisplayedProperty;
import org.openapis.openapi.models.shared.DoubleOperatorOptions;
import org.openapis.openapi.models.shared.DoublePropertyOptions;
import org.openapis.openapi.models.shared.EnumOperatorOptions;
import org.openapis.openapi.models.shared.EnumPropertyOptions;
import org.openapis.openapi.models.shared.EnumPropertyOptionsOrderedRankingEnum;
import org.openapis.openapi.models.shared.EnumValuePair;
import org.openapis.openapi.models.shared.FreshnessOptions;
import org.openapis.openapi.models.shared.HtmlOperatorOptions;
import org.openapis.openapi.models.shared.HtmlPropertyOptions;
import org.openapis.openapi.models.shared.IntegerFacetingOptions;
import org.openapis.openapi.models.shared.IntegerOperatorOptions;
import org.openapis.openapi.models.shared.IntegerPropertyOptions;
import org.openapis.openapi.models.shared.IntegerPropertyOptionsOrderedRankingEnum;
import org.openapis.openapi.models.shared.Metaline;
import org.openapis.openapi.models.shared.ObjectDefinition;
import org.openapis.openapi.models.shared.ObjectDisplayOptions;
import org.openapis.openapi.models.shared.ObjectOptions;
import org.openapis.openapi.models.shared.ObjectPropertyOptions;
import org.openapis.openapi.models.shared.PropertyDefinition;
import org.openapis.openapi.models.shared.PropertyDisplayOptions;
import org.openapis.openapi.models.shared.RetrievalImportance;
import org.openapis.openapi.models.shared.RetrievalImportanceImportanceEnum;
import org.openapis.openapi.models.shared.Schema;
import org.openapis.openapi.models.shared.TextOperatorOptions;
import org.openapis.openapi.models.shared.TextPropertyOptions;
import org.openapis.openapi.models.shared.TimestampOperatorOptions;
import org.openapis.openapi.models.shared.TimestampPropertyOptions;
import org.openapis.openapi.models.shared.UpdateSchemaRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchIndexingDatasourcesUpdateSchemaRequest req = new CloudsearchIndexingDatasourcesUpdateSchemaRequest("doloribus") {{
                dollarXgafv = XgafvEnum.ONE;
                updateSchemaRequest = new UpdateSchemaRequest() {{
                    debugOptions = new DebugOptions() {{
                        enableDebugging = false;
                    }};;
                    schema = new Schema() {{
                        objectDefinitions = new org.openapis.openapi.models.shared.ObjectDefinition[]{{
                            add(new ObjectDefinition() {{
                                name = "Alan Bergnaum";
                                options = new ObjectOptions() {{
                                    displayOptions = new ObjectDisplayOptions() {{
                                        metalines = new org.openapis.openapi.models.shared.Metaline[]{{
                                            add(new Metaline() {{
                                                properties = new org.openapis.openapi.models.shared.DisplayedProperty[]{{
                                                    add(new DisplayedProperty() {{
                                                        propertyName = "quisquam";
                                                    }}),
                                                    add(new DisplayedProperty() {{
                                                        propertyName = "vero";
                                                    }}),
                                                    add(new DisplayedProperty() {{
                                                        propertyName = "omnis";
                                                    }}),
                                                    add(new DisplayedProperty() {{
                                                        propertyName = "quis";
                                                    }}),
                                                }};
                                            }}),
                                            add(new Metaline() {{
                                                properties = new org.openapis.openapi.models.shared.DisplayedProperty[]{{
                                                    add(new DisplayedProperty() {{
                                                        propertyName = "delectus";
                                                    }}),
                                                }};
                                            }}),
                                            add(new Metaline() {{
                                                properties = new org.openapis.openapi.models.shared.DisplayedProperty[]{{
                                                    add(new DisplayedProperty() {{
                                                        propertyName = "consectetur";
                                                    }}),
                                                    add(new DisplayedProperty() {{
                                                        propertyName = "vero";
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        objectDisplayLabel = "tenetur";
                                    }};
                                    freshnessOptions = new FreshnessOptions() {{
                                        freshnessDuration = "dignissimos";
                                        freshnessProperty = "hic";
                                    }};
                                    suggestionFilteringOperators = new String[]{{
                                        add("quod"),
                                        add("odio"),
                                        add("similique"),
                                    }};
                                }};
                                propertyDefinitions = new org.openapis.openapi.models.shared.PropertyDefinition[]{{
                                    add(new PropertyDefinition() {{
                                        booleanPropertyOptions = new BooleanPropertyOptions() {{
                                            operatorOptions = new BooleanOperatorOptions() {{
                                                operatorName = "vero";
                                            }};
                                        }};
                                        datePropertyOptions = new DatePropertyOptions() {{
                                            operatorOptions = new DateOperatorOptions() {{
                                                greaterThanOperatorName = "ducimus";
                                                lessThanOperatorName = "dolore";
                                                operatorName = "quibusdam";
                                            }};
                                        }};
                                        displayOptions = new PropertyDisplayOptions() {{
                                            displayLabel = "illum";
                                        }};
                                        doublePropertyOptions = new DoublePropertyOptions() {{
                                            operatorOptions = new DoubleOperatorOptions() {{
                                                operatorName = "sequi";
                                            }};
                                        }};
                                        enumPropertyOptions = new EnumPropertyOptions() {{
                                            operatorOptions = new EnumOperatorOptions() {{
                                                operatorName = "natus";
                                            }};
                                            orderedRanking = EnumPropertyOptionsOrderedRankingEnum.DESCENDING;
                                            possibleValues = new org.openapis.openapi.models.shared.EnumValuePair[]{{
                                                add(new EnumValuePair() {{
                                                    integerValue = 974259;
                                                    stringValue = "exercitationem";
                                                }}),
                                            }};
                                        }};
                                        htmlPropertyOptions = new HtmlPropertyOptions() {{
                                            operatorOptions = new HtmlOperatorOptions() {{
                                                operatorName = "nulla";
                                            }};
                                            retrievalImportance = new RetrievalImportance() {{
                                                importance = RetrievalImportanceImportanceEnum.DEFAULT_;
                                            }};
                                        }};
                                        integerPropertyOptions = new IntegerPropertyOptions() {{
                                            integerFacetingOptions = new IntegerFacetingOptions() {{
                                                integerBuckets = new String[]{{
                                                    add("maiores"),
                                                    add("doloribus"),
                                                    add("iusto"),
                                                    add("eligendi"),
                                                }};
                                            }};
                                            maximumValue = "ducimus";
                                            minimumValue = "alias";
                                            operatorOptions = new IntegerOperatorOptions() {{
                                                greaterThanOperatorName = "officia";
                                                lessThanOperatorName = "tempora";
                                                operatorName = "ipsam";
                                            }};
                                            orderedRanking = IntegerPropertyOptionsOrderedRankingEnum.ASCENDING;
                                        }};
                                        isFacetable = false;
                                        isRepeatable = false;
                                        isReturnable = false;
                                        isSortable = false;
                                        isSuggestable = false;
                                        isWildcardSearchable = false;
                                        name = "Jessie Schuster";
                                        objectPropertyOptions = new ObjectPropertyOptions() {{
                                            subobjectProperties = new org.openapis.openapi.models.shared.PropertyDefinition[]{{
                                                add(new PropertyDefinition() {{}}),
                                                add(new PropertyDefinition() {{}}),
                                            }};
                                        }};
                                        textPropertyOptions = new TextPropertyOptions() {{
                                            operatorOptions = new TextOperatorOptions() {{
                                                exactMatchWithOperator = false;
                                                operatorName = "laudantium";
                                            }};
                                            retrievalImportance = new RetrievalImportance() {{
                                                importance = RetrievalImportanceImportanceEnum.DEFAULT_;
                                            }};
                                        }};
                                        timestampPropertyOptions = new TimestampPropertyOptions() {{
                                            operatorOptions = new TimestampOperatorOptions() {{
                                                greaterThanOperatorName = "dolor";
                                                lessThanOperatorName = "maiores";
                                                operatorName = "quasi";
                                            }};
                                        }};
                                    }}),
                                    add(new PropertyDefinition() {{
                                        booleanPropertyOptions = new BooleanPropertyOptions() {{
                                            operatorOptions = new BooleanOperatorOptions() {{
                                                operatorName = "ex";
                                            }};
                                        }};
                                        datePropertyOptions = new DatePropertyOptions() {{
                                            operatorOptions = new DateOperatorOptions() {{
                                                greaterThanOperatorName = "nulla";
                                                lessThanOperatorName = "excepturi";
                                                operatorName = "voluptatibus";
                                            }};
                                        }};
                                        displayOptions = new PropertyDisplayOptions() {{
                                            displayLabel = "nostrum";
                                        }};
                                        doublePropertyOptions = new DoublePropertyOptions() {{
                                            operatorOptions = new DoubleOperatorOptions() {{
                                                operatorName = "sapiente";
                                            }};
                                        }};
                                        enumPropertyOptions = new EnumPropertyOptions() {{
                                            operatorOptions = new EnumOperatorOptions() {{
                                                operatorName = "quisquam";
                                            }};
                                            orderedRanking = EnumPropertyOptionsOrderedRankingEnum.DESCENDING;
                                            possibleValues = new org.openapis.openapi.models.shared.EnumValuePair[]{{
                                                add(new EnumValuePair() {{
                                                    integerValue = 774048;
                                                    stringValue = "corporis";
                                                }}),
                                                add(new EnumValuePair() {{
                                                    integerValue = 333145;
                                                    stringValue = "aliquid";
                                                }}),
                                            }};
                                        }};
                                        htmlPropertyOptions = new HtmlPropertyOptions() {{
                                            operatorOptions = new HtmlOperatorOptions() {{
                                                operatorName = "inventore";
                                            }};
                                            retrievalImportance = new RetrievalImportance() {{
                                                importance = RetrievalImportanceImportanceEnum.HIGHEST;
                                            }};
                                        }};
                                        integerPropertyOptions = new IntegerPropertyOptions() {{
                                            integerFacetingOptions = new IntegerFacetingOptions() {{
                                                integerBuckets = new String[]{{
                                                    add("quo"),
                                                    add("consectetur"),
                                                }};
                                            }};
                                            maximumValue = "recusandae";
                                            minimumValue = "aspernatur";
                                            operatorOptions = new IntegerOperatorOptions() {{
                                                greaterThanOperatorName = "minima";
                                                lessThanOperatorName = "eaque";
                                                operatorName = "a";
                                            }};
                                            orderedRanking = IntegerPropertyOptionsOrderedRankingEnum.DESCENDING;
                                        }};
                                        isFacetable = false;
                                        isRepeatable = false;
                                        isReturnable = false;
                                        isSortable = false;
                                        isSuggestable = false;
                                        isWildcardSearchable = false;
                                        name = "Jennifer Lesch";
                                        objectPropertyOptions = new ObjectPropertyOptions() {{
                                            subobjectProperties = new org.openapis.openapi.models.shared.PropertyDefinition[]{{
                                                add(new PropertyDefinition() {{}}),
                                            }};
                                        }};
                                        textPropertyOptions = new TextPropertyOptions() {{
                                            operatorOptions = new TextOperatorOptions() {{
                                                exactMatchWithOperator = false;
                                                operatorName = "accusamus";
                                            }};
                                            retrievalImportance = new RetrievalImportance() {{
                                                importance = RetrievalImportanceImportanceEnum.DEFAULT_;
                                            }};
                                        }};
                                        timestampPropertyOptions = new TimestampPropertyOptions() {{
                                            operatorOptions = new TimestampOperatorOptions() {{
                                                greaterThanOperatorName = "non";
                                                lessThanOperatorName = "et";
                                                operatorName = "dolorum";
                                            }};
                                        }};
                                    }}),
                                    add(new PropertyDefinition() {{
                                        booleanPropertyOptions = new BooleanPropertyOptions() {{
                                            operatorOptions = new BooleanOperatorOptions() {{
                                                operatorName = "laborum";
                                            }};
                                        }};
                                        datePropertyOptions = new DatePropertyOptions() {{
                                            operatorOptions = new DateOperatorOptions() {{
                                                greaterThanOperatorName = "placeat";
                                                lessThanOperatorName = "velit";
                                                operatorName = "eum";
                                            }};
                                        }};
                                        displayOptions = new PropertyDisplayOptions() {{
                                            displayLabel = "autem";
                                        }};
                                        doublePropertyOptions = new DoublePropertyOptions() {{
                                            operatorOptions = new DoubleOperatorOptions() {{
                                                operatorName = "nobis";
                                            }};
                                        }};
                                        enumPropertyOptions = new EnumPropertyOptions() {{
                                            operatorOptions = new EnumOperatorOptions() {{
                                                operatorName = "quas";
                                            }};
                                            orderedRanking = EnumPropertyOptionsOrderedRankingEnum.DESCENDING;
                                            possibleValues = new org.openapis.openapi.models.shared.EnumValuePair[]{{
                                                add(new EnumValuePair() {{
                                                    integerValue = 379034;
                                                    stringValue = "libero";
                                                }}),
                                                add(new EnumValuePair() {{
                                                    integerValue = 96549;
                                                    stringValue = "tempora";
                                                }}),
                                                add(new EnumValuePair() {{
                                                    integerValue = 256139;
                                                    stringValue = "explicabo";
                                                }}),
                                                add(new EnumValuePair() {{
                                                    integerValue = 591935;
                                                    stringValue = "ipsa";
                                                }}),
                                            }};
                                        }};
                                        htmlPropertyOptions = new HtmlPropertyOptions() {{
                                            operatorOptions = new HtmlOperatorOptions() {{
                                                operatorName = "molestiae";
                                            }};
                                            retrievalImportance = new RetrievalImportance() {{
                                                importance = RetrievalImportanceImportanceEnum.HIGHEST;
                                            }};
                                        }};
                                        integerPropertyOptions = new IntegerPropertyOptions() {{
                                            integerFacetingOptions = new IntegerFacetingOptions() {{
                                                integerBuckets = new String[]{{
                                                    add("eius"),
                                                    add("esse"),
                                                }};
                                            }};
                                            maximumValue = "esse";
                                            minimumValue = "rem";
                                            operatorOptions = new IntegerOperatorOptions() {{
                                                greaterThanOperatorName = "fuga";
                                                lessThanOperatorName = "reprehenderit";
                                                operatorName = "quidem";
                                            }};
                                            orderedRanking = IntegerPropertyOptionsOrderedRankingEnum.DESCENDING;
                                        }};
                                        isFacetable = false;
                                        isRepeatable = false;
                                        isReturnable = false;
                                        isSortable = false;
                                        isSuggestable = false;
                                        isWildcardSearchable = false;
                                        name = "Agnes Hoeger";
                                        objectPropertyOptions = new ObjectPropertyOptions() {{
                                            subobjectProperties = new org.openapis.openapi.models.shared.PropertyDefinition[]{{
                                                add(new PropertyDefinition() {{}}),
                                                add(new PropertyDefinition() {{}}),
                                                add(new PropertyDefinition() {{}}),
                                            }};
                                        }};
                                        textPropertyOptions = new TextPropertyOptions() {{
                                            operatorOptions = new TextOperatorOptions() {{
                                                exactMatchWithOperator = false;
                                                operatorName = "quisquam";
                                            }};
                                            retrievalImportance = new RetrievalImportance() {{
                                                importance = RetrievalImportanceImportanceEnum.DEFAULT_;
                                            }};
                                        }};
                                        timestampPropertyOptions = new TimestampPropertyOptions() {{
                                            operatorOptions = new TimestampOperatorOptions() {{
                                                greaterThanOperatorName = "ipsa";
                                                lessThanOperatorName = "id";
                                                operatorName = "quidem";
                                            }};
                                        }};
                                    }}),
                                }};
                            }}),
                            add(new ObjectDefinition() {{
                                name = "Angelica Stamm";
                                options = new ObjectOptions() {{
                                    displayOptions = new ObjectDisplayOptions() {{
                                        metalines = new org.openapis.openapi.models.shared.Metaline[]{{
                                            add(new Metaline() {{
                                                properties = new org.openapis.openapi.models.shared.DisplayedProperty[]{{
                                                    add(new DisplayedProperty() {{
                                                        propertyName = "voluptas";
                                                    }}),
                                                }};
                                            }}),
                                            add(new Metaline() {{
                                                properties = new org.openapis.openapi.models.shared.DisplayedProperty[]{{
                                                    add(new DisplayedProperty() {{
                                                        propertyName = "cupiditate";
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        objectDisplayLabel = "consequatur";
                                    }};
                                    freshnessOptions = new FreshnessOptions() {{
                                        freshnessDuration = "tempora";
                                        freshnessProperty = "debitis";
                                    }};
                                    suggestionFilteringOperators = new String[]{{
                                        add("aspernatur"),
                                        add("sequi"),
                                    }};
                                }};
                                propertyDefinitions = new org.openapis.openapi.models.shared.PropertyDefinition[]{{
                                    add(new PropertyDefinition() {{
                                        booleanPropertyOptions = new BooleanPropertyOptions() {{
                                            operatorOptions = new BooleanOperatorOptions() {{
                                                operatorName = "esse";
                                            }};
                                        }};
                                        datePropertyOptions = new DatePropertyOptions() {{
                                            operatorOptions = new DateOperatorOptions() {{
                                                greaterThanOperatorName = "recusandae";
                                                lessThanOperatorName = "aperiam";
                                                operatorName = "distinctio";
                                            }};
                                        }};
                                        displayOptions = new PropertyDisplayOptions() {{
                                            displayLabel = "quod";
                                        }};
                                        doublePropertyOptions = new DoublePropertyOptions() {{
                                            operatorOptions = new DoubleOperatorOptions() {{
                                                operatorName = "dignissimos";
                                            }};
                                        }};
                                        enumPropertyOptions = new EnumPropertyOptions() {{
                                            operatorOptions = new EnumOperatorOptions() {{
                                                operatorName = "inventore";
                                            }};
                                            orderedRanking = EnumPropertyOptionsOrderedRankingEnum.ASCENDING;
                                            possibleValues = new org.openapis.openapi.models.shared.EnumValuePair[]{{
                                                add(new EnumValuePair() {{
                                                    integerValue = 882710;
                                                    stringValue = "aliquam";
                                                }}),
                                                add(new EnumValuePair() {{
                                                    integerValue = 488410;
                                                    stringValue = "occaecati";
                                                }}),
                                                add(new EnumValuePair() {{
                                                    integerValue = 414567;
                                                    stringValue = "sapiente";
                                                }}),
                                            }};
                                        }};
                                        htmlPropertyOptions = new HtmlPropertyOptions() {{
                                            operatorOptions = new HtmlOperatorOptions() {{
                                                operatorName = "dolores";
                                            }};
                                            retrievalImportance = new RetrievalImportance() {{
                                                importance = RetrievalImportanceImportanceEnum.LOW;
                                            }};
                                        }};
                                        integerPropertyOptions = new IntegerPropertyOptions() {{
                                            integerFacetingOptions = new IntegerFacetingOptions() {{
                                                integerBuckets = new String[]{{
                                                    add("accusantium"),
                                                    add("porro"),
                                                }};
                                            }};
                                            maximumValue = "eum";
                                            minimumValue = "quas";
                                            operatorOptions = new IntegerOperatorOptions() {{
                                                greaterThanOperatorName = "praesentium";
                                                lessThanOperatorName = "consequuntur";
                                                operatorName = "deleniti";
                                            }};
                                            orderedRanking = IntegerPropertyOptionsOrderedRankingEnum.NO_ORDER;
                                        }};
                                        isFacetable = false;
                                        isRepeatable = false;
                                        isReturnable = false;
                                        isSortable = false;
                                        isSuggestable = false;
                                        isWildcardSearchable = false;
                                        name = "Hubert Gottlieb";
                                        objectPropertyOptions = new ObjectPropertyOptions() {{
                                            subobjectProperties = new org.openapis.openapi.models.shared.PropertyDefinition[]{{
                                                add(new PropertyDefinition() {{}}),
                                                add(new PropertyDefinition() {{}}),
                                            }};
                                        }};
                                        textPropertyOptions = new TextPropertyOptions() {{
                                            operatorOptions = new TextOperatorOptions() {{
                                                exactMatchWithOperator = false;
                                                operatorName = "nisi";
                                            }};
                                            retrievalImportance = new RetrievalImportance() {{
                                                importance = RetrievalImportanceImportanceEnum.DEFAULT_;
                                            }};
                                        }};
                                        timestampPropertyOptions = new TimestampPropertyOptions() {{
                                            operatorOptions = new TimestampOperatorOptions() {{
                                                greaterThanOperatorName = "sapiente";
                                                lessThanOperatorName = "consequuntur";
                                                operatorName = "ratione";
                                            }};
                                        }};
                                    }}),
                                    add(new PropertyDefinition() {{
                                        booleanPropertyOptions = new BooleanPropertyOptions() {{
                                            operatorOptions = new BooleanOperatorOptions() {{
                                                operatorName = "explicabo";
                                            }};
                                        }};
                                        datePropertyOptions = new DatePropertyOptions() {{
                                            operatorOptions = new DateOperatorOptions() {{
                                                greaterThanOperatorName = "saepe";
                                                lessThanOperatorName = "occaecati";
                                                operatorName = "atque";
                                            }};
                                        }};
                                        displayOptions = new PropertyDisplayOptions() {{
                                            displayLabel = "et";
                                        }};
                                        doublePropertyOptions = new DoublePropertyOptions() {{
                                            operatorOptions = new DoubleOperatorOptions() {{
                                                operatorName = "esse";
                                            }};
                                        }};
                                        enumPropertyOptions = new EnumPropertyOptions() {{
                                            operatorOptions = new EnumOperatorOptions() {{
                                                operatorName = "eveniet";
                                            }};
                                            orderedRanking = EnumPropertyOptionsOrderedRankingEnum.DESCENDING;
                                            possibleValues = new org.openapis.openapi.models.shared.EnumValuePair[]{{
                                                add(new EnumValuePair() {{
                                                    integerValue = 458604;
                                                    stringValue = "quod";
                                                }}),
                                            }};
                                        }};
                                        htmlPropertyOptions = new HtmlPropertyOptions() {{
                                            operatorOptions = new HtmlOperatorOptions() {{
                                                operatorName = "nam";
                                            }};
                                            retrievalImportance = new RetrievalImportance() {{
                                                importance = RetrievalImportanceImportanceEnum.NONE;
                                            }};
                                        }};
                                        integerPropertyOptions = new IntegerPropertyOptions() {{
                                            integerFacetingOptions = new IntegerFacetingOptions() {{
                                                integerBuckets = new String[]{{
                                                    add("quasi"),
                                                    add("saepe"),
                                                }};
                                            }};
                                            maximumValue = "vel";
                                            minimumValue = "harum";
                                            operatorOptions = new IntegerOperatorOptions() {{
                                                greaterThanOperatorName = "molestiae";
                                                lessThanOperatorName = "rerum";
                                                operatorName = "occaecati";
                                            }};
                                            orderedRanking = IntegerPropertyOptionsOrderedRankingEnum.NO_ORDER;
                                        }};
                                        isFacetable = false;
                                        isRepeatable = false;
                                        isReturnable = false;
                                        isSortable = false;
                                        isSuggestable = false;
                                        isWildcardSearchable = false;
                                        name = "Guillermo Balistreri";
                                        objectPropertyOptions = new ObjectPropertyOptions() {{
                                            subobjectProperties = new org.openapis.openapi.models.shared.PropertyDefinition[]{{
                                                add(new PropertyDefinition() {{}}),
                                            }};
                                        }};
                                        textPropertyOptions = new TextPropertyOptions() {{
                                            operatorOptions = new TextOperatorOptions() {{
                                                exactMatchWithOperator = false;
                                                operatorName = "cumque";
                                            }};
                                            retrievalImportance = new RetrievalImportance() {{
                                                importance = RetrievalImportanceImportanceEnum.DEFAULT_;
                                            }};
                                        }};
                                        timestampPropertyOptions = new TimestampPropertyOptions() {{
                                            operatorOptions = new TimestampOperatorOptions() {{
                                                greaterThanOperatorName = "consequatur";
                                                lessThanOperatorName = "minus";
                                                operatorName = "quaerat";
                                            }};
                                        }};
                                    }}),
                                    add(new PropertyDefinition() {{
                                        booleanPropertyOptions = new BooleanPropertyOptions() {{
                                            operatorOptions = new BooleanOperatorOptions() {{
                                                operatorName = "sapiente";
                                            }};
                                        }};
                                        datePropertyOptions = new DatePropertyOptions() {{
                                            operatorOptions = new DateOperatorOptions() {{
                                                greaterThanOperatorName = "consectetur";
                                                lessThanOperatorName = "esse";
                                                operatorName = "blanditiis";
                                            }};
                                        }};
                                        displayOptions = new PropertyDisplayOptions() {{
                                            displayLabel = "provident";
                                        }};
                                        doublePropertyOptions = new DoublePropertyOptions() {{
                                            operatorOptions = new DoubleOperatorOptions() {{
                                                operatorName = "a";
                                            }};
                                        }};
                                        enumPropertyOptions = new EnumPropertyOptions() {{
                                            operatorOptions = new EnumOperatorOptions() {{
                                                operatorName = "nulla";
                                            }};
                                            orderedRanking = EnumPropertyOptionsOrderedRankingEnum.ASCENDING;
                                            possibleValues = new org.openapis.openapi.models.shared.EnumValuePair[]{{
                                                add(new EnumValuePair() {{
                                                    integerValue = 97468;
                                                    stringValue = "a";
                                                }}),
                                                add(new EnumValuePair() {{
                                                    integerValue = 621679;
                                                    stringValue = "sint";
                                                }}),
                                            }};
                                        }};
                                        htmlPropertyOptions = new HtmlPropertyOptions() {{
                                            operatorOptions = new HtmlOperatorOptions() {{
                                                operatorName = "pariatur";
                                            }};
                                            retrievalImportance = new RetrievalImportance() {{
                                                importance = RetrievalImportanceImportanceEnum.NONE;
                                            }};
                                        }};
                                        integerPropertyOptions = new IntegerPropertyOptions() {{
                                            integerFacetingOptions = new IntegerFacetingOptions() {{
                                                integerBuckets = new String[]{{
                                                    add("eveniet"),
                                                }};
                                            }};
                                            maximumValue = "asperiores";
                                            minimumValue = "facere";
                                            operatorOptions = new IntegerOperatorOptions() {{
                                                greaterThanOperatorName = "veritatis";
                                                lessThanOperatorName = "consequuntur";
                                                operatorName = "quasi";
                                            }};
                                            orderedRanking = IntegerPropertyOptionsOrderedRankingEnum.ASCENDING;
                                        }};
                                        isFacetable = false;
                                        isRepeatable = false;
                                        isReturnable = false;
                                        isSortable = false;
                                        isSuggestable = false;
                                        isWildcardSearchable = false;
                                        name = "Dr. Gene Wiegand";
                                        objectPropertyOptions = new ObjectPropertyOptions() {{
                                            subobjectProperties = new org.openapis.openapi.models.shared.PropertyDefinition[]{{
                                                add(new PropertyDefinition() {{}}),
                                                add(new PropertyDefinition() {{}}),
                                            }};
                                        }};
                                        textPropertyOptions = new TextPropertyOptions() {{
                                            operatorOptions = new TextOperatorOptions() {{
                                                exactMatchWithOperator = false;
                                                operatorName = "eius";
                                            }};
                                            retrievalImportance = new RetrievalImportance() {{
                                                importance = RetrievalImportanceImportanceEnum.LOW;
                                            }};
                                        }};
                                        timestampPropertyOptions = new TimestampPropertyOptions() {{
                                            operatorOptions = new TimestampOperatorOptions() {{
                                                greaterThanOperatorName = "illum";
                                                lessThanOperatorName = "soluta";
                                                operatorName = "accusantium";
                                            }};
                                        }};
                                    }}),
                                    add(new PropertyDefinition() {{
                                        booleanPropertyOptions = new BooleanPropertyOptions() {{
                                            operatorOptions = new BooleanOperatorOptions() {{
                                                operatorName = "aliquam";
                                            }};
                                        }};
                                        datePropertyOptions = new DatePropertyOptions() {{
                                            operatorOptions = new DateOperatorOptions() {{
                                                greaterThanOperatorName = "sapiente";
                                                lessThanOperatorName = "dicta";
                                                operatorName = "ullam";
                                            }};
                                        }};
                                        displayOptions = new PropertyDisplayOptions() {{
                                            displayLabel = "reprehenderit";
                                        }};
                                        doublePropertyOptions = new DoublePropertyOptions() {{
                                            operatorOptions = new DoubleOperatorOptions() {{
                                                operatorName = "ullam";
                                            }};
                                        }};
                                        enumPropertyOptions = new EnumPropertyOptions() {{
                                            operatorOptions = new EnumOperatorOptions() {{
                                                operatorName = "nisi";
                                            }};
                                            orderedRanking = EnumPropertyOptionsOrderedRankingEnum.NO_ORDER;
                                            possibleValues = new org.openapis.openapi.models.shared.EnumValuePair[]{{
                                                add(new EnumValuePair() {{
                                                    integerValue = 185232;
                                                    stringValue = "quibusdam";
                                                }}),
                                                add(new EnumValuePair() {{
                                                    integerValue = 401259;
                                                    stringValue = "deleniti";
                                                }}),
                                                add(new EnumValuePair() {{
                                                    integerValue = 929292;
                                                    stringValue = "dolorum";
                                                }}),
                                            }};
                                        }};
                                        htmlPropertyOptions = new HtmlPropertyOptions() {{
                                            operatorOptions = new HtmlOperatorOptions() {{
                                                operatorName = "architecto";
                                            }};
                                            retrievalImportance = new RetrievalImportance() {{
                                                importance = RetrievalImportanceImportanceEnum.LOW;
                                            }};
                                        }};
                                        integerPropertyOptions = new IntegerPropertyOptions() {{
                                            integerFacetingOptions = new IntegerFacetingOptions() {{
                                                integerBuckets = new String[]{{
                                                    add("quasi"),
                                                    add("at"),
                                                    add("et"),
                                                    add("voluptate"),
                                                }};
                                            }};
                                            maximumValue = "ipsa";
                                            minimumValue = "minima";
                                            operatorOptions = new IntegerOperatorOptions() {{
                                                greaterThanOperatorName = "veritatis";
                                                lessThanOperatorName = "consectetur";
                                                operatorName = "adipisci";
                                            }};
                                            orderedRanking = IntegerPropertyOptionsOrderedRankingEnum.ASCENDING;
                                        }};
                                        isFacetable = false;
                                        isRepeatable = false;
                                        isReturnable = false;
                                        isSortable = false;
                                        isSuggestable = false;
                                        isWildcardSearchable = false;
                                        name = "Ms. Kenneth Ledner";
                                        objectPropertyOptions = new ObjectPropertyOptions() {{
                                            subobjectProperties = new org.openapis.openapi.models.shared.PropertyDefinition[]{{
                                                add(new PropertyDefinition() {{}}),
                                                add(new PropertyDefinition() {{}}),
                                                add(new PropertyDefinition() {{}}),
                                            }};
                                        }};
                                        textPropertyOptions = new TextPropertyOptions() {{
                                            operatorOptions = new TextOperatorOptions() {{
                                                exactMatchWithOperator = false;
                                                operatorName = "ab";
                                            }};
                                            retrievalImportance = new RetrievalImportance() {{
                                                importance = RetrievalImportanceImportanceEnum.HIGH;
                                            }};
                                        }};
                                        timestampPropertyOptions = new TimestampPropertyOptions() {{
                                            operatorOptions = new TimestampOperatorOptions() {{
                                                greaterThanOperatorName = "non";
                                                lessThanOperatorName = "voluptatem";
                                                operatorName = "dolor";
                                            }};
                                        }};
                                    }}),
                                }};
                            }}),
                            add(new ObjectDefinition() {{
                                name = "Francis Russel";
                                options = new ObjectOptions() {{
                                    displayOptions = new ObjectDisplayOptions() {{
                                        metalines = new org.openapis.openapi.models.shared.Metaline[]{{
                                            add(new Metaline() {{
                                                properties = new org.openapis.openapi.models.shared.DisplayedProperty[]{{
                                                    add(new DisplayedProperty() {{
                                                        propertyName = "dicta";
                                                    }}),
                                                    add(new DisplayedProperty() {{
                                                        propertyName = "maiores";
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        objectDisplayLabel = "natus";
                                    }};
                                    freshnessOptions = new FreshnessOptions() {{
                                        freshnessDuration = "velit";
                                        freshnessProperty = "voluptatibus";
                                    }};
                                    suggestionFilteringOperators = new String[]{{
                                        add("asperiores"),
                                        add("aperiam"),
                                    }};
                                }};
                                propertyDefinitions = new org.openapis.openapi.models.shared.PropertyDefinition[]{{
                                    add(new PropertyDefinition() {{
                                        booleanPropertyOptions = new BooleanPropertyOptions() {{
                                            operatorOptions = new BooleanOperatorOptions() {{
                                                operatorName = "quaerat";
                                            }};
                                        }};
                                        datePropertyOptions = new DatePropertyOptions() {{
                                            operatorOptions = new DateOperatorOptions() {{
                                                greaterThanOperatorName = "consequuntur";
                                                lessThanOperatorName = "repellendus";
                                                operatorName = "officia";
                                            }};
                                        }};
                                        displayOptions = new PropertyDisplayOptions() {{
                                            displayLabel = "maxime";
                                        }};
                                        doublePropertyOptions = new DoublePropertyOptions() {{
                                            operatorOptions = new DoubleOperatorOptions() {{
                                                operatorName = "dignissimos";
                                            }};
                                        }};
                                        enumPropertyOptions = new EnumPropertyOptions() {{
                                            operatorOptions = new EnumOperatorOptions() {{
                                                operatorName = "officia";
                                            }};
                                            orderedRanking = EnumPropertyOptionsOrderedRankingEnum.DESCENDING;
                                            possibleValues = new org.openapis.openapi.models.shared.EnumValuePair[]{{
                                                add(new EnumValuePair() {{
                                                    integerValue = 65304;
                                                    stringValue = "quaerat";
                                                }}),
                                                add(new EnumValuePair() {{
                                                    integerValue = 783235;
                                                    stringValue = "quod";
                                                }}),
                                            }};
                                        }};
                                        htmlPropertyOptions = new HtmlPropertyOptions() {{
                                            operatorOptions = new HtmlOperatorOptions() {{
                                                operatorName = "labore";
                                            }};
                                            retrievalImportance = new RetrievalImportance() {{
                                                importance = RetrievalImportanceImportanceEnum.DEFAULT_;
                                            }};
                                        }};
                                        integerPropertyOptions = new IntegerPropertyOptions() {{
                                            integerFacetingOptions = new IntegerFacetingOptions() {{
                                                integerBuckets = new String[]{{
                                                    add("fuga"),
                                                }};
                                            }};
                                            maximumValue = "id";
                                            minimumValue = "suscipit";
                                            operatorOptions = new IntegerOperatorOptions() {{
                                                greaterThanOperatorName = "velit";
                                                lessThanOperatorName = "culpa";
                                                operatorName = "est";
                                            }};
                                            orderedRanking = IntegerPropertyOptionsOrderedRankingEnum.DESCENDING;
                                        }};
                                        isFacetable = false;
                                        isRepeatable = false;
                                        isReturnable = false;
                                        isSortable = false;
                                        isSuggestable = false;
                                        isWildcardSearchable = false;
                                        name = "Nicolas Kassulke";
                                        objectPropertyOptions = new ObjectPropertyOptions() {{
                                            subobjectProperties = new org.openapis.openapi.models.shared.PropertyDefinition[]{{
                                                add(new PropertyDefinition() {{}}),
                                                add(new PropertyDefinition() {{}}),
                                            }};
                                        }};
                                        textPropertyOptions = new TextPropertyOptions() {{
                                            operatorOptions = new TextOperatorOptions() {{
                                                exactMatchWithOperator = false;
                                                operatorName = "labore";
                                            }};
                                            retrievalImportance = new RetrievalImportance() {{
                                                importance = RetrievalImportanceImportanceEnum.NONE;
                                            }};
                                        }};
                                        timestampPropertyOptions = new TimestampPropertyOptions() {{
                                            operatorOptions = new TimestampOperatorOptions() {{
                                                greaterThanOperatorName = "facilis";
                                                lessThanOperatorName = "cum";
                                                operatorName = "commodi";
                                            }};
                                        }};
                                    }}),
                                    add(new PropertyDefinition() {{
                                        booleanPropertyOptions = new BooleanPropertyOptions() {{
                                            operatorOptions = new BooleanOperatorOptions() {{
                                                operatorName = "in";
                                            }};
                                        }};
                                        datePropertyOptions = new DatePropertyOptions() {{
                                            operatorOptions = new DateOperatorOptions() {{
                                                greaterThanOperatorName = "corporis";
                                                lessThanOperatorName = "reiciendis";
                                                operatorName = "assumenda";
                                            }};
                                        }};
                                        displayOptions = new PropertyDisplayOptions() {{
                                            displayLabel = "nemo";
                                        }};
                                        doublePropertyOptions = new DoublePropertyOptions() {{
                                            operatorOptions = new DoubleOperatorOptions() {{
                                                operatorName = "recusandae";
                                            }};
                                        }};
                                        enumPropertyOptions = new EnumPropertyOptions() {{
                                            operatorOptions = new EnumOperatorOptions() {{
                                                operatorName = "aliquid";
                                            }};
                                            orderedRanking = EnumPropertyOptionsOrderedRankingEnum.NO_ORDER;
                                            possibleValues = new org.openapis.openapi.models.shared.EnumValuePair[]{{
                                                add(new EnumValuePair() {{
                                                    integerValue = 232627;
                                                    stringValue = "in";
                                                }}),
                                                add(new EnumValuePair() {{
                                                    integerValue = 348519;
                                                    stringValue = "earum";
                                                }}),
                                                add(new EnumValuePair() {{
                                                    integerValue = 814967;
                                                    stringValue = "numquam";
                                                }}),
                                            }};
                                        }};
                                        htmlPropertyOptions = new HtmlPropertyOptions() {{
                                            operatorOptions = new HtmlOperatorOptions() {{
                                                operatorName = "doloribus";
                                            }};
                                            retrievalImportance = new RetrievalImportance() {{
                                                importance = RetrievalImportanceImportanceEnum.HIGHEST;
                                            }};
                                        }};
                                        integerPropertyOptions = new IntegerPropertyOptions() {{
                                            integerFacetingOptions = new IntegerFacetingOptions() {{
                                                integerBuckets = new String[]{{
                                                    add("quidem"),
                                                    add("saepe"),
                                                    add("necessitatibus"),
                                                    add("dolore"),
                                                }};
                                            }};
                                            maximumValue = "sunt";
                                            minimumValue = "asperiores";
                                            operatorOptions = new IntegerOperatorOptions() {{
                                                greaterThanOperatorName = "adipisci";
                                                lessThanOperatorName = "non";
                                                operatorName = "amet";
                                            }};
                                            orderedRanking = IntegerPropertyOptionsOrderedRankingEnum.NO_ORDER;
                                        }};
                                        isFacetable = false;
                                        isRepeatable = false;
                                        isReturnable = false;
                                        isSortable = false;
                                        isSuggestable = false;
                                        isWildcardSearchable = false;
                                        name = "Lorene Toy";
                                        objectPropertyOptions = new ObjectPropertyOptions() {{
                                            subobjectProperties = new org.openapis.openapi.models.shared.PropertyDefinition[]{{
                                                add(new PropertyDefinition() {{}}),
                                                add(new PropertyDefinition() {{}}),
                                                add(new PropertyDefinition() {{}}),
                                            }};
                                        }};
                                        textPropertyOptions = new TextPropertyOptions() {{
                                            operatorOptions = new TextOperatorOptions() {{
                                                exactMatchWithOperator = false;
                                                operatorName = "laboriosam";
                                            }};
                                            retrievalImportance = new RetrievalImportance() {{
                                                importance = RetrievalImportanceImportanceEnum.DEFAULT_;
                                            }};
                                        }};
                                        timestampPropertyOptions = new TimestampPropertyOptions() {{
                                            operatorOptions = new TimestampOperatorOptions() {{
                                                greaterThanOperatorName = "voluptates";
                                                lessThanOperatorName = "libero";
                                                operatorName = "vitae";
                                            }};
                                        }};
                                    }}),
                                }};
                            }}),
                        }};
                        operationIds = new String[]{{
                            add("similique"),
                            add("tempora"),
                            add("aspernatur"),
                            add("voluptas"),
                        }};
                    }};;
                    validateOnly = false;
                }};;
                accessToken = "voluptas";
                alt = AltEnum.MEDIA;
                callback = "minima";
                fields = "nobis";
                key = "dolorum";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "dolores";
                uploadProtocol = "blanditiis";
            }};            

            CloudsearchIndexingDatasourcesUpdateSchemaResponse res = sdk.indexing.cloudsearchIndexingDatasourcesUpdateSchema(req, new CloudsearchIndexingDatasourcesUpdateSchemaSecurity() {{
                option1 = new CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption1("in", "dolore") {{
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
