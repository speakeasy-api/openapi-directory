# association

## Overview

Retrieve associations between entities or entity and descriptors

### Available Operations

* [getAssociationBySubjectAndAssocType](#getassociationbysubjectandassoctype) - Returns list of matching associations of a given type
* [getAssociationBySubjectAndObjectCategorySearch](#getassociationbysubjectandobjectcategorysearch) - Returns list of matching associations between a given subject and object category
* [getAssociationBySubjectCategorySearch](#getassociationbysubjectcategorysearch) - Returns list of matching associations for a given subject category
* [getAssociationObject](#getassociationobject) - Returns the association with a given identifier
* [getAssociationsBetween](#getassociationsbetween) - Returns associations connecting two entities
* [getAssociationsFrom](#getassociationsfrom) - Returns list of matching associations starting from a given subject (source)
* [getAssociationsTo](#getassociationsto) - Returns list of matching associations pointing to a given object (target)

## getAssociationBySubjectAndAssocType

Returns list of matching associations of a given type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssociationBySubjectAndAssocTypeRequest;
import org.openapis.openapi.models.operations.GetAssociationBySubjectAndAssocTypeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAssociationBySubjectAndAssocTypeRequest req = new GetAssociationBySubjectAndAssocTypeRequest("corrupti") {{
                evidence = "illum";
                excludeAutomaticAssertions = false;
                object = "vel";
                rows = 623564L;
                start = 645894L;
                subject = "suscipit";
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetAssociationBySubjectAndAssocTypeResponse res = sdk.association.getAssociationBySubjectAndAssocType(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssociationBySubjectAndObjectCategorySearch

Returns list of matching associations between a given subject and object category

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssociationBySubjectAndObjectCategorySearchRequest;
import org.openapis.openapi.models.operations.GetAssociationBySubjectAndObjectCategorySearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAssociationBySubjectAndObjectCategorySearchRequest req = new GetAssociationBySubjectAndObjectCategorySearchRequest("iure", "magnam") {{
                evidence = "debitis";
                excludeAutomaticAssertions = false;
                object = "ipsa";
                objectTaxon = "delectus";
                relation = "tempora";
                rows = 383441L;
                start = 477665L;
                subject = "minus";
                subjectTaxon = "placeat";
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetAssociationBySubjectAndObjectCategorySearchResponse res = sdk.association.getAssociationBySubjectAndObjectCategorySearch(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssociationBySubjectCategorySearch

Returns list of matching associations for a given subject category

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssociationBySubjectCategorySearchRequest;
import org.openapis.openapi.models.operations.GetAssociationBySubjectCategorySearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAssociationBySubjectCategorySearchRequest req = new GetAssociationBySubjectCategorySearchRequest("voluptatum") {{
                evidence = "iusto";
                excludeAutomaticAssertions = false;
                objectTaxon = "excepturi";
                relation = "nisi";
                rows = 925597L;
                start = 836079L;
                subjectTaxon = "ab";
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetAssociationBySubjectCategorySearchResponse res = sdk.association.getAssociationBySubjectCategorySearch(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssociationObject

An association connects, at a minimum, two things, designated subject and object,
via some relationship. Associations also include evidence, provenance etc.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssociationObjectRequest;
import org.openapis.openapi.models.operations.GetAssociationObjectResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAssociationObjectRequest req = new GetAssociationObjectRequest("quis");            

            GetAssociationObjectResponse res = sdk.association.getAssociationObject(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssociationsBetween

Given two entities (e.g. a particular gene and a particular disease), if these two entities
are connected (directly or indirectly), then return the association objects describing
the connection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssociationsBetweenRequest;
import org.openapis.openapi.models.operations.GetAssociationsBetweenResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAssociationsBetweenRequest req = new GetAssociationsBetweenRequest("veritatis", "deserunt") {{
                evidence = "perferendis";
                excludeAutomaticAssertions = false;
                rows = 368241L;
                start = 832620L;
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetAssociationsBetweenResponse res = sdk.association.getAssociationsBetween(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssociationsFrom

Returns list of matching associations starting from a given subject (source)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssociationsFromRequest;
import org.openapis.openapi.models.operations.GetAssociationsFromResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAssociationsFromRequest req = new GetAssociationsFromRequest("sapiente") {{
                evidence = "quo";
                excludeAutomaticAssertions = false;
                objectTaxon = "odit";
                relation = "at";
                rows = 870088L;
                start = 978619L;
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetAssociationsFromResponse res = sdk.association.getAssociationsFrom(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssociationsTo

Returns list of matching associations pointing to a given object (target)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssociationsToRequest;
import org.openapis.openapi.models.operations.GetAssociationsToResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAssociationsToRequest req = new GetAssociationsToRequest("molestiae") {{
                evidence = "quod";
                excludeAutomaticAssertions = false;
                rows = 800911L;
                start = 461479L;
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetAssociationsToResponse res = sdk.association.getAssociationsTo(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
