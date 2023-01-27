# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.ContentwarehouseProjectsLocationsDocumentSchemasCreateRequest{
        Security: operations.ContentwarehouseProjectsLocationsDocumentSchemasCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ContentwarehouseProjectsLocationsDocumentSchemasCreatePathParams{
            Parent: "sit",
        },
        QueryParams: operations.ContentwarehouseProjectsLocationsDocumentSchemasCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.GoogleCloudContentwarehouseV1DocumentSchemaInput{
            Description: "dicta",
            DisplayName: "debitis",
            DocumentIsFolder: true,
            Name: "et",
            PropertyDefinitions: []shared.GoogleCloudContentwarehouseV1PropertyDefinition{
                shared.GoogleCloudContentwarehouseV1PropertyDefinition{
                    DateTimeTypeOptions: map[string]interface{}{
                        "et": "voluptate",
                        "iste": "vitae",
                        "totam": "dolores",
                    },
                    DisplayName: "illum",
                    EnumTypeOptions: &shared.GoogleCloudContentwarehouseV1EnumTypeOptions{
                        PossibleValues: []string{
                            "vel",
                        },
                        ValidationCheckDisabled: false,
                    },
                    FloatTypeOptions: map[string]interface{}{
                        "id": "aspernatur",
                        "accusantium": "totam",
                    },
                    IntegerTypeOptions: map[string]interface{}{
                        "quis": "est",
                        "aut": "odit",
                    },
                    IsFilterable: true,
                    IsMetadata: false,
                    IsRepeatable: true,
                    IsRequired: false,
                    IsSearchable: true,
                    MapTypeOptions: map[string]interface{}{
                        "officiis": "autem",
                        "consectetur": "nobis",
                        "odio": "qui",
                    },
                    Name: "recusandae",
                    PropertyTypeOptions: &shared.GoogleCloudContentwarehouseV1PropertyTypeOptions{
                        PropertyDefinitions: []shared.GoogleCloudContentwarehouseV1PropertyDefinition{
                            shared.GoogleCloudContentwarehouseV1PropertyDefinition{
                            
                            },
                            shared.GoogleCloudContentwarehouseV1PropertyDefinition{
                            
                            },
                        },
                    },
                    RetrievalImportance: "LOW",
                    TextTypeOptions: map[string]interface{}{
                        "modi": "sint",
                        "inventore": "ut",
                    },
                    TimestampTypeOptions: map[string]interface{}{
                        "aut": "reprehenderit",
                        "tempore": "maiores",
                        "incidunt": "dolor",
                    },
                },
                shared.GoogleCloudContentwarehouseV1PropertyDefinition{
                    DateTimeTypeOptions: map[string]interface{}{
                        "veritatis": "in",
                        "et": "omnis",
                        "ipsum": "ex",
                    },
                    DisplayName: "dolores",
                    EnumTypeOptions: &shared.GoogleCloudContentwarehouseV1EnumTypeOptions{
                        PossibleValues: []string{
                            "vel",
                        },
                        ValidationCheckDisabled: true,
                    },
                    FloatTypeOptions: map[string]interface{}{
                        "voluptas": "quam",
                        "reprehenderit": "qui",
                    },
                    IntegerTypeOptions: map[string]interface{}{
                        "unde": "in",
                    },
                    IsFilterable: false,
                    IsMetadata: true,
                    IsRepeatable: false,
                    IsRequired: false,
                    IsSearchable: false,
                    MapTypeOptions: map[string]interface{}{
                        "ullam": "et",
                    },
                    Name: "accusantium",
                    PropertyTypeOptions: &shared.GoogleCloudContentwarehouseV1PropertyTypeOptions{
                        PropertyDefinitions: []shared.GoogleCloudContentwarehouseV1PropertyDefinition{
                            shared.GoogleCloudContentwarehouseV1PropertyDefinition{
                            
                            },
                            shared.GoogleCloudContentwarehouseV1PropertyDefinition{
                            
                            },
                        },
                    },
                    RetrievalImportance: "LOW",
                    TextTypeOptions: map[string]interface{}{
                        "velit": "cumque",
                    },
                    TimestampTypeOptions: map[string]interface{}{
                        "sunt": "voluptates",
                    },
                },
                shared.GoogleCloudContentwarehouseV1PropertyDefinition{
                    DateTimeTypeOptions: map[string]interface{}{
                        "et": "optio",
                        "qui": "earum",
                        "illo": "omnis",
                    },
                    DisplayName: "ut",
                    EnumTypeOptions: &shared.GoogleCloudContentwarehouseV1EnumTypeOptions{
                        PossibleValues: []string{
                            "dolor",
                            "commodi",
                            "error",
                        },
                        ValidationCheckDisabled: false,
                    },
                    FloatTypeOptions: map[string]interface{}{
                        "nostrum": "ut",
                    },
                    IntegerTypeOptions: map[string]interface{}{
                        "sed": "a",
                        "soluta": "aut",
                        "quas": "consequuntur",
                    },
                    IsFilterable: false,
                    IsMetadata: true,
                    IsRepeatable: true,
                    IsRequired: false,
                    IsSearchable: false,
                    MapTypeOptions: map[string]interface{}{
                        "atque": "ratione",
                        "quisquam": "explicabo",
                    },
                    Name: "ea",
                    PropertyTypeOptions: &shared.GoogleCloudContentwarehouseV1PropertyTypeOptions{
                        PropertyDefinitions: []shared.GoogleCloudContentwarehouseV1PropertyDefinition{
                            shared.GoogleCloudContentwarehouseV1PropertyDefinition{
                            
                            },
                        },
                    },
                    RetrievalImportance: "HIGH",
                    TextTypeOptions: map[string]interface{}{
                        "et": "rerum",
                        "reiciendis": "quis",
                    },
                    TimestampTypeOptions: map[string]interface{}{
                        "minima": "necessitatibus",
                        "est": "quis",
                    },
                },
            },
        },
    }
    
    res, err := s.Projects.ContentwarehouseProjectsLocationsDocumentSchemasCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudContentwarehouseV1DocumentSchema != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `ContentwarehouseProjectsLocationsDocumentSchemasCreate` - Creates a document schema.
* `ContentwarehouseProjectsLocationsDocumentSchemasList` - Lists document schemas.
* `ContentwarehouseProjectsLocationsDocumentsCreate` - Creates a document.
* `ContentwarehouseProjectsLocationsDocumentsDocumentLinksCreate` - Create a link between a source document and a target document.
* `ContentwarehouseProjectsLocationsDocumentsFetchACL` - Gets the access control policy for a resource. Returns NOT_FOUND error if the resource does not exist. Returns an empty policy if the resource exists but does not have a policy set.
* `ContentwarehouseProjectsLocationsDocumentsLinkedSources` - Return all source document-links from the document.
* `ContentwarehouseProjectsLocationsDocumentsLinkedTargets` - Return all target document-links from the document.
* `ContentwarehouseProjectsLocationsDocumentsReferenceIDDelete` - Deletes a document. Returns NOT_FOUND if the document does not exist.
* `ContentwarehouseProjectsLocationsDocumentsReferenceIDGet` - Gets a document. Returns NOT_FOUND if the document does not exist.
* `ContentwarehouseProjectsLocationsDocumentsSearch` - Searches for documents using provided SearchDocumentsRequest. This call only returns documents that the caller has permission to search against.
* `ContentwarehouseProjectsLocationsDocumentsSetACL` - Sets the access control policy for a resource. Replaces any existing policy. You can set ACL with condition for projects only. Supported operators are: `=`, `!=`, `<`, `<=`, `>`, and `>=` where the left of the operator is `DocumentSchemaId` or property name and the right of the operator is a number or a quoted string. You must escape backslash (\\) and quote (\") characters. Boolean expressions (AND/OR) are supported up to 3 levels of nesting (for example, "((A AND B AND C) OR D) AND E"), a maximum of 10 comparisons are allowed in the expression. The expression must be < 6000 bytes in length. Sample condition: `"DocumentSchemaId = \"some schema id\" " OR SchemaId.floatPropertyName >= 10`
* `ContentwarehouseProjectsLocationsInitialize` - Provisions resources for given tenant project. Returns a long running operation.
* `ContentwarehouseProjectsLocationsRuleSetsCreate` - Creates a ruleset.
* `ContentwarehouseProjectsLocationsRuleSetsList` - Lists rulesets.
* `ContentwarehouseProjectsLocationsSynonymSetsCreate` - Creates a SynonymSet for a single context. Throws an ALREADY_EXISTS exception if a synonymset already exists for the context.
* `ContentwarehouseProjectsLocationsSynonymSetsDelete` - Deletes a SynonymSet for a given context. Throws a NOT_FOUND exception if the SynonymSet is not found.
* `ContentwarehouseProjectsLocationsSynonymSetsGet` - Gets a SynonymSet for a particular context. Throws a NOT_FOUND exception if the Synonymset does not exist
* `ContentwarehouseProjectsLocationsSynonymSetsList` - Returns all SynonymSets (for all contexts) for the specified location.
* `ContentwarehouseProjectsLocationsSynonymSetsPatch` - Remove the existing SynonymSet for the context and replaces it with a new one. Throws a NOT_FOUND exception if the SynonymSet is not found.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
