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