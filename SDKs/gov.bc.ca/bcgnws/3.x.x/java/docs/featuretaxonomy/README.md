# featureTaxonomy

### Available Operations

* [getFeatureCategories](#getfeaturecategories) - Get all feature categories
* [getFeatureClasses](#getfeatureclasses) - Get all feature classes
* [getFeatureTypes](#getfeaturetypes) - Get all feature types

## getFeatureCategories

Gets a list of all feature categories used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFeatureCategoriesOutputFormatEnum;
import org.openapis.openapi.models.operations.GetFeatureCategoriesRequest;
import org.openapis.openapi.models.operations.GetFeatureCategoriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFeatureCategoriesRequest req = new GetFeatureCategoriesRequest(GetFeatureCategoriesOutputFormatEnum.XML);            

            GetFeatureCategoriesResponse res = sdk.featureTaxonomy.getFeatureCategories(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFeatureClasses

Gets a list of all feature classes used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFeatureClassesOutputFormatEnum;
import org.openapis.openapi.models.operations.GetFeatureClassesRequest;
import org.openapis.openapi.models.operations.GetFeatureClassesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFeatureClassesRequest req = new GetFeatureClassesRequest(GetFeatureClassesOutputFormatEnum.XML);            

            GetFeatureClassesResponse res = sdk.featureTaxonomy.getFeatureClasses(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFeatureTypes

Gets a list of all feature types used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFeatureTypesOutputFormatEnum;
import org.openapis.openapi.models.operations.GetFeatureTypesRequest;
import org.openapis.openapi.models.operations.GetFeatureTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFeatureTypesRequest req = new GetFeatureTypesRequest(GetFeatureTypesOutputFormatEnum.XML);            

            GetFeatureTypesResponse res = sdk.featureTaxonomy.getFeatureTypes(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
