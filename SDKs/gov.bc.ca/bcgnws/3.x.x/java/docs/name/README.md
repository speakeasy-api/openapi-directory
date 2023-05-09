# name

### Available Operations

* [getNamesChanges](#getnameschanges) - Search for names with metadata changes in a given period
* [getNamesDecisionsRecent](#getnamesdecisionsrecent) - Search for names affected by recent naming decision
* [getNamesDecisionsYear](#getnamesdecisionsyear) - Search for names affected by naming decisions in a given year
* [getNamesInside](#getnamesinside) - Search in a geographic area
* [getNamesNear](#getnamesnear) - Search near to a geographic point
* [getNamesNotOfficialSearch](#getnamesnotofficialsearch) - Search by name, limit to unofficial names only
* [getNamesOfficialSearch](#getnamesofficialsearch) - Search by name, limit to official names only
* [getNamesSearch](#getnamessearch) - Search by name
* [getNamesNameIdOutputFormat](#getnamesnameidoutputformat) - Get a name by its nameId

## getNamesChanges

Search for information about geographical names which have changed most recently within a specified time window.  Changes may include status cupdates and metadata corrections.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNamesChangesEmbedEnum;
import org.openapis.openapi.models.operations.GetNamesChangesOutputFormatEnum;
import org.openapis.openapi.models.operations.GetNamesChangesOutputSrsEnum;
import org.openapis.openapi.models.operations.GetNamesChangesOutputStyleEnum;
import org.openapis.openapi.models.operations.GetNamesChangesRequest;
import org.openapis.openapi.models.operations.GetNamesChangesResponse;
import org.openapis.openapi.models.operations.GetNamesChangesSortByEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNamesChangesRequest req = new GetNamesChangesRequest(857946L, GetNamesChangesOutputFormatEnum.KML, 847252L) {{
                embed = GetNamesChangesEmbedEnum.ZERO;
                featureCategory = "error";
                featureClass = "deserunt";
                featureType = "suscipit";
                itemsPerPage = 437587L;
                outputSRS = GetNamesChangesOutputSrsEnum.THREE_THOUSAND_AND_FIVE;
                outputStyle = GetNamesChangesOutputStyleEnum.DETAIL;
                sortBy = GetNamesChangesSortByEnum.NAME;
                startIndex = 963663L;
            }};            

            GetNamesChangesResponse res = sdk.name.getNamesChanges(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNamesDecisionsRecent

Search for information about geographical names affected by naming 'decisions' made by the BC Geographical Names Office (naming authority) within the last X days.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNamesDecisionsRecentEmbedEnum;
import org.openapis.openapi.models.operations.GetNamesDecisionsRecentOutputFormatEnum;
import org.openapis.openapi.models.operations.GetNamesDecisionsRecentOutputSrsEnum;
import org.openapis.openapi.models.operations.GetNamesDecisionsRecentOutputStyleEnum;
import org.openapis.openapi.models.operations.GetNamesDecisionsRecentRequest;
import org.openapis.openapi.models.operations.GetNamesDecisionsRecentResponse;
import org.openapis.openapi.models.operations.GetNamesDecisionsRecentSortByEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNamesDecisionsRecentRequest req = new GetNamesDecisionsRecentRequest(272656L, GetNamesDecisionsRecentOutputFormatEnum.XML) {{
                embed = GetNamesDecisionsRecentEmbedEnum.ZERO;
                featureCategory = "minus";
                featureClass = "placeat";
                featureType = "voluptatum";
                itemsPerPage = 479977L;
                outputSRS = GetNamesDecisionsRecentOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_EIGHT;
                outputStyle = GetNamesDecisionsRecentOutputStyleEnum.SUMMARY;
                sortBy = GetNamesDecisionsRecentSortByEnum.DECISION_DATE;
                startIndex = 836079L;
            }};            

            GetNamesDecisionsRecentResponse res = sdk.name.getNamesDecisionsRecent(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNamesDecisionsYear

Search for information about geographical names affected by naming 'decisions' made by the BC Geographical Names Office (naming authority) in a given year.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNamesDecisionsYearEmbedEnum;
import org.openapis.openapi.models.operations.GetNamesDecisionsYearOutputFormatEnum;
import org.openapis.openapi.models.operations.GetNamesDecisionsYearOutputSrsEnum;
import org.openapis.openapi.models.operations.GetNamesDecisionsYearOutputStyleEnum;
import org.openapis.openapi.models.operations.GetNamesDecisionsYearRequest;
import org.openapis.openapi.models.operations.GetNamesDecisionsYearResponse;
import org.openapis.openapi.models.operations.GetNamesDecisionsYearSortByEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNamesDecisionsYearRequest req = new GetNamesDecisionsYearRequest(GetNamesDecisionsYearOutputFormatEnum.JSON, 337396L) {{
                embed = GetNamesDecisionsYearEmbedEnum.ZERO;
                featureCategory = "deserunt";
                featureClass = "perferendis";
                featureType = "ipsam";
                itemsPerPage = 832620L;
                outputSRS = GetNamesDecisionsYearOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_ELEVEN;
                outputStyle = GetNamesDecisionsYearOutputStyleEnum.DETAIL;
                sortBy = GetNamesDecisionsYearSortByEnum.NAME;
                startIndex = 870013L;
            }};            

            GetNamesDecisionsYearResponse res = sdk.name.getNamesDecisionsYear(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNamesInside

Search for information about geographical names that correspond to features within a geographic bounding box.  Various options and filter parameters are available to refine the search.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNamesInsideEmbedEnum;
import org.openapis.openapi.models.operations.GetNamesInsideOutputFormatEnum;
import org.openapis.openapi.models.operations.GetNamesInsideOutputSrsEnum;
import org.openapis.openapi.models.operations.GetNamesInsideOutputStyleEnum;
import org.openapis.openapi.models.operations.GetNamesInsideRequest;
import org.openapis.openapi.models.operations.GetNamesInsideResponse;
import org.openapis.openapi.models.operations.GetNamesInsideSortByEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNamesInsideRequest req = new GetNamesInsideRequest("at", GetNamesInsideOutputFormatEnum.CSV) {{
                embed = GetNamesInsideEmbedEnum.ZERO;
                featureCategory = "quod";
                featureClass = "quod";
                featureType = "esse";
                itemsPerPage = 520478L;
                outputSRS = GetNamesInsideOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_TEN;
                outputStyle = GetNamesInsideOutputStyleEnum.DETAIL;
                sortBy = GetNamesInsideSortByEnum.NAME;
                startIndex = 720633L;
            }};            

            GetNamesInsideResponse res = sdk.name.getNamesInside(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNamesNear

Search for information about geographical names that correspond to features within a geographic area defined by a centre point and a radius.  Various options and filter parameters are available to refine the search.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNamesNearEmbedEnum;
import org.openapis.openapi.models.operations.GetNamesNearOutputFormatEnum;
import org.openapis.openapi.models.operations.GetNamesNearOutputSrsEnum;
import org.openapis.openapi.models.operations.GetNamesNearOutputStyleEnum;
import org.openapis.openapi.models.operations.GetNamesNearRequest;
import org.openapis.openapi.models.operations.GetNamesNearResponse;
import org.openapis.openapi.models.operations.GetNamesNearSortByEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNamesNearRequest req = new GetNamesNearRequest("officia", "occaecati", GetNamesNearOutputFormatEnum.JSON) {{
                embed = GetNamesNearEmbedEnum.ONE;
                featureCategory = "hic";
                featureClass = "optio";
                featureType = "totam";
                itemsPerPage = 105907L;
                outputSRS = GetNamesNearOutputSrsEnum.THREE_THOUSAND_EIGHT_HUNDRED_AND_FIFTY_SEVEN;
                outputStyle = GetNamesNearOutputStyleEnum.SUMMARY;
                sortBy = GetNamesNearSortByEnum.NAME;
                startIndex = 186332L;
            }};            

            GetNamesNearResponse res = sdk.name.getNamesNear(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNamesNotOfficialSearch

Search for information about unofficial geographical names by the text of the name itself.  Various options and filter parameters are available to refine the search.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNamesNotOfficialSearchEmbedEnum;
import org.openapis.openapi.models.operations.GetNamesNotOfficialSearchExactSpellingEnum;
import org.openapis.openapi.models.operations.GetNamesNotOfficialSearchOutputFormatEnum;
import org.openapis.openapi.models.operations.GetNamesNotOfficialSearchOutputSrsEnum;
import org.openapis.openapi.models.operations.GetNamesNotOfficialSearchOutputStyleEnum;
import org.openapis.openapi.models.operations.GetNamesNotOfficialSearchRequest;
import org.openapis.openapi.models.operations.GetNamesNotOfficialSearchResponse;
import org.openapis.openapi.models.operations.GetNamesNotOfficialSearchSortByEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNamesNotOfficialSearchRequest req = new GetNamesNotOfficialSearchRequest("impedit", GetNamesNotOfficialSearchOutputFormatEnum.KML) {{
                embed = GetNamesNotOfficialSearchEmbedEnum.ZERO;
                exactSpelling = GetNamesNotOfficialSearchExactSpellingEnum.ZERO;
                featureCategory = "excepturi";
                featureClass = "aspernatur";
                featureType = "perferendis";
                itemsPerPage = 324141L;
                outputSRS = GetNamesNotOfficialSearchOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_EIGHT;
                outputStyle = GetNamesNotOfficialSearchOutputStyleEnum.SUMMARY;
                sortBy = GetNamesNotOfficialSearchSortByEnum.FEATURE_TYPE;
                startIndex = 222321L;
            }};            

            GetNamesNotOfficialSearchResponse res = sdk.name.getNamesNotOfficialSearch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNamesOfficialSearch

Search for information about official geographical names by the text of the name itself.  Various options and filter parameters are available to refine the search.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNamesOfficialSearchEmbedEnum;
import org.openapis.openapi.models.operations.GetNamesOfficialSearchExactSpellingEnum;
import org.openapis.openapi.models.operations.GetNamesOfficialSearchOutputFormatEnum;
import org.openapis.openapi.models.operations.GetNamesOfficialSearchOutputSrsEnum;
import org.openapis.openapi.models.operations.GetNamesOfficialSearchOutputStyleEnum;
import org.openapis.openapi.models.operations.GetNamesOfficialSearchRequest;
import org.openapis.openapi.models.operations.GetNamesOfficialSearchResponse;
import org.openapis.openapi.models.operations.GetNamesOfficialSearchSortByEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNamesOfficialSearchRequest req = new GetNamesOfficialSearchRequest("natus", GetNamesOfficialSearchOutputFormatEnum.XML) {{
                embed = GetNamesOfficialSearchEmbedEnum.ONE;
                exactSpelling = GetNamesOfficialSearchExactSpellingEnum.ONE;
                featureCategory = "fuga";
                featureClass = "in";
                featureType = "corporis";
                itemsPerPage = 613064L;
                outputSRS = GetNamesOfficialSearchOutputSrsEnum.THREE_THOUSAND_EIGHT_HUNDRED_AND_FIFTY_SEVEN;
                outputStyle = GetNamesOfficialSearchOutputStyleEnum.DETAIL;
                sortBy = GetNamesOfficialSearchSortByEnum.FEATURE_TYPE;
                startIndex = 99280L;
            }};            

            GetNamesOfficialSearchResponse res = sdk.name.getNamesOfficialSearch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNamesSearch

Search for information about geographical names by the text of the name itself.  The response will include both official and unofficial names.  Various options and filter parameters are available to refine the search.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNamesSearchEmbedEnum;
import org.openapis.openapi.models.operations.GetNamesSearchExactSpellingEnum;
import org.openapis.openapi.models.operations.GetNamesSearchOutputFormatEnum;
import org.openapis.openapi.models.operations.GetNamesSearchOutputSrsEnum;
import org.openapis.openapi.models.operations.GetNamesSearchOutputStyleEnum;
import org.openapis.openapi.models.operations.GetNamesSearchRequest;
import org.openapis.openapi.models.operations.GetNamesSearchResponse;
import org.openapis.openapi.models.operations.GetNamesSearchSortByEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNamesSearchRequest req = new GetNamesSearchRequest("ipsa", GetNamesSearchOutputFormatEnum.CSV) {{
                embed = GetNamesSearchEmbedEnum.ONE;
                exactSpelling = GetNamesSearchExactSpellingEnum.ONE;
                featureCategory = "laborum";
                featureClass = "dolores";
                featureType = "dolorem";
                itemsPerPage = 358152L;
                outputSRS = GetNamesSearchOutputSrsEnum.FOUR_THOUSAND_TWO_HUNDRED_AND_SIXTY_NINE;
                outputStyle = GetNamesSearchOutputStyleEnum.DETAIL;
                sortBy = GetNamesSearchSortByEnum.NAME;
                startIndex = 607831L;
            }};            

            GetNamesSearchResponse res = sdk.name.getNamesSearch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNamesNameIdOutputFormat

Get information about the geographical name with the specified nameId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNamesNameIdOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetNamesNameIdOutputFormatRequest;
import org.openapis.openapi.models.operations.GetNamesNameIdOutputFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNamesNameIdOutputFormatRequest req = new GetNamesNameIdOutputFormatRequest(363711L, GetNamesNameIdOutputFormatOutputFormatEnum.XML);            

            GetNamesNameIdOutputFormatResponse res = sdk.name.getNamesNameIdOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
