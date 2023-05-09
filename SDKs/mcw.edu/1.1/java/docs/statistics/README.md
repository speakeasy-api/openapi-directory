# statistics

## Overview

Stats Web Service

### Available Operations

* [getActiveObjectCountUsingGET](#getactiveobjectcountusingget) - Count of active objects by type, for specified species and date
* [getActiveObjectDiffUsingGET](#getactiveobjectdiffusingget) - Count difference of active objects, by type, for specified species and date range
* [getGeneTypeCountUsingGET](#getgenetypecountusingget) - Count of gene types, for specified species and date
* [getGeneTypeDiffUsingGET](#getgenetypediffusingget) - Count difference of gene types, for specified species and date range
* [getObjectStatusCountUsingGET](#getobjectstatuscountusingget) - Count of objects with given status, for specified species and date
* [getObjectStatusDiffUsingGET](#getobjectstatusdiffusingget) - Count difference of objects with given status, for specified species and date range
* [getObjectsWithRefSeqCountUsingGET](#getobjectswithrefseqcountusingget) - Count of objects with reference sequence(s), by object type, for specified species and date
* [getObjectsWithRefSeqDiffUsingGET](#getobjectswithrefseqdiffusingget) - Count difference of objects with reference sequence(s), by object type, for specified species and date range
* [getObjectsWithReferenceCountUsingGET](#getobjectswithreferencecountusingget) - Count of objects with reference, by object type, for specified species and date
* [getObjectsWithReferenceDiffUsingGET](#getobjectswithreferencediffusingget) - Count difference of objects with reference, by object type, for specified species and date range
* [getObjectsWithXDBsCountUsingGET](#getobjectswithxdbscountusingget) - Count of objects with external database ids, by database id, for specified species, object type and date
* [getObjectsWithXDBsDiffUsingGET](#getobjectswithxdbsdiffusingget) - Count difference of objects with external database ids, by database id, for specified species, object type and date range
* [getProteinInteractionCountUsingGET](#getproteininteractioncountusingget) - Count of protein interactions, for specified species and date
* [getProteinInteractionDiffUsingGET](#getproteininteractiondiffusingget) - Count difference of protein interactions, for specified species and date range
* [getQtlInheritanceTypeCountUsingGET](#getqtlinheritancetypecountusingget) - Count of strains, by qtl inheritance type, for specified species and date
* [getQtlInheritanceTypeDiffUsingGET](#getqtlinheritancetypediffusingget) - Count difference of strains, by qtl inheritance type, for specified species and date range
* [getRetiredObjectCountUsingGET](#getretiredobjectcountusingget) - Count of retired objects by type, for specified species and date
* [getRetiredObjectDiffUsingGET](#getretiredobjectdiffusingget) - Count difference of retired objects, by type, for specified species and date range
* [getStrainTypeCountUsingGET](#getstraintypecountusingget) - Count of strain types, for specified species and date
* [getStrainTypeDiffUsingGET](#getstraintypediffusingget) - Count difference of strain types, for specified species and date range
* [getTermStatsUsingGET](#gettermstatsusingget) - getTermStats
* [getWithdrawnObjectCountUsingGET](#getwithdrawnobjectcountusingget) - Count of withdrawn objects by type, for specified species and date
* [getWithdrawnObjectDiffUsingGET](#getwithdrawnobjectdiffusingget) - Count difference of withdrawn objects, by type, for specified species and date range
* [getXdbsCountUsingGET](#getxdbscountusingget) - Count of external database ids, for specied species and date
* [getXdbsDiffUsingGET](#getxdbsdiffusingget) - Count difference of external database ids, for specified species and date range

## getActiveObjectCountUsingGET

Count of active objects by type, for specified species and date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETActiveObjectCountUsingGETRequest;
import org.openapis.openapi.models.operations.GETActiveObjectCountUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETActiveObjectCountUsingGETRequest req = new GETActiveObjectCountUsingGETRequest("enim", 880476);            

            GETActiveObjectCountUsingGETResponse res = sdk.statistics.getActiveObjectCountUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActiveObjectDiffUsingGET

Count difference of active objects, by type, for specified species and date range

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETActiveObjectDiffUsingGETRequest;
import org.openapis.openapi.models.operations.GETActiveObjectDiffUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETActiveObjectDiffUsingGETRequest req = new GETActiveObjectDiffUsingGETRequest("commodi", "repudiandae", 64147);            

            GETActiveObjectDiffUsingGETResponse res = sdk.statistics.getActiveObjectDiffUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGeneTypeCountUsingGET

Count of gene types, for specified species and date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGeneTypeCountUsingGETRequest;
import org.openapis.openapi.models.operations.GETGeneTypeCountUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETGeneTypeCountUsingGETRequest req = new GETGeneTypeCountUsingGETRequest("ipsum", 692472);            

            GETGeneTypeCountUsingGETResponse res = sdk.statistics.getGeneTypeCountUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGeneTypeDiffUsingGET

Count difference of gene types, for specified species and date range

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGeneTypeDiffUsingGETRequest;
import org.openapis.openapi.models.operations.GETGeneTypeDiffUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETGeneTypeDiffUsingGETRequest req = new GETGeneTypeDiffUsingGETRequest("molestias", "excepturi", 865103);            

            GETGeneTypeDiffUsingGETResponse res = sdk.statistics.getGeneTypeDiffUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getObjectStatusCountUsingGET

Count of objects with given status, for specified species and date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETObjectStatusCountUsingGETRequest;
import org.openapis.openapi.models.operations.GETObjectStatusCountUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETObjectStatusCountUsingGETRequest req = new GETObjectStatusCountUsingGETRequest("modi", 508969);            

            GETObjectStatusCountUsingGETResponse res = sdk.statistics.getObjectStatusCountUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getObjectStatusDiffUsingGET

Count difference of objects with given status, for specified species and date range

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETObjectStatusDiffUsingGETRequest;
import org.openapis.openapi.models.operations.GETObjectStatusDiffUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETObjectStatusDiffUsingGETRequest req = new GETObjectStatusDiffUsingGETRequest("rem", "voluptates", 93940);            

            GETObjectStatusDiffUsingGETResponse res = sdk.statistics.getObjectStatusDiffUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getObjectsWithRefSeqCountUsingGET

Count of objects with reference sequence(s), by object type, for specified species and date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETObjectsWithRefSeqCountUsingGETRequest;
import org.openapis.openapi.models.operations.GETObjectsWithRefSeqCountUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETObjectsWithRefSeqCountUsingGETRequest req = new GETObjectsWithRefSeqCountUsingGETRequest("repudiandae", 575947);            

            GETObjectsWithRefSeqCountUsingGETResponse res = sdk.statistics.getObjectsWithRefSeqCountUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getObjectsWithRefSeqDiffUsingGET

Count difference of objects with reference sequence(s), by object type, for specified species and date range

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETObjectsWithRefSeqDiffUsingGETRequest;
import org.openapis.openapi.models.operations.GETObjectsWithRefSeqDiffUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETObjectsWithRefSeqDiffUsingGETRequest req = new GETObjectsWithRefSeqDiffUsingGETRequest("veritatis", "itaque", 277718);            

            GETObjectsWithRefSeqDiffUsingGETResponse res = sdk.statistics.getObjectsWithRefSeqDiffUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getObjectsWithReferenceCountUsingGET

Count of objects with reference, by object type, for specified species and date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETObjectsWithReferenceCountUsingGETRequest;
import org.openapis.openapi.models.operations.GETObjectsWithReferenceCountUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETObjectsWithReferenceCountUsingGETRequest req = new GETObjectsWithReferenceCountUsingGETRequest("enim", 9356);            

            GETObjectsWithReferenceCountUsingGETResponse res = sdk.statistics.getObjectsWithReferenceCountUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getObjectsWithReferenceDiffUsingGET

Count difference of objects with reference, by object type, for specified species and date range

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETObjectsWithReferenceDiffUsingGETRequest;
import org.openapis.openapi.models.operations.GETObjectsWithReferenceDiffUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETObjectsWithReferenceDiffUsingGETRequest req = new GETObjectsWithReferenceDiffUsingGETRequest("est", "quibusdam", 131797);            

            GETObjectsWithReferenceDiffUsingGETResponse res = sdk.statistics.getObjectsWithReferenceDiffUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getObjectsWithXDBsCountUsingGET

Count of objects with external database ids, by database id, for specified species, object type and date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETObjectsWithXDBsCountUsingGETRequest;
import org.openapis.openapi.models.operations.GETObjectsWithXDBsCountUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETObjectsWithXDBsCountUsingGETRequest req = new GETObjectsWithXDBsCountUsingGETRequest("deserunt", 716327, 841386);            

            GETObjectsWithXDBsCountUsingGETResponse res = sdk.statistics.getObjectsWithXDBsCountUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getObjectsWithXDBsDiffUsingGET

Count difference of objects with external database ids, by database id, for specified species, object type and date range

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETObjectsWithXDBsDiffUsingGETRequest;
import org.openapis.openapi.models.operations.GETObjectsWithXDBsDiffUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETObjectsWithXDBsDiffUsingGETRequest req = new GETObjectsWithXDBsDiffUsingGETRequest("labore", "modi", 183191, 397821);            

            GETObjectsWithXDBsDiffUsingGETResponse res = sdk.statistics.getObjectsWithXDBsDiffUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProteinInteractionCountUsingGET

Count of protein interactions, for specified species and date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETProteinInteractionCountUsingGETRequest;
import org.openapis.openapi.models.operations.GETProteinInteractionCountUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETProteinInteractionCountUsingGETRequest req = new GETProteinInteractionCountUsingGETRequest("cupiditate", 552822);            

            GETProteinInteractionCountUsingGETResponse res = sdk.statistics.getProteinInteractionCountUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProteinInteractionDiffUsingGET

Count difference of protein interactions, for specified species and date range

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETProteinInteractionDiffUsingGETRequest;
import org.openapis.openapi.models.operations.GETProteinInteractionDiffUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETProteinInteractionDiffUsingGETRequest req = new GETProteinInteractionDiffUsingGETRequest("perferendis", "magni", 828940);            

            GETProteinInteractionDiffUsingGETResponse res = sdk.statistics.getProteinInteractionDiffUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQtlInheritanceTypeCountUsingGET

Count of strains, by qtl inheritance type, for specified species and date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETQtlInheritanceTypeCountUsingGETRequest;
import org.openapis.openapi.models.operations.GETQtlInheritanceTypeCountUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETQtlInheritanceTypeCountUsingGETRequest req = new GETQtlInheritanceTypeCountUsingGETRequest("ipsam", 4695);            

            GETQtlInheritanceTypeCountUsingGETResponse res = sdk.statistics.getQtlInheritanceTypeCountUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQtlInheritanceTypeDiffUsingGET

Count difference of strains, by qtl inheritance type, for specified species and date range

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETQtlInheritanceTypeDiffUsingGETRequest;
import org.openapis.openapi.models.operations.GETQtlInheritanceTypeDiffUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETQtlInheritanceTypeDiffUsingGETRequest req = new GETQtlInheritanceTypeDiffUsingGETRequest("fugit", "dolorum", 569618);            

            GETQtlInheritanceTypeDiffUsingGETResponse res = sdk.statistics.getQtlInheritanceTypeDiffUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRetiredObjectCountUsingGET

Count of retired objects by type, for specified species and date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRetiredObjectCountUsingGETRequest;
import org.openapis.openapi.models.operations.GETRetiredObjectCountUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETRetiredObjectCountUsingGETRequest req = new GETRetiredObjectCountUsingGETRequest("tempora", 703737);            

            GETRetiredObjectCountUsingGETResponse res = sdk.statistics.getRetiredObjectCountUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRetiredObjectDiffUsingGET

Count difference of retired objects, by type, for specified species and date range

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRetiredObjectDiffUsingGETRequest;
import org.openapis.openapi.models.operations.GETRetiredObjectDiffUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETRetiredObjectDiffUsingGETRequest req = new GETRetiredObjectDiffUsingGETRequest("tempore", "labore", 962189);            

            GETRetiredObjectDiffUsingGETResponse res = sdk.statistics.getRetiredObjectDiffUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStrainTypeCountUsingGET

Count of strain types, for specified species and date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETStrainTypeCountUsingGETRequest;
import org.openapis.openapi.models.operations.GETStrainTypeCountUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETStrainTypeCountUsingGETRequest req = new GETStrainTypeCountUsingGETRequest("eum", 248753);            

            GETStrainTypeCountUsingGETResponse res = sdk.statistics.getStrainTypeCountUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStrainTypeDiffUsingGET

Count difference of strain types, for specified species and date range

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETStrainTypeDiffUsingGETRequest;
import org.openapis.openapi.models.operations.GETStrainTypeDiffUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETStrainTypeDiffUsingGETRequest req = new GETStrainTypeDiffUsingGETRequest("eligendi", "sint", 396098);            

            GETStrainTypeDiffUsingGETResponse res = sdk.statistics.getStrainTypeDiffUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTermStatsUsingGET

getTermStats

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETTermStatsUsingGETRequest;
import org.openapis.openapi.models.operations.GETTermStatsUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETTermStatsUsingGETRequest req = new GETTermStatsUsingGETRequest("provident", "necessitatibus");            

            GETTermStatsUsingGETResponse res = sdk.statistics.getTermStatsUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWithdrawnObjectCountUsingGET

Count of withdrawn objects by type, for specified species and date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETWithdrawnObjectCountUsingGETRequest;
import org.openapis.openapi.models.operations.GETWithdrawnObjectCountUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETWithdrawnObjectCountUsingGETRequest req = new GETWithdrawnObjectCountUsingGETRequest("sint", 638921);            

            GETWithdrawnObjectCountUsingGETResponse res = sdk.statistics.getWithdrawnObjectCountUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWithdrawnObjectDiffUsingGET

Count difference of withdrawn objects, by type, for specified species and date range

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETWithdrawnObjectDiffUsingGETRequest;
import org.openapis.openapi.models.operations.GETWithdrawnObjectDiffUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETWithdrawnObjectDiffUsingGETRequest req = new GETWithdrawnObjectDiffUsingGETRequest("dolor", "debitis", 952749);            

            GETWithdrawnObjectDiffUsingGETResponse res = sdk.statistics.getWithdrawnObjectDiffUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getXdbsCountUsingGET

Count of external database ids, for specied species and date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETXdbsCountUsingGETRequest;
import org.openapis.openapi.models.operations.GETXdbsCountUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETXdbsCountUsingGETRequest req = new GETXdbsCountUsingGETRequest("dolorum", 447125);            

            GETXdbsCountUsingGETResponse res = sdk.statistics.getXdbsCountUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getXdbsDiffUsingGET

Count difference of external database ids, for specified species and date range

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETXdbsDiffUsingGETRequest;
import org.openapis.openapi.models.operations.GETXdbsDiffUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETXdbsDiffUsingGETRequest req = new GETXdbsDiffUsingGETRequest("in", "illum", 978571);            

            GETXdbsDiffUsingGETResponse res = sdk.statistics.getXdbsDiffUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
