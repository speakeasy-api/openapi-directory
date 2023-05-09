# sim

## Overview

Perform semantic similarity, ranking, and sufficiency scoring

### Available Operations

* [getAnnotationScore](#getannotationscore) - Get annotation score
* [getSimCompare](#getsimcompare) - Compare a reference profile vs one profiles
* [getSimSearch](#getsimsearch) - Search for phenotypically similar diseases or model genes
* [postAnnotationScore](#postannotationscore) - Get annotation score
* [postSimCompare](#postsimcompare) - Compare a reference profile vs one or more profiles

## getAnnotationScore

Get annotation score

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAnnotationScoreRequest;
import org.openapis.openapi.models.operations.GetAnnotationScoreResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAnnotationScoreRequest req = new GetAnnotationScoreRequest() {{
                absentId = new String[]{{
                    add("labore"),
                    add("veritatis"),
                }};
                id = new String[]{{
                    add("consectetur"),
                    add("vitae"),
                    add("inventore"),
                    add("dolorem"),
                }};
            }};            

            GetAnnotationScoreResponse res = sdk.sim.getAnnotationScore(req);

            if (res.sufficiencyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSimCompare

Compare a reference profile vs one profiles

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSimCompareMetricEnum;
import org.openapis.openapi.models.operations.GetSimCompareRequest;
import org.openapis.openapi.models.operations.GetSimCompareResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSimCompareRequest req = new GetSimCompareRequest() {{
                isFeatureSet = false;
                metric = GetSimCompareMetricEnum.JACCARD;
                queryId = new String[]{{
                    add("iste"),
                }};
                refId = new String[]{{
                    add("nemo"),
                    add("soluta"),
                }};
            }};            

            GetSimCompareResponse res = sdk.sim.getSimCompare(req);

            if (res.simResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSimSearch

Search for phenotypically similar diseases or model genes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSimSearchMetricEnum;
import org.openapis.openapi.models.operations.GetSimSearchRequest;
import org.openapis.openapi.models.operations.GetSimSearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSimSearchRequest req = new GetSimSearchRequest() {{
                id = new String[]{{
                    add("rem"),
                    add("dolorum"),
                    add("odio"),
                }};
                isFeatureSet = false;
                limit = 144691L;
                metric = GetSimSearchMetricEnum.PHENODIGM;
                taxon = "magni";
            }};            

            GetSimSearchResponse res = sdk.sim.getSimSearch(req);

            if (res.simResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAnnotationScore

Get annotation score

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAnnotationScoreResponse;
import org.openapis.openapi.models.shared.Feature;
import org.openapis.openapi.models.shared.SufficiencyPostInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SufficiencyPostInput req = new SufficiencyPostInput() {{
                features = new org.openapis.openapi.models.shared.Feature[]{{
                    add(new Feature() {{
                        id = "11435e13-9dbc-4225-9b1a-bda8c070e108";
                        isPresent = false;
                        label = "dolore";
                        type = "eligendi";
                    }}),
                    add(new Feature() {{
                        id = "b0672d1a-d879-4eeb-9665-b85efbd02bae";
                        isPresent = false;
                        label = "accusantium";
                        type = "expedita";
                    }}),
                }};
                id = "e2d78225-9e3e-4a4b-9197-f92443da7ce5";
            }};            

            PostAnnotationScoreResponse res = sdk.sim.postAnnotationScore(req);

            if (res.sufficiencyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSimCompare

Compare a reference profile vs one or more profiles

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSimCompareResponse;
import org.openapis.openapi.models.shared.CompareInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CompareInput req = new CompareInput() {{
                queryIds = new String[][]{{
                    add(new String[]{{
                        add("voluptatum"),
                        add("cupiditate"),
                        add("minima"),
                    }}),
                }};
                referenceIds = new String[]{{
                    add("enim"),
                    add("neque"),
                    add("in"),
                    add("minus"),
                }};
            }};            

            PostSimCompareResponse res = sdk.sim.postSimCompare(req);

            if (res.simResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
