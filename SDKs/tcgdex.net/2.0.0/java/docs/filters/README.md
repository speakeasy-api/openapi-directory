# filters

## Overview

differents requests to filter cards

### Available Operations

* [getCategories](#getcategories)
* [getCategoriesCategory](#getcategoriescategory)
* [getDexIds](#getdexids)
* [getDexIdsDexId](#getdexidsdexid)
* [getEnergyTypes](#getenergytypes)
* [getEnergyTypesEnergyType](#getenergytypesenergytype)
* [getHp](#gethp)
* [getHpHp](#gethphp)
* [getIllustrators](#getillustrators)
* [getIllustratorsIllustrator](#getillustratorsillustrator)
* [getRarities](#getrarities)
* [getRaritiesRarity](#getraritiesrarity)
* [getRegulationMarks](#getregulationmarks)
* [getRegulationMarksRegulationMark](#getregulationmarksregulationmark)
* [getRetreats](#getretreats)
* [getRetreatsRetreat](#getretreatsretreat)
* [getSeries](#getseries)
* [getSeriesSerie](#getseriesserie)
* [getSets](#getsets)
* [getSetsSet](#getsetsset)
* [getStages](#getstages)
* [getStagesStage](#getstagesstage)
* [getSuffixes](#getsuffixes)
* [getSuffixesSuffix](#getsuffixessuffix)
* [getTrainerTypes](#gettrainertypes)
* [getTrainerTypesTrainerType](#gettrainertypestrainertype)
* [getTypes](#gettypes)
* [getTypesType](#gettypestype)
* [getVariants](#getvariants)
* [getVariantsVariant](#getvariantsvariant)

## getCategories

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCategoriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCategoriesResponse res = sdk.filters.getCategories();

            if (res.getCategories200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCategoriesCategory

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCategoriesCategoryRequest;
import org.openapis.openapi.models.operations.GetCategoriesCategoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCategoriesCategoryRequest req = new GetCategoriesCategoryRequest("quibusdam");            

            GetCategoriesCategoryResponse res = sdk.filters.getCategoriesCategory(req);

            if (res.stringEndpoint != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDexIds

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDexIdsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDexIdsResponse res = sdk.filters.getDexIds();

            if (res.getDexIds200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDexIdsDexId

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDexIdsDexIdRequest;
import org.openapis.openapi.models.operations.GetDexIdsDexIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDexIdsDexIdRequest req = new GetDexIdsDexIdRequest("unde");            

            GetDexIdsDexIdResponse res = sdk.filters.getDexIdsDexId(req);

            if (res.cardResumes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnergyTypes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnergyTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEnergyTypesResponse res = sdk.filters.getEnergyTypes();

            if (res.getEnergyTypes200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnergyTypesEnergyType

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnergyTypesEnergyTypeRequest;
import org.openapis.openapi.models.operations.GetEnergyTypesEnergyTypeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEnergyTypesEnergyTypeRequest req = new GetEnergyTypesEnergyTypeRequest("nulla");            

            GetEnergyTypesEnergyTypeResponse res = sdk.filters.getEnergyTypesEnergyType(req);

            if (res.cardResumes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHp

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHpResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetHpResponse res = sdk.filters.getHp();

            if (res.getHp200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHpHp

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHpHpRequest;
import org.openapis.openapi.models.operations.GetHpHpResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetHpHpRequest req = new GetHpHpRequest("corrupti");            

            GetHpHpResponse res = sdk.filters.getHpHp(req);

            if (res.stringEndpoint != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIllustrators

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIllustratorsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIllustratorsResponse res = sdk.filters.getIllustrators();

            if (res.getIllustrators200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIllustratorsIllustrator

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIllustratorsIllustratorRequest;
import org.openapis.openapi.models.operations.GetIllustratorsIllustratorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIllustratorsIllustratorRequest req = new GetIllustratorsIllustratorRequest("illum");            

            GetIllustratorsIllustratorResponse res = sdk.filters.getIllustratorsIllustrator(req);

            if (res.stringEndpoint != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRarities

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRaritiesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRaritiesResponse res = sdk.filters.getRarities();

            if (res.getRarities200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRaritiesRarity

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRaritiesRarityRequest;
import org.openapis.openapi.models.operations.GetRaritiesRarityResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRaritiesRarityRequest req = new GetRaritiesRarityRequest("vel");            

            GetRaritiesRarityResponse res = sdk.filters.getRaritiesRarity(req);

            if (res.stringEndpoint != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRegulationMarks

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRegulationMarksResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRegulationMarksResponse res = sdk.filters.getRegulationMarks();

            if (res.getRegulationMarks200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRegulationMarksRegulationMark

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRegulationMarksRegulationMarkRequest;
import org.openapis.openapi.models.operations.GetRegulationMarksRegulationMarkResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRegulationMarksRegulationMarkRequest req = new GetRegulationMarksRegulationMarkRequest("error");            

            GetRegulationMarksRegulationMarkResponse res = sdk.filters.getRegulationMarksRegulationMark(req);

            if (res.cardResumes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRetreats

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRetreatsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRetreatsResponse res = sdk.filters.getRetreats();

            if (res.getRetreats200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRetreatsRetreat

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRetreatsRetreatRequest;
import org.openapis.openapi.models.operations.GetRetreatsRetreatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRetreatsRetreatRequest req = new GetRetreatsRetreatRequest("deserunt");            

            GetRetreatsRetreatResponse res = sdk.filters.getRetreatsRetreat(req);

            if (res.stringEndpoint != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSeries

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSeriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSeriesResponse res = sdk.filters.getSeries();

            if (res.serieResumes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSeriesSerie

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSeriesSerieRequest;
import org.openapis.openapi.models.operations.GetSeriesSerieResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSeriesSerieRequest req = new GetSeriesSerieRequest("suscipit");            

            GetSeriesSerieResponse res = sdk.filters.getSeriesSerie(req);

            if (res.serie != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSets

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSetsResponse res = sdk.filters.getSets();

            if (res.setResumes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetsSet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetsSetRequest;
import org.openapis.openapi.models.operations.GetSetsSetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSetsSetRequest req = new GetSetsSetRequest("iure");            

            GetSetsSetResponse res = sdk.filters.getSetsSet(req);

            if (res.set != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStages

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStagesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStagesResponse res = sdk.filters.getStages();

            if (res.getStages200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStagesStage

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStagesStageRequest;
import org.openapis.openapi.models.operations.GetStagesStageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStagesStageRequest req = new GetStagesStageRequest("magnam");            

            GetStagesStageResponse res = sdk.filters.getStagesStage(req);

            if (res.cardResumes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSuffixes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSuffixesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSuffixesResponse res = sdk.filters.getSuffixes();

            if (res.getSuffixes200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSuffixesSuffix

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSuffixesSuffixRequest;
import org.openapis.openapi.models.operations.GetSuffixesSuffixResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSuffixesSuffixRequest req = new GetSuffixesSuffixRequest("debitis");            

            GetSuffixesSuffixResponse res = sdk.filters.getSuffixesSuffix(req);

            if (res.cardResumes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTrainerTypes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTrainerTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTrainerTypesResponse res = sdk.filters.getTrainerTypes();

            if (res.getTrainerTypes200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTrainerTypesTrainerType

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTrainerTypesTrainerTypeRequest;
import org.openapis.openapi.models.operations.GetTrainerTypesTrainerTypeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTrainerTypesTrainerTypeRequest req = new GetTrainerTypesTrainerTypeRequest("ipsa");            

            GetTrainerTypesTrainerTypeResponse res = sdk.filters.getTrainerTypesTrainerType(req);

            if (res.cardResumes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTypes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTypesResponse res = sdk.filters.getTypes();

            if (res.getTypes200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTypesType

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTypesTypeRequest;
import org.openapis.openapi.models.operations.GetTypesTypeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTypesTypeRequest req = new GetTypesTypeRequest("delectus");            

            GetTypesTypeResponse res = sdk.filters.getTypesType(req);

            if (res.cardResumes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVariants

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVariantsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVariantsResponse res = sdk.filters.getVariants();

            if (res.getVariants200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVariantsVariant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVariantsVariantRequest;
import org.openapis.openapi.models.operations.GetVariantsVariantResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVariantsVariantRequest req = new GetVariantsVariantRequest("tempora");            

            GetVariantsVariantResponse res = sdk.filters.getVariantsVariant(req);

            if (res.cardResumes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
