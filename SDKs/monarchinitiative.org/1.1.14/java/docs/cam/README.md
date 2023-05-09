# cam

## Overview

Operations on GO Causal Activity Models (GO-CAMs)

### Available Operations

* [getActivityCollection](#getactivitycollection) - Returns list of models
* [getInstanceObject](#getinstanceobject) - Returns list of matches
* [getModelCollection](#getmodelcollection) - Returns list of ALL models
* [getModelContributors](#getmodelcontributors) - Returns list of all contributors across all models
* [getModelInstances](#getmodelinstances) - Returns list of all instances
* [getModelObject](#getmodelobject) - Returns a complete model
* [getModelProperties](#getmodelproperties) - Returns list of all properties used across all models
* [getModelPropertyValues](#getmodelpropertyvalues) - Returns list property-values for all models
* [getModelQuery](#getmodelquery) - Returns list of models matching query
* [getPhysicalInteraction](#getphysicalinteraction) - Returns list of models

## getActivityCollection

Returns list of models

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActivityCollectionRequest;
import org.openapis.openapi.models.operations.GetActivityCollectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetActivityCollectionRequest req = new GetActivityCollectionRequest() {{
                contributor = "deleniti";
                title = "Dr.";
            }};            

            GetActivityCollectionResponse res = sdk.cam.getActivityCollection(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInstanceObject

Returns list of matches

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInstanceObjectRequest;
import org.openapis.openapi.models.operations.GetInstanceObjectResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInstanceObjectRequest req = new GetInstanceObjectRequest("ex") {{
                contributor = "sapiente";
                title = "Ms.";
            }};            

            GetInstanceObjectResponse res = sdk.cam.getInstanceObject(req);

            if (res.associations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModelCollection

Returns list of ALL models

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetModelCollectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetModelCollectionResponse res = sdk.cam.getModelCollection();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModelContributors

Returns list of all contributors across all models

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetModelContributorsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetModelContributorsResponse res = sdk.cam.getModelContributors();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModelInstances

Returns list of all instances

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetModelInstancesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetModelInstancesResponse res = sdk.cam.getModelInstances();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModelObject

Returns a complete model

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetModelObjectRequest;
import org.openapis.openapi.models.operations.GetModelObjectResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetModelObjectRequest req = new GetModelObjectRequest("minus");            

            GetModelObjectResponse res = sdk.cam.getModelObject(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModelProperties

Returns list of all properties used across all models

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetModelPropertiesRequest;
import org.openapis.openapi.models.operations.GetModelPropertiesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetModelPropertiesRequest req = new GetModelPropertiesRequest() {{
                contributor = "nemo";
                title = "Dr.";
            }};            

            GetModelPropertiesResponse res = sdk.cam.getModelProperties(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModelPropertyValues

Returns list property-values for all models

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetModelPropertyValuesRequest;
import org.openapis.openapi.models.operations.GetModelPropertyValuesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetModelPropertyValuesRequest req = new GetModelPropertyValuesRequest() {{
                contributor = "ratione";
                title = "Mrs.";
            }};            

            GetModelPropertyValuesResponse res = sdk.cam.getModelPropertyValues(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModelQuery

Returns list of models matching query

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetModelQueryRequest;
import org.openapis.openapi.models.operations.GetModelQueryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetModelQueryRequest req = new GetModelQueryRequest() {{
                contributor = "perferendis";
                title = "Dr.";
            }};            

            GetModelQueryResponse res = sdk.cam.getModelQuery(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPhysicalInteraction

Returns list of models

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPhysicalInteractionRequest;
import org.openapis.openapi.models.operations.GetPhysicalInteractionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPhysicalInteractionRequest req = new GetPhysicalInteractionRequest() {{
                contributor = "totam";
                title = "Miss";
            }};            

            GetPhysicalInteractionResponse res = sdk.cam.getPhysicalInteraction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
