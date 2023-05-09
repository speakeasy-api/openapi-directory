# SDK

## Overview

Query our database of federal and state laws and incentives for alternative fuels and vehicles, air quality, fuel efficiency, and other transportation-related topics. This dataset powers the <a href="https://afdc.energy.gov/laws">Federal and State Laws and Incentives</a> on the Alternative Fuels Data Center.

### Available Operations

* [transportationIncentivesLawsAll](#transportationincentiveslawsall) - Return a full list of laws and incentives that match your query.
* [transportationIncentivesLawsCategories](#transportationincentiveslawscategories) - Return the law categories for a given category type.
* [transportationIncentivesLawsId](#transportationincentiveslawsid) - Fetch the details of a specific law given the law's ID.
* [transportationIncentivesLawsPocs](#transportationincentiveslawspocs) - Get the points of contact for a given jurisdiction.

## transportationIncentivesLawsAll

Return a full list of laws and incentives that match your query.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransportationIncentivesLawsAllOutputFormatEnum;
import org.openapis.openapi.models.operations.TransportationIncentivesLawsAllRequest;
import org.openapis.openapi.models.operations.TransportationIncentivesLawsAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TransportationIncentivesLawsAllRequest req = new TransportationIncentivesLawsAllRequest("deserunt", TransportationIncentivesLawsAllOutputFormatEnum.XML) {{
                expired = false;
                incentiveType = "iure";
                jurisdiction = "magnam";
                keyword = "debitis";
                lawType = "ipsa";
                limit = 963663L;
                local = false;
                poc = false;
                recent = false;
                regulationType = "tempora";
                technology = "suscipit";
                userType = "molestiae";
            }};            

            TransportationIncentivesLawsAllResponse res = sdk.sdk.transportationIncentivesLawsAll(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transportationIncentivesLawsCategories

Return the law categories for a given category type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransportationIncentivesLawsCategoriesOutputFormatEnum;
import org.openapis.openapi.models.operations.TransportationIncentivesLawsCategoriesRequest;
import org.openapis.openapi.models.operations.TransportationIncentivesLawsCategoriesResponse;
import org.openapis.openapi.models.operations.TransportationIncentivesLawsCategoriesTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TransportationIncentivesLawsCategoriesRequest req = new TransportationIncentivesLawsCategoriesRequest("minus", TransportationIncentivesLawsCategoriesOutputFormatEnum.XML) {{
                type = TransportationIncentivesLawsCategoriesTypeEnum.REGULATION;
            }};            

            TransportationIncentivesLawsCategoriesResponse res = sdk.sdk.transportationIncentivesLawsCategories(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transportationIncentivesLawsId

Fetch the details of a specific law given the law's ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransportationIncentivesLawsIdOutputFormatEnum;
import org.openapis.openapi.models.operations.TransportationIncentivesLawsIdRequest;
import org.openapis.openapi.models.operations.TransportationIncentivesLawsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TransportationIncentivesLawsIdRequest req = new TransportationIncentivesLawsIdRequest("iusto", 568045L, TransportationIncentivesLawsIdOutputFormatEnum.JSON) {{
                expired = false;
                poc = false;
            }};            

            TransportationIncentivesLawsIdResponse res = sdk.sdk.transportationIncentivesLawsId(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transportationIncentivesLawsPocs

Get the points of contact for a given jurisdiction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransportationIncentivesLawsPocsOutputFormatEnum;
import org.openapis.openapi.models.operations.TransportationIncentivesLawsPocsRequest;
import org.openapis.openapi.models.operations.TransportationIncentivesLawsPocsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TransportationIncentivesLawsPocsRequest req = new TransportationIncentivesLawsPocsRequest("recusandae", "temporibus", TransportationIncentivesLawsPocsOutputFormatEnum.JSON);            

            TransportationIncentivesLawsPocsResponse res = sdk.sdk.transportationIncentivesLawsPocs(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
