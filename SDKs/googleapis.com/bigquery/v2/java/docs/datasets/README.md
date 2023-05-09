# datasets

### Available Operations

* [bigqueryDatasetsDelete](#bigquerydatasetsdelete) - Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.
* [bigqueryDatasetsGet](#bigquerydatasetsget) - Returns the dataset specified by datasetID.
* [bigqueryDatasetsInsert](#bigquerydatasetsinsert) - Creates a new empty dataset.
* [bigqueryDatasetsList](#bigquerydatasetslist) - Lists all datasets in the specified project to which you have been granted the READER dataset role.
* [bigqueryDatasetsPatch](#bigquerydatasetspatch) - Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports patch semantics.
* [bigqueryDatasetsUpdate](#bigquerydatasetsupdate) - Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.

## bigqueryDatasetsDelete

Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryDatasetsDeleteRequest;
import org.openapis.openapi.models.operations.BigqueryDatasetsDeleteResponse;
import org.openapis.openapi.models.operations.BigqueryDatasetsDeleteSecurity;
import org.openapis.openapi.models.operations.BigqueryDatasetsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryDatasetsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryDatasetsDeleteRequest req = new BigqueryDatasetsDeleteRequest("error", "deserunt") {{
                alt = AltEnum.JSON;
                deleteContents = false;
                fields = "suscipit";
                key = "iure";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "debitis";
                userIp = "ipsa";
            }};            

            BigqueryDatasetsDeleteResponse res = sdk.datasets.bigqueryDatasetsDelete(req, new BigqueryDatasetsDeleteSecurity() {{
                option1 = new BigqueryDatasetsDeleteSecurityOption1("delectus", "tempora") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryDatasetsGet

Returns the dataset specified by datasetID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryDatasetsGetRequest;
import org.openapis.openapi.models.operations.BigqueryDatasetsGetResponse;
import org.openapis.openapi.models.operations.BigqueryDatasetsGetSecurity;
import org.openapis.openapi.models.operations.BigqueryDatasetsGetSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryDatasetsGetSecurityOption2;
import org.openapis.openapi.models.operations.BigqueryDatasetsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryDatasetsGetRequest req = new BigqueryDatasetsGetRequest("suscipit", "molestiae") {{
                alt = AltEnum.JSON;
                fields = "minus";
                key = "placeat";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "iusto";
                userIp = "excepturi";
            }};            

            BigqueryDatasetsGetResponse res = sdk.datasets.bigqueryDatasetsGet(req, new BigqueryDatasetsGetSecurity() {{
                option1 = new BigqueryDatasetsGetSecurityOption1("nisi", "recusandae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.dataset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryDatasetsInsert

Creates a new empty dataset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryDatasetsInsertRequest;
import org.openapis.openapi.models.operations.BigqueryDatasetsInsertResponse;
import org.openapis.openapi.models.operations.BigqueryDatasetsInsertSecurity;
import org.openapis.openapi.models.operations.BigqueryDatasetsInsertSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryDatasetsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Dataset;
import org.openapis.openapi.models.shared.DatasetAccess;
import org.openapis.openapi.models.shared.DatasetAccessEntry;
import org.openapis.openapi.models.shared.DatasetAccessEntryTargetTypesEnum;
import org.openapis.openapi.models.shared.DatasetReference;
import org.openapis.openapi.models.shared.DatasetTags;
import org.openapis.openapi.models.shared.EncryptionConfiguration;
import org.openapis.openapi.models.shared.RoutineReference;
import org.openapis.openapi.models.shared.TableReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryDatasetsInsertRequest req = new BigqueryDatasetsInsertRequest("temporibus") {{
                dataset = new Dataset() {{
                    access = new org.openapis.openapi.models.shared.DatasetAccess[]{{
                        add(new DatasetAccess() {{
                            dataset = new DatasetAccessEntry() {{
                                dataset = new DatasetReference() {{
                                    datasetId = "quis";
                                    projectId = "veritatis";
                                }};
                                targetTypes = new org.openapis.openapi.models.shared.DatasetAccessEntryTargetTypesEnum[]{{
                                    add(DatasetAccessEntryTargetTypesEnum.TARGET_TYPE_UNSPECIFIED),
                                    add(DatasetAccessEntryTargetTypesEnum.VIEWS),
                                    add(DatasetAccessEntryTargetTypesEnum.ROUTINES),
                                }};
                            }};
                            domain = "sapiente";
                            groupByEmail = "quo";
                            iamMember = "odit";
                            role = "at";
                            routine = new RoutineReference() {{
                                datasetId = "at";
                                projectId = "maiores";
                                routineId = "molestiae";
                            }};
                            specialGroup = "quod";
                            userByEmail = "quod";
                            view = new TableReference() {{
                                datasetId = "esse";
                                projectId = "totam";
                                tableId = "porro";
                            }};
                        }}),
                    }};
                    creationTime = "dolorum";
                    datasetReference = new DatasetReference() {{
                        datasetId = "dicta";
                        projectId = "nam";
                    }};;
                    defaultCollation = "officia";
                    defaultEncryptionConfiguration = new EncryptionConfiguration() {{
                        kmsKeyName = "occaecati";
                    }};;
                    defaultPartitionExpirationMs = "fugit";
                    defaultRoundingMode = "deleniti";
                    defaultTableExpirationMs = "hic";
                    description = "optio";
                    etag = "totam";
                    friendlyName = "beatae";
                    id = "6742cb73-9205-4929-b96f-ea7596eb10fa";
                    isCaseInsensitive = false;
                    kind = "mollitia";
                    labels = new java.util.HashMap<String, String>() {{
                        put("dolores", "dolorem");
                        put("corporis", "explicabo");
                        put("nobis", "enim");
                    }};
                    lastModifiedTime = "omnis";
                    location = "nemo";
                    maxTimeTravelHours = "minima";
                    satisfiesPzs = false;
                    selfLink = "excepturi";
                    storageBillingModel = "accusantium";
                    tags = new org.openapis.openapi.models.shared.DatasetTags[]{{
                        add(new DatasetTags() {{
                            tagKey = "culpa";
                            tagValue = "doloribus";
                        }}),
                        add(new DatasetTags() {{
                            tagKey = "sapiente";
                            tagValue = "architecto";
                        }}),
                    }};
                }};;
                alt = AltEnum.JSON;
                fields = "mollitia";
                key = "dolorem";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "consequuntur";
                userIp = "repellat";
            }};            

            BigqueryDatasetsInsertResponse res = sdk.datasets.bigqueryDatasetsInsert(req, new BigqueryDatasetsInsertSecurity() {{
                option1 = new BigqueryDatasetsInsertSecurityOption1("mollitia", "occaecati") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.dataset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryDatasetsList

Lists all datasets in the specified project to which you have been granted the READER dataset role.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryDatasetsListRequest;
import org.openapis.openapi.models.operations.BigqueryDatasetsListResponse;
import org.openapis.openapi.models.operations.BigqueryDatasetsListSecurity;
import org.openapis.openapi.models.operations.BigqueryDatasetsListSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryDatasetsListSecurityOption2;
import org.openapis.openapi.models.operations.BigqueryDatasetsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryDatasetsListRequest req = new BigqueryDatasetsListRequest("numquam") {{
                all = false;
                alt = AltEnum.JSON;
                fields = "commodi";
                filter = "quam";
                key = "molestiae";
                maxResults = 244425L;
                oauthToken = "error";
                pageToken = "quia";
                prettyPrint = false;
                quotaUser = "quis";
                userIp = "vitae";
            }};            

            BigqueryDatasetsListResponse res = sdk.datasets.bigqueryDatasetsList(req, new BigqueryDatasetsListSecurity() {{
                option1 = new BigqueryDatasetsListSecurityOption1("laborum", "animi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.datasetList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryDatasetsPatch

Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryDatasetsPatchRequest;
import org.openapis.openapi.models.operations.BigqueryDatasetsPatchResponse;
import org.openapis.openapi.models.operations.BigqueryDatasetsPatchSecurity;
import org.openapis.openapi.models.operations.BigqueryDatasetsPatchSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryDatasetsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Dataset;
import org.openapis.openapi.models.shared.DatasetAccess;
import org.openapis.openapi.models.shared.DatasetAccessEntry;
import org.openapis.openapi.models.shared.DatasetAccessEntryTargetTypesEnum;
import org.openapis.openapi.models.shared.DatasetReference;
import org.openapis.openapi.models.shared.DatasetTags;
import org.openapis.openapi.models.shared.EncryptionConfiguration;
import org.openapis.openapi.models.shared.RoutineReference;
import org.openapis.openapi.models.shared.TableReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryDatasetsPatchRequest req = new BigqueryDatasetsPatchRequest("enim", "odit") {{
                dataset = new Dataset() {{
                    access = new org.openapis.openapi.models.shared.DatasetAccess[]{{
                        add(new DatasetAccess() {{
                            dataset = new DatasetAccessEntry() {{
                                dataset = new DatasetReference() {{
                                    datasetId = "sequi";
                                    projectId = "tenetur";
                                }};
                                targetTypes = new org.openapis.openapi.models.shared.DatasetAccessEntryTargetTypesEnum[]{{
                                    add(DatasetAccessEntryTargetTypesEnum.VIEWS),
                                    add(DatasetAccessEntryTargetTypesEnum.ROUTINES),
                                }};
                            }};
                            domain = "aut";
                            groupByEmail = "quasi";
                            iamMember = "error";
                            role = "temporibus";
                            routine = new RoutineReference() {{
                                datasetId = "laborum";
                                projectId = "quasi";
                                routineId = "reiciendis";
                            }};
                            specialGroup = "voluptatibus";
                            userByEmail = "vero";
                            view = new TableReference() {{
                                datasetId = "nihil";
                                projectId = "praesentium";
                                tableId = "voluptatibus";
                            }};
                        }}),
                        add(new DatasetAccess() {{
                            dataset = new DatasetAccessEntry() {{
                                dataset = new DatasetReference() {{
                                    datasetId = "ipsa";
                                    projectId = "omnis";
                                }};
                                targetTypes = new org.openapis.openapi.models.shared.DatasetAccessEntryTargetTypesEnum[]{{
                                    add(DatasetAccessEntryTargetTypesEnum.ROUTINES),
                                    add(DatasetAccessEntryTargetTypesEnum.TARGET_TYPE_UNSPECIFIED),
                                }};
                            }};
                            domain = "doloremque";
                            groupByEmail = "reprehenderit";
                            iamMember = "ut";
                            role = "maiores";
                            routine = new RoutineReference() {{
                                datasetId = "dicta";
                                projectId = "corporis";
                                routineId = "dolore";
                            }};
                            specialGroup = "iusto";
                            userByEmail = "dicta";
                            view = new TableReference() {{
                                datasetId = "harum";
                                projectId = "enim";
                                tableId = "accusamus";
                            }};
                        }}),
                        add(new DatasetAccess() {{
                            dataset = new DatasetAccessEntry() {{
                                dataset = new DatasetReference() {{
                                    datasetId = "commodi";
                                    projectId = "repudiandae";
                                }};
                                targetTypes = new org.openapis.openapi.models.shared.DatasetAccessEntryTargetTypesEnum[]{{
                                    add(DatasetAccessEntryTargetTypesEnum.TARGET_TYPE_UNSPECIFIED),
                                }};
                            }};
                            domain = "quidem";
                            groupByEmail = "molestias";
                            iamMember = "excepturi";
                            role = "pariatur";
                            routine = new RoutineReference() {{
                                datasetId = "modi";
                                projectId = "praesentium";
                                routineId = "rem";
                            }};
                            specialGroup = "voluptates";
                            userByEmail = "quasi";
                            view = new TableReference() {{
                                datasetId = "repudiandae";
                                projectId = "sint";
                                tableId = "veritatis";
                            }};
                        }}),
                        add(new DatasetAccess() {{
                            dataset = new DatasetAccessEntry() {{
                                dataset = new DatasetReference() {{
                                    datasetId = "itaque";
                                    projectId = "incidunt";
                                }};
                                targetTypes = new org.openapis.openapi.models.shared.DatasetAccessEntryTargetTypesEnum[]{{
                                    add(DatasetAccessEntryTargetTypesEnum.TARGET_TYPE_UNSPECIFIED),
                                    add(DatasetAccessEntryTargetTypesEnum.ROUTINES),
                                }};
                            }};
                            domain = "quibusdam";
                            groupByEmail = "explicabo";
                            iamMember = "deserunt";
                            role = "distinctio";
                            routine = new RoutineReference() {{
                                datasetId = "quibusdam";
                                projectId = "labore";
                                routineId = "modi";
                            }};
                            specialGroup = "qui";
                            userByEmail = "aliquid";
                            view = new TableReference() {{
                                datasetId = "cupiditate";
                                projectId = "quos";
                                tableId = "perferendis";
                            }};
                        }}),
                    }};
                    creationTime = "magni";
                    datasetReference = new DatasetReference() {{
                        datasetId = "assumenda";
                        projectId = "ipsam";
                    }};;
                    defaultCollation = "alias";
                    defaultEncryptionConfiguration = new EncryptionConfiguration() {{
                        kmsKeyName = "fugit";
                    }};;
                    defaultPartitionExpirationMs = "dolorum";
                    defaultRoundingMode = "excepturi";
                    defaultTableExpirationMs = "tempora";
                    description = "facilis";
                    etag = "tempore";
                    friendlyName = "labore";
                    id = "f63c969e-9a3e-4fa7-bdfb-14cd66ae395e";
                    isCaseInsensitive = false;
                    kind = "delectus";
                    labels = new java.util.HashMap<String, String>() {{
                        put("provident", "nam");
                        put("id", "blanditiis");
                        put("deleniti", "sapiente");
                    }};
                    lastModifiedTime = "amet";
                    location = "deserunt";
                    maxTimeTravelHours = "nisi";
                    satisfiesPzs = false;
                    selfLink = "vel";
                    storageBillingModel = "natus";
                    tags = new org.openapis.openapi.models.shared.DatasetTags[]{{
                        add(new DatasetTags() {{
                            tagKey = "molestiae";
                            tagValue = "perferendis";
                        }}),
                        add(new DatasetTags() {{
                            tagKey = "nihil";
                            tagValue = "magnam";
                        }}),
                        add(new DatasetTags() {{
                            tagKey = "distinctio";
                            tagValue = "id";
                        }}),
                    }};
                }};;
                alt = AltEnum.JSON;
                fields = "labore";
                key = "labore";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "natus";
                userIp = "nobis";
            }};            

            BigqueryDatasetsPatchResponse res = sdk.datasets.bigqueryDatasetsPatch(req, new BigqueryDatasetsPatchSecurity() {{
                option1 = new BigqueryDatasetsPatchSecurityOption1("eum", "vero") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.dataset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryDatasetsUpdate

Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryDatasetsUpdateRequest;
import org.openapis.openapi.models.operations.BigqueryDatasetsUpdateResponse;
import org.openapis.openapi.models.operations.BigqueryDatasetsUpdateSecurity;
import org.openapis.openapi.models.operations.BigqueryDatasetsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryDatasetsUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Dataset;
import org.openapis.openapi.models.shared.DatasetAccess;
import org.openapis.openapi.models.shared.DatasetAccessEntry;
import org.openapis.openapi.models.shared.DatasetAccessEntryTargetTypesEnum;
import org.openapis.openapi.models.shared.DatasetReference;
import org.openapis.openapi.models.shared.DatasetTags;
import org.openapis.openapi.models.shared.EncryptionConfiguration;
import org.openapis.openapi.models.shared.RoutineReference;
import org.openapis.openapi.models.shared.TableReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryDatasetsUpdateRequest req = new BigqueryDatasetsUpdateRequest("aspernatur", "architecto") {{
                dataset = new Dataset() {{
                    access = new org.openapis.openapi.models.shared.DatasetAccess[]{{
                        add(new DatasetAccess() {{
                            dataset = new DatasetAccessEntry() {{
                                dataset = new DatasetReference() {{
                                    datasetId = "et";
                                    projectId = "excepturi";
                                }};
                                targetTypes = new org.openapis.openapi.models.shared.DatasetAccessEntryTargetTypesEnum[]{{
                                    add(DatasetAccessEntryTargetTypesEnum.VIEWS),
                                    add(DatasetAccessEntryTargetTypesEnum.VIEWS),
                                }};
                            }};
                            domain = "sint";
                            groupByEmail = "accusantium";
                            iamMember = "mollitia";
                            role = "reiciendis";
                            routine = new RoutineReference() {{
                                datasetId = "mollitia";
                                projectId = "ad";
                                routineId = "eum";
                            }};
                            specialGroup = "dolor";
                            userByEmail = "necessitatibus";
                            view = new TableReference() {{
                                datasetId = "odit";
                                projectId = "nemo";
                                tableId = "quasi";
                            }};
                        }}),
                        add(new DatasetAccess() {{
                            dataset = new DatasetAccessEntry() {{
                                dataset = new DatasetReference() {{
                                    datasetId = "iure";
                                    projectId = "doloribus";
                                }};
                                targetTypes = new org.openapis.openapi.models.shared.DatasetAccessEntryTargetTypesEnum[]{{
                                    add(DatasetAccessEntryTargetTypesEnum.TARGET_TYPE_UNSPECIFIED),
                                    add(DatasetAccessEntryTargetTypesEnum.ROUTINES),
                                    add(DatasetAccessEntryTargetTypesEnum.VIEWS),
                                    add(DatasetAccessEntryTargetTypesEnum.ROUTINES),
                                }};
                            }};
                            domain = "in";
                            groupByEmail = "architecto";
                            iamMember = "architecto";
                            role = "repudiandae";
                            routine = new RoutineReference() {{
                                datasetId = "ullam";
                                projectId = "expedita";
                                routineId = "nihil";
                            }};
                            specialGroup = "repellat";
                            userByEmail = "quibusdam";
                            view = new TableReference() {{
                                datasetId = "sed";
                                projectId = "saepe";
                                tableId = "pariatur";
                            }};
                        }}),
                    }};
                    creationTime = "accusantium";
                    datasetReference = new DatasetReference() {{
                        datasetId = "consequuntur";
                        projectId = "praesentium";
                    }};;
                    defaultCollation = "natus";
                    defaultEncryptionConfiguration = new EncryptionConfiguration() {{
                        kmsKeyName = "magni";
                    }};;
                    defaultPartitionExpirationMs = "sunt";
                    defaultRoundingMode = "quo";
                    defaultTableExpirationMs = "illum";
                    description = "pariatur";
                    etag = "maxime";
                    friendlyName = "ea";
                    id = "92601fb5-76b0-4d5f-8d30-c5fbb2587053";
                    isCaseInsensitive = false;
                    kind = "eos";
                    labels = new java.util.HashMap<String, String>() {{
                        put("dolores", "minus");
                    }};
                    lastModifiedTime = "quam";
                    location = "dolor";
                    maxTimeTravelHours = "vero";
                    satisfiesPzs = false;
                    selfLink = "nostrum";
                    storageBillingModel = "hic";
                    tags = new org.openapis.openapi.models.shared.DatasetTags[]{{
                        add(new DatasetTags() {{
                            tagKey = "omnis";
                            tagValue = "facilis";
                        }}),
                        add(new DatasetTags() {{
                            tagKey = "perspiciatis";
                            tagValue = "voluptatem";
                        }}),
                        add(new DatasetTags() {{
                            tagKey = "porro";
                            tagValue = "consequuntur";
                        }}),
                        add(new DatasetTags() {{
                            tagKey = "blanditiis";
                            tagValue = "error";
                        }}),
                    }};
                }};;
                alt = AltEnum.JSON;
                fields = "eaque";
                key = "occaecati";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "adipisci";
                userIp = "asperiores";
            }};            

            BigqueryDatasetsUpdateResponse res = sdk.datasets.bigqueryDatasetsUpdate(req, new BigqueryDatasetsUpdateSecurity() {{
                option1 = new BigqueryDatasetsUpdateSecurityOption1("earum", "modi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.dataset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
