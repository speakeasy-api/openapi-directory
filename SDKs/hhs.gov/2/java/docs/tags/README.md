# tags

## Overview

Information about tags

### Available Operations

* [getResourcesTagsFormat](#getresourcestagsformat) - Get Tags
* [getResourcesTagsTagLanguagesFormat](#getresourcestagstaglanguagesformat) - Get TagLanguages
* [getResourcesTagsTagTypesFormat](#getresourcestagstagtypesformat) - Get MediaItems for Tag
* [getResourcesTagsIdFormat](#getresourcestagsidformat) - Get Tag by ID
* [getResourcesTagsIdMediaFormat](#getresourcestagsidmediaformat) - Get MediaItems for Tag
* [getResourcesTagsIdRelatedFormat](#getresourcestagsidrelatedformat) - Get related Tags by ID
* [getResourcesTagsIdSyndicateFormat](#getresourcestagsidsyndicateformat) - Get MediaItems for Tag

## getResourcesTagsFormat

List of Tags

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesTagsFormatRequest;
import org.openapis.openapi.models.operations.GetResourcesTagsFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesTagsFormatRequest req = new GetResourcesTagsFormatRequest("laborum") {{
                max = 96098;
                mediaId = 971945L;
                name = "Caleb Koss";
                nameContains = "ipsa";
                offset = 604846;
                sort = "voluptate";
                typeId = 739264L;
                typeName = "perferendis";
            }};            

            GetResourcesTagsFormatResponse res = sdk.tags.getResourcesTagsFormat(req);

            if (res.tagMarshallerWrappeds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcesTagsTagLanguagesFormat

List of Tag Languages

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesTagsTagLanguagesFormatRequest;
import org.openapis.openapi.models.operations.GetResourcesTagsTagLanguagesFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesTagsTagLanguagesFormatRequest req = new GetResourcesTagsTagLanguagesFormatRequest("doloremque");            

            GetResourcesTagsTagLanguagesFormatResponse res = sdk.tags.getResourcesTagsTagLanguagesFormat(req);

            if (res.tagLanguageMarshallerWrappeds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcesTagsTagTypesFormat

List of Types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesTagsTagTypesFormatRequest;
import org.openapis.openapi.models.operations.GetResourcesTagsTagTypesFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesTagsTagTypesFormatRequest req = new GetResourcesTagsTagTypesFormatRequest("reprehenderit");            

            GetResourcesTagsTagTypesFormatResponse res = sdk.tags.getResourcesTagsTagTypesFormat(req);

            if (res.tagTypeMarshallerWrappeds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcesTagsIdFormat

Information about a specific tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesTagsIdFormatRequest;
import org.openapis.openapi.models.operations.GetResourcesTagsIdFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesTagsIdFormatRequest req = new GetResourcesTagsIdFormatRequest("ut", 979587L);            

            GetResourcesTagsIdFormatResponse res = sdk.tags.getResourcesTagsIdFormat(req);

            if (res.tagMarshallerWrappeds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcesTagsIdMediaFormat

MediaItem

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesTagsIdMediaFormatRequest;
import org.openapis.openapi.models.operations.GetResourcesTagsIdMediaFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesTagsIdMediaFormatRequest req = new GetResourcesTagsIdMediaFormatRequest("dicta", 359444L) {{
                max = 296140;
                offset = 480894;
                sort = "dicta";
            }};            

            GetResourcesTagsIdMediaFormatResponse res = sdk.tags.getResourcesTagsIdMediaFormat(req);

            if (res.mediaItemWrappeds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcesTagsIdRelatedFormat

Information about related tags to a specific tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesTagsIdRelatedFormatRequest;
import org.openapis.openapi.models.operations.GetResourcesTagsIdRelatedFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesTagsIdRelatedFormatRequest req = new GetResourcesTagsIdRelatedFormatRequest("harum", 317983L) {{
                max = 880476;
                offset = 414263;
                sort = "repudiandae";
            }};            

            GetResourcesTagsIdRelatedFormatResponse res = sdk.tags.getResourcesTagsIdRelatedFormat(req);

            if (res.tagMarshallerWrappeds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcesTagsIdSyndicateFormat

MediaItem

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesTagsIdSyndicateFormatRequest;
import org.openapis.openapi.models.operations.GetResourcesTagsIdSyndicateFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesTagsIdSyndicateFormatRequest req = new GetResourcesTagsIdSyndicateFormatRequest("quae", 216822L) {{
                displayMethod = "quidem";
            }};            

            GetResourcesTagsIdSyndicateFormatResponse res = sdk.tags.getResourcesTagsIdSyndicateFormat(req);

            if (res.getResourcesTagsIdSyndicateFormat200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
