# bioentity

## Overview

Retrieval of domain entities plus associations

### Available Operations

* [getAnatomyGeneAssociations](#getanatomygeneassociations) - Returns genes associated with a given anatomy
* [~~getAnatomyGeneByTaxonAssociations~~](#getanatomygenebytaxonassociations) - Returns gene IDs for all genes associated with a given anatomy, filtered by taxon :warning: **Deprecated**
* [getCaseDiseaseAssociations](#getcasediseaseassociations) - Returns diseases associated with a case
* [getCaseGenotypeAssociations](#getcasegenotypeassociations) - Returns genotypes associated with a case
* [getCaseModelAssociations](#getcasemodelassociations) - Returns models associated with a case
* [getCasePhenotypeAssociations](#getcasephenotypeassociations) - Returns phenotypes associated with a case
* [getCaseVariantAssociations](#getcasevariantassociations) - Returns variants associated with a case
* [getDiseaseCaseAssociations](#getdiseasecaseassociations) - Returns cases associated with a disease
* [getDiseaseGeneAssociations](#getdiseasegeneassociations) - Returns genes associated with a disease
* [getDiseaseGenotypeAssociations](#getdiseasegenotypeassociations) - Returns genotypes associated with a disease
* [getDiseaseModelAssociations](#getdiseasemodelassociations) - Returns associations to models of the disease
* [~~getDiseaseModelTaxonAssociations~~](#getdiseasemodeltaxonassociations) - Returns associations to models of the disease constrained by taxon :warning: **Deprecated**
* [getDiseasePathwayAssociations](#getdiseasepathwayassociations) - Returns pathways associated with a disease
* [getDiseasePhenotypeAssociations](#getdiseasephenotypeassociations) - Returns phenotypes associated with disease
* [getDiseasePublicationAssociations](#getdiseasepublicationassociations) - Returns publications associated with a disease
* [getDiseaseSubstanceAssociations](#getdiseasesubstanceassociations) - Returns substances associated with a disease
* [getDiseaseVariantAssociations](#getdiseasevariantassociations) - Returns variants associated with a disease
* [getFunctionAssociations](#getfunctionassociations) - Returns annotations associated to a function term
* [getFunctionGeneAssociations](#getfunctiongeneassociations) - Returns genes associated to a GO term
* [getFunctionPublicationAssociations](#getfunctionpublicationassociations) - Returns publications associated to a GO term
* [getFunctionTaxonAssociations](#getfunctiontaxonassociations) - Returns taxons associated to a GO term
* [getGeneAnatomyAssociations](#getgeneanatomyassociations) - Returns anatomical entities associated with a gene
* [getGeneCaseAssociations](#getgenecaseassociations) - Returns cases associated with a gene
* [getGeneDiseaseAssociations](#getgenediseaseassociations) - Returns diseases associated with gene
* [getGeneExpressionAssociations](#getgeneexpressionassociations) - Returns expression events for a gene
* [getGeneFunctionAssociations](#getgenefunctionassociations) - Returns function associations for a gene
* [getGeneGenotypeAssociations](#getgenegenotypeassociations) - Returns genotypes associated with a gene
* [getGeneHomologAssociations](#getgenehomologassociations) - Returns homologs for a gene
* [getGeneInteractions](#getgeneinteractions) - Returns interactions for a gene
* [getGeneModelAssociations](#getgenemodelassociations) - Returns models associated with a gene
* [getGeneOrthologDiseaseAssociations](#getgeneorthologdiseaseassociations) - Return diseases associated with orthologs of a gene
* [getGeneOrthologPhenotypeAssociations](#getgeneorthologphenotypeassociations) - Return phenotypes associated with orthologs for a gene
* [getGenePathwayAssociations](#getgenepathwayassociations) - Returns pathways associated with gene
* [getGenePhenotypeAssociations](#getgenephenotypeassociations) - Returns phenotypes associated with gene
* [getGenePublicationAssociations](#getgenepublicationassociations) - Returns publications associated with a gene
* [getGeneVariantAssociations](#getgenevariantassociations) - Returns variants associated with a gene
* [getGenericAssociations](#getgenericassociations) - Returns associations for an entity regardless of the type
* [getGenericObject](#getgenericobject) - Returns basic info on object of any type
* [getGenericObjectByType](#getgenericobjectbytype) - Return basic info on an object for a given type
* [getGenotypeCaseAssociations](#getgenotypecaseassociations) - Returns cases associated with a genotype
* [getGenotypeDiseaseAssociations](#getgenotypediseaseassociations) - Returns diseases associated with a genotype
* [getGenotypeGeneAssociations](#getgenotypegeneassociations) - Returns genes associated with a genotype
* [getGenotypeGenotypeAssociations](#getgenotypegenotypeassociations) - Returns genotypes-genotype associations
* [getGenotypeModelAssociations](#getgenotypemodelassociations) - Returns models associated with a genotype
* [getGenotypePhenotypeAssociations](#getgenotypephenotypeassociations) - Returns phenotypes associated with a genotype
* [getGenotypePublicationAssociations](#getgenotypepublicationassociations) - Returns publications associated with a genotype
* [getGenotypeVariantAssociations](#getgenotypevariantassociations) - Returns genotypes-variant associations
* [~~getGotermGeneAssociations~~](#getgotermgeneassociations) - Returns associations to GO terms for a gene :warning: **Deprecated**
* [getModelCaseAssociations](#getmodelcaseassociations) - Returns cases associated with a model
* [getModelDiseaseAssociations](#getmodeldiseaseassociations) - Returns diseases associated with a model
* [getModelGeneAssociations](#getmodelgeneassociations) - Returns genes associated with a model
* [getModelGenotypeAssociations](#getmodelgenotypeassociations) - Returns genotypes associated with a model
* [getModelPhenotypeAssociations](#getmodelphenotypeassociations) - Returns phenotypes associated with a model
* [getModelPublicationAssociations](#getmodelpublicationassociations) - Returns publications associated with a model
* [getModelVariantAssociations](#getmodelvariantassociations) - Returns variants associated with a model
* [getPathwayDiseaseAssociations](#getpathwaydiseaseassociations) - Returns diseases associated with a pathway
* [getPathwayGeneAssociations](#getpathwaygeneassociations) - Returns genes associated with a pathway
* [getPathwayPhenotypeAssociations](#getpathwayphenotypeassociations) - Returns phenotypes associated with a pathway
* [getPhenotypeAnatomyAssociations](#getphenotypeanatomyassociations) - Returns anatomical entities associated with a phenotype
* [getPhenotypeCaseAssociations](#getphenotypecaseassociations) - Returns cases associated with a phenotype
* [getPhenotypeDiseaseAssociations](#getphenotypediseaseassociations) - Returns diseases associated with a phenotype
* [getPhenotypeGeneAssociations](#getphenotypegeneassociations) - Returns genes associated with a phenotype
* [~~getPhenotypeGeneByTaxonAssociations~~](#getphenotypegenebytaxonassociations) - Returns gene IDs for all genes associated with a given phenotype, filtered by taxon :warning: **Deprecated**
* [getPhenotypeGenotypeAssociations](#getphenotypegenotypeassociations) - Returns genotypes associated with a phenotype
* [getPhenotypePathwayAssociations](#getphenotypepathwayassociations) - Returns pathways associated with a phenotype
* [getPhenotypePublicationAssociations](#getphenotypepublicationassociations) - Returns publications associated with a phenotype
* [getPhenotypeVariantAssociations](#getphenotypevariantassociations) - Returns variants associated with a phenotype
* [getPublicationDiseaseAssociations](#getpublicationdiseaseassociations) - Returns diseases associated with a publication
* [getPublicationGeneAssociations](#getpublicationgeneassociations) - Returns genes associated with a publication
* [getPublicationGenotypeAssociations](#getpublicationgenotypeassociations) - Returns genotypes associated with a publication
* [getPublicationModelAssociations](#getpublicationmodelassociations) - Returns models associated with a publication
* [getPublicationPhenotypeAssociations](#getpublicationphenotypeassociations) - Returns phenotypes associated with a publication
* [getPublicationVariantAssociations](#getpublicationvariantassociations) - Returns variants associated with a publication
* [getSubstanceParticipantInAssociations](#getsubstanceparticipantinassociations) - Returns associations between an activity and process and the specified substance
* [getSubstanceRoleAssociations](#getsubstanceroleassociations) - Returns associations between given drug and roles
* [getSubstanceTreatsAssociations](#getsubstancetreatsassociations) - Returns substances associated with a disease
* [getVariantCaseAssociations](#getvariantcaseassociations) - Returns cases associated with a variant
* [getVariantDiseaseAssociations](#getvariantdiseaseassociations) - Returns diseases associated with a variant
* [getVariantGeneAssociations](#getvariantgeneassociations) - Returns genes associated with a variant
* [getVariantGenotypeAssociations](#getvariantgenotypeassociations) - Returns genotypes associated with a variant
* [getVariantModelAssociations](#getvariantmodelassociations) - Returns models associated with a variant
* [getVariantPhenotypeAssociations](#getvariantphenotypeassociations) - Returns phenotypes associated with a variant
* [getVariantPublicationAssociations](#getvariantpublicationassociations) - Returns publications associated with a variant

## getAnatomyGeneAssociations

Returns genes associated with a given anatomy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAnatomyGeneAssociationsRequest;
import org.openapis.openapi.models.operations.GetAnatomyGeneAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAnatomyGeneAssociationsRequest req = new GetAnatomyGeneAssociationsRequest("totam") {{
                direct = false;
                directTaxon = false;
                evidence = "porro";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("dicta"),
                    add("nam"),
                    add("officia"),
                }};
                fetchObjects = false;
                q = "occaecati";
                relation = "fugit";
                rows = 537373L;
                slim = new String[]{{
                    add("optio"),
                    add("totam"),
                    add("beatae"),
                    add("commodi"),
                }};
                sort = "molestiae";
                start = 264555L;
                taxon = new String[]{{
                    add("impedit"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetAnatomyGeneAssociationsResponse res = sdk.bioentity.getAnatomyGeneAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getAnatomyGeneByTaxonAssociations~~

For example, + NCBITaxon:10090 (mouse)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAnatomyGeneByTaxonAssociationsRequest;
import org.openapis.openapi.models.operations.GetAnatomyGeneByTaxonAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAnatomyGeneByTaxonAssociationsRequest req = new GetAnatomyGeneByTaxonAssociationsRequest("cum", "esse") {{
                direct = false;
                directTaxon = false;
                evidence = "ipsum";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("aspernatur"),
                    add("perferendis"),
                    add("ad"),
                }};
                fetchObjects = false;
                q = "natus";
                relation = "sed";
                rows = 612096L;
                slim = new String[]{{
                    add("natus"),
                }};
                sort = "laboriosam";
                start = 943749L;
                taxon = new String[]{{
                    add("fuga"),
                    add("in"),
                    add("corporis"),
                    add("iste"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetAnatomyGeneByTaxonAssociationsResponse res = sdk.bioentity.getAnatomyGeneByTaxonAssociations(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCaseDiseaseAssociations

Returns diseases associated with a case

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCaseDiseaseAssociationsRequest;
import org.openapis.openapi.models.operations.GetCaseDiseaseAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCaseDiseaseAssociationsRequest req = new GetCaseDiseaseAssociationsRequest("iure") {{
                direct = false;
                evidence = "saepe";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("architecto"),
                    add("ipsa"),
                    add("reiciendis"),
                }};
                fetchObjects = false;
                rows = 666767L;
                slim = new String[]{{
                    add("laborum"),
                    add("dolores"),
                    add("dolorem"),
                }};
                start = 358152L;
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetCaseDiseaseAssociationsResponse res = sdk.bioentity.getCaseDiseaseAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCaseGenotypeAssociations

Returns genotypes associated with a case

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCaseGenotypeAssociationsRequest;
import org.openapis.openapi.models.operations.GetCaseGenotypeAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCaseGenotypeAssociationsRequest req = new GetCaseGenotypeAssociationsRequest("explicabo") {{
                direct = false;
                evidence = "nobis";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("omnis"),
                    add("nemo"),
                }};
                fetchObjects = false;
                rows = 325047L;
                slim = new String[]{{
                    add("accusantium"),
                    add("iure"),
                    add("culpa"),
                }};
                start = 988374L;
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetCaseGenotypeAssociationsResponse res = sdk.bioentity.getCaseGenotypeAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCaseModelAssociations

Returns models associated with a case

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCaseModelAssociationsRequest;
import org.openapis.openapi.models.operations.GetCaseModelAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCaseModelAssociationsRequest req = new GetCaseModelAssociationsRequest("sapiente") {{
                direct = false;
                evidence = "architecto";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("dolorem"),
                    add("culpa"),
                    add("consequuntur"),
                }};
                fetchObjects = false;
                rows = 995300L;
                slim = new String[]{{
                    add("occaecati"),
                    add("numquam"),
                    add("commodi"),
                }};
                start = 466311L;
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetCaseModelAssociationsResponse res = sdk.bioentity.getCaseModelAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCasePhenotypeAssociations

Returns phenotypes associated with a case

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCasePhenotypeAssociationsRequest;
import org.openapis.openapi.models.operations.GetCasePhenotypeAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCasePhenotypeAssociationsRequest req = new GetCasePhenotypeAssociationsRequest("molestiae") {{
                direct = false;
                evidence = "velit";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("quia"),
                    add("quis"),
                    add("vitae"),
                }};
                fetchObjects = false;
                rows = 674752L;
                slim = new String[]{{
                    add("enim"),
                    add("odit"),
                    add("quo"),
                }};
                start = 196582L;
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetCasePhenotypeAssociationsResponse res = sdk.bioentity.getCasePhenotypeAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCaseVariantAssociations

Returns variants associated with a case

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCaseVariantAssociationsRequest;
import org.openapis.openapi.models.operations.GetCaseVariantAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCaseVariantAssociationsRequest req = new GetCaseVariantAssociationsRequest("tenetur") {{
                direct = false;
                evidence = "ipsam";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("possimus"),
                    add("aut"),
                    add("quasi"),
                }};
                fetchObjects = false;
                rows = 622846L;
                slim = new String[]{{
                    add("laborum"),
                    add("quasi"),
                    add("reiciendis"),
                    add("voluptatibus"),
                }};
                start = 878194L;
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetCaseVariantAssociationsResponse res = sdk.bioentity.getCaseVariantAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDiseaseCaseAssociations

Returns cases associated with a disease

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDiseaseCaseAssociationsRequest;
import org.openapis.openapi.models.operations.GetDiseaseCaseAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDiseaseCaseAssociationsRequest req = new GetDiseaseCaseAssociationsRequest("nihil") {{
                direct = false;
                evidence = "praesentium";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("ipsa"),
                    add("omnis"),
                    add("voluptate"),
                    add("cum"),
                }};
                fetchObjects = false;
                rows = 19987L;
                slim = new String[]{{
                    add("reprehenderit"),
                }};
                start = 282807L;
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetDiseaseCaseAssociationsResponse res = sdk.bioentity.getDiseaseCaseAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDiseaseGeneAssociations

Returns genes associated with a disease

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDiseaseGeneAssociationsAssociationTypeEnum;
import org.openapis.openapi.models.operations.GetDiseaseGeneAssociationsRequest;
import org.openapis.openapi.models.operations.GetDiseaseGeneAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDiseaseGeneAssociationsRequest req = new GetDiseaseGeneAssociationsRequest("maiores") {{
                associationType = GetDiseaseGeneAssociationsAssociationTypeEnum.CAUSAL;
                direct = false;
                directTaxon = false;
                evidence = "corporis";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("iusto"),
                    add("dicta"),
                }};
                fetchObjects = false;
                q = "harum";
                relation = "enim";
                rows = 880476L;
                slim = new String[]{{
                    add("repudiandae"),
                    add("quae"),
                }};
                sort = "ipsum";
                start = 692472L;
                taxon = new String[]{{
                    add("excepturi"),
                    add("pariatur"),
                    add("modi"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetDiseaseGeneAssociationsResponse res = sdk.bioentity.getDiseaseGeneAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDiseaseGenotypeAssociations

Returns genotypes associated with a disease

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDiseaseGenotypeAssociationsRequest;
import org.openapis.openapi.models.operations.GetDiseaseGenotypeAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDiseaseGenotypeAssociationsRequest req = new GetDiseaseGenotypeAssociationsRequest("praesentium") {{
                direct = false;
                directTaxon = false;
                evidence = "rem";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("quasi"),
                    add("repudiandae"),
                    add("sint"),
                    add("veritatis"),
                }};
                fetchObjects = false;
                q = "itaque";
                relation = "incidunt";
                rows = 318569L;
                slim = new String[]{{
                    add("est"),
                }};
                sort = "quibusdam";
                start = 131797L;
                taxon = new String[]{{
                    add("distinctio"),
                    add("quibusdam"),
                    add("labore"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetDiseaseGenotypeAssociationsResponse res = sdk.bioentity.getDiseaseGenotypeAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDiseaseModelAssociations

In the association object returned, the subject will be the disease, and the object will be the model.
The model may be a gene or genetic element.

If the query disease is a general class, the association subject may be to a specific disease.

In some cases the association will be *direct*, for example if a paper asserts a genotype is a model of a disease.

In other cases, the association will be *indirect*, for
example, chaining over orthology. In these cases the chain
will be reflected in the *evidence graph*

* TODO: provide hook into owlsim for dynamic computation of models by similarity

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDiseaseModelAssociationsRequest;
import org.openapis.openapi.models.operations.GetDiseaseModelAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDiseaseModelAssociationsRequest req = new GetDiseaseModelAssociationsRequest("modi") {{
                direct = false;
                directTaxon = false;
                evidence = "qui";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("cupiditate"),
                    add("quos"),
                }};
                fetchObjects = false;
                q = "perferendis";
                relation = "magni";
                rows = 828940L;
                slim = new String[]{{
                    add("alias"),
                    add("fugit"),
                }};
                sort = "dolorum";
                start = 569618L;
                taxon = new String[]{{
                    add("facilis"),
                    add("tempore"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetDiseaseModelAssociationsResponse res = sdk.bioentity.getDiseaseModelAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getDiseaseModelTaxonAssociations~~

See /disease/<id>/models route for full details

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDiseaseModelTaxonAssociationsRequest;
import org.openapis.openapi.models.operations.GetDiseaseModelTaxonAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDiseaseModelTaxonAssociationsRequest req = new GetDiseaseModelTaxonAssociationsRequest("labore", "delectus") {{
                direct = false;
                evidence = "eum";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("eligendi"),
                }};
                fetchObjects = false;
                rows = 576157L;
                slim = new String[]{{
                    add("provident"),
                    add("necessitatibus"),
                }};
                start = 572252L;
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetDiseaseModelTaxonAssociationsResponse res = sdk.bioentity.getDiseaseModelTaxonAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDiseasePathwayAssociations

Returns pathways associated with a disease

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDiseasePathwayAssociationsRequest;
import org.openapis.openapi.models.operations.GetDiseasePathwayAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDiseasePathwayAssociationsRequest req = new GetDiseasePathwayAssociationsRequest("officia") {{
                direct = false;
                directTaxon = false;
                evidence = "dolor";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("a"),
                    add("dolorum"),
                    add("in"),
                    add("in"),
                }};
                fetchObjects = false;
                q = "illum";
                relation = "maiores";
                rows = 699479L;
                slim = new String[]{{
                    add("magnam"),
                }};
                sort = "cumque";
                start = 813798L;
                taxon = new String[]{{
                    add("aliquid"),
                    add("laborum"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetDiseasePathwayAssociationsResponse res = sdk.bioentity.getDiseasePathwayAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDiseasePhenotypeAssociations

Returns phenotypes associated with disease

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDiseasePhenotypeAssociationsRequest;
import org.openapis.openapi.models.operations.GetDiseasePhenotypeAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDiseasePhenotypeAssociationsRequest req = new GetDiseasePhenotypeAssociationsRequest("accusamus") {{
                direct = false;
                directTaxon = false;
                evidence = "non";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("enim"),
                    add("accusamus"),
                    add("delectus"),
                }};
                fetchObjects = false;
                q = "quidem";
                relation = "provident";
                rows = 725255L;
                slim = new String[]{{
                    add("blanditiis"),
                    add("deleniti"),
                    add("sapiente"),
                }};
                sort = "amet";
                start = 643990L;
                taxon = new String[]{{
                    add("vel"),
                    add("natus"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetDiseasePhenotypeAssociationsResponse res = sdk.bioentity.getDiseasePhenotypeAssociations(req);

            if (res.d2PAssociationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDiseasePublicationAssociations

Returns publications associated with a disease

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDiseasePublicationAssociationsRequest;
import org.openapis.openapi.models.operations.GetDiseasePublicationAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDiseasePublicationAssociationsRequest req = new GetDiseasePublicationAssociationsRequest("omnis") {{
                direct = false;
                directTaxon = false;
                evidence = "molestiae";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("nihil"),
                }};
                fetchObjects = false;
                q = "magnam";
                relation = "distinctio";
                rows = 660174L;
                slim = new String[]{{
                    add("labore"),
                    add("suscipit"),
                }};
                sort = "natus";
                start = 749170L;
                taxon = new String[]{{
                    add("vero"),
                    add("aspernatur"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetDiseasePublicationAssociationsResponse res = sdk.bioentity.getDiseasePublicationAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDiseaseSubstanceAssociations

e.g. drugs or small molecules used to treat

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDiseaseSubstanceAssociationsRequest;
import org.openapis.openapi.models.operations.GetDiseaseSubstanceAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDiseaseSubstanceAssociationsRequest req = new GetDiseaseSubstanceAssociationsRequest("architecto") {{
                direct = false;
                evidence = "magnam";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("excepturi"),
                }};
                fetchObjects = false;
                rows = 354047L;
                slim = new String[]{{
                    add("quos"),
                    add("sint"),
                    add("accusantium"),
                }};
                start = 653201L;
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetDiseaseSubstanceAssociationsResponse res = sdk.bioentity.getDiseaseSubstanceAssociations(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDiseaseVariantAssociations

Returns variants associated with a disease

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDiseaseVariantAssociationsRequest;
import org.openapis.openapi.models.operations.GetDiseaseVariantAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDiseaseVariantAssociationsRequest req = new GetDiseaseVariantAssociationsRequest("reiciendis") {{
                direct = false;
                directTaxon = false;
                evidence = "mollitia";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("eum"),
                    add("dolor"),
                }};
                fetchObjects = false;
                q = "necessitatibus";
                relation = "odit";
                rows = 367562L;
                slim = new String[]{{
                    add("iure"),
                }};
                sort = "doloribus";
                start = 891924L;
                taxon = new String[]{{
                    add("maxime"),
                    add("deleniti"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetDiseaseVariantAssociationsResponse res = sdk.bioentity.getDiseaseVariantAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFunctionAssociations

Returns annotations associated to a function term

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFunctionAssociationsRequest;
import org.openapis.openapi.models.operations.GetFunctionAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFunctionAssociationsRequest req = new GetFunctionAssociationsRequest("facilis") {{
                evidence = new String[]{{
                    add("architecto"),
                    add("architecto"),
                }};
                rows = 919483L;
                start = 352312L;
            }};            

            GetFunctionAssociationsResponse res = sdk.bioentity.getFunctionAssociations(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFunctionGeneAssociations

Returns genes associated to a GO term

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFunctionGeneAssociationsRelationshipTypeEnum;
import org.openapis.openapi.models.operations.GetFunctionGeneAssociationsRequest;
import org.openapis.openapi.models.operations.GetFunctionGeneAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFunctionGeneAssociationsRequest req = new GetFunctionGeneAssociationsRequest("expedita") {{
                direct = false;
                directTaxon = false;
                evidence = "nihil";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("quibusdam"),
                    add("sed"),
                    add("saepe"),
                    add("pariatur"),
                }};
                fetchObjects = false;
                q = "accusantium";
                relation = "consequuntur";
                relationshipType = GetFunctionGeneAssociationsRelationshipTypeEnum.INVOLVED_IN_REGULATION_OF;
                rows = 615560L;
                slim = new String[]{{
                    add("sunt"),
                }};
                sort = "quo";
                start = 848009L;
                taxon = new String[]{{
                    add("maxime"),
                    add("ea"),
                    add("excepturi"),
                    add("odit"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetFunctionGeneAssociationsResponse res = sdk.bioentity.getFunctionGeneAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFunctionPublicationAssociations

Returns publications associated to a GO term

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFunctionPublicationAssociationsRequest;
import org.openapis.openapi.models.operations.GetFunctionPublicationAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFunctionPublicationAssociationsRequest req = new GetFunctionPublicationAssociationsRequest("ea") {{
                evidence = new String[]{{
                    add("ab"),
                }};
                rows = 982575L;
                start = 697429L;
            }};            

            GetFunctionPublicationAssociationsResponse res = sdk.bioentity.getFunctionPublicationAssociations(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFunctionTaxonAssociations

Returns taxons associated to a GO term

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFunctionTaxonAssociationsRequest;
import org.openapis.openapi.models.operations.GetFunctionTaxonAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFunctionTaxonAssociationsRequest req = new GetFunctionTaxonAssociationsRequest("ipsam") {{
                evidence = new String[]{{
                    add("autem"),
                    add("nam"),
                }};
                rows = 50588L;
                start = 866383L;
            }};            

            GetFunctionTaxonAssociationsResponse res = sdk.bioentity.getFunctionTaxonAssociations(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGeneAnatomyAssociations

Returns anatomical entities associated with a gene

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGeneAnatomyAssociationsRequest;
import org.openapis.openapi.models.operations.GetGeneAnatomyAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGeneAnatomyAssociationsRequest req = new GetGeneAnatomyAssociationsRequest("nemo") {{
                direct = false;
                directTaxon = false;
                evidence = "voluptatibus";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("fugiat"),
                }};
                fetchObjects = false;
                q = "amet";
                relation = "aut";
                rows = 764912L;
                slim = new String[]{{
                    add("hic"),
                    add("libero"),
                }};
                sort = "nobis";
                start = 171629L;
                taxon = new String[]{{
                    add("totam"),
                    add("dignissimos"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetGeneAnatomyAssociationsResponse res = sdk.bioentity.getGeneAnatomyAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGeneCaseAssociations

Returns cases associated with a gene

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGeneCaseAssociationsRequest;
import org.openapis.openapi.models.operations.GetGeneCaseAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGeneCaseAssociationsRequest req = new GetGeneCaseAssociationsRequest("eaque") {{
                direct = false;
                evidence = "quis";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("eos"),
                }};
                fetchObjects = false;
                rows = 18521L;
                slim = new String[]{{
                    add("minus"),
                }};
                start = 463451L;
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetGeneCaseAssociationsResponse res = sdk.bioentity.getGeneCaseAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGeneDiseaseAssociations

Returns diseases associated with gene

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGeneDiseaseAssociationsAssociationTypeEnum;
import org.openapis.openapi.models.operations.GetGeneDiseaseAssociationsRequest;
import org.openapis.openapi.models.operations.GetGeneDiseaseAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGeneDiseaseAssociationsRequest req = new GetGeneDiseaseAssociationsRequest("dolor") {{
                associationType = GetGeneDiseaseAssociationsAssociationTypeEnum.BOTH;
                direct = false;
                directTaxon = false;
                evidence = "nostrum";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("recusandae"),
                    add("omnis"),
                    add("facilis"),
                    add("perspiciatis"),
                }};
                fetchObjects = false;
                q = "voluptatem";
                relation = "porro";
                rows = 164694L;
                slim = new String[]{{
                    add("error"),
                    add("eaque"),
                    add("occaecati"),
                }};
                sort = "rerum";
                start = 237893L;
                taxon = new String[]{{
                    add("earum"),
                    add("modi"),
                    add("iste"),
                    add("dolorum"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetGeneDiseaseAssociationsResponse res = sdk.bioentity.getGeneDiseaseAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGeneExpressionAssociations

Returns expression events for a gene

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGeneExpressionAssociationsRequest;
import org.openapis.openapi.models.operations.GetGeneExpressionAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGeneExpressionAssociationsRequest req = new GetGeneExpressionAssociationsRequest("deleniti") {{
                direct = false;
                directTaxon = false;
                evidence = "pariatur";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("nobis"),
                    add("libero"),
                    add("delectus"),
                }};
                fetchObjects = false;
                q = "quaerat";
                relation = "quos";
                rows = 398221L;
                slim = new String[]{{
                    add("dolorem"),
                }};
                sort = "dolor";
                start = 186193L;
                taxon = new String[]{{
                    add("hic"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetGeneExpressionAssociationsResponse res = sdk.bioentity.getGeneExpressionAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGeneFunctionAssociations

IMPLEMENTATION DETAILS
----------------------

Note: currently this is implemented as a query to the GO/AmiGO solr instance.
This directly supports IDs such as:

 - ZFIN e.g. ZFIN:ZDB-GENE-050417-357

Note that the AmiGO GOlr natively stores MGI annotations to MGI:MGI:nn. However,
the standard for biolink is MGI:nnnn, so you should use this (will be transparently
mapped to legacy ID)

Additionally, for some species such as Human, GO has the annotation attached to the UniProt ID.
Again, this should be transparently handled; e.g. you can use NCBIGene:6469, and this will be
mapped behind the scenes for querying.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGeneFunctionAssociationsRequest;
import org.openapis.openapi.models.operations.GetGeneFunctionAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGeneFunctionAssociationsRequest req = new GetGeneFunctionAssociationsRequest("excepturi") {{
                direct = false;
                evidence = "cum";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("dignissimos"),
                    add("reiciendis"),
                }};
                fetchObjects = false;
                rows = 227414L;
                slim = new String[]{{
                    add("numquam"),
                    add("veritatis"),
                    add("ipsa"),
                }};
                start = 56418L;
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetGeneFunctionAssociationsResponse res = sdk.bioentity.getGeneFunctionAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGeneGenotypeAssociations

Returns genotypes associated with a gene

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGeneGenotypeAssociationsRequest;
import org.openapis.openapi.models.operations.GetGeneGenotypeAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGeneGenotypeAssociationsRequest req = new GetGeneGenotypeAssociationsRequest("iure") {{
                direct = false;
                directTaxon = false;
                evidence = "odio";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("accusamus"),
                    add("quidem"),
                }};
                fetchObjects = false;
                q = "voluptatibus";
                relation = "voluptas";
                rows = 617658L;
                slim = new String[]{{
                    add("atque"),
                }};
                sort = "sit";
                start = 854614L;
                taxon = new String[]{{
                    add("soluta"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetGeneGenotypeAssociationsResponse res = sdk.bioentity.getGeneGenotypeAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGeneHomologAssociations

Returns homologs for a gene

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGeneHomologAssociationsHomologyTypeEnum;
import org.openapis.openapi.models.operations.GetGeneHomologAssociationsRequest;
import org.openapis.openapi.models.operations.GetGeneHomologAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGeneHomologAssociationsRequest req = new GetGeneHomologAssociationsRequest("dolorum") {{
                direct = false;
                directTaxon = false;
                evidence = "iusto";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("dolorum"),
                    add("deleniti"),
                }};
                fetchObjects = false;
                homologyType = GetGeneHomologAssociationsHomologyTypeEnum.O;
                rows = 896672L;
                slim = new String[]{{
                    add("asperiores"),
                    add("nihil"),
                    add("ipsum"),
                }};
                start = 456015L;
                taxon = new String[]{{
                    add("saepe"),
                    add("eius"),
                    add("aspernatur"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetGeneHomologAssociationsResponse res = sdk.bioentity.getGeneHomologAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGeneInteractions

Returns interactions for a gene

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGeneInteractionsRequest;
import org.openapis.openapi.models.operations.GetGeneInteractionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGeneInteractionsRequest req = new GetGeneInteractionsRequest("perferendis") {{
                direct = false;
                directTaxon = false;
                evidence = "amet";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("accusamus"),
                    add("ad"),
                    add("saepe"),
                    add("suscipit"),
                }};
                fetchObjects = false;
                q = "deserunt";
                relation = "provident";
                rows = 324683L;
                slim = new String[]{{
                    add("totam"),
                    add("similique"),
                    add("alias"),
                    add("at"),
                }};
                sort = "quaerat";
                start = 273542L;
                taxon = new String[]{{
                    add("quod"),
                    add("officiis"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetGeneInteractionsResponse res = sdk.bioentity.getGeneInteractions(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGeneModelAssociations

Returns models associated with a gene

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGeneModelAssociationsRequest;
import org.openapis.openapi.models.operations.GetGeneModelAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGeneModelAssociationsRequest req = new GetGeneModelAssociationsRequest("qui") {{
                direct = false;
                directTaxon = false;
                evidence = "dolorum";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("esse"),
                    add("harum"),
                    add("iusto"),
                    add("ipsum"),
                }};
                fetchObjects = false;
                q = "quisquam";
                relation = "tenetur";
                rows = 229442L;
                slim = new String[]{{
                    add("accusamus"),
                    add("numquam"),
                    add("enim"),
                }};
                sort = "dolorem";
                start = 957451L;
                taxon = new String[]{{
                    add("nihil"),
                    add("sit"),
                    add("expedita"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetGeneModelAssociationsResponse res = sdk.bioentity.getGeneModelAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGeneOrthologDiseaseAssociations

Return diseases associated with orthologs of a gene

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGeneOrthologDiseaseAssociationsRequest;
import org.openapis.openapi.models.operations.GetGeneOrthologDiseaseAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGeneOrthologDiseaseAssociationsRequest req = new GetGeneOrthologDiseaseAssociationsRequest("neque") {{
                direct = false;
                directTaxon = false;
                evidence = "sed";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("libero"),
                    add("voluptas"),
                }};
                fetchObjects = false;
                q = "deserunt";
                relation = "quam";
                rows = 214880L;
                slim = new String[]{{
                    add("qui"),
                    add("cupiditate"),
                }};
                sort = "maxime";
                start = 863856L;
                taxon = new String[]{{
                    add("dicta"),
                    add("laborum"),
                    add("totam"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetGeneOrthologDiseaseAssociationsResponse res = sdk.bioentity.getGeneOrthologDiseaseAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGeneOrthologPhenotypeAssociations

Return phenotypes associated with orthologs for a gene

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGeneOrthologPhenotypeAssociationsRequest;
import org.openapis.openapi.models.operations.GetGeneOrthologPhenotypeAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGeneOrthologPhenotypeAssociationsRequest req = new GetGeneOrthologPhenotypeAssociationsRequest("incidunt") {{
                direct = false;
                directTaxon = false;
                evidence = "aspernatur";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("distinctio"),
                }};
                fetchObjects = false;
                q = "facilis";
                relation = "aliquid";
                rows = 463150L;
                slim = new String[]{{
                    add("temporibus"),
                    add("qui"),
                    add("neque"),
                }};
                sort = "fugit";
                start = 164959L;
                taxon = new String[]{{
                    add("sunt"),
                    add("ullam"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetGeneOrthologPhenotypeAssociationsResponse res = sdk.bioentity.getGeneOrthologPhenotypeAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenePathwayAssociations

Returns pathways associated with gene

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGenePathwayAssociationsRequest;
import org.openapis.openapi.models.operations.GetGenePathwayAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGenePathwayAssociationsRequest req = new GetGenePathwayAssociationsRequest("nam") {{
                direct = false;
                directTaxon = false;
                evidence = "hic";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("cumque"),
                }};
                fetchObjects = false;
                q = "soluta";
                relation = "nobis";
                rows = 92596L;
                slim = new String[]{{
                    add("ipsum"),
                    add("veritatis"),
                    add("nobis"),
                    add("quos"),
                }};
                sort = "tempore";
                start = 584476L;
                taxon = new String[]{{
                    add("delectus"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetGenePathwayAssociationsResponse res = sdk.bioentity.getGenePathwayAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenePhenotypeAssociations

Returns phenotypes associated with gene

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGenePhenotypeAssociationsRequest;
import org.openapis.openapi.models.operations.GetGenePhenotypeAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGenePhenotypeAssociationsRequest req = new GetGenePhenotypeAssociationsRequest("dolorem") {{
                direct = false;
                directTaxon = false;
                evidence = "dolore";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("adipisci"),
                    add("dolorum"),
                }};
                fetchObjects = false;
                q = "architecto";
                relation = "quae";
                rows = 16429L;
                slim = new String[]{{
                    add("itaque"),
                    add("consequatur"),
                    add("est"),
                }};
                sort = "repellendus";
                start = 785153L;
                taxon = new String[]{{
                    add("ut"),
                    add("facilis"),
                    add("cupiditate"),
                    add("qui"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetGenePhenotypeAssociationsResponse res = sdk.bioentity.getGenePhenotypeAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenePublicationAssociations

Returns publications associated with a gene

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGenePublicationAssociationsRequest;
import org.openapis.openapi.models.operations.GetGenePublicationAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGenePublicationAssociationsRequest req = new GetGenePublicationAssociationsRequest("quae") {{
                direct = false;
                directTaxon = false;
                evidence = "laudantium";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("occaecati"),
                    add("voluptatibus"),
                }};
                fetchObjects = false;
                q = "quisquam";
                relation = "vero";
                rows = 606476L;
                slim = new String[]{{
                    add("ipsum"),
                    add("delectus"),
                }};
                sort = "voluptate";
                start = 231701L;
                taxon = new String[]{{
                    add("tenetur"),
                    add("dignissimos"),
                    add("hic"),
                    add("distinctio"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetGenePublicationAssociationsResponse res = sdk.bioentity.getGenePublicationAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGeneVariantAssociations

Returns variants associated with a gene

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGeneVariantAssociationsRequest;
import org.openapis.openapi.models.operations.GetGeneVariantAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGeneVariantAssociationsRequest req = new GetGeneVariantAssociationsRequest("quod") {{
                direct = false;
                directTaxon = false;
                evidence = "odio";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("facilis"),
                    add("vero"),
                    add("ducimus"),
                }};
                fetchObjects = false;
                q = "dolore";
                relation = "quibusdam";
                rows = 848944L;
                slim = new String[]{{
                    add("natus"),
                }};
                sort = "impedit";
                start = 13236L;
                taxon = new String[]{{
                    add("exercitationem"),
                    add("nulla"),
                    add("fugit"),
                    add("porro"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetGeneVariantAssociationsResponse res = sdk.bioentity.getGeneVariantAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenericAssociations

Returns associations for an entity regardless of the type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGenericAssociationsRequest;
import org.openapis.openapi.models.operations.GetGenericAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGenericAssociationsRequest req = new GetGenericAssociationsRequest("maiores") {{
                direct = false;
                directTaxon = false;
                evidence = "doloribus";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("eligendi"),
                    add("ducimus"),
                }};
                fetchObjects = false;
                q = "alias";
                relation = "officia";
                rows = 269479L;
                slim = new String[]{{
                    add("ea"),
                    add("aspernatur"),
                }};
                sort = "vel";
                start = 822118L;
                taxon = new String[]{{
                    add("ratione"),
                    add("ex"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetGenericAssociationsResponse res = sdk.bioentity.getGenericAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenericObject

Returns basic info on object of any type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGenericObjectRequest;
import org.openapis.openapi.models.operations.GetGenericObjectResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGenericObjectRequest req = new GetGenericObjectRequest("laudantium") {{
                direct = false;
                evidence = "dicta";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("maiores"),
                }};
                fetchObjects = false;
                rows = 97844L;
                slim = new String[]{{
                    add("nulla"),
                    add("excepturi"),
                }};
                start = 972920L;
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetGenericObjectResponse res = sdk.bioentity.getGenericObject(req);

            if (res.bioObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenericObjectByType

Return basic info on an object for a given type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGenericObjectByTypeRequest;
import org.openapis.openapi.models.operations.GetGenericObjectByTypeResponse;
import org.openapis.openapi.models.operations.GetGenericObjectByTypeTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGenericObjectByTypeRequest req = new GetGenericObjectByTypeRequest("nostrum", GetGenericObjectByTypeTypeEnum.CASE_) {{
                direct = false;
                distinctCounts = false;
                evidence = "quisquam";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("ea"),
                    add("impedit"),
                    add("corporis"),
                    add("veniam"),
                }};
                fetchObjects = false;
                getAssociationCounts = false;
                rows = 399499L;
                slim = new String[]{{
                    add("magnam"),
                }};
                start = 407241L;
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetGenericObjectByTypeResponse res = sdk.bioentity.getGenericObjectByType(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenotypeCaseAssociations

Returns cases associated with a genotype

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGenotypeCaseAssociationsRequest;
import org.openapis.openapi.models.operations.GetGenotypeCaseAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGenotypeCaseAssociationsRequest req = new GetGenotypeCaseAssociationsRequest("quo") {{
                direct = false;
                evidence = "consectetur";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("aspernatur"),
                    add("minima"),
                    add("eaque"),
                    add("a"),
                }};
                fetchObjects = false;
                rows = 725595L;
                slim = new String[]{{
                    add("aut"),
                }};
                start = 533466L;
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetGenotypeCaseAssociationsResponse res = sdk.bioentity.getGenotypeCaseAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenotypeDiseaseAssociations

Returns diseases associated with a genotype

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGenotypeDiseaseAssociationsRequest;
import org.openapis.openapi.models.operations.GetGenotypeDiseaseAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGenotypeDiseaseAssociationsRequest req = new GetGenotypeDiseaseAssociationsRequest("impedit") {{
                direct = false;
                directTaxon = false;
                evidence = "aliquam";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("accusamus"),
                }};
                fetchObjects = false;
                q = "inventore";
                relation = "non";
                rows = 89603L;
                slim = new String[]{{
                    add("laborum"),
                    add("placeat"),
                    add("velit"),
                }};
                sort = "eum";
                start = 420539L;
                taxon = new String[]{{
                    add("quas"),
                    add("assumenda"),
                    add("nulla"),
                    add("voluptas"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetGenotypeDiseaseAssociationsResponse res = sdk.bioentity.getGenotypeDiseaseAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenotypeGeneAssociations

Returns genes associated with a genotype

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGenotypeGeneAssociationsRequest;
import org.openapis.openapi.models.operations.GetGenotypeGeneAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGenotypeGeneAssociationsRequest req = new GetGenotypeGeneAssociationsRequest("libero") {{
                direct = false;
                directTaxon = false;
                evidence = "quasi";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("numquam"),
                    add("explicabo"),
                }};
                fetchObjects = false;
                q = "provident";
                relation = "ipsa";
                rows = 476477L;
                slim = new String[]{{
                    add("odio"),
                    add("eius"),
                }};
                sort = "esse";
                start = 456141L;
                taxon = new String[]{{
                    add("fuga"),
                    add("reprehenderit"),
                    add("quidem"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetGenotypeGeneAssociationsResponse res = sdk.bioentity.getGenotypeGeneAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenotypeGenotypeAssociations

Genotypes may be related to one another according to the GENO model

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGenotypeGenotypeAssociationsRequest;
import org.openapis.openapi.models.operations.GetGenotypeGenotypeAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGenotypeGenotypeAssociationsRequest req = new GetGenotypeGenotypeAssociationsRequest("fugiat") {{
                direct = false;
                directTaxon = false;
                evidence = "ut";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("suscipit"),
                    add("assumenda"),
                }};
                fetchObjects = false;
                q = "eos";
                relation = "praesentium";
                rows = 788546L;
                slim = new String[]{{
                    add("ipsa"),
                }};
                sort = "id";
                start = 696997L;
                taxon = new String[]{{
                    add("quo"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetGenotypeGenotypeAssociationsResponse res = sdk.bioentity.getGenotypeGenotypeAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenotypeModelAssociations

Returns models associated with a genotype

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGenotypeModelAssociationsRequest;
import org.openapis.openapi.models.operations.GetGenotypeModelAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGenotypeModelAssociationsRequest req = new GetGenotypeModelAssociationsRequest("illum") {{
                direct = false;
                directTaxon = false;
                evidence = "quo";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("eius"),
                    add("eos"),
                    add("voluptas"),
                }};
                fetchObjects = false;
                q = "ab";
                relation = "cupiditate";
                rows = 9688L;
                slim = new String[]{{
                    add("debitis"),
                    add("ipsam"),
                }};
                sort = "aspernatur";
                start = 197054L;
                taxon = new String[]{{
                    add("esse"),
                    add("recusandae"),
                    add("aperiam"),
                    add("distinctio"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetGenotypeModelAssociationsResponse res = sdk.bioentity.getGenotypeModelAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenotypePhenotypeAssociations

Returns phenotypes associated with a genotype

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGenotypePhenotypeAssociationsRequest;
import org.openapis.openapi.models.operations.GetGenotypePhenotypeAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGenotypePhenotypeAssociationsRequest req = new GetGenotypePhenotypeAssociationsRequest("quod") {{
                direct = false;
                directTaxon = false;
                evidence = "dignissimos";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("nihil"),
                }};
                fetchObjects = false;
                q = "totam";
                relation = "accusamus";
                rows = 306810L;
                slim = new String[]{{
                    add("occaecati"),
                    add("commodi"),
                }};
                sort = "sapiente";
                start = 174112L;
                taxon = new String[]{{
                    add("molestiae"),
                    add("accusantium"),
                    add("porro"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetGenotypePhenotypeAssociationsResponse res = sdk.bioentity.getGenotypePhenotypeAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenotypePublicationAssociations

Returns publications associated with a genotype

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGenotypePublicationAssociationsRequest;
import org.openapis.openapi.models.operations.GetGenotypePublicationAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGenotypePublicationAssociationsRequest req = new GetGenotypePublicationAssociationsRequest("eum") {{
                direct = false;
                directTaxon = false;
                evidence = "quas";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("consequuntur"),
                    add("deleniti"),
                    add("fugit"),
                }};
                fetchObjects = false;
                q = "fuga";
                relation = "mollitia";
                rows = 277596L;
                slim = new String[]{{
                    add("explicabo"),
                    add("minima"),
                    add("nisi"),
                }};
                sort = "fugit";
                start = 956406L;
                taxon = new String[]{{
                    add("ratione"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetGenotypePublicationAssociationsResponse res = sdk.bioentity.getGenotypePublicationAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenotypeVariantAssociations

Returns genotypes-variant associations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGenotypeVariantAssociationsRequest;
import org.openapis.openapi.models.operations.GetGenotypeVariantAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGenotypeVariantAssociationsRequest req = new GetGenotypeVariantAssociationsRequest("explicabo") {{
                direct = false;
                directTaxon = false;
                evidence = "saepe";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("atque"),
                    add("et"),
                    add("esse"),
                }};
                fetchObjects = false;
                q = "eveniet";
                relation = "accusamus";
                rows = 82971L;
                slim = new String[]{{
                    add("quod"),
                    add("nam"),
                }};
                sort = "vero";
                start = 399025L;
                taxon = new String[]{{
                    add("saepe"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetGenotypeVariantAssociationsResponse res = sdk.bioentity.getGenotypeVariantAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getGotermGeneAssociations~~

Returns associations to GO terms for a gene

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGotermGeneAssociationsRelationshipTypeEnum;
import org.openapis.openapi.models.operations.GetGotermGeneAssociationsRequest;
import org.openapis.openapi.models.operations.GetGotermGeneAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGotermGeneAssociationsRequest req = new GetGotermGeneAssociationsRequest("vel") {{
                direct = false;
                evidence = "harum";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("rerum"),
                    add("occaecati"),
                }};
                fetchObjects = false;
                relationshipType = GetGotermGeneAssociationsRelationshipTypeEnum.INVOLVED_IN;
                rows = 716244L;
                slim = new String[]{{
                    add("sit"),
                    add("culpa"),
                    add("tempore"),
                    add("adipisci"),
                }};
                start = 766964L;
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetGotermGeneAssociationsResponse res = sdk.bioentity.getGotermGeneAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModelCaseAssociations

Returns cases associated with a model

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetModelCaseAssociationsRequest;
import org.openapis.openapi.models.operations.GetModelCaseAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetModelCaseAssociationsRequest req = new GetModelCaseAssociationsRequest("consequuntur") {{
                direct = false;
                evidence = "consequatur";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("quaerat"),
                    add("sapiente"),
                    add("consectetur"),
                    add("esse"),
                }};
                fetchObjects = false;
                rows = 503427L;
                slim = new String[]{{
                    add("a"),
                    add("nulla"),
                    add("quas"),
                }};
                start = 457223L;
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetModelCaseAssociationsResponse res = sdk.bioentity.getModelCaseAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModelDiseaseAssociations

Returns diseases associated with a model

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetModelDiseaseAssociationsRequest;
import org.openapis.openapi.models.operations.GetModelDiseaseAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetModelDiseaseAssociationsRequest req = new GetModelDiseaseAssociationsRequest("quasi") {{
                direct = false;
                directTaxon = false;
                evidence = "a";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("sint"),
                    add("pariatur"),
                    add("possimus"),
                }};
                fetchObjects = false;
                q = "quia";
                relation = "eveniet";
                rows = 992430L;
                slim = new String[]{{
                    add("veritatis"),
                    add("consequuntur"),
                    add("quasi"),
                    add("similique"),
                }};
                sort = "culpa";
                start = 398434L;
                taxon = new String[]{{
                    add("quae"),
                    add("earum"),
                    add("vel"),
                    add("in"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetModelDiseaseAssociationsResponse res = sdk.bioentity.getModelDiseaseAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModelGeneAssociations

Returns genes associated with a model

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetModelGeneAssociationsRequest;
import org.openapis.openapi.models.operations.GetModelGeneAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetModelGeneAssociationsRequest req = new GetModelGeneAssociationsRequest("eius") {{
                direct = false;
                directTaxon = false;
                evidence = "libero";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("soluta"),
                    add("accusantium"),
                    add("aliquam"),
                    add("sapiente"),
                }};
                fetchObjects = false;
                q = "dicta";
                relation = "ullam";
                rows = 443879L;
                slim = new String[]{{
                    add("nisi"),
                    add("aut"),
                }};
                sort = "voluptatum";
                start = 185232L;
                taxon = new String[]{{
                    add("ex"),
                    add("deleniti"),
                    add("itaque"),
                    add("dolorum"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetModelGeneAssociationsResponse res = sdk.bioentity.getModelGeneAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModelGenotypeAssociations

Returns genotypes associated with a model

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetModelGenotypeAssociationsRequest;
import org.openapis.openapi.models.operations.GetModelGenotypeAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetModelGenotypeAssociationsRequest req = new GetModelGenotypeAssociationsRequest("architecto") {{
                direct = false;
                directTaxon = false;
                evidence = "omnis";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("quasi"),
                    add("at"),
                    add("et"),
                    add("voluptate"),
                }};
                fetchObjects = false;
                q = "ipsa";
                relation = "minima";
                rows = 86532L;
                slim = new String[]{{
                    add("adipisci"),
                }};
                sort = "iste";
                start = 839513L;
                taxon = new String[]{{
                    add("rem"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetModelGenotypeAssociationsResponse res = sdk.bioentity.getModelGenotypeAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModelPhenotypeAssociations

Returns phenotypes associated with a model

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetModelPhenotypeAssociationsRequest;
import org.openapis.openapi.models.operations.GetModelPhenotypeAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetModelPhenotypeAssociationsRequest req = new GetModelPhenotypeAssociationsRequest("aut") {{
                direct = false;
                directTaxon = false;
                evidence = "laudantium";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("mollitia"),
                    add("ab"),
                }};
                fetchObjects = false;
                q = "corrupti";
                relation = "non";
                rows = 32465L;
                slim = new String[]{{
                    add("occaecati"),
                }};
                sort = "numquam";
                start = 771089L;
                taxon = new String[]{{
                    add("voluptas"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetModelPhenotypeAssociationsResponse res = sdk.bioentity.getModelPhenotypeAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModelPublicationAssociations

Returns publications associated with a model

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetModelPublicationAssociationsRequest;
import org.openapis.openapi.models.operations.GetModelPublicationAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetModelPublicationAssociationsRequest req = new GetModelPublicationAssociationsRequest("aut") {{
                direct = false;
                directTaxon = false;
                evidence = "dignissimos";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("maiores"),
                }};
                fetchObjects = false;
                q = "natus";
                relation = "velit";
                rows = 974257L;
                slim = new String[]{{
                    add("asperiores"),
                    add("aperiam"),
                }};
                sort = "ea";
                start = 310067L;
                taxon = new String[]{{
                    add("repellendus"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetModelPublicationAssociationsResponse res = sdk.bioentity.getModelPublicationAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModelVariantAssociations

Returns variants associated with a model

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetModelVariantAssociationsRequest;
import org.openapis.openapi.models.operations.GetModelVariantAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetModelVariantAssociationsRequest req = new GetModelVariantAssociationsRequest("officia") {{
                direct = false;
                directTaxon = false;
                evidence = "maxime";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("officia"),
                    add("asperiores"),
                }};
                fetchObjects = false;
                q = "nemo";
                relation = "quae";
                rows = 312753L;
                slim = new String[]{{
                    add("quod"),
                    add("labore"),
                    add("ab"),
                    add("adipisci"),
                }};
                sort = "fuga";
                start = 662505L;
                taxon = new String[]{{
                    add("velit"),
                    add("culpa"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetModelVariantAssociationsResponse res = sdk.bioentity.getModelVariantAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPathwayDiseaseAssociations

Returns diseases associated with a pathway

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPathwayDiseaseAssociationsRequest;
import org.openapis.openapi.models.operations.GetPathwayDiseaseAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPathwayDiseaseAssociationsRequest req = new GetPathwayDiseaseAssociationsRequest("est") {{
                direct = false;
                directTaxon = false;
                evidence = "recusandae";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("fugiat"),
                    add("vel"),
                    add("ducimus"),
                }};
                fetchObjects = false;
                q = "quos";
                relation = "vel";
                rows = 287051L;
                slim = new String[]{{
                    add("facilis"),
                    add("cum"),
                    add("commodi"),
                    add("in"),
                }};
                sort = "corporis";
                start = 968904L;
                taxon = new String[]{{
                    add("nemo"),
                    add("recusandae"),
                    add("aliquid"),
                    add("aperiam"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetPathwayDiseaseAssociationsResponse res = sdk.bioentity.getPathwayDiseaseAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPathwayGeneAssociations

Returns genes associated with a pathway

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPathwayGeneAssociationsRequest;
import org.openapis.openapi.models.operations.GetPathwayGeneAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPathwayGeneAssociationsRequest req = new GetPathwayGeneAssociationsRequest("cum") {{
                direct = false;
                directTaxon = false;
                evidence = "consectetur";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("exercitationem"),
                    add("earum"),
                }};
                fetchObjects = false;
                q = "facere";
                relation = "numquam";
                rows = 985492L;
                slim = new String[]{{
                    add("reiciendis"),
                    add("quidem"),
                }};
                sort = "saepe";
                start = 897071L;
                taxon = new String[]{{
                    add("sunt"),
                    add("asperiores"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetPathwayGeneAssociationsResponse res = sdk.bioentity.getPathwayGeneAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPathwayPhenotypeAssociations

Returns phenotypes associated with a pathway

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPathwayPhenotypeAssociationsRequest;
import org.openapis.openapi.models.operations.GetPathwayPhenotypeAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPathwayPhenotypeAssociationsRequest req = new GetPathwayPhenotypeAssociationsRequest("adipisci") {{
                direct = false;
                directTaxon = false;
                evidence = "non";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("beatae"),
                }};
                fetchObjects = false;
                q = "dignissimos";
                relation = "a";
                rows = 891523L;
                slim = new String[]{{
                    add("corporis"),
                }};
                sort = "harum";
                start = 385237L;
                taxon = new String[]{{
                    add("voluptates"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetPathwayPhenotypeAssociationsResponse res = sdk.bioentity.getPathwayPhenotypeAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPhenotypeAnatomyAssociations

Example IDs:

 * MP:0008521 abnormal Bowman membrane

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPhenotypeAnatomyAssociationsRequest;
import org.openapis.openapi.models.operations.GetPhenotypeAnatomyAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPhenotypeAnatomyAssociationsRequest req = new GetPhenotypeAnatomyAssociationsRequest("libero") {{
                direct = false;
                evidence = "vitae";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("similique"),
                    add("tempora"),
                    add("aspernatur"),
                    add("voluptas"),
                }};
                fetchObjects = false;
                rows = 374244L;
                slim = new String[]{{
                    add("minima"),
                    add("nobis"),
                }};
                start = 680116L;
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetPhenotypeAnatomyAssociationsResponse res = sdk.bioentity.getPhenotypeAnatomyAssociations(req);

            if (res.namedObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPhenotypeCaseAssociations

Returns cases associated with a phenotype

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPhenotypeCaseAssociationsRequest;
import org.openapis.openapi.models.operations.GetPhenotypeCaseAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPhenotypeCaseAssociationsRequest req = new GetPhenotypeCaseAssociationsRequest("adipisci") {{
                direct = false;
                evidence = "minus";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("blanditiis"),
                }};
                fetchObjects = false;
                rows = 449292L;
                slim = new String[]{{
                    add("aliquam"),
                    add("officiis"),
                }};
                start = 839189L;
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetPhenotypeCaseAssociationsResponse res = sdk.bioentity.getPhenotypeCaseAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPhenotypeDiseaseAssociations

Returns diseases associated with a phenotype

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPhenotypeDiseaseAssociationsRequest;
import org.openapis.openapi.models.operations.GetPhenotypeDiseaseAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPhenotypeDiseaseAssociationsRequest req = new GetPhenotypeDiseaseAssociationsRequest("ullam") {{
                direct = false;
                directTaxon = false;
                evidence = "adipisci";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("blanditiis"),
                    add("quas"),
                    add("hic"),
                }};
                fetchObjects = false;
                q = "nesciunt";
                relation = "culpa";
                rows = 548519L;
                slim = new String[]{{
                    add("totam"),
                    add("hic"),
                    add("exercitationem"),
                    add("nobis"),
                }};
                sort = "sit";
                start = 699575L;
                taxon = new String[]{{
                    add("reiciendis"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetPhenotypeDiseaseAssociationsResponse res = sdk.bioentity.getPhenotypeDiseaseAssociations(req);

            if (res.d2PAssociationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPhenotypeGeneAssociations

Returns genes associated with a phenotype

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPhenotypeGeneAssociationsRequest;
import org.openapis.openapi.models.operations.GetPhenotypeGeneAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPhenotypeGeneAssociationsRequest req = new GetPhenotypeGeneAssociationsRequest("explicabo") {{
                direct = false;
                directTaxon = false;
                evidence = "asperiores";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("voluptate"),
                    add("expedita"),
                    add("ab"),
                }};
                fetchObjects = false;
                q = "iste";
                relation = "dolore";
                rows = 671907L;
                slim = new String[]{{
                    add("in"),
                }};
                sort = "commodi";
                start = 696077L;
                taxon = new String[]{{
                    add("voluptas"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetPhenotypeGeneAssociationsResponse res = sdk.bioentity.getPhenotypeGeneAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getPhenotypeGeneByTaxonAssociations~~

For example, MP:0001569 + NCBITaxon:10090 (mouse)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPhenotypeGeneByTaxonAssociationsRequest;
import org.openapis.openapi.models.operations.GetPhenotypeGeneByTaxonAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPhenotypeGeneByTaxonAssociationsRequest req = new GetPhenotypeGeneByTaxonAssociationsRequest("unde", "architecto") {{
                direct = false;
                evidence = "suscipit";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("debitis"),
                    add("illo"),
                    add("reiciendis"),
                    add("perferendis"),
                }};
                fetchObjects = false;
                rows = 546885L;
                slim = new String[]{{
                    add("incidunt"),
                    add("sed"),
                    add("provident"),
                    add("eius"),
                }};
                start = 896762L;
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetPhenotypeGeneByTaxonAssociationsResponse res = sdk.bioentity.getPhenotypeGeneByTaxonAssociations(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPhenotypeGenotypeAssociations

Returns genotypes associated with a phenotype

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPhenotypeGenotypeAssociationsRequest;
import org.openapis.openapi.models.operations.GetPhenotypeGenotypeAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPhenotypeGenotypeAssociationsRequest req = new GetPhenotypeGenotypeAssociationsRequest("ipsum") {{
                direct = false;
                directTaxon = false;
                evidence = "ea";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("quos"),
                    add("voluptatibus"),
                    add("tempora"),
                }};
                fetchObjects = false;
                q = "tempora";
                relation = "voluptate";
                rows = 970076L;
                slim = new String[]{{
                    add("sit"),
                    add("non"),
                }};
                sort = "officiis";
                start = 505866L;
                taxon = new String[]{{
                    add("quaerat"),
                    add("incidunt"),
                    add("ipsam"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetPhenotypeGenotypeAssociationsResponse res = sdk.bioentity.getPhenotypeGenotypeAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPhenotypePathwayAssociations

Returns pathways associated with a phenotype

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPhenotypePathwayAssociationsRequest;
import org.openapis.openapi.models.operations.GetPhenotypePathwayAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPhenotypePathwayAssociationsRequest req = new GetPhenotypePathwayAssociationsRequest("debitis") {{
                direct = false;
                directTaxon = false;
                evidence = "rem";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("nobis"),
                }};
                fetchObjects = false;
                q = "error";
                relation = "veniam";
                rows = 329543L;
                slim = new String[]{{
                    add("reiciendis"),
                    add("nulla"),
                    add("magni"),
                    add("aperiam"),
                }};
                sort = "saepe";
                start = 253642L;
                taxon = new String[]{{
                    add("in"),
                    add("officiis"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetPhenotypePathwayAssociationsResponse res = sdk.bioentity.getPhenotypePathwayAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPhenotypePublicationAssociations

Returns publications associated with a phenotype

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPhenotypePublicationAssociationsRequest;
import org.openapis.openapi.models.operations.GetPhenotypePublicationAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPhenotypePublicationAssociationsRequest req = new GetPhenotypePublicationAssociationsRequest("beatae") {{
                direct = false;
                directTaxon = false;
                evidence = "laudantium";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("praesentium"),
                    add("cum"),
                }};
                fetchObjects = false;
                q = "laboriosam";
                relation = "dolorum";
                rows = 530089L;
                slim = new String[]{{
                    add("hic"),
                    add("expedita"),
                    add("debitis"),
                }};
                sort = "neque";
                start = 677115L;
                taxon = new String[]{{
                    add("officia"),
                    add("dolorum"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetPhenotypePublicationAssociationsResponse res = sdk.bioentity.getPhenotypePublicationAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPhenotypeVariantAssociations

Returns variants associated with a phenotype

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPhenotypeVariantAssociationsRequest;
import org.openapis.openapi.models.operations.GetPhenotypeVariantAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPhenotypeVariantAssociationsRequest req = new GetPhenotypeVariantAssociationsRequest("corrupti") {{
                direct = false;
                directTaxon = false;
                evidence = "accusamus";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("atque"),
                    add("fugit"),
                }};
                fetchObjects = false;
                q = "ut";
                relation = "fugiat";
                rows = 30235L;
                slim = new String[]{{
                    add("expedita"),
                    add("magnam"),
                    add("consequatur"),
                }};
                sort = "esse";
                start = 372679L;
                taxon = new String[]{{
                    add("voluptatum"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetPhenotypeVariantAssociationsResponse res = sdk.bioentity.getPhenotypeVariantAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPublicationDiseaseAssociations

Returns diseases associated with a publication

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPublicationDiseaseAssociationsRequest;
import org.openapis.openapi.models.operations.GetPublicationDiseaseAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPublicationDiseaseAssociationsRequest req = new GetPublicationDiseaseAssociationsRequest("quas") {{
                direct = false;
                directTaxon = false;
                evidence = "repudiandae";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("et"),
                    add("blanditiis"),
                }};
                fetchObjects = false;
                q = "ex";
                relation = "sed";
                rows = 24313L;
                slim = new String[]{{
                    add("nostrum"),
                    add("saepe"),
                }};
                sort = "error";
                start = 8511L;
                taxon = new String[]{{
                    add("reiciendis"),
                    add("dolorem"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetPublicationDiseaseAssociationsResponse res = sdk.bioentity.getPublicationDiseaseAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPublicationGeneAssociations

Returns genes associated with a publication

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPublicationGeneAssociationsRequest;
import org.openapis.openapi.models.operations.GetPublicationGeneAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPublicationGeneAssociationsRequest req = new GetPublicationGeneAssociationsRequest("harum") {{
                direct = false;
                directTaxon = false;
                evidence = "dicta";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("occaecati"),
                }};
                fetchObjects = false;
                q = "labore";
                relation = "quidem";
                rows = 539074L;
                slim = new String[]{{
                    add("nam"),
                    add("tenetur"),
                    add("laboriosam"),
                }};
                sort = "alias";
                start = 227084L;
                taxon = new String[]{{
                    add("voluptate"),
                    add("unde"),
                    add("reiciendis"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetPublicationGeneAssociationsResponse res = sdk.bioentity.getPublicationGeneAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPublicationGenotypeAssociations

Returns genotypes associated with a publication

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPublicationGenotypeAssociationsRequest;
import org.openapis.openapi.models.operations.GetPublicationGenotypeAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPublicationGenotypeAssociationsRequest req = new GetPublicationGenotypeAssociationsRequest("provident") {{
                direct = false;
                directTaxon = false;
                evidence = "repellendus";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("voluptates"),
                    add("perferendis"),
                    add("est"),
                    add("quidem"),
                }};
                fetchObjects = false;
                q = "reprehenderit";
                relation = "facere";
                rows = 685092L;
                slim = new String[]{{
                    add("mollitia"),
                    add("veniam"),
                    add("voluptatem"),
                }};
                sort = "quisquam";
                start = 919532L;
                taxon = new String[]{{
                    add("atque"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetPublicationGenotypeAssociationsResponse res = sdk.bioentity.getPublicationGenotypeAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPublicationModelAssociations

Returns models associated with a publication

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPublicationModelAssociationsRequest;
import org.openapis.openapi.models.operations.GetPublicationModelAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPublicationModelAssociationsRequest req = new GetPublicationModelAssociationsRequest("reprehenderit") {{
                direct = false;
                directTaxon = false;
                evidence = "asperiores";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("suscipit"),
                    add("quidem"),
                    add("maxime"),
                }};
                fetchObjects = false;
                q = "et";
                relation = "esse";
                rows = 227759L;
                slim = new String[]{{
                    add("ea"),
                    add("atque"),
                    add("error"),
                    add("officiis"),
                }};
                sort = "officiis";
                start = 880107L;
                taxon = new String[]{{
                    add("minima"),
                    add("aspernatur"),
                    add("ex"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetPublicationModelAssociationsResponse res = sdk.bioentity.getPublicationModelAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPublicationPhenotypeAssociations

Returns phenotypes associated with a publication

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPublicationPhenotypeAssociationsRequest;
import org.openapis.openapi.models.operations.GetPublicationPhenotypeAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPublicationPhenotypeAssociationsRequest req = new GetPublicationPhenotypeAssociationsRequest("maiores") {{
                direct = false;
                directTaxon = false;
                evidence = "corrupti";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("error"),
                    add("blanditiis"),
                    add("suscipit"),
                    add("repudiandae"),
                }};
                fetchObjects = false;
                q = "atque";
                relation = "atque";
                rows = 120919L;
                slim = new String[]{{
                    add("dolorum"),
                    add("repellendus"),
                    add("labore"),
                    add("reiciendis"),
                }};
                sort = "doloremque";
                start = 919783L;
                taxon = new String[]{{
                    add("accusantium"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetPublicationPhenotypeAssociationsResponse res = sdk.bioentity.getPublicationPhenotypeAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPublicationVariantAssociations

Returns variants associated with a publication

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPublicationVariantAssociationsRequest;
import org.openapis.openapi.models.operations.GetPublicationVariantAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPublicationVariantAssociationsRequest req = new GetPublicationVariantAssociationsRequest("beatae") {{
                direct = false;
                directTaxon = false;
                evidence = "dolores";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("laboriosam"),
                    add("velit"),
                }};
                fetchObjects = false;
                q = "a";
                relation = "molestias";
                rows = 300029L;
                slim = new String[]{{
                    add("consequuntur"),
                    add("occaecati"),
                    add("officiis"),
                    add("perspiciatis"),
                }};
                sort = "in";
                start = 238043L;
                taxon = new String[]{{
                    add("occaecati"),
                    add("consequuntur"),
                    add("fugit"),
                    add("id"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetPublicationVariantAssociationsResponse res = sdk.bioentity.getPublicationVariantAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubstanceParticipantInAssociations

Examples relationships:

 * substance is a metabolite of a process
 * substance is synthesized by a process
 * substance is modified by an activity
 * substance elicits a response program/pathway
 * substance is transported by activity or pathway

For example, CHEBI:40036 (amitrole)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubstanceParticipantInAssociationsRequest;
import org.openapis.openapi.models.operations.GetSubstanceParticipantInAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSubstanceParticipantInAssociationsRequest req = new GetSubstanceParticipantInAssociationsRequest("quis") {{
                direct = false;
                evidence = "reprehenderit";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("illo"),
                    add("corporis"),
                    add("quidem"),
                }};
                fetchObjects = false;
                rows = 910994L;
                slim = new String[]{{
                    add("vero"),
                }};
                start = 39615L;
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetSubstanceParticipantInAssociationsResponse res = sdk.bioentity.getSubstanceParticipantInAssociations(req);

            if (res.associations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubstanceRoleAssociations

Roles may be human-oriented (e.g. pesticide) or molecular (e.g. enzyme inhibitor)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubstanceRoleAssociationsRequest;
import org.openapis.openapi.models.operations.GetSubstanceRoleAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSubstanceRoleAssociationsRequest req = new GetSubstanceRoleAssociationsRequest("iure") {{
                direct = false;
                evidence = "ipsa";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("quae"),
                    add("molestiae"),
                    add("eveniet"),
                }};
                fetchObjects = false;
                rows = 184362L;
                slim = new String[]{{
                    add("iure"),
                    add("necessitatibus"),
                    add("ratione"),
                }};
                start = 672582L;
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetSubstanceRoleAssociationsResponse res = sdk.bioentity.getSubstanceRoleAssociations(req);

            if (res.associations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubstanceTreatsAssociations

e.g. drugs or small molecules used to treat

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubstanceTreatsAssociationsRequest;
import org.openapis.openapi.models.operations.GetSubstanceTreatsAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSubstanceTreatsAssociationsRequest req = new GetSubstanceTreatsAssociationsRequest("distinctio") {{
                direct = false;
                evidence = "voluptatum";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("aliquam"),
                    add("ad"),
                    add("repellat"),
                }};
                fetchObjects = false;
                rows = 3099L;
                slim = new String[]{{
                    add("perspiciatis"),
                    add("nihil"),
                }};
                start = 649078L;
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetSubstanceTreatsAssociationsResponse res = sdk.bioentity.getSubstanceTreatsAssociations(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVariantCaseAssociations

Returns cases associated with a variant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVariantCaseAssociationsRequest;
import org.openapis.openapi.models.operations.GetVariantCaseAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVariantCaseAssociationsRequest req = new GetVariantCaseAssociationsRequest("voluptas") {{
                direct = false;
                evidence = "alias";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("reiciendis"),
                    add("dolores"),
                    add("id"),
                    add("minima"),
                }};
                fetchObjects = false;
                rows = 293144L;
                slim = new String[]{{
                    add("nesciunt"),
                    add("quae"),
                    add("recusandae"),
                }};
                start = 607249L;
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetVariantCaseAssociationsResponse res = sdk.bioentity.getVariantCaseAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVariantDiseaseAssociations

Returns diseases associated with a variant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVariantDiseaseAssociationsRequest;
import org.openapis.openapi.models.operations.GetVariantDiseaseAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVariantDiseaseAssociationsRequest req = new GetVariantDiseaseAssociationsRequest("quaerat") {{
                direct = false;
                directTaxon = false;
                evidence = "molestiae";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("ut"),
                    add("culpa"),
                }};
                fetchObjects = false;
                q = "adipisci";
                relation = "debitis";
                rows = 514513L;
                slim = new String[]{{
                    add("nemo"),
                    add("recusandae"),
                }};
                sort = "esse";
                start = 592081L;
                taxon = new String[]{{
                    add("eum"),
                    add("reiciendis"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetVariantDiseaseAssociationsResponse res = sdk.bioentity.getVariantDiseaseAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVariantGeneAssociations

Returns genes associated with a variant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVariantGeneAssociationsRequest;
import org.openapis.openapi.models.operations.GetVariantGeneAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVariantGeneAssociationsRequest req = new GetVariantGeneAssociationsRequest("provident") {{
                direct = false;
                directTaxon = false;
                evidence = "aspernatur";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("quasi"),
                    add("animi"),
                }};
                fetchObjects = false;
                q = "nostrum";
                relation = "mollitia";
                rows = 591027L;
                slim = new String[]{{
                    add("animi"),
                    add("ex"),
                    add("aliquid"),
                    add("accusantium"),
                }};
                sort = "repellat";
                start = 984632L;
                taxon = new String[]{{
                    add("in"),
                    add("nam"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetVariantGeneAssociationsResponse res = sdk.bioentity.getVariantGeneAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVariantGenotypeAssociations

Returns genotypes associated with a variant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVariantGenotypeAssociationsRequest;
import org.openapis.openapi.models.operations.GetVariantGenotypeAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVariantGenotypeAssociationsRequest req = new GetVariantGenotypeAssociationsRequest("earum") {{
                direct = false;
                directTaxon = false;
                evidence = "officia";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("placeat"),
                    add("modi"),
                    add("voluptatibus"),
                }};
                fetchObjects = false;
                q = "molestias";
                relation = "officiis";
                rows = 956933L;
                slim = new String[]{{
                    add("vitae"),
                    add("rerum"),
                    add("tempora"),
                    add("quis"),
                }};
                sort = "inventore";
                start = 147685L;
                taxon = new String[]{{
                    add("quae"),
                    add("perferendis"),
                    add("velit"),
                    add("aspernatur"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetVariantGenotypeAssociationsResponse res = sdk.bioentity.getVariantGenotypeAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVariantModelAssociations

Returns models associated with a variant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVariantModelAssociationsRequest;
import org.openapis.openapi.models.operations.GetVariantModelAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVariantModelAssociationsRequest req = new GetVariantModelAssociationsRequest("eum") {{
                direct = false;
                evidence = "eius";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("at"),
                    add("impedit"),
                    add("eos"),
                }};
                fetchObjects = false;
                rows = 958741L;
                slim = new String[]{{
                    add("dicta"),
                    add("minima"),
                }};
                start = 107004L;
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetVariantModelAssociationsResponse res = sdk.bioentity.getVariantModelAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVariantPhenotypeAssociations

Returns phenotypes associated with a variant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVariantPhenotypeAssociationsRequest;
import org.openapis.openapi.models.operations.GetVariantPhenotypeAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVariantPhenotypeAssociationsRequest req = new GetVariantPhenotypeAssociationsRequest("cupiditate") {{
                direct = false;
                directTaxon = false;
                evidence = "provident";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("soluta"),
                    add("hic"),
                    add("illum"),
                    add("eaque"),
                }};
                fetchObjects = false;
                q = "earum";
                relation = "perspiciatis";
                rows = 983427L;
                slim = new String[]{{
                    add("aliquid"),
                    add("porro"),
                    add("suscipit"),
                    add("dolorem"),
                }};
                sort = "fugit";
                start = 764995L;
                taxon = new String[]{{
                    add("ratione"),
                    add("animi"),
                    add("necessitatibus"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetVariantPhenotypeAssociationsResponse res = sdk.bioentity.getVariantPhenotypeAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVariantPublicationAssociations

Returns publications associated with a variant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVariantPublicationAssociationsRequest;
import org.openapis.openapi.models.operations.GetVariantPublicationAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVariantPublicationAssociationsRequest req = new GetVariantPublicationAssociationsRequest("nulla") {{
                direct = false;
                directTaxon = false;
                evidence = "consequatur";
                excludeAutomaticAssertions = false;
                facet = false;
                facetFields = new String[]{{
                    add("et"),
                }};
                fetchObjects = false;
                q = "ducimus";
                relation = "natus";
                rows = 581082L;
                slim = new String[]{{
                    add("adipisci"),
                    add("quasi"),
                }};
                sort = "magni";
                start = 984934L;
                taxon = new String[]{{
                    add("necessitatibus"),
                    add("ipsa"),
                    add("tempora"),
                    add("nihil"),
                }};
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetVariantPublicationAssociationsResponse res = sdk.bioentity.getVariantPublicationAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
