# SDK

## Overview

The Socrata OpenDataNetwork (ODN) REST API exposes public data, often continuosly updated and enhanced, from many thousands of public
government and non profit agencies.

Much of this data originating from independent sources is fused together to create new, and often
powerful, entity level data. The API, in addition to search and autosuggest capabilities for finding datasets,
enables data based comparisons across geographical regions such as states, counties, metropolitan areas,
cities and zip codes using highly vetted data providers such as US Census, BEA, HUD and others. Comparison data
is preformatted for easy and efficient display on a chart, graph or interactive map.

The API also exposes data organized by narrative style questions a human might ask. The questions can
be rapidly found using an autosuggest style index, and then used to directly access all data needed to
thoroughly and authoritatively answer the question. Retrieved data includes time series (temporally aligned),
tabular, map heavy (includes spatial boundaries), and auto generated unstructured descriptive text.

The ODN API does not duplicate API endpoints or services provided by public sector agencies, but rather,
returns context relevant pre-populated REST URLs, when appropriate, so the caller can access data
directly from the source.

The [open source](http://github.com/socrata/odn-backend) API powers [OpenDataNetwork.com](http://OpenDataNetwork.com), an [open source](http://github.com/socrata/opendatanetwork.com)
site; the site highlights myriad uses and provides API badges with contextually relevant API example
REST endpoints and documentation pointers.

Finally, we continuously add new dat sources which appear automatically in the API, so if your favorite data
source is not available, check back soon. You can also join us [HERE](http://www.opendatanetwork.com/join-open-data-network)
and receive updates or let us know which data sources you are most interested in.

## App Tokens

Registering for and including a [Socrata application token](https://dev.socrata.com/docs/app-tokens.html)
is _required_ for the ODN API. They can be passed either using the `app_token` parameter
or the `X-App-Token` HTTP header.

### Available Operations

* [createAMap](#createamap) - Create a map
* [findAllAvailableDataForSomeEntities](#findallavailabledataforsomeentities) - Find all available data for some entities
* [findTheRelativesOfAnEntity](#findtherelativesofanentity) - Find the relatives of an entity
* [getEntities](#getentities) - Get Entities
* [getConstraintPermutationsForEntities](#getconstraintpermutationsforentities) - Get constraint permutations for entities
* [getDatasets](#getdatasets) - Get datasets
* [getQuestions](#getquestions) - Get questions
* [getSuggestions](#getsuggestions) - Get suggestions
* [getValuesForVariables](#getvaluesforvariables) - Get values for variables

## createAMap

Create a map

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAMapRequest;
import org.openapis.openapi.models.operations.CreateAMapResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAMapRequest req = new CreateAMapRequest("nulla", "corrupti") {{
                xAppToken = "illum";
                appToken = "vel";
                constraint = "error";
            }};            

            CreateAMapResponse res = sdk.sdk.createAMap(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findAllAvailableDataForSomeEntities

Find all available data for some entities

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindAllAvailableDataForSomeEntitiesRequest;
import org.openapis.openapi.models.operations.FindAllAvailableDataForSomeEntitiesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindAllAvailableDataForSomeEntitiesRequest req = new FindAllAvailableDataForSomeEntitiesRequest("deserunt") {{
                xAppToken = "suscipit";
                appToken = "iure";
            }};            

            FindAllAvailableDataForSomeEntitiesResponse res = sdk.sdk.findAllAvailableDataForSomeEntities(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findTheRelativesOfAnEntity

Find the relatives of an entity

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindTheRelativesOfAnEntityRelationEnum;
import org.openapis.openapi.models.operations.FindTheRelativesOfAnEntityRequest;
import org.openapis.openapi.models.operations.FindTheRelativesOfAnEntityResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindTheRelativesOfAnEntityRequest req = new FindTheRelativesOfAnEntityRequest("magnam", FindTheRelativesOfAnEntityRelationEnum.PEER) {{
                xAppToken = "ipsa";
                appToken = "delectus";
                limit = 2726.56;
                variableId = "suscipit";
            }};            

            FindTheRelativesOfAnEntityResponse res = sdk.sdk.findTheRelativesOfAnEntity(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEntities

Get Entities

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEntitiesRequest;
import org.openapis.openapi.models.operations.GetEntitiesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEntitiesRequest req = new GetEntitiesRequest() {{
                xAppToken = "molestiae";
                appToken = "minus";
                entityId = "placeat";
                entityName = "voluptatum";
                entityType = "iusto";
            }};            

            GetEntitiesResponse res = sdk.sdk.getEntities(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConstraintPermutationsForEntities

Get constraint permutations for entities

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConstraintPermutationsForEntitiesRequest;
import org.openapis.openapi.models.operations.GetConstraintPermutationsForEntitiesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConstraintPermutationsForEntitiesRequest req = new GetConstraintPermutationsForEntitiesRequest("excepturi", "nisi", "recusandae") {{
                xAppToken = "temporibus";
                appToken = "ab";
            }};            

            GetConstraintPermutationsForEntitiesResponse res = sdk.sdk.getConstraintPermutationsForEntities(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDatasets

Get datasets

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDatasetsRequest;
import org.openapis.openapi.models.operations.GetDatasetsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDatasetsRequest req = new GetDatasetsRequest() {{
                xAppToken = "quis";
                appToken = "veritatis";
                datasetId = "deserunt";
                entityId = "perferendis";
                limit = 3682.41;
                offset = 8326.2;
            }};            

            GetDatasetsResponse res = sdk.sdk.getDatasets(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQuestions

Get questions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuestionsRequest;
import org.openapis.openapi.models.operations.GetQuestionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuestionsRequest req = new GetQuestionsRequest("sapiente") {{
                xAppToken = "quo";
                appToken = "odit";
                limit = 8700.13;
                offset = 8700.88;
            }};            

            GetQuestionsResponse res = sdk.sdk.getQuestions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSuggestions

Get suggestions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSuggestionsRequest;
import org.openapis.openapi.models.operations.GetSuggestionsResponse;
import org.openapis.openapi.models.operations.GetSuggestionsTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSuggestionsRequest req = new GetSuggestionsRequest("maiores", GetSuggestionsTypeEnum.PUBLISHER) {{
                xAppToken = "quod";
                appToken = "quod";
                limit = 4614.79;
                variableId = "totam";
            }};            

            GetSuggestionsResponse res = sdk.sdk.getSuggestions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getValuesForVariables

Get values for variables

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetValuesForVariablesFormatEnum;
import org.openapis.openapi.models.operations.GetValuesForVariablesRequest;
import org.openapis.openapi.models.operations.GetValuesForVariablesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetValuesForVariablesRequest req = new GetValuesForVariablesRequest("porro") {{
                xAppToken = "dolorum";
                appToken = "dicta";
                describe = false;
                entityId = "nam";
                forecast = 6399.21;
                format = GetValuesForVariablesFormatEnum.GOOGLE;
            }};            

            GetValuesForVariablesResponse res = sdk.sdk.getValuesForVariables(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
