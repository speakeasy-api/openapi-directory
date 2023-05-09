# nlpAnnotate

## Overview

annotate text using named entities

### Available Operations

* [getAnnotate](#getannotate) - Annotate a given text using SciGraph annotator
* [getAnnotateEntities](#getannotateentities) - Annotate a given content using SciGraph annotator and get all entities from content
* [postAnnotate](#postannotate) - Annotate a given text using SciGraph annotator
* [postAnnotateEntities](#postannotateentities) - Annotate a given content using SciGraph annotator and get all entities from content

## getAnnotate

Annotate a given text using SciGraph annotator

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAnnotateRequest;
import org.openapis.openapi.models.operations.GetAnnotateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAnnotateRequest req = new GetAnnotateRequest() {{
                content = "nemo";
                excludeCategory = new String[]{{
                    add("eius"),
                    add("aspernatur"),
                    add("ducimus"),
                }};
                includeAbbreviation = false;
                includeAcronym = false;
                includeCategory = new String[]{{
                    add("fuga"),
                }};
                includeNumbers = false;
                longestOnly = false;
                minLength = "laudantium";
            }};            

            GetAnnotateResponse res = sdk.nlpAnnotate.getAnnotate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAnnotateEntities

Annotate a given content using SciGraph annotator and get all entities from content

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAnnotateEntitiesRequest;
import org.openapis.openapi.models.operations.GetAnnotateEntitiesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAnnotateEntitiesRequest req = new GetAnnotateEntitiesRequest() {{
                content = "incidunt";
                excludeCategory = new String[]{{
                    add("rem"),
                }};
                includeAbbreviation = false;
                includeAcronym = false;
                includeCategory = new String[]{{
                    add("dicta"),
                    add("nisi"),
                    add("consequuntur"),
                    add("consectetur"),
                }};
                includeNumbers = false;
                longestOnly = false;
                minLength = "aperiam";
            }};            

            GetAnnotateEntitiesResponse res = sdk.nlpAnnotate.getAnnotateEntities(req);

            if (res.entityAnnotationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAnnotate

Annotate a given text using SciGraph annotator

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAnnotateRequest;
import org.openapis.openapi.models.operations.PostAnnotateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAnnotateRequest req = new PostAnnotateRequest() {{
                content = "cupiditate";
                excludeCategory = new String[]{{
                    add("soluta"),
                    add("alias"),
                    add("omnis"),
                    add("eos"),
                }};
                includeAbbreviation = false;
                includeAcronym = false;
                includeCategory = new String[]{{
                    add("iste"),
                    add("magni"),
                    add("inventore"),
                }};
                includeNumbers = false;
                longestOnly = false;
                minLength = "fuga";
            }};            

            PostAnnotateResponse res = sdk.nlpAnnotate.postAnnotate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAnnotateEntities

Annotate a given content using SciGraph annotator and get all entities from content

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAnnotateEntitiesRequest;
import org.openapis.openapi.models.operations.PostAnnotateEntitiesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAnnotateEntitiesRequest req = new PostAnnotateEntitiesRequest() {{
                content = "accusamus";
                excludeCategory = new String[]{{
                    add("distinctio"),
                    add("omnis"),
                    add("delectus"),
                    add("minima"),
                }};
                includeAbbreviation = false;
                includeAcronym = false;
                includeCategory = new String[]{{
                    add("maxime"),
                    add("magnam"),
                    add("temporibus"),
                }};
                includeNumbers = false;
                longestOnly = false;
                minLength = "quos";
            }};            

            PostAnnotateEntitiesResponse res = sdk.nlpAnnotate.postAnnotateEntities(req);

            if (res.entityAnnotationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
