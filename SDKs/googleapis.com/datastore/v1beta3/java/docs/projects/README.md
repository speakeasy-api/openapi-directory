# projects

### Available Operations

* [datastoreProjectsAllocateIds](#datastoreprojectsallocateids) - Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.
* [datastoreProjectsBeginTransaction](#datastoreprojectsbegintransaction) - Begins a new transaction.
* [datastoreProjectsCommit](#datastoreprojectscommit) - Commits a transaction, optionally creating, deleting or modifying some entities.
* [datastoreProjectsLookup](#datastoreprojectslookup) - Looks up entities by key.
* [datastoreProjectsReserveIds](#datastoreprojectsreserveids) - Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.
* [datastoreProjectsRollback](#datastoreprojectsrollback) - Rolls back a transaction.
* [datastoreProjectsRunAggregationQuery](#datastoreprojectsrunaggregationquery) - Runs an aggregation query.
* [datastoreProjectsRunQuery](#datastoreprojectsrunquery) - Queries for entities.

## datastoreProjectsAllocateIds

Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastoreProjectsAllocateIdsRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsAllocateIdsResponse;
import org.openapis.openapi.models.operations.DatastoreProjectsAllocateIdsSecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsAllocateIdsSecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsAllocateIdsSecurityOption2;
import org.openapis.openapi.models.shared.AllocateIdsRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Key;
import org.openapis.openapi.models.shared.PartitionId;
import org.openapis.openapi.models.shared.PathElement;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsAllocateIdsRequest req = new DatastoreProjectsAllocateIdsRequest("iste") {{
                dollarXgafv = XgafvEnum.ONE;
                allocateIdsRequest = new AllocateIdsRequest() {{
                    keys = new org.openapis.openapi.models.shared.Key[]{{
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                namespaceId = "quidem";
                                projectId = "architecto";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "reiciendis";
                                    kind = "est";
                                    name = "Cameron Dach";
                                }}),
                            }};
                        }}),
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                namespaceId = "explicabo";
                                projectId = "nobis";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "omnis";
                                    kind = "nemo";
                                    name = "Velma Batz";
                                }}),
                                add(new PathElement() {{
                                    id = "doloribus";
                                    kind = "sapiente";
                                    name = "Angie Durgan";
                                }}),
                            }};
                        }}),
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                namespaceId = "repellat";
                                projectId = "mollitia";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "numquam";
                                    kind = "commodi";
                                    name = "Nellie Frami";
                                }}),
                                add(new PathElement() {{
                                    id = "quis";
                                    kind = "vitae";
                                    name = "Matt Hamill";
                                }}),
                                add(new PathElement() {{
                                    id = "sequi";
                                    kind = "tenetur";
                                    name = "Mr. Alberta Schuster";
                                }}),
                            }};
                        }}),
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                namespaceId = "temporibus";
                                projectId = "laborum";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "reiciendis";
                                    kind = "voluptatibus";
                                    name = "Jessie Langosh V";
                                }}),
                            }};
                        }}),
                    }};
                }};;
                accessToken = "voluptate";
                alt = AltEnum.PROTO;
                callback = "perferendis";
                fields = "doloremque";
                key = "reprehenderit";
                oauthToken = "ut";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "dicta";
                uploadProtocol = "corporis";
            }};            

            DatastoreProjectsAllocateIdsResponse res = sdk.projects.datastoreProjectsAllocateIds(req, new DatastoreProjectsAllocateIdsSecurity() {{
                option1 = new DatastoreProjectsAllocateIdsSecurityOption1("dolore", "iusto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.allocateIdsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastoreProjectsBeginTransaction

Begins a new transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastoreProjectsBeginTransactionRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsBeginTransactionResponse;
import org.openapis.openapi.models.operations.DatastoreProjectsBeginTransactionSecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsBeginTransactionSecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsBeginTransactionSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BeginTransactionRequest;
import org.openapis.openapi.models.shared.ReadOnly;
import org.openapis.openapi.models.shared.ReadWrite;
import org.openapis.openapi.models.shared.TransactionOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsBeginTransactionRequest req = new DatastoreProjectsBeginTransactionRequest("dicta") {{
                dollarXgafv = XgafvEnum.TWO;
                beginTransactionRequest = new BeginTransactionRequest() {{
                    transactionOptions = new TransactionOptions() {{
                        readOnly = new ReadOnly() {{
                            readTime = "enim";
                        }};;
                        readWrite = new ReadWrite() {{
                            previousTransaction = "accusamus";
                        }};;
                    }};;
                }};;
                accessToken = "commodi";
                alt = AltEnum.PROTO;
                callback = "quae";
                fields = "ipsum";
                key = "quidem";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "pariatur";
                uploadProtocol = "modi";
            }};            

            DatastoreProjectsBeginTransactionResponse res = sdk.projects.datastoreProjectsBeginTransaction(req, new DatastoreProjectsBeginTransactionSecurity() {{
                option1 = new DatastoreProjectsBeginTransactionSecurityOption1("praesentium", "rem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.beginTransactionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastoreProjectsCommit

Commits a transaction, optionally creating, deleting or modifying some entities.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastoreProjectsCommitRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsCommitResponse;
import org.openapis.openapi.models.operations.DatastoreProjectsCommitSecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsCommitSecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsCommitSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ArrayValue;
import org.openapis.openapi.models.shared.CommitRequest;
import org.openapis.openapi.models.shared.CommitRequestModeEnum;
import org.openapis.openapi.models.shared.Entity;
import org.openapis.openapi.models.shared.Key;
import org.openapis.openapi.models.shared.LatLng;
import org.openapis.openapi.models.shared.Mutation;
import org.openapis.openapi.models.shared.PartitionId;
import org.openapis.openapi.models.shared.PathElement;
import org.openapis.openapi.models.shared.Value;
import org.openapis.openapi.models.shared.ValueNullValueEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsCommitRequest req = new DatastoreProjectsCommitRequest("voluptates") {{
                dollarXgafv = XgafvEnum.ONE;
                commitRequest = new CommitRequest() {{
                    mode = CommitRequestModeEnum.NON_TRANSACTIONAL;
                    mutations = new org.openapis.openapi.models.shared.Mutation[]{{
                        add(new Mutation() {{
                            baseVersion = "veritatis";
                            delete = new Key() {{
                                partitionId = new PartitionId() {{
                                    namespaceId = "itaque";
                                    projectId = "incidunt";
                                }};
                                path = new org.openapis.openapi.models.shared.PathElement[]{{
                                    add(new PathElement() {{
                                        id = "consequatur";
                                        kind = "est";
                                        name = "Benjamin O'Connell";
                                    }}),
                                    add(new PathElement() {{
                                        id = "labore";
                                        kind = "modi";
                                        name = "Beth McGlynn Sr.";
                                    }}),
                                }};
                            }};
                            insert = new Entity() {{
                                key = new Key() {{
                                    partitionId = new PartitionId() {{
                                        namespaceId = "assumenda";
                                        projectId = "ipsam";
                                    }};
                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                        add(new PathElement() {{
                                            id = "fugit";
                                            kind = "dolorum";
                                            name = "Eddie Prosacco";
                                        }}),
                                    }};
                                }};
                                properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                    put("eum", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "eligendi";
                                        booleanValue = false;
                                        doubleValue = 5761.57;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 3960.98;
                                            longitude = 5920.42;
                                        }};
                                        integerValue = "necessitatibus";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "sint";
                                                projectId = "officia";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "debitis";
                                                    kind = "a";
                                                    name = "Arnold Kirlin";
                                                }}),
                                            }};
                                        }};
                                        meaning = 699479;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "dicta";
                                        timestampValue = "magnam";
                                    }});
                                    put("cumque", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "ea";
                                        booleanValue = false;
                                        doubleValue = 3965.06;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 6754.39;
                                            longitude = 8811.04;
                                        }};
                                        integerValue = "non";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "occaecati";
                                                projectId = "enim";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "delectus";
                                                    kind = "quidem";
                                                    name = "Marco Olson";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "sapiente";
                                                    kind = "amet";
                                                    name = "Tyler Kassulke";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "molestiae";
                                                    kind = "perferendis";
                                                    name = "Megan Rau";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "labore";
                                                    kind = "suscipit";
                                                    name = "Robin Keebler";
                                                }}),
                                            }};
                                        }};
                                        meaning = 102863;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "magnam";
                                        timestampValue = "et";
                                    }});
                                    put("excepturi", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "provident";
                                        booleanValue = false;
                                        doubleValue = 5518.16;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 5743.25;
                                            longitude = 336.25;
                                        }};
                                        integerValue = "mollitia";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "reiciendis";
                                                projectId = "mollitia";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "eum";
                                                    kind = "dolor";
                                                    name = "Ms. Fred Hilll";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "debitis";
                                                    kind = "eius";
                                                    name = "Alfredo Prosacco Sr.";
                                                }}),
                                            }};
                                        }};
                                        meaning = 919483;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "ullam";
                                        timestampValue = "expedita";
                                    }});
                                    put("nihil", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "quibusdam";
                                        booleanValue = false;
                                        doubleValue = 1494.48;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 9046.48;
                                            longitude = 8681.26;
                                        }};
                                        integerValue = "accusantium";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "consequuntur";
                                                projectId = "praesentium";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "magni";
                                                    kind = "sunt";
                                                    name = "Gilberto Streich";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "excepturi";
                                                    kind = "odit";
                                                    name = "Donna Bernhard";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "ipsam";
                                                    kind = "voluptate";
                                                    name = "Candice Beatty";
                                                }}),
                                            }};
                                        }};
                                        meaning = 975522;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "perferendis";
                                        timestampValue = "fugiat";
                                    }});
                                }};
                            }};
                            update = new Entity() {{
                                key = new Key() {{
                                    partitionId = new PartitionId() {{
                                        namespaceId = "amet";
                                        projectId = "aut";
                                    }};
                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                        add(new PathElement() {{
                                            id = "corporis";
                                            kind = "hic";
                                            name = "Robin D'Amore";
                                        }}),
                                        add(new PathElement() {{
                                            id = "dignissimos";
                                            kind = "eaque";
                                            name = "Mr. Robin Daugherty";
                                        }}),
                                        add(new PathElement() {{
                                            id = "quam";
                                            kind = "dolor";
                                            name = "Dean Welch";
                                        }}),
                                        add(new PathElement() {{
                                            id = "facilis";
                                            kind = "perspiciatis";
                                            name = "Robyn Cruickshank";
                                        }}),
                                    }};
                                }};
                                properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                    put("occaecati", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "adipisci";
                                        booleanValue = false;
                                        doubleValue = 9923.97;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 9342.14;
                                            longitude = 2672.62;
                                        }};
                                        integerValue = "iste";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "dolorum";
                                                projectId = "deleniti";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "provident";
                                                    kind = "nobis";
                                                    name = "Toby Hahn";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "dolorem";
                                                    kind = "dolorem";
                                                    name = "Norma Erdman";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "cum";
                                                    kind = "voluptate";
                                                    name = "Johanna Farrell";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "veritatis";
                                                    kind = "ipsa";
                                                    name = "Vera Kuhlman";
                                                }}),
                                            }};
                                        }};
                                        meaning = 696344;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "voluptatibus";
                                        timestampValue = "voluptas";
                                    }});
                                }};
                            }};
                            updateTime = "natus";
                            upsert = new Entity() {{
                                key = new Key() {{
                                    partitionId = new PartitionId() {{
                                        namespaceId = "eos";
                                        projectId = "atque";
                                    }};
                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                        add(new PathElement() {{
                                            id = "fugiat";
                                            kind = "ab";
                                            name = "Omar Kris";
                                        }}),
                                    }};
                                }};
                                properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                    put("omnis", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "distinctio";
                                        booleanValue = false;
                                        doubleValue = 9903.39;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 4694.97;
                                            longitude = 2168.97;
                                        }};
                                        integerValue = "voluptate";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "id";
                                                projectId = "saepe";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "aspernatur";
                                                    kind = "perferendis";
                                                    name = "Marianne Thompson";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "suscipit";
                                                    kind = "deserunt";
                                                    name = "Derek Sipes";
                                                }}),
                                            }};
                                        }};
                                        meaning = 55;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "at";
                                        timestampValue = "quaerat";
                                    }});
                                    put("tempora", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "quod";
                                        booleanValue = false;
                                        doubleValue = 8853.38;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 1856.36;
                                            longitude = 6798.8;
                                        }};
                                        integerValue = "a";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "esse";
                                                projectId = "harum";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "ipsum";
                                                    kind = "quisquam";
                                                    name = "Marvin Renner";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "enim";
                                                    kind = "dolorem";
                                                    name = "Miss Jimmie Kozey";
                                                }}),
                                            }};
                                        }};
                                        meaning = 153694;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "vel";
                                        timestampValue = "libero";
                                    }});
                                    put("voluptas", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "quam";
                                        booleanValue = false;
                                        doubleValue = 2148.8;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 2776.28;
                                            longitude = 1864.58;
                                        }};
                                        integerValue = "cupiditate";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "maxime";
                                                projectId = "pariatur";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "dicta";
                                                    kind = "laborum";
                                                    name = "Randall Cole";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "facilis";
                                                    kind = "aliquid";
                                                    name = "Felicia Spencer";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "fugit";
                                                    kind = "magni";
                                                    name = "Ashley Hermiston";
                                                }}),
                                            }};
                                        }};
                                        meaning = 30452;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "cumque";
                                        timestampValue = "soluta";
                                    }});
                                }};
                            }};
                        }}),
                        add(new Mutation() {{
                            baseVersion = "nobis";
                            delete = new Key() {{
                                partitionId = new PartitionId() {{
                                    namespaceId = "et";
                                    projectId = "saepe";
                                }};
                                path = new org.openapis.openapi.models.shared.PathElement[]{{
                                    add(new PathElement() {{
                                        id = "veritatis";
                                        kind = "nobis";
                                        name = "Dr. Randolph McDermott";
                                    }}),
                                }};
                            }};
                            insert = new Entity() {{
                                key = new Key() {{
                                    partitionId = new PartitionId() {{
                                        namespaceId = "dolore";
                                        projectId = "labore";
                                    }};
                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                        add(new PathElement() {{
                                            id = "dolorum";
                                            kind = "architecto";
                                            name = "Margaret Luettgen MD";
                                        }}),
                                    }};
                                }};
                                properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                    put("porro", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "ut";
                                        booleanValue = false;
                                        doubleValue = 7034.95;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 5864.1;
                                            longitude = 1816.31;
                                        }};
                                        integerValue = "quae";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "laudantium";
                                                projectId = "odio";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "voluptatibus";
                                                    kind = "quisquam";
                                                    name = "Arturo Hauck";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "voluptate";
                                                    kind = "consectetur";
                                                    name = "Roman Kulas";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "quod";
                                                    kind = "odio";
                                                    name = "Malcolm Swift";
                                                }}),
                                            }};
                                        }};
                                        meaning = 844550;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "illum";
                                        timestampValue = "sequi";
                                    }});
                                    put("natus", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "aut";
                                        booleanValue = false;
                                        doubleValue = 9742.59;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 3472.33;
                                            longitude = 8623.1;
                                        }};
                                        integerValue = "fugit";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "porro";
                                                projectId = "maiores";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "iusto";
                                                    kind = "eligendi";
                                                    name = "Linda Nikolaus";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "ea";
                                                    kind = "aspernatur";
                                                    name = "Elena Gulgowski";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "laudantium";
                                                    kind = "dicta";
                                                    name = "Elisa Boyle";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "excepturi";
                                                    kind = "voluptatibus";
                                                    name = "Dixie Schamberger";
                                                }}),
                                            }};
                                        }};
                                        meaning = 774048;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "corporis";
                                        timestampValue = "veniam";
                                    }});
                                    put("aliquid", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "magnam";
                                        booleanValue = false;
                                        doubleValue = 4072.41;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 7752.2;
                                            longitude = 2322.34;
                                        }};
                                        integerValue = "recusandae";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "aspernatur";
                                                projectId = "minima";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "a";
                                                    kind = "libero";
                                                    name = "Jennifer Lesch";
                                                }}),
                                            }};
                                        }};
                                        meaning = 146946;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "accusamus";
                                        timestampValue = "inventore";
                                    }});
                                    put("non", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "dolorum";
                                        booleanValue = false;
                                        doubleValue = 6720.48;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 8104.24;
                                            longitude = 2453.67;
                                        }};
                                        integerValue = "eum";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "autem";
                                                projectId = "nobis";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "assumenda";
                                                    kind = "nulla";
                                                    name = "Jeannette Boyer";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "explicabo";
                                                    kind = "provident";
                                                    name = "Minnie Gutkowski";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "esse";
                                                    kind = "esse";
                                                    name = "Blake Kihn";
                                                }}),
                                            }};
                                        }};
                                        meaning = 283519;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "eum";
                                        timestampValue = "suscipit";
                                    }});
                                }};
                            }};
                            update = new Entity() {{
                                key = new Key() {{
                                    partitionId = new PartitionId() {{
                                        namespaceId = "assumenda";
                                        projectId = "eos";
                                    }};
                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                        add(new PathElement() {{
                                            id = "quisquam";
                                            kind = "veritatis";
                                            name = "Amelia Predovic";
                                        }}),
                                        add(new PathElement() {{
                                            id = "illum";
                                            kind = "quo";
                                            name = "Herbert Daugherty V";
                                        }}),
                                        add(new PathElement() {{
                                            id = "consequatur";
                                            kind = "tempora";
                                            name = "Roberto Collier";
                                        }}),
                                    }};
                                }};
                                properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                    put("recusandae", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "distinctio";
                                        booleanValue = false;
                                        doubleValue = 7997.96;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 4908.19;
                                            longitude = 769.56;
                                        }};
                                        integerValue = "nihil";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "totam";
                                                projectId = "accusamus";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "odio";
                                                    kind = "occaecati";
                                                    name = "Miranda Daniel";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "accusantium";
                                                    kind = "porro";
                                                    name = "Dianne Langosh";
                                                }}),
                                            }};
                                        }};
                                        meaning = 143829;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "fuga";
                                        timestampValue = "mollitia";
                                    }});
                                    put("incidunt", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "explicabo";
                                        booleanValue = false;
                                        doubleValue = 3256.85;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 3926.76;
                                            longitude = 1470.14;
                                        }};
                                        integerValue = "sapiente";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "consequuntur";
                                                projectId = "ratione";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "saepe";
                                                    kind = "occaecati";
                                                    name = "Carl Koch";
                                                }}),
                                            }};
                                        }};
                                        meaning = 82971;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "esse";
                                        timestampValue = "quod";
                                    }});
                                }};
                            }};
                            updateTime = "nam";
                            upsert = new Entity() {{
                                key = new Key() {{
                                    partitionId = new PartitionId() {{
                                        namespaceId = "vero";
                                        projectId = "aliquid";
                                    }};
                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                        add(new PathElement() {{
                                            id = "saepe";
                                            kind = "vel";
                                            name = "Javier Price";
                                        }}),
                                    }};
                                }};
                                properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                    put("eligendi", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "culpa";
                                        booleanValue = false;
                                        doubleValue = 7313.98;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 2400.2;
                                            longitude = 7669.64;
                                        }};
                                        integerValue = "consequuntur";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "consequatur";
                                                projectId = "minus";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "sapiente";
                                                    kind = "consectetur";
                                                    name = "Mattie McLaughlin";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "quas";
                                                    kind = "esse";
                                                    name = "Lorene Mueller";
                                                }}),
                                            }};
                                        }};
                                        meaning = 820767;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "quia";
                                        timestampValue = "eveniet";
                                    }});
                                    put("asperiores", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "veritatis";
                                        booleanValue = false;
                                        doubleValue = 1594.14;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 944.58;
                                            longitude = 6288.99;
                                        }};
                                        integerValue = "culpa";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "aliquid";
                                                projectId = "tenetur";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "earum";
                                                    kind = "vel";
                                                    name = "Charlotte Rempel";
                                                }}),
                                            }};
                                        }};
                                        meaning = 33304;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "aliquam";
                                        timestampValue = "sapiente";
                                    }});
                                    put("dicta", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "reprehenderit";
                                        booleanValue = false;
                                        doubleValue = 3567.07;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 3917.74;
                                            longitude = 163.28;
                                        }};
                                        integerValue = "voluptatum";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "qui";
                                                projectId = "quibusdam";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "deleniti";
                                                    kind = "itaque";
                                                    name = "Roger Monahan PhD";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "et";
                                                    kind = "voluptate";
                                                    name = "Joann Bogan";
                                                }}),
                                            }};
                                        }};
                                        meaning = 614465;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "temporibus";
                                        timestampValue = "accusantium";
                                    }});
                                }};
                            }};
                        }}),
                        add(new Mutation() {{
                            baseVersion = "rem";
                            delete = new Key() {{
                                partitionId = new PartitionId() {{
                                    namespaceId = "aut";
                                    projectId = "laudantium";
                                }};
                                path = new org.openapis.openapi.models.shared.PathElement[]{{
                                    add(new PathElement() {{
                                        id = "mollitia";
                                        kind = "ab";
                                        name = "Kyle Bartoletti";
                                    }}),
                                    add(new PathElement() {{
                                        id = "numquam";
                                        kind = "impedit";
                                        name = "Loretta Anderson DVM";
                                    }}),
                                }};
                            }};
                            insert = new Entity() {{
                                key = new Key() {{
                                    partitionId = new PartitionId() {{
                                        namespaceId = "natus";
                                        projectId = "velit";
                                    }};
                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                        add(new PathElement() {{
                                            id = "voluptas";
                                            kind = "asperiores";
                                            name = "Eileen Hagenes";
                                        }}),
                                        add(new PathElement() {{
                                            id = "officia";
                                            kind = "maxime";
                                            name = "Blanche Yundt II";
                                        }}),
                                        add(new PathElement() {{
                                            id = "porro";
                                            kind = "quod";
                                            name = "Kathleen Flatley";
                                        }}),
                                        add(new PathElement() {{
                                            id = "suscipit";
                                            kind = "velit";
                                            name = "Rex Walter";
                                        }}),
                                    }};
                                }};
                                properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                    put("ducimus", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "vel";
                                        booleanValue = false;
                                        doubleValue = 2870.51;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 8225.6;
                                            longitude = 7065.75;
                                        }};
                                        integerValue = "cum";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "commodi";
                                                projectId = "in";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "reiciendis";
                                                    kind = "assumenda";
                                                    name = "Miss Sophie Jacobi";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "in";
                                                    kind = "exercitationem";
                                                    name = "Carroll Gerhold";
                                                }}),
                                            }};
                                        }};
                                        meaning = 968972;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "quidem";
                                        timestampValue = "saepe";
                                    }});
                                    put("necessitatibus", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "sunt";
                                        booleanValue = false;
                                        doubleValue = 9920.12;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 2415.45;
                                            longitude = 2494.2;
                                        }};
                                        integerValue = "amet";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "beatae";
                                                projectId = "dignissimos";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "debitis";
                                                    kind = "consectetur";
                                                    name = "Dr. Maryann Howe";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "vitae";
                                                    kind = "accusamus";
                                                    name = "Ricky Cole";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "voluptas";
                                                    kind = "minima";
                                                    name = "Wilbur Ferry";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "blanditiis";
                                                    kind = "in";
                                                    name = "Suzanne Torphy";
                                                }}),
                                            }};
                                        }};
                                        meaning = 237742;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "cum";
                                        timestampValue = "blanditiis";
                                    }});
                                }};
                            }};
                            update = new Entity() {{
                                key = new Key() {{
                                    partitionId = new PartitionId() {{
                                        namespaceId = "quas";
                                        projectId = "hic";
                                    }};
                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                        add(new PathElement() {{
                                            id = "culpa";
                                            kind = "corrupti";
                                            name = "Jimmie Weimann";
                                        }}),
                                    }};
                                }};
                                properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                    put("rerum", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "reiciendis";
                                        booleanValue = false;
                                        doubleValue = 1318.52;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 9944.01;
                                            longitude = 7079.18;
                                        }};
                                        integerValue = "voluptate";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "expedita";
                                                projectId = "ab";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "dolore";
                                                    kind = "laborum";
                                                    name = "Pearl Johnson";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "voluptas";
                                                    kind = "unde";
                                                    name = "Laurie Willms DVM";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "perferendis";
                                                    kind = "corrupti";
                                                    name = "Troy Cormier";
                                                }}),
                                            }};
                                        }};
                                        meaning = 896762;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "ipsum";
                                        timestampValue = "ea";
                                    }});
                                }};
                            }};
                            updateTime = "occaecati";
                            upsert = new Entity() {{
                                key = new Key() {{
                                    partitionId = new PartitionId() {{
                                        namespaceId = "quos";
                                        projectId = "voluptatibus";
                                    }};
                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                        add(new PathElement() {{
                                            id = "tempora";
                                            kind = "voluptate";
                                            name = "Marc Balistreri";
                                        }}),
                                        add(new PathElement() {{
                                            id = "praesentium";
                                            kind = "facilis";
                                            name = "Amber Hintz";
                                        }}),
                                    }};
                                }};
                                properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                    put("nobis", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "veniam";
                                        booleanValue = false;
                                        doubleValue = 3295.43;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 9241.59;
                                            longitude = 9671.22;
                                        }};
                                        integerValue = "nulla";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "magni";
                                                projectId = "aperiam";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "numquam";
                                                    kind = "veniam";
                                                    name = "Cecelia Braun";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "praesentium";
                                                    kind = "cum";
                                                    name = "Lee Lehner";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "expedita";
                                                    kind = "debitis";
                                                    name = "Sonya Heaney";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "corrupti";
                                                    kind = "accusamus";
                                                    name = "Kay Cormier";
                                                }}),
                                            }};
                                        }};
                                        meaning = 30235;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "culpa";
                                        timestampValue = "expedita";
                                    }});
                                }};
                            }};
                        }}),
                    }};
                    transaction = "magnam";
                }};;
                accessToken = "consequatur";
                alt = AltEnum.MEDIA;
                callback = "ipsam";
                fields = "sit";
                key = "voluptatum";
                oauthToken = "quas";
                prettyPrint = false;
                quotaUser = "repudiandae";
                uploadType = "corporis";
                uploadProtocol = "et";
            }};            

            DatastoreProjectsCommitResponse res = sdk.projects.datastoreProjectsCommit(req, new DatastoreProjectsCommitSecurity() {{
                option1 = new DatastoreProjectsCommitSecurityOption1("blanditiis", "ex") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.commitResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastoreProjectsLookup

Looks up entities by key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastoreProjectsLookupRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsLookupResponse;
import org.openapis.openapi.models.operations.DatastoreProjectsLookupSecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsLookupSecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsLookupSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Key;
import org.openapis.openapi.models.shared.LookupRequest;
import org.openapis.openapi.models.shared.PartitionId;
import org.openapis.openapi.models.shared.PathElement;
import org.openapis.openapi.models.shared.ReadOptions;
import org.openapis.openapi.models.shared.ReadOptionsReadConsistencyEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsLookupRequest req = new DatastoreProjectsLookupRequest("sed") {{
                dollarXgafv = XgafvEnum.ONE;
                lookupRequest = new LookupRequest() {{
                    keys = new org.openapis.openapi.models.shared.Key[]{{
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                namespaceId = "nostrum";
                                projectId = "saepe";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "consequatur";
                                    kind = "incidunt";
                                    name = "Mr. Mike Pollich";
                                }}),
                                add(new PathElement() {{
                                    id = "labore";
                                    kind = "quidem";
                                    name = "Cameron Reilly";
                                }}),
                                add(new PathElement() {{
                                    id = "alias";
                                    kind = "amet";
                                    name = "Karl Miller";
                                }}),
                            }};
                        }}),
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                namespaceId = "repellendus";
                                projectId = "delectus";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "perferendis";
                                    kind = "est";
                                    name = "Ron Schulist";
                                }}),
                                add(new PathElement() {{
                                    id = "mollitia";
                                    kind = "veniam";
                                    name = "Ms. Alexandra VonRueden";
                                }}),
                                add(new PathElement() {{
                                    id = "asperiores";
                                    kind = "totam";
                                    name = "Ms. Alison Schoen";
                                }}),
                                add(new PathElement() {{
                                    id = "assumenda";
                                    kind = "ea";
                                    name = "Evan Torphy";
                                }}),
                            }};
                        }}),
                    }};
                    readOptions = new ReadOptions() {{
                        readConsistency = ReadOptionsReadConsistencyEnum.STRONG;
                        readTime = "minima";
                        transaction = "aspernatur";
                    }};;
                }};;
                accessToken = "ex";
                alt = AltEnum.PROTO;
                callback = "corrupti";
                fields = "at";
                key = "error";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "repudiandae";
                uploadProtocol = "atque";
            }};            

            DatastoreProjectsLookupResponse res = sdk.projects.datastoreProjectsLookup(req, new DatastoreProjectsLookupSecurity() {{
                option1 = new DatastoreProjectsLookupSecurityOption1("atque", "sunt") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.lookupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastoreProjectsReserveIds

Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastoreProjectsReserveIdsRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsReserveIdsResponse;
import org.openapis.openapi.models.operations.DatastoreProjectsReserveIdsSecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsReserveIdsSecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsReserveIdsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Key;
import org.openapis.openapi.models.shared.PartitionId;
import org.openapis.openapi.models.shared.PathElement;
import org.openapis.openapi.models.shared.ReserveIdsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsReserveIdsRequest req = new DatastoreProjectsReserveIdsRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                reserveIdsRequest = new ReserveIdsRequest() {{
                    databaseId = "repellendus";
                    keys = new org.openapis.openapi.models.shared.Key[]{{
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                namespaceId = "reiciendis";
                                projectId = "doloremque";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "dicta";
                                    kind = "accusantium";
                                    name = "Bonnie Halvorson";
                                }}),
                                add(new PathElement() {{
                                    id = "a";
                                    kind = "molestias";
                                    name = "Tricia Cronin";
                                }}),
                                add(new PathElement() {{
                                    id = "perspiciatis";
                                    kind = "in";
                                    name = "Tricia McClure";
                                }}),
                                add(new PathElement() {{
                                    id = "id";
                                    kind = "quis";
                                    name = "Isabel Blick";
                                }}),
                            }};
                        }}),
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                namespaceId = "eveniet";
                                projectId = "non";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "doloremque";
                                    kind = "iure";
                                    name = "Lena Beier";
                                }}),
                                add(new PathElement() {{
                                    id = "qui";
                                    kind = "cum";
                                    name = "Kelley Dibbert";
                                }}),
                                add(new PathElement() {{
                                    id = "voluptatum";
                                    kind = "rem";
                                    name = "Mrs. Geraldine Zulauf";
                                }}),
                                add(new PathElement() {{
                                    id = "nihil";
                                    kind = "mollitia";
                                    name = "Linda Wuckert";
                                }}),
                            }};
                        }}),
                    }};
                }};;
                accessToken = "id";
                alt = AltEnum.JSON;
                callback = "dolore";
                fields = "dolorum";
                key = "nesciunt";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "omnis";
                uploadProtocol = "quaerat";
            }};            

            DatastoreProjectsReserveIdsResponse res = sdk.projects.datastoreProjectsReserveIds(req, new DatastoreProjectsReserveIdsSecurity() {{
                option1 = new DatastoreProjectsReserveIdsSecurityOption1("molestiae", "ex") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.reserveIdsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastoreProjectsRollback

Rolls back a transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastoreProjectsRollbackRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsRollbackResponse;
import org.openapis.openapi.models.operations.DatastoreProjectsRollbackSecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsRollbackSecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsRollbackSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RollbackRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsRollbackRequest req = new DatastoreProjectsRollbackRequest("ut") {{
                dollarXgafv = XgafvEnum.TWO;
                rollbackRequest = new RollbackRequest() {{
                    transaction = "adipisci";
                }};;
                accessToken = "debitis";
                alt = AltEnum.MEDIA;
                callback = "eum";
                fields = "nemo";
                key = "recusandae";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "quis";
                uploadProtocol = "eum";
            }};            

            DatastoreProjectsRollbackResponse res = sdk.projects.datastoreProjectsRollback(req, new DatastoreProjectsRollbackSecurity() {{
                option1 = new DatastoreProjectsRollbackSecurityOption1("reiciendis", "provident") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.rollbackResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastoreProjectsRunAggregationQuery

Runs an aggregation query.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastoreProjectsRunAggregationQueryRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsRunAggregationQueryResponse;
import org.openapis.openapi.models.operations.DatastoreProjectsRunAggregationQuerySecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsRunAggregationQuerySecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsRunAggregationQuerySecurityOption2;
import org.openapis.openapi.models.shared.Aggregation;
import org.openapis.openapi.models.shared.AggregationQuery;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ArrayValue;
import org.openapis.openapi.models.shared.CompositeFilter;
import org.openapis.openapi.models.shared.CompositeFilterOpEnum;
import org.openapis.openapi.models.shared.Count;
import org.openapis.openapi.models.shared.Entity;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.GqlQuery;
import org.openapis.openapi.models.shared.GqlQueryParameter;
import org.openapis.openapi.models.shared.Key;
import org.openapis.openapi.models.shared.KindExpression;
import org.openapis.openapi.models.shared.LatLng;
import org.openapis.openapi.models.shared.PartitionId;
import org.openapis.openapi.models.shared.PathElement;
import org.openapis.openapi.models.shared.Projection;
import org.openapis.openapi.models.shared.PropertyFilter;
import org.openapis.openapi.models.shared.PropertyFilterOpEnum;
import org.openapis.openapi.models.shared.PropertyOrder;
import org.openapis.openapi.models.shared.PropertyOrderDirectionEnum;
import org.openapis.openapi.models.shared.PropertyReference;
import org.openapis.openapi.models.shared.Query;
import org.openapis.openapi.models.shared.ReadOptions;
import org.openapis.openapi.models.shared.ReadOptionsReadConsistencyEnum;
import org.openapis.openapi.models.shared.RunAggregationQueryRequest;
import org.openapis.openapi.models.shared.Value;
import org.openapis.openapi.models.shared.ValueNullValueEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsRunAggregationQueryRequest req = new DatastoreProjectsRunAggregationQueryRequest("aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                runAggregationQueryRequest = new RunAggregationQueryRequest() {{
                    aggregationQuery = new AggregationQuery() {{
                        aggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                            add(new Aggregation() {{
                                alias = "animi";
                                count = new Count() {{
                                    upTo = "nostrum";
                                }};
                            }}),
                        }};
                        nestedQuery = new Query() {{
                            distinctOn = new org.openapis.openapi.models.shared.PropertyReference[]{{
                                add(new PropertyReference() {{
                                    name = "Rufus Okuneva";
                                }}),
                                add(new PropertyReference() {{
                                    name = "Kristie Wyman";
                                }}),
                                add(new PropertyReference() {{
                                    name = "Darin Nienow";
                                }}),
                            }};
                            endCursor = "modi";
                            filter = new Filter() {{
                                compositeFilter = new CompositeFilter() {{
                                    filters = new org.openapis.openapi.models.shared.Filter[]{{
                                        add(new Filter() {{}}),
                                        add(new Filter() {{}}),
                                        add(new Filter() {{}}),
                                        add(new Filter() {{}}),
                                    }};
                                    op = CompositeFilterOpEnum.AND;
                                }};;
                                propertyFilter = new PropertyFilter() {{
                                    op = PropertyFilterOpEnum.HAS_ANCESTOR;
                                    property = new PropertyReference() {{
                                        name = "Noel Bruen";
                                    }};;
                                    value = new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};;
                                        blobValue = "inventore";
                                        booleanValue = false;
                                        doubleValue = 1476.85;
                                        entityValue = new Entity() {{
                                            key = new Key() {{
                                                partitionId = new PartitionId() {{
                                                    namespaceId = "cumque";
                                                    projectId = "quae";
                                                }};;
                                                path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                    add(new PathElement() {{
                                                        id = "velit";
                                                        kind = "aspernatur";
                                                        name = "Monica Lebsack";
                                                    }}),
                                                }};
                                            }};;
                                            properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                                put("sapiente", new Value() {{
                                                    arrayValue = new ArrayValue() {{
                                                        values = new org.openapis.openapi.models.shared.Value[]{{
                                                            add(new Value() {{}}),
                                                            add(new Value() {{}}),
                                                        }};
                                                    }};
                                                    blobValue = "dicta";
                                                    booleanValue = false;
                                                    doubleValue = 3251.18;
                                                    entityValue = new Entity() {{}};
                                                    excludeFromIndexes = false;
                                                    geoPointValue = new LatLng() {{
                                                        latitude = 1070.04;
                                                        longitude = 5834.04;
                                                    }};
                                                    integerValue = "provident";
                                                    keyValue = new Key() {{
                                                        partitionId = new PartitionId() {{
                                                            namespaceId = "earum";
                                                            projectId = "soluta";
                                                        }};
                                                        path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                            add(new PathElement() {{
                                                                id = "illum";
                                                                kind = "eaque";
                                                                name = "Freddie Wyman";
                                                            }}),
                                                            add(new PathElement() {{
                                                                id = "porro";
                                                                kind = "suscipit";
                                                                name = "Denise Runolfsdottir";
                                                            }}),
                                                            add(new PathElement() {{
                                                                id = "animi";
                                                                kind = "necessitatibus";
                                                                name = "Ms. William Boyle";
                                                            }}),
                                                            add(new PathElement() {{
                                                                id = "occaecati";
                                                                kind = "suscipit";
                                                                name = "Joyce Cummings";
                                                            }}),
                                                        }};
                                                    }};
                                                    meaning = 896582;
                                                    nullValue = ValueNullValueEnum.NULL_VALUE;
                                                    stringValue = "ipsa";
                                                    timestampValue = "tempora";
                                                }});
                                            }};
                                        }};;
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 4706.21;
                                            longitude = 4731.9;
                                        }};;
                                        integerValue = "dicta";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "iusto";
                                                projectId = "esse";
                                            }};;
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "maiores";
                                                    kind = "reiciendis";
                                                    name = "Mr. Diane Stiedemann";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "tempora";
                                                    kind = "esse";
                                                    name = "Miss Kim Jacobs II";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "fugiat";
                                                    kind = "expedita";
                                                    name = "Brandi Homenick III";
                                                }}),
                                            }};
                                        }};;
                                        meaning = 374753;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "iste";
                                        timestampValue = "id";
                                    }};;
                                }};;
                            }};;
                            kind = new org.openapis.openapi.models.shared.KindExpression[]{{
                                add(new KindExpression() {{
                                    name = "Woodrow Volkman";
                                }}),
                            }};
                            limit = 726343;
                            offset = 324083;
                            order = new org.openapis.openapi.models.shared.PropertyOrder[]{{
                                add(new PropertyOrder() {{
                                    direction = PropertyOrderDirectionEnum.DIRECTION_UNSPECIFIED;
                                    property = new PropertyReference() {{
                                        name = "Estelle Jakubowski";
                                    }};
                                }}),
                                add(new PropertyOrder() {{
                                    direction = PropertyOrderDirectionEnum.DIRECTION_UNSPECIFIED;
                                    property = new PropertyReference() {{
                                        name = "Lula Bartell";
                                    }};
                                }}),
                                add(new PropertyOrder() {{
                                    direction = PropertyOrderDirectionEnum.ASCENDING;
                                    property = new PropertyReference() {{
                                        name = "Miss Nora Moen";
                                    }};
                                }}),
                            }};
                            projection = new org.openapis.openapi.models.shared.Projection[]{{
                                add(new Projection() {{
                                    property = new PropertyReference() {{
                                        name = "Miss Miranda Towne";
                                    }};
                                }}),
                                add(new Projection() {{
                                    property = new PropertyReference() {{
                                        name = "Donald Abbott";
                                    }};
                                }}),
                                add(new Projection() {{
                                    property = new PropertyReference() {{
                                        name = "Miranda Ledner";
                                    }};
                                }}),
                            }};
                            startCursor = "asperiores";
                        }};;
                    }};;
                    gqlQuery = new GqlQuery() {{
                        allowLiterals = false;
                        namedBindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.GqlQueryParameter>() {{
                            put("ullam", new GqlQueryParameter() {{
                                cursor = "perferendis";
                                value = new Value() {{
                                    arrayValue = new ArrayValue() {{
                                        values = new org.openapis.openapi.models.shared.Value[]{{
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                        }};
                                    }};
                                    blobValue = "totam";
                                    booleanValue = false;
                                    doubleValue = 7706.75;
                                    entityValue = new Entity() {{
                                        key = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "quibusdam";
                                                projectId = "nam";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "culpa";
                                                    kind = "dolor";
                                                    name = "Mrs. Stephanie Lind";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "consequatur";
                                                    kind = "architecto";
                                                    name = "Ms. Pauline Considine I";
                                                }}),
                                            }};
                                        }};
                                        properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                            put("ipsam", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "ipsa";
                                                booleanValue = false;
                                                doubleValue = 5596.82;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 9111.98;
                                                    longitude = 7734.56;
                                                }};
                                                integerValue = "officiis";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "esse";
                                                        projectId = "necessitatibus";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "veniam";
                                                            kind = "nesciunt";
                                                            name = "Andre Kautzer";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 349440;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "ab";
                                                timestampValue = "porro";
                                            }});
                                            put("autem", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "laboriosam";
                                                booleanValue = false;
                                                doubleValue = 9272.12;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 1603.93;
                                                    longitude = 289.52;
                                                }};
                                                integerValue = "exercitationem";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "necessitatibus";
                                                        projectId = "quasi";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "at";
                                                            kind = "vero";
                                                            name = "Kerry Dickinson";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "optio";
                                                            kind = "occaecati";
                                                            name = "Allison Kuvalis";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 254025;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "nemo";
                                                timestampValue = "quos";
                                            }});
                                            put("eius", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "ducimus";
                                                booleanValue = false;
                                                doubleValue = 2005.16;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 6817.4;
                                                    longitude = 5140.54;
                                                }};
                                                integerValue = "incidunt";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "quasi";
                                                        projectId = "rem";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "dicta";
                                                            kind = "nisi";
                                                            name = "Edith Beahan";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "soluta";
                                                            kind = "alias";
                                                            name = "Craig Mayert";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "inventore";
                                                            kind = "fuga";
                                                            name = "Jan Reichel";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "minima";
                                                            kind = "praesentium";
                                                            name = "Oscar Smith";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 930819;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "commodi";
                                                timestampValue = "totam";
                                            }});
                                            put("earum", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "nam";
                                                booleanValue = false;
                                                doubleValue = 8773.99;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 329.01;
                                                    longitude = 3719.19;
                                                }};
                                                integerValue = "vel";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "alias";
                                                        projectId = "quasi";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "maiores";
                                                            kind = "enim";
                                                            name = "Orville Nolan";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 444587;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "est";
                                                timestampValue = "quis";
                                            }});
                                        }};
                                    }};
                                    excludeFromIndexes = false;
                                    geoPointValue = new LatLng() {{
                                        latitude = 5718.44;
                                        longitude = 8806.79;
                                    }};
                                    integerValue = "impedit";
                                    keyValue = new Key() {{
                                        partitionId = new PartitionId() {{
                                            namespaceId = "hic";
                                            projectId = "necessitatibus";
                                        }};
                                        path = new org.openapis.openapi.models.shared.PathElement[]{{
                                            add(new PathElement() {{
                                                id = "ex";
                                                kind = "voluptas";
                                                name = "Van Bergnaum";
                                            }}),
                                            add(new PathElement() {{
                                                id = "laborum";
                                                kind = "consectetur";
                                                name = "Leah Emmerich";
                                            }}),
                                            add(new PathElement() {{
                                                id = "soluta";
                                                kind = "repudiandae";
                                                name = "Theodore Kub";
                                            }}),
                                            add(new PathElement() {{
                                                id = "dignissimos";
                                                kind = "neque";
                                                name = "Casey Sporer";
                                            }}),
                                        }};
                                    }};
                                    meaning = 974990;
                                    nullValue = ValueNullValueEnum.NULL_VALUE;
                                    stringValue = "vel";
                                    timestampValue = "magnam";
                                }};
                            }});
                        }};
                        positionalBindings = new org.openapis.openapi.models.shared.GqlQueryParameter[]{{
                            add(new GqlQueryParameter() {{
                                cursor = "inventore";
                                value = new Value() {{
                                    arrayValue = new ArrayValue() {{
                                        values = new org.openapis.openapi.models.shared.Value[]{{
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                        }};
                                    }};
                                    blobValue = "libero";
                                    booleanValue = false;
                                    doubleValue = 1024.13;
                                    entityValue = new Entity() {{
                                        key = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "voluptatibus";
                                                projectId = "quia";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "aliquam";
                                                    kind = "velit";
                                                    name = "Ruth Kassulke PhD";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "excepturi";
                                                    kind = "eum";
                                                    name = "Leslie Metz DDS";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "voluptatibus";
                                                    kind = "iste";
                                                    name = "John Huel";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "laborum";
                                                    kind = "non";
                                                    name = "Mr. Glenda Bailey";
                                                }}),
                                            }};
                                        }};
                                        properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                            put("ea", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "voluptas";
                                                booleanValue = false;
                                                doubleValue = 7051.48;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 8093.65;
                                                    longitude = 5960.65;
                                                }};
                                                integerValue = "expedita";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "deleniti";
                                                        projectId = "a";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "ullam";
                                                            kind = "unde";
                                                            name = "Lyle Russel";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "est";
                                                            kind = "error";
                                                            name = "Lucille Bogan";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 112427;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "inventore";
                                                timestampValue = "dolorem";
                                            }});
                                            put("ad", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "iste";
                                                booleanValue = false;
                                                doubleValue = 4030.26;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 3676.26;
                                                    longitude = 7452.33;
                                                }};
                                                integerValue = "libero";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "rem";
                                                        projectId = "dolorum";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "fugit";
                                                            kind = "alias";
                                                            name = "Mrs. Gina Bergnaum";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "exercitationem";
                                                            kind = "itaque";
                                                            name = "Tracy Mills";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 802894;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "quia";
                                                timestampValue = "quia";
                                            }});
                                            put("nostrum", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "libero";
                                                booleanValue = false;
                                                doubleValue = 1156.61;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 6633.18;
                                                    longitude = 7278.88;
                                                }};
                                                integerValue = "fugiat";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "officia";
                                                        projectId = "quos";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "sit";
                                                            kind = "iusto";
                                                            name = "Ms. Tasha Block";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "eligendi";
                                                            kind = "distinctio";
                                                            name = "Ella Koch";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "beatae";
                                                            kind = "est";
                                                            name = "Johnnie Kozey";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "necessitatibus";
                                                            kind = "tempore";
                                                            name = "Angel Jones";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 515638;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "corporis";
                                                timestampValue = "officiis";
                                            }});
                                            put("voluptatibus", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "at";
                                                booleanValue = false;
                                                doubleValue = 51.52;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 1566.53;
                                                    longitude = 6941.58;
                                                }};
                                                integerValue = "fuga";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "repudiandae";
                                                        projectId = "accusantium";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "officiis";
                                                            kind = "eos";
                                                            name = "Tyrone Langosh II";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "error";
                                                            kind = "earum";
                                                            name = "Delia Murray";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "quis";
                                                            kind = "beatae";
                                                            name = "Clinton Windler";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 253625;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "numquam";
                                                timestampValue = "nesciunt";
                                            }});
                                        }};
                                    }};
                                    excludeFromIndexes = false;
                                    geoPointValue = new LatLng() {{
                                        latitude = 8735.57;
                                        longitude = 6378.56;
                                    }};
                                    integerValue = "dignissimos";
                                    keyValue = new Key() {{
                                        partitionId = new PartitionId() {{
                                            namespaceId = "optio";
                                            projectId = "necessitatibus";
                                        }};
                                        path = new org.openapis.openapi.models.shared.PathElement[]{{
                                            add(new PathElement() {{
                                                id = "qui";
                                                kind = "expedita";
                                                name = "Terrance Hansen";
                                            }}),
                                            add(new PathElement() {{
                                                id = "neque";
                                                kind = "in";
                                                name = "Andre Gleichner";
                                            }}),
                                        }};
                                    }};
                                    meaning = 914971;
                                    nullValue = ValueNullValueEnum.NULL_VALUE;
                                    stringValue = "maiores";
                                    timestampValue = "tempore";
                                }};
                            }}),
                            add(new GqlQueryParameter() {{
                                cursor = "aperiam";
                                value = new Value() {{
                                    arrayValue = new ArrayValue() {{
                                        values = new org.openapis.openapi.models.shared.Value[]{{
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                        }};
                                    }};
                                    blobValue = "ratione";
                                    booleanValue = false;
                                    doubleValue = 2899.13;
                                    entityValue = new Entity() {{
                                        key = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "totam";
                                                projectId = "occaecati";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "quo";
                                                    kind = "velit";
                                                    name = "Grant Heathcote";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "delectus";
                                                    kind = "tempore";
                                                    name = "Fred Zieme";
                                                }}),
                                            }};
                                        }};
                                        properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                            put("aperiam", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "minima";
                                                booleanValue = false;
                                                doubleValue = 4483.69;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 4969.15;
                                                    longitude = 5678.46;
                                                }};
                                                integerValue = "dolores";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "error";
                                                        projectId = "veritatis";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "voluptate";
                                                            kind = "pariatur";
                                                            name = "Dana Ruecker";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "commodi";
                                                            kind = "officiis";
                                                            name = "Rickey Heidenreich";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 264619;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "ipsa";
                                                timestampValue = "sint";
                                            }});
                                            put("vero", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "repudiandae";
                                                booleanValue = false;
                                                doubleValue = 7412.32;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 1201.2;
                                                    longitude = 9369.28;
                                                }};
                                                integerValue = "veniam";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "animi";
                                                        projectId = "dolores";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "dicta";
                                                            kind = "consequuntur";
                                                            name = "Robin Bednar";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "veritatis";
                                                            kind = "quasi";
                                                            name = "Freda Renner";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "nemo";
                                                            kind = "aliquam";
                                                            name = "Nettie Rosenbaum";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 944950;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "animi";
                                                timestampValue = "quas";
                                            }});
                                        }};
                                    }};
                                    excludeFromIndexes = false;
                                    geoPointValue = new LatLng() {{
                                        latitude = 5173.26;
                                        longitude = 5646.67;
                                    }};
                                    integerValue = "odio";
                                    keyValue = new Key() {{
                                        partitionId = new PartitionId() {{
                                            namespaceId = "eaque";
                                            projectId = "saepe";
                                        }};
                                        path = new org.openapis.openapi.models.shared.PathElement[]{{
                                            add(new PathElement() {{
                                                id = "quos";
                                                kind = "iste";
                                                name = "Randolph Reinger DVM";
                                            }}),
                                        }};
                                    }};
                                    meaning = 773110;
                                    nullValue = ValueNullValueEnum.NULL_VALUE;
                                    stringValue = "cum";
                                    timestampValue = "ipsum";
                                }};
                            }}),
                            add(new GqlQueryParameter() {{
                                cursor = "adipisci";
                                value = new Value() {{
                                    arrayValue = new ArrayValue() {{
                                        values = new org.openapis.openapi.models.shared.Value[]{{
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                        }};
                                    }};
                                    blobValue = "deserunt";
                                    booleanValue = false;
                                    doubleValue = 429.24;
                                    entityValue = new Entity() {{
                                        key = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "quis";
                                                projectId = "veniam";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "architecto";
                                                    kind = "cupiditate";
                                                    name = "Sheri Schuppe";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "itaque";
                                                    kind = "sed";
                                                    name = "Jerome Cruickshank";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "odit";
                                                    kind = "pariatur";
                                                    name = "Yvonne Bernhard";
                                                }}),
                                            }};
                                        }};
                                        properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                            put("nisi", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "quaerat";
                                                booleanValue = false;
                                                doubleValue = 5037.48;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 7186.27;
                                                    longitude = 3924.3;
                                                }};
                                                integerValue = "quis";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "nisi";
                                                        projectId = "libero";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "facere";
                                                            kind = "facilis";
                                                            name = "Erin Wiza";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "debitis";
                                                            kind = "labore";
                                                            name = "Craig Kiehn";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "iusto";
                                                            kind = "est";
                                                            name = "Delbert Stehr";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "ducimus";
                                                            kind = "dolor";
                                                            name = "Ms. Sabrina Schaden";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 854115;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "ad";
                                                timestampValue = "aspernatur";
                                            }});
                                            put("enim", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "iusto";
                                                booleanValue = false;
                                                doubleValue = 4912.01;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 7298.28;
                                                    longitude = 723.5;
                                                }};
                                                integerValue = "ab";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "incidunt";
                                                        projectId = "accusamus";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "tempore";
                                                            kind = "veniam";
                                                            name = "Johanna Weimann";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "nemo";
                                                            kind = "repellat";
                                                            name = "Jimmy Konopelski II";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "assumenda";
                                                            kind = "aliquam";
                                                            name = "Eduardo Larkin DDS";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "aspernatur";
                                                            kind = "nam";
                                                            name = "Willard McLaughlin";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 492361;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "corporis";
                                                timestampValue = "vero";
                                            }});
                                            put("similique", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "iure";
                                                booleanValue = false;
                                                doubleValue = 2138.35;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 4138.01;
                                                    longitude = 7712.26;
                                                }};
                                                integerValue = "commodi";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "aut";
                                                        projectId = "voluptatem";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "quae";
                                                            kind = "amet";
                                                            name = "Hugh Powlowski";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "quasi";
                                                            kind = "dicta";
                                                            name = "Ronald Wehner";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 587967;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "dolorum";
                                                timestampValue = "necessitatibus";
                                            }});
                                        }};
                                    }};
                                    excludeFromIndexes = false;
                                    geoPointValue = new LatLng() {{
                                        latitude = 5928.8;
                                        longitude = 9202.72;
                                    }};
                                    integerValue = "consequatur";
                                    keyValue = new Key() {{
                                        partitionId = new PartitionId() {{
                                            namespaceId = "nemo";
                                            projectId = "molestiae";
                                        }};
                                        path = new org.openapis.openapi.models.shared.PathElement[]{{
                                            add(new PathElement() {{
                                                id = "facilis";
                                                kind = "corrupti";
                                                name = "Bobbie Thompson";
                                            }}),
                                            add(new PathElement() {{
                                                id = "dicta";
                                                kind = "voluptatem";
                                                name = "Cindy Casper";
                                            }}),
                                            add(new PathElement() {{
                                                id = "occaecati";
                                                kind = "atque";
                                                name = "Lynette Green";
                                            }}),
                                            add(new PathElement() {{
                                                id = "voluptatem";
                                                kind = "perferendis";
                                                name = "Nathaniel Beahan";
                                            }}),
                                        }};
                                    }};
                                    meaning = 243678;
                                    nullValue = ValueNullValueEnum.NULL_VALUE;
                                    stringValue = "porro";
                                    timestampValue = "provident";
                                }};
                            }}),
                            add(new GqlQueryParameter() {{
                                cursor = "consectetur";
                                value = new Value() {{
                                    arrayValue = new ArrayValue() {{
                                        values = new org.openapis.openapi.models.shared.Value[]{{
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                        }};
                                    }};
                                    blobValue = "dignissimos";
                                    booleanValue = false;
                                    doubleValue = 2358.34;
                                    entityValue = new Entity() {{
                                        key = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "soluta";
                                                projectId = "natus";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "officia";
                                                    kind = "amet";
                                                    name = "Bruce Satterfield";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "laborum";
                                                    kind = "dignissimos";
                                                    name = "Clarence Feeney Sr.";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "exercitationem";
                                                    kind = "nihil";
                                                    name = "Virginia Bins";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "delectus";
                                                    kind = "non";
                                                    name = "Jared Heller";
                                                }}),
                                            }};
                                        }};
                                        properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                            put("modi", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "explicabo";
                                                booleanValue = false;
                                                doubleValue = 8798.57;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 5258.09;
                                                    longitude = 440.16;
                                                }};
                                                integerValue = "odit";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "deleniti";
                                                        projectId = "enim";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "similique";
                                                            kind = "minima";
                                                            name = "Oscar Bailey";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "nesciunt";
                                                            kind = "mollitia";
                                                            name = "Hope Hegmann";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 969206;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "ab";
                                                timestampValue = "modi";
                                            }});
                                            put("aut", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "eveniet";
                                                booleanValue = false;
                                                doubleValue = 4837.53;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 4137.58;
                                                    longitude = 2561.14;
                                                }};
                                                integerValue = "dolorum";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "possimus";
                                                        projectId = "voluptate";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "nesciunt";
                                                            kind = "quaerat";
                                                            name = "Sylvester Casper";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 558051;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "et";
                                                timestampValue = "facilis";
                                            }});
                                            put("amet", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "fuga";
                                                booleanValue = false;
                                                doubleValue = 53.1;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 5264.13;
                                                    longitude = 113.55;
                                                }};
                                                integerValue = "quos";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "laudantium";
                                                        projectId = "repellendus";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "quae";
                                                            kind = "eaque";
                                                            name = "Toby O'Hara";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 152027;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "voluptatem";
                                                timestampValue = "alias";
                                            }});
                                            put("eveniet", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "voluptatem";
                                                booleanValue = false;
                                                doubleValue = 2783.25;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 1854.48;
                                                    longitude = 1858.97;
                                                }};
                                                integerValue = "necessitatibus";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "harum";
                                                        projectId = "explicabo";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "aliquid";
                                                            kind = "modi";
                                                            name = "Courtney Maggio";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 520678;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "sequi";
                                                timestampValue = "aliquid";
                                            }});
                                        }};
                                    }};
                                    excludeFromIndexes = false;
                                    geoPointValue = new LatLng() {{
                                        latitude = 4120.52;
                                        longitude = 7745.01;
                                    }};
                                    integerValue = "ducimus";
                                    keyValue = new Key() {{
                                        partitionId = new PartitionId() {{
                                            namespaceId = "odit";
                                            projectId = "velit";
                                        }};
                                        path = new org.openapis.openapi.models.shared.PathElement[]{{
                                            add(new PathElement() {{
                                                id = "repellat";
                                                kind = "nulla";
                                                name = "Mrs. Luther Torp";
                                            }}),
                                            add(new PathElement() {{
                                                id = "recusandae";
                                                kind = "voluptates";
                                                name = "Hilda Crona";
                                            }}),
                                            add(new PathElement() {{
                                                id = "dicta";
                                                kind = "voluptatibus";
                                                name = "Mr. Scott Torp";
                                            }}),
                                            add(new PathElement() {{
                                                id = "optio";
                                                kind = "rem";
                                                name = "Flora Wisoky";
                                            }}),
                                        }};
                                    }};
                                    meaning = 117819;
                                    nullValue = ValueNullValueEnum.NULL_VALUE;
                                    stringValue = "quos";
                                    timestampValue = "ullam";
                                }};
                            }}),
                        }};
                        queryString = "dolore";
                    }};;
                    partitionId = new PartitionId() {{
                        namespaceId = "modi";
                        projectId = "itaque";
                    }};;
                    readOptions = new ReadOptions() {{
                        readConsistency = ReadOptionsReadConsistencyEnum.EVENTUAL;
                        readTime = "modi";
                        transaction = "consequuntur";
                    }};;
                }};;
                accessToken = "assumenda";
                alt = AltEnum.PROTO;
                callback = "doloribus";
                fields = "impedit";
                key = "porro";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "reiciendis";
                uploadProtocol = "ab";
            }};            

            DatastoreProjectsRunAggregationQueryResponse res = sdk.projects.datastoreProjectsRunAggregationQuery(req, new DatastoreProjectsRunAggregationQuerySecurity() {{
                option1 = new DatastoreProjectsRunAggregationQuerySecurityOption1("sint", "nihil") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.runAggregationQueryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastoreProjectsRunQuery

Queries for entities.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastoreProjectsRunQueryRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsRunQueryResponse;
import org.openapis.openapi.models.operations.DatastoreProjectsRunQuerySecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsRunQuerySecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsRunQuerySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ArrayValue;
import org.openapis.openapi.models.shared.CompositeFilter;
import org.openapis.openapi.models.shared.CompositeFilterOpEnum;
import org.openapis.openapi.models.shared.Entity;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.GqlQuery;
import org.openapis.openapi.models.shared.GqlQueryParameter;
import org.openapis.openapi.models.shared.Key;
import org.openapis.openapi.models.shared.KindExpression;
import org.openapis.openapi.models.shared.LatLng;
import org.openapis.openapi.models.shared.PartitionId;
import org.openapis.openapi.models.shared.PathElement;
import org.openapis.openapi.models.shared.Projection;
import org.openapis.openapi.models.shared.PropertyFilter;
import org.openapis.openapi.models.shared.PropertyFilterOpEnum;
import org.openapis.openapi.models.shared.PropertyOrder;
import org.openapis.openapi.models.shared.PropertyOrderDirectionEnum;
import org.openapis.openapi.models.shared.PropertyReference;
import org.openapis.openapi.models.shared.Query;
import org.openapis.openapi.models.shared.ReadOptions;
import org.openapis.openapi.models.shared.ReadOptionsReadConsistencyEnum;
import org.openapis.openapi.models.shared.RunQueryRequest;
import org.openapis.openapi.models.shared.Value;
import org.openapis.openapi.models.shared.ValueNullValueEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsRunQueryRequest req = new DatastoreProjectsRunQueryRequest("esse") {{
                dollarXgafv = XgafvEnum.ONE;
                runQueryRequest = new RunQueryRequest() {{
                    gqlQuery = new GqlQuery() {{
                        allowLiterals = false;
                        namedBindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.GqlQueryParameter>() {{
                            put("nesciunt", new GqlQueryParameter() {{
                                cursor = "debitis";
                                value = new Value() {{
                                    arrayValue = new ArrayValue() {{
                                        values = new org.openapis.openapi.models.shared.Value[]{{
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                        }};
                                    }};
                                    blobValue = "neque";
                                    booleanValue = false;
                                    doubleValue = 3577.58;
                                    entityValue = new Entity() {{
                                        key = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "voluptas";
                                                projectId = "consequuntur";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "reprehenderit";
                                                    kind = "distinctio";
                                                    name = "Angela Lebsack II";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "saepe";
                                                    kind = "neque";
                                                    name = "Tom Lueilwitz";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "est";
                                                    kind = "delectus";
                                                    name = "Gloria Douglas DVM";
                                                }}),
                                            }};
                                        }};
                                        properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                            put("doloribus", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "unde";
                                                booleanValue = false;
                                                doubleValue = 2754.25;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 1280.21;
                                                    longitude = 3684.91;
                                                }};
                                                integerValue = "cupiditate";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "optio";
                                                        projectId = "alias";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "nesciunt";
                                                            kind = "commodi";
                                                            name = "Bobby Harris";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "sint";
                                                            kind = "ut";
                                                            name = "Essie Ferry";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "minima";
                                                            kind = "ex";
                                                            name = "Andrew Brekke";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 786954;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "dolor";
                                                timestampValue = "ducimus";
                                            }});
                                            put("fuga", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "architecto";
                                                booleanValue = false;
                                                doubleValue = 1814.76;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 3970.26;
                                                    longitude = 1662.89;
                                                }};
                                                integerValue = "incidunt";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "adipisci";
                                                        projectId = "praesentium";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "exercitationem";
                                                            kind = "expedita";
                                                            name = "Rodolfo Bailey";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 159393;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "amet";
                                                timestampValue = "deserunt";
                                            }});
                                        }};
                                    }};
                                    excludeFromIndexes = false;
                                    geoPointValue = new LatLng() {{
                                        latitude = 2687.09;
                                        longitude = 3328.31;
                                    }};
                                    integerValue = "quod";
                                    keyValue = new Key() {{
                                        partitionId = new PartitionId() {{
                                            namespaceId = "itaque";
                                            projectId = "a";
                                        }};
                                        path = new org.openapis.openapi.models.shared.PathElement[]{{
                                            add(new PathElement() {{
                                                id = "enim";
                                                kind = "doloribus";
                                                name = "Miss Frankie Braun DDS";
                                            }}),
                                            add(new PathElement() {{
                                                id = "necessitatibus";
                                                kind = "quia";
                                                name = "Kristin Mertz";
                                            }}),
                                            add(new PathElement() {{
                                                id = "architecto";
                                                kind = "accusantium";
                                                name = "Carolyn McLaughlin";
                                            }}),
                                            add(new PathElement() {{
                                                id = "quibusdam";
                                                kind = "quod";
                                                name = "Delia Franecki";
                                            }}),
                                        }};
                                    }};
                                    meaning = 388404;
                                    nullValue = ValueNullValueEnum.NULL_VALUE;
                                    stringValue = "sed";
                                    timestampValue = "odio";
                                }};
                            }});
                            put("natus", new GqlQueryParameter() {{
                                cursor = "provident";
                                value = new Value() {{
                                    arrayValue = new ArrayValue() {{
                                        values = new org.openapis.openapi.models.shared.Value[]{{
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                        }};
                                    }};
                                    blobValue = "doloribus";
                                    booleanValue = false;
                                    doubleValue = 7039.66;
                                    entityValue = new Entity() {{
                                        key = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "quidem";
                                                projectId = "itaque";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "unde";
                                                    kind = "modi";
                                                    name = "Irvin Rippin";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "nam";
                                                    kind = "incidunt";
                                                    name = "Israel O'Reilly";
                                                }}),
                                            }};
                                        }};
                                        properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                            put("nesciunt", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "nemo";
                                                booleanValue = false;
                                                doubleValue = 8487.22;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 7068.72;
                                                    longitude = 2476.18;
                                                }};
                                                integerValue = "mollitia";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "assumenda";
                                                        projectId = "recusandae";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "pariatur";
                                                            kind = "ad";
                                                            name = "Pablo Veum";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "maxime";
                                                            kind = "ipsam";
                                                            name = "Yolanda O'Connell";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "est";
                                                            kind = "occaecati";
                                                            name = "Roxanne Aufderhar";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 301309;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "quaerat";
                                                timestampValue = "eligendi";
                                            }});
                                            put("hic", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "officiis";
                                                booleanValue = false;
                                                doubleValue = 6036.5;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 8603.11;
                                                    longitude = 6213.93;
                                                }};
                                                integerValue = "mollitia";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "magnam";
                                                        projectId = "nostrum";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "corrupti";
                                                            kind = "fuga";
                                                            name = "Edmund Boyle";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "laboriosam";
                                                            kind = "doloremque";
                                                            name = "Ernestine Turcotte Jr.";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 102390;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "similique";
                                                timestampValue = "porro";
                                            }});
                                            put("blanditiis", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "magni";
                                                booleanValue = false;
                                                doubleValue = 8857.97;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 1483.79;
                                                    longitude = 8981.11;
                                                }};
                                                integerValue = "impedit";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "ipsa";
                                                        projectId = "excepturi";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "maiores";
                                                            kind = "laudantium";
                                                            name = "James Zemlak III";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "earum";
                                                            kind = "doloribus";
                                                            name = "Monica Koch";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "quasi";
                                                            kind = "neque";
                                                            name = "Andy Bashirian";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "beatae";
                                                            kind = "incidunt";
                                                            name = "Christina Herzog V";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 424854;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "accusantium";
                                                timestampValue = "id";
                                            }});
                                            put("laboriosam", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "quas";
                                                booleanValue = false;
                                                doubleValue = 857.94;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 3564.4;
                                                    longitude = 626.88;
                                                }};
                                                integerValue = "similique";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "incidunt";
                                                        projectId = "quam";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "deserunt";
                                                            kind = "delectus";
                                                            name = "Jeremy Douglas";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 586108;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "aliquam";
                                                timestampValue = "excepturi";
                                            }});
                                        }};
                                    }};
                                    excludeFromIndexes = false;
                                    geoPointValue = new LatLng() {{
                                        latitude = 9804.1;
                                        longitude = 5120.81;
                                    }};
                                    integerValue = "velit";
                                    keyValue = new Key() {{
                                        partitionId = new PartitionId() {{
                                            namespaceId = "reiciendis";
                                            projectId = "amet";
                                        }};
                                        path = new org.openapis.openapi.models.shared.PathElement[]{{
                                            add(new PathElement() {{
                                                id = "ipsa";
                                                kind = "quisquam";
                                                name = "Morris Kreiger";
                                            }}),
                                            add(new PathElement() {{
                                                id = "a";
                                                kind = "nobis";
                                                name = "Steven Carter";
                                            }}),
                                        }};
                                    }};
                                    meaning = 908734;
                                    nullValue = ValueNullValueEnum.NULL_VALUE;
                                    stringValue = "porro";
                                    timestampValue = "tempore";
                                }};
                            }});
                        }};
                        positionalBindings = new org.openapis.openapi.models.shared.GqlQueryParameter[]{{
                            add(new GqlQueryParameter() {{
                                cursor = "modi";
                                value = new Value() {{
                                    arrayValue = new ArrayValue() {{
                                        values = new org.openapis.openapi.models.shared.Value[]{{
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                        }};
                                    }};
                                    blobValue = "fugit";
                                    booleanValue = false;
                                    doubleValue = 2593.77;
                                    entityValue = new Entity() {{
                                        key = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "sequi";
                                                projectId = "eligendi";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "esse";
                                                    kind = "blanditiis";
                                                    name = "Jerald Wilkinson";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "itaque";
                                                    kind = "nulla";
                                                    name = "Lewis Franecki";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "officia";
                                                    kind = "saepe";
                                                    name = "Delia Barton";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "quasi";
                                                    kind = "blanditiis";
                                                    name = "Adrienne Daugherty";
                                                }}),
                                            }};
                                        }};
                                        properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                            put("quia", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "reprehenderit";
                                                booleanValue = false;
                                                doubleValue = 8007.99;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 5524.4;
                                                    longitude = 5488.46;
                                                }};
                                                integerValue = "amet";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "molestiae";
                                                        projectId = "amet";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "modi";
                                                            kind = "perferendis";
                                                            name = "Juan Mann DVM";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "neque";
                                                            kind = "odit";
                                                            name = "Mrs. Jerome Hintz";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "nihil";
                                                            kind = "ad";
                                                            name = "Essie Hayes";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 382764;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "pariatur";
                                                timestampValue = "sit";
                                            }});
                                            put("quidem", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "perferendis";
                                                booleanValue = false;
                                                doubleValue = 6605.36;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 9581.46;
                                                    longitude = 1523.64;
                                                }};
                                                integerValue = "possimus";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "repellat";
                                                        projectId = "repudiandae";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "adipisci";
                                                            kind = "pariatur";
                                                            name = "Theodore Wolff DDS";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 746688;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "dolorum";
                                                timestampValue = "velit";
                                            }});
                                            put("earum", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "error";
                                                booleanValue = false;
                                                doubleValue = 2524.73;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 978.1;
                                                    longitude = 6490.32;
                                                }};
                                                integerValue = "accusamus";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "harum";
                                                        projectId = "cumque";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "expedita";
                                                            kind = "corrupti";
                                                            name = "Sandy Hyatt";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 273677;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "possimus";
                                                timestampValue = "dolor";
                                            }});
                                            put("rerum", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "accusamus";
                                                booleanValue = false;
                                                doubleValue = 7598.74;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 9665.76;
                                                    longitude = 7927.19;
                                                }};
                                                integerValue = "quo";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "quos";
                                                        projectId = "asperiores";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "iste";
                                                            kind = "corporis";
                                                            name = "Martha Ankunding";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "at";
                                                            kind = "possimus";
                                                            name = "Meredith Kassulke";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "quae";
                                                            kind = "quos";
                                                            name = "Ellen Veum";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 788165;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "quas";
                                                timestampValue = "consequuntur";
                                            }});
                                        }};
                                    }};
                                    excludeFromIndexes = false;
                                    geoPointValue = new LatLng() {{
                                        latitude = 9824.45;
                                        longitude = 815.81;
                                    }};
                                    integerValue = "aliquid";
                                    keyValue = new Key() {{
                                        partitionId = new PartitionId() {{
                                            namespaceId = "laudantium";
                                            projectId = "est";
                                        }};
                                        path = new org.openapis.openapi.models.shared.PathElement[]{{
                                            add(new PathElement() {{
                                                id = "aliquid";
                                                kind = "consectetur";
                                                name = "Ian Legros";
                                            }}),
                                        }};
                                    }};
                                    meaning = 927959;
                                    nullValue = ValueNullValueEnum.NULL_VALUE;
                                    stringValue = "tempora";
                                    timestampValue = "blanditiis";
                                }};
                            }}),
                            add(new GqlQueryParameter() {{
                                cursor = "numquam";
                                value = new Value() {{
                                    arrayValue = new ArrayValue() {{
                                        values = new org.openapis.openapi.models.shared.Value[]{{
                                            add(new Value() {{}}),
                                        }};
                                    }};
                                    blobValue = "voluptatum";
                                    booleanValue = false;
                                    doubleValue = 270.78;
                                    entityValue = new Entity() {{
                                        key = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "rerum";
                                                projectId = "veritatis";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "autem";
                                                    kind = "quidem";
                                                    name = "Lowell Oberbrunner";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "voluptas";
                                                    kind = "animi";
                                                    name = "Mrs. Mary Pfannerstill";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "aliquam";
                                                    kind = "iste";
                                                    name = "Lynne Schroeder";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "unde";
                                                    kind = "illo";
                                                    name = "Amanda Reinger DDS";
                                                }}),
                                            }};
                                        }};
                                        properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                            put("harum", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "facilis";
                                                booleanValue = false;
                                                doubleValue = 1053.72;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 7672.1;
                                                    longitude = 9645.11;
                                                }};
                                                integerValue = "labore";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "expedita";
                                                        projectId = "corrupti";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "atque";
                                                            kind = "officiis";
                                                            name = "Jody Will";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "quod";
                                                            kind = "minus";
                                                            name = "Lynn Marks";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "quo";
                                                            kind = "esse";
                                                            name = "Wilbert Bashirian";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 866292;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "eligendi";
                                                timestampValue = "recusandae";
                                            }});
                                        }};
                                    }};
                                    excludeFromIndexes = false;
                                    geoPointValue = new LatLng() {{
                                        latitude = 837.91;
                                        longitude = 136.37;
                                    }};
                                    integerValue = "laudantium";
                                    keyValue = new Key() {{
                                        partitionId = new PartitionId() {{
                                            namespaceId = "iusto";
                                            projectId = "dolor";
                                        }};
                                        path = new org.openapis.openapi.models.shared.PathElement[]{{
                                            add(new PathElement() {{
                                                id = "tempora";
                                                kind = "magni";
                                                name = "Brian Bartell";
                                            }}),
                                            add(new PathElement() {{
                                                id = "eum";
                                                kind = "reprehenderit";
                                                name = "Guy Kovacek";
                                            }}),
                                            add(new PathElement() {{
                                                id = "deserunt";
                                                kind = "atque";
                                                name = "Kay Bradtke";
                                            }}),
                                            add(new PathElement() {{
                                                id = "rem";
                                                kind = "magni";
                                                name = "Dianne Schroeder";
                                            }}),
                                        }};
                                    }};
                                    meaning = 958068;
                                    nullValue = ValueNullValueEnum.NULL_VALUE;
                                    stringValue = "saepe";
                                    timestampValue = "delectus";
                                }};
                            }}),
                            add(new GqlQueryParameter() {{
                                cursor = "officia";
                                value = new Value() {{
                                    arrayValue = new ArrayValue() {{
                                        values = new org.openapis.openapi.models.shared.Value[]{{
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                        }};
                                    }};
                                    blobValue = "cumque";
                                    booleanValue = false;
                                    doubleValue = 6174.97;
                                    entityValue = new Entity() {{
                                        key = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "quaerat";
                                                projectId = "doloribus";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "officiis";
                                                    kind = "mollitia";
                                                    name = "Alvin Haley";
                                                }}),
                                            }};
                                        }};
                                        properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                            put("nesciunt", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "odio";
                                                booleanValue = false;
                                                doubleValue = 7943.06;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 9903.69;
                                                    longitude = 9242.93;
                                                }};
                                                integerValue = "voluptates";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "praesentium";
                                                        projectId = "dicta";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "sit";
                                                            kind = "aliquid";
                                                            name = "Mrs. Louis Lind";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 673653;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "aliquam";
                                                timestampValue = "deserunt";
                                            }});
                                            put("modi", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "impedit";
                                                booleanValue = false;
                                                doubleValue = 2596;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 5283.2;
                                                    longitude = 600.78;
                                                }};
                                                integerValue = "at";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "dolorem";
                                                        projectId = "repellat";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "inventore";
                                                            kind = "sequi";
                                                            name = "Mrs. Candace Welch Jr.";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 134173;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "nulla";
                                                timestampValue = "enim";
                                            }});
                                            put("illo", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "delectus";
                                                booleanValue = false;
                                                doubleValue = 2550.64;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 7602.79;
                                                    longitude = 7505.37;
                                                }};
                                                integerValue = "ex";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "repellat";
                                                        projectId = "quae";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "expedita";
                                                            kind = "hic";
                                                            name = "Miss Gilbert Corwin";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "animi";
                                                            kind = "dolore";
                                                            name = "Julio Koch";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "esse";
                                                            kind = "eveniet";
                                                            name = "Melvin Torp";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 930111;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "dignissimos";
                                                timestampValue = "ipsam";
                                            }});
                                            put("explicabo", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "aliquid";
                                                booleanValue = false;
                                                doubleValue = 3398.43;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 7044.02;
                                                    longitude = 2181.28;
                                                }};
                                                integerValue = "ut";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "quaerat";
                                                        projectId = "architecto";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "eveniet";
                                                            kind = "dolor";
                                                            name = "Miss Randolph Morissette";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "temporibus";
                                                            kind = "sint";
                                                            name = "Dr. Veronica Thompson";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "tempora";
                                                            kind = "quae";
                                                            name = "Gilberto Legros";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 264958;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "earum";
                                                timestampValue = "architecto";
                                            }});
                                        }};
                                    }};
                                    excludeFromIndexes = false;
                                    geoPointValue = new LatLng() {{
                                        latitude = 3051.89;
                                        longitude = 2867.26;
                                    }};
                                    integerValue = "maiores";
                                    keyValue = new Key() {{
                                        partitionId = new PartitionId() {{
                                            namespaceId = "sequi";
                                            projectId = "saepe";
                                        }};
                                        path = new org.openapis.openapi.models.shared.PathElement[]{{
                                            add(new PathElement() {{
                                                id = "esse";
                                                kind = "debitis";
                                                name = "Devin Runte";
                                            }}),
                                        }};
                                    }};
                                    meaning = 644827;
                                    nullValue = ValueNullValueEnum.NULL_VALUE;
                                    stringValue = "ad";
                                    timestampValue = "reiciendis";
                                }};
                            }}),
                        }};
                        queryString = "sequi";
                    }};;
                    partitionId = new PartitionId() {{
                        namespaceId = "porro";
                        projectId = "laborum";
                    }};;
                    query = new Query() {{
                        distinctOn = new org.openapis.openapi.models.shared.PropertyReference[]{{
                            add(new PropertyReference() {{
                                name = "Arturo Armstrong";
                            }}),
                            add(new PropertyReference() {{
                                name = "Mitchell Crona II";
                            }}),
                            add(new PropertyReference() {{
                                name = "Nellie Cremin";
                            }}),
                        }};
                        endCursor = "odit";
                        filter = new Filter() {{
                            compositeFilter = new CompositeFilter() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{}}),
                                    add(new Filter() {{}}),
                                }};
                                op = CompositeFilterOpEnum.OR;
                            }};;
                            propertyFilter = new PropertyFilter() {{
                                op = PropertyFilterOpEnum.LESS_THAN;
                                property = new PropertyReference() {{
                                    name = "Antonio Beer";
                                }};;
                                value = new Value() {{
                                    arrayValue = new ArrayValue() {{
                                        values = new org.openapis.openapi.models.shared.Value[]{{
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                        }};
                                    }};;
                                    blobValue = "accusantium";
                                    booleanValue = false;
                                    doubleValue = 7181.19;
                                    entityValue = new Entity() {{
                                        key = new Key() {{
                                            partitionId = new PartitionId() {{
                                                namespaceId = "sapiente";
                                                projectId = "quam";
                                            }};;
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "aliquam";
                                                    kind = "delectus";
                                                    name = "Bob Kub";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "voluptas";
                                                    kind = "non";
                                                    name = "Kayla Hodkiewicz";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "recusandae";
                                                    kind = "corporis";
                                                    name = "Gwen Reichel";
                                                }}),
                                            }};
                                        }};;
                                        properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                            put("optio", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "sunt";
                                                booleanValue = false;
                                                doubleValue = 1122.5;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 9730.96;
                                                    longitude = 423.64;
                                                }};
                                                integerValue = "sed";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        namespaceId = "amet";
                                                        projectId = "rerum";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "nostrum";
                                                            kind = "temporibus";
                                                            name = "Carmen Hudson";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "itaque";
                                                            kind = "vitae";
                                                            name = "Kenneth Schmeler";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 819996;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "maiores";
                                                timestampValue = "odio";
                                            }});
                                        }};
                                    }};;
                                    excludeFromIndexes = false;
                                    geoPointValue = new LatLng() {{
                                        latitude = 5886.62;
                                        longitude = 9609.33;
                                    }};;
                                    integerValue = "aperiam";
                                    keyValue = new Key() {{
                                        partitionId = new PartitionId() {{
                                            namespaceId = "similique";
                                            projectId = "nesciunt";
                                        }};;
                                        path = new org.openapis.openapi.models.shared.PathElement[]{{
                                            add(new PathElement() {{
                                                id = "ex";
                                                kind = "repellendus";
                                                name = "James Rutherford";
                                            }}),
                                            add(new PathElement() {{
                                                id = "labore";
                                                kind = "expedita";
                                                name = "Rosalie Casper";
                                            }}),
                                            add(new PathElement() {{
                                                id = "maiores";
                                                kind = "distinctio";
                                                name = "Ms. Myron Thompson";
                                            }}),
                                        }};
                                    }};;
                                    meaning = 741603;
                                    nullValue = ValueNullValueEnum.NULL_VALUE;
                                    stringValue = "dicta";
                                    timestampValue = "impedit";
                                }};;
                            }};;
                        }};;
                        kind = new org.openapis.openapi.models.shared.KindExpression[]{{
                            add(new KindExpression() {{
                                name = "Cornelius Corwin";
                            }}),
                            add(new KindExpression() {{
                                name = "Duane Romaguera";
                            }}),
                        }};
                        limit = 105094;
                        offset = 86955;
                        order = new org.openapis.openapi.models.shared.PropertyOrder[]{{
                            add(new PropertyOrder() {{
                                direction = PropertyOrderDirectionEnum.DESCENDING;
                                property = new PropertyReference() {{
                                    name = "Willis Bins";
                                }};
                            }}),
                            add(new PropertyOrder() {{
                                direction = PropertyOrderDirectionEnum.DESCENDING;
                                property = new PropertyReference() {{
                                    name = "Woodrow Ritchie";
                                }};
                            }}),
                            add(new PropertyOrder() {{
                                direction = PropertyOrderDirectionEnum.DESCENDING;
                                property = new PropertyReference() {{
                                    name = "Jessie Hahn";
                                }};
                            }}),
                            add(new PropertyOrder() {{
                                direction = PropertyOrderDirectionEnum.ASCENDING;
                                property = new PropertyReference() {{
                                    name = "Gerard Conn";
                                }};
                            }}),
                        }};
                        projection = new org.openapis.openapi.models.shared.Projection[]{{
                            add(new Projection() {{
                                property = new PropertyReference() {{
                                    name = "Tamara Gusikowski";
                                }};
                            }}),
                        }};
                        startCursor = "impedit";
                    }};;
                    readOptions = new ReadOptions() {{
                        readConsistency = ReadOptionsReadConsistencyEnum.STRONG;
                        readTime = "illo";
                        transaction = "exercitationem";
                    }};;
                }};;
                accessToken = "laborum";
                alt = AltEnum.PROTO;
                callback = "fugit";
                fields = "maxime";
                key = "dolorum";
                oauthToken = "repellat";
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "illum";
                uploadProtocol = "quibusdam";
            }};            

            DatastoreProjectsRunQueryResponse res = sdk.projects.datastoreProjectsRunQuery(req, new DatastoreProjectsRunQuerySecurity() {{
                option1 = new DatastoreProjectsRunQuerySecurityOption1("commodi", "esse") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.runQueryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
