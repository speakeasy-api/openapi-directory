# search

### Available Operations

* [getNamesChanges](#getnameschanges) - Search for names with metadata changes in a given period
* [getNamesDecisionsRecent](#getnamesdecisionsrecent) - Search for names affected by recent naming decision
* [getNamesDecisionsYear](#getnamesdecisionsyear) - Search for names affected by naming decisions in a given year
* [getNamesInside](#getnamesinside) - Search in a geographic area
* [getNamesNear](#getnamesnear) - Search near to a geographic point
* [getNamesNotOfficialSearch](#getnamesnotofficialsearch) - Search by name, limit to unofficial names only
* [getNamesOfficialSearch](#getnamesofficialsearch) - Search by name, limit to official names only
* [getNamesSearch](#getnamessearch) - Search by name

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

            GetNamesChangesRequest req = new GetNamesChangesRequest(38425L, GetNamesChangesOutputFormatEnum.XML, 634274L) {{
                embed = GetNamesChangesEmbedEnum.ONE;
                featureCategory = "sapiente";
                featureClass = "architecto";
                featureType = "mollitia";
                itemsPerPage = 208876L;
                outputSRS = GetNamesChangesOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_EIGHT;
                outputStyle = GetNamesChangesOutputStyleEnum.SUMMARY;
                sortBy = GetNamesChangesSortByEnum.DECISION_DATE;
                startIndex = 653108L;
            }};            

            GetNamesChangesResponse res = sdk.search.getNamesChanges(req);

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

            GetNamesDecisionsRecentRequest req = new GetNamesDecisionsRecentRequest(581850L, GetNamesDecisionsRecentOutputFormatEnum.XML) {{
                embed = GetNamesDecisionsRecentEmbedEnum.ZERO;
                featureCategory = "quam";
                featureClass = "molestiae";
                featureType = "velit";
                itemsPerPage = 623510L;
                outputSRS = GetNamesDecisionsRecentOutputSrsEnum.FOUR_THOUSAND_TWO_HUNDRED_AND_SIXTY_NINE;
                outputStyle = GetNamesDecisionsRecentOutputStyleEnum.SUMMARY;
                sortBy = GetNamesDecisionsRecentSortByEnum.NAME;
                startIndex = 674752L;
            }};            

            GetNamesDecisionsRecentResponse res = sdk.search.getNamesDecisionsRecent(req);

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

            GetNamesDecisionsYearRequest req = new GetNamesDecisionsYearRequest(GetNamesDecisionsYearOutputFormatEnum.KML, 317202L) {{
                embed = GetNamesDecisionsYearEmbedEnum.ZERO;
                featureCategory = "quo";
                featureClass = "sequi";
                featureType = "tenetur";
                itemsPerPage = 368725L;
                outputSRS = GetNamesDecisionsYearOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_EIGHT;
                outputStyle = GetNamesDecisionsYearOutputStyleEnum.DETAIL;
                sortBy = GetNamesDecisionsYearSortByEnum.NAME;
                startIndex = 97101L;
            }};            

            GetNamesDecisionsYearResponse res = sdk.search.getNamesDecisionsYear(req);

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

            GetNamesInsideRequest req = new GetNamesInsideRequest("error", GetNamesInsideOutputFormatEnum.CSV) {{
                embed = GetNamesInsideEmbedEnum.ONE;
                featureCategory = "quasi";
                featureClass = "reiciendis";
                featureType = "voluptatibus";
                itemsPerPage = 878194L;
                outputSRS = GetNamesInsideOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_SEVEN;
                outputStyle = GetNamesInsideOutputStyleEnum.DETAIL;
                sortBy = GetNamesInsideSortByEnum.DECISION_DATE;
                startIndex = 55714L;
            }};            

            GetNamesInsideResponse res = sdk.search.getNamesInside(req);

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

            GetNamesNearRequest req = new GetNamesNearRequest("omnis", "voluptate", GetNamesNearOutputFormatEnum.KML) {{
                embed = GetNamesNearEmbedEnum.ZERO;
                featureCategory = "doloremque";
                featureClass = "reprehenderit";
                featureType = "ut";
                itemsPerPage = 979587L;
                outputSRS = GetNamesNearOutputSrsEnum.FOUR_THOUSAND_TWO_HUNDRED_AND_SIXTY_NINE;
                outputStyle = GetNamesNearOutputStyleEnum.SUMMARY;
                sortBy = GetNamesNearSortByEnum.NAME;
                startIndex = 480894L;
            }};            

            GetNamesNearResponse res = sdk.search.getNamesNear(req);

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

            GetNamesNotOfficialSearchRequest req = new GetNamesNotOfficialSearchRequest("dicta", GetNamesNotOfficialSearchOutputFormatEnum.KML) {{
                embed = GetNamesNotOfficialSearchEmbedEnum.ZERO;
                exactSpelling = GetNamesNotOfficialSearchExactSpellingEnum.ONE;
                featureCategory = "commodi";
                featureClass = "repudiandae";
                featureType = "quae";
                itemsPerPage = 216822L;
                outputSRS = GetNamesNotOfficialSearchOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_NINE;
                outputStyle = GetNamesNotOfficialSearchOutputStyleEnum.DETAIL;
                sortBy = GetNamesNotOfficialSearchSortByEnum.FEATURE_TYPE;
                startIndex = 865103L;
            }};            

            GetNamesNotOfficialSearchResponse res = sdk.search.getNamesNotOfficialSearch(req);

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

            GetNamesOfficialSearchRequest req = new GetNamesOfficialSearchRequest("modi", GetNamesOfficialSearchOutputFormatEnum.KML) {{
                embed = GetNamesOfficialSearchEmbedEnum.ONE;
                exactSpelling = GetNamesOfficialSearchExactSpellingEnum.ONE;
                featureCategory = "quasi";
                featureClass = "repudiandae";
                featureType = "sint";
                itemsPerPage = 83112L;
                outputSRS = GetNamesOfficialSearchOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_ELEVEN;
                outputStyle = GetNamesOfficialSearchOutputStyleEnum.SUMMARY;
                sortBy = GetNamesOfficialSearchSortByEnum.NAME;
                startIndex = 9356L;
            }};            

            GetNamesOfficialSearchResponse res = sdk.search.getNamesOfficialSearch(req);

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

            GetNamesSearchRequest req = new GetNamesSearchRequest("est", GetNamesSearchOutputFormatEnum.CSV) {{
                embed = GetNamesSearchEmbedEnum.ZERO;
                exactSpelling = GetNamesSearchExactSpellingEnum.ONE;
                featureCategory = "distinctio";
                featureClass = "quibusdam";
                featureType = "labore";
                itemsPerPage = 264730L;
                outputSRS = GetNamesSearchOutputSrsEnum.FOUR_THOUSAND_TWO_HUNDRED_AND_SIXTY_NINE;
                outputStyle = GetNamesSearchOutputStyleEnum.SUMMARY;
                sortBy = GetNamesSearchSortByEnum.FEATURE_TYPE;
                startIndex = 552822L;
            }};            

            GetNamesSearchResponse res = sdk.search.getNamesSearch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
