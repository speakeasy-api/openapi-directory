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
                    TextTypeOptions: map[string]interface{}{
                        "eveniet": "modi",
                    },
                    TimestampTypeOptions: map[string]interface{}{
                        "inventore": "ut",
                    },
                },
                shared.GoogleCloudContentwarehouseV1PropertyDefinition{
                    DateTimeTypeOptions: map[string]interface{}{
                        "aut": "reprehenderit",
                        "tempore": "maiores",
                        "incidunt": "dolor",
                    },
                    DisplayName: "beatae",
                    EnumTypeOptions: &shared.GoogleCloudContentwarehouseV1EnumTypeOptions{
                        PossibleValues: []string{
                            "in",
                            "et",
                        },
                        ValidationCheckDisabled: false,
                    },
                    FloatTypeOptions: map[string]interface{}{
                        "ex": "dolores",
                    },
                    IntegerTypeOptions: map[string]interface{}{
                        "vel": "rerum",
                    },
                    IsFilterable: true,
                    IsMetadata: true,
                    IsRepeatable: true,
                    IsRequired: false,
                    IsSearchable: true,
                    MapTypeOptions: map[string]interface{}{
                        "unde": "in",
                    },
                    Name: "autem",
                    PropertyTypeOptions: &shared.GoogleCloudContentwarehouseV1PropertyTypeOptions{
                        PropertyDefinitions: []shared.GoogleCloudContentwarehouseV1PropertyDefinition{
                            shared.GoogleCloudContentwarehouseV1PropertyDefinition{
                            
                            },
                        },
                    },
                    TextTypeOptions: map[string]interface{}{
                        "itaque": "ab",
                        "neque": "ullam",
                        "et": "accusantium",
                    },
                    TimestampTypeOptions: map[string]interface{}{
                        "architecto": "quam",
                        "velit": "cumque",
                    },
                },
                shared.GoogleCloudContentwarehouseV1PropertyDefinition{
                    DateTimeTypeOptions: map[string]interface{}{
                        "sunt": "voluptates",
                    },
                    DisplayName: "magni",
                    EnumTypeOptions: &shared.GoogleCloudContentwarehouseV1EnumTypeOptions{
                        PossibleValues: []string{
                            "optio",
                            "qui",
                            "earum",
                        },
                        ValidationCheckDisabled: true,
                    },
                    FloatTypeOptions: map[string]interface{}{
                        "ut": "consequatur",
                        "dolor": "commodi",
                    },
                    IntegerTypeOptions: map[string]interface{}{
                        "reprehenderit": "consectetur",
                    },
                    IsFilterable: true,
                    IsMetadata: false,
                    IsRepeatable: false,
                    IsRequired: true,
                    IsSearchable: false,
                    MapTypeOptions: map[string]interface{}{
                        "aut": "quas",
                    },
                    Name: "consequuntur",
                    PropertyTypeOptions: &shared.GoogleCloudContentwarehouseV1PropertyTypeOptions{
                        PropertyDefinitions: []shared.GoogleCloudContentwarehouseV1PropertyDefinition{
                            shared.GoogleCloudContentwarehouseV1PropertyDefinition{
                            
                            },
                        },
                    },
                    TextTypeOptions: map[string]interface{}{
                        "ipsa": "expedita",
                    },
                    TimestampTypeOptions: map[string]interface{}{
                        "perferendis": "atque",
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
* `ContentwarehouseProjectsLocationsDocumentsSetACL` - Sets the access control policy for a resource. Replaces any existing policy.
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
