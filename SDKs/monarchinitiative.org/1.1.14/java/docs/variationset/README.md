# variationSet

## Overview

Operations related to sets of variants

### Available Operations

* [deleteVariantSetItem](#deletevariantsetitem) - Deletes variant set
* [getVariantAnalyze](#getvariantanalyze) - Returns list of matches
* [getVariantSetItem](#getvariantsetitem) - Returns a variant set
* [getVariantSetsArchiveCollection](#getvariantsetsarchivecollection) - Returns list of variant sets from a specified time period
* [getVariantSetsCollection](#getvariantsetscollection) - Returns list of variant sets
* [postVariantSetsCollection](#postvariantsetscollection) - Creates a new variant set
* [putVariantSetItem](#putvariantsetitem) - Updates a variant set

## deleteVariantSetItem

Deletes variant set

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVariantSetItemRequest;
import org.openapis.openapi.models.operations.DeleteVariantSetItemResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteVariantSetItemRequest req = new DeleteVariantSetItemRequest("eum");            

            DeleteVariantSetItemResponse res = sdk.variationSet.deleteVariantSetItem(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVariantAnalyze

Returns list of matches

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVariantAnalyzeRequest;
import org.openapis.openapi.models.operations.GetVariantAnalyzeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVariantAnalyzeRequest req = new GetVariantAnalyzeRequest("modi");            

            GetVariantAnalyzeResponse res = sdk.variationSet.getVariantAnalyze(req);

            if (res.associations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVariantSetItem

Returns a variant set

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVariantSetItemRequest;
import org.openapis.openapi.models.operations.GetVariantSetItemResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVariantSetItemRequest req = new GetVariantSetItemRequest("corporis");            

            GetVariantSetItemResponse res = sdk.variationSet.getVariantSetItem(req);

            if (res.variantSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVariantSetsArchiveCollection

Returns list of variant sets from a specified time period

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVariantSetsArchiveCollectionPerPageEnum;
import org.openapis.openapi.models.operations.GetVariantSetsArchiveCollectionRequest;
import org.openapis.openapi.models.operations.GetVariantSetsArchiveCollectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVariantSetsArchiveCollectionRequest req = new GetVariantSetsArchiveCollectionRequest(298264L, 914971L, 978173L) {{
                page = 731744L;
                perPage = GetVariantSetsArchiveCollectionPerPageEnum.TWO;
            }};            

            GetVariantSetsArchiveCollectionResponse res = sdk.variationSet.getVariantSetsArchiveCollection(req);

            if (res.pageOfVariantSets != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVariantSetsCollection

Returns list of variant sets

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVariantSetsCollectionPerPageEnum;
import org.openapis.openapi.models.operations.GetVariantSetsCollectionRequest;
import org.openapis.openapi.models.operations.GetVariantSetsCollectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVariantSetsCollectionRequest req = new GetVariantSetsCollectionRequest() {{
                page = 727547L;
                perPage = GetVariantSetsCollectionPerPageEnum.TEN;
            }};            

            GetVariantSetsCollectionResponse res = sdk.variationSet.getVariantSetsCollection(req);

            if (res.pageOfVariantSets != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postVariantSetsCollection

Creates a new variant set

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostVariantSetsCollectionResponse;
import org.openapis.openapi.models.shared.VariantSet;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.VariantSet req = new VariantSet("labore", "totam") {{
                category = "occaecati";
                categoryId = 375994L;
                id = 779180L;
                pubDate = OffsetDateTime.parse("2022-03-16T14:37:42.020Z");
            }};            

            PostVariantSetsCollectionResponse res = sdk.variationSet.postVariantSetsCollection(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putVariantSetItem

Updates a variant set

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutVariantSetItemRequest;
import org.openapis.openapi.models.operations.PutVariantSetItemResponse;
import org.openapis.openapi.models.shared.VariantSet;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutVariantSetItemRequest req = new PutVariantSetItemRequest("fuga",                 new VariantSet("nostrum", "est") {{
                                category = "impedit";
                                categoryId = 963741L;
                                id = 735894L;
                                pubDate = OffsetDateTime.parse("2022-07-30T01:12:33.967Z");
                            }};);            

            PutVariantSetItemResponse res = sdk.variationSet.putVariantSetItem(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
