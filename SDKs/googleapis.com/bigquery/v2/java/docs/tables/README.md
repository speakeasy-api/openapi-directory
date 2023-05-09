# tables

### Available Operations

* [bigqueryTablesDelete](#bigquerytablesdelete) - Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.
* [bigqueryTablesGet](#bigquerytablesget) - Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.
* [bigqueryTablesGetIamPolicy](#bigquerytablesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [bigqueryTablesInsert](#bigquerytablesinsert) - Creates a new, empty table in the dataset.
* [bigqueryTablesList](#bigquerytableslist) - Lists all tables in the specified dataset. Requires the READER dataset role.
* [bigqueryTablesPatch](#bigquerytablespatch) - Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports patch semantics.
* [bigqueryTablesSetIamPolicy](#bigquerytablessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [bigqueryTablesTestIamPermissions](#bigquerytablestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [bigqueryTablesUpdate](#bigquerytablesupdate) - Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource.

## bigqueryTablesDelete

Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryTablesDeleteRequest;
import org.openapis.openapi.models.operations.BigqueryTablesDeleteResponse;
import org.openapis.openapi.models.operations.BigqueryTablesDeleteSecurity;
import org.openapis.openapi.models.operations.BigqueryTablesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryTablesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryTablesDeleteRequest req = new BigqueryTablesDeleteRequest("tempora", "quibusdam", "deleniti") {{
                alt = AltEnum.JSON;
                fields = "quas";
                key = "magnam";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "expedita";
                userIp = "sapiente";
            }};            

            BigqueryTablesDeleteResponse res = sdk.tables.bigqueryTablesDelete(req, new BigqueryTablesDeleteSecurity() {{
                option1 = new BigqueryTablesDeleteSecurityOption1("deleniti", "explicabo") {{
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

## bigqueryTablesGet

Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryTablesGetRequest;
import org.openapis.openapi.models.operations.BigqueryTablesGetResponse;
import org.openapis.openapi.models.operations.BigqueryTablesGetSecurity;
import org.openapis.openapi.models.operations.BigqueryTablesGetSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryTablesGetSecurityOption2;
import org.openapis.openapi.models.operations.BigqueryTablesGetSecurityOption3;
import org.openapis.openapi.models.operations.BigqueryTablesGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryTablesGetRequest req = new BigqueryTablesGetRequest("veritatis", "incidunt", "eligendi") {{
                alt = AltEnum.JSON;
                fields = "amet";
                key = "ipsum";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "hic";
                selectedFields = "occaecati";
                userIp = "iure";
                view = BigqueryTablesGetViewEnum.STORAGE_STATS;
            }};            

            BigqueryTablesGetResponse res = sdk.tables.bigqueryTablesGet(req, new BigqueryTablesGetSecurity() {{
                option1 = new BigqueryTablesGetSecurityOption1("cum", "eaque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.table != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryTablesGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryTablesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.BigqueryTablesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.BigqueryTablesGetIamPolicySecurity;
import org.openapis.openapi.models.operations.BigqueryTablesGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.BigqueryTablesGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.BigqueryTablesGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GetIamPolicyRequest;
import org.openapis.openapi.models.shared.GetPolicyOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryTablesGetIamPolicyRequest req = new BigqueryTablesGetIamPolicyRequest("porro") {{
                getIamPolicyRequest = new GetIamPolicyRequest() {{
                    options = new GetPolicyOptions() {{
                        requestedPolicyVersion = 426129;
                    }};;
                }};;
                alt = AltEnum.JSON;
                fields = "omnis";
                key = "recusandae";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "quam";
                userIp = "fugit";
            }};            

            BigqueryTablesGetIamPolicyResponse res = sdk.tables.bigqueryTablesGetIamPolicy(req, new BigqueryTablesGetIamPolicySecurity() {{
                option1 = new BigqueryTablesGetIamPolicySecurityOption1("facere", "libero") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryTablesInsert

Creates a new, empty table in the dataset.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryTablesInsertRequest;
import org.openapis.openapi.models.operations.BigqueryTablesInsertResponse;
import org.openapis.openapi.models.operations.BigqueryTablesInsertSecurity;
import org.openapis.openapi.models.operations.BigqueryTablesInsertSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryTablesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AvroOptions;
import org.openapis.openapi.models.shared.BigtableColumn;
import org.openapis.openapi.models.shared.BigtableColumnFamily;
import org.openapis.openapi.models.shared.BigtableOptions;
import org.openapis.openapi.models.shared.BqmlIterationResult;
import org.openapis.openapi.models.shared.BqmlTrainingRun;
import org.openapis.openapi.models.shared.BqmlTrainingRunTrainingOptions;
import org.openapis.openapi.models.shared.CloneDefinition;
import org.openapis.openapi.models.shared.Clustering;
import org.openapis.openapi.models.shared.CsvOptions;
import org.openapis.openapi.models.shared.EncryptionConfiguration;
import org.openapis.openapi.models.shared.ExternalDataConfiguration;
import org.openapis.openapi.models.shared.GoogleSheetsOptions;
import org.openapis.openapi.models.shared.HivePartitioningOptions;
import org.openapis.openapi.models.shared.MaterializedViewDefinition;
import org.openapis.openapi.models.shared.ModelDefinition;
import org.openapis.openapi.models.shared.ModelDefinitionModelOptions;
import org.openapis.openapi.models.shared.ParquetOptions;
import org.openapis.openapi.models.shared.RangePartitioning;
import org.openapis.openapi.models.shared.RangePartitioningRange;
import org.openapis.openapi.models.shared.SnapshotDefinition;
import org.openapis.openapi.models.shared.Streamingbuffer;
import org.openapis.openapi.models.shared.Table;
import org.openapis.openapi.models.shared.TableFieldSchema;
import org.openapis.openapi.models.shared.TableFieldSchemaCategories;
import org.openapis.openapi.models.shared.TableFieldSchemaPolicyTags;
import org.openapis.openapi.models.shared.TableReference;
import org.openapis.openapi.models.shared.TableSchema;
import org.openapis.openapi.models.shared.TimePartitioning;
import org.openapis.openapi.models.shared.UserDefinedFunctionResource;
import org.openapis.openapi.models.shared.ViewDefinition;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryTablesInsertRequest req = new BigqueryTablesInsertRequest("vitae", "non") {{
                table = new Table() {{
                    cloneDefinition = new CloneDefinition() {{
                        baseTableReference = new TableReference() {{
                            datasetId = "labore";
                            projectId = "incidunt";
                            tableId = "tempore";
                        }};;
                        cloneTime = OffsetDateTime.parse("2021-10-04T09:52:25.496Z");
                    }};;
                    clustering = new Clustering() {{
                        fields = new String[]{{
                            add("reprehenderit"),
                            add("rem"),
                            add("est"),
                            add("quis"),
                        }};
                    }};;
                    creationTime = "impedit";
                    defaultCollation = "accusantium";
                    defaultRoundingMode = "necessitatibus";
                    description = "facere";
                    encryptionConfiguration = new EncryptionConfiguration() {{
                        kmsKeyName = "reprehenderit";
                    }};;
                    etag = "laborum";
                    expirationTime = "officia";
                    externalDataConfiguration = new ExternalDataConfiguration() {{
                        autodetect = false;
                        avroOptions = new AvroOptions() {{
                            useAvroLogicalTypes = false;
                        }};;
                        bigtableOptions = new BigtableOptions() {{
                            columnFamilies = new org.openapis.openapi.models.shared.BigtableColumnFamily[]{{
                                add(new BigtableColumnFamily() {{
                                    columns = new org.openapis.openapi.models.shared.BigtableColumn[]{{
                                        add(new BigtableColumn() {{
                                            encoding = "explicabo";
                                            fieldName = "recusandae";
                                            onlyReadLatest = false;
                                            qualifierEncoded = "unde";
                                            qualifierString = "iusto";
                                            type = "aspernatur";
                                        }}),
                                        add(new BigtableColumn() {{
                                            encoding = "ea";
                                            fieldName = "architecto";
                                            onlyReadLatest = false;
                                            qualifierEncoded = "earum";
                                            qualifierString = "cum";
                                            type = "alias";
                                        }}),
                                    }};
                                    encoding = "quod";
                                    familyId = "veniam";
                                    onlyReadLatest = false;
                                    type = "corrupti";
                                }}),
                                add(new BigtableColumnFamily() {{
                                    columns = new org.openapis.openapi.models.shared.BigtableColumn[]{{
                                        add(new BigtableColumn() {{
                                            encoding = "odit";
                                            fieldName = "voluptate";
                                            onlyReadLatest = false;
                                            qualifierEncoded = "nobis";
                                            qualifierString = "exercitationem";
                                            type = "beatae";
                                        }}),
                                        add(new BigtableColumn() {{
                                            encoding = "cupiditate";
                                            fieldName = "cupiditate";
                                            onlyReadLatest = false;
                                            qualifierEncoded = "ex";
                                            qualifierString = "tempore";
                                            type = "minima";
                                        }}),
                                        add(new BigtableColumn() {{
                                            encoding = "expedita";
                                            fieldName = "modi";
                                            onlyReadLatest = false;
                                            qualifierEncoded = "expedita";
                                            qualifierString = "quaerat";
                                            type = "accusantium";
                                        }}),
                                        add(new BigtableColumn() {{
                                            encoding = "recusandae";
                                            fieldName = "saepe";
                                            onlyReadLatest = false;
                                            qualifierEncoded = "sapiente";
                                            qualifierString = "iusto";
                                            type = "quasi";
                                        }}),
                                    }};
                                    encoding = "odit";
                                    familyId = "tempore";
                                    onlyReadLatest = false;
                                    type = "ducimus";
                                }}),
                                add(new BigtableColumnFamily() {{
                                    columns = new org.openapis.openapi.models.shared.BigtableColumn[]{{
                                        add(new BigtableColumn() {{
                                            encoding = "ducimus";
                                            fieldName = "similique";
                                            onlyReadLatest = false;
                                            qualifierEncoded = "expedita";
                                            qualifierString = "voluptatem";
                                            type = "adipisci";
                                        }}),
                                        add(new BigtableColumn() {{
                                            encoding = "tempora";
                                            fieldName = "modi";
                                            onlyReadLatest = false;
                                            qualifierEncoded = "soluta";
                                            qualifierString = "inventore";
                                            type = "ducimus";
                                        }}),
                                        add(new BigtableColumn() {{
                                            encoding = "vitae";
                                            fieldName = "sit";
                                            onlyReadLatest = false;
                                            qualifierEncoded = "autem";
                                            qualifierString = "rem";
                                            type = "deleniti";
                                        }}),
                                    }};
                                    encoding = "illum";
                                    familyId = "necessitatibus";
                                    onlyReadLatest = false;
                                    type = "vero";
                                }}),
                            }};
                            ignoreUnspecifiedColumnFamilies = false;
                            readRowkeyAsString = false;
                        }};;
                        compression = "facilis";
                        connectionId = "necessitatibus";
                        csvOptions = new CsvOptions() {{
                            allowJaggedRows = false;
                            allowQuotedNewlines = false;
                            encoding = "asperiores";
                            fieldDelimiter = "rem";
                            nullMarker = "perspiciatis";
                            preserveAsciiControlCharacters = false;
                            quote = "quam";
                            skipLeadingRows = "earum";
                        }};;
                        decimalTargetTypes = new String[]{{
                            add("fugiat"),
                        }};
                        googleSheetsOptions = new GoogleSheetsOptions() {{
                            range = "pariatur";
                            skipLeadingRows = "voluptatem";
                        }};;
                        hivePartitioningOptions = new HivePartitioningOptions() {{
                            fields = new String[]{{
                                add("minus"),
                                add("pariatur"),
                                add("dolor"),
                                add("amet"),
                            }};
                            mode = "tenetur";
                            requirePartitionFilter = false;
                            sourceUriPrefix = "quasi";
                        }};;
                        ignoreUnknownValues = false;
                        maxBadRecords = 119679;
                        metadataCacheMode = "rerum";
                        objectMetadata = "neque";
                        parquetOptions = new ParquetOptions() {{
                            enableListInference = false;
                            enumAsString = false;
                        }};;
                        referenceFileSchemaUri = "voluptates";
                        schema = new TableSchema() {{
                            fields = new org.openapis.openapi.models.shared.TableFieldSchema[]{{
                                add(new TableFieldSchema() {{
                                    categories = new TableFieldSchemaCategories() {{
                                        names = new String[]{{
                                            add("alias"),
                                            add("voluptatum"),
                                            add("aut"),
                                            add("officia"),
                                        }};
                                    }};
                                    collation = "officia";
                                    defaultValueExpression = "vitae";
                                    description = "ipsa";
                                    fields = new org.openapis.openapi.models.shared.TableFieldSchema[]{{
                                        add(new TableFieldSchema() {{}}),
                                        add(new TableFieldSchema() {{}}),
                                    }};
                                    maxLength = "architecto";
                                    mode = "deleniti";
                                    name = "Sophia Rowe";
                                    policyTags = new TableFieldSchemaPolicyTags() {{
                                        names = new String[]{{
                                            add("officiis"),
                                            add("ipsa"),
                                            add("eos"),
                                        }};
                                    }};
                                    precision = "delectus";
                                    roundingMode = "dolor";
                                    scale = "dignissimos";
                                    type = "doloremque";
                                }}),
                                add(new TableFieldSchema() {{
                                    categories = new TableFieldSchemaCategories() {{
                                        names = new String[]{{
                                            add("maxime"),
                                        }};
                                    }};
                                    collation = "quis";
                                    defaultValueExpression = "cumque";
                                    description = "laudantium";
                                    fields = new org.openapis.openapi.models.shared.TableFieldSchema[]{{
                                        add(new TableFieldSchema() {{}}),
                                        add(new TableFieldSchema() {{}}),
                                        add(new TableFieldSchema() {{}}),
                                        add(new TableFieldSchema() {{}}),
                                    }};
                                    maxLength = "odit";
                                    mode = "fugiat";
                                    name = "Barbara Von";
                                    policyTags = new TableFieldSchemaPolicyTags() {{
                                        names = new String[]{{
                                            add("sunt"),
                                        }};
                                    }};
                                    precision = "ipsa";
                                    roundingMode = "incidunt";
                                    scale = "maiores";
                                    type = "culpa";
                                }}),
                            }};
                        }};;
                        sourceFormat = "dolore";
                        sourceUris = new String[]{{
                            add("iure"),
                            add("alias"),
                        }};
                    }};;
                    friendlyName = "molestiae";
                    id = "bf375b44-2828-421f-9b2f-69e59267c71c";
                    kind = "optio";
                    labels = new java.util.HashMap<String, String>() {{
                        put("pariatur", "sequi");
                        put("quo", "facere");
                        put("labore", "fugit");
                    }};
                    lastModifiedTime = "quis";
                    location = "voluptatum";
                    materializedView = new MaterializedViewDefinition() {{
                        allowNonIncrementalDefinition = false;
                        enableRefresh = false;
                        lastRefreshTime = "temporibus";
                        maxStaleness = "doloremque";
                        query = "amet";
                        refreshIntervalMs = "ipsam";
                    }};;
                    maxStaleness = "deleniti";
                    model = new ModelDefinition() {{
                        modelOptions = new ModelDefinitionModelOptions() {{
                            labels = new String[]{{
                                add("quas"),
                                add("odit"),
                                add("placeat"),
                            }};
                            lossType = "rem";
                            modelType = "aut";
                        }};;
                        trainingRuns = new org.openapis.openapi.models.shared.BqmlTrainingRun[]{{
                            add(new BqmlTrainingRun() {{
                                iterationResults = new org.openapis.openapi.models.shared.BqmlIterationResult[]{{
                                    add(new BqmlIterationResult() {{
                                        durationMs = "eveniet";
                                        evalLoss = 1401.4;
                                        index = 466629;
                                        learnRate = 3560.66;
                                        trainingLoss = 783.5;
                                    }}),
                                    add(new BqmlIterationResult() {{
                                        durationMs = "laborum";
                                        evalLoss = 1459.37;
                                        index = 19487;
                                        learnRate = 2756.08;
                                        trainingLoss = 4954.07;
                                    }}),
                                    add(new BqmlIterationResult() {{
                                        durationMs = "quod";
                                        evalLoss = 132.23;
                                        index = 255108;
                                        learnRate = 2541.91;
                                        trainingLoss = 6094.29;
                                    }}),
                                    add(new BqmlIterationResult() {{
                                        durationMs = "repudiandae";
                                        evalLoss = 783.81;
                                        index = 308595;
                                        learnRate = 2021.45;
                                        trainingLoss = 9425.01;
                                    }}),
                                }};
                                startTime = OffsetDateTime.parse("2022-03-23T15:14:44.909Z");
                                state = "quasi";
                                trainingOptions = new BqmlTrainingRunTrainingOptions() {{
                                    earlyStop = false;
                                    l1Reg = 5677.63;
                                    l2Reg = 7155.43;
                                    learnRate = 7405.87;
                                    learnRateStrategy = "in";
                                    lineSearchInitLearnRate = 8335.21;
                                    maxIteration = "incidunt";
                                    minRelProgress = 460.36;
                                    warmStart = false;
                                }};
                            }}),
                            add(new BqmlTrainingRun() {{
                                iterationResults = new org.openapis.openapi.models.shared.BqmlIterationResult[]{{
                                    add(new BqmlIterationResult() {{
                                        durationMs = "corporis";
                                        evalLoss = 6731.58;
                                        index = 64070;
                                        learnRate = 641.84;
                                        trainingLoss = 9726.54;
                                    }}),
                                    add(new BqmlIterationResult() {{
                                        durationMs = "est";
                                        evalLoss = 2688.56;
                                        index = 198379;
                                        learnRate = 4176.25;
                                        trainingLoss = 9202.59;
                                    }}),
                                    add(new BqmlIterationResult() {{
                                        durationMs = "commodi";
                                        evalLoss = 1537.32;
                                        index = 346951;
                                        learnRate = 6166.9;
                                        trainingLoss = 1284.71;
                                    }}),
                                    add(new BqmlIterationResult() {{
                                        durationMs = "velit";
                                        evalLoss = 2403.73;
                                        index = 942167;
                                        learnRate = 6178.54;
                                        trainingLoss = 3244.67;
                                    }}),
                                }};
                                startTime = OffsetDateTime.parse("2021-03-26T08:21:04.113Z");
                                state = "quibusdam";
                                trainingOptions = new BqmlTrainingRunTrainingOptions() {{
                                    earlyStop = false;
                                    l1Reg = 1295.09;
                                    l2Reg = 2398.3;
                                    learnRate = 4793.72;
                                    learnRateStrategy = "ratione";
                                    lineSearchInitLearnRate = 6088.36;
                                    maxIteration = "quam";
                                    minRelProgress = 7706.96;
                                    warmStart = false;
                                }};
                            }}),
                            add(new BqmlTrainingRun() {{
                                iterationResults = new org.openapis.openapi.models.shared.BqmlIterationResult[]{{
                                    add(new BqmlIterationResult() {{
                                        durationMs = "quas";
                                        evalLoss = 3642.27;
                                        index = 703599;
                                        learnRate = 3494.96;
                                        trainingLoss = 8590.82;
                                    }}),
                                    add(new BqmlIterationResult() {{
                                        durationMs = "tempore";
                                        evalLoss = 2985.57;
                                        index = 979255;
                                        learnRate = 3401.67;
                                        trainingLoss = 128.81;
                                    }}),
                                }};
                                startTime = OffsetDateTime.parse("2022-11-21T16:34:28.814Z");
                                state = "quos";
                                trainingOptions = new BqmlTrainingRunTrainingOptions() {{
                                    earlyStop = false;
                                    l1Reg = 2399.58;
                                    l2Reg = 9715.31;
                                    learnRate = 8844.05;
                                    learnRateStrategy = "tempore";
                                    lineSearchInitLearnRate = 8748.3;
                                    maxIteration = "asperiores";
                                    minRelProgress = 4068.44;
                                    warmStart = false;
                                }};
                            }}),
                        }};
                    }};;
                    numBytes = "voluptate";
                    numLongTermBytes = "aliquid";
                    numPhysicalBytes = "nobis";
                    numRows = "reprehenderit";
                    numActiveLogicalBytes = "consequuntur";
                    numActivePhysicalBytes = "accusantium";
                    numLongTermLogicalBytes = "autem";
                    numLongTermPhysicalBytes = "pariatur";
                    numPartitions = "deserunt";
                    numTimeTravelPhysicalBytes = "facilis";
                    numTotalLogicalBytes = "in";
                    numTotalPhysicalBytes = "ad";
                    rangePartitioning = new RangePartitioning() {{
                        field = "voluptatem";
                        range = new RangePartitioningRange() {{
                            end = "sit";
                            interval = "enim";
                            start = "qui";
                        }};;
                    }};;
                    requirePartitionFilter = false;
                    schema = new TableSchema() {{
                        fields = new org.openapis.openapi.models.shared.TableFieldSchema[]{{
                            add(new TableFieldSchema() {{
                                categories = new TableFieldSchemaCategories() {{
                                    names = new String[]{{
                                        add("nisi"),
                                        add("dolore"),
                                    }};
                                }};
                                collation = "in";
                                defaultValueExpression = "officiis";
                                description = "fugiat";
                                fields = new org.openapis.openapi.models.shared.TableFieldSchema[]{{
                                    add(new TableFieldSchema() {{}}),
                                    add(new TableFieldSchema() {{}}),
                                    add(new TableFieldSchema() {{}}),
                                    add(new TableFieldSchema() {{}}),
                                }};
                                maxLength = "tempora";
                                mode = "sequi";
                                name = "Bert Stamm";
                                policyTags = new TableFieldSchemaPolicyTags() {{
                                    names = new String[]{{
                                        add("adipisci"),
                                        add("explicabo"),
                                    }};
                                }};
                                precision = "eaque";
                                roundingMode = "hic";
                                scale = "incidunt";
                                type = "quae";
                            }}),
                            add(new TableFieldSchema() {{
                                categories = new TableFieldSchemaCategories() {{
                                    names = new String[]{{
                                        add("eius"),
                                    }};
                                }};
                                collation = "voluptatem";
                                defaultValueExpression = "temporibus";
                                description = "aliquam";
                                fields = new org.openapis.openapi.models.shared.TableFieldSchema[]{{
                                    add(new TableFieldSchema() {{}}),
                                    add(new TableFieldSchema() {{}}),
                                }};
                                maxLength = "totam";
                                mode = "iusto";
                                name = "Sherman Hodkiewicz";
                                policyTags = new TableFieldSchemaPolicyTags() {{
                                    names = new String[]{{
                                        add("excepturi"),
                                        add("quaerat"),
                                        add("nobis"),
                                    }};
                                }};
                                precision = "nesciunt";
                                roundingMode = "quidem";
                                scale = "unde";
                                type = "fugiat";
                            }}),
                            add(new TableFieldSchema() {{
                                categories = new TableFieldSchemaCategories() {{
                                    names = new String[]{{
                                        add("modi"),
                                    }};
                                }};
                                collation = "atque";
                                defaultValueExpression = "blanditiis";
                                description = "quibusdam";
                                fields = new org.openapis.openapi.models.shared.TableFieldSchema[]{{
                                    add(new TableFieldSchema() {{}}),
                                    add(new TableFieldSchema() {{}}),
                                }};
                                maxLength = "unde";
                                mode = "ad";
                                name = "Horace Gorczany";
                                policyTags = new TableFieldSchemaPolicyTags() {{
                                    names = new String[]{{
                                        add("dolore"),
                                        add("accusantium"),
                                        add("corporis"),
                                        add("laboriosam"),
                                    }};
                                }};
                                precision = "laboriosam";
                                roundingMode = "omnis";
                                scale = "tenetur";
                                type = "vel";
                            }}),
                        }};
                    }};;
                    selfLink = "iste";
                    snapshotDefinition = new SnapshotDefinition() {{
                        baseTableReference = new TableReference() {{
                            datasetId = "animi";
                            projectId = "quae";
                            tableId = "doloremque";
                        }};;
                        snapshotTime = OffsetDateTime.parse("2022-02-18T11:40:25.905Z");
                    }};;
                    streamingBuffer = new Streamingbuffer() {{
                        estimatedBytes = "fugit";
                        estimatedRows = "inventore";
                        oldestEntryTime = "odit";
                    }};;
                    tableReference = new TableReference() {{
                        datasetId = "labore";
                        projectId = "perspiciatis";
                        tableId = "dolore";
                    }};;
                    timePartitioning = new TimePartitioning() {{
                        expirationMs = "ullam";
                        field = "aut";
                        requirePartitionFilter = false;
                        type = "atque";
                    }};;
                    type = "quasi";
                    view = new ViewDefinition() {{
                        query = "natus";
                        useExplicitColumnNames = false;
                        useLegacySql = false;
                        userDefinedFunctionResources = new org.openapis.openapi.models.shared.UserDefinedFunctionResource[]{{
                            add(new UserDefinedFunctionResource() {{
                                inlineCode = "odio";
                                resourceUri = "quo";
                            }}),
                            add(new UserDefinedFunctionResource() {{
                                inlineCode = "ipsum";
                                resourceUri = "cum";
                            }}),
                            add(new UserDefinedFunctionResource() {{
                                inlineCode = "et";
                                resourceUri = "harum";
                            }}),
                            add(new UserDefinedFunctionResource() {{
                                inlineCode = "magnam";
                                resourceUri = "illo";
                            }}),
                        }};
                    }};;
                }};;
                alt = AltEnum.JSON;
                fields = "atque";
                key = "magnam";
                oauthToken = "incidunt";
                prettyPrint = false;
                quotaUser = "consequatur";
                userIp = "nisi";
            }};            

            BigqueryTablesInsertResponse res = sdk.tables.bigqueryTablesInsert(req, new BigqueryTablesInsertSecurity() {{
                option1 = new BigqueryTablesInsertSecurityOption1("quae", "saepe") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.table != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryTablesList

Lists all tables in the specified dataset. Requires the READER dataset role.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryTablesListRequest;
import org.openapis.openapi.models.operations.BigqueryTablesListResponse;
import org.openapis.openapi.models.operations.BigqueryTablesListSecurity;
import org.openapis.openapi.models.operations.BigqueryTablesListSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryTablesListSecurityOption2;
import org.openapis.openapi.models.operations.BigqueryTablesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryTablesListRequest req = new BigqueryTablesListRequest("accusantium", "sit") {{
                alt = AltEnum.JSON;
                fields = "nesciunt";
                key = "veritatis";
                maxResults = 56283L;
                oauthToken = "possimus";
                pageToken = "perferendis";
                prettyPrint = false;
                quotaUser = "qui";
                userIp = "velit";
            }};            

            BigqueryTablesListResponse res = sdk.tables.bigqueryTablesList(req, new BigqueryTablesListSecurity() {{
                option1 = new BigqueryTablesListSecurityOption1("repellendus", "quod") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.tableList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryTablesPatch

Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryTablesPatchRequest;
import org.openapis.openapi.models.operations.BigqueryTablesPatchResponse;
import org.openapis.openapi.models.operations.BigqueryTablesPatchSecurity;
import org.openapis.openapi.models.operations.BigqueryTablesPatchSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryTablesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AvroOptions;
import org.openapis.openapi.models.shared.BigtableColumn;
import org.openapis.openapi.models.shared.BigtableColumnFamily;
import org.openapis.openapi.models.shared.BigtableOptions;
import org.openapis.openapi.models.shared.BqmlIterationResult;
import org.openapis.openapi.models.shared.BqmlTrainingRun;
import org.openapis.openapi.models.shared.BqmlTrainingRunTrainingOptions;
import org.openapis.openapi.models.shared.CloneDefinition;
import org.openapis.openapi.models.shared.Clustering;
import org.openapis.openapi.models.shared.CsvOptions;
import org.openapis.openapi.models.shared.EncryptionConfiguration;
import org.openapis.openapi.models.shared.ExternalDataConfiguration;
import org.openapis.openapi.models.shared.GoogleSheetsOptions;
import org.openapis.openapi.models.shared.HivePartitioningOptions;
import org.openapis.openapi.models.shared.MaterializedViewDefinition;
import org.openapis.openapi.models.shared.ModelDefinition;
import org.openapis.openapi.models.shared.ModelDefinitionModelOptions;
import org.openapis.openapi.models.shared.ParquetOptions;
import org.openapis.openapi.models.shared.RangePartitioning;
import org.openapis.openapi.models.shared.RangePartitioningRange;
import org.openapis.openapi.models.shared.SnapshotDefinition;
import org.openapis.openapi.models.shared.Streamingbuffer;
import org.openapis.openapi.models.shared.Table;
import org.openapis.openapi.models.shared.TableFieldSchema;
import org.openapis.openapi.models.shared.TableFieldSchemaCategories;
import org.openapis.openapi.models.shared.TableFieldSchemaPolicyTags;
import org.openapis.openapi.models.shared.TableReference;
import org.openapis.openapi.models.shared.TableSchema;
import org.openapis.openapi.models.shared.TimePartitioning;
import org.openapis.openapi.models.shared.UserDefinedFunctionResource;
import org.openapis.openapi.models.shared.ViewDefinition;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryTablesPatchRequest req = new BigqueryTablesPatchRequest("error", "ipsa", "beatae") {{
                table = new Table() {{
                    cloneDefinition = new CloneDefinition() {{
                        baseTableReference = new TableReference() {{
                            datasetId = "doloribus";
                            projectId = "veniam";
                            tableId = "animi";
                        }};;
                        cloneTime = OffsetDateTime.parse("2020-05-26T19:56:49.899Z");
                    }};;
                    clustering = new Clustering() {{
                        fields = new String[]{{
                            add("id"),
                        }};
                    }};;
                    creationTime = "commodi";
                    defaultCollation = "quo";
                    defaultRoundingMode = "aliquam";
                    description = "magnam";
                    encryptionConfiguration = new EncryptionConfiguration() {{
                        kmsKeyName = "praesentium";
                    }};;
                    etag = "numquam";
                    expirationTime = "iure";
                    externalDataConfiguration = new ExternalDataConfiguration() {{
                        autodetect = false;
                        avroOptions = new AvroOptions() {{
                            useAvroLogicalTypes = false;
                        }};;
                        bigtableOptions = new BigtableOptions() {{
                            columnFamilies = new org.openapis.openapi.models.shared.BigtableColumnFamily[]{{
                                add(new BigtableColumnFamily() {{
                                    columns = new org.openapis.openapi.models.shared.BigtableColumn[]{{
                                        add(new BigtableColumn() {{
                                            encoding = "molestias";
                                            fieldName = "assumenda";
                                            onlyReadLatest = false;
                                            qualifierEncoded = "praesentium";
                                            qualifierString = "occaecati";
                                            type = "eos";
                                        }}),
                                        add(new BigtableColumn() {{
                                            encoding = "veniam";
                                            fieldName = "amet";
                                            onlyReadLatest = false;
                                            qualifierEncoded = "nobis";
                                            qualifierString = "quos";
                                            type = "provident";
                                        }}),
                                        add(new BigtableColumn() {{
                                            encoding = "ea";
                                            fieldName = "consequuntur";
                                            onlyReadLatest = false;
                                            qualifierEncoded = "delectus";
                                            qualifierString = "quaerat";
                                            type = "quos";
                                        }}),
                                        add(new BigtableColumn() {{
                                            encoding = "excepturi";
                                            fieldName = "eum";
                                            onlyReadLatest = false;
                                            qualifierEncoded = "rerum";
                                            qualifierString = "a";
                                            type = "ad";
                                        }}),
                                    }};
                                    encoding = "et";
                                    familyId = "eveniet";
                                    onlyReadLatest = false;
                                    type = "tempora";
                                }}),
                                add(new BigtableColumnFamily() {{
                                    columns = new org.openapis.openapi.models.shared.BigtableColumn[]{{
                                        add(new BigtableColumn() {{
                                            encoding = "exercitationem";
                                            fieldName = "sed";
                                            onlyReadLatest = false;
                                            qualifierEncoded = "fugiat";
                                            qualifierString = "dolorem";
                                            type = "cumque";
                                        }}),
                                        add(new BigtableColumn() {{
                                            encoding = "nesciunt";
                                            fieldName = "aliquam";
                                            onlyReadLatest = false;
                                            qualifierEncoded = "consectetur";
                                            qualifierString = "at";
                                            type = "suscipit";
                                        }}),
                                    }};
                                    encoding = "quae";
                                    familyId = "quam";
                                    onlyReadLatest = false;
                                    type = "dignissimos";
                                }}),
                                add(new BigtableColumnFamily() {{
                                    columns = new org.openapis.openapi.models.shared.BigtableColumn[]{{
                                        add(new BigtableColumn() {{
                                            encoding = "animi";
                                            fieldName = "earum";
                                            onlyReadLatest = false;
                                            qualifierEncoded = "quaerat";
                                            qualifierString = "excepturi";
                                            type = "ab";
                                        }}),
                                        add(new BigtableColumn() {{
                                            encoding = "eos";
                                            fieldName = "numquam";
                                            onlyReadLatest = false;
                                            qualifierEncoded = "voluptate";
                                            qualifierString = "odio";
                                            type = "magni";
                                        }}),
                                        add(new BigtableColumn() {{
                                            encoding = "enim";
                                            fieldName = "eveniet";
                                            onlyReadLatest = false;
                                            qualifierEncoded = "commodi";
                                            qualifierString = "magni";
                                            type = "et";
                                        }}),
                                    }};
                                    encoding = "iste";
                                    familyId = "aut";
                                    onlyReadLatest = false;
                                    type = "occaecati";
                                }}),
                            }};
                            ignoreUnspecifiedColumnFamilies = false;
                            readRowkeyAsString = false;
                        }};;
                        compression = "vero";
                        connectionId = "error";
                        csvOptions = new CsvOptions() {{
                            allowJaggedRows = false;
                            allowQuotedNewlines = false;
                            encoding = "inventore";
                            fieldDelimiter = "ipsa";
                            nullMarker = "dolore";
                            preserveAsciiControlCharacters = false;
                            quote = "labore";
                            skipLeadingRows = "id";
                        }};;
                        decimalTargetTypes = new String[]{{
                            add("quibusdam"),
                            add("recusandae"),
                        }};
                        googleSheetsOptions = new GoogleSheetsOptions() {{
                            range = "ad";
                            skipLeadingRows = "omnis";
                        }};;
                        hivePartitioningOptions = new HivePartitioningOptions() {{
                            fields = new String[]{{
                                add("placeat"),
                                add("nihil"),
                                add("ducimus"),
                            }};
                            mode = "eaque";
                            requirePartitionFilter = false;
                            sourceUriPrefix = "aliquid";
                        }};;
                        ignoreUnknownValues = false;
                        maxBadRecords = 408363;
                        metadataCacheMode = "odio";
                        objectMetadata = "voluptatem";
                        parquetOptions = new ParquetOptions() {{
                            enableListInference = false;
                            enumAsString = false;
                        }};;
                        referenceFileSchemaUri = "quisquam";
                        schema = new TableSchema() {{
                            fields = new org.openapis.openapi.models.shared.TableFieldSchema[]{{
                                add(new TableFieldSchema() {{
                                    categories = new TableFieldSchemaCategories() {{
                                        names = new String[]{{
                                            add("optio"),
                                        }};
                                    }};
                                    collation = "a";
                                    defaultValueExpression = "quis";
                                    description = "unde";
                                    fields = new org.openapis.openapi.models.shared.TableFieldSchema[]{{
                                        add(new TableFieldSchema() {{}}),
                                    }};
                                    maxLength = "qui";
                                    mode = "aliquid";
                                    name = "Jill Champlin DVM";
                                    policyTags = new TableFieldSchemaPolicyTags() {{
                                        names = new String[]{{
                                            add("ex"),
                                            add("harum"),
                                        }};
                                    }};
                                    precision = "cum";
                                    roundingMode = "non";
                                    scale = "quia";
                                    type = "laboriosam";
                                }}),
                                add(new TableFieldSchema() {{
                                    categories = new TableFieldSchemaCategories() {{
                                        names = new String[]{{
                                            add("molestias"),
                                            add("dignissimos"),
                                            add("facere"),
                                        }};
                                    }};
                                    collation = "provident";
                                    defaultValueExpression = "omnis";
                                    description = "dolorum";
                                    fields = new org.openapis.openapi.models.shared.TableFieldSchema[]{{
                                        add(new TableFieldSchema() {{}}),
                                    }};
                                    maxLength = "nulla";
                                    mode = "velit";
                                    name = "Holly Homenick PhD";
                                    policyTags = new TableFieldSchemaPolicyTags() {{
                                        names = new String[]{{
                                            add("velit"),
                                            add("earum"),
                                            add("recusandae"),
                                        }};
                                    }};
                                    precision = "aliquid";
                                    roundingMode = "impedit";
                                    scale = "reiciendis";
                                    type = "ad";
                                }}),
                                add(new TableFieldSchema() {{
                                    categories = new TableFieldSchemaCategories() {{
                                        names = new String[]{{
                                            add("delectus"),
                                            add("dolorem"),
                                            add("ipsam"),
                                        }};
                                    }};
                                    collation = "voluptatum";
                                    defaultValueExpression = "dolorum";
                                    description = "officia";
                                    fields = new org.openapis.openapi.models.shared.TableFieldSchema[]{{
                                        add(new TableFieldSchema() {{}}),
                                        add(new TableFieldSchema() {{}}),
                                        add(new TableFieldSchema() {{}}),
                                        add(new TableFieldSchema() {{}}),
                                    }};
                                    maxLength = "est";
                                    mode = "quisquam";
                                    name = "Frankie Dickens";
                                    policyTags = new TableFieldSchemaPolicyTags() {{
                                        names = new String[]{{
                                            add("adipisci"),
                                            add("inventore"),
                                            add("tempore"),
                                        }};
                                    }};
                                    precision = "maiores";
                                    roundingMode = "ducimus";
                                    scale = "rerum";
                                    type = "laborum";
                                }}),
                                add(new TableFieldSchema() {{
                                    categories = new TableFieldSchemaCategories() {{
                                        names = new String[]{{
                                            add("quod"),
                                        }};
                                    }};
                                    collation = "minus";
                                    defaultValueExpression = "molestias";
                                    description = "quam";
                                    fields = new org.openapis.openapi.models.shared.TableFieldSchema[]{{
                                        add(new TableFieldSchema() {{}}),
                                        add(new TableFieldSchema() {{}}),
                                    }};
                                    maxLength = "inventore";
                                    mode = "ex";
                                    name = "Alfredo Barton";
                                    policyTags = new TableFieldSchemaPolicyTags() {{
                                        names = new String[]{{
                                            add("sint"),
                                            add("voluptates"),
                                            add("alias"),
                                            add("placeat"),
                                        }};
                                    }};
                                    precision = "in";
                                    roundingMode = "possimus";
                                    scale = "iste";
                                    type = "assumenda";
                                }}),
                            }};
                        }};;
                        sourceFormat = "neque";
                        sourceUris = new String[]{{
                            add("consectetur"),
                        }};
                    }};;
                    friendlyName = "repellat";
                    id = "1aa63ed9-cf1c-4856-bcba-51ef2454a47f";
                    kind = "dolorum";
                    labels = new java.util.HashMap<String, String>() {{
                        put("repellat", "veritatis");
                        put("inventore", "autem");
                        put("optio", "fugiat");
                        put("facere", "exercitationem");
                    }};
                    lastModifiedTime = "ut";
                    location = "dolore";
                    materializedView = new MaterializedViewDefinition() {{
                        allowNonIncrementalDefinition = false;
                        enableRefresh = false;
                        lastRefreshTime = "numquam";
                        maxStaleness = "officia";
                        query = "reprehenderit";
                        refreshIntervalMs = "nemo";
                    }};;
                    maxStaleness = "nisi";
                    model = new ModelDefinition() {{
                        modelOptions = new ModelDefinitionModelOptions() {{
                            labels = new String[]{{
                                add("praesentium"),
                            }};
                            lossType = "iusto";
                            modelType = "dolorem";
                        }};;
                        trainingRuns = new org.openapis.openapi.models.shared.BqmlTrainingRun[]{{
                            add(new BqmlTrainingRun() {{
                                iterationResults = new org.openapis.openapi.models.shared.BqmlIterationResult[]{{
                                    add(new BqmlIterationResult() {{
                                        durationMs = "quibusdam";
                                        evalLoss = 8127.53;
                                        index = 615655;
                                        learnRate = 8828.84;
                                        trainingLoss = 9991.21;
                                    }}),
                                    add(new BqmlIterationResult() {{
                                        durationMs = "est";
                                        evalLoss = 9846.71;
                                        index = 288130;
                                        learnRate = 2386.95;
                                        trainingLoss = 8732.45;
                                    }}),
                                }};
                                startTime = OffsetDateTime.parse("2021-09-26T18:07:49.149Z");
                                state = "qui";
                                trainingOptions = new BqmlTrainingRunTrainingOptions() {{
                                    earlyStop = false;
                                    l1Reg = 2318.07;
                                    l2Reg = 4114.16;
                                    learnRate = 1345.97;
                                    learnRateStrategy = "consequatur";
                                    lineSearchInitLearnRate = 9616.69;
                                    maxIteration = "nesciunt";
                                    minRelProgress = 879.79;
                                    warmStart = false;
                                }};
                            }}),
                            add(new BqmlTrainingRun() {{
                                iterationResults = new org.openapis.openapi.models.shared.BqmlIterationResult[]{{
                                    add(new BqmlIterationResult() {{
                                        durationMs = "voluptatum";
                                        evalLoss = 9877.63;
                                        index = 202177;
                                        learnRate = 416.45;
                                        trainingLoss = 8682.81;
                                    }}),
                                }};
                                startTime = OffsetDateTime.parse("2022-06-01T23:50:17.926Z");
                                state = "temporibus";
                                trainingOptions = new BqmlTrainingRunTrainingOptions() {{
                                    earlyStop = false;
                                    l1Reg = 7364.8;
                                    l2Reg = 224.79;
                                    learnRate = 1651.16;
                                    learnRateStrategy = "aspernatur";
                                    lineSearchInitLearnRate = 9381.13;
                                    maxIteration = "similique";
                                    minRelProgress = 6633.25;
                                    warmStart = false;
                                }};
                            }}),
                            add(new BqmlTrainingRun() {{
                                iterationResults = new org.openapis.openapi.models.shared.BqmlIterationResult[]{{
                                    add(new BqmlIterationResult() {{
                                        durationMs = "commodi";
                                        evalLoss = 3413.59;
                                        index = 962483;
                                        learnRate = 6964.71;
                                        trainingLoss = 5240.51;
                                    }}),
                                    add(new BqmlIterationResult() {{
                                        durationMs = "repellat";
                                        evalLoss = 3840.74;
                                        index = 332712;
                                        learnRate = 1624.75;
                                        trainingLoss = 9230.44;
                                    }}),
                                }};
                                startTime = OffsetDateTime.parse("2021-07-18T05:42:03.072Z");
                                state = "perspiciatis";
                                trainingOptions = new BqmlTrainingRunTrainingOptions() {{
                                    earlyStop = false;
                                    l1Reg = 8469.9;
                                    l2Reg = 2228.93;
                                    learnRate = 5088.38;
                                    learnRateStrategy = "non";
                                    lineSearchInitLearnRate = 5332.9;
                                    maxIteration = "dolor";
                                    minRelProgress = 5464.65;
                                    warmStart = false;
                                }};
                            }}),
                            add(new BqmlTrainingRun() {{
                                iterationResults = new org.openapis.openapi.models.shared.BqmlIterationResult[]{{
                                    add(new BqmlIterationResult() {{
                                        durationMs = "molestias";
                                        evalLoss = 472.89;
                                        index = 144441;
                                        learnRate = 2892.47;
                                        trainingLoss = 2070.45;
                                    }}),
                                    add(new BqmlIterationResult() {{
                                        durationMs = "cum";
                                        evalLoss = 1537.24;
                                        index = 621230;
                                        learnRate = 1909.71;
                                        trainingLoss = 8185.96;
                                    }}),
                                }};
                                startTime = OffsetDateTime.parse("2021-07-06T06:40:00.036Z");
                                state = "neque";
                                trainingOptions = new BqmlTrainingRunTrainingOptions() {{
                                    earlyStop = false;
                                    l1Reg = 212.77;
                                    l2Reg = 8783.95;
                                    learnRate = 5695.69;
                                    learnRateStrategy = "dicta";
                                    lineSearchInitLearnRate = 4384.17;
                                    maxIteration = "doloribus";
                                    minRelProgress = 3613;
                                    warmStart = false;
                                }};
                            }}),
                        }};
                    }};;
                    numBytes = "alias";
                    numLongTermBytes = "asperiores";
                    numPhysicalBytes = "quibusdam";
                    numRows = "animi";
                    numActiveLogicalBytes = "alias";
                    numActivePhysicalBytes = "non";
                    numLongTermLogicalBytes = "porro";
                    numLongTermPhysicalBytes = "voluptatum";
                    numPartitions = "libero";
                    numTimeTravelPhysicalBytes = "quasi";
                    numTotalLogicalBytes = "quidem";
                    numTotalPhysicalBytes = "soluta";
                    rangePartitioning = new RangePartitioning() {{
                        field = "exercitationem";
                        range = new RangePartitioningRange() {{
                            end = "exercitationem";
                            interval = "similique";
                            start = "magni";
                        }};;
                    }};;
                    requirePartitionFilter = false;
                    schema = new TableSchema() {{
                        fields = new org.openapis.openapi.models.shared.TableFieldSchema[]{{
                            add(new TableFieldSchema() {{
                                categories = new TableFieldSchemaCategories() {{
                                    names = new String[]{{
                                        add("cum"),
                                    }};
                                }};
                                collation = "aut";
                                defaultValueExpression = "expedita";
                                description = "quo";
                                fields = new org.openapis.openapi.models.shared.TableFieldSchema[]{{
                                    add(new TableFieldSchema() {{}}),
                                }};
                                maxLength = "libero";
                                mode = "expedita";
                                name = "Darlene Haag";
                                policyTags = new TableFieldSchemaPolicyTags() {{
                                    names = new String[]{{
                                        add("accusamus"),
                                        add("cum"),
                                    }};
                                }};
                                precision = "sunt";
                                roundingMode = "repellendus";
                                scale = "voluptatem";
                                type = "non";
                            }}),
                            add(new TableFieldSchema() {{
                                categories = new TableFieldSchemaCategories() {{
                                    names = new String[]{{
                                        add("laudantium"),
                                    }};
                                }};
                                collation = "totam";
                                defaultValueExpression = "facilis";
                                description = "consequatur";
                                fields = new org.openapis.openapi.models.shared.TableFieldSchema[]{{
                                    add(new TableFieldSchema() {{}}),
                                    add(new TableFieldSchema() {{}}),
                                    add(new TableFieldSchema() {{}}),
                                    add(new TableFieldSchema() {{}}),
                                }};
                                maxLength = "architecto";
                                mode = "libero";
                                name = "Roger King";
                                policyTags = new TableFieldSchemaPolicyTags() {{
                                    names = new String[]{{
                                        add("eveniet"),
                                        add("reprehenderit"),
                                        add("incidunt"),
                                        add("soluta"),
                                    }};
                                }};
                                precision = "voluptas";
                                roundingMode = "delectus";
                                scale = "repudiandae";
                                type = "quidem";
                            }}),
                            add(new TableFieldSchema() {{
                                categories = new TableFieldSchemaCategories() {{
                                    names = new String[]{{
                                        add("labore"),
                                        add("ipsam"),
                                        add("voluptate"),
                                    }};
                                }};
                                collation = "quod";
                                defaultValueExpression = "nihil";
                                description = "recusandae";
                                fields = new org.openapis.openapi.models.shared.TableFieldSchema[]{{
                                    add(new TableFieldSchema() {{}}),
                                    add(new TableFieldSchema() {{}}),
                                    add(new TableFieldSchema() {{}}),
                                    add(new TableFieldSchema() {{}}),
                                }};
                                maxLength = "laborum";
                                mode = "reiciendis";
                                name = "Ms. Sherri Schuppe";
                                policyTags = new TableFieldSchemaPolicyTags() {{
                                    names = new String[]{{
                                        add("asperiores"),
                                        add("odio"),
                                        add("nisi"),
                                    }};
                                }};
                                precision = "hic";
                                roundingMode = "assumenda";
                                scale = "ab";
                                type = "eum";
                            }}),
                        }};
                    }};;
                    selfLink = "quia";
                    snapshotDefinition = new SnapshotDefinition() {{
                        baseTableReference = new TableReference() {{
                            datasetId = "quidem";
                            projectId = "sequi";
                            tableId = "doloremque";
                        }};;
                        snapshotTime = OffsetDateTime.parse("2022-02-09T21:34:50.510Z");
                    }};;
                    streamingBuffer = new Streamingbuffer() {{
                        estimatedBytes = "consectetur";
                        estimatedRows = "aperiam";
                        oldestEntryTime = "sed";
                    }};;
                    tableReference = new TableReference() {{
                        datasetId = "dolor";
                        projectId = "quidem";
                        tableId = "excepturi";
                    }};;
                    timePartitioning = new TimePartitioning() {{
                        expirationMs = "ipsum";
                        field = "accusamus";
                        requirePartitionFilter = false;
                        type = "consectetur";
                    }};;
                    type = "tempora";
                    view = new ViewDefinition() {{
                        query = "sequi";
                        useExplicitColumnNames = false;
                        useLegacySql = false;
                        userDefinedFunctionResources = new org.openapis.openapi.models.shared.UserDefinedFunctionResource[]{{
                            add(new UserDefinedFunctionResource() {{
                                inlineCode = "aliquid";
                                resourceUri = "placeat";
                            }}),
                        }};
                    }};;
                }};;
                alt = AltEnum.JSON;
                autodetectSchema = false;
                fields = "sapiente";
                key = "corporis";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "soluta";
                userIp = "magnam";
            }};            

            BigqueryTablesPatchResponse res = sdk.tables.bigqueryTablesPatch(req, new BigqueryTablesPatchSecurity() {{
                option1 = new BigqueryTablesPatchSecurityOption1("sequi", "ab") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.table != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryTablesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryTablesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.BigqueryTablesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.BigqueryTablesSetIamPolicySecurity;
import org.openapis.openapi.models.operations.BigqueryTablesSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.BigqueryTablesSetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.SetIamPolicyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryTablesSetIamPolicyRequest req = new BigqueryTablesSetIamPolicyRequest("consectetur") {{
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("porro"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("vitae"),
                                            add("quisquam"),
                                            add("fugit"),
                                            add("consequatur"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "placeat";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("illum"),
                                            add("quod"),
                                            add("minus"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptatem"),
                                            add("labore"),
                                            add("maxime"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "illo";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "exercitationem";
                                    expression = "cum";
                                    location = "atque";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("praesentium"),
                                    add("optio"),
                                }};
                                role = "officiis";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "voluptatibus";
                                    expression = "mollitia";
                                    location = "quam";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("ab"),
                                    add("voluptates"),
                                    add("eos"),
                                    add("facere"),
                                }};
                                role = "nesciunt";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "libero";
                                    expression = "error";
                                    location = "perferendis";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("voluptatem"),
                                    add("sint"),
                                    add("corporis"),
                                    add("explicabo"),
                                }};
                                role = "distinctio";
                            }}),
                        }};
                        etag = "harum";
                        version = 693250;
                    }};;
                    updateMask = "tempora";
                }};;
                alt = AltEnum.JSON;
                fields = "minus";
                key = "harum";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "inventore";
                userIp = "iste";
            }};            

            BigqueryTablesSetIamPolicyResponse res = sdk.tables.bigqueryTablesSetIamPolicy(req, new BigqueryTablesSetIamPolicySecurity() {{
                option1 = new BigqueryTablesSetIamPolicySecurityOption1("voluptatibus", "odio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryTablesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryTablesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.BigqueryTablesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.BigqueryTablesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.BigqueryTablesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryTablesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.BigqueryTablesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryTablesTestIamPermissionsRequest req = new BigqueryTablesTestIamPermissionsRequest("ab") {{
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("pariatur"),
                    }};
                }};;
                alt = AltEnum.JSON;
                fields = "excepturi";
                key = "enim";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "dolore";
                userIp = "sunt";
            }};            

            BigqueryTablesTestIamPermissionsResponse res = sdk.tables.bigqueryTablesTestIamPermissions(req, new BigqueryTablesTestIamPermissionsSecurity() {{
                option1 = new BigqueryTablesTestIamPermissionsSecurityOption1("nisi", "molestias") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.testIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryTablesUpdate

Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryTablesUpdateRequest;
import org.openapis.openapi.models.operations.BigqueryTablesUpdateResponse;
import org.openapis.openapi.models.operations.BigqueryTablesUpdateSecurity;
import org.openapis.openapi.models.operations.BigqueryTablesUpdateSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryTablesUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AvroOptions;
import org.openapis.openapi.models.shared.BigtableColumn;
import org.openapis.openapi.models.shared.BigtableColumnFamily;
import org.openapis.openapi.models.shared.BigtableOptions;
import org.openapis.openapi.models.shared.BqmlIterationResult;
import org.openapis.openapi.models.shared.BqmlTrainingRun;
import org.openapis.openapi.models.shared.BqmlTrainingRunTrainingOptions;
import org.openapis.openapi.models.shared.CloneDefinition;
import org.openapis.openapi.models.shared.Clustering;
import org.openapis.openapi.models.shared.CsvOptions;
import org.openapis.openapi.models.shared.EncryptionConfiguration;
import org.openapis.openapi.models.shared.ExternalDataConfiguration;
import org.openapis.openapi.models.shared.GoogleSheetsOptions;
import org.openapis.openapi.models.shared.HivePartitioningOptions;
import org.openapis.openapi.models.shared.MaterializedViewDefinition;
import org.openapis.openapi.models.shared.ModelDefinition;
import org.openapis.openapi.models.shared.ModelDefinitionModelOptions;
import org.openapis.openapi.models.shared.ParquetOptions;
import org.openapis.openapi.models.shared.RangePartitioning;
import org.openapis.openapi.models.shared.RangePartitioningRange;
import org.openapis.openapi.models.shared.SnapshotDefinition;
import org.openapis.openapi.models.shared.Streamingbuffer;
import org.openapis.openapi.models.shared.Table;
import org.openapis.openapi.models.shared.TableFieldSchema;
import org.openapis.openapi.models.shared.TableFieldSchemaCategories;
import org.openapis.openapi.models.shared.TableFieldSchemaPolicyTags;
import org.openapis.openapi.models.shared.TableReference;
import org.openapis.openapi.models.shared.TableSchema;
import org.openapis.openapi.models.shared.TimePartitioning;
import org.openapis.openapi.models.shared.UserDefinedFunctionResource;
import org.openapis.openapi.models.shared.ViewDefinition;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryTablesUpdateRequest req = new BigqueryTablesUpdateRequest("impedit", "quasi", "nesciunt") {{
                table = new Table() {{
                    cloneDefinition = new CloneDefinition() {{
                        baseTableReference = new TableReference() {{
                            datasetId = "corrupti";
                            projectId = "in";
                            tableId = "quia";
                        }};;
                        cloneTime = OffsetDateTime.parse("2022-11-18T13:26:27.939Z");
                    }};;
                    clustering = new Clustering() {{
                        fields = new String[]{{
                            add("vitae"),
                            add("quos"),
                            add("eveniet"),
                            add("officia"),
                        }};
                    }};;
                    creationTime = "perspiciatis";
                    defaultCollation = "debitis";
                    defaultRoundingMode = "non";
                    description = "veniam";
                    encryptionConfiguration = new EncryptionConfiguration() {{
                        kmsKeyName = "illo";
                    }};;
                    etag = "illo";
                    expirationTime = "deleniti";
                    externalDataConfiguration = new ExternalDataConfiguration() {{
                        autodetect = false;
                        avroOptions = new AvroOptions() {{
                            useAvroLogicalTypes = false;
                        }};;
                        bigtableOptions = new BigtableOptions() {{
                            columnFamilies = new org.openapis.openapi.models.shared.BigtableColumnFamily[]{{
                                add(new BigtableColumnFamily() {{
                                    columns = new org.openapis.openapi.models.shared.BigtableColumn[]{{
                                        add(new BigtableColumn() {{
                                            encoding = "optio";
                                            fieldName = "quo";
                                            onlyReadLatest = false;
                                            qualifierEncoded = "minima";
                                            qualifierString = "ducimus";
                                            type = "tenetur";
                                        }}),
                                    }};
                                    encoding = "libero";
                                    familyId = "repellendus";
                                    onlyReadLatest = false;
                                    type = "aliquid";
                                }}),
                                add(new BigtableColumnFamily() {{
                                    columns = new org.openapis.openapi.models.shared.BigtableColumn[]{{
                                        add(new BigtableColumn() {{
                                            encoding = "rerum";
                                            fieldName = "beatae";
                                            onlyReadLatest = false;
                                            qualifierEncoded = "fuga";
                                            qualifierString = "quam";
                                            type = "molestias";
                                        }}),
                                    }};
                                    encoding = "eveniet";
                                    familyId = "quibusdam";
                                    onlyReadLatest = false;
                                    type = "eos";
                                }}),
                                add(new BigtableColumnFamily() {{
                                    columns = new org.openapis.openapi.models.shared.BigtableColumn[]{{
                                        add(new BigtableColumn() {{
                                            encoding = "est";
                                            fieldName = "occaecati";
                                            onlyReadLatest = false;
                                            qualifierEncoded = "pariatur";
                                            qualifierString = "quaerat";
                                            type = "itaque";
                                        }}),
                                        add(new BigtableColumn() {{
                                            encoding = "itaque";
                                            fieldName = "animi";
                                            onlyReadLatest = false;
                                            qualifierEncoded = "totam";
                                            qualifierString = "ullam";
                                            type = "nisi";
                                        }}),
                                        add(new BigtableColumn() {{
                                            encoding = "nemo";
                                            fieldName = "atque";
                                            onlyReadLatest = false;
                                            qualifierEncoded = "optio";
                                            qualifierString = "fugit";
                                            type = "at";
                                        }}),
                                    }};
                                    encoding = "modi";
                                    familyId = "delectus";
                                    onlyReadLatest = false;
                                    type = "aliquam";
                                }}),
                                add(new BigtableColumnFamily() {{
                                    columns = new org.openapis.openapi.models.shared.BigtableColumn[]{{
                                        add(new BigtableColumn() {{
                                            encoding = "laudantium";
                                            fieldName = "quas";
                                            onlyReadLatest = false;
                                            qualifierEncoded = "quidem";
                                            qualifierString = "voluptates";
                                            type = "labore";
                                        }}),
                                        add(new BigtableColumn() {{
                                            encoding = "hic";
                                            fieldName = "aspernatur";
                                            onlyReadLatest = false;
                                            qualifierEncoded = "nihil";
                                            qualifierString = "quas";
                                            type = "tenetur";
                                        }}),
                                        add(new BigtableColumn() {{
                                            encoding = "fugiat";
                                            fieldName = "unde";
                                            onlyReadLatest = false;
                                            qualifierEncoded = "autem";
                                            qualifierString = "ea";
                                            type = "molestiae";
                                        }}),
                                        add(new BigtableColumn() {{
                                            encoding = "accusamus";
                                            fieldName = "labore";
                                            onlyReadLatest = false;
                                            qualifierEncoded = "autem";
                                            qualifierString = "placeat";
                                            type = "corporis";
                                        }}),
                                    }};
                                    encoding = "dicta";
                                    familyId = "possimus";
                                    onlyReadLatest = false;
                                    type = "dolores";
                                }}),
                            }};
                            ignoreUnspecifiedColumnFamilies = false;
                            readRowkeyAsString = false;
                        }};;
                        compression = "voluptatibus";
                        connectionId = "repellat";
                        csvOptions = new CsvOptions() {{
                            allowJaggedRows = false;
                            allowQuotedNewlines = false;
                            encoding = "id";
                            fieldDelimiter = "fuga";
                            nullMarker = "ad";
                            preserveAsciiControlCharacters = false;
                            quote = "corrupti";
                            skipLeadingRows = "temporibus";
                        }};;
                        decimalTargetTypes = new String[]{{
                            add("voluptates"),
                            add("repellat"),
                            add("sed"),
                            add("ratione"),
                        }};
                        googleSheetsOptions = new GoogleSheetsOptions() {{
                            range = "quaerat";
                            skipLeadingRows = "minus";
                        }};;
                        hivePartitioningOptions = new HivePartitioningOptions() {{
                            fields = new String[]{{
                                add("nostrum"),
                                add("veniam"),
                                add("tempore"),
                            }};
                            mode = "natus";
                            requirePartitionFilter = false;
                            sourceUriPrefix = "facilis";
                        }};;
                        ignoreUnknownValues = false;
                        maxBadRecords = 827220;
                        metadataCacheMode = "repellat";
                        objectMetadata = "odit";
                        parquetOptions = new ParquetOptions() {{
                            enableListInference = false;
                            enumAsString = false;
                        }};;
                        referenceFileSchemaUri = "vitae";
                        schema = new TableSchema() {{
                            fields = new org.openapis.openapi.models.shared.TableFieldSchema[]{{
                                add(new TableFieldSchema() {{
                                    categories = new TableFieldSchemaCategories() {{
                                        names = new String[]{{
                                            add("id"),
                                        }};
                                    }};
                                    collation = "nobis";
                                    defaultValueExpression = "vero";
                                    description = "excepturi";
                                    fields = new org.openapis.openapi.models.shared.TableFieldSchema[]{{
                                        add(new TableFieldSchema() {{}}),
                                        add(new TableFieldSchema() {{}}),
                                        add(new TableFieldSchema() {{}}),
                                    }};
                                    maxLength = "harum";
                                    mode = "quisquam";
                                    name = "Bobby Kunde";
                                    policyTags = new TableFieldSchemaPolicyTags() {{
                                        names = new String[]{{
                                            add("impedit"),
                                            add("magni"),
                                            add("suscipit"),
                                            add("ipsam"),
                                        }};
                                    }};
                                    precision = "error";
                                    roundingMode = "quisquam";
                                    scale = "debitis";
                                    type = "ipsa";
                                }}),
                                add(new TableFieldSchema() {{
                                    categories = new TableFieldSchemaCategories() {{
                                        names = new String[]{{
                                            add("totam"),
                                        }};
                                    }};
                                    collation = "consequatur";
                                    defaultValueExpression = "corrupti";
                                    description = "numquam";
                                    fields = new org.openapis.openapi.models.shared.TableFieldSchema[]{{
                                        add(new TableFieldSchema() {{}}),
                                    }};
                                    maxLength = "quod";
                                    mode = "nisi";
                                    name = "Elbert West";
                                    policyTags = new TableFieldSchemaPolicyTags() {{
                                        names = new String[]{{
                                            add("modi"),
                                            add("enim"),
                                            add("cumque"),
                                            add("blanditiis"),
                                        }};
                                    }};
                                    precision = "animi";
                                    roundingMode = "quibusdam";
                                    scale = "possimus";
                                    type = "maiores";
                                }}),
                                add(new TableFieldSchema() {{
                                    categories = new TableFieldSchemaCategories() {{
                                        names = new String[]{{
                                            add("optio"),
                                            add("voluptate"),
                                            add("nostrum"),
                                        }};
                                    }};
                                    collation = "incidunt";
                                    defaultValueExpression = "enim";
                                    description = "ipsa";
                                    fields = new org.openapis.openapi.models.shared.TableFieldSchema[]{{
                                        add(new TableFieldSchema() {{}}),
                                    }};
                                    maxLength = "quaerat";
                                    mode = "nesciunt";
                                    name = "Marianne Keeling";
                                    policyTags = new TableFieldSchemaPolicyTags() {{
                                        names = new String[]{{
                                            add("facilis"),
                                        }};
                                    }};
                                    precision = "magnam";
                                    roundingMode = "dolor";
                                    scale = "provident";
                                    type = "inventore";
                                }}),
                            }};
                        }};;
                        sourceFormat = "sapiente";
                        sourceUris = new String[]{{
                            add("sapiente"),
                            add("ipsa"),
                            add("vitae"),
                            add("nobis"),
                        }};
                    }};;
                    friendlyName = "adipisci";
                    id = "e91e8f7b-c69d-4460-a77e-ceb26d10f1ef";
                    kind = "qui";
                    labels = new java.util.HashMap<String, String>() {{
                        put("neque", "ab");
                        put("quisquam", "nihil");
                    }};
                    lastModifiedTime = "quisquam";
                    location = "aperiam";
                    materializedView = new MaterializedViewDefinition() {{
                        allowNonIncrementalDefinition = false;
                        enableRefresh = false;
                        lastRefreshTime = "delectus";
                        maxStaleness = "aut";
                        query = "repellat";
                        refreshIntervalMs = "molestias";
                    }};;
                    maxStaleness = "ducimus";
                    model = new ModelDefinition() {{
                        modelOptions = new ModelDefinitionModelOptions() {{
                            labels = new String[]{{
                                add("sapiente"),
                            }};
                            lossType = "error";
                            modelType = "facere";
                        }};;
                        trainingRuns = new org.openapis.openapi.models.shared.BqmlTrainingRun[]{{
                            add(new BqmlTrainingRun() {{
                                iterationResults = new org.openapis.openapi.models.shared.BqmlIterationResult[]{{
                                    add(new BqmlIterationResult() {{
                                        durationMs = "aspernatur";
                                        evalLoss = 3659.53;
                                        index = 984402;
                                        learnRate = 8503.86;
                                        trainingLoss = 2499.41;
                                    }}),
                                    add(new BqmlIterationResult() {{
                                        durationMs = "repudiandae";
                                        evalLoss = 619.77;
                                        index = 734003;
                                        learnRate = 2788.36;
                                        trainingLoss = 6464.87;
                                    }}),
                                    add(new BqmlIterationResult() {{
                                        durationMs = "non";
                                        evalLoss = 6404;
                                        index = 299646;
                                        learnRate = 1556.8;
                                        trainingLoss = 3556.74;
                                    }}),
                                    add(new BqmlIterationResult() {{
                                        durationMs = "dolor";
                                        evalLoss = 8051.65;
                                        index = 228943;
                                        learnRate = 597.84;
                                        trainingLoss = 1626.75;
                                    }}),
                                }};
                                startTime = OffsetDateTime.parse("2022-07-10T12:43:24.507Z");
                                state = "architecto";
                                trainingOptions = new BqmlTrainingRunTrainingOptions() {{
                                    earlyStop = false;
                                    l1Reg = 669.19;
                                    l2Reg = 9821.97;
                                    learnRate = 2874.25;
                                    learnRateStrategy = "fugit";
                                    lineSearchInitLearnRate = 8074.3;
                                    maxIteration = "iusto";
                                    minRelProgress = 9248.42;
                                    warmStart = false;
                                }};
                            }}),
                            add(new BqmlTrainingRun() {{
                                iterationResults = new org.openapis.openapi.models.shared.BqmlIterationResult[]{{
                                    add(new BqmlIterationResult() {{
                                        durationMs = "pariatur";
                                        evalLoss = 7811.78;
                                        index = 317169;
                                        learnRate = 2721.46;
                                        trainingLoss = 5293.03;
                                    }}),
                                    add(new BqmlIterationResult() {{
                                        durationMs = "cum";
                                        evalLoss = 9336.84;
                                        index = 26338;
                                        learnRate = 5666.8;
                                        trainingLoss = 9271.51;
                                    }}),
                                }};
                                startTime = OffsetDateTime.parse("2022-11-25T21:08:53.747Z");
                                state = "fuga";
                                trainingOptions = new BqmlTrainingRunTrainingOptions() {{
                                    earlyStop = false;
                                    l1Reg = 4808.29;
                                    l2Reg = 6330.56;
                                    learnRate = 1734.29;
                                    learnRateStrategy = "inventore";
                                    lineSearchInitLearnRate = 3686.17;
                                    maxIteration = "impedit";
                                    minRelProgress = 6420.21;
                                    warmStart = false;
                                }};
                            }}),
                        }};
                    }};;
                    numBytes = "et";
                    numLongTermBytes = "odit";
                    numPhysicalBytes = "similique";
                    numRows = "labore";
                    numActiveLogicalBytes = "harum";
                    numActivePhysicalBytes = "dolorum";
                    numLongTermLogicalBytes = "provident";
                    numLongTermPhysicalBytes = "quibusdam";
                    numPartitions = "ipsam";
                    numTimeTravelPhysicalBytes = "provident";
                    numTotalLogicalBytes = "omnis";
                    numTotalPhysicalBytes = "rem";
                    rangePartitioning = new RangePartitioning() {{
                        field = "quos";
                        range = new RangePartitioningRange() {{
                            end = "beatae";
                            interval = "perspiciatis";
                            start = "fugit";
                        }};;
                    }};;
                    requirePartitionFilter = false;
                    schema = new TableSchema() {{
                        fields = new org.openapis.openapi.models.shared.TableFieldSchema[]{{
                            add(new TableFieldSchema() {{
                                categories = new TableFieldSchemaCategories() {{
                                    names = new String[]{{
                                        add("assumenda"),
                                        add("alias"),
                                        add("eligendi"),
                                        add("odio"),
                                    }};
                                }};
                                collation = "iusto";
                                defaultValueExpression = "eligendi";
                                description = "ullam";
                                fields = new org.openapis.openapi.models.shared.TableFieldSchema[]{{
                                    add(new TableFieldSchema() {{}}),
                                }};
                                maxLength = "vero";
                                mode = "esse";
                                name = "Julio Schulist";
                                policyTags = new TableFieldSchemaPolicyTags() {{
                                    names = new String[]{{
                                        add("nisi"),
                                        add("recusandae"),
                                        add("deleniti"),
                                        add("nobis"),
                                    }};
                                }};
                                precision = "excepturi";
                                roundingMode = "consequatur";
                                scale = "distinctio";
                                type = "similique";
                            }}),
                            add(new TableFieldSchema() {{
                                categories = new TableFieldSchemaCategories() {{
                                    names = new String[]{{
                                        add("consectetur"),
                                        add("molestias"),
                                        add("modi"),
                                        add("saepe"),
                                    }};
                                }};
                                collation = "qui";
                                defaultValueExpression = "dolor";
                                description = "sint";
                                fields = new org.openapis.openapi.models.shared.TableFieldSchema[]{{
                                    add(new TableFieldSchema() {{}}),
                                    add(new TableFieldSchema() {{}}),
                                }};
                                maxLength = "in";
                                mode = "ipsa";
                                name = "Elisa Watsica";
                                policyTags = new TableFieldSchemaPolicyTags() {{
                                    names = new String[]{{
                                        add("quo"),
                                    }};
                                }};
                                precision = "veniam";
                                roundingMode = "sit";
                                scale = "deleniti";
                                type = "qui";
                            }}),
                            add(new TableFieldSchema() {{
                                categories = new TableFieldSchemaCategories() {{
                                    names = new String[]{{
                                        add("possimus"),
                                        add("dicta"),
                                    }};
                                }};
                                collation = "deleniti";
                                defaultValueExpression = "perspiciatis";
                                description = "deserunt";
                                fields = new org.openapis.openapi.models.shared.TableFieldSchema[]{{
                                    add(new TableFieldSchema() {{}}),
                                }};
                                maxLength = "eum";
                                mode = "culpa";
                                name = "Opal Cassin";
                                policyTags = new TableFieldSchemaPolicyTags() {{
                                    names = new String[]{{
                                        add("repudiandae"),
                                        add("rerum"),
                                    }};
                                }};
                                precision = "esse";
                                roundingMode = "accusantium";
                                scale = "nihil";
                                type = "similique";
                            }}),
                            add(new TableFieldSchema() {{
                                categories = new TableFieldSchemaCategories() {{
                                    names = new String[]{{
                                        add("iure"),
                                        add("aut"),
                                        add("placeat"),
                                    }};
                                }};
                                collation = "voluptatum";
                                defaultValueExpression = "doloribus";
                                description = "officiis";
                                fields = new org.openapis.openapi.models.shared.TableFieldSchema[]{{
                                    add(new TableFieldSchema() {{}}),
                                    add(new TableFieldSchema() {{}}),
                                }};
                                maxLength = "commodi";
                                mode = "debitis";
                                name = "Heather Kling";
                                policyTags = new TableFieldSchemaPolicyTags() {{
                                    names = new String[]{{
                                        add("iste"),
                                        add("pariatur"),
                                        add("nobis"),
                                    }};
                                }};
                                precision = "dolor";
                                roundingMode = "distinctio";
                                scale = "dignissimos";
                                type = "eaque";
                            }}),
                        }};
                    }};;
                    selfLink = "voluptatibus";
                    snapshotDefinition = new SnapshotDefinition() {{
                        baseTableReference = new TableReference() {{
                            datasetId = "voluptatibus";
                            projectId = "cum";
                            tableId = "facilis";
                        }};;
                        snapshotTime = OffsetDateTime.parse("2022-06-03T06:06:09.794Z");
                    }};;
                    streamingBuffer = new Streamingbuffer() {{
                        estimatedBytes = "ducimus";
                        estimatedRows = "aperiam";
                        oldestEntryTime = "repudiandae";
                    }};;
                    tableReference = new TableReference() {{
                        datasetId = "repudiandae";
                        projectId = "odio";
                        tableId = "nihil";
                    }};;
                    timePartitioning = new TimePartitioning() {{
                        expirationMs = "ipsa";
                        field = "eveniet";
                        requirePartitionFilter = false;
                        type = "neque";
                    }};;
                    type = "autem";
                    view = new ViewDefinition() {{
                        query = "alias";
                        useExplicitColumnNames = false;
                        useLegacySql = false;
                        userDefinedFunctionResources = new org.openapis.openapi.models.shared.UserDefinedFunctionResource[]{{
                            add(new UserDefinedFunctionResource() {{
                                inlineCode = "iusto";
                                resourceUri = "debitis";
                            }}),
                            add(new UserDefinedFunctionResource() {{
                                inlineCode = "voluptatibus";
                                resourceUri = "esse";
                            }}),
                            add(new UserDefinedFunctionResource() {{
                                inlineCode = "maxime";
                                resourceUri = "eos";
                            }}),
                        }};
                    }};;
                }};;
                alt = AltEnum.JSON;
                autodetectSchema = false;
                fields = "doloremque";
                key = "vel";
                oauthToken = "itaque";
                prettyPrint = false;
                quotaUser = "suscipit";
                userIp = "vitae";
            }};            

            BigqueryTablesUpdateResponse res = sdk.tables.bigqueryTablesUpdate(req, new BigqueryTablesUpdateSecurity() {{
                option1 = new BigqueryTablesUpdateSecurityOption1("tempore", "sit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.table != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
