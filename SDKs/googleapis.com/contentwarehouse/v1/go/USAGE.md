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