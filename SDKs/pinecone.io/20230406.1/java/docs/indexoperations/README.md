# indexOperations

## Overview

Endpoints for manipulating indexes

### Available Operations

* [configureIndex](#configureindex) - Configure index
* [createCollection](#createcollection) - Create collection
* [createIndex](#createindex) - Create index
* [deleteCollection](#deletecollection) - Delete Collection
* [deleteIndex](#deleteindex) - Delete Index
* [describeCollection](#describecollection) - Describe collection
* [describeIndex](#describeindex) - Describe index
* [listCollections](#listcollections) - List collections
* [listIndexes](#listindexes) - List indexes

## configureIndex

This operation specifies the pod type and number of replicas for an index.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfigureIndexRequest;
import org.openapis.openapi.models.operations.ConfigureIndexResponse;
import org.openapis.openapi.models.shared.IndexConfiguration;
import org.openapis.openapi.models.shared.PodTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConfigureIndexRequest req = new ConfigureIndexRequest(                new IndexConfiguration() {{
                                podType = PodTypeEnum.P1_X8;
                                replicas = 857946;
                            }};, "example");            

            ConfigureIndexResponse res = sdk.indexOperations.configureIndex(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCollection

This operation creates a Pinecone collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCollectionResponse;
import org.openapis.openapi.models.shared.CollectionDefinition;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CollectionDefinition req = new CollectionDefinition("example", "example");            

            CreateCollectionResponse res = sdk.indexOperations.createCollection(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createIndex

This operation creates a Pinecone index. You can use it to specify the measure of similarity, the dimension of vectors to be stored in the index, the numbers of replicas to use, and more.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateIndexResponse;
import org.openapis.openapi.models.shared.IndexDefinition;
import org.openapis.openapi.models.shared.IndexMetadataConfig;
import org.openapis.openapi.models.shared.IndexMetricEnum;
import org.openapis.openapi.models.shared.PodTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.IndexDefinition req = new IndexDefinition(423655, "example") {{
                metadataConfig = new IndexMetadataConfig() {{
                    indexed = new String[]{{
                        add("deserunt"),
                        add("suscipit"),
                        add("iure"),
                    }};
                }};;
                metric = IndexMetricEnum.EUCLIDEAN;
                podType = PodTypeEnum.P2_X4;
                pods = 56713;
                replicas = 963663;
                sourceCollection = "example";
            }};            

            CreateIndexResponse res = sdk.indexOperations.createIndex(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCollection

This operation deletes an existing collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCollectionRequest;
import org.openapis.openapi.models.operations.DeleteCollectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCollectionRequest req = new DeleteCollectionRequest("example");            

            DeleteCollectionResponse res = sdk.indexOperations.deleteCollection(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteIndex

This operation deletes an existing index.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteIndexRequest;
import org.openapis.openapi.models.operations.DeleteIndexResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteIndexRequest req = new DeleteIndexRequest("example");            

            DeleteIndexResponse res = sdk.indexOperations.deleteIndex(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeCollection

Get a description of a collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeCollectionRequest;
import org.openapis.openapi.models.operations.DescribeCollectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeCollectionRequest req = new DescribeCollectionRequest("example");            

            DescribeCollectionResponse res = sdk.indexOperations.describeCollection(req);

            if (res.collection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeIndex

Get a description of an index.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeIndexRequest;
import org.openapis.openapi.models.operations.DescribeIndexResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeIndexRequest req = new DescribeIndexRequest("example");            

            DescribeIndexResponse res = sdk.indexOperations.describeIndex(req);

            if (res.index != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCollections

This operation returns a list of your Pinecone collections.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCollectionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCollectionsResponse res = sdk.indexOperations.listCollections();

            if (res.collectionsList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listIndexes

This operation returns a list of your Pinecone indexes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListIndexesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListIndexesResponse res = sdk.indexOperations.listIndexes();

            if (res.indexesList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
