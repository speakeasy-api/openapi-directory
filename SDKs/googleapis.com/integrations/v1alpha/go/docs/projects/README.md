# Projects

### Available Operations

* [IntegrationsProjectsLocationsAppsScriptProjectsCreate](#integrationsprojectslocationsappsscriptprojectscreate) - Creates an Apps Script project.
* [IntegrationsProjectsLocationsAppsScriptProjectsLink](#integrationsprojectslocationsappsscriptprojectslink) - Links a existing Apps Script project.
* [IntegrationsProjectsLocationsConnectionsList](#integrationsprojectslocationsconnectionslist) - Lists Connections in a given project and location.
* [IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasList](#integrationsprojectslocationsconnectionsruntimeactionschemaslist) - Lists the JSON schemas for the inputs and outputs of actions, filtered by action name.
* [IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasList](#integrationsprojectslocationsconnectionsruntimeentityschemaslist) - Lists the JSON schemas for the properties of runtime entities, filtered by entity name.
* [IntegrationsProjectsLocationsProductsAuthConfigsCreate](#integrationsprojectslocationsproductsauthconfigscreate) - Creates an auth config record. Fetch corresponding credentials for specific auth types, e.g. access token for OAuth 2.0, JWT token for JWT. Encrypt the auth config with Cloud KMS and store the encrypted credentials in Spanner. Returns the encrypted auth config.
* [IntegrationsProjectsLocationsProductsAuthConfigsList](#integrationsprojectslocationsproductsauthconfigslist) - Lists all auth configs that match the filter. Restrict to auth configs belong to the current client only.
* [IntegrationsProjectsLocationsProductsCertificatesCreate](#integrationsprojectslocationsproductscertificatescreate) - Creates a new certificate. The certificate will be registered to the trawler service and will be encrypted using cloud KMS and stored in Spanner Returns the certificate.
* [IntegrationsProjectsLocationsProductsCertificatesList](#integrationsprojectslocationsproductscertificateslist) - List all the certificates that match the filter. Restrict to certificate of current client only.
* [IntegrationsProjectsLocationsProductsIntegrationsExecute](#integrationsprojectslocationsproductsintegrationsexecute) - Executes integrations synchronously by passing the trigger id in the request body. The request is not returned until the requested executions are either fulfilled or experienced an error. If the integration name is not specified (passing `-`), all of the associated integration under the given trigger_id will be executed. Otherwise only the specified integration for the given `trigger_id` is executed. This is helpful for execution the integration from UI.
* [IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancel](#integrationsprojectslocationsproductsintegrationsexecutionscancel) - Cancellation of an execution
* [IntegrationsProjectsLocationsProductsIntegrationsExecutionsList](#integrationsprojectslocationsproductsintegrationsexecutionslist) - Lists the results of all the integration executions. The response includes the same information as the [execution log](https://cloud.google.com/application-integration/docs/viewing-logs) in the Integration UI.
* [IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLift](#integrationsprojectslocationsproductsintegrationsexecutionssuspensionslift) - * Lifts suspension for advanced suspension task. Fetch corresponding suspension with provided suspension Id, resolve suspension, and set up suspension result for the Suspension Task.
* [IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsList](#integrationsprojectslocationsproductsintegrationsexecutionssuspensionslist) - * Lists suspensions associated with a specific execution. Only those with permissions to resolve the relevant suspensions will be able to view them.
* [IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolve](#integrationsprojectslocationsproductsintegrationsexecutionssuspensionsresolve) - * Resolves (lifts/rejects) any number of suspensions. If the integration is already running, only the status of the suspension is updated. Otherwise, the suspended integration will begin execution again.
* [IntegrationsProjectsLocationsProductsIntegrationsList](#integrationsprojectslocationsproductsintegrationslist) - Returns the list of all integrations in the specified project.
* [IntegrationsProjectsLocationsProductsIntegrationsSchedule](#integrationsprojectslocationsproductsintegrationsschedule) - Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.
* [IntegrationsProjectsLocationsProductsIntegrationsVersionsDownload](#integrationsprojectslocationsproductsintegrationsversionsdownload) - Downloads an integration. Retrieves the `IntegrationVersion` for a given `integration_id` and returns the response as a string.
* [IntegrationsProjectsLocationsProductsIntegrationsVersionsPublish](#integrationsprojectslocationsproductsintegrationsversionspublish) - This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. This RPC throws an exception if the version being published is DRAFT, and if the `locked_by` user is not the same as the user performing the Publish. Audit fields updated include last_published_timestamp, last_published_by, last_modified_timestamp, last_modified_by. Any existing lock is on this integration is released.
* [IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLock](#integrationsprojectslocationsproductsintegrationsversionstakeovereditlock) - Clears the `locked_by` and `locked_at_timestamp`in the DRAFT version of this integration. It then performs the same action as the CreateDraftIntegrationVersion (i.e., copies the DRAFT version of the integration as a SNAPSHOT and then creates a new DRAFT version with the `locked_by` set to the `user_taking_over` and the `locked_at_timestamp` set to the current timestamp). Both the `locked_by` and `user_taking_over` are notified via email about the takeover. This RPC throws an exception if the integration is not in DRAFT status or if the `locked_by` and `locked_at_timestamp` fields are not set.The TakeoverEdit lock is treated the same as an edit of the integration, and hence shares ACLs with edit. Audit fields updated include last_modified_timestamp, last_modified_by.
* [IntegrationsProjectsLocationsProductsIntegrationsVersionsUnpublish](#integrationsprojectslocationsproductsintegrationsversionsunpublish) - Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it. The "HEAD" and "PUBLISH_REQUESTED" tags do not change. This RPC throws an exception if the version being snapshot is not ACTIVE. Audit fields added include action, action_by, action_timestamp.
* [IntegrationsProjectsLocationsProductsIntegrationsVersionsUpload](#integrationsprojectslocationsproductsintegrationsversionsupload) - Uploads an integration. The content can be a previously downloaded integration. Performs the same function as CreateDraftIntegrationVersion, but accepts input in a string format, which holds the complete representation of the IntegrationVersion content.
* [IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreate](#integrationsprojectslocationsproductsintegrationtemplatesversionscreate) - Creates an IntegrationTemplateVersion.
* [IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsList](#integrationsprojectslocationsproductsintegrationtemplatesversionslist) - Returns the list of all IntegrationTemplateVersions in the specified project.
* [IntegrationsProjectsLocationsSfdcInstancesCreate](#integrationsprojectslocationssfdcinstancescreate) - Creates an sfdc instance record. Store the sfdc instance in Spanner. Returns the sfdc instance.
* [IntegrationsProjectsLocationsSfdcInstancesList](#integrationsprojectslocationssfdcinstanceslist) - Lists all sfdc instances that match the filter. Restrict to sfdc instances belonging to the current client only.
* [IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreate](#integrationsprojectslocationssfdcinstancessfdcchannelscreate) - Creates an sfdc channel record. Store the sfdc channel in Spanner. Returns the sfdc channel.
* [IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDelete](#integrationsprojectslocationssfdcinstancessfdcchannelsdelete) - Deletes an sfdc channel.
* [IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGet](#integrationsprojectslocationssfdcinstancessfdcchannelsget) - Gets an sfdc channel. If the channel doesn't exist, Code.NOT_FOUND exception will be thrown.
* [IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsList](#integrationsprojectslocationssfdcinstancessfdcchannelslist) - Lists all sfdc channels that match the filter. Restrict to sfdc channels belonging to the current client only.
* [IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatch](#integrationsprojectslocationssfdcinstancessfdcchannelspatch) - Updates an sfdc channel. Updates the sfdc channel in spanner. Returns the sfdc channel.

## IntegrationsProjectsLocationsAppsScriptProjectsCreate

Creates an Apps Script project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsAppsScriptProjectsCreate(ctx, operations.IntegrationsProjectsLocationsAppsScriptProjectsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest: &shared.GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest{
            AppsScriptProject: sdk.String("molestiae"),
            AuthConfigID: sdk.String("quod"),
        },
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("porro"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("dicta"),
        Parent: "nam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("fugit"),
    }, operations.IntegrationsProjectsLocationsAppsScriptProjectsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectResponse != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsAppsScriptProjectsLink

Links a existing Apps Script project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsAppsScriptProjectsLink(ctx, operations.IntegrationsProjectsLocationsAppsScriptProjectsLinkRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectRequest: &shared.GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectRequest{
            ScriptID: sdk.String("hic"),
        },
        AccessToken: sdk.String("optio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("beatae"),
        Fields: sdk.String("commodi"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("modi"),
        Parent: "qui",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("esse"),
    }, operations.IntegrationsProjectsLocationsAppsScriptProjectsLinkSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectResponse != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsConnectionsList

Lists Connections in a given project and location.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsConnectionsList(ctx, operations.IntegrationsProjectsLocationsConnectionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("ad"),
        Filter: sdk.String("natus"),
        Key: sdk.String("sed"),
        OauthToken: sdk.String("iste"),
        OrderBy: sdk.String("dolor"),
        PageSize: sdk.Int64(616934),
        PageToken: sdk.String("laboriosam"),
        Parent: "hic",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("in"),
    }, operations.IntegrationsProjectsLocationsConnectionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaListConnectionsResponse != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasList

Lists the JSON schemas for the inputs and outputs of actions, filtered by action name.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasList(ctx, operations.IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("quidem"),
        Filter: sdk.String("architecto"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("reiciendis"),
        PageSize: sdk.Int64(666767),
        PageToken: sdk.String("mollitia"),
        Parent: "laborum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolores"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasList

Lists the JSON schemas for the properties of runtime entities, filtered by entity name.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasList(ctx, operations.IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("nemo"),
        Filter: sdk.String("minima"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("accusantium"),
        PageSize: sdk.Int64(438601),
        PageToken: sdk.String("culpa"),
        Parent: "doloribus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsProductsAuthConfigsCreate

Creates an auth config record. Fetch corresponding credentials for specific auth types, e.g. access token for OAuth 2.0, JWT token for JWT. Encrypt the auth config with Cloud KMS and store the encrypted credentials in Spanner. Returns the encrypted auth config.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsProductsAuthConfigsCreate(ctx, operations.IntegrationsProjectsLocationsProductsAuthConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudIntegrationsV1alphaAuthConfigInput: &shared.GoogleCloudIntegrationsV1alphaAuthConfigInput{
            CertificateID: sdk.String("culpa"),
            CreatorEmail: sdk.String("consequuntur"),
            CredentialType: shared.GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnumOidcToken.ToPointer(),
            DecryptedCredential: &shared.GoogleCloudIntegrationsV1alphaCredential{
                AuthToken: &shared.GoogleCloudIntegrationsV1alphaAuthToken{
                    Token: sdk.String("mollitia"),
                    Type: sdk.String("occaecati"),
                },
                CredentialType: shared.GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnumOauth2AuthorizationCode.ToPointer(),
                Jwt: &shared.GoogleCloudIntegrationsV1alphaJwt{
                    Jwt: sdk.String("commodi"),
                    JwtHeader: sdk.String("quam"),
                    JwtPayload: sdk.String("molestiae"),
                    Secret: sdk.String("velit"),
                },
                Oauth2AuthorizationCode: &shared.GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode{
                    AccessToken: &shared.GoogleCloudIntegrationsV1alphaAccessToken{
                        AccessToken: sdk.String("error"),
                        AccessTokenExpireTime: sdk.String("quia"),
                        RefreshToken: sdk.String("quis"),
                        RefreshTokenExpireTime: sdk.String("vitae"),
                        TokenType: sdk.String("laborum"),
                    },
                    ApplyReauthPolicy: sdk.Bool(false),
                    AuthCode: sdk.String("animi"),
                    AuthEndpoint: sdk.String("enim"),
                    AuthParams: &shared.GoogleCloudIntegrationsV1alphaParameterMap{
                        Entries: []shared.GoogleCloudIntegrationsV1alphaParameterMapEntry{
                            shared.GoogleCloudIntegrationsV1alphaParameterMapEntry{
                                Key: &shared.GoogleCloudIntegrationsV1alphaParameterMapField{
                                    LiteralValue: &shared.GoogleCloudIntegrationsV1alphaValueType{
                                        BooleanArray: &shared.GoogleCloudIntegrationsV1alphaBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.GoogleCloudIntegrationsV1alphaDoubleParameterArray{
                                            DoubleValues: []float64{
                                                9495.72,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(3687.25),
                                        IntArray: &shared.GoogleCloudIntegrationsV1alphaIntParameterArray{
                                            IntValues: []string{
                                                "possimus",
                                                "aut",
                                                "quasi",
                                            },
                                        },
                                        IntValue: sdk.String("error"),
                                        JSONValue: sdk.String("temporibus"),
                                        StringArray: &shared.GoogleCloudIntegrationsV1alphaStringParameterArray{
                                            StringValues: []string{
                                                "quasi",
                                                "reiciendis",
                                                "voluptatibus",
                                            },
                                        },
                                        StringValue: sdk.String("vero"),
                                    },
                                    ReferenceKey: sdk.String("nihil"),
                                },
                                Value: &shared.GoogleCloudIntegrationsV1alphaParameterMapField{
                                    LiteralValue: &shared.GoogleCloudIntegrationsV1alphaValueType{
                                        BooleanArray: &shared.GoogleCloudIntegrationsV1alphaBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.GoogleCloudIntegrationsV1alphaDoubleParameterArray{
                                            DoubleValues: []float64{
                                                557.14,
                                                6048.46,
                                                4511.59,
                                                7392.64,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(199.87),
                                        IntArray: &shared.GoogleCloudIntegrationsV1alphaIntParameterArray{
                                            IntValues: []string{
                                                "reprehenderit",
                                            },
                                        },
                                        IntValue: sdk.String("ut"),
                                        JSONValue: sdk.String("maiores"),
                                        StringArray: &shared.GoogleCloudIntegrationsV1alphaStringParameterArray{
                                            StringValues: []string{
                                                "corporis",
                                            },
                                        },
                                        StringValue: sdk.String("dolore"),
                                    },
                                    ReferenceKey: sdk.String("iusto"),
                                },
                            },
                        },
                        KeyType: shared.GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnumStringValue.ToPointer(),
                        ValueType: shared.GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnumBooleanArray.ToPointer(),
                    },
                    ClientID: sdk.String("enim"),
                    ClientSecret: sdk.String("accusamus"),
                    RequestType: shared.GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnumRequestBody.ToPointer(),
                    Scope: sdk.String("repudiandae"),
                    TokenEndpoint: sdk.String("quae"),
                    TokenParams: &shared.GoogleCloudIntegrationsV1alphaParameterMap{
                        Entries: []shared.GoogleCloudIntegrationsV1alphaParameterMapEntry{
                            shared.GoogleCloudIntegrationsV1alphaParameterMapEntry{
                                Key: &shared.GoogleCloudIntegrationsV1alphaParameterMapField{
                                    LiteralValue: &shared.GoogleCloudIntegrationsV1alphaValueType{
                                        BooleanArray: &shared.GoogleCloudIntegrationsV1alphaBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.GoogleCloudIntegrationsV1alphaDoubleParameterArray{
                                            DoubleValues: []float64{
                                                5666.02,
                                                8651.03,
                                                2653.89,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(5089.69),
                                        IntArray: &shared.GoogleCloudIntegrationsV1alphaIntParameterArray{
                                            IntValues: []string{
                                                "voluptates",
                                                "quasi",
                                                "repudiandae",
                                            },
                                        },
                                        IntValue: sdk.String("sint"),
                                        JSONValue: sdk.String("veritatis"),
                                        StringArray: &shared.GoogleCloudIntegrationsV1alphaStringParameterArray{
                                            StringValues: []string{
                                                "incidunt",
                                                "enim",
                                                "consequatur",
                                                "est",
                                            },
                                        },
                                        StringValue: sdk.String("quibusdam"),
                                    },
                                    ReferenceKey: sdk.String("explicabo"),
                                },
                                Value: &shared.GoogleCloudIntegrationsV1alphaParameterMapField{
                                    LiteralValue: &shared.GoogleCloudIntegrationsV1alphaValueType{
                                        BooleanArray: &shared.GoogleCloudIntegrationsV1alphaBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.GoogleCloudIntegrationsV1alphaDoubleParameterArray{
                                            DoubleValues: []float64{
                                                8413.86,
                                                2894.06,
                                                2647.3,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(1831.91),
                                        IntArray: &shared.GoogleCloudIntegrationsV1alphaIntParameterArray{
                                            IntValues: []string{
                                                "cupiditate",
                                                "quos",
                                            },
                                        },
                                        IntValue: sdk.String("perferendis"),
                                        JSONValue: sdk.String("magni"),
                                        StringArray: &shared.GoogleCloudIntegrationsV1alphaStringParameterArray{
                                            StringValues: []string{
                                                "ipsam",
                                                "alias",
                                                "fugit",
                                                "dolorum",
                                            },
                                        },
                                        StringValue: sdk.String("excepturi"),
                                    },
                                    ReferenceKey: sdk.String("tempora"),
                                },
                            },
                        },
                        KeyType: shared.GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnumBooleanArray.ToPointer(),
                        ValueType: shared.GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnumBooleanArray.ToPointer(),
                    },
                },
                Oauth2ClientCredentials: &shared.GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials{
                    AccessToken: &shared.GoogleCloudIntegrationsV1alphaAccessToken{
                        AccessToken: sdk.String("labore"),
                        AccessTokenExpireTime: sdk.String("delectus"),
                        RefreshToken: sdk.String("eum"),
                        RefreshTokenExpireTime: sdk.String("non"),
                        TokenType: sdk.String("eligendi"),
                    },
                    ClientID: sdk.String("sint"),
                    ClientSecret: sdk.String("aliquid"),
                    RequestType: shared.GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnumQueryParameters.ToPointer(),
                    Scope: sdk.String("necessitatibus"),
                    TokenEndpoint: sdk.String("sint"),
                    TokenParams: &shared.GoogleCloudIntegrationsV1alphaParameterMap{
                        Entries: []shared.GoogleCloudIntegrationsV1alphaParameterMapEntry{
                            shared.GoogleCloudIntegrationsV1alphaParameterMapEntry{
                                Key: &shared.GoogleCloudIntegrationsV1alphaParameterMapField{
                                    LiteralValue: &shared.GoogleCloudIntegrationsV1alphaValueType{
                                        BooleanArray: &shared.GoogleCloudIntegrationsV1alphaBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.GoogleCloudIntegrationsV1alphaDoubleParameterArray{
                                            DoubleValues: []float64{
                                                9527.49,
                                                6800.56,
                                                4471.25,
                                                4491.98,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(8464.09),
                                        IntArray: &shared.GoogleCloudIntegrationsV1alphaIntParameterArray{
                                            IntValues: []string{
                                                "rerum",
                                                "dicta",
                                                "magnam",
                                                "cumque",
                                            },
                                        },
                                        IntValue: sdk.String("facere"),
                                        JSONValue: sdk.String("ea"),
                                        StringArray: &shared.GoogleCloudIntegrationsV1alphaStringParameterArray{
                                            StringValues: []string{
                                                "laborum",
                                                "accusamus",
                                            },
                                        },
                                        StringValue: sdk.String("non"),
                                    },
                                    ReferenceKey: sdk.String("occaecati"),
                                },
                                Value: &shared.GoogleCloudIntegrationsV1alphaParameterMapField{
                                    LiteralValue: &shared.GoogleCloudIntegrationsV1alphaValueType{
                                        BooleanArray: &shared.GoogleCloudIntegrationsV1alphaBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.GoogleCloudIntegrationsV1alphaDoubleParameterArray{
                                            DoubleValues: []float64{
                                                9654.17,
                                                6925.32,
                                                5884.65,
                                                7252.55,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(6596.69),
                                        IntArray: &shared.GoogleCloudIntegrationsV1alphaIntParameterArray{
                                            IntValues: []string{
                                                "deleniti",
                                                "sapiente",
                                                "amet",
                                            },
                                        },
                                        IntValue: sdk.String("deserunt"),
                                        JSONValue: sdk.String("nisi"),
                                        StringArray: &shared.GoogleCloudIntegrationsV1alphaStringParameterArray{
                                            StringValues: []string{
                                                "natus",
                                                "omnis",
                                            },
                                        },
                                        StringValue: sdk.String("molestiae"),
                                    },
                                    ReferenceKey: sdk.String("perferendis"),
                                },
                            },
                            shared.GoogleCloudIntegrationsV1alphaParameterMapEntry{
                                Key: &shared.GoogleCloudIntegrationsV1alphaParameterMapField{
                                    LiteralValue: &shared.GoogleCloudIntegrationsV1alphaValueType{
                                        BooleanArray: &shared.GoogleCloudIntegrationsV1alphaBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.GoogleCloudIntegrationsV1alphaDoubleParameterArray{
                                            DoubleValues: []float64{
                                                7160.75,
                                                6601.74,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(2879.91),
                                        IntArray: &shared.GoogleCloudIntegrationsV1alphaIntParameterArray{
                                            IntValues: []string{
                                                "suscipit",
                                                "natus",
                                            },
                                        },
                                        IntValue: sdk.String("nobis"),
                                        JSONValue: sdk.String("eum"),
                                        StringArray: &shared.GoogleCloudIntegrationsV1alphaStringParameterArray{
                                            StringValues: []string{
                                                "aspernatur",
                                                "architecto",
                                                "magnam",
                                                "et",
                                            },
                                        },
                                        StringValue: sdk.String("excepturi"),
                                    },
                                    ReferenceKey: sdk.String("ullam"),
                                },
                                Value: &shared.GoogleCloudIntegrationsV1alphaParameterMapField{
                                    LiteralValue: &shared.GoogleCloudIntegrationsV1alphaValueType{
                                        BooleanArray: &shared.GoogleCloudIntegrationsV1alphaBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.GoogleCloudIntegrationsV1alphaDoubleParameterArray{
                                            DoubleValues: []float64{
                                                5743.25,
                                                336.25,
                                                6532.01,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(9689.62),
                                        IntArray: &shared.GoogleCloudIntegrationsV1alphaIntParameterArray{
                                            IntValues: []string{
                                                "ad",
                                                "eum",
                                                "dolor",
                                            },
                                        },
                                        IntValue: sdk.String("necessitatibus"),
                                        JSONValue: sdk.String("odit"),
                                        StringArray: &shared.GoogleCloudIntegrationsV1alphaStringParameterArray{
                                            StringValues: []string{
                                                "quasi",
                                                "iure",
                                            },
                                        },
                                        StringValue: sdk.String("doloribus"),
                                    },
                                    ReferenceKey: sdk.String("debitis"),
                                },
                            },
                            shared.GoogleCloudIntegrationsV1alphaParameterMapEntry{
                                Key: &shared.GoogleCloudIntegrationsV1alphaParameterMapField{
                                    LiteralValue: &shared.GoogleCloudIntegrationsV1alphaValueType{
                                        BooleanArray: &shared.GoogleCloudIntegrationsV1alphaBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.GoogleCloudIntegrationsV1alphaDoubleParameterArray{
                                            DoubleValues: []float64{
                                                5370.23,
                                                7038.89,
                                                4479.26,
                                                1002.26,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(995.69),
                                        IntArray: &shared.GoogleCloudIntegrationsV1alphaIntParameterArray{
                                            IntValues: []string{
                                                "ullam",
                                                "expedita",
                                                "nihil",
                                                "repellat",
                                            },
                                        },
                                        IntValue: sdk.String("quibusdam"),
                                        JSONValue: sdk.String("sed"),
                                        StringArray: &shared.GoogleCloudIntegrationsV1alphaStringParameterArray{
                                            StringValues: []string{
                                                "pariatur",
                                                "accusantium",
                                                "consequuntur",
                                                "praesentium",
                                            },
                                        },
                                        StringValue: sdk.String("natus"),
                                    },
                                    ReferenceKey: sdk.String("magni"),
                                },
                                Value: &shared.GoogleCloudIntegrationsV1alphaParameterMapField{
                                    LiteralValue: &shared.GoogleCloudIntegrationsV1alphaValueType{
                                        BooleanArray: &shared.GoogleCloudIntegrationsV1alphaBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.GoogleCloudIntegrationsV1alphaDoubleParameterArray{
                                            DoubleValues: []float64{
                                                8480.09,
                                                8649.34,
                                                8073.19,
                                                4113.97,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(5691.01),
                                        IntArray: &shared.GoogleCloudIntegrationsV1alphaIntParameterArray{
                                            IntValues: []string{
                                                "ea",
                                            },
                                        },
                                        IntValue: sdk.String("accusantium"),
                                        JSONValue: sdk.String("ab"),
                                        StringArray: &shared.GoogleCloudIntegrationsV1alphaStringParameterArray{
                                            StringValues: []string{
                                                "quidem",
                                                "ipsam",
                                                "voluptate",
                                                "autem",
                                            },
                                        },
                                        StringValue: sdk.String("nam"),
                                    },
                                    ReferenceKey: sdk.String("eaque"),
                                },
                            },
                        },
                        KeyType: shared.GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnumProtoValue.ToPointer(),
                        ValueType: shared.GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnumBooleanValue.ToPointer(),
                    },
                },
                Oauth2ResourceOwnerCredentials: &shared.GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials{
                    AccessToken: &shared.GoogleCloudIntegrationsV1alphaAccessToken{
                        AccessToken: sdk.String("voluptatibus"),
                        AccessTokenExpireTime: sdk.String("perferendis"),
                        RefreshToken: sdk.String("fugiat"),
                        RefreshTokenExpireTime: sdk.String("amet"),
                        TokenType: sdk.String("aut"),
                    },
                    ClientID: sdk.String("cumque"),
                    ClientSecret: sdk.String("corporis"),
                    Password: sdk.String("hic"),
                    RequestType: shared.GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnumQueryParameters.ToPointer(),
                    Scope: sdk.String("nobis"),
                    TokenEndpoint: sdk.String("dolores"),
                    TokenParams: &shared.GoogleCloudIntegrationsV1alphaParameterMap{
                        Entries: []shared.GoogleCloudIntegrationsV1alphaParameterMapEntry{
                            shared.GoogleCloudIntegrationsV1alphaParameterMapEntry{
                                Key: &shared.GoogleCloudIntegrationsV1alphaParameterMapField{
                                    LiteralValue: &shared.GoogleCloudIntegrationsV1alphaValueType{
                                        BooleanArray: &shared.GoogleCloudIntegrationsV1alphaBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.GoogleCloudIntegrationsV1alphaDoubleParameterArray{
                                            DoubleValues: []float64{
                                                543.38,
                                                3389.85,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(1999.96),
                                        IntArray: &shared.GoogleCloudIntegrationsV1alphaIntParameterArray{
                                            IntValues: []string{
                                                "perferendis",
                                            },
                                        },
                                        IntValue: sdk.String("dolores"),
                                        JSONValue: sdk.String("minus"),
                                        StringArray: &shared.GoogleCloudIntegrationsV1alphaStringParameterArray{
                                            StringValues: []string{
                                                "dolor",
                                                "vero",
                                            },
                                        },
                                        StringValue: sdk.String("nostrum"),
                                    },
                                    ReferenceKey: sdk.String("hic"),
                                },
                                Value: &shared.GoogleCloudIntegrationsV1alphaParameterMapField{
                                    LiteralValue: &shared.GoogleCloudIntegrationsV1alphaValueType{
                                        BooleanArray: &shared.GoogleCloudIntegrationsV1alphaBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.GoogleCloudIntegrationsV1alphaDoubleParameterArray{
                                            DoubleValues: []float64{
                                                7044.15,
                                                5966.56,
                                                318.38,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(7836.45),
                                        IntArray: &shared.GoogleCloudIntegrationsV1alphaIntParameterArray{
                                            IntValues: []string{
                                                "blanditiis",
                                            },
                                        },
                                        IntValue: sdk.String("error"),
                                        JSONValue: sdk.String("eaque"),
                                        StringArray: &shared.GoogleCloudIntegrationsV1alphaStringParameterArray{
                                            StringValues: []string{
                                                "rerum",
                                                "adipisci",
                                                "asperiores",
                                            },
                                        },
                                        StringValue: sdk.String("earum"),
                                    },
                                    ReferenceKey: sdk.String("modi"),
                                },
                            },
                            shared.GoogleCloudIntegrationsV1alphaParameterMapEntry{
                                Key: &shared.GoogleCloudIntegrationsV1alphaParameterMapField{
                                    LiteralValue: &shared.GoogleCloudIntegrationsV1alphaValueType{
                                        BooleanArray: &shared.GoogleCloudIntegrationsV1alphaBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.GoogleCloudIntegrationsV1alphaDoubleParameterArray{
                                            DoubleValues: []float64{
                                                5356.33,
                                                8642.82,
                                                5899.1,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(7508.44),
                                        IntArray: &shared.GoogleCloudIntegrationsV1alphaIntParameterArray{
                                            IntValues: []string{
                                                "delectus",
                                                "quaerat",
                                                "quos",
                                            },
                                        },
                                        IntValue: sdk.String("aliquid"),
                                        JSONValue: sdk.String("dolorem"),
                                        StringArray: &shared.GoogleCloudIntegrationsV1alphaStringParameterArray{
                                            StringValues: []string{
                                                "dolor",
                                            },
                                        },
                                        StringValue: sdk.String("qui"),
                                    },
                                    ReferenceKey: sdk.String("ipsum"),
                                },
                                Value: &shared.GoogleCloudIntegrationsV1alphaParameterMapField{
                                    LiteralValue: &shared.GoogleCloudIntegrationsV1alphaValueType{
                                        BooleanArray: &shared.GoogleCloudIntegrationsV1alphaBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.GoogleCloudIntegrationsV1alphaDoubleParameterArray{
                                            DoubleValues: []float64{
                                                7395.51,
                                                4521.09,
                                                4904.59,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(9702.37),
                                        IntArray: &shared.GoogleCloudIntegrationsV1alphaIntParameterArray{
                                            IntValues: []string{
                                                "dolorum",
                                            },
                                        },
                                        IntValue: sdk.String("numquam"),
                                        JSONValue: sdk.String("veritatis"),
                                        StringArray: &shared.GoogleCloudIntegrationsV1alphaStringParameterArray{
                                            StringValues: []string{
                                                "ipsa",
                                            },
                                        },
                                        StringValue: sdk.String("iure"),
                                    },
                                    ReferenceKey: sdk.String("odio"),
                                },
                            },
                        },
                        KeyType: shared.GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnumDoubleValue.ToPointer(),
                        ValueType: shared.GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnumProtoValue.ToPointer(),
                    },
                    Username: sdk.String("Maurine_Wolf"),
                },
                OidcToken: &shared.GoogleCloudIntegrationsV1alphaOidcToken{
                    Audience: sdk.String("eos"),
                    ServiceAccountEmail: sdk.String("atque"),
                    Token: sdk.String("sit"),
                    TokenExpireTime: sdk.String("fugiat"),
                },
                ServiceAccountCredentials: &shared.GoogleCloudIntegrationsV1alphaServiceAccountCredentials{
                    Scope: sdk.String("ab"),
                    ServiceAccount: sdk.String("soluta"),
                },
                UsernameAndPassword: &shared.GoogleCloudIntegrationsV1alphaUsernameAndPassword{
                    Password: sdk.String("dolorum"),
                    Username: sdk.String("Javon_Kling60"),
                },
            },
            Description: sdk.String("necessitatibus"),
            DisplayName: sdk.String("distinctio"),
            EncryptedCredential: sdk.String("asperiores"),
            ExpiryNotificationDuration: []string{
                "ipsum",
                "voluptate",
            },
            LastModifierEmail: sdk.String("id"),
            Name: sdk.String("Mrs. Ray Collins"),
            OverrideValidTime: sdk.String("accusamus"),
            Reason: sdk.String("ad"),
            State: shared.GoogleCloudIntegrationsV1alphaAuthConfigStateEnumUnsupported.ToPointer(),
            ValidTime: sdk.String("suscipit"),
            Visibility: shared.GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnumPrivate.ToPointer(),
        },
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repellendus"),
        ClientCertificateEncryptedPrivateKey: sdk.String("totam"),
        ClientCertificatePassphrase: sdk.String("similique"),
        ClientCertificateSslCertificate: sdk.String("alias"),
        Fields: sdk.String("at"),
        Key: sdk.String("quaerat"),
        OauthToken: sdk.String("tempora"),
        Parent: "vel",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("qui"),
    }, operations.IntegrationsProjectsLocationsProductsAuthConfigsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaAuthConfig != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsProductsAuthConfigsList

Lists all auth configs that match the filter. Restrict to auth configs belong to the current client only.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsProductsAuthConfigsList(ctx, operations.IntegrationsProjectsLocationsProductsAuthConfigsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("a"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("harum"),
        Fields: sdk.String("iusto"),
        Filter: sdk.String("ipsum"),
        Key: sdk.String("quisquam"),
        OauthToken: sdk.String("tenetur"),
        PageSize: sdk.Int64(229442),
        PageToken: sdk.String("tempore"),
        Parent: "accusamus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        ReadMask: sdk.String("enim"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.IntegrationsProjectsLocationsProductsAuthConfigsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaListAuthConfigsResponse != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsProductsCertificatesCreate

Creates a new certificate. The certificate will be registered to the trawler service and will be encrypted using cloud KMS and stored in Spanner Returns the certificate.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsProductsCertificatesCreate(ctx, operations.IntegrationsProjectsLocationsProductsCertificatesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudIntegrationsV1alphaCertificateInput: &shared.GoogleCloudIntegrationsV1alphaCertificateInput{
            CertificateStatus: shared.GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnumActive.ToPointer(),
            CredentialID: sdk.String("sit"),
            Description: sdk.String("expedita"),
            DisplayName: sdk.String("neque"),
            RawCertificate: &shared.GoogleCloudIntegrationsV1alphaClientCertificate{
                EncryptedPrivateKey: sdk.String("sed"),
                Passphrase: sdk.String("vel"),
                SslCertificate: sdk.String("libero"),
            },
            RequestorID: sdk.String("voluptas"),
        },
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("incidunt"),
        Key: sdk.String("qui"),
        OauthToken: sdk.String("cupiditate"),
        Parent: "maxime",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("soluta"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.IntegrationsProjectsLocationsProductsCertificatesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaCertificate != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsProductsCertificatesList

List all the certificates that match the filter. Restrict to certificate of current client only.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsProductsCertificatesList(ctx, operations.IntegrationsProjectsLocationsProductsCertificatesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("dolores"),
        Filter: sdk.String("distinctio"),
        Key: sdk.String("facilis"),
        OauthToken: sdk.String("aliquid"),
        PageSize: sdk.Int64(463150),
        PageToken: sdk.String("molestias"),
        Parent: "temporibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        ReadMask: sdk.String("neque"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("magni"),
    }, operations.IntegrationsProjectsLocationsProductsCertificatesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaListCertificatesResponse != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsProductsIntegrationsExecute

Executes integrations synchronously by passing the trigger id in the request body. The request is not returned until the requested executions are either fulfilled or experienced an error. If the integration name is not specified (passing `-`), all of the associated integration under the given trigger_id will be executed. Otherwise only the specified integration for the given `trigger_id` is executed. This is helpful for execution the integration from UI.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsProductsIntegrationsExecute(ctx, operations.IntegrationsProjectsLocationsProductsIntegrationsExecuteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest: &shared.GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest{
            DoNotPropagateError: sdk.Bool(false),
            ExecutionID: sdk.String("sunt"),
            InputParameters: map[string]shared.GoogleCloudIntegrationsV1alphaValueType{
                "nam": shared.GoogleCloudIntegrationsV1alphaValueType{
                    BooleanArray: &shared.GoogleCloudIntegrationsV1alphaBooleanParameterArray{
                        BooleanValues: []bool{
                            false,
                            false,
                            false,
                            false,
                        },
                    },
                    BooleanValue: sdk.Bool(false),
                    DoubleArray: &shared.GoogleCloudIntegrationsV1alphaDoubleParameterArray{
                        DoubleValues: []float64{
                            7653.26,
                        },
                    },
                    DoubleValue: sdk.Float64(7469.94),
                    IntArray: &shared.GoogleCloudIntegrationsV1alphaIntParameterArray{
                        IntValues: []string{
                            "et",
                            "saepe",
                            "ipsum",
                        },
                    },
                    IntValue: sdk.String("veritatis"),
                    JSONValue: sdk.String("nobis"),
                    StringArray: &shared.GoogleCloudIntegrationsV1alphaStringParameterArray{
                        StringValues: []string{
                            "tempore",
                            "cupiditate",
                            "aperiam",
                        },
                    },
                    StringValue: sdk.String("delectus"),
                },
                "dolorem": shared.GoogleCloudIntegrationsV1alphaValueType{
                    BooleanArray: &shared.GoogleCloudIntegrationsV1alphaBooleanParameterArray{
                        BooleanValues: []bool{
                            false,
                            false,
                        },
                    },
                    BooleanValue: sdk.Bool(false),
                    DoubleArray: &shared.GoogleCloudIntegrationsV1alphaDoubleParameterArray{
                        DoubleValues: []float64{
                            2408.29,
                            6772.63,
                        },
                    },
                    DoubleValue: sdk.Float64(1002.94),
                    IntArray: &shared.GoogleCloudIntegrationsV1alphaIntParameterArray{
                        IntValues: []string{
                            "aut",
                        },
                    },
                    IntValue: sdk.String("quas"),
                    JSONValue: sdk.String("itaque"),
                    StringArray: &shared.GoogleCloudIntegrationsV1alphaStringParameterArray{
                        StringValues: []string{
                            "est",
                        },
                    },
                    StringValue: sdk.String("repellendus"),
                },
            },
            ParameterEntries: []shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                    DataType: shared.EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumJSONValue.ToPointer(),
                    Key: sdk.String("ut"),
                    Value: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                        BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                            BooleanValues: []bool{
                                false,
                                false,
                                false,
                            },
                        },
                        BooleanValue: sdk.Bool(false),
                        DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                            DoubleValues: []float64{
                                1816.31,
                                639.55,
                                5123.93,
                            },
                        },
                        DoubleValue: sdk.Float64(4856.28),
                        IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                            IntValues: []string{
                                "voluptatibus",
                                "quisquam",
                                "vero",
                            },
                        },
                        IntValue: sdk.String("omnis"),
                        JSONValue: sdk.String("quis"),
                        ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                            ProtoValues: []map[string]interface{}{
                                map[string]interface{}{
                                    "voluptate": "consectetur",
                                    "vero": "tenetur",
                                    "dignissimos": "hic",
                                    "distinctio": "quod",
                                },
                            },
                        },
                        ProtoValue: map[string]interface{}{
                            "similique": "facilis",
                            "vero": "ducimus",
                        },
                        SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                            ObjectValue: sdk.String("dolore"),
                        },
                        StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                            StringValues: []string{
                                "illum",
                                "sequi",
                                "natus",
                                "impedit",
                            },
                        },
                        StringValue: sdk.String("aut"),
                    },
                },
                shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                    DataType: shared.EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumJSONValue.ToPointer(),
                    Key: sdk.String("exercitationem"),
                    Value: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                        BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                            BooleanValues: []bool{
                                false,
                                false,
                                false,
                                false,
                            },
                        },
                        BooleanValue: sdk.Bool(false),
                        DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                            DoubleValues: []float64{
                                7804.27,
                            },
                        },
                        DoubleValue: sdk.Float64(9818.3),
                        IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                            IntValues: []string{
                                "iusto",
                                "eligendi",
                                "ducimus",
                                "alias",
                            },
                        },
                        IntValue: sdk.String("officia"),
                        JSONValue: sdk.String("tempora"),
                        ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                            ProtoValues: []map[string]interface{}{
                                map[string]interface{}{
                                    "aspernatur": "vel",
                                    "possimus": "magnam",
                                },
                                map[string]interface{}{
                                    "ex": "laudantium",
                                },
                            },
                        },
                        ProtoValue: map[string]interface{}{
                            "dolor": "maiores",
                        },
                        SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                            ObjectValue: sdk.String("quasi"),
                        },
                        StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                            StringValues: []string{
                                "nulla",
                                "excepturi",
                            },
                        },
                        StringValue: sdk.String("voluptatibus"),
                    },
                },
                shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                    DataType: shared.EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumSerializedObjectValue.ToPointer(),
                    Key: sdk.String("sapiente"),
                    Value: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                        BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                            BooleanValues: []bool{
                                false,
                                false,
                                false,
                                false,
                            },
                        },
                        BooleanValue: sdk.Bool(false),
                        DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                            DoubleValues: []float64{
                                4113.72,
                                7740.48,
                                3592.71,
                                3331.45,
                            },
                        },
                        DoubleValue: sdk.Float64(3994.99),
                        IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                            IntValues: []string{
                                "magnam",
                            },
                        },
                        IntValue: sdk.String("ea"),
                        JSONValue: sdk.String("quo"),
                        ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                            ProtoValues: []map[string]interface{}{
                                map[string]interface{}{
                                    "aspernatur": "minima",
                                    "eaque": "a",
                                    "libero": "aut",
                                    "aut": "deleniti",
                                },
                            },
                        },
                        ProtoValue: map[string]interface{}{
                            "aliquam": "fugit",
                            "accusamus": "inventore",
                            "non": "et",
                            "dolorum": "laborum",
                        },
                        SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                            ObjectValue: sdk.String("placeat"),
                        },
                        StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                            StringValues: []string{
                                "eum",
                            },
                        },
                        StringValue: sdk.String("autem"),
                    },
                },
                shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                    DataType: shared.EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumProtoEnumArray.ToPointer(),
                    Key: sdk.String("quas"),
                    Value: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                        BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                            BooleanValues: []bool{
                                false,
                                false,
                                false,
                                false,
                            },
                        },
                        BooleanValue: sdk.Bool(false),
                        DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                            DoubleValues: []float64{
                                3790.34,
                                7270.44,
                                965.49,
                                2703.28,
                            },
                        },
                        DoubleValue: sdk.Float64(2561.39),
                        IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                            IntValues: []string{
                                "provident",
                            },
                        },
                        IntValue: sdk.String("ipsa"),
                        JSONValue: sdk.String("molestiae"),
                        ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                            ProtoValues: []map[string]interface{}{
                                map[string]interface{}{
                                    "eius": "esse",
                                    "esse": "rem",
                                },
                                map[string]interface{}{
                                    "reprehenderit": "quidem",
                                    "fugiat": "ut",
                                    "eum": "suscipit",
                                },
                            },
                        },
                        ProtoValue: map[string]interface{}{
                            "eos": "praesentium",
                            "quisquam": "veritatis",
                            "ipsa": "id",
                            "quidem": "neque",
                        },
                        SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                            ObjectValue: sdk.String("quo"),
                        },
                        StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                            StringValues: []string{
                                "quo",
                                "fuga",
                                "eius",
                                "eos",
                            },
                        },
                        StringValue: sdk.String("voluptas"),
                    },
                },
            },
            Parameters: &shared.EnterpriseCrmFrontendsEventbusProtoEventParameters{
                Parameters: []shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                    shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                        DataType: shared.EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumProtoArray.ToPointer(),
                        Key: sdk.String("consequatur"),
                        Value: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                            BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                                BooleanValues: []bool{
                                    false,
                                    false,
                                },
                            },
                            BooleanValue: sdk.Bool(false),
                            DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                                DoubleValues: []float64{
                                    3708.53,
                                    1334.65,
                                    1970.54,
                                    7791.92,
                                },
                            },
                            DoubleValue: sdk.Float64(4598.56),
                            IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                                IntValues: []string{
                                    "aperiam",
                                    "distinctio",
                                    "quod",
                                    "dignissimos",
                                },
                            },
                            IntValue: sdk.String("inventore"),
                            JSONValue: sdk.String("nihil"),
                            ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                                ProtoValues: []map[string]interface{}{
                                    map[string]interface{}{
                                        "aliquam": "odio",
                                        "occaecati": "commodi",
                                        "sapiente": "dolores",
                                        "deserunt": "molestiae",
                                    },
                                    map[string]interface{}{
                                        "porro": "eum",
                                    },
                                    map[string]interface{}{
                                        "praesentium": "consequuntur",
                                        "deleniti": "fugit",
                                        "fuga": "mollitia",
                                    },
                                },
                            },
                            ProtoValue: map[string]interface{}{
                                "atque": "explicabo",
                                "minima": "nisi",
                            },
                            SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                                ObjectValue: sdk.String("fugit"),
                            },
                            StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                                StringValues: []string{
                                    "consequuntur",
                                    "ratione",
                                    "explicabo",
                                    "saepe",
                                },
                            },
                            StringValue: sdk.String("occaecati"),
                        },
                    },
                },
            },
            RequestID: sdk.String("atque"),
            TriggerID: sdk.String("et"),
        },
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("esse"),
        Name: "Marco Terry PhD",
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("harum"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("rerum"),
    }, operations.IntegrationsProjectsLocationsProductsIntegrationsExecuteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancel

Cancellation of an execution

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancel(ctx, operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "distinctio": "eligendi",
            "sit": "culpa",
        },
        AccessToken: sdk.String("tempore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cumque"),
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("consequatur"),
        Name: "Calvin Williamson",
        OauthToken: sdk.String("blanditiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("nulla"),
    }, operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaCancelExecutionResponse != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsProductsIntegrationsExecutionsList

Lists the results of all the integration executions. The response includes the same information as the [execution log](https://cloud.google.com/application-integration/docs/viewing-logs) in the Integration UI.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsProductsIntegrationsExecutionsList(ctx, operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("error"),
        Filter: sdk.String("sint"),
        FilterParamsCustomFilter: sdk.String("pariatur"),
        FilterParamsEndTime: sdk.String("possimus"),
        FilterParamsEventStatuses: []string{
            "eveniet",
        },
        FilterParamsExecutionID: sdk.String("asperiores"),
        FilterParamsParameterKey: sdk.String("facere"),
        FilterParamsParameterPairKey: sdk.String("veritatis"),
        FilterParamsParameterPairValue: sdk.String("consequuntur"),
        FilterParamsParameterType: sdk.String("quasi"),
        FilterParamsParameterValue: sdk.String("similique"),
        FilterParamsStartTime: sdk.String("culpa"),
        FilterParamsTaskStatuses: []string{
            "tenetur",
            "quae",
        },
        FilterParamsWorkflowName: sdk.String("earum"),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("in"),
        OrderBy: sdk.String("eius"),
        PageSize: sdk.Int64(727697),
        PageToken: sdk.String("illum"),
        Parent: "soluta",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        ReadMask: sdk.String("aliquam"),
        RefreshACL: sdk.Bool(false),
        TruncateParams: sdk.Bool(false),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaListExecutionsResponse != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLift

* Lifts suspension for advanced suspension task. Fetch corresponding suspension with provided suspension Id, resolve suspension, and set up suspension result for the Suspension Task.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLift(ctx, operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudIntegrationsV1alphaLiftSuspensionRequest: &shared.GoogleCloudIntegrationsV1alphaLiftSuspensionRequest{
            SuspensionResult: sdk.String("reprehenderit"),
        },
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aut"),
        Fields: sdk.String("voluptatum"),
        Key: sdk.String("qui"),
        Name: "Marc Leuschke",
        OauthToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaLiftSuspensionResponse != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsList

* Lists suspensions associated with a specific execution. Only those with permissions to resolve the relevant suspensions will be able to view them.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsList(ctx, operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("minima"),
        Filter: sdk.String("veritatis"),
        Key: sdk.String("consectetur"),
        OauthToken: sdk.String("adipisci"),
        OrderBy: sdk.String("iste"),
        PageSize: sdk.Int64(839513),
        PageToken: sdk.String("accusantium"),
        Parent: "rem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aut"),
        UploadType: sdk.String("laudantium"),
        UploadProtocol: sdk.String("eum"),
    }, operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaListSuspensionsResponse != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolve

* Resolves (lifts/rejects) any number of suspensions. If the integration is already running, only the status of the suspension is updated. Otherwise, the suspended integration will begin execution again.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolve(ctx, operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudIntegrationsV1alphaResolveSuspensionRequestInput: &shared.GoogleCloudIntegrationsV1alphaResolveSuspensionRequestInput{
            Suspension: &shared.GoogleCloudIntegrationsV1alphaSuspensionInput{
                ApprovalConfig: &shared.GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput{
                    CustomMessage: sdk.String("ab"),
                    EmailAddresses: []string{
                        "non",
                        "voluptatem",
                        "dolor",
                    },
                    Expiration: &shared.GoogleCloudIntegrationsV1alphaSuspensionApprovalExpirationInput{
                        LiftWhenExpired: sdk.Bool(false),
                        RemindTime: sdk.String("occaecati"),
                    },
                },
                Audit: &shared.GoogleCloudIntegrationsV1alphaSuspensionAudit{
                    ResolveTime: sdk.String("numquam"),
                    Resolver: sdk.String("impedit"),
                },
                EventExecutionInfoID: sdk.String("explicabo"),
                Integration: sdk.String("voluptas"),
                Name: sdk.String("Marian Buckridge"),
                State: shared.GoogleCloudIntegrationsV1alphaSuspensionStateEnumResolutionStateUnspecified.ToPointer(),
                SuspensionConfig: &shared.EnterpriseCrmEventbusProtoSuspensionConfig{
                    CustomMessage: sdk.String("voluptatibus"),
                    Notifications: []shared.EnterpriseCrmEventbusProtoNotification{
                        shared.EnterpriseCrmEventbusProtoNotification{
                            BuganizerNotification: &shared.EnterpriseCrmEventbusProtoBuganizerNotification{
                                AssigneeEmailAddress: sdk.String("asperiores"),
                                ComponentID: sdk.String("aperiam"),
                                TemplateID: sdk.String("ea"),
                                Title: sdk.String("Mrs."),
                            },
                            EmailAddress: &shared.EnterpriseCrmEventbusProtoAddress{
                                Email: sdk.String("Ricky.Nikolaus64@gmail.com"),
                                Name: sdk.String("Vernon Bergnaum"),
                                Tokens: []shared.EnterpriseCrmEventbusProtoToken{
                                    shared.EnterpriseCrmEventbusProtoToken{
                                        Name: sdk.String("Kathleen Flatley"),
                                        Value: sdk.String("suscipit"),
                                    },
                                    shared.EnterpriseCrmEventbusProtoToken{
                                        Name: sdk.String("Molly O'Reilly"),
                                        Value: sdk.String("fugiat"),
                                    },
                                    shared.EnterpriseCrmEventbusProtoToken{
                                        Name: sdk.String("Dora Luettgen"),
                                        Value: sdk.String("possimus"),
                                    },
                                    shared.EnterpriseCrmEventbusProtoToken{
                                        Name: sdk.String("Felipe Johns"),
                                        Value: sdk.String("reiciendis"),
                                    },
                                },
                            },
                            EscalatorQueue: sdk.String("assumenda"),
                            PubsubTopic: sdk.String("nemo"),
                            Request: &shared.EnterpriseCrmEventbusProtoCustomSuspensionRequest{
                                PostToQueueWithTriggerIDRequest: &shared.GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequest{
                                    ClientID: sdk.String("recusandae"),
                                    IgnoreErrorIfNoActiveWorkflow: sdk.Bool(false),
                                    Parameters: &shared.EnterpriseCrmEventbusProtoEventParameters{
                                        Parameters: []shared.EnterpriseCrmEventbusProtoParameterEntry{
                                            shared.EnterpriseCrmEventbusProtoParameterEntry{
                                                Key: sdk.String("aperiam"),
                                                Value: &shared.EnterpriseCrmEventbusProtoParameterValueType{
                                                    BooleanArray: &shared.EnterpriseCrmEventbusProtoBooleanParameterArray{
                                                        BooleanValues: []bool{
                                                            false,
                                                            false,
                                                            false,
                                                        },
                                                    },
                                                    BooleanValue: sdk.Bool(false),
                                                    DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleParameterArray{
                                                        DoubleValues: []float64{
                                                            4490.83,
                                                        },
                                                    },
                                                    DoubleValue: sdk.Float64(3485.19),
                                                    IntArray: &shared.EnterpriseCrmEventbusProtoIntParameterArray{
                                                        IntValues: []string{
                                                            "facere",
                                                            "numquam",
                                                            "doloribus",
                                                            "suscipit",
                                                        },
                                                    },
                                                    IntValue: sdk.String("reiciendis"),
                                                    ProtoArray: &shared.EnterpriseCrmEventbusProtoProtoParameterArray{
                                                        ProtoValues: []map[string]interface{}{
                                                            map[string]interface{}{
                                                                "necessitatibus": "dolore",
                                                                "sunt": "asperiores",
                                                                "adipisci": "non",
                                                                "amet": "beatae",
                                                            },
                                                            map[string]interface{}{
                                                                "a": "debitis",
                                                                "consectetur": "corporis",
                                                            },
                                                            map[string]interface{}{
                                                                "laboriosam": "ipsa",
                                                                "voluptates": "libero",
                                                                "vitae": "accusamus",
                                                            },
                                                        },
                                                    },
                                                    ProtoValue: map[string]interface{}{
                                                        "tempora": "aspernatur",
                                                        "voluptas": "voluptas",
                                                        "voluptas": "minima",
                                                    },
                                                    SerializedObjectValue: &shared.EnterpriseCrmEventbusProtoSerializedObjectParameter{
                                                        ObjectValue: sdk.String("nobis"),
                                                    },
                                                    StringArray: &shared.EnterpriseCrmEventbusProtoStringParameterArray{
                                                        StringValues: []string{
                                                            "adipisci",
                                                            "minus",
                                                            "dolores",
                                                        },
                                                    },
                                                    StringValue: sdk.String("blanditiis"),
                                                },
                                            },
                                            shared.EnterpriseCrmEventbusProtoParameterEntry{
                                                Key: sdk.String("in"),
                                                Value: &shared.EnterpriseCrmEventbusProtoParameterValueType{
                                                    BooleanArray: &shared.EnterpriseCrmEventbusProtoBooleanParameterArray{
                                                        BooleanValues: []bool{
                                                            false,
                                                            false,
                                                        },
                                                    },
                                                    BooleanValue: sdk.Bool(false),
                                                    DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleParameterArray{
                                                        DoubleValues: []float64{
                                                            8859.63,
                                                            8391.89,
                                                        },
                                                    },
                                                    DoubleValue: sdk.Float64(3518.7),
                                                    IntArray: &shared.EnterpriseCrmEventbusProtoIntParameterArray{
                                                        IntValues: []string{
                                                            "cum",
                                                        },
                                                    },
                                                    IntValue: sdk.String("blanditiis"),
                                                    ProtoArray: &shared.EnterpriseCrmEventbusProtoProtoParameterArray{
                                                        ProtoValues: []map[string]interface{}{
                                                            map[string]interface{}{
                                                                "nesciunt": "culpa",
                                                                "corrupti": "pariatur",
                                                                "totam": "hic",
                                                                "exercitationem": "nobis",
                                                            },
                                                            map[string]interface{}{
                                                                "rerum": "sed",
                                                            },
                                                            map[string]interface{}{
                                                                "explicabo": "asperiores",
                                                                "facilis": "voluptate",
                                                                "expedita": "ab",
                                                                "iste": "dolore",
                                                            },
                                                        },
                                                    },
                                                    ProtoValue: map[string]interface{}{
                                                        "sed": "in",
                                                        "commodi": "quidem",
                                                        "explicabo": "voluptas",
                                                    },
                                                    SerializedObjectValue: &shared.EnterpriseCrmEventbusProtoSerializedObjectParameter{
                                                        ObjectValue: sdk.String("unde"),
                                                    },
                                                    StringArray: &shared.EnterpriseCrmEventbusProtoStringParameterArray{
                                                        StringValues: []string{
                                                            "suscipit",
                                                        },
                                                    },
                                                    StringValue: sdk.String("sapiente"),
                                                },
                                            },
                                        },
                                    },
                                    Priority: shared.GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequestPriorityEnumCriticalPlus.ToPointer(),
                                    RequestID: sdk.String("illo"),
                                    ResourceName: sdk.String("reiciendis"),
                                    ScheduledTime: sdk.String("perferendis"),
                                    TestMode: sdk.Bool(false),
                                    TriggerID: sdk.String("corrupti"),
                                    WorkflowName: sdk.String("maiores"),
                                },
                                SuspensionInfoEventParameterKey: sdk.String("incidunt"),
                            },
                        },
                        shared.EnterpriseCrmEventbusProtoNotification{
                            BuganizerNotification: &shared.EnterpriseCrmEventbusProtoBuganizerNotification{
                                AssigneeEmailAddress: sdk.String("sed"),
                                ComponentID: sdk.String("provident"),
                                TemplateID: sdk.String("eius"),
                                Title: sdk.String("Dr."),
                            },
                            EmailAddress: &shared.EnterpriseCrmEventbusProtoAddress{
                                Email: sdk.String("Gwen_McClure@gmail.com"),
                                Name: sdk.String("Rhonda Klocko"),
                                Tokens: []shared.EnterpriseCrmEventbusProtoToken{
                                    shared.EnterpriseCrmEventbusProtoToken{
                                        Name: sdk.String("Cecelia Lakin"),
                                        Value: sdk.String("incidunt"),
                                    },
                                },
                            },
                            EscalatorQueue: sdk.String("ipsam"),
                            PubsubTopic: sdk.String("debitis"),
                            Request: &shared.EnterpriseCrmEventbusProtoCustomSuspensionRequest{
                                PostToQueueWithTriggerIDRequest: &shared.GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequest{
                                    ClientID: sdk.String("rem"),
                                    IgnoreErrorIfNoActiveWorkflow: sdk.Bool(false),
                                    Parameters: &shared.EnterpriseCrmEventbusProtoEventParameters{
                                        Parameters: []shared.EnterpriseCrmEventbusProtoParameterEntry{
                                            shared.EnterpriseCrmEventbusProtoParameterEntry{
                                                Key: sdk.String("nobis"),
                                                Value: &shared.EnterpriseCrmEventbusProtoParameterValueType{
                                                    BooleanArray: &shared.EnterpriseCrmEventbusProtoBooleanParameterArray{
                                                        BooleanValues: []bool{
                                                            false,
                                                            false,
                                                            false,
                                                        },
                                                    },
                                                    BooleanValue: sdk.Bool(false),
                                                    DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleParameterArray{
                                                        DoubleValues: []float64{
                                                            3295.43,
                                                            9241.59,
                                                        },
                                                    },
                                                    DoubleValue: sdk.Float64(9671.22),
                                                    IntArray: &shared.EnterpriseCrmEventbusProtoIntParameterArray{
                                                        IntValues: []string{
                                                            "magni",
                                                            "aperiam",
                                                            "saepe",
                                                            "numquam",
                                                        },
                                                    },
                                                    IntValue: sdk.String("veniam"),
                                                    ProtoArray: &shared.EnterpriseCrmEventbusProtoProtoParameterArray{
                                                        ProtoValues: []map[string]interface{}{
                                                            map[string]interface{}{
                                                                "beatae": "laudantium",
                                                                "exercitationem": "praesentium",
                                                                "cum": "laboriosam",
                                                                "dolorum": "voluptatum",
                                                            },
                                                            map[string]interface{}{
                                                                "hic": "expedita",
                                                                "debitis": "neque",
                                                                "dolorum": "nostrum",
                                                            },
                                                        },
                                                    },
                                                    ProtoValue: map[string]interface{}{
                                                        "dolorum": "corrupti",
                                                        "accusamus": "tempora",
                                                        "atque": "fugit",
                                                    },
                                                    SerializedObjectValue: &shared.EnterpriseCrmEventbusProtoSerializedObjectParameter{
                                                        ObjectValue: sdk.String("ut"),
                                                    },
                                                    StringArray: &shared.EnterpriseCrmEventbusProtoStringParameterArray{
                                                        StringValues: []string{
                                                            "voluptatem",
                                                            "culpa",
                                                            "expedita",
                                                            "magnam",
                                                        },
                                                    },
                                                    StringValue: sdk.String("consequatur"),
                                                },
                                            },
                                        },
                                    },
                                    Priority: shared.GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequestPriorityEnumSheddablePlus.ToPointer(),
                                    RequestID: sdk.String("ipsam"),
                                    ResourceName: sdk.String("sit"),
                                    ScheduledTime: sdk.String("voluptatum"),
                                    TestMode: sdk.Bool(false),
                                    TriggerID: sdk.String("quas"),
                                    WorkflowName: sdk.String("repudiandae"),
                                },
                                SuspensionInfoEventParameterKey: sdk.String("corporis"),
                            },
                        },
                    },
                    SuspensionExpiration: &shared.EnterpriseCrmEventbusProtoSuspensionExpiration{
                        ExpireAfterMs: sdk.Int(89494),
                        LiftWhenExpired: sdk.Bool(false),
                        RemindAfterMs: sdk.Int(502710),
                    },
                    WhoMayResolve: []shared.EnterpriseCrmEventbusProtoSuspensionAuthPermissions{
                        shared.EnterpriseCrmEventbusProtoSuspensionAuthPermissions{
                            GaiaIdentity: &shared.EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity{
                                EmailAddress: sdk.String("sed"),
                                GaiaID: sdk.String("sit"),
                            },
                            GoogleGroup: &shared.EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity{
                                EmailAddress: sdk.String("vel"),
                                GaiaID: sdk.String("nostrum"),
                            },
                            LoasRole: sdk.String("saepe"),
                            MdbGroup: sdk.String("error"),
                        },
                        shared.EnterpriseCrmEventbusProtoSuspensionAuthPermissions{
                            GaiaIdentity: &shared.EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity{
                                EmailAddress: sdk.String("consequatur"),
                                GaiaID: sdk.String("incidunt"),
                            },
                            GoogleGroup: &shared.EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity{
                                EmailAddress: sdk.String("reiciendis"),
                                GaiaID: sdk.String("dolorem"),
                            },
                            LoasRole: sdk.String("harum"),
                            MdbGroup: sdk.String("dicta"),
                        },
                    },
                },
                TaskID: sdk.String("architecto"),
            },
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("atque"),
        Key: sdk.String("laborum"),
        Name: "Mrs. Roman Howell",
        OauthToken: sdk.String("voluptate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("unde"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("provident"),
    }, operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaResolveSuspensionResponse != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsProductsIntegrationsList

Returns the list of all integrations in the specified project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsProductsIntegrationsList(ctx, operations.IntegrationsProjectsLocationsProductsIntegrationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("est"),
        Filter: sdk.String("quidem"),
        Key: sdk.String("reprehenderit"),
        OauthToken: sdk.String("facere"),
        OrderBy: sdk.String("fuga"),
        PageSize: sdk.Int64(509807),
        PageToken: sdk.String("mollitia"),
        Parent: "veniam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatem"),
        UploadType: sdk.String("quisquam"),
        UploadProtocol: sdk.String("repudiandae"),
    }, operations.IntegrationsProjectsLocationsProductsIntegrationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaListIntegrationsResponse != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsProductsIntegrationsSchedule

Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsProductsIntegrationsSchedule(ctx, operations.IntegrationsProjectsLocationsProductsIntegrationsScheduleRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest: &shared.GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest{
            InputParameters: map[string]shared.GoogleCloudIntegrationsV1alphaValueType{
                "reprehenderit": shared.GoogleCloudIntegrationsV1alphaValueType{
                    BooleanArray: &shared.GoogleCloudIntegrationsV1alphaBooleanParameterArray{
                        BooleanValues: []bool{
                            false,
                            false,
                            false,
                            false,
                        },
                    },
                    BooleanValue: sdk.Bool(false),
                    DoubleArray: &shared.GoogleCloudIntegrationsV1alphaDoubleParameterArray{
                        DoubleValues: []float64{
                            3831.03,
                            6939.57,
                            8066.7,
                        },
                    },
                    DoubleValue: sdk.Float64(908.85),
                    IntArray: &shared.GoogleCloudIntegrationsV1alphaIntParameterArray{
                        IntValues: []string{
                            "amet",
                            "assumenda",
                        },
                    },
                    IntValue: sdk.String("ea"),
                    JSONValue: sdk.String("atque"),
                    StringArray: &shared.GoogleCloudIntegrationsV1alphaStringParameterArray{
                        StringValues: []string{
                            "officiis",
                            "officiis",
                            "accusamus",
                        },
                    },
                    StringValue: sdk.String("natus"),
                },
                "minima": shared.GoogleCloudIntegrationsV1alphaValueType{
                    BooleanArray: &shared.GoogleCloudIntegrationsV1alphaBooleanParameterArray{
                        BooleanValues: []bool{
                            false,
                        },
                    },
                    BooleanValue: sdk.Bool(false),
                    DoubleArray: &shared.GoogleCloudIntegrationsV1alphaDoubleParameterArray{
                        DoubleValues: []float64{
                            9805.81,
                            5446.47,
                        },
                    },
                    DoubleValue: sdk.Float64(8717.86),
                    IntArray: &shared.GoogleCloudIntegrationsV1alphaIntParameterArray{
                        IntValues: []string{
                            "blanditiis",
                            "suscipit",
                            "repudiandae",
                        },
                    },
                    IntValue: sdk.String("atque"),
                    JSONValue: sdk.String("atque"),
                    StringArray: &shared.GoogleCloudIntegrationsV1alphaStringParameterArray{
                        StringValues: []string{
                            "recusandae",
                        },
                    },
                    StringValue: sdk.String("dolorum"),
                },
                "repellendus": shared.GoogleCloudIntegrationsV1alphaValueType{
                    BooleanArray: &shared.GoogleCloudIntegrationsV1alphaBooleanParameterArray{
                        BooleanValues: []bool{
                            false,
                            false,
                        },
                    },
                    BooleanValue: sdk.Bool(false),
                    DoubleArray: &shared.GoogleCloudIntegrationsV1alphaDoubleParameterArray{
                        DoubleValues: []float64{
                            429.76,
                            9197.83,
                            1160.98,
                            360.33,
                        },
                    },
                    DoubleValue: sdk.Float64(1064.29),
                    IntArray: &shared.GoogleCloudIntegrationsV1alphaIntParameterArray{
                        IntValues: []string{
                            "enim",
                        },
                    },
                    IntValue: sdk.String("laboriosam"),
                    JSONValue: sdk.String("velit"),
                    StringArray: &shared.GoogleCloudIntegrationsV1alphaStringParameterArray{
                        StringValues: []string{
                            "molestias",
                            "magnam",
                            "saepe",
                            "consequuntur",
                        },
                    },
                    StringValue: sdk.String("occaecati"),
                },
            },
            ParameterEntries: []shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                    DataType: shared.EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumProtoArray.ToPointer(),
                    Key: sdk.String("in"),
                    Value: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                        BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                            BooleanValues: []bool{
                                false,
                            },
                        },
                        BooleanValue: sdk.Bool(false),
                        DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                            DoubleValues: []float64{
                                5808.87,
                                1602.3,
                                1458.7,
                                6611.18,
                            },
                        },
                        DoubleValue: sdk.Float64(3356.31),
                        IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                            IntValues: []string{
                                "error",
                                "illo",
                            },
                        },
                        IntValue: sdk.String("corporis"),
                        JSONValue: sdk.String("quidem"),
                        ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                            ProtoValues: []map[string]interface{}{
                                map[string]interface{}{
                                    "vero": "doloremque",
                                },
                                map[string]interface{}{
                                    "ipsa": "totam",
                                    "quae": "molestiae",
                                },
                                map[string]interface{}{
                                    "qui": "cum",
                                    "iure": "necessitatibus",
                                    "ratione": "laborum",
                                    "distinctio": "voluptatum",
                                },
                                map[string]interface{}{
                                    "aliquam": "ad",
                                    "repellat": "alias",
                                    "corporis": "perspiciatis",
                                },
                            },
                        },
                        ProtoValue: map[string]interface{}{
                            "mollitia": "voluptas",
                            "alias": "maiores",
                        },
                        SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                            ObjectValue: sdk.String("reiciendis"),
                        },
                        StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                            StringValues: []string{
                                "id",
                            },
                        },
                        StringValue: sdk.String("minima"),
                    },
                },
                shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                    DataType: shared.EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumProtoValue.ToPointer(),
                    Key: sdk.String("dolorum"),
                    Value: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                        BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                            BooleanValues: []bool{
                                false,
                            },
                        },
                        BooleanValue: sdk.Bool(false),
                        DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                            DoubleValues: []float64{
                                9257.03,
                            },
                        },
                        DoubleValue: sdk.Float64(6072.49),
                        IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                            IntValues: []string{
                                "molestiae",
                                "ex",
                            },
                        },
                        IntValue: sdk.String("ut"),
                        JSONValue: sdk.String("culpa"),
                        ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                            ProtoValues: []map[string]interface{}{
                                map[string]interface{}{
                                    "laudantium": "eum",
                                    "nemo": "recusandae",
                                    "esse": "provident",
                                    "quis": "eum",
                                },
                            },
                        },
                        ProtoValue: map[string]interface{}{
                            "provident": "aspernatur",
                            "ullam": "quasi",
                            "animi": "nostrum",
                            "mollitia": "provident",
                        },
                        SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                            ObjectValue: sdk.String("possimus"),
                        },
                        StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                            StringValues: []string{
                                "ex",
                                "aliquid",
                                "accusantium",
                            },
                        },
                        StringValue: sdk.String("repellat"),
                    },
                },
                shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                    DataType: shared.EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumJSONValue.ToPointer(),
                    Key: sdk.String("ullam"),
                    Value: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                        BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                            BooleanValues: []bool{
                                false,
                                false,
                            },
                        },
                        BooleanValue: sdk.Bool(false),
                        DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                            DoubleValues: []float64{
                                9376.36,
                                6375.83,
                                6720.41,
                            },
                        },
                        DoubleValue: sdk.Float64(8130.54),
                        IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                            IntValues: []string{
                                "voluptatibus",
                                "molestias",
                            },
                        },
                        IntValue: sdk.String("officiis"),
                        JSONValue: sdk.String("sapiente"),
                        ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                            ProtoValues: []map[string]interface{}{
                                map[string]interface{}{
                                    "rerum": "tempora",
                                },
                                map[string]interface{}{
                                    "inventore": "fugit",
                                    "cumque": "quae",
                                },
                                map[string]interface{}{
                                    "velit": "aspernatur",
                                },
                                map[string]interface{}{
                                    "eius": "rem",
                                    "at": "impedit",
                                },
                            },
                        },
                        ProtoValue: map[string]interface{}{
                            "sapiente": "eum",
                        },
                        SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                            ObjectValue: sdk.String("dicta"),
                        },
                        StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                            StringValues: []string{
                                "beatae",
                                "cupiditate",
                            },
                        },
                        StringValue: sdk.String("provident"),
                    },
                },
                shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                    DataType: shared.EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumNonSerializableObject.ToPointer(),
                    Key: sdk.String("soluta"),
                    Value: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                        BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                            BooleanValues: []bool{
                                false,
                                false,
                                false,
                                false,
                            },
                        },
                        BooleanValue: sdk.Bool(false),
                        DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                            DoubleValues: []float64{
                                525.08,
                                9358.33,
                                5962.11,
                                9834.27,
                            },
                        },
                        DoubleValue: sdk.Float64(8918.01),
                        IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                            IntValues: []string{
                                "porro",
                                "suscipit",
                            },
                        },
                        IntValue: sdk.String("dolorem"),
                        JSONValue: sdk.String("fugit"),
                        ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                            ProtoValues: []map[string]interface{}{
                                map[string]interface{}{
                                    "ratione": "animi",
                                    "necessitatibus": "nulla",
                                    "consequatur": "quasi",
                                },
                                map[string]interface{}{
                                    "ducimus": "natus",
                                },
                                map[string]interface{}{
                                    "suscipit": "adipisci",
                                    "quasi": "magni",
                                    "doloribus": "nulla",
                                },
                                map[string]interface{}{
                                    "ipsa": "tempora",
                                    "nihil": "molestiae",
                                    "dicta": "iusto",
                                    "esse": "praesentium",
                                },
                            },
                        },
                        ProtoValue: map[string]interface{}{
                            "reiciendis": "vel",
                            "architecto": "fugiat",
                            "doloremque": "dicta",
                            "odio": "tempora",
                        },
                        SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                            ObjectValue: sdk.String("esse"),
                        },
                        StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                            StringValues: []string{
                                "consectetur",
                                "aliquid",
                            },
                        },
                        StringValue: sdk.String("ipsa"),
                    },
                },
            },
            Parameters: &shared.EnterpriseCrmEventbusProtoEventParameters{
                Parameters: []shared.EnterpriseCrmEventbusProtoParameterEntry{
                    shared.EnterpriseCrmEventbusProtoParameterEntry{
                        Key: sdk.String("sunt"),
                        Value: &shared.EnterpriseCrmEventbusProtoParameterValueType{
                            BooleanArray: &shared.EnterpriseCrmEventbusProtoBooleanParameterArray{
                                BooleanValues: []bool{
                                    false,
                                    false,
                                },
                            },
                            BooleanValue: sdk.Bool(false),
                            DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleParameterArray{
                                DoubleValues: []float64{
                                    7137.67,
                                    3996.67,
                                    6391.87,
                                    3813.97,
                                },
                            },
                            DoubleValue: sdk.Float64(3991.61),
                            IntArray: &shared.EnterpriseCrmEventbusProtoIntParameterArray{
                                IntValues: []string{
                                    "eum",
                                },
                            },
                            IntValue: sdk.String("voluptas"),
                            ProtoArray: &shared.EnterpriseCrmEventbusProtoProtoParameterArray{
                                ProtoValues: []map[string]interface{}{
                                    map[string]interface{}{
                                        "ab": "error",
                                        "possimus": "voluptates",
                                        "mollitia": "laborum",
                                    },
                                    map[string]interface{}{
                                        "ad": "deleniti",
                                        "enim": "vitae",
                                        "repellendus": "ex",
                                    },
                                    map[string]interface{}{
                                        "ex": "ut",
                                        "ad": "expedita",
                                        "voluptatem": "molestias",
                                        "cum": "aliquid",
                                    },
                                },
                            },
                            ProtoValue: map[string]interface{}{
                                "voluptatum": "omnis",
                            },
                            SerializedObjectValue: &shared.EnterpriseCrmEventbusProtoSerializedObjectParameter{
                                ObjectValue: sdk.String("veritatis"),
                            },
                            StringArray: &shared.EnterpriseCrmEventbusProtoStringParameterArray{
                                StringValues: []string{
                                    "est",
                                    "culpa",
                                    "voluptatem",
                                },
                            },
                            StringValue: sdk.String("sapiente"),
                        },
                    },
                    shared.EnterpriseCrmEventbusProtoParameterEntry{
                        Key: sdk.String("officiis"),
                        Value: &shared.EnterpriseCrmEventbusProtoParameterValueType{
                            BooleanArray: &shared.EnterpriseCrmEventbusProtoBooleanParameterArray{
                                BooleanValues: []bool{
                                    false,
                                },
                            },
                            BooleanValue: sdk.Bool(false),
                            DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleParameterArray{
                                DoubleValues: []float64{
                                    8671.68,
                                    8913.15,
                                    291.9,
                                },
                            },
                            DoubleValue: sdk.Float64(12.07),
                            IntArray: &shared.EnterpriseCrmEventbusProtoIntParameterArray{
                                IntValues: []string{
                                    "earum",
                                    "ex",
                                    "sapiente",
                                },
                            },
                            IntValue: sdk.String("rem"),
                            ProtoArray: &shared.EnterpriseCrmEventbusProtoProtoParameterArray{
                                ProtoValues: []map[string]interface{}{
                                    map[string]interface{}{
                                        "asperiores": "ratione",
                                        "ullam": "perferendis",
                                    },
                                    map[string]interface{}{
                                        "totam": "impedit",
                                        "quibusdam": "nam",
                                        "ipsam": "culpa",
                                        "dolor": "aliquam",
                                    },
                                    map[string]interface{}{
                                        "deleniti": "veritatis",
                                    },
                                    map[string]interface{}{
                                        "dolor": "consequatur",
                                        "architecto": "sit",
                                    },
                                },
                            },
                            ProtoValue: map[string]interface{}{
                                "fugit": "ab",
                                "laudantium": "quae",
                            },
                            SerializedObjectValue: &shared.EnterpriseCrmEventbusProtoSerializedObjectParameter{
                                ObjectValue: sdk.String("dolor"),
                            },
                            StringArray: &shared.EnterpriseCrmEventbusProtoStringParameterArray{
                                StringValues: []string{
                                    "ipsam",
                                    "consequuntur",
                                    "ipsa",
                                    "quas",
                                },
                            },
                            StringValue: sdk.String("eveniet"),
                        },
                    },
                    shared.EnterpriseCrmEventbusProtoParameterEntry{
                        Key: sdk.String("impedit"),
                        Value: &shared.EnterpriseCrmEventbusProtoParameterValueType{
                            BooleanArray: &shared.EnterpriseCrmEventbusProtoBooleanParameterArray{
                                BooleanValues: []bool{
                                    false,
                                    false,
                                    false,
                                    false,
                                },
                            },
                            BooleanValue: sdk.Bool(false),
                            DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleParameterArray{
                                DoubleValues: []float64{
                                    8972.77,
                                    1533.69,
                                },
                            },
                            DoubleValue: sdk.Float64(3321.91),
                            IntArray: &shared.EnterpriseCrmEventbusProtoIntParameterArray{
                                IntValues: []string{
                                    "expedita",
                                },
                            },
                            IntValue: sdk.String("eum"),
                            ProtoArray: &shared.EnterpriseCrmEventbusProtoProtoParameterArray{
                                ProtoValues: []map[string]interface{}{
                                    map[string]interface{}{
                                        "magnam": "exercitationem",
                                        "ab": "porro",
                                        "autem": "nobis",
                                    },
                                    map[string]interface{}{
                                        "recusandae": "consequuntur",
                                        "voluptatem": "exercitationem",
                                    },
                                },
                            },
                            ProtoValue: map[string]interface{}{
                                "quasi": "nisi",
                                "at": "vero",
                                "est": "harum",
                                "sequi": "doloribus",
                            },
                            SerializedObjectValue: &shared.EnterpriseCrmEventbusProtoSerializedObjectParameter{
                                ObjectValue: sdk.String("repudiandae"),
                            },
                            StringArray: &shared.EnterpriseCrmEventbusProtoStringParameterArray{
                                StringValues: []string{
                                    "occaecati",
                                    "nemo",
                                    "voluptate",
                                    "blanditiis",
                                },
                            },
                            StringValue: sdk.String("officia"),
                        },
                    },
                },
            },
            RequestID: sdk.String("voluptas"),
            ScheduleTime: sdk.String("numquam"),
            TriggerID: sdk.String("nemo"),
        },
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("ducimus"),
        Key: sdk.String("nesciunt"),
        Name: "Ms. Armando Gottlieb",
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("consectetur"),
    }, operations.IntegrationsProjectsLocationsProductsIntegrationsScheduleSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaScheduleIntegrationsResponse != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsProductsIntegrationsVersionsDownload

Downloads an integration. Retrieves the `IntegrationVersion` for a given `integration_id` and returns the response as a string.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownload(ctx, operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cupiditate"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("soluta"),
        Fields: sdk.String("alias"),
        FileFormat: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadFileFormatEnumJSON.ToPointer(),
        Key: sdk.String("eos"),
        Name: "Miss Joey Dach",
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaDownloadIntegrationVersionResponse != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsProductsIntegrationsVersionsPublish

This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. This RPC throws an exception if the version being published is DRAFT, and if the `locked_by` user is not the same as the user performing the Publish. Audit fields updated include last_published_timestamp, last_published_by, last_modified_timestamp, last_modified_by. Any existing lock is on this integration is released.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsProductsIntegrationsVersionsPublish(ctx, operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "maxime": "magnam",
            "temporibus": "quos",
            "commodi": "itaque",
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("earum"),
        Fields: sdk.String("modi"),
        Key: sdk.String("nam"),
        Name: "Kenneth Hilpert Sr.",
        OauthToken: sdk.String("non"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("sint"),
    }, operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaPublishIntegrationVersionResponse != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLock

Clears the `locked_by` and `locked_at_timestamp`in the DRAFT version of this integration. It then performs the same action as the CreateDraftIntegrationVersion (i.e., copies the DRAFT version of the integration as a SNAPSHOT and then creates a new DRAFT version with the `locked_by` set to the `user_taking_over` and the `locked_at_timestamp` set to the current timestamp). Both the `locked_by` and `user_taking_over` are notified via email about the takeover. This RPC throws an exception if the integration is not in DRAFT status or if the `locked_by` and `locked_at_timestamp` fields are not set.The TakeoverEdit lock is treated the same as an edit of the integration, and hence shares ACLs with edit. Audit fields updated include last_modified_timestamp, last_modified_by.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLock(ctx, operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "esse": "nemo",
            "reprehenderit": "est",
            "quis": "sint",
        },
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("necessitatibus"),
        IntegrationVersion: "asperiores",
        Key: sdk.String("ex"),
        OauthToken: sdk.String("voluptas"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("quae"),
    }, operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaTakeoverEditLockResponse != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsProductsIntegrationsVersionsUnpublish

Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it. The "HEAD" and "PUBLISH_REQUESTED" tags do not change. This RPC throws an exception if the version being snapshot is not ACTIVE. Audit fields added include action, action_by, action_timestamp.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsProductsIntegrationsVersionsUnpublish(ctx, operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUnpublishRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "laborum": "consectetur",
            "velit": "atque",
            "ipsum": "impedit",
        },
        AccessToken: sdk.String("magni"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("nam"),
        Key: sdk.String("dolore"),
        Name: "Colleen Dickinson",
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("iure"),
    }, operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUnpublishSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsProductsIntegrationsVersionsUpload

Uploads an integration. The content can be a previously downloaded integration. Performs the same function as CreateDraftIntegrationVersion, but accepts input in a string format, which holds the complete representation of the IntegrationVersion content.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsProductsIntegrationsVersionsUpload(ctx, operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequest: &shared.GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequest{
            Content: sdk.String("voluptatibus"),
            FileFormat: shared.GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequestFileFormatEnumJSON.ToPointer(),
        },
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("inventore"),
        Fields: sdk.String("facere"),
        Key: sdk.String("libero"),
        OauthToken: sdk.String("architecto"),
        Parent: "voluptatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quia"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("aliquam"),
    }, operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponse != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreate

Creates an IntegrationTemplateVersion.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreate(ctx, operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionInput: &shared.GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionInput{
            DatabasePersistencePolicy: shared.GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnumDatabasePersistencePolicyUnspecified.ToPointer(),
            Description: sdk.String("accusantium"),
            ErrorCatcherConfigs: []shared.GoogleCloudIntegrationsV1alphaErrorCatcherConfig{
                shared.GoogleCloudIntegrationsV1alphaErrorCatcherConfig{
                    Description: sdk.String("ea"),
                    ErrorCatcherID: sdk.String("beatae"),
                    ErrorCatcherNumber: sdk.String("vero"),
                    Label: sdk.String("excepturi"),
                    Position: &shared.GoogleCloudIntegrationsV1alphaCoordinate{
                        X: sdk.Int(431994),
                        Y: sdk.Int(246557),
                    },
                    StartErrorTasks: []shared.GoogleCloudIntegrationsV1alphaNextTask{
                        shared.GoogleCloudIntegrationsV1alphaNextTask{
                            Condition: sdk.String("perspiciatis"),
                            Description: sdk.String("earum"),
                            DisplayName: sdk.String("dicta"),
                            TaskConfigID: sdk.String("impedit"),
                            TaskID: sdk.String("voluptatibus"),
                        },
                        shared.GoogleCloudIntegrationsV1alphaNextTask{
                            Condition: sdk.String("iste"),
                            Description: sdk.String("itaque"),
                            DisplayName: sdk.String("alias"),
                            TaskConfigID: sdk.String("nisi"),
                            TaskID: sdk.String("itaque"),
                        },
                    },
                },
                shared.GoogleCloudIntegrationsV1alphaErrorCatcherConfig{
                    Description: sdk.String("velit"),
                    ErrorCatcherID: sdk.String("laborum"),
                    ErrorCatcherNumber: sdk.String("non"),
                    Label: sdk.String("dolor"),
                    Position: &shared.GoogleCloudIntegrationsV1alphaCoordinate{
                        X: sdk.Int(483394),
                        Y: sdk.Int(24753),
                    },
                    StartErrorTasks: []shared.GoogleCloudIntegrationsV1alphaNextTask{
                        shared.GoogleCloudIntegrationsV1alphaNextTask{
                            Condition: sdk.String("consequatur"),
                            Description: sdk.String("officia"),
                            DisplayName: sdk.String("recusandae"),
                            TaskConfigID: sdk.String("ea"),
                            TaskID: sdk.String("quidem"),
                        },
                    },
                },
            },
            LastModifierEmail: sdk.String("voluptas"),
            ParentIntegrationVersionID: sdk.String("facilis"),
            Status: shared.GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnumSnapshot.ToPointer(),
            TaskConfigs: []shared.EnterpriseCrmFrontendsEventbusProtoTaskConfig{
                shared.EnterpriseCrmFrontendsEventbusProtoTaskConfig{
                    AlertConfigs: []shared.EnterpriseCrmEventbusProtoTaskAlertConfig{
                        shared.EnterpriseCrmEventbusProtoTaskAlertConfig{
                            AggregationPeriod: sdk.String("deleniti"),
                            AlertDisabled: sdk.Bool(false),
                            AlertName: sdk.String("a"),
                            ClientID: sdk.String("voluptate"),
                            DurationThresholdMs: sdk.String("ullam"),
                            ErrorEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "necessitatibus",
                                    "animi",
                                    "impedit",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumDefaultInclusive.ToPointer(),
                            },
                            MetricType: shared.EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnumTaskWarningRate.ToPointer(),
                            NumAggregationPeriods: sdk.Int(668234),
                            OnlyFinalAttempt: sdk.Bool(false),
                            PlaybookURL: sdk.String("error"),
                            ThresholdType: shared.EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnumExpectedMin.ToPointer(),
                            ThresholdValue: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue{
                                Absolute: sdk.String("labore"),
                                Percentage: sdk.Int(85066),
                            },
                            WarningEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "consectetur",
                                    "vitae",
                                    "inventore",
                                    "dolorem",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumDefaultInclusive.ToPointer(),
                            },
                        },
                        shared.EnterpriseCrmEventbusProtoTaskAlertConfig{
                            AggregationPeriod: sdk.String("qui"),
                            AlertDisabled: sdk.Bool(false),
                            AlertName: sdk.String("iste"),
                            ClientID: sdk.String("ex"),
                            DurationThresholdMs: sdk.String("nemo"),
                            ErrorEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "libero",
                                    "rem",
                                    "dolorum",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumDefaultInclusive.ToPointer(),
                            },
                            MetricType: shared.EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnumMetricTypeUnspecified.ToPointer(),
                            NumAggregationPeriods: sdk.Int(545),
                            OnlyFinalAttempt: sdk.Bool(false),
                            PlaybookURL: sdk.String("magni"),
                            ThresholdType: shared.EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnumExpectedMin.ToPointer(),
                            ThresholdValue: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue{
                                Absolute: sdk.String("quae"),
                                Percentage: sdk.Int(63553),
                            },
                            WarningEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "neque",
                                    "exercitationem",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumExclusive.ToPointer(),
                            },
                        },
                        shared.EnterpriseCrmEventbusProtoTaskAlertConfig{
                            AggregationPeriod: sdk.String("et"),
                            AlertDisabled: sdk.Bool(false),
                            AlertName: sdk.String("ipsum"),
                            ClientID: sdk.String("unde"),
                            DurationThresholdMs: sdk.String("nulla"),
                            ErrorEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "maxime",
                                    "quia",
                                    "quia",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumDefaultInclusive.ToPointer(),
                            },
                            MetricType: shared.EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnumTaskRate.ToPointer(),
                            NumAggregationPeriods: sdk.Int(727250),
                            OnlyFinalAttempt: sdk.Bool(false),
                            PlaybookURL: sdk.String("dicta"),
                            ThresholdType: shared.EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnumExpectedMin.ToPointer(),
                            ThresholdValue: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue{
                                Absolute: sdk.String("libero"),
                                Percentage: sdk.Int(854460),
                            },
                            WarningEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "quos",
                                    "placeat",
                                    "sit",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumDefaultInclusive.ToPointer(),
                            },
                        },
                    },
                    CreateTime: sdk.String("ipsa"),
                    CreatorEmail: sdk.String("voluptates"),
                    Description: sdk.String("inventore"),
                    DisableStrictTypeValidation: sdk.Bool(false),
                    ErrorCatcherID: sdk.String("aperiam"),
                    ExternalTaskType: shared.EnterpriseCrmFrontendsEventbusProtoTaskConfigExternalTaskTypeEnumNormalTask.ToPointer(),
                    FailurePolicy: &shared.EnterpriseCrmEventbusProtoFailurePolicy{
                        IntervalInSeconds: sdk.String("dolore"),
                        MaxNumRetries: sdk.Int(755106),
                        RetryStrategy: shared.EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnumLinearBackoff.ToPointer(),
                    },
                    IncomingEdgeCount: sdk.Int(32273),
                    JSONValidationOption: shared.EnterpriseCrmFrontendsEventbusProtoTaskConfigJSONValidationOptionEnumPreExecution.ToPointer(),
                    Label: sdk.String("esse"),
                    LastModifiedTime: sdk.String("dolores"),
                    NextTasks: []shared.EnterpriseCrmEventbusProtoNextTask{
                        shared.EnterpriseCrmEventbusProtoNextTask{
                            CombinedConditions: []shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("facere"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumGreaterThan.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        5888.12,
                                                        8822.84,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(8964.8),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "sint",
                                                        "ea",
                                                        "autem",
                                                    },
                                                },
                                                IntValue: sdk.String("ipsam"),
                                                ProtoValue: map[string]interface{}{
                                                    "laudantium": "corporis",
                                                    "officiis": "voluptatibus",
                                                    "cum": "at",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "quia",
                                                    },
                                                },
                                                StringValue: sdk.String("quidem"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("fuga"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumIsNotEmpty.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        7104.56,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(8852.08),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "quibusdam",
                                                    },
                                                },
                                                IntValue: sdk.String("odio"),
                                                ProtoValue: map[string]interface{}{
                                                    "odit": "explicabo",
                                                    "corporis": "error",
                                                    "earum": "adipisci",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "similique",
                                                        "ut",
                                                        "quidem",
                                                        "quis",
                                                    },
                                                },
                                                StringValue: sdk.String("beatae"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("unde"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumGreaterThan.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        5855.93,
                                                        1478.01,
                                                        2536.25,
                                                        2569.16,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(2010.1),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "officia",
                                                        "dignissimos",
                                                        "optio",
                                                        "necessitatibus",
                                                    },
                                                },
                                                IntValue: sdk.String("corporis"),
                                                ProtoValue: map[string]interface{}{
                                                    "expedita": "voluptatum",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "minima",
                                                        "placeat",
                                                        "enim",
                                                    },
                                                },
                                                StringValue: sdk.String("neque"),
                                            },
                                        },
                                    },
                                },
                            },
                            Condition: sdk.String("in"),
                            Description: sdk.String("minus"),
                            Label: sdk.String("eum"),
                            TaskConfigID: sdk.String("modi"),
                            TaskNumber: sdk.String("corporis"),
                        },
                        shared.EnterpriseCrmEventbusProtoNextTask{
                            CombinedConditions: []shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("maiores"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumDoesNotExist.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        7275.47,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(1897.53),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "totam",
                                                        "occaecati",
                                                    },
                                                },
                                                IntValue: sdk.String("voluptas"),
                                                ProtoValue: map[string]interface{}{
                                                    "velit": "minus",
                                                    "fuga": "nostrum",
                                                    "est": "impedit",
                                                    "delectus": "tempore",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "odit",
                                                        "repellat",
                                                        "pariatur",
                                                        "nemo",
                                                    },
                                                },
                                                StringValue: sdk.String("reprehenderit"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("aperiam"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumGreaterThan.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        4483.69,
                                                        4969.15,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(5678.46),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "error",
                                                    },
                                                },
                                                IntValue: sdk.String("veritatis"),
                                                ProtoValue: map[string]interface{}{
                                                    "voluptate": "pariatur",
                                                    "itaque": "similique",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "ex",
                                                        "quaerat",
                                                        "commodi",
                                                        "officiis",
                                                    },
                                                },
                                                StringValue: sdk.String("placeat"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("quidem"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumLessThan.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        2114.55,
                                                        2646.19,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(593.83),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "vero",
                                                        "sequi",
                                                        "repudiandae",
                                                    },
                                                },
                                                IntValue: sdk.String("cum"),
                                                ProtoValue: map[string]interface{}{
                                                    "earum": "veniam",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "dolores",
                                                        "nam",
                                                        "dicta",
                                                    },
                                                },
                                                StringValue: sdk.String("consequuntur"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("necessitatibus"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumDoesNotExist.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        4973.57,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(9804.86),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "quasi",
                                                    },
                                                },
                                                IntValue: sdk.String("laboriosam"),
                                                ProtoValue: map[string]interface{}{
                                                    "libero": "excepturi",
                                                    "occaecati": "nemo",
                                                    "aliquam": "nostrum",
                                                    "doloribus": "eligendi",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "enim",
                                                        "hic",
                                                        "animi",
                                                    },
                                                },
                                                StringValue: sdk.String("quas"),
                                            },
                                        },
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("molestias"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumGreaterThan.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        9011.63,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(1040.78),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "iste",
                                                        "assumenda",
                                                        "tempore",
                                                    },
                                                },
                                                IntValue: sdk.String("libero"),
                                                ProtoValue: map[string]interface{}{
                                                    "doloremque": "delectus",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "cum",
                                                        "ipsum",
                                                        "adipisci",
                                                        "saepe",
                                                    },
                                                },
                                                StringValue: sdk.String("deserunt"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("doloremque"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumLessThan.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        7274.81,
                                                        997.33,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(5845.93),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "eligendi",
                                                        "possimus",
                                                    },
                                                },
                                                IntValue: sdk.String("non"),
                                                ProtoValue: map[string]interface{}{
                                                    "itaque": "sed",
                                                    "asperiores": "veniam",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "facere",
                                                    },
                                                },
                                                StringValue: sdk.String("laudantium"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("odit"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumIsEmpty.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        3476.98,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(688.52),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "facilis",
                                                    },
                                                },
                                                IntValue: sdk.String("tempore"),
                                                ProtoValue: map[string]interface{}{
                                                    "voluptatibus": "quaerat",
                                                    "blanditiis": "distinctio",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "quis",
                                                        "nisi",
                                                    },
                                                },
                                                StringValue: sdk.String("libero"),
                                            },
                                        },
                                    },
                                },
                            },
                            Condition: sdk.String("minus"),
                            Description: sdk.String("facere"),
                            Label: sdk.String("facilis"),
                            TaskConfigID: sdk.String("ipsum"),
                            TaskNumber: sdk.String("ad"),
                        },
                        shared.EnterpriseCrmEventbusProtoNextTask{
                            CombinedConditions: []shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("consequuntur"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumIsNotEmpty.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        7009.28,
                                                        1797.95,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(4407.77),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "neque",
                                                        "iusto",
                                                    },
                                                },
                                                IntValue: sdk.String("est"),
                                                ProtoValue: map[string]interface{}{
                                                    "eligendi": "fugiat",
                                                    "unde": "officiis",
                                                    "ducimus": "dolor",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "error",
                                                    },
                                                },
                                                StringValue: sdk.String("porro"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("vitae"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumGreaterThan.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        8541.15,
                                                        3223.33,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(1348.18),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "delectus",
                                                        "iusto",
                                                    },
                                                },
                                                IntValue: sdk.String("dignissimos"),
                                                ProtoValue: map[string]interface{}{
                                                    "illo": "ab",
                                                    "incidunt": "accusamus",
                                                    "saepe": "tempore",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "eos",
                                                        "reiciendis",
                                                    },
                                                },
                                                StringValue: sdk.String("earum"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("reprehenderit"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumGreaterThan.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        9998.09,
                                                        7897.7,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(1972.59),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "deleniti",
                                                        "illo",
                                                    },
                                                },
                                                IntValue: sdk.String("labore"),
                                                ProtoValue: map[string]interface{}{
                                                    "aliquam": "quisquam",
                                                    "provident": "laudantium",
                                                    "repudiandae": "consequatur",
                                                    "maxime": "aspernatur",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "expedita",
                                                        "quas",
                                                        "provident",
                                                    },
                                                },
                                                StringValue: sdk.String("repudiandae"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("rerum"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumGreaterThan.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        8738.33,
                                                        6293.77,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(8339.82),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "dolorem",
                                                        "commodi",
                                                    },
                                                },
                                                IntValue: sdk.String("impedit"),
                                                ProtoValue: map[string]interface{}{
                                                    "aut": "voluptatem",
                                                    "ad": "quae",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "illum",
                                                    },
                                                },
                                                StringValue: sdk.String("praesentium"),
                                            },
                                        },
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("cum"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumContains.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        1181.26,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(5149.22),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "earum",
                                                    },
                                                },
                                                IntValue: sdk.String("iusto"),
                                                ProtoValue: map[string]interface{}{
                                                    "provident": "dolorum",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "provident",
                                                        "repudiandae",
                                                        "consequatur",
                                                        "nemo",
                                                    },
                                                },
                                                StringValue: sdk.String("molestiae"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("itaque"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumDoesNotExist.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        439.75,
                                                        5740.92,
                                                        8795.22,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(1786.35),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "dicta",
                                                        "voluptatem",
                                                        "velit",
                                                    },
                                                },
                                                IntValue: sdk.String("dolor"),
                                                ProtoValue: map[string]interface{}{
                                                    "a": "dolor",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "atque",
                                                        "beatae",
                                                        "at",
                                                    },
                                                },
                                                StringValue: sdk.String("labore"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("minus"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumGreaterThan.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        209.5,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(6985.58),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "aperiam",
                                                        "dignissimos",
                                                    },
                                                },
                                                IntValue: sdk.String("repellat"),
                                                ProtoValue: map[string]interface{}{
                                                    "porro": "provident",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "eligendi",
                                                    },
                                                },
                                                StringValue: sdk.String("dignissimos"),
                                            },
                                        },
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("soluta"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumExists.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        6396.22,
                                                        2288.57,
                                                        9485.41,
                                                        1339.49,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(7782.76),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "illum",
                                                        "laborum",
                                                        "dignissimos",
                                                        "vero",
                                                    },
                                                },
                                                IntValue: sdk.String("qui"),
                                                ProtoValue: map[string]interface{}{
                                                    "repellat": "explicabo",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "exercitationem",
                                                    },
                                                },
                                                StringValue: sdk.String("nihil"),
                                            },
                                        },
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("ab"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumUnset.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        6444.79,
                                                        9649.25,
                                                        2512.12,
                                                        7193.89,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(4502.24),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "labore",
                                                        "numquam",
                                                    },
                                                },
                                                IntValue: sdk.String("repudiandae"),
                                                ProtoValue: map[string]interface{}{
                                                    "in": "explicabo",
                                                    "accusamus": "rem",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "odit",
                                                    },
                                                },
                                                StringValue: sdk.String("deleniti"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("enim"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumGreaterThan.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        3261.18,
                                                        7275.44,
                                                        3001.89,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(242.72),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "eum",
                                                        "nesciunt",
                                                    },
                                                },
                                                IntValue: sdk.String("mollitia"),
                                                ProtoValue: map[string]interface{}{
                                                    "fugiat": "nostrum",
                                                    "molestiae": "veniam",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "ab",
                                                        "modi",
                                                        "aut",
                                                        "aut",
                                                    },
                                                },
                                                StringValue: sdk.String("eveniet"),
                                            },
                                        },
                                    },
                                },
                            },
                            Condition: sdk.String("odio"),
                            Description: sdk.String("commodi"),
                            Label: sdk.String("numquam"),
                            TaskConfigID: sdk.String("dolorum"),
                            TaskNumber: sdk.String("possimus"),
                        },
                        shared.EnterpriseCrmEventbusProtoNextTask{
                            CombinedConditions: []shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("nesciunt"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumContains.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        7912.28,
                                                        1226.62,
                                                        7151.43,
                                                        4813.75,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(5580.51),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "facilis",
                                                    },
                                                },
                                                IntValue: sdk.String("amet"),
                                                ProtoValue: map[string]interface{}{
                                                    "fuga": "alias",
                                                    "rem": "aut",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "laudantium",
                                                        "repellendus",
                                                        "veritatis",
                                                    },
                                                },
                                                StringValue: sdk.String("quae"),
                                            },
                                        },
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("saepe"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumIsNotEmpty.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        8590.03,
                                                        6409.07,
                                                        1520.27,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(302.08),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "eveniet",
                                                    },
                                                },
                                                IntValue: sdk.String("hic"),
                                                ProtoValue: map[string]interface{}{
                                                    "incidunt": "qui",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "necessitatibus",
                                                    },
                                                },
                                                StringValue: sdk.String("harum"),
                                            },
                                        },
                                    },
                                },
                            },
                            Condition: sdk.String("explicabo"),
                            Description: sdk.String("beatae"),
                            Label: sdk.String("aliquid"),
                            TaskConfigID: sdk.String("modi"),
                            TaskNumber: sdk.String("optio"),
                        },
                    },
                    NextTasksExecutionPolicy: shared.EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnumRunFirstMatch.ToPointer(),
                    Parameters: map[string]shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                        "officia": shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                            DataType: shared.EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumProtoEnumArray.ToPointer(),
                            Key: sdk.String("totam"),
                            Value: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                                BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                                    BooleanValues: []bool{
                                        false,
                                    },
                                },
                                BooleanValue: sdk.Bool(false),
                                DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                                    DoubleValues: []float64{
                                        4120.52,
                                        7745.01,
                                    },
                                },
                                DoubleValue: sdk.Float64(4983.88),
                                IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                                    IntValues: []string{
                                        "velit",
                                    },
                                },
                                IntValue: sdk.String("reiciendis"),
                                JSONValue: sdk.String("repellat"),
                                ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                                    ProtoValues: []map[string]interface{}{
                                        map[string]interface{}{
                                            "natus": "accusamus",
                                            "doloremque": "nisi",
                                            "rerum": "recusandae",
                                        },
                                        map[string]interface{}{
                                            "non": "rem",
                                            "quia": "ullam",
                                            "quisquam": "dicta",
                                            "voluptatibus": "eligendi",
                                        },
                                        map[string]interface{}{
                                            "officiis": "architecto",
                                        },
                                        map[string]interface{}{
                                            "enim": "optio",
                                        },
                                    },
                                },
                                ProtoValue: map[string]interface{}{
                                    "perferendis": "facilis",
                                    "reiciendis": "a",
                                    "iste": "dicta",
                                },
                                SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                                    ObjectValue: sdk.String("quos"),
                                },
                                StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                                    StringValues: []string{
                                        "dolore",
                                        "modi",
                                    },
                                },
                                StringValue: sdk.String("itaque"),
                            },
                        },
                        "maxime": shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                            DataType: shared.EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumBooleanValue.ToPointer(),
                            Key: sdk.String("consequuntur"),
                            Value: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                                BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                                    BooleanValues: []bool{
                                        false,
                                        false,
                                        false,
                                        false,
                                    },
                                },
                                BooleanValue: sdk.Bool(false),
                                DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                                    DoubleValues: []float64{
                                        9851.09,
                                        7737.11,
                                        7833.97,
                                        8838.19,
                                    },
                                },
                                DoubleValue: sdk.Float64(5189.9),
                                IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                                    IntValues: []string{
                                        "ab",
                                        "sint",
                                        "nihil",
                                        "esse",
                                    },
                                },
                                IntValue: sdk.String("iure"),
                                JSONValue: sdk.String("odio"),
                                ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                                    ProtoValues: []map[string]interface{}{
                                        map[string]interface{}{
                                            "vel": "neque",
                                            "corporis": "voluptas",
                                            "consequuntur": "officia",
                                            "reprehenderit": "distinctio",
                                        },
                                    },
                                },
                                ProtoValue: map[string]interface{}{
                                    "ipsa": "rem",
                                    "maiores": "accusantium",
                                },
                                SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                                    ObjectValue: sdk.String("veniam"),
                                },
                                StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                                    StringValues: []string{
                                        "neque",
                                        "facere",
                                        "aliquam",
                                        "quos",
                                    },
                                },
                                StringValue: sdk.String("doloribus"),
                            },
                        },
                        "fugiat": shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                            DataType: shared.EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumBooleanArray.ToPointer(),
                            Key: sdk.String("delectus"),
                            Value: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                                BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                                    BooleanValues: []bool{
                                        false,
                                    },
                                },
                                BooleanValue: sdk.Bool(false),
                                DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                                    DoubleValues: []float64{
                                        2010.96,
                                    },
                                },
                                DoubleValue: sdk.Float64(6308.32),
                                IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                                    IntValues: []string{
                                        "repellat",
                                    },
                                },
                                IntValue: sdk.String("nemo"),
                                JSONValue: sdk.String("doloribus"),
                                ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                                    ProtoValues: []map[string]interface{}{
                                        map[string]interface{}{
                                            "incidunt": "explicabo",
                                            "ipsam": "cupiditate",
                                            "optio": "alias",
                                        },
                                        map[string]interface{}{
                                            "nesciunt": "commodi",
                                            "sapiente": "consequuntur",
                                            "veniam": "debitis",
                                        },
                                        map[string]interface{}{
                                            "sint": "ut",
                                            "numquam": "tenetur",
                                            "adipisci": "libero",
                                        },
                                        map[string]interface{}{
                                            "minima": "ex",
                                            "minus": "ab",
                                        },
                                    },
                                },
                                ProtoValue: map[string]interface{}{
                                    "hic": "nisi",
                                },
                                SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                                    ObjectValue: sdk.String("quisquam"),
                                },
                                StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                                    StringValues: []string{
                                        "ducimus",
                                    },
                                },
                                StringValue: sdk.String("fuga"),
                            },
                        },
                    },
                    Position: &shared.EnterpriseCrmEventbusProtoCoordinate{
                        X: sdk.Int(326903),
                        Y: sdk.Int(102446),
                    },
                    Precondition: sdk.String("qui"),
                    PreconditionLabel: sdk.String("aliquid"),
                    RollbackStrategy: &shared.EnterpriseCrmFrontendsEventbusProtoRollbackStrategy{
                        Parameters: &shared.EnterpriseCrmFrontendsEventbusProtoEventParameters{
                            Parameters: []shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                                shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                                    DataType: shared.EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumBooleanValue.ToPointer(),
                                    Key: sdk.String("adipisci"),
                                    Value: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                3498.98,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(7097.01),
                                        IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "impedit",
                                                "sit",
                                                "nemo",
                                            },
                                        },
                                        IntValue: sdk.String("culpa"),
                                        JSONValue: sdk.String("consequuntur"),
                                        ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "modi": "veniam",
                                                    "quod": "itaque",
                                                    "a": "quisquam",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "doloribus": "assumenda",
                                            "officiis": "architecto",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("alias"),
                                        },
                                        StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "ipsa",
                                                "nobis",
                                                "necessitatibus",
                                            },
                                        },
                                        StringValue: sdk.String("quia"),
                                    },
                                },
                            },
                        },
                        RollbackTaskImplementationClassName: sdk.String("dicta"),
                        TaskNumbersToRollback: []string{
                            "perspiciatis",
                            "debitis",
                        },
                    },
                    SuccessPolicy: &shared.EnterpriseCrmEventbusProtoSuccessPolicy{
                        FinalState: shared.EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnumSucceeded.ToPointer(),
                    },
                    SynchronousCallFailurePolicy: &shared.EnterpriseCrmEventbusProtoFailurePolicy{
                        IntervalInSeconds: sdk.String("architecto"),
                        MaxNumRetries: sdk.Int(33771),
                        RetryStrategy: shared.EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnumUnspecified.ToPointer(),
                    },
                    TaskEntity: &shared.EnterpriseCrmFrontendsEventbusProtoTaskEntity{
                        DisabledForVpcSc: sdk.Bool(false),
                        Metadata: &shared.EnterpriseCrmEventbusProtoTaskMetadata{
                            ActiveTaskName: sdk.String("veritatis"),
                            Admins: []shared.EnterpriseCrmEventbusProtoTaskMetadataAdmin{
                                shared.EnterpriseCrmEventbusProtoTaskMetadataAdmin{
                                    GoogleGroupEmail: sdk.String("cumque"),
                                    UserEmail: sdk.String("iure"),
                                },
                                shared.EnterpriseCrmEventbusProtoTaskMetadataAdmin{
                                    GoogleGroupEmail: sdk.String("quibusdam"),
                                    UserEmail: sdk.String("quod"),
                                },
                                shared.EnterpriseCrmEventbusProtoTaskMetadataAdmin{
                                    GoogleGroupEmail: sdk.String("nemo"),
                                    UserEmail: sdk.String("recusandae"),
                                },
                            },
                            Category: shared.EnterpriseCrmEventbusProtoTaskMetadataCategoryEnumFlowControl.ToPointer(),
                            CodeSearchLink: sdk.String("magnam"),
                            DefaultJSONValidationOption: shared.EnterpriseCrmEventbusProtoTaskMetadataDefaultJSONValidationOptionEnumPreExecution.ToPointer(),
                            DefaultSpec: sdk.String("laboriosam"),
                            Description: sdk.String("sed"),
                            DescriptiveName: sdk.String("odio"),
                            DocMarkdown: sdk.String("natus"),
                            ExternalCategory: shared.EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnumExternalSecurity.ToPointer(),
                            ExternalCategorySequence: sdk.Int(739508),
                            ExternalDocHTML: sdk.String("doloribus"),
                            ExternalDocLink: sdk.String("facilis"),
                            ExternalDocMarkdown: sdk.String("quidem"),
                            G3DocLink: sdk.String("itaque"),
                            IconLink: sdk.String("laboriosam"),
                            IsDeprecated: sdk.Bool(false),
                            Name: sdk.String("Ray Mertz"),
                            StandaloneExternalDocHTML: sdk.String("aspernatur"),
                            Status: shared.EnterpriseCrmEventbusProtoTaskMetadataStatusEnumActive.ToPointer(),
                            System: shared.EnterpriseCrmEventbusProtoTaskMetadataSystemEnumGoogleGroups.ToPointer(),
                            Tags: []string{
                                "recusandae",
                                "quod",
                            },
                        },
                        ParamSpecs: &shared.EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage{
                            Parameters: []shared.EnterpriseCrmFrontendsEventbusProtoParamSpecEntry{
                                shared.EnterpriseCrmFrontendsEventbusProtoParamSpecEntry{
                                    ClassName: sdk.String("saepe"),
                                    CollectionElementClassName: sdk.String("autem"),
                                    Config: &shared.EnterpriseCrmEventbusProtoParamSpecEntryConfig{
                                        DescriptivePhrase: sdk.String("quo"),
                                        HelpText: sdk.String("nesciunt"),
                                        HideDefaultValue: sdk.Bool(false),
                                        InputDisplayOption: shared.EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnumBooleanToggle.ToPointer(),
                                        IsHidden: sdk.Bool(false),
                                        Label: sdk.String("nemo"),
                                        ParameterNameOption: shared.EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnumValueIsParameterName.ToPointer(),
                                        SubSectionLabel: sdk.String("facilis"),
                                        UIPlaceholderText: sdk.String("non"),
                                    },
                                    DataType: shared.EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnumProtoEnum.ToPointer(),
                                    DefaultValue: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                7189.81,
                                                8668.61,
                                                3233.65,
                                                8161.51,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(6746.83),
                                        IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "laborum",
                                                "incidunt",
                                                "maxime",
                                                "ipsam",
                                            },
                                        },
                                        IntValue: sdk.String("alias"),
                                        JSONValue: sdk.String("suscipit"),
                                        ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "laborum": "est",
                                                    "occaecati": "labore",
                                                    "quo": "perferendis",
                                                },
                                                map[string]interface{}{
                                                    "aliquid": "magnam",
                                                },
                                                map[string]interface{}{
                                                    "eligendi": "hic",
                                                    "nostrum": "officiis",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "nulla": "error",
                                            "mollitia": "magnam",
                                            "nostrum": "esse",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("corrupti"),
                                        },
                                        StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "facere",
                                                "impedit",
                                                "quasi",
                                            },
                                        },
                                        StringValue: sdk.String("deserunt"),
                                    },
                                    IsDeprecated: sdk.Bool(false),
                                    IsOutput: sdk.Bool(false),
                                    JSONSchema: sdk.String("quod"),
                                    Key: sdk.String("laboriosam"),
                                    ProtoDef: &shared.EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition{
                                        FullName: sdk.String("doloremque"),
                                        Path: sdk.String("voluptatem"),
                                    },
                                    Required: sdk.Bool(false),
                                    ValidationRule: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRule{
                                        DoubleRange: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange{
                                            Max: sdk.Float64(8164.21),
                                            Min: sdk.Float64(9010.08),
                                        },
                                        IntRange: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange{
                                            Max: sdk.String("maxime"),
                                            Min: sdk.String("consequatur"),
                                        },
                                        StringRegex: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex{
                                            Exclusive: sdk.Bool(false),
                                            Regex: sdk.String("eaque"),
                                        },
                                    },
                                },
                                shared.EnterpriseCrmFrontendsEventbusProtoParamSpecEntry{
                                    ClassName: sdk.String("architecto"),
                                    CollectionElementClassName: sdk.String("similique"),
                                    Config: &shared.EnterpriseCrmEventbusProtoParamSpecEntryConfig{
                                        DescriptivePhrase: sdk.String("porro"),
                                        HelpText: sdk.String("blanditiis"),
                                        HideDefaultValue: sdk.Bool(false),
                                        InputDisplayOption: shared.EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnumDefault.ToPointer(),
                                        IsHidden: sdk.Bool(false),
                                        Label: sdk.String("magni"),
                                        ParameterNameOption: shared.EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnumValueIsParameterName.ToPointer(),
                                        SubSectionLabel: sdk.String("sed"),
                                        UIPlaceholderText: sdk.String("necessitatibus"),
                                    },
                                    DataType: shared.EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnumProtoEnumArray.ToPointer(),
                                    DefaultValue: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                9509.56,
                                                9830,
                                                5144.62,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(9822.48),
                                        IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "asperiores",
                                            },
                                        },
                                        IntValue: sdk.String("rem"),
                                        JSONValue: sdk.String("dicta"),
                                        ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "doloribus": "velit",
                                                    "eius": "esse",
                                                    "in": "eligendi",
                                                    "quasi": "neque",
                                                },
                                                map[string]interface{}{
                                                    "excepturi": "accusantium",
                                                    "qui": "impedit",
                                                    "beatae": "incidunt",
                                                    "dicta": "odit",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "rerum": "alias",
                                            "error": "vel",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("accusantium"),
                                        },
                                        StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "laboriosam",
                                                "ex",
                                                "quas",
                                            },
                                        },
                                        StringValue: sdk.String("veritatis"),
                                    },
                                    IsDeprecated: sdk.Bool(false),
                                    IsOutput: sdk.Bool(false),
                                    JSONSchema: sdk.String("ullam"),
                                    Key: sdk.String("quae"),
                                    ProtoDef: &shared.EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition{
                                        FullName: sdk.String("similique"),
                                        Path: sdk.String("incidunt"),
                                    },
                                    Required: sdk.Bool(false),
                                    ValidationRule: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRule{
                                        DoubleRange: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange{
                                            Max: sdk.Float64(4625.83),
                                            Min: sdk.Float64(1693.12),
                                        },
                                        IntRange: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange{
                                            Max: sdk.String("deserunt"),
                                            Min: sdk.String("delectus"),
                                        },
                                        StringRegex: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex{
                                            Exclusive: sdk.Bool(false),
                                            Regex: sdk.String("omnis"),
                                        },
                                    },
                                },
                                shared.EnterpriseCrmFrontendsEventbusProtoParamSpecEntry{
                                    ClassName: sdk.String("sed"),
                                    CollectionElementClassName: sdk.String("nesciunt"),
                                    Config: &shared.EnterpriseCrmEventbusProtoParamSpecEntryConfig{
                                        DescriptivePhrase: sdk.String("maxime"),
                                        HelpText: sdk.String("quis"),
                                        HideDefaultValue: sdk.Bool(false),
                                        InputDisplayOption: shared.EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnumNumberSlider.ToPointer(),
                                        IsHidden: sdk.Bool(false),
                                        Label: sdk.String("aliquam"),
                                        ParameterNameOption: shared.EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnumKeyIsParameterName.ToPointer(),
                                        SubSectionLabel: sdk.String("maiores"),
                                        UIPlaceholderText: sdk.String("laudantium"),
                                    },
                                    DataType: shared.EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnumBooleanValue.ToPointer(),
                                    DefaultValue: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                3638.45,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(574.7),
                                        IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "tenetur",
                                                "quas",
                                                "molestiae",
                                                "aliquid",
                                            },
                                        },
                                        IntValue: sdk.String("asperiores"),
                                        JSONValue: sdk.String("a"),
                                        ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "accusantium": "dicta",
                                                    "minus": "commodi",
                                                    "eveniet": "porro",
                                                },
                                                map[string]interface{}{
                                                    "quidem": "modi",
                                                    "voluptates": "fugit",
                                                    "eius": "sequi",
                                                },
                                                map[string]interface{}{
                                                    "asperiores": "esse",
                                                    "blanditiis": "sint",
                                                    "repellat": "a",
                                                    "animi": "maiores",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "nulla": "deserunt",
                                            "corporis": "velit",
                                            "officiis": "enim",
                                            "officia": "saepe",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("eum"),
                                        },
                                        StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "accusantium",
                                                "officia",
                                                "impedit",
                                                "quasi",
                                            },
                                        },
                                        StringValue: sdk.String("blanditiis"),
                                    },
                                    IsDeprecated: sdk.Bool(false),
                                    IsOutput: sdk.Bool(false),
                                    JSONSchema: sdk.String("eius"),
                                    Key: sdk.String("quisquam"),
                                    ProtoDef: &shared.EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition{
                                        FullName: sdk.String("eos"),
                                        Path: sdk.String("nobis"),
                                    },
                                    Required: sdk.Bool(false),
                                    ValidationRule: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRule{
                                        DoubleRange: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange{
                                            Max: sdk.Float64(6200.54),
                                            Min: sdk.Float64(7935.68),
                                        },
                                        IntRange: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange{
                                            Max: sdk.String("quia"),
                                            Min: sdk.String("magnam"),
                                        },
                                        StringRegex: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex{
                                            Exclusive: sdk.Bool(false),
                                            Regex: sdk.String("reprehenderit"),
                                        },
                                    },
                                },
                            },
                        },
                        Stats: &shared.EnterpriseCrmEventbusStats{
                            Dimensions: &shared.EnterpriseCrmEventbusStatsDimensions{
                                ClientID: sdk.String("quod"),
                                EnumFilterType: shared.EnterpriseCrmEventbusStatsDimensionsEnumFilterTypeEnumExclusive.ToPointer(),
                                ErrorEnumString: sdk.String("corrupti"),
                                RetryAttempt: shared.EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnumUnspecified.ToPointer(),
                                TaskName: sdk.String("molestiae"),
                                TaskNumber: sdk.String("amet"),
                                TriggerID: sdk.String("laborum"),
                                WarningEnumString: sdk.String("modi"),
                                WorkflowID: sdk.String("perferendis"),
                                WorkflowName: sdk.String("necessitatibus"),
                            },
                            DurationInSeconds: sdk.Float64(1023.16),
                            ErrorRate: sdk.Float64(5646.27),
                            QPS: sdk.Float64(2921.77),
                            WarningRate: sdk.Float64(1258.11),
                        },
                        TaskType: shared.EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnumIoTemplate.ToPointer(),
                        UIConfig: &shared.EnterpriseCrmEventbusProtoTaskUIConfig{
                            TaskUIModuleConfigs: []shared.EnterpriseCrmEventbusProtoTaskUIModuleConfig{
                                shared.EnterpriseCrmEventbusProtoTaskUIModuleConfig{
                                    ModuleID: shared.EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnumErrorHandling.ToPointer(),
                                },
                            },
                        },
                    },
                    TaskExecutionStrategy: shared.EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnumWhenAllTasksAndConditionsSucceed.ToPointer(),
                    TaskName: sdk.String("veniam"),
                    TaskNumber: sdk.String("ipsam"),
                    TaskSpec: sdk.String("eaque"),
                    TaskTemplateName: sdk.String("exercitationem"),
                    TaskType: shared.EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnumTask.ToPointer(),
                },
                shared.EnterpriseCrmFrontendsEventbusProtoTaskConfig{
                    AlertConfigs: []shared.EnterpriseCrmEventbusProtoTaskAlertConfig{
                        shared.EnterpriseCrmEventbusProtoTaskAlertConfig{
                            AggregationPeriod: sdk.String("ad"),
                            AlertDisabled: sdk.Bool(false),
                            AlertName: sdk.String("nisi"),
                            ClientID: sdk.String("tenetur"),
                            DurationThresholdMs: sdk.String("quis"),
                            ErrorEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "nemo",
                                    "suscipit",
                                    "pariatur",
                                    "sit",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumExclusive.ToPointer(),
                            },
                            MetricType: shared.EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnumTaskAverageDuration.ToPointer(),
                            NumAggregationPeriods: sdk.Int(17768),
                            OnlyFinalAttempt: sdk.Bool(false),
                            PlaybookURL: sdk.String("id"),
                            ThresholdType: shared.EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnumExpectedMax.ToPointer(),
                            ThresholdValue: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue{
                                Absolute: sdk.String("sed"),
                                Percentage: sdk.Int(823572),
                            },
                            WarningEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "repudiandae",
                                    "architecto",
                                    "adipisci",
                                    "pariatur",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumExclusive.ToPointer(),
                            },
                        },
                        shared.EnterpriseCrmEventbusProtoTaskAlertConfig{
                            AggregationPeriod: sdk.String("dolore"),
                            AlertDisabled: sdk.Bool(false),
                            AlertName: sdk.String("voluptatibus"),
                            ClientID: sdk.String("iure"),
                            DurationThresholdMs: sdk.String("explicabo"),
                            ErrorEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "soluta",
                                    "dolorum",
                                    "velit",
                                    "earum",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumExclusive.ToPointer(),
                            },
                            MetricType: shared.EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnumTaskRate.ToPointer(),
                            NumAggregationPeriods: sdk.Int(252473),
                            OnlyFinalAttempt: sdk.Bool(false),
                            PlaybookURL: sdk.String("quasi"),
                            ThresholdType: shared.EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnumExpectedMin.ToPointer(),
                            ThresholdValue: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue{
                                Absolute: sdk.String("accusamus"),
                                Percentage: sdk.Int(687589),
                            },
                            WarningEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "doloremque",
                                    "expedita",
                                    "corrupti",
                                    "eaque",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumExclusive.ToPointer(),
                            },
                        },
                    },
                    CreateTime: sdk.String("aliquid"),
                    CreatorEmail: sdk.String("excepturi"),
                    Description: sdk.String("magni"),
                    DisableStrictTypeValidation: sdk.Bool(false),
                    ErrorCatcherID: sdk.String("tempora"),
                    ExternalTaskType: shared.EnterpriseCrmFrontendsEventbusProtoTaskConfigExternalTaskTypeEnumErrorTask.ToPointer(),
                    FailurePolicy: &shared.EnterpriseCrmEventbusProtoFailurePolicy{
                        IntervalInSeconds: sdk.String("dolor"),
                        MaxNumRetries: sdk.Int(700529),
                        RetryStrategy: shared.EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnumIgnore.ToPointer(),
                    },
                    IncomingEdgeCount: sdk.Int(883078),
                    JSONValidationOption: shared.EnterpriseCrmFrontendsEventbusProtoTaskConfigJSONValidationOptionEnumPostExecution.ToPointer(),
                    Label: sdk.String("delectus"),
                    LastModifiedTime: sdk.String("minus"),
                    NextTasks: []shared.EnterpriseCrmEventbusProtoNextTask{
                        shared.EnterpriseCrmEventbusProtoNextTask{
                            CombinedConditions: []shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("voluptatum"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumExists.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        371.29,
                                                        758.5,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(142.51),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "nostrum",
                                                        "at",
                                                        "possimus",
                                                        "neque",
                                                    },
                                                },
                                                IntValue: sdk.String("pariatur"),
                                                ProtoValue: map[string]interface{}{
                                                    "sapiente": "mollitia",
                                                    "quae": "quos",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "non",
                                                    },
                                                },
                                                StringValue: sdk.String("voluptates"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("ad"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumContains.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        5579.87,
                                                        1624.5,
                                                        9824.45,
                                                        815.81,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(4004.48),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "est",
                                                        "dolor",
                                                        "aliquid",
                                                    },
                                                },
                                                IntValue: sdk.String("consectetur"),
                                                ProtoValue: map[string]interface{}{
                                                    "rem": "voluptatum",
                                                    "ducimus": "adipisci",
                                                    "recusandae": "tempora",
                                                    "blanditiis": "numquam",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "voluptatum",
                                                    },
                                                },
                                                StringValue: sdk.String("sit"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("rerum"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumUnset.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        4198.58,
                                                        6940.88,
                                                        5171.21,
                                                        7811.93,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(6464.91),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "nihil",
                                                    },
                                                },
                                                IntValue: sdk.String("voluptas"),
                                                ProtoValue: map[string]interface{}{
                                                    "commodi": "alias",
                                                    "fuga": "aut",
                                                    "dolore": "maxime",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "iste",
                                                        "ullam",
                                                    },
                                                },
                                                StringValue: sdk.String("eligendi"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("placeat"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumLessThan.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        6009.34,
                                                        752.77,
                                                        4691.7,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(782.46),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "ipsam",
                                                        "quasi",
                                                        "cumque",
                                                    },
                                                },
                                                IntValue: sdk.String("dicta"),
                                                ProtoValue: map[string]interface{}{
                                                    "facere": "facilis",
                                                    "beatae": "cumque",
                                                    "delectus": "labore",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "corrupti",
                                                        "rem",
                                                        "atque",
                                                    },
                                                },
                                                StringValue: sdk.String("officiis"),
                                            },
                                        },
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("pariatur"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumIsNotEmpty.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        2779.9,
                                                        7972.93,
                                                        7932.82,
                                                        7814.91,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(6599.71),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "occaecati",
                                                        "libero",
                                                        "quo",
                                                    },
                                                },
                                                IntValue: sdk.String("esse"),
                                                ProtoValue: map[string]interface{}{
                                                    "maxime": "accusantium",
                                                    "soluta": "fugit",
                                                    "pariatur": "eligendi",
                                                    "recusandae": "veritatis",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "laudantium",
                                                    },
                                                },
                                                StringValue: sdk.String("iusto"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("dolor"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumIsNotEmpty.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        1699.35,
                                                        7018.41,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(392.22),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "eum",
                                                    },
                                                },
                                                IntValue: sdk.String("at"),
                                                ProtoValue: map[string]interface{}{
                                                    "reprehenderit": "voluptatum",
                                                    "blanditiis": "nihil",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "rerum",
                                                        "deserunt",
                                                        "atque",
                                                    },
                                                },
                                                StringValue: sdk.String("nostrum"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("atque"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumUnset.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        3183.79,
                                                        5223.9,
                                                        1681.42,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(621.3),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "placeat",
                                                        "enim",
                                                        "labore",
                                                    },
                                                },
                                                IntValue: sdk.String("sapiente"),
                                                ProtoValue: map[string]interface{}{
                                                    "delectus": "officia",
                                                    "natus": "cumque",
                                                    "natus": "quaerat",
                                                    "doloribus": "quia",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "mollitia",
                                                        "cumque",
                                                        "quis",
                                                        "enim",
                                                    },
                                                },
                                                StringValue: sdk.String("eum"),
                                            },
                                        },
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("illum"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumEquals.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        4871.48,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(7943.06),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "recusandae",
                                                        "voluptates",
                                                        "praesentium",
                                                        "dicta",
                                                    },
                                                },
                                                IntValue: sdk.String("fugit"),
                                                ProtoValue: map[string]interface{}{
                                                    "aliquid": "necessitatibus",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "deleniti",
                                                    },
                                                },
                                                StringValue: sdk.String("sunt"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("nesciunt"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumIsNotEmpty.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        3034.21,
                                                        6442.23,
                                                        2666.8,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(1220.85),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "eius",
                                                        "voluptatum",
                                                        "ipsa",
                                                        "at",
                                                    },
                                                },
                                                IntValue: sdk.String("dolorem"),
                                                ProtoValue: map[string]interface{}{
                                                    "aspernatur": "inventore",
                                                    "sequi": "fugit",
                                                    "fuga": "hic",
                                                    "eaque": "dolorem",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "aperiam",
                                                    },
                                                },
                                                StringValue: sdk.String("aspernatur"),
                                            },
                                        },
                                    },
                                },
                            },
                            Condition: sdk.String("nulla"),
                            Description: sdk.String("enim"),
                            Label: sdk.String("illo"),
                            TaskConfigID: sdk.String("magnam"),
                            TaskNumber: sdk.String("delectus"),
                        },
                        shared.EnterpriseCrmEventbusProtoNextTask{
                            CombinedConditions: []shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("nobis"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumLessThan.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        651.18,
                                                        5339.78,
                                                        7116.15,
                                                        9442.03,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(5698.34),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "sed",
                                                        "beatae",
                                                    },
                                                },
                                                IntValue: sdk.String("similique"),
                                                ProtoValue: map[string]interface{}{
                                                    "animi": "dolore",
                                                    "tenetur": "dignissimos",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "animi",
                                                        "laudantium",
                                                    },
                                                },
                                                StringValue: sdk.String("esse"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("eveniet"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumIsNotEmpty.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        8847.65,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(2633.46),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "itaque",
                                                        "dignissimos",
                                                        "ipsam",
                                                    },
                                                },
                                                IntValue: sdk.String("explicabo"),
                                                ProtoValue: map[string]interface{}{
                                                    "aliquid": "quis",
                                                    "facilis": "ipsum",
                                                    "ut": "quaerat",
                                                    "architecto": "praesentium",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "dolor",
                                                        "expedita",
                                                        "libero",
                                                        "iste",
                                                    },
                                                },
                                                StringValue: sdk.String("illo"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("minus"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumGreaterThan.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        5766.57,
                                                        4834.59,
                                                        3156.71,
                                                        8811.89,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(444.67),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "laudantium",
                                                        "tempora",
                                                        "quae",
                                                        "omnis",
                                                    },
                                                },
                                                IntValue: sdk.String("illum"),
                                                ProtoValue: map[string]interface{}{
                                                    "tenetur": "deleniti",
                                                    "modi": "earum",
                                                    "architecto": "aliquam",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "maiores",
                                                        "sequi",
                                                    },
                                                },
                                                StringValue: sdk.String("saepe"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("consequatur"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumGreaterThan.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        8174.54,
                                                        7890.16,
                                                        7690.47,
                                                        3028.78,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(6778.95),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "ad",
                                                        "reiciendis",
                                                        "sequi",
                                                    },
                                                },
                                                IntValue: sdk.String("porro"),
                                                ProtoValue: map[string]interface{}{
                                                    "nobis": "quibusdam",
                                                    "omnis": "aut",
                                                    "ipsam": "officia",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "reprehenderit",
                                                        "quia",
                                                        "necessitatibus",
                                                    },
                                                },
                                                StringValue: sdk.String("accusantium"),
                                            },
                                        },
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("nisi"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumGreaterThan.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        5147.67,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(1527.42),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "iusto",
                                                    },
                                                },
                                                IntValue: sdk.String("expedita"),
                                                ProtoValue: map[string]interface{}{
                                                    "repellendus": "nesciunt",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "sint",
                                                    },
                                                },
                                                StringValue: sdk.String("dolore"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("esse"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumUnset.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        9565.45,
                                                        4630.5,
                                                        6671.69,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(3073.06),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "culpa",
                                                        "voluptatum",
                                                        "iusto",
                                                        "quod",
                                                    },
                                                },
                                                IntValue: sdk.String("voluptatibus"),
                                                ProtoValue: map[string]interface{}{
                                                    "non": "ullam",
                                                    "laborum": "voluptas",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "animi",
                                                        "recusandae",
                                                        "corporis",
                                                        "non",
                                                    },
                                                },
                                                StringValue: sdk.String("necessitatibus"),
                                            },
                                        },
                                    },
                                },
                            },
                            Condition: sdk.String("distinctio"),
                            Description: sdk.String("maiores"),
                            Label: sdk.String("laboriosam"),
                            TaskConfigID: sdk.String("voluptatem"),
                            TaskNumber: sdk.String("optio"),
                        },
                        shared.EnterpriseCrmEventbusProtoNextTask{
                            CombinedConditions: []shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("vitae"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumIsNotEmpty.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        1494.98,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(2277.41),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "in",
                                                        "nostrum",
                                                        "temporibus",
                                                    },
                                                },
                                                IntValue: sdk.String("ratione"),
                                                ProtoValue: map[string]interface{}{
                                                    "nisi": "dignissimos",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "itaque",
                                                        "vitae",
                                                        "est",
                                                        "accusantium",
                                                    },
                                                },
                                                StringValue: sdk.String("quod"),
                                            },
                                        },
                                    },
                                },
                            },
                            Condition: sdk.String("minus"),
                            Description: sdk.String("quos"),
                            Label: sdk.String("possimus"),
                            TaskConfigID: sdk.String("maiores"),
                            TaskNumber: sdk.String("odio"),
                        },
                        shared.EnterpriseCrmEventbusProtoNextTask{
                            CombinedConditions: []shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("aperiam"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumExists.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        5909.98,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(4047.74),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "unde",
                                                        "alias",
                                                        "impedit",
                                                        "sequi",
                                                    },
                                                },
                                                IntValue: sdk.String("commodi"),
                                                ProtoValue: map[string]interface{}{
                                                    "expedita": "in",
                                                    "quisquam": "sunt",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "nulla",
                                                        "maiores",
                                                    },
                                                },
                                                StringValue: sdk.String("distinctio"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("mollitia"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumDoesNotExist.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        911.2,
                                                        5559.38,
                                                        5014.62,
                                                        7416.03,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(1197.25),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "tempora",
                                                        "eveniet",
                                                        "repudiandae",
                                                        "sed",
                                                    },
                                                },
                                                IntValue: sdk.String("impedit"),
                                                ProtoValue: map[string]interface{}{
                                                    "impedit": "vel",
                                                    "eligendi": "recusandae",
                                                    "ex": "beatae",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "maiores",
                                                    },
                                                },
                                                StringValue: sdk.String("itaque"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("vero"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumDoesNotExist.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        7782.42,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(4909.66),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "distinctio",
                                                        "possimus",
                                                        "cum",
                                                        "suscipit",
                                                    },
                                                },
                                                IntValue: sdk.String("saepe"),
                                                ProtoValue: map[string]interface{}{
                                                    "quod": "nihil",
                                                    "quaerat": "ipsum",
                                                    "ducimus": "laudantium",
                                                    "rerum": "deserunt",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "ad",
                                                    },
                                                },
                                                StringValue: sdk.String("sequi"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("beatae"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumGreaterThan.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        2982.46,
                                                        4877.99,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(8625.6),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "cupiditate",
                                                        "illo",
                                                        "exercitationem",
                                                        "laborum",
                                                    },
                                                },
                                                IntValue: sdk.String("illum"),
                                                ProtoValue: map[string]interface{}{
                                                    "maxime": "dolorum",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "nostrum",
                                                        "illum",
                                                        "quibusdam",
                                                        "commodi",
                                                    },
                                                },
                                                StringValue: sdk.String("esse"),
                                            },
                                        },
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("consectetur"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumIsEmpty.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        597.57,
                                                        9786.55,
                                                        3502.71,
                                                        6336.43,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(9197.38),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "sapiente",
                                                    },
                                                },
                                                IntValue: sdk.String("neque"),
                                                ProtoValue: map[string]interface{}{
                                                    "suscipit": "harum",
                                                    "ducimus": "doloremque",
                                                    "perferendis": "laudantium",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "corrupti",
                                                        "molestiae",
                                                    },
                                                },
                                                StringValue: sdk.String("quis"),
                                            },
                                        },
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("ab"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumContains.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        9569.42,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(3579.84),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "iure",
                                                        "quisquam",
                                                        "provident",
                                                    },
                                                },
                                                IntValue: sdk.String("laudantium"),
                                                ProtoValue: map[string]interface{}{
                                                    "nemo": "enim",
                                                    "ipsam": "minima",
                                                    "tempora": "perferendis",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "doloremque",
                                                        "fugiat",
                                                        "numquam",
                                                    },
                                                },
                                                StringValue: sdk.String("doloremque"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("cum"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumDoesNotExist.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        7837.64,
                                                        7697.89,
                                                        3947.24,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(7689.2),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "fugiat",
                                                        "laboriosam",
                                                        "nam",
                                                    },
                                                },
                                                IntValue: sdk.String("enim"),
                                                ProtoValue: map[string]interface{}{
                                                    "consectetur": "necessitatibus",
                                                    "maxime": "cupiditate",
                                                    "voluptatem": "provident",
                                                    "adipisci": "accusantium",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "repellat",
                                                        "omnis",
                                                    },
                                                },
                                                StringValue: sdk.String("explicabo"),
                                            },
                                        },
                                    },
                                },
                            },
                            Condition: sdk.String("vel"),
                            Description: sdk.String("cum"),
                            Label: sdk.String("id"),
                            TaskConfigID: sdk.String("possimus"),
                            TaskNumber: sdk.String("fugit"),
                        },
                    },
                    NextTasksExecutionPolicy: shared.EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnumRunAllMatch.ToPointer(),
                    Parameters: map[string]shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                        "sequi": shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                            DataType: shared.EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumDoubleArray.ToPointer(),
                            Key: sdk.String("quasi"),
                            Value: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                                BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                                    BooleanValues: []bool{
                                        false,
                                        false,
                                        false,
                                    },
                                },
                                BooleanValue: sdk.Bool(false),
                                DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                                    DoubleValues: []float64{
                                        2696,
                                        4526.53,
                                        2611.7,
                                    },
                                },
                                DoubleValue: sdk.Float64(7137.18),
                                IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                                    IntValues: []string{
                                        "voluptates",
                                    },
                                },
                                IntValue: sdk.String("possimus"),
                                JSONValue: sdk.String("fugit"),
                                ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                                    ProtoValues: []map[string]interface{}{
                                        map[string]interface{}{
                                            "corporis": "ea",
                                            "eos": "aliquam",
                                            "blanditiis": "hic",
                                            "maiores": "asperiores",
                                        },
                                    },
                                },
                                ProtoValue: map[string]interface{}{
                                    "nesciunt": "cupiditate",
                                    "animi": "provident",
                                },
                                SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                                    ObjectValue: sdk.String("beatae"),
                                },
                                StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                                    StringValues: []string{
                                        "mollitia",
                                    },
                                },
                                StringValue: sdk.String("nam"),
                            },
                        },
                        "assumenda": shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                            DataType: shared.EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumProtoEnumArray.ToPointer(),
                            Key: sdk.String("fuga"),
                            Value: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                                BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                                    BooleanValues: []bool{
                                        false,
                                        false,
                                        false,
                                    },
                                },
                                BooleanValue: sdk.Bool(false),
                                DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                                    DoubleValues: []float64{
                                        1467.42,
                                        3830.66,
                                    },
                                },
                                DoubleValue: sdk.Float64(4538.8),
                                IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                                    IntValues: []string{
                                        "aliquid",
                                        "provident",
                                    },
                                },
                                IntValue: sdk.String("laboriosam"),
                                JSONValue: sdk.String("accusamus"),
                                ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                                    ProtoValues: []map[string]interface{}{
                                        map[string]interface{}{
                                            "quisquam": "eaque",
                                            "alias": "qui",
                                            "consequuntur": "vitae",
                                            "quidem": "sequi",
                                        },
                                    },
                                },
                                ProtoValue: map[string]interface{}{
                                    "exercitationem": "illum",
                                },
                                SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                                    ObjectValue: sdk.String("praesentium"),
                                },
                                StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                                    StringValues: []string{
                                        "similique",
                                        "eligendi",
                                        "tempore",
                                    },
                                },
                                StringValue: sdk.String("amet"),
                            },
                        },
                    },
                    Position: &shared.EnterpriseCrmEventbusProtoCoordinate{
                        X: sdk.Int(890112),
                        Y: sdk.Int(751381),
                    },
                    Precondition: sdk.String("asperiores"),
                    PreconditionLabel: sdk.String("temporibus"),
                    RollbackStrategy: &shared.EnterpriseCrmFrontendsEventbusProtoRollbackStrategy{
                        Parameters: &shared.EnterpriseCrmFrontendsEventbusProtoEventParameters{
                            Parameters: []shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                                shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                                    DataType: shared.EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumDoubleArray.ToPointer(),
                                    Key: sdk.String("quibusdam"),
                                    Value: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                3299.73,
                                                3075.32,
                                                5911.43,
                                                8756.93,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(9380.94),
                                        IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "ipsum",
                                            },
                                        },
                                        IntValue: sdk.String("alias"),
                                        JSONValue: sdk.String("doloremque"),
                                        ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "quam": "atque",
                                                    "officia": "ex",
                                                    "architecto": "a",
                                                },
                                                map[string]interface{}{
                                                    "veritatis": "quod",
                                                    "a": "qui",
                                                    "accusantium": "commodi",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "totam": "tenetur",
                                            "voluptate": "quam",
                                            "quod": "vitae",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("sapiente"),
                                        },
                                        StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "quod",
                                                "voluptate",
                                                "inventore",
                                                "facere",
                                            },
                                        },
                                        StringValue: sdk.String("maxime"),
                                    },
                                },
                                shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                                    DataType: shared.EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumBooleanArray.ToPointer(),
                                    Key: sdk.String("ab"),
                                    Value: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                9824.09,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(1530.97),
                                        IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "sequi",
                                                "eligendi",
                                                "voluptatum",
                                            },
                                        },
                                        IntValue: sdk.String("perferendis"),
                                        JSONValue: sdk.String("laborum"),
                                        ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "tenetur": "sapiente",
                                                    "velit": "adipisci",
                                                },
                                                map[string]interface{}{
                                                    "optio": "illum",
                                                    "at": "tenetur",
                                                },
                                                map[string]interface{}{
                                                    "ipsam": "esse",
                                                    "laborum": "perspiciatis",
                                                    "voluptates": "eum",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "quas": "odio",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("commodi"),
                                        },
                                        StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "aliquid",
                                                "mollitia",
                                                "quidem",
                                                "explicabo",
                                            },
                                        },
                                        StringValue: sdk.String("et"),
                                    },
                                },
                                shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                                    DataType: shared.EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumBytesArray.ToPointer(),
                                    Key: sdk.String("magni"),
                                    Value: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                9506.61,
                                                7710.78,
                                                6018.03,
                                                2814.54,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(8145.85),
                                        IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "doloribus",
                                                "recusandae",
                                            },
                                        },
                                        IntValue: sdk.String("quisquam"),
                                        JSONValue: sdk.String("facere"),
                                        ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "provident": "dolor",
                                                    "sint": "aperiam",
                                                    "eaque": "eum",
                                                },
                                                map[string]interface{}{
                                                    "laborum": "autem",
                                                    "assumenda": "explicabo",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "doloremque": "voluptatem",
                                            "alias": "velit",
                                            "ullam": "quis",
                                            "velit": "ratione",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("quas"),
                                        },
                                        StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "recusandae",
                                                "cumque",
                                                "doloremque",
                                                "totam",
                                            },
                                        },
                                        StringValue: sdk.String("iure"),
                                    },
                                },
                            },
                        },
                        RollbackTaskImplementationClassName: sdk.String("maiores"),
                        TaskNumbersToRollback: []string{
                            "fugit",
                            "veritatis",
                            "necessitatibus",
                        },
                    },
                    SuccessPolicy: &shared.EnterpriseCrmEventbusProtoSuccessPolicy{
                        FinalState: shared.EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnumSucceeded.ToPointer(),
                    },
                    SynchronousCallFailurePolicy: &shared.EnterpriseCrmEventbusProtoFailurePolicy{
                        IntervalInSeconds: sdk.String("dicta"),
                        MaxNumRetries: sdk.Int(369099),
                        RetryStrategy: shared.EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnumIgnore.ToPointer(),
                    },
                    TaskEntity: &shared.EnterpriseCrmFrontendsEventbusProtoTaskEntity{
                        DisabledForVpcSc: sdk.Bool(false),
                        Metadata: &shared.EnterpriseCrmEventbusProtoTaskMetadata{
                            ActiveTaskName: sdk.String("cumque"),
                            Admins: []shared.EnterpriseCrmEventbusProtoTaskMetadataAdmin{
                                shared.EnterpriseCrmEventbusProtoTaskMetadataAdmin{
                                    GoogleGroupEmail: sdk.String("non"),
                                    UserEmail: sdk.String("beatae"),
                                },
                                shared.EnterpriseCrmEventbusProtoTaskMetadataAdmin{
                                    GoogleGroupEmail: sdk.String("sunt"),
                                    UserEmail: sdk.String("molestias"),
                                },
                                shared.EnterpriseCrmEventbusProtoTaskMetadataAdmin{
                                    GoogleGroupEmail: sdk.String("beatae"),
                                    UserEmail: sdk.String("autem"),
                                },
                            },
                            Category: shared.EnterpriseCrmEventbusProtoTaskMetadataCategoryEnumScripting.ToPointer(),
                            CodeSearchLink: sdk.String("libero"),
                            DefaultJSONValidationOption: shared.EnterpriseCrmEventbusProtoTaskMetadataDefaultJSONValidationOptionEnumPreExecution.ToPointer(),
                            DefaultSpec: sdk.String("necessitatibus"),
                            Description: sdk.String("ipsum"),
                            DescriptiveName: sdk.String("impedit"),
                            DocMarkdown: sdk.String("quos"),
                            ExternalCategory: shared.EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnumExternalByot.ToPointer(),
                            ExternalCategorySequence: sdk.Int(717853),
                            ExternalDocHTML: sdk.String("voluptatem"),
                            ExternalDocLink: sdk.String("non"),
                            ExternalDocMarkdown: sdk.String("quaerat"),
                            G3DocLink: sdk.String("consequatur"),
                            IconLink: sdk.String("laudantium"),
                            IsDeprecated: sdk.Bool(false),
                            Name: sdk.String("Leslie Sporer"),
                            StandaloneExternalDocHTML: sdk.String("quaerat"),
                            Status: shared.EnterpriseCrmEventbusProtoTaskMetadataStatusEnumActive.ToPointer(),
                            System: shared.EnterpriseCrmEventbusProtoTaskMetadataSystemEnumDataBridge.ToPointer(),
                            Tags: []string{
                                "dolore",
                                "enim",
                                "ullam",
                                "perspiciatis",
                            },
                        },
                        ParamSpecs: &shared.EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage{
                            Parameters: []shared.EnterpriseCrmFrontendsEventbusProtoParamSpecEntry{
                                shared.EnterpriseCrmFrontendsEventbusProtoParamSpecEntry{
                                    ClassName: sdk.String("ex"),
                                    CollectionElementClassName: sdk.String("quibusdam"),
                                    Config: &shared.EnterpriseCrmEventbusProtoParamSpecEntryConfig{
                                        DescriptivePhrase: sdk.String("dicta"),
                                        HelpText: sdk.String("quia"),
                                        HideDefaultValue: sdk.Bool(false),
                                        InputDisplayOption: shared.EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnumStringMultiLine.ToPointer(),
                                        IsHidden: sdk.Bool(false),
                                        Label: sdk.String("neque"),
                                        ParameterNameOption: shared.EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnumValueIsParameterName.ToPointer(),
                                        SubSectionLabel: sdk.String("numquam"),
                                        UIPlaceholderText: sdk.String("rem"),
                                    },
                                    DataType: shared.EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnumBytesArray.ToPointer(),
                                    DefaultValue: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                3598.74,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(7975.27),
                                        IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "placeat",
                                            },
                                        },
                                        IntValue: sdk.String("excepturi"),
                                        JSONValue: sdk.String("recusandae"),
                                        ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "sapiente": "ipsum",
                                                },
                                                map[string]interface{}{
                                                    "soluta": "necessitatibus",
                                                },
                                                map[string]interface{}{
                                                    "recusandae": "labore",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "magni": "aperiam",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("dolores"),
                                        },
                                        StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "iusto",
                                                "magni",
                                                "beatae",
                                                "aliquid",
                                            },
                                        },
                                        StringValue: sdk.String("ad"),
                                    },
                                    IsDeprecated: sdk.Bool(false),
                                    IsOutput: sdk.Bool(false),
                                    JSONSchema: sdk.String("voluptate"),
                                    Key: sdk.String("vel"),
                                    ProtoDef: &shared.EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition{
                                        FullName: sdk.String("minima"),
                                        Path: sdk.String("sit"),
                                    },
                                    Required: sdk.Bool(false),
                                    ValidationRule: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRule{
                                        DoubleRange: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange{
                                            Max: sdk.Float64(4265.27),
                                            Min: sdk.Float64(3883.33),
                                        },
                                        IntRange: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange{
                                            Max: sdk.String("quaerat"),
                                            Min: sdk.String("quasi"),
                                        },
                                        StringRegex: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex{
                                            Exclusive: sdk.Bool(false),
                                            Regex: sdk.String("rem"),
                                        },
                                    },
                                },
                            },
                        },
                        Stats: &shared.EnterpriseCrmEventbusStats{
                            Dimensions: &shared.EnterpriseCrmEventbusStatsDimensions{
                                ClientID: sdk.String("dignissimos"),
                                EnumFilterType: shared.EnterpriseCrmEventbusStatsDimensionsEnumFilterTypeEnumDefaultInclusive.ToPointer(),
                                ErrorEnumString: sdk.String("assumenda"),
                                RetryAttempt: shared.EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnumRetryable.ToPointer(),
                                TaskName: sdk.String("facere"),
                                TaskNumber: sdk.String("sed"),
                                TriggerID: sdk.String("inventore"),
                                WarningEnumString: sdk.String("voluptatibus"),
                                WorkflowID: sdk.String("unde"),
                                WorkflowName: sdk.String("deserunt"),
                            },
                            DurationInSeconds: sdk.Float64(8345.87),
                            ErrorRate: sdk.Float64(79.19),
                            QPS: sdk.Float64(2379.72),
                            WarningRate: sdk.Float64(390.69),
                        },
                        TaskType: shared.EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnumIoTemplate.ToPointer(),
                        UIConfig: &shared.EnterpriseCrmEventbusProtoTaskUIConfig{
                            TaskUIModuleConfigs: []shared.EnterpriseCrmEventbusProtoTaskUIModuleConfig{
                                shared.EnterpriseCrmEventbusProtoTaskUIModuleConfig{
                                    ModuleID: shared.EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnumSubWorkflowScatterGather.ToPointer(),
                                },
                                shared.EnterpriseCrmEventbusProtoTaskUIModuleConfig{
                                    ModuleID: shared.EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnumReadme.ToPointer(),
                                },
                            },
                        },
                    },
                    TaskExecutionStrategy: shared.EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnumWhenAllTasksAndConditionsSucceed.ToPointer(),
                    TaskName: sdk.String("et"),
                    TaskNumber: sdk.String("beatae"),
                    TaskSpec: sdk.String("id"),
                    TaskTemplateName: sdk.String("consequatur"),
                    TaskType: shared.EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnumAsisTemplate.ToPointer(),
                },
                shared.EnterpriseCrmFrontendsEventbusProtoTaskConfig{
                    AlertConfigs: []shared.EnterpriseCrmEventbusProtoTaskAlertConfig{
                        shared.EnterpriseCrmEventbusProtoTaskAlertConfig{
                            AggregationPeriod: sdk.String("iure"),
                            AlertDisabled: sdk.Bool(false),
                            AlertName: sdk.String("tempora"),
                            ClientID: sdk.String("eos"),
                            DurationThresholdMs: sdk.String("natus"),
                            ErrorEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "suscipit",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumExclusive.ToPointer(),
                            },
                            MetricType: shared.EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnumTaskAverageDuration.ToPointer(),
                            NumAggregationPeriods: sdk.Int(514609),
                            OnlyFinalAttempt: sdk.Bool(false),
                            PlaybookURL: sdk.String("ullam"),
                            ThresholdType: shared.EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnumUnspecifiedThresholdType.ToPointer(),
                            ThresholdValue: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue{
                                Absolute: sdk.String("quia"),
                                Percentage: sdk.Int(642576),
                            },
                            WarningEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "corporis",
                                    "accusamus",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumDefaultInclusive.ToPointer(),
                            },
                        },
                    },
                    CreateTime: sdk.String("sapiente"),
                    CreatorEmail: sdk.String("esse"),
                    Description: sdk.String("neque"),
                    DisableStrictTypeValidation: sdk.Bool(false),
                    ErrorCatcherID: sdk.String("quidem"),
                    ExternalTaskType: shared.EnterpriseCrmFrontendsEventbusProtoTaskConfigExternalTaskTypeEnumErrorTask.ToPointer(),
                    FailurePolicy: &shared.EnterpriseCrmEventbusProtoFailurePolicy{
                        IntervalInSeconds: sdk.String("praesentium"),
                        MaxNumRetries: sdk.Int(273349),
                        RetryStrategy: shared.EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnumNone.ToPointer(),
                    },
                    IncomingEdgeCount: sdk.Int(887132),
                    JSONValidationOption: shared.EnterpriseCrmFrontendsEventbusProtoTaskConfigJSONValidationOptionEnumUnspecifiedJSONValidationOption.ToPointer(),
                    Label: sdk.String("magni"),
                    LastModifiedTime: sdk.String("voluptatem"),
                    NextTasks: []shared.EnterpriseCrmEventbusProtoNextTask{
                        shared.EnterpriseCrmEventbusProtoNextTask{
                            CombinedConditions: []shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("error"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumIsNotEmpty.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        7006.34,
                                                        6786.95,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(8418.16),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "excepturi",
                                                        "numquam",
                                                        "molestiae",
                                                        "impedit",
                                                    },
                                                },
                                                IntValue: sdk.String("error"),
                                                ProtoValue: map[string]interface{}{
                                                    "voluptatum": "aliquid",
                                                    "nihil": "facilis",
                                                    "optio": "incidunt",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "magnam",
                                                    },
                                                },
                                                StringValue: sdk.String("dolores"),
                                            },
                                        },
                                    },
                                },
                            },
                            Condition: sdk.String("aliquid"),
                            Description: sdk.String("eum"),
                            Label: sdk.String("vel"),
                            TaskConfigID: sdk.String("ad"),
                            TaskNumber: sdk.String("quos"),
                        },
                        shared.EnterpriseCrmEventbusProtoNextTask{
                            CombinedConditions: []shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("quibusdam"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumIsEmpty.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        6329.39,
                                                        5439.22,
                                                        9139.09,
                                                        9793.25,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(3662.75),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "doloribus",
                                                    },
                                                },
                                                IntValue: sdk.String("cumque"),
                                                ProtoValue: map[string]interface{}{
                                                    "modi": "cumque",
                                                    "ipsam": "occaecati",
                                                    "ipsum": "accusamus",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "quasi",
                                                        "fugit",
                                                        "quo",
                                                        "temporibus",
                                                    },
                                                },
                                                StringValue: sdk.String("mollitia"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("id"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumIsEmpty.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        8792.08,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(8109.82),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "similique",
                                                        "delectus",
                                                    },
                                                },
                                                IntValue: sdk.String("saepe"),
                                                ProtoValue: map[string]interface{}{
                                                    "nobis": "at",
                                                    "molestias": "aut",
                                                    "temporibus": "tenetur",
                                                    "incidunt": "numquam",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "similique",
                                                        "dolore",
                                                        "esse",
                                                    },
                                                },
                                                StringValue: sdk.String("reiciendis"),
                                            },
                                        },
                                    },
                                },
                            },
                            Condition: sdk.String("iste"),
                            Description: sdk.String("amet"),
                            Label: sdk.String("occaecati"),
                            TaskConfigID: sdk.String("aut"),
                            TaskNumber: sdk.String("impedit"),
                        },
                        shared.EnterpriseCrmEventbusProtoNextTask{
                            CombinedConditions: []shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("blanditiis"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumExists.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        5917.74,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(5592.48),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "vero",
                                                    },
                                                },
                                                IntValue: sdk.String("fuga"),
                                                ProtoValue: map[string]interface{}{
                                                    "maiores": "error",
                                                    "recusandae": "a",
                                                    "consectetur": "sapiente",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "assumenda",
                                                        "repellendus",
                                                        "omnis",
                                                        "delectus",
                                                    },
                                                },
                                                StringValue: sdk.String("odio"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("voluptatibus"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumUnset.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        6062.62,
                                                        6266.76,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(9890.89),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "facere",
                                                        "neque",
                                                    },
                                                },
                                                IntValue: sdk.String("quis"),
                                                ProtoValue: map[string]interface{}{
                                                    "sed": "non",
                                                    "porro": "fugiat",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "ipsa",
                                                        "reiciendis",
                                                        "labore",
                                                    },
                                                },
                                                StringValue: sdk.String("vero"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("eos"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumExists.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        1012.84,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(5097.99),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "fugiat",
                                                        "enim",
                                                    },
                                                },
                                                IntValue: sdk.String("iure"),
                                                ProtoValue: map[string]interface{}{
                                                    "modi": "magnam",
                                                    "accusamus": "nulla",
                                                    "repudiandae": "quibusdam",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "enim",
                                                        "animi",
                                                        "unde",
                                                    },
                                                },
                                                StringValue: sdk.String("quae"),
                                            },
                                        },
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("nostrum"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumIsNotEmpty.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        1873.61,
                                                        5054.73,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(6977.29),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "reiciendis",
                                                        "placeat",
                                                        "dolores",
                                                        "consequatur",
                                                    },
                                                },
                                                IntValue: sdk.String("nesciunt"),
                                                ProtoValue: map[string]interface{}{
                                                    "quidem": "voluptas",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "laudantium",
                                                        "dignissimos",
                                                        "omnis",
                                                        "omnis",
                                                    },
                                                },
                                                StringValue: sdk.String("fugit"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("dolorem"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumDoesNotExist.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        8907.8,
                                                        1120.71,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(2237.17),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "atque",
                                                        "ut",
                                                    },
                                                },
                                                IntValue: sdk.String("asperiores"),
                                                ProtoValue: map[string]interface{}{
                                                    "deserunt": "itaque",
                                                    "et": "eos",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "ex",
                                                        "praesentium",
                                                        "natus",
                                                        "vitae",
                                                    },
                                                },
                                                StringValue: sdk.String("tenetur"),
                                            },
                                        },
                                    },
                                },
                            },
                            Condition: sdk.String("laudantium"),
                            Description: sdk.String("aspernatur"),
                            Label: sdk.String("eligendi"),
                            TaskConfigID: sdk.String("repudiandae"),
                            TaskNumber: sdk.String("dicta"),
                        },
                    },
                    NextTasksExecutionPolicy: shared.EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnumUnspecified.ToPointer(),
                    Parameters: map[string]shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                        "iusto": shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                            DataType: shared.EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumStringValue.ToPointer(),
                            Key: sdk.String("voluptate"),
                            Value: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                                BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                                    BooleanValues: []bool{
                                        false,
                                    },
                                },
                                BooleanValue: sdk.Bool(false),
                                DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                                    DoubleValues: []float64{
                                        524.97,
                                    },
                                },
                                DoubleValue: sdk.Float64(3474.6),
                                IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                                    IntValues: []string{
                                        "voluptate",
                                    },
                                },
                                IntValue: sdk.String("voluptate"),
                                JSONValue: sdk.String("pariatur"),
                                ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                                    ProtoValues: []map[string]interface{}{
                                        map[string]interface{}{
                                            "fuga": "totam",
                                            "cupiditate": "at",
                                            "doloribus": "omnis",
                                            "quam": "exercitationem",
                                        },
                                        map[string]interface{}{
                                            "sequi": "quis",
                                            "commodi": "vel",
                                            "rem": "aliquid",
                                            "aperiam": "perspiciatis",
                                        },
                                        map[string]interface{}{
                                            "itaque": "unde",
                                        },
                                        map[string]interface{}{
                                            "dolor": "repellendus",
                                            "temporibus": "minus",
                                            "minima": "a",
                                            "beatae": "vitae",
                                        },
                                    },
                                },
                                ProtoValue: map[string]interface{}{
                                    "facere": "earum",
                                },
                                SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                                    ObjectValue: sdk.String("laborum"),
                                },
                                StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                                    StringValues: []string{
                                        "voluptatem",
                                    },
                                },
                                StringValue: sdk.String("odit"),
                            },
                        },
                        "aliquid": shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                            DataType: shared.EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumBytesArray.ToPointer(),
                            Key: sdk.String("enim"),
                            Value: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                                BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                                    BooleanValues: []bool{
                                        false,
                                        false,
                                    },
                                },
                                BooleanValue: sdk.Bool(false),
                                DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                                    DoubleValues: []float64{
                                        6659.52,
                                    },
                                },
                                DoubleValue: sdk.Float64(3098.52),
                                IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                                    IntValues: []string{
                                        "vitae",
                                        "omnis",
                                        "alias",
                                        "sapiente",
                                    },
                                },
                                IntValue: sdk.String("officiis"),
                                JSONValue: sdk.String("expedita"),
                                ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                                    ProtoValues: []map[string]interface{}{
                                        map[string]interface{}{
                                            "odio": "quas",
                                        },
                                    },
                                },
                                ProtoValue: map[string]interface{}{
                                    "distinctio": "placeat",
                                },
                                SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                                    ObjectValue: sdk.String("quod"),
                                },
                                StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                                    StringValues: []string{
                                        "sit",
                                        "possimus",
                                        "distinctio",
                                        "distinctio",
                                    },
                                },
                                StringValue: sdk.String("assumenda"),
                            },
                        },
                    },
                    Position: &shared.EnterpriseCrmEventbusProtoCoordinate{
                        X: sdk.Int(850406),
                        Y: sdk.Int(746834),
                    },
                    Precondition: sdk.String("magnam"),
                    PreconditionLabel: sdk.String("laudantium"),
                    RollbackStrategy: &shared.EnterpriseCrmFrontendsEventbusProtoRollbackStrategy{
                        Parameters: &shared.EnterpriseCrmFrontendsEventbusProtoEventParameters{
                            Parameters: []shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                                shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                                    DataType: shared.EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumIntArray.ToPointer(),
                                    Key: sdk.String("doloremque"),
                                    Value: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                7046.44,
                                                3060.23,
                                                9229.15,
                                                2274.24,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(6170.35),
                                        IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "officiis",
                                            },
                                        },
                                        IntValue: sdk.String("eum"),
                                        JSONValue: sdk.String("rerum"),
                                        ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "ad": "blanditiis",
                                                },
                                                map[string]interface{}{
                                                    "labore": "impedit",
                                                    "ut": "earum",
                                                    "ullam": "numquam",
                                                    "enim": "cupiditate",
                                                },
                                                map[string]interface{}{
                                                    "itaque": "fuga",
                                                    "consectetur": "modi",
                                                    "aspernatur": "explicabo",
                                                },
                                                map[string]interface{}{
                                                    "ipsa": "eveniet",
                                                    "sint": "nobis",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "accusantium": "consequatur",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("impedit"),
                                        },
                                        StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "voluptate",
                                                "deleniti",
                                                "est",
                                                "et",
                                            },
                                        },
                                        StringValue: sdk.String("expedita"),
                                    },
                                },
                                shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry{
                                    DataType: shared.EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumBytesArray.ToPointer(),
                                    Key: sdk.String("quos"),
                                    Value: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                4486.01,
                                                6353.14,
                                                424.89,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(6813.36),
                                        IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "architecto",
                                            },
                                        },
                                        IntValue: sdk.String("suscipit"),
                                        JSONValue: sdk.String("eligendi"),
                                        ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "fugit": "ratione",
                                                    "possimus": "quaerat",
                                                },
                                                map[string]interface{}{
                                                    "natus": "esse",
                                                },
                                                map[string]interface{}{
                                                    "deserunt": "ratione",
                                                    "ipsa": "debitis",
                                                    "iste": "deserunt",
                                                    "hic": "ducimus",
                                                },
                                                map[string]interface{}{
                                                    "ipsam": "libero",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "omnis": "dicta",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("qui"),
                                        },
                                        StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "consequatur",
                                            },
                                        },
                                        StringValue: sdk.String("amet"),
                                    },
                                },
                            },
                        },
                        RollbackTaskImplementationClassName: sdk.String("consequatur"),
                        TaskNumbersToRollback: []string{
                            "voluptatum",
                            "velit",
                            "hic",
                            "ullam",
                        },
                    },
                    SuccessPolicy: &shared.EnterpriseCrmEventbusProtoSuccessPolicy{
                        FinalState: shared.EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnumSucceeded.ToPointer(),
                    },
                    SynchronousCallFailurePolicy: &shared.EnterpriseCrmEventbusProtoFailurePolicy{
                        IntervalInSeconds: sdk.String("itaque"),
                        MaxNumRetries: sdk.Int(714300),
                        RetryStrategy: shared.EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnumFatal.ToPointer(),
                    },
                    TaskEntity: &shared.EnterpriseCrmFrontendsEventbusProtoTaskEntity{
                        DisabledForVpcSc: sdk.Bool(false),
                        Metadata: &shared.EnterpriseCrmEventbusProtoTaskMetadata{
                            ActiveTaskName: sdk.String("dignissimos"),
                            Admins: []shared.EnterpriseCrmEventbusProtoTaskMetadataAdmin{
                                shared.EnterpriseCrmEventbusProtoTaskMetadataAdmin{
                                    GoogleGroupEmail: sdk.String("occaecati"),
                                    UserEmail: sdk.String("assumenda"),
                                },
                                shared.EnterpriseCrmEventbusProtoTaskMetadataAdmin{
                                    GoogleGroupEmail: sdk.String("sunt"),
                                    UserEmail: sdk.String("odit"),
                                },
                                shared.EnterpriseCrmEventbusProtoTaskMetadataAdmin{
                                    GoogleGroupEmail: sdk.String("vero"),
                                    UserEmail: sdk.String("deleniti"),
                                },
                            },
                            Category: shared.EnterpriseCrmEventbusProtoTaskMetadataCategoryEnumCloudSystems.ToPointer(),
                            CodeSearchLink: sdk.String("quasi"),
                            DefaultJSONValidationOption: shared.EnterpriseCrmEventbusProtoTaskMetadataDefaultJSONValidationOptionEnumPrePostExecution.ToPointer(),
                            DefaultSpec: sdk.String("atque"),
                            Description: sdk.String("magnam"),
                            DescriptiveName: sdk.String("perspiciatis"),
                            DocMarkdown: sdk.String("amet"),
                            ExternalCategory: shared.EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnumExternalSecurity.ToPointer(),
                            ExternalCategorySequence: sdk.Int(125161),
                            ExternalDocHTML: sdk.String("nemo"),
                            ExternalDocLink: sdk.String("delectus"),
                            ExternalDocMarkdown: sdk.String("illum"),
                            G3DocLink: sdk.String("porro"),
                            IconLink: sdk.String("quaerat"),
                            IsDeprecated: sdk.Bool(false),
                            Name: sdk.String("Jacquelyn Lueilwitz"),
                            StandaloneExternalDocHTML: sdk.String("maxime"),
                            Status: shared.EnterpriseCrmEventbusProtoTaskMetadataStatusEnumUnspecifiedStatus.ToPointer(),
                            System: shared.EnterpriseCrmEventbusProtoTaskMetadataSystemEnumEmail.ToPointer(),
                            Tags: []string{
                                "possimus",
                            },
                        },
                        ParamSpecs: &shared.EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage{
                            Parameters: []shared.EnterpriseCrmFrontendsEventbusProtoParamSpecEntry{
                                shared.EnterpriseCrmFrontendsEventbusProtoParamSpecEntry{
                                    ClassName: sdk.String("harum"),
                                    CollectionElementClassName: sdk.String("aliquam"),
                                    Config: &shared.EnterpriseCrmEventbusProtoParamSpecEntryConfig{
                                        DescriptivePhrase: sdk.String("eligendi"),
                                        HelpText: sdk.String("hic"),
                                        HideDefaultValue: sdk.Bool(false),
                                        InputDisplayOption: shared.EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnumBooleanToggle.ToPointer(),
                                        IsHidden: sdk.Bool(false),
                                        Label: sdk.String("illo"),
                                        ParameterNameOption: shared.EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnumValueIsParameterName.ToPointer(),
                                        SubSectionLabel: sdk.String("esse"),
                                        UIPlaceholderText: sdk.String("nisi"),
                                    },
                                    DataType: shared.EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnumIntValue.ToPointer(),
                                    DefaultValue: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                9701.31,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(5537.66),
                                        IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "vitae",
                                                "maiores",
                                            },
                                        },
                                        IntValue: sdk.String("nam"),
                                        JSONValue: sdk.String("architecto"),
                                        ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "eos": "dolorem",
                                                    "hic": "repellendus",
                                                    "nam": "ab",
                                                    "magnam": "pariatur",
                                                },
                                                map[string]interface{}{
                                                    "autem": "tempore",
                                                    "recusandae": "nostrum",
                                                    "officia": "voluptas",
                                                },
                                                map[string]interface{}{
                                                    "corporis": "excepturi",
                                                    "natus": "deleniti",
                                                    "necessitatibus": "aspernatur",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "laborum": "vero",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("eos"),
                                        },
                                        StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "temporibus",
                                            },
                                        },
                                        StringValue: sdk.String("id"),
                                    },
                                    IsDeprecated: sdk.Bool(false),
                                    IsOutput: sdk.Bool(false),
                                    JSONSchema: sdk.String("quae"),
                                    Key: sdk.String("commodi"),
                                    ProtoDef: &shared.EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition{
                                        FullName: sdk.String("a"),
                                        Path: sdk.String("minus"),
                                    },
                                    Required: sdk.Bool(false),
                                    ValidationRule: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRule{
                                        DoubleRange: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange{
                                            Max: sdk.Float64(1489.58),
                                            Min: sdk.Float64(7211.98),
                                        },
                                        IntRange: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange{
                                            Max: sdk.String("quia"),
                                            Min: sdk.String("iusto"),
                                        },
                                        StringRegex: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex{
                                            Exclusive: sdk.Bool(false),
                                            Regex: sdk.String("ab"),
                                        },
                                    },
                                },
                                shared.EnterpriseCrmFrontendsEventbusProtoParamSpecEntry{
                                    ClassName: sdk.String("deserunt"),
                                    CollectionElementClassName: sdk.String("sed"),
                                    Config: &shared.EnterpriseCrmEventbusProtoParamSpecEntryConfig{
                                        DescriptivePhrase: sdk.String("blanditiis"),
                                        HelpText: sdk.String("sint"),
                                        HideDefaultValue: sdk.Bool(false),
                                        InputDisplayOption: shared.EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnumBooleanToggle.ToPointer(),
                                        IsHidden: sdk.Bool(false),
                                        Label: sdk.String("ullam"),
                                        ParameterNameOption: shared.EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnumIsParameterName.ToPointer(),
                                        SubSectionLabel: sdk.String("itaque"),
                                        UIPlaceholderText: sdk.String("rem"),
                                    },
                                    DataType: shared.EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnumSerializedObjectValue.ToPointer(),
                                    DefaultValue: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                6050.43,
                                                585.67,
                                                3029.05,
                                                2199.4,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(5772.84),
                                        IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "magni",
                                                "consequuntur",
                                                "consequuntur",
                                                "eius",
                                            },
                                        },
                                        IntValue: sdk.String("commodi"),
                                        JSONValue: sdk.String("ipsam"),
                                        ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "modi": "nisi",
                                                    "explicabo": "modi",
                                                    "doloremque": "odio",
                                                },
                                                map[string]interface{}{
                                                    "voluptatum": "tempora",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "quam": "dolorum",
                                            "libero": "ratione",
                                            "molestiae": "optio",
                                            "saepe": "maiores",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("accusantium"),
                                        },
                                        StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "eos",
                                            },
                                        },
                                        StringValue: sdk.String("consequuntur"),
                                    },
                                    IsDeprecated: sdk.Bool(false),
                                    IsOutput: sdk.Bool(false),
                                    JSONSchema: sdk.String("quis"),
                                    Key: sdk.String("vitae"),
                                    ProtoDef: &shared.EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition{
                                        FullName: sdk.String("occaecati"),
                                        Path: sdk.String("labore"),
                                    },
                                    Required: sdk.Bool(false),
                                    ValidationRule: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRule{
                                        DoubleRange: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange{
                                            Max: sdk.Float64(8527.37),
                                            Min: sdk.Float64(6959.74),
                                        },
                                        IntRange: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange{
                                            Max: sdk.String("exercitationem"),
                                            Min: sdk.String("veniam"),
                                        },
                                        StringRegex: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex{
                                            Exclusive: sdk.Bool(false),
                                            Regex: sdk.String("modi"),
                                        },
                                    },
                                },
                                shared.EnterpriseCrmFrontendsEventbusProtoParamSpecEntry{
                                    ClassName: sdk.String("quasi"),
                                    CollectionElementClassName: sdk.String("quae"),
                                    Config: &shared.EnterpriseCrmEventbusProtoParamSpecEntryConfig{
                                        DescriptivePhrase: sdk.String("similique"),
                                        HelpText: sdk.String("possimus"),
                                        HideDefaultValue: sdk.Bool(false),
                                        InputDisplayOption: shared.EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnumBooleanToggle.ToPointer(),
                                        IsHidden: sdk.Bool(false),
                                        Label: sdk.String("suscipit"),
                                        ParameterNameOption: shared.EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnumIsParameterName.ToPointer(),
                                        SubSectionLabel: sdk.String("sint"),
                                        UIPlaceholderText: sdk.String("est"),
                                    },
                                    DataType: shared.EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnumJSONValue.ToPointer(),
                                    DefaultValue: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                6436.44,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(1454.5),
                                        IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "quo",
                                                "molestiae",
                                            },
                                        },
                                        IntValue: sdk.String("maxime"),
                                        JSONValue: sdk.String("facere"),
                                        ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "deleniti": "quasi",
                                                    "maiores": "voluptatem",
                                                    "aliquid": "laudantium",
                                                },
                                                map[string]interface{}{
                                                    "corrupti": "quae",
                                                    "facere": "ea",
                                                    "libero": "nam",
                                                },
                                                map[string]interface{}{
                                                    "adipisci": "minus",
                                                },
                                                map[string]interface{}{
                                                    "similique": "fuga",
                                                    "consectetur": "labore",
                                                    "laudantium": "cumque",
                                                    "adipisci": "veritatis",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "voluptatibus": "magnam",
                                            "aperiam": "ducimus",
                                            "itaque": "necessitatibus",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("numquam"),
                                        },
                                        StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "eligendi",
                                                "sapiente",
                                                "alias",
                                                "impedit",
                                            },
                                        },
                                        StringValue: sdk.String("numquam"),
                                    },
                                    IsDeprecated: sdk.Bool(false),
                                    IsOutput: sdk.Bool(false),
                                    JSONSchema: sdk.String("aspernatur"),
                                    Key: sdk.String("nobis"),
                                    ProtoDef: &shared.EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition{
                                        FullName: sdk.String("nihil"),
                                        Path: sdk.String("voluptatum"),
                                    },
                                    Required: sdk.Bool(false),
                                    ValidationRule: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRule{
                                        DoubleRange: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange{
                                            Max: sdk.Float64(9682.86),
                                            Min: sdk.Float64(1149.52),
                                        },
                                        IntRange: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange{
                                            Max: sdk.String("ullam"),
                                            Min: sdk.String("nisi"),
                                        },
                                        StringRegex: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex{
                                            Exclusive: sdk.Bool(false),
                                            Regex: sdk.String("consequuntur"),
                                        },
                                    },
                                },
                                shared.EnterpriseCrmFrontendsEventbusProtoParamSpecEntry{
                                    ClassName: sdk.String("voluptas"),
                                    CollectionElementClassName: sdk.String("ratione"),
                                    Config: &shared.EnterpriseCrmEventbusProtoParamSpecEntryConfig{
                                        DescriptivePhrase: sdk.String("excepturi"),
                                        HelpText: sdk.String("corrupti"),
                                        HideDefaultValue: sdk.Bool(false),
                                        InputDisplayOption: shared.EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnumNumberSlider.ToPointer(),
                                        IsHidden: sdk.Bool(false),
                                        Label: sdk.String("perferendis"),
                                        ParameterNameOption: shared.EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnumValueIsParameterName.ToPointer(),
                                        SubSectionLabel: sdk.String("impedit"),
                                        UIPlaceholderText: sdk.String("ducimus"),
                                    },
                                    DataType: shared.EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnumStringArray.ToPointer(),
                                    DefaultValue: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                1439.76,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(2915.96),
                                        IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "maxime",
                                                "expedita",
                                                "accusantium",
                                                "ea",
                                            },
                                        },
                                        IntValue: sdk.String("impedit"),
                                        JSONValue: sdk.String("totam"),
                                        ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "inventore": "consequuntur",
                                                    "repellendus": "sit",
                                                    "dolores": "enim",
                                                },
                                                map[string]interface{}{
                                                    "perspiciatis": "magni",
                                                },
                                                map[string]interface{}{
                                                    "alias": "quidem",
                                                    "deleniti": "possimus",
                                                },
                                                map[string]interface{}{
                                                    "odio": "fugit",
                                                    "aspernatur": "at",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "praesentium": "sint",
                                            "exercitationem": "cum",
                                            "voluptatum": "facilis",
                                            "placeat": "reiciendis",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("dolores"),
                                        },
                                        StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "pariatur",
                                                "facilis",
                                            },
                                        },
                                        StringValue: sdk.String("cupiditate"),
                                    },
                                    IsDeprecated: sdk.Bool(false),
                                    IsOutput: sdk.Bool(false),
                                    JSONSchema: sdk.String("nemo"),
                                    Key: sdk.String("natus"),
                                    ProtoDef: &shared.EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition{
                                        FullName: sdk.String("nisi"),
                                        Path: sdk.String("provident"),
                                    },
                                    Required: sdk.Bool(false),
                                    ValidationRule: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRule{
                                        DoubleRange: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange{
                                            Max: sdk.Float64(2305.94),
                                            Min: sdk.Float64(2213.19),
                                        },
                                        IntRange: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange{
                                            Max: sdk.String("nostrum"),
                                            Min: sdk.String("qui"),
                                        },
                                        StringRegex: &shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex{
                                            Exclusive: sdk.Bool(false),
                                            Regex: sdk.String("tenetur"),
                                        },
                                    },
                                },
                            },
                        },
                        Stats: &shared.EnterpriseCrmEventbusStats{
                            Dimensions: &shared.EnterpriseCrmEventbusStatsDimensions{
                                ClientID: sdk.String("molestiae"),
                                EnumFilterType: shared.EnterpriseCrmEventbusStatsDimensionsEnumFilterTypeEnumDefaultInclusive.ToPointer(),
                                ErrorEnumString: sdk.String("ullam"),
                                RetryAttempt: shared.EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnumUnspecified.ToPointer(),
                                TaskName: sdk.String("adipisci"),
                                TaskNumber: sdk.String("cupiditate"),
                                TriggerID: sdk.String("occaecati"),
                                WarningEnumString: sdk.String("numquam"),
                                WorkflowID: sdk.String("fugiat"),
                                WorkflowName: sdk.String("molestiae"),
                            },
                            DurationInSeconds: sdk.Float64(5568.98),
                            ErrorRate: sdk.Float64(8341.77),
                            QPS: sdk.Float64(9065.24),
                            WarningRate: sdk.Float64(2304),
                        },
                        TaskType: shared.EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnumIoTemplate.ToPointer(),
                        UIConfig: &shared.EnterpriseCrmEventbusProtoTaskUIConfig{
                            TaskUIModuleConfigs: []shared.EnterpriseCrmEventbusProtoTaskUIModuleConfig{
                                shared.EnterpriseCrmEventbusProtoTaskUIModuleConfig{
                                    ModuleID: shared.EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnumCloudSQL.ToPointer(),
                                },
                                shared.EnterpriseCrmEventbusProtoTaskUIModuleConfig{
                                    ModuleID: shared.EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnumAppsScriptNavigator.ToPointer(),
                                },
                            },
                        },
                    },
                    TaskExecutionStrategy: shared.EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnumWhenAllSucceed.ToPointer(),
                    TaskName: sdk.String("corrupti"),
                    TaskNumber: sdk.String("cupiditate"),
                    TaskSpec: sdk.String("voluptatibus"),
                    TaskTemplateName: sdk.String("ullam"),
                    TaskType: shared.EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnumIoTemplate.ToPointer(),
                },
            },
            Teardown: &shared.EnterpriseCrmEventbusProtoTeardown{
                TeardownTaskConfigs: []shared.EnterpriseCrmEventbusProtoTeardownTaskConfig{
                    shared.EnterpriseCrmEventbusProtoTeardownTaskConfig{
                        CreatorEmail: sdk.String("cum"),
                        Name: sdk.String("Faith Jenkins"),
                        NextTeardownTask: &shared.EnterpriseCrmEventbusProtoNextTeardownTask{
                            Name: sdk.String("Marion Baumbach"),
                        },
                        Parameters: &shared.EnterpriseCrmEventbusProtoEventParameters{
                            Parameters: []shared.EnterpriseCrmEventbusProtoParameterEntry{
                                shared.EnterpriseCrmEventbusProtoParameterEntry{
                                    Key: sdk.String("adipisci"),
                                    Value: &shared.EnterpriseCrmEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                6481.66,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(7547.84),
                                        IntArray: &shared.EnterpriseCrmEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "deleniti",
                                                "dolor",
                                            },
                                        },
                                        IntValue: sdk.String("est"),
                                        ProtoArray: &shared.EnterpriseCrmEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "odit": "consectetur",
                                                    "inventore": "minima",
                                                    "facilis": "facilis",
                                                    "deserunt": "nisi",
                                                },
                                                map[string]interface{}{
                                                    "voluptatem": "illo",
                                                    "iure": "incidunt",
                                                },
                                                map[string]interface{}{
                                                    "quae": "ea",
                                                    "asperiores": "veniam",
                                                    "quidem": "asperiores",
                                                    "eum": "deserunt",
                                                },
                                                map[string]interface{}{
                                                    "nemo": "molestias",
                                                    "architecto": "expedita",
                                                    "quisquam": "praesentium",
                                                    "facilis": "assumenda",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "maiores": "ipsum",
                                            "commodi": "vitae",
                                            "fugit": "nam",
                                            "ex": "neque",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("quod"),
                                        },
                                        StringArray: &shared.EnterpriseCrmEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "alias",
                                            },
                                        },
                                        StringValue: sdk.String("ad"),
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoParameterEntry{
                                    Key: sdk.String("a"),
                                    Value: &shared.EnterpriseCrmEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                5395.37,
                                                3106.48,
                                                458.5,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(4898.21),
                                        IntArray: &shared.EnterpriseCrmEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "modi",
                                                "fuga",
                                            },
                                        },
                                        IntValue: sdk.String("iure"),
                                        ProtoArray: &shared.EnterpriseCrmEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "sint": "laborum",
                                                    "dolor": "ad",
                                                    "illum": "sit",
                                                },
                                                map[string]interface{}{
                                                    "voluptas": "expedita",
                                                    "voluptas": "maiores",
                                                    "ea": "vel",
                                                },
                                                map[string]interface{}{
                                                    "accusamus": "reiciendis",
                                                    "consequatur": "sed",
                                                    "accusantium": "voluptates",
                                                    "provident": "maiores",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "numquam": "non",
                                            "cum": "incidunt",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("dolores"),
                                        },
                                        StringArray: &shared.EnterpriseCrmEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "nihil",
                                                "libero",
                                            },
                                        },
                                        StringValue: sdk.String("omnis"),
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoParameterEntry{
                                    Key: sdk.String("excepturi"),
                                    Value: &shared.EnterpriseCrmEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                5471.84,
                                                8301.97,
                                                7388.32,
                                                8429.35,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(6674.18),
                                        IntArray: &shared.EnterpriseCrmEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "similique",
                                                "autem",
                                            },
                                        },
                                        IntValue: sdk.String("dicta"),
                                        ProtoArray: &shared.EnterpriseCrmEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "id": "odit",
                                                    "inventore": "iste",
                                                    "atque": "explicabo",
                                                    "ullam": "atque",
                                                },
                                                map[string]interface{}{
                                                    "pariatur": "aut",
                                                    "similique": "iste",
                                                    "eveniet": "nam",
                                                    "animi": "labore",
                                                },
                                                map[string]interface{}{
                                                    "voluptatibus": "quam",
                                                    "nulla": "dolorem",
                                                },
                                                map[string]interface{}{
                                                    "a": "perferendis",
                                                    "quaerat": "excepturi",
                                                    "aliquid": "dolore",
                                                    "voluptatem": "illum",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "culpa": "dicta",
                                            "atque": "ratione",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("vitae"),
                                        },
                                        StringArray: &shared.EnterpriseCrmEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "atque",
                                                "nihil",
                                                "culpa",
                                                "temporibus",
                                            },
                                        },
                                        StringValue: sdk.String("a"),
                                    },
                                },
                            },
                        },
                        Properties: &shared.EnterpriseCrmEventbusProtoEventBusProperties{
                            Properties: []shared.EnterpriseCrmEventbusProtoPropertyEntry{
                                shared.EnterpriseCrmEventbusProtoPropertyEntry{
                                    Key: sdk.String("cupiditate"),
                                    Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                            Values: []float64{
                                                9674.01,
                                                8321.35,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(9616.07),
                                        IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                            Values: []string{
                                                "mollitia",
                                            },
                                        },
                                        IntValue: sdk.String("possimus"),
                                        ProtoValue: map[string]interface{}{
                                            "neque": "quam",
                                            "animi": "debitis",
                                            "voluptatum": "voluptatem",
                                        },
                                        StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                            Values: []string{
                                                "vitae",
                                                "cumque",
                                                "architecto",
                                                "sint",
                                            },
                                        },
                                        StringValue: sdk.String("eligendi"),
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoPropertyEntry{
                                    Key: sdk.String("occaecati"),
                                    Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                            Values: []float64{
                                                7343.61,
                                                6379.69,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(6105.63),
                                        IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                            Values: []string{
                                                "quas",
                                                "laboriosam",
                                                "ducimus",
                                            },
                                        },
                                        IntValue: sdk.String("voluptatum"),
                                        ProtoValue: map[string]interface{}{
                                            "deserunt": "dolor",
                                            "hic": "iure",
                                            "sint": "autem",
                                            "iste": "cupiditate",
                                        },
                                        StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                            Values: []string{
                                                "fuga",
                                            },
                                        },
                                        StringValue: sdk.String("a"),
                                    },
                                },
                            },
                        },
                        TeardownTaskImplementationClassName: sdk.String("dolor"),
                    },
                    shared.EnterpriseCrmEventbusProtoTeardownTaskConfig{
                        CreatorEmail: sdk.String("voluptatum"),
                        Name: sdk.String("Mrs. Forrest Waelchi"),
                        NextTeardownTask: &shared.EnterpriseCrmEventbusProtoNextTeardownTask{
                            Name: sdk.String("Carrie Goyette"),
                        },
                        Parameters: &shared.EnterpriseCrmEventbusProtoEventParameters{
                            Parameters: []shared.EnterpriseCrmEventbusProtoParameterEntry{
                                shared.EnterpriseCrmEventbusProtoParameterEntry{
                                    Key: sdk.String("voluptate"),
                                    Value: &shared.EnterpriseCrmEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                4397.45,
                                                6541.99,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(105.85),
                                        IntArray: &shared.EnterpriseCrmEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "delectus",
                                                "qui",
                                                "delectus",
                                                "exercitationem",
                                            },
                                        },
                                        IntValue: sdk.String("ipsum"),
                                        ProtoArray: &shared.EnterpriseCrmEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "sed": "voluptatum",
                                                },
                                                map[string]interface{}{
                                                    "a": "itaque",
                                                    "eveniet": "repellat",
                                                    "cupiditate": "adipisci",
                                                    "aliquam": "illo",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "sed": "necessitatibus",
                                            "possimus": "dignissimos",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("itaque"),
                                        },
                                        StringArray: &shared.EnterpriseCrmEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "ullam",
                                            },
                                        },
                                        StringValue: sdk.String("non"),
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoParameterEntry{
                                    Key: sdk.String("delectus"),
                                    Value: &shared.EnterpriseCrmEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                1235.46,
                                                3534.93,
                                                4630.44,
                                                8509.53,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(9160.51),
                                        IntArray: &shared.EnterpriseCrmEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "est",
                                                "in",
                                                "illo",
                                            },
                                        },
                                        IntValue: sdk.String("voluptate"),
                                        ProtoArray: &shared.EnterpriseCrmEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "incidunt": "dolore",
                                                    "nemo": "est",
                                                    "quo": "maxime",
                                                    "delectus": "laboriosam",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "quam": "fuga",
                                            "officia": "repellat",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("cupiditate"),
                                        },
                                        StringArray: &shared.EnterpriseCrmEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "tempore",
                                                "culpa",
                                                "fugiat",
                                            },
                                        },
                                        StringValue: sdk.String("inventore"),
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoParameterEntry{
                                    Key: sdk.String("atque"),
                                    Value: &shared.EnterpriseCrmEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                9133.93,
                                                2811.35,
                                                2010.05,
                                                667.56,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(8435.91),
                                        IntArray: &shared.EnterpriseCrmEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "quidem",
                                                "delectus",
                                            },
                                        },
                                        IntValue: sdk.String("nemo"),
                                        ProtoArray: &shared.EnterpriseCrmEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "sequi": "atque",
                                                    "maiores": "expedita",
                                                    "rerum": "totam",
                                                },
                                                map[string]interface{}{
                                                    "aspernatur": "eaque",
                                                    "impedit": "nam",
                                                    "ex": "odio",
                                                    "delectus": "minus",
                                                },
                                                map[string]interface{}{
                                                    "distinctio": "eius",
                                                    "eos": "veniam",
                                                },
                                                map[string]interface{}{
                                                    "sint": "occaecati",
                                                    "debitis": "laboriosam",
                                                    "eos": "amet",
                                                    "incidunt": "porro",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "reiciendis": "voluptate",
                                            "tempore": "in",
                                            "omnis": "possimus",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("tenetur"),
                                        },
                                        StringArray: &shared.EnterpriseCrmEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "expedita",
                                                "iusto",
                                                "esse",
                                                "harum",
                                            },
                                        },
                                        StringValue: sdk.String("ad"),
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoParameterEntry{
                                    Key: sdk.String("quod"),
                                    Value: &shared.EnterpriseCrmEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                8736.81,
                                                2943.16,
                                                7228.89,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(6380.85),
                                        IntArray: &shared.EnterpriseCrmEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "cupiditate",
                                                "illo",
                                                "saepe",
                                                "enim",
                                            },
                                        },
                                        IntValue: sdk.String("eaque"),
                                        ProtoArray: &shared.EnterpriseCrmEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "delectus": "deleniti",
                                                    "provident": "aut",
                                                    "dolorum": "nostrum",
                                                    "tempora": "nam",
                                                },
                                                map[string]interface{}{
                                                    "odio": "nostrum",
                                                    "maiores": "veritatis",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "earum": "minima",
                                            "ex": "possimus",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("nesciunt"),
                                        },
                                        StringArray: &shared.EnterpriseCrmEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "nostrum",
                                                "fuga",
                                                "sequi",
                                            },
                                        },
                                        StringValue: sdk.String("maxime"),
                                    },
                                },
                            },
                        },
                        Properties: &shared.EnterpriseCrmEventbusProtoEventBusProperties{
                            Properties: []shared.EnterpriseCrmEventbusProtoPropertyEntry{
                                shared.EnterpriseCrmEventbusProtoPropertyEntry{
                                    Key: sdk.String("laborum"),
                                    Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                            Values: []float64{
                                                4224.07,
                                                2380.22,
                                                1247.96,
                                                6988.44,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(5802.48),
                                        IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                            Values: []string{
                                                "necessitatibus",
                                                "fugit",
                                                "autem",
                                            },
                                        },
                                        IntValue: sdk.String("optio"),
                                        ProtoValue: map[string]interface{}{
                                            "fugiat": "blanditiis",
                                            "a": "natus",
                                            "sapiente": "repellendus",
                                            "facilis": "molestias",
                                        },
                                        StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                            Values: []string{
                                                "et",
                                                "accusantium",
                                            },
                                        },
                                        StringValue: sdk.String("maiores"),
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoPropertyEntry{
                                    Key: sdk.String("nisi"),
                                    Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                            Values: []float64{
                                                7331.27,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(7105.06),
                                        IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                            Values: []string{
                                                "blanditiis",
                                                "vitae",
                                                "iusto",
                                                "atque",
                                            },
                                        },
                                        IntValue: sdk.String("velit"),
                                        ProtoValue: map[string]interface{}{
                                            "nam": "aperiam",
                                            "vitae": "mollitia",
                                        },
                                        StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                            Values: []string{
                                                "at",
                                                "quibusdam",
                                                "quam",
                                                "deleniti",
                                            },
                                        },
                                        StringValue: sdk.String("rem"),
                                    },
                                },
                            },
                        },
                        TeardownTaskImplementationClassName: sdk.String("vel"),
                    },
                    shared.EnterpriseCrmEventbusProtoTeardownTaskConfig{
                        CreatorEmail: sdk.String("eos"),
                        Name: sdk.String("Katherine Kuvalis"),
                        NextTeardownTask: &shared.EnterpriseCrmEventbusProtoNextTeardownTask{
                            Name: sdk.String("Troy Grant"),
                        },
                        Parameters: &shared.EnterpriseCrmEventbusProtoEventParameters{
                            Parameters: []shared.EnterpriseCrmEventbusProtoParameterEntry{
                                shared.EnterpriseCrmEventbusProtoParameterEntry{
                                    Key: sdk.String("sapiente"),
                                    Value: &shared.EnterpriseCrmEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                1902.6,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(2358.13),
                                        IntArray: &shared.EnterpriseCrmEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "architecto",
                                                "sint",
                                                "possimus",
                                                "tempore",
                                            },
                                        },
                                        IntValue: sdk.String("asperiores"),
                                        ProtoArray: &shared.EnterpriseCrmEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "nemo": "nobis",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "labore": "veritatis",
                                            "minima": "magni",
                                            "itaque": "error",
                                            "expedita": "error",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("placeat"),
                                        },
                                        StringArray: &shared.EnterpriseCrmEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "voluptate",
                                                "earum",
                                                "minima",
                                                "odit",
                                            },
                                        },
                                        StringValue: sdk.String("odit"),
                                    },
                                },
                            },
                        },
                        Properties: &shared.EnterpriseCrmEventbusProtoEventBusProperties{
                            Properties: []shared.EnterpriseCrmEventbusProtoPropertyEntry{
                                shared.EnterpriseCrmEventbusProtoPropertyEntry{
                                    Key: sdk.String("error"),
                                    Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                            Values: []float64{
                                                6798.35,
                                                9.03,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(9303.98),
                                        IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                            Values: []string{
                                                "sunt",
                                            },
                                        },
                                        IntValue: sdk.String("amet"),
                                        ProtoValue: map[string]interface{}{
                                            "iusto": "corrupti",
                                            "non": "esse",
                                            "vero": "eligendi",
                                        },
                                        StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                            Values: []string{
                                                "omnis",
                                                "recusandae",
                                            },
                                        },
                                        StringValue: sdk.String("architecto"),
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoPropertyEntry{
                                    Key: sdk.String("voluptatibus"),
                                    Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                            Values: []float64{
                                                4498.61,
                                                9956.71,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(2271.29),
                                        IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                            Values: []string{
                                                "dolore",
                                                "optio",
                                                "quo",
                                                "repudiandae",
                                            },
                                        },
                                        IntValue: sdk.String("tempora"),
                                        ProtoValue: map[string]interface{}{
                                            "suscipit": "illum",
                                            "iusto": "aliquid",
                                            "sint": "aliquid",
                                        },
                                        StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                            Values: []string{
                                                "sapiente",
                                                "consectetur",
                                                "eligendi",
                                                "ullam",
                                            },
                                        },
                                        StringValue: sdk.String("nihil"),
                                    },
                                },
                            },
                        },
                        TeardownTaskImplementationClassName: sdk.String("eius"),
                    },
                },
            },
            TemplateParameters: &shared.EnterpriseCrmFrontendsEventbusProtoWorkflowParameters{
                Parameters: []shared.EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry{
                    shared.EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry{
                        Attributes: &shared.EnterpriseCrmEventbusProtoAttributes{
                            DataType: shared.EnterpriseCrmEventbusProtoAttributesDataTypeEnumURL.ToPointer(),
                            DefaultValue: &shared.EnterpriseCrmEventbusProtoValueType{
                                BooleanValue: sdk.Bool(false),
                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                    Values: []float64{
                                        1008.04,
                                    },
                                },
                                DoubleValue: sdk.Float64(2297.33),
                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                    Values: []string{
                                        "nihil",
                                        "officiis",
                                    },
                                },
                                IntValue: sdk.String("dolore"),
                                ProtoValue: map[string]interface{}{
                                    "maiores": "ipsam",
                                    "dicta": "hic",
                                },
                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                    Values: []string{
                                        "libero",
                                        "consequatur",
                                        "totam",
                                    },
                                },
                                StringValue: sdk.String("tempora"),
                            },
                            IsRequired: sdk.Bool(false),
                            IsSearchable: sdk.Bool(false),
                            LogSettings: &shared.EnterpriseCrmEventbusProtoLogSettings{
                                LogFieldName: sdk.String("quo"),
                                SanitizeOptions: &shared.EnterpriseCrmLoggingGwsSanitizeOptions{
                                    IsAlreadySanitized: sdk.Bool(false),
                                    LogType: []shared.EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum{
                                        shared.EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnumLogTypeUnspecified,
                                    },
                                    Privacy: shared.EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnumSpii.ToPointer(),
                                    SanitizeType: shared.EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnumAnonymizeLimitedRepeatable.ToPointer(),
                                },
                                SeedPeriod: shared.EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnumMonth.ToPointer(),
                                SeedScope: shared.EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnumSeedScopeUnspecified.ToPointer(),
                                ShorteningLimits: &shared.EnterpriseCrmLoggingGwsFieldLimits{
                                    LogAction: shared.EnterpriseCrmLoggingGwsFieldLimitsLogActionEnumDontLog.ToPointer(),
                                    LogType: []shared.EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum{
                                        shared.EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnumGts,
                                    },
                                    MaxArraySize: sdk.Int(141867),
                                    MaxStringLength: sdk.Int(279923),
                                    ShortenerType: shared.EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnumHash.ToPointer(),
                                },
                            },
                            Searchable: shared.EnterpriseCrmEventbusProtoAttributesSearchableEnumUnspecified.ToPointer(),
                            TaskVisibility: []string{
                                "ducimus",
                                "tenetur",
                            },
                        },
                        Children: []shared.EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry{
                            shared.EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry{},
                            shared.EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry{},
                            shared.EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry{},
                        },
                        DataType: shared.EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnumBooleanValue.ToPointer(),
                        DefaultValue: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                            BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                                BooleanValues: []bool{
                                    false,
                                    false,
                                    false,
                                },
                            },
                            BooleanValue: sdk.Bool(false),
                            DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                                DoubleValues: []float64{
                                    2600.46,
                                    8113.8,
                                },
                            },
                            DoubleValue: sdk.Float64(1459.73),
                            IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                                IntValues: []string{
                                    "ipsam",
                                    "nobis",
                                    "porro",
                                    "labore",
                                },
                            },
                            IntValue: sdk.String("perspiciatis"),
                            JSONValue: sdk.String("ducimus"),
                            ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                                ProtoValues: []map[string]interface{}{
                                    map[string]interface{}{
                                        "consectetur": "ratione",
                                    },
                                },
                            },
                            ProtoValue: map[string]interface{}{
                                "iure": "aliquid",
                                "cum": "fugiat",
                                "rem": "voluptatibus",
                                "officiis": "corporis",
                            },
                            SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                                ObjectValue: sdk.String("repellendus"),
                            },
                            StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                                StringValues: []string{
                                    "voluptatem",
                                },
                            },
                            StringValue: sdk.String("libero"),
                        },
                        InOutType: shared.EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnumOut.ToPointer(),
                        IsTransient: sdk.Bool(false),
                        JSONSchema: sdk.String("odio"),
                        Key: sdk.String("omnis"),
                        Name: sdk.String("Mrs. Winston Dach"),
                        ProducedBy: &shared.EnterpriseCrmEventbusProtoNodeIdentifier{
                            ElementIdentifier: sdk.String("nihil"),
                            ElementType: shared.EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnumUnknownType.ToPointer(),
                        },
                        Producer: sdk.String("aspernatur"),
                        ProtoDefName: sdk.String("eaque"),
                        ProtoDefPath: sdk.String("corporis"),
                    },
                    shared.EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry{
                        Attributes: &shared.EnterpriseCrmEventbusProtoAttributes{
                            DataType: shared.EnterpriseCrmEventbusProtoAttributesDataTypeEnumCurrency.ToPointer(),
                            DefaultValue: &shared.EnterpriseCrmEventbusProtoValueType{
                                BooleanValue: sdk.Bool(false),
                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                    Values: []float64{
                                        7726.04,
                                    },
                                },
                                DoubleValue: sdk.Float64(8017.81),
                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                    Values: []string{
                                        "architecto",
                                        "voluptatem",
                                        "perspiciatis",
                                        "ea",
                                    },
                                },
                                IntValue: sdk.String("eius"),
                                ProtoValue: map[string]interface{}{
                                    "voluptatem": "non",
                                },
                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                    Values: []string{
                                        "sequi",
                                    },
                                },
                                StringValue: sdk.String("rerum"),
                            },
                            IsRequired: sdk.Bool(false),
                            IsSearchable: sdk.Bool(false),
                            LogSettings: &shared.EnterpriseCrmEventbusProtoLogSettings{
                                LogFieldName: sdk.String("ipsum"),
                                SanitizeOptions: &shared.EnterpriseCrmLoggingGwsSanitizeOptions{
                                    IsAlreadySanitized: sdk.Bool(false),
                                    LogType: []shared.EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum{
                                        shared.EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnumGws,
                                        shared.EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnumLogTypeUnspecified,
                                        shared.EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnumGws,
                                        shared.EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnumGws,
                                    },
                                    Privacy: shared.EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnumUnsure.ToPointer(),
                                    SanitizeType: shared.EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnumAnonymize.ToPointer(),
                                },
                                SeedPeriod: shared.EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnumDay.ToPointer(),
                                SeedScope: shared.EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnumParamName.ToPointer(),
                                ShorteningLimits: &shared.EnterpriseCrmLoggingGwsFieldLimits{
                                    LogAction: shared.EnterpriseCrmLoggingGwsFieldLimitsLogActionEnumLog.ToPointer(),
                                    LogType: []shared.EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum{
                                        shared.EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnumLogTypeUnspecified,
                                        shared.EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnumAll,
                                    },
                                    MaxArraySize: sdk.Int(763747),
                                    MaxStringLength: sdk.Int(281120),
                                    ShortenerType: shared.EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnumShortenerTypeUnspecified.ToPointer(),
                                },
                            },
                            Searchable: shared.EnterpriseCrmEventbusProtoAttributesSearchableEnumYes.ToPointer(),
                            TaskVisibility: []string{
                                "assumenda",
                                "consequatur",
                            },
                        },
                        Children: []shared.EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry{
                            shared.EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry{},
                            shared.EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry{},
                            shared.EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry{},
                            shared.EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry{},
                        },
                        DataType: shared.EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnumBytes.ToPointer(),
                        DefaultValue: &shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType{
                            BooleanArray: &shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray{
                                BooleanValues: []bool{
                                    false,
                                },
                            },
                            BooleanValue: sdk.Bool(false),
                            DoubleArray: &shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray{
                                DoubleValues: []float64{
                                    2527.17,
                                    351.07,
                                    5484.73,
                                    9338.47,
                                },
                            },
                            DoubleValue: sdk.Float64(9380.15),
                            IntArray: &shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray{
                                IntValues: []string{
                                    "dicta",
                                    "corporis",
                                    "impedit",
                                    "eveniet",
                                },
                            },
                            IntValue: sdk.String("cum"),
                            JSONValue: sdk.String("dolore"),
                            ProtoArray: &shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray{
                                ProtoValues: []map[string]interface{}{
                                    map[string]interface{}{
                                        "officiis": "quasi",
                                        "accusamus": "animi",
                                    },
                                    map[string]interface{}{
                                        "voluptatem": "maiores",
                                        "odio": "veniam",
                                        "fuga": "itaque",
                                        "possimus": "tenetur",
                                    },
                                    map[string]interface{}{
                                        "deserunt": "eligendi",
                                    },
                                    map[string]interface{}{
                                        "distinctio": "corporis",
                                        "quas": "soluta",
                                        "cupiditate": "unde",
                                    },
                                },
                            },
                            ProtoValue: map[string]interface{}{
                                "quisquam": "unde",
                            },
                            SerializedObjectValue: &shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter{
                                ObjectValue: sdk.String("sed"),
                            },
                            StringArray: &shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray{
                                StringValues: []string{
                                    "facere",
                                    "pariatur",
                                },
                            },
                            StringValue: sdk.String("nam"),
                        },
                        InOutType: shared.EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnumIn.ToPointer(),
                        IsTransient: sdk.Bool(false),
                        JSONSchema: sdk.String("corrupti"),
                        Key: sdk.String("sint"),
                        Name: sdk.String("Kristin Boyle"),
                        ProducedBy: &shared.EnterpriseCrmEventbusProtoNodeIdentifier{
                            ElementIdentifier: sdk.String("numquam"),
                            ElementType: shared.EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnumUnknownType.ToPointer(),
                        },
                        Producer: sdk.String("inventore"),
                        ProtoDefName: sdk.String("optio"),
                        ProtoDefPath: sdk.String("nobis"),
                    },
                },
            },
            TriggerConfigs: []shared.EnterpriseCrmFrontendsEventbusProtoTriggerConfig{
                shared.EnterpriseCrmFrontendsEventbusProtoTriggerConfig{
                    AlertConfig: []shared.EnterpriseCrmEventbusProtoWorkflowAlertConfig{
                        shared.EnterpriseCrmEventbusProtoWorkflowAlertConfig{
                            AggregationPeriod: sdk.String("possimus"),
                            AlertDisabled: sdk.Bool(false),
                            AlertName: sdk.String("provident"),
                            ClientID: sdk.String("veniam"),
                            DurationThresholdMs: sdk.String("sit"),
                            ErrorEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "a",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumDefaultInclusive.ToPointer(),
                            },
                            MetricType: shared.EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnumTaskAverageDuration.ToPointer(),
                            NumAggregationPeriods: sdk.Int(663658),
                            OnlyFinalAttempt: sdk.Bool(false),
                            PlaybookURL: sdk.String("error"),
                            ThresholdType: shared.EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnumUnspecifiedThresholdType.ToPointer(),
                            ThresholdValue: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue{
                                Absolute: sdk.String("perferendis"),
                                Percentage: sdk.Int(716555),
                            },
                            WarningEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "sint",
                                    "maiores",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumDefaultInclusive.ToPointer(),
                            },
                        },
                        shared.EnterpriseCrmEventbusProtoWorkflowAlertConfig{
                            AggregationPeriod: sdk.String("fuga"),
                            AlertDisabled: sdk.Bool(false),
                            AlertName: sdk.String("cumque"),
                            ClientID: sdk.String("consequuntur"),
                            DurationThresholdMs: sdk.String("maiores"),
                            ErrorEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "explicabo",
                                    "delectus",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumExclusive.ToPointer(),
                            },
                            MetricType: shared.EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnumTaskRate.ToPointer(),
                            NumAggregationPeriods: sdk.Int(313223),
                            OnlyFinalAttempt: sdk.Bool(false),
                            PlaybookURL: sdk.String("sit"),
                            ThresholdType: shared.EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnumUnspecifiedThresholdType.ToPointer(),
                            ThresholdValue: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue{
                                Absolute: sdk.String("natus"),
                                Percentage: sdk.Int(29346),
                            },
                            WarningEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "occaecati",
                                    "quasi",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumDefaultInclusive.ToPointer(),
                            },
                        },
                    },
                    CloudSchedulerConfig: &shared.EnterpriseCrmEventbusProtoCloudSchedulerConfig{
                        CronTab: sdk.String("ex"),
                        ErrorMessage: sdk.String("doloremque"),
                        Location: sdk.String("quas"),
                        ServiceAccountEmail: sdk.String("dolores"),
                    },
                    Description: sdk.String("perferendis"),
                    EnabledClients: []string{
                        "quas",
                        "blanditiis",
                    },
                    ErrorCatcherID: sdk.String("laudantium"),
                    Label: sdk.String("voluptates"),
                    NextTasksExecutionPolicy: shared.EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnumRunFirstMatch.ToPointer(),
                    PauseWorkflowExecutions: sdk.Bool(false),
                    Position: &shared.EnterpriseCrmEventbusProtoCoordinate{
                        X: sdk.Int(419669),
                        Y: sdk.Int(423550),
                    },
                    Properties: map[string]string{
                        "quos": "consectetur",
                    },
                    StartTasks: []shared.EnterpriseCrmEventbusProtoNextTask{
                        shared.EnterpriseCrmEventbusProtoNextTask{
                            CombinedConditions: []shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("perspiciatis"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumLessThan.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        6016.34,
                                                        8927.12,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(6946.11),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "doloremque",
                                                        "accusamus",
                                                    },
                                                },
                                                IntValue: sdk.String("quod"),
                                                ProtoValue: map[string]interface{}{
                                                    "voluptas": "earum",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "earum",
                                                        "nihil",
                                                        "nostrum",
                                                    },
                                                },
                                                StringValue: sdk.String("rerum"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("perferendis"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumDoesNotExist.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        1915.71,
                                                        1808.11,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(6621.74),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "illum",
                                                        "error",
                                                    },
                                                },
                                                IntValue: sdk.String("consectetur"),
                                                ProtoValue: map[string]interface{}{
                                                    "eligendi": "cum",
                                                    "culpa": "culpa",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "magnam",
                                                        "eius",
                                                        "ad",
                                                        "quia",
                                                    },
                                                },
                                                StringValue: sdk.String("quod"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("quaerat"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumGreaterThan.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        1273.8,
                                                        7568.33,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(5867.23),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "odit",
                                                        "est",
                                                        "at",
                                                    },
                                                },
                                                IntValue: sdk.String("ipsum"),
                                                ProtoValue: map[string]interface{}{
                                                    "nulla": "est",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "necessitatibus",
                                                        "voluptatum",
                                                        "quasi",
                                                        "mollitia",
                                                    },
                                                },
                                                StringValue: sdk.String("voluptatum"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("blanditiis"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumIsNotEmpty.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        2779.43,
                                                        2861.47,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(2810.68),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "nihil",
                                                        "ratione",
                                                    },
                                                },
                                                IntValue: sdk.String("tenetur"),
                                                ProtoValue: map[string]interface{}{
                                                    "quod": "nulla",
                                                    "tempora": "quam",
                                                    "consectetur": "nemo",
                                                    "nesciunt": "earum",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "dolor",
                                                        "placeat",
                                                    },
                                                },
                                                StringValue: sdk.String("quos"),
                                            },
                                        },
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("eaque"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumExists.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        4722.9,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(6040.27),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "id",
                                                        "ex",
                                                        "occaecati",
                                                    },
                                                },
                                                IntValue: sdk.String("optio"),
                                                ProtoValue: map[string]interface{}{
                                                    "ad": "asperiores",
                                                    "nam": "cumque",
                                                    "sapiente": "quam",
                                                    "occaecati": "repellendus",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "dicta",
                                                        "rem",
                                                        "fuga",
                                                    },
                                                },
                                                StringValue: sdk.String("odio"),
                                            },
                                        },
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("magni"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumEquals.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        9729.34,
                                                        6061.72,
                                                        3384.37,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(5528.86),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "aliquam",
                                                        "vero",
                                                        "nisi",
                                                    },
                                                },
                                                IntValue: sdk.String("praesentium"),
                                                ProtoValue: map[string]interface{}{
                                                    "vitae": "animi",
                                                    "possimus": "libero",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "quaerat",
                                                        "maiores",
                                                    },
                                                },
                                                StringValue: sdk.String("iste"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("accusamus"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumLessThan.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        4852.12,
                                                        3562.53,
                                                        819.17,
                                                        7571.3,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(5786.78),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "necessitatibus",
                                                        "rem",
                                                        "a",
                                                        "nihil",
                                                    },
                                                },
                                                IntValue: sdk.String("veniam"),
                                                ProtoValue: map[string]interface{}{
                                                    "magni": "rerum",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "nulla",
                                                        "quod",
                                                        "non",
                                                        "dolore",
                                                    },
                                                },
                                                StringValue: sdk.String("enim"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("alias"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumGreaterThan.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        720.8,
                                                        9549.46,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(896.42),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "autem",
                                                        "dolore",
                                                    },
                                                },
                                                IntValue: sdk.String("eius"),
                                                ProtoValue: map[string]interface{}{
                                                    "ex": "amet",
                                                    "voluptate": "molestias",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "ipsum",
                                                        "hic",
                                                        "quidem",
                                                        "odit",
                                                    },
                                                },
                                                StringValue: sdk.String("molestiae"),
                                            },
                                        },
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("quia"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumUnset.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        5076.35,
                                                        3977.3,
                                                        1639.1,
                                                        3894.4,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(3658.92),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "soluta",
                                                        "ipsum",
                                                    },
                                                },
                                                IntValue: sdk.String("vel"),
                                                ProtoValue: map[string]interface{}{
                                                    "maxime": "vel",
                                                    "distinctio": "cupiditate",
                                                    "hic": "quis",
                                                    "deleniti": "iusto",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "saepe",
                                                        "ad",
                                                        "magni",
                                                        "nostrum",
                                                    },
                                                },
                                                StringValue: sdk.String("minus"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("aliquid"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumGreaterThan.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        2569.41,
                                                        1032.53,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(6864.7),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "velit",
                                                        "quasi",
                                                        "sed",
                                                    },
                                                },
                                                IntValue: sdk.String("officiis"),
                                                ProtoValue: map[string]interface{}{
                                                    "quae": "dolore",
                                                    "in": "libero",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "cumque",
                                                        "quia",
                                                    },
                                                },
                                                StringValue: sdk.String("beatae"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("porro"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumDoesNotExist.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        2565.68,
                                                        1459.48,
                                                        2265.56,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(6327.66),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "minus",
                                                        "vero",
                                                        "impedit",
                                                    },
                                                },
                                                IntValue: sdk.String("omnis"),
                                                ProtoValue: map[string]interface{}{
                                                    "earum": "fuga",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "distinctio",
                                                        "fugiat",
                                                        "nulla",
                                                    },
                                                },
                                                StringValue: sdk.String("totam"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("praesentium"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumIsEmpty.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        1151.48,
                                                        9651.17,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(3864.01),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "labore",
                                                        "quas",
                                                        "sed",
                                                        "veniam",
                                                    },
                                                },
                                                IntValue: sdk.String("sed"),
                                                ProtoValue: map[string]interface{}{
                                                    "reprehenderit": "voluptate",
                                                    "reprehenderit": "et",
                                                    "eveniet": "voluptate",
                                                    "hic": "at",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "in",
                                                    },
                                                },
                                                StringValue: sdk.String("eius"),
                                            },
                                        },
                                    },
                                },
                            },
                            Condition: sdk.String("aut"),
                            Description: sdk.String("consequatur"),
                            Label: sdk.String("iste"),
                            TaskConfigID: sdk.String("accusamus"),
                            TaskNumber: sdk.String("repellat"),
                        },
                        shared.EnterpriseCrmEventbusProtoNextTask{
                            CombinedConditions: []shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("consequuntur"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumExists.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        9143.99,
                                                        717.41,
                                                        8135.82,
                                                        8536.25,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(4986.39),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "provident",
                                                    },
                                                },
                                                IntValue: sdk.String("voluptate"),
                                                ProtoValue: map[string]interface{}{
                                                    "ullam": "illum",
                                                    "mollitia": "ipsa",
                                                    "quos": "quo",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "in",
                                                        "doloribus",
                                                    },
                                                },
                                                StringValue: sdk.String("id"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("eum"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumDoesNotExist.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        5395.02,
                                                        6288.11,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(1585.15),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "ea",
                                                    },
                                                },
                                                IntValue: sdk.String("accusamus"),
                                                ProtoValue: map[string]interface{}{
                                                    "excepturi": "harum",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "a",
                                                        "repudiandae",
                                                        "minus",
                                                    },
                                                },
                                                StringValue: sdk.String("officia"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("laboriosam"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumUnset.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        835.78,
                                                        3042,
                                                        5682.31,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(5410.46),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "magnam",
                                                    },
                                                },
                                                IntValue: sdk.String("doloremque"),
                                                ProtoValue: map[string]interface{}{
                                                    "suscipit": "eius",
                                                    "maiores": "delectus",
                                                    "quos": "id",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "ab",
                                                        "voluptate",
                                                        "consequatur",
                                                        "itaque",
                                                    },
                                                },
                                                StringValue: sdk.String("repellat"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("voluptatem"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumEquals.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        3125.63,
                                                        9553.58,
                                                        2084.14,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(4695.67),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "numquam",
                                                        "mollitia",
                                                        "mollitia",
                                                        "blanditiis",
                                                    },
                                                },
                                                IntValue: sdk.String("suscipit"),
                                                ProtoValue: map[string]interface{}{
                                                    "quis": "enim",
                                                    "corporis": "iste",
                                                    "ea": "autem",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "nesciunt",
                                                        "magni",
                                                    },
                                                },
                                                StringValue: sdk.String("animi"),
                                            },
                                        },
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("voluptas"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumIsEmpty.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        7342.92,
                                                        4153.95,
                                                        4195.85,
                                                        5082.71,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(1661.36),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "expedita",
                                                        "in",
                                                        "eaque",
                                                        "delectus",
                                                    },
                                                },
                                                IntValue: sdk.String("blanditiis"),
                                                ProtoValue: map[string]interface{}{
                                                    "tenetur": "assumenda",
                                                    "exercitationem": "a",
                                                    "tempore": "laboriosam",
                                                    "earum": "occaecati",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "quidem",
                                                    },
                                                },
                                                StringValue: sdk.String("omnis"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("laborum"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumExists.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        4935.83,
                                                        2883.48,
                                                        5110.54,
                                                        2913.61,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(3987.88),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "aspernatur",
                                                        "quod",
                                                        "dolorem",
                                                        "neque",
                                                    },
                                                },
                                                IntValue: sdk.String("ipsa"),
                                                ProtoValue: map[string]interface{}{
                                                    "repellendus": "soluta",
                                                    "aut": "ullam",
                                                    "amet": "iure",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "sint",
                                                        "voluptates",
                                                        "nihil",
                                                        "ad",
                                                    },
                                                },
                                                StringValue: sdk.String("eligendi"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("fuga"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumUnset.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        4346.32,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(9386.72),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "dolorem",
                                                        "omnis",
                                                    },
                                                },
                                                IntValue: sdk.String("sed"),
                                                ProtoValue: map[string]interface{}{
                                                    "et": "illo",
                                                    "est": "quia",
                                                    "veniam": "est",
                                                    "rem": "cum",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "provident",
                                                        "sunt",
                                                        "maiores",
                                                        "excepturi",
                                                    },
                                                },
                                                StringValue: sdk.String("ducimus"),
                                            },
                                        },
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("aspernatur"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumExists.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        8697.18,
                                                        6020.76,
                                                        6734,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(5904.22),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "corrupti",
                                                        "soluta",
                                                        "earum",
                                                        "praesentium",
                                                    },
                                                },
                                                IntValue: sdk.String("explicabo"),
                                                ProtoValue: map[string]interface{}{
                                                    "illo": "architecto",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "ad",
                                                    },
                                                },
                                                StringValue: sdk.String("velit"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("ullam"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumExists.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        6124.25,
                                                        5035.98,
                                                        2326.02,
                                                        5208.24,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(4892.25),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "iusto",
                                                        "culpa",
                                                        "voluptate",
                                                        "cupiditate",
                                                    },
                                                },
                                                IntValue: sdk.String("maxime"),
                                                ProtoValue: map[string]interface{}{
                                                    "nihil": "sed",
                                                    "optio": "nulla",
                                                    "magni": "modi",
                                                    "voluptatum": "dolore",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "dolorum",
                                                        "eos",
                                                        "sunt",
                                                        "quam",
                                                    },
                                                },
                                                StringValue: sdk.String("eos"),
                                            },
                                        },
                                    },
                                },
                            },
                            Condition: sdk.String("omnis"),
                            Description: sdk.String("reiciendis"),
                            Label: sdk.String("qui"),
                            TaskConfigID: sdk.String("similique"),
                            TaskNumber: sdk.String("eligendi"),
                        },
                        shared.EnterpriseCrmEventbusProtoNextTask{
                            CombinedConditions: []shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("necessitatibus"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumIsNotEmpty.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        4682.21,
                                                        1547.23,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(3361.23),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "dicta",
                                                        "dicta",
                                                        "eum",
                                                        "sint",
                                                    },
                                                },
                                                IntValue: sdk.String("id"),
                                                ProtoValue: map[string]interface{}{
                                                    "quasi": "itaque",
                                                    "aliquam": "vitae",
                                                    "temporibus": "voluptatum",
                                                    "deserunt": "aspernatur",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "impedit",
                                                    },
                                                },
                                                StringValue: sdk.String("consequuntur"),
                                            },
                                        },
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("saepe"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumContains.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        9984.45,
                                                        1795,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(8451.91),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "mollitia",
                                                        "quaerat",
                                                        "officia",
                                                        "sunt",
                                                    },
                                                },
                                                IntValue: sdk.String("perspiciatis"),
                                                ProtoValue: map[string]interface{}{
                                                    "a": "iure",
                                                    "nulla": "recusandae",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "aspernatur",
                                                        "aspernatur",
                                                        "et",
                                                    },
                                                },
                                                StringValue: sdk.String("ipsam"),
                                            },
                                        },
                                    },
                                },
                            },
                            Condition: sdk.String("et"),
                            Description: sdk.String("delectus"),
                            Label: sdk.String("saepe"),
                            TaskConfigID: sdk.String("sunt"),
                            TaskNumber: sdk.String("in"),
                        },
                    },
                    TriggerCriteria: &shared.EnterpriseCrmEventbusProtoTriggerCriteria{
                        Condition: sdk.String("architecto"),
                        Parameters: &shared.EnterpriseCrmEventbusProtoEventParameters{
                            Parameters: []shared.EnterpriseCrmEventbusProtoParameterEntry{
                                shared.EnterpriseCrmEventbusProtoParameterEntry{
                                    Key: sdk.String("voluptatem"),
                                    Value: &shared.EnterpriseCrmEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                5376.23,
                                                3151.9,
                                                1984.06,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(9027.27),
                                        IntArray: &shared.EnterpriseCrmEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "reiciendis",
                                                "quis",
                                                "modi",
                                            },
                                        },
                                        IntValue: sdk.String("adipisci"),
                                        ProtoArray: &shared.EnterpriseCrmEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "nemo": "dolore",
                                                    "numquam": "dolor",
                                                    "perspiciatis": "accusamus",
                                                },
                                                map[string]interface{}{
                                                    "quia": "aspernatur",
                                                    "ut": "non",
                                                    "laboriosam": "accusantium",
                                                    "tempora": "aliquam",
                                                },
                                                map[string]interface{}{
                                                    "expedita": "impedit",
                                                },
                                                map[string]interface{}{
                                                    "minima": "magnam",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "quos": "atque",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("quisquam"),
                                        },
                                        StringArray: &shared.EnterpriseCrmEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "asperiores",
                                            },
                                        },
                                        StringValue: sdk.String("corporis"),
                                    },
                                },
                            },
                        },
                        TriggerCriteriaTaskImplementationClassName: sdk.String("vel"),
                    },
                    TriggerID: sdk.String("accusamus"),
                    TriggerNumber: sdk.String("totam"),
                    TriggerType: shared.EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnumCron.ToPointer(),
                },
                shared.EnterpriseCrmFrontendsEventbusProtoTriggerConfig{
                    AlertConfig: []shared.EnterpriseCrmEventbusProtoWorkflowAlertConfig{
                        shared.EnterpriseCrmEventbusProtoWorkflowAlertConfig{
                            AggregationPeriod: sdk.String("culpa"),
                            AlertDisabled: sdk.Bool(false),
                            AlertName: sdk.String("nihil"),
                            ClientID: sdk.String("laudantium"),
                            DurationThresholdMs: sdk.String("dolorem"),
                            ErrorEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "officiis",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumExclusive.ToPointer(),
                            },
                            MetricType: shared.EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnumEventPercentileDuration.ToPointer(),
                            NumAggregationPeriods: sdk.Int(856035),
                            OnlyFinalAttempt: sdk.Bool(false),
                            PlaybookURL: sdk.String("voluptas"),
                            ThresholdType: shared.EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnumUnspecifiedThresholdType.ToPointer(),
                            ThresholdValue: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue{
                                Absolute: sdk.String("odio"),
                                Percentage: sdk.Int(753680),
                            },
                            WarningEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "harum",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumDefaultInclusive.ToPointer(),
                            },
                        },
                        shared.EnterpriseCrmEventbusProtoWorkflowAlertConfig{
                            AggregationPeriod: sdk.String("pariatur"),
                            AlertDisabled: sdk.Bool(false),
                            AlertName: sdk.String("ad"),
                            ClientID: sdk.String("architecto"),
                            DurationThresholdMs: sdk.String("culpa"),
                            ErrorEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "ut",
                                    "quidem",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumExclusive.ToPointer(),
                            },
                            MetricType: shared.EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnumMetricTypeUnspecified.ToPointer(),
                            NumAggregationPeriods: sdk.Int(101318),
                            OnlyFinalAttempt: sdk.Bool(false),
                            PlaybookURL: sdk.String("tempore"),
                            ThresholdType: shared.EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnumExpectedMin.ToPointer(),
                            ThresholdValue: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue{
                                Absolute: sdk.String("nulla"),
                                Percentage: sdk.Int(546199),
                            },
                            WarningEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "alias",
                                    "iure",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumExclusive.ToPointer(),
                            },
                        },
                        shared.EnterpriseCrmEventbusProtoWorkflowAlertConfig{
                            AggregationPeriod: sdk.String("incidunt"),
                            AlertDisabled: sdk.Bool(false),
                            AlertName: sdk.String("ea"),
                            ClientID: sdk.String("alias"),
                            DurationThresholdMs: sdk.String("laudantium"),
                            ErrorEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "libero",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumExclusive.ToPointer(),
                            },
                            MetricType: shared.EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnumEventAverageDuration.ToPointer(),
                            NumAggregationPeriods: sdk.Int(867286),
                            OnlyFinalAttempt: sdk.Bool(false),
                            PlaybookURL: sdk.String("quod"),
                            ThresholdType: shared.EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnumUnspecifiedThresholdType.ToPointer(),
                            ThresholdValue: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue{
                                Absolute: sdk.String("vitae"),
                                Percentage: sdk.Int(963749),
                            },
                            WarningEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "nemo",
                                    "at",
                                    "magnam",
                                    "officiis",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumDefaultInclusive.ToPointer(),
                            },
                        },
                        shared.EnterpriseCrmEventbusProtoWorkflowAlertConfig{
                            AggregationPeriod: sdk.String("mollitia"),
                            AlertDisabled: sdk.Bool(false),
                            AlertName: sdk.String("saepe"),
                            ClientID: sdk.String("labore"),
                            DurationThresholdMs: sdk.String("doloribus"),
                            ErrorEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "minima",
                                    "impedit",
                                    "facilis",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumDefaultInclusive.ToPointer(),
                            },
                            MetricType: shared.EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnumTaskErrorRate.ToPointer(),
                            NumAggregationPeriods: sdk.Int(855292),
                            OnlyFinalAttempt: sdk.Bool(false),
                            PlaybookURL: sdk.String("beatae"),
                            ThresholdType: shared.EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnumExpectedMin.ToPointer(),
                            ThresholdValue: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue{
                                Absolute: sdk.String("nisi"),
                                Percentage: sdk.Int(232824),
                            },
                            WarningEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "delectus",
                                    "sunt",
                                    "repudiandae",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumExclusive.ToPointer(),
                            },
                        },
                    },
                    CloudSchedulerConfig: &shared.EnterpriseCrmEventbusProtoCloudSchedulerConfig{
                        CronTab: sdk.String("distinctio"),
                        ErrorMessage: sdk.String("ducimus"),
                        Location: sdk.String("atque"),
                        ServiceAccountEmail: sdk.String("consectetur"),
                    },
                    Description: sdk.String("nemo"),
                    EnabledClients: []string{
                        "accusamus",
                        "minus",
                        "impedit",
                    },
                    ErrorCatcherID: sdk.String("minima"),
                    Label: sdk.String("cumque"),
                    NextTasksExecutionPolicy: shared.EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnumRunFirstMatch.ToPointer(),
                    PauseWorkflowExecutions: sdk.Bool(false),
                    Position: &shared.EnterpriseCrmEventbusProtoCoordinate{
                        X: sdk.Int(506839),
                        Y: sdk.Int(427859),
                    },
                    Properties: map[string]string{
                        "delectus": "quas",
                    },
                    StartTasks: []shared.EnterpriseCrmEventbusProtoNextTask{
                        shared.EnterpriseCrmEventbusProtoNextTask{
                            CombinedConditions: []shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("praesentium"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumUnset.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        6575.2,
                                                        4727.59,
                                                        1978.72,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(5597.15),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "aperiam",
                                                    },
                                                },
                                                IntValue: sdk.String("itaque"),
                                                ProtoValue: map[string]interface{}{
                                                    "repellat": "necessitatibus",
                                                    "tempora": "quaerat",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "voluptate",
                                                        "magni",
                                                    },
                                                },
                                                StringValue: sdk.String("excepturi"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("esse"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumDoesNotExist.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        2481.31,
                                                        7015.06,
                                                        726.77,
                                                        8463.32,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(8597.4),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "expedita",
                                                    },
                                                },
                                                IntValue: sdk.String("libero"),
                                                ProtoValue: map[string]interface{}{
                                                    "repudiandae": "dolores",
                                                    "ut": "nihil",
                                                    "harum": "voluptate",
                                                    "aliquid": "blanditiis",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "repudiandae",
                                                        "reiciendis",
                                                    },
                                                },
                                                StringValue: sdk.String("asperiores"),
                                            },
                                        },
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("voluptatem"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumUnset.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        3885.89,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(8405.58),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "veritatis",
                                                        "nobis",
                                                    },
                                                },
                                                IntValue: sdk.String("voluptatibus"),
                                                ProtoValue: map[string]interface{}{
                                                    "facilis": "facere",
                                                    "aut": "itaque",
                                                    "rerum": "molestiae",
                                                    "quaerat": "distinctio",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "quaerat",
                                                        "odit",
                                                        "ab",
                                                    },
                                                },
                                                StringValue: sdk.String("unde"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("nemo"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumEquals.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        2828.25,
                                                        2746.22,
                                                        6960.58,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(8614.06),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "quisquam",
                                                    },
                                                },
                                                IntValue: sdk.String("labore"),
                                                ProtoValue: map[string]interface{}{
                                                    "veritatis": "veniam",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "assumenda",
                                                        "adipisci",
                                                        "velit",
                                                    },
                                                },
                                                StringValue: sdk.String("accusamus"),
                                            },
                                        },
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("provident"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumLessThan.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        8010.42,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(72.87),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "dicta",
                                                    },
                                                },
                                                IntValue: sdk.String("illo"),
                                                ProtoValue: map[string]interface{}{
                                                    "occaecati": "quos",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "sequi",
                                                        "culpa",
                                                    },
                                                },
                                                StringValue: sdk.String("fuga"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("modi"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumUnset.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        3997.32,
                                                        7609.42,
                                                        2365.88,
                                                        677.46,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(8028.61),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "explicabo",
                                                        "reiciendis",
                                                        "dicta",
                                                        "hic",
                                                    },
                                                },
                                                IntValue: sdk.String("porro"),
                                                ProtoValue: map[string]interface{}{
                                                    "ullam": "sunt",
                                                    "quisquam": "sint",
                                                    "id": "ut",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "reiciendis",
                                                    },
                                                },
                                                StringValue: sdk.String("reiciendis"),
                                            },
                                        },
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("itaque"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumExists.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        6950.88,
                                                        8383.74,
                                                        4379.79,
                                                        6205.2,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(3727.37),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "earum",
                                                        "commodi",
                                                        "veniam",
                                                        "debitis",
                                                    },
                                                },
                                                IntValue: sdk.String("doloremque"),
                                                ProtoValue: map[string]interface{}{
                                                    "aliquid": "porro",
                                                    "quisquam": "molestiae",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "quidem",
                                                        "delectus",
                                                        "eum",
                                                    },
                                                },
                                                StringValue: sdk.String("beatae"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("suscipit"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumIsNotEmpty.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        3688.49,
                                                        7817.77,
                                                        4740.03,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(814.55),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "modi",
                                                        "dicta",
                                                    },
                                                },
                                                IntValue: sdk.String("provident"),
                                                ProtoValue: map[string]interface{}{
                                                    "dolore": "soluta",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "sit",
                                                        "asperiores",
                                                        "aspernatur",
                                                    },
                                                },
                                                StringValue: sdk.String("officiis"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("sit"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumExists.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        683,
                                                        6173.25,
                                                        8228.62,
                                                        1699.28,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(9516.33),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "explicabo",
                                                        "delectus",
                                                        "natus",
                                                        "earum",
                                                    },
                                                },
                                                IntValue: sdk.String("fugit"),
                                                ProtoValue: map[string]interface{}{
                                                    "vitae": "consequatur",
                                                    "nemo": "provident",
                                                    "numquam": "numquam",
                                                    "tempore": "molestias",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "enim",
                                                    },
                                                },
                                                StringValue: sdk.String("illum"),
                                            },
                                        },
                                    },
                                },
                            },
                            Condition: sdk.String("sed"),
                            Description: sdk.String("adipisci"),
                            Label: sdk.String("reprehenderit"),
                            TaskConfigID: sdk.String("id"),
                            TaskNumber: sdk.String("ducimus"),
                        },
                        shared.EnterpriseCrmEventbusProtoNextTask{
                            CombinedConditions: []shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("occaecati"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumUnset.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        3011.55,
                                                        5713.81,
                                                        8518.94,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(3849.39),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "itaque",
                                                        "assumenda",
                                                        "quaerat",
                                                    },
                                                },
                                                IntValue: sdk.String("id"),
                                                ProtoValue: map[string]interface{}{
                                                    "optio": "soluta",
                                                    "dignissimos": "nemo",
                                                    "neque": "esse",
                                                    "placeat": "at",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "eos",
                                                        "odit",
                                                        "quia",
                                                    },
                                                },
                                                StringValue: sdk.String("maxime"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("excepturi"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumIsNotEmpty.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        3461.64,
                                                        4998.74,
                                                        2935.12,
                                                        6152.06,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(817.75),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "id",
                                                        "harum",
                                                        "sapiente",
                                                    },
                                                },
                                                IntValue: sdk.String("laborum"),
                                                ProtoValue: map[string]interface{}{
                                                    "vero": "odio",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "quasi",
                                                        "tenetur",
                                                    },
                                                },
                                                StringValue: sdk.String("accusantium"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("quo"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumExists.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        8676.88,
                                                        2893.42,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(3375.7),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "vero",
                                                        "reiciendis",
                                                    },
                                                },
                                                IntValue: sdk.String("dicta"),
                                                ProtoValue: map[string]interface{}{
                                                    "adipisci": "inventore",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "iure",
                                                        "praesentium",
                                                        "perspiciatis",
                                                        "omnis",
                                                    },
                                                },
                                                StringValue: sdk.String("hic"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("accusantium"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumIsEmpty.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        381.73,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(557.9),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "saepe",
                                                    },
                                                },
                                                IntValue: sdk.String("quia"),
                                                ProtoValue: map[string]interface{}{
                                                    "minus": "illum",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "exercitationem",
                                                        "quod",
                                                    },
                                                },
                                                StringValue: sdk.String("quod"),
                                            },
                                        },
                                    },
                                },
                            },
                            Condition: sdk.String("alias"),
                            Description: sdk.String("nemo"),
                            Label: sdk.String("molestias"),
                            TaskConfigID: sdk.String("modi"),
                            TaskNumber: sdk.String("similique"),
                        },
                        shared.EnterpriseCrmEventbusProtoNextTask{
                            CombinedConditions: []shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("ut"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumIsEmpty.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        3758.77,
                                                        8175.09,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(6079.37),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "vitae",
                                                        "reiciendis",
                                                    },
                                                },
                                                IntValue: sdk.String("cumque"),
                                                ProtoValue: map[string]interface{}{
                                                    "explicabo": "sit",
                                                    "eligendi": "commodi",
                                                    "enim": "harum",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "consectetur",
                                                    },
                                                },
                                                StringValue: sdk.String("in"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("rerum"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumDoesNotExist.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        9011.86,
                                                        257.37,
                                                        7625.4,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(7743.53),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "quas",
                                                        "ullam",
                                                        "veritatis",
                                                    },
                                                },
                                                IntValue: sdk.String("quas"),
                                                ProtoValue: map[string]interface{}{
                                                    "officiis": "labore",
                                                    "nulla": "accusamus",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "ut",
                                                    },
                                                },
                                                StringValue: sdk.String("laborum"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("hic"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumEquals.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        8037.63,
                                                        3236.14,
                                                        8450.13,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(8135.45),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "quidem",
                                                        "labore",
                                                        "commodi",
                                                        "mollitia",
                                                    },
                                                },
                                                IntValue: sdk.String("similique"),
                                                ProtoValue: map[string]interface{}{
                                                    "quo": "voluptatibus",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "ea",
                                                        "facere",
                                                        "corrupti",
                                                        "magni",
                                                    },
                                                },
                                                StringValue: sdk.String("blanditiis"),
                                            },
                                        },
                                    },
                                },
                            },
                            Condition: sdk.String("assumenda"),
                            Description: sdk.String("culpa"),
                            Label: sdk.String("ipsa"),
                            TaskConfigID: sdk.String("inventore"),
                            TaskNumber: sdk.String("nesciunt"),
                        },
                        shared.EnterpriseCrmEventbusProtoNextTask{
                            CombinedConditions: []shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("inventore"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumEquals.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        6033.48,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(4027.07),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "aliquid",
                                                        "eum",
                                                    },
                                                },
                                                IntValue: sdk.String("quaerat"),
                                                ProtoValue: map[string]interface{}{
                                                    "cumque": "ab",
                                                    "quibusdam": "blanditiis",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "delectus",
                                                    },
                                                },
                                                StringValue: sdk.String("explicabo"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("iste"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumUnset.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        1360.38,
                                                        9561.5,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(3637.03),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "iste",
                                                        "quidem",
                                                    },
                                                },
                                                IntValue: sdk.String("iusto"),
                                                ProtoValue: map[string]interface{}{
                                                    "reiciendis": "a",
                                                    "consequatur": "voluptates",
                                                    "dolorum": "fugit",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "veritatis",
                                                    },
                                                },
                                                StringValue: sdk.String("vel"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("placeat"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumDoesNotExist.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        577.19,
                                                        4929.74,
                                                        825.03,
                                                        6907.61,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(7643.55),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "ex",
                                                    },
                                                },
                                                IntValue: sdk.String("dolor"),
                                                ProtoValue: map[string]interface{}{
                                                    "sed": "quam",
                                                    "unde": "harum",
                                                    "sequi": "libero",
                                                    "ipsa": "blanditiis",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "vero",
                                                        "dolorum",
                                                    },
                                                },
                                                StringValue: sdk.String("omnis"),
                                            },
                                        },
                                    },
                                },
                            },
                            Condition: sdk.String("occaecati"),
                            Description: sdk.String("consequuntur"),
                            Label: sdk.String("veniam"),
                            TaskConfigID: sdk.String("quam"),
                            TaskNumber: sdk.String("repellendus"),
                        },
                    },
                    TriggerCriteria: &shared.EnterpriseCrmEventbusProtoTriggerCriteria{
                        Condition: sdk.String("eaque"),
                        Parameters: &shared.EnterpriseCrmEventbusProtoEventParameters{
                            Parameters: []shared.EnterpriseCrmEventbusProtoParameterEntry{
                                shared.EnterpriseCrmEventbusProtoParameterEntry{
                                    Key: sdk.String("asperiores"),
                                    Value: &shared.EnterpriseCrmEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                5599.47,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(2756.61),
                                        IntArray: &shared.EnterpriseCrmEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "laborum",
                                                "in",
                                            },
                                        },
                                        IntValue: sdk.String("numquam"),
                                        ProtoArray: &shared.EnterpriseCrmEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "blanditiis": "ut",
                                                    "eius": "cupiditate",
                                                    "nisi": "placeat",
                                                    "tempore": "facere",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "debitis": "impedit",
                                            "reiciendis": "ex",
                                            "tempore": "provident",
                                            "provident": "soluta",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("maxime"),
                                        },
                                        StringArray: &shared.EnterpriseCrmEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "consectetur",
                                                "corporis",
                                            },
                                        },
                                        StringValue: sdk.String("nisi"),
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoParameterEntry{
                                    Key: sdk.String("aspernatur"),
                                    Value: &shared.EnterpriseCrmEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                9895.52,
                                                8385.09,
                                                9666.82,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(3165.84),
                                        IntArray: &shared.EnterpriseCrmEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "porro",
                                                "dolores",
                                            },
                                        },
                                        IntValue: sdk.String("iste"),
                                        ProtoArray: &shared.EnterpriseCrmEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "eaque": "ea",
                                                    "consequatur": "nobis",
                                                    "accusantium": "ea",
                                                    "laborum": "et",
                                                },
                                                map[string]interface{}{
                                                    "quos": "molestiae",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "autem": "numquam",
                                            "voluptates": "debitis",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("earum"),
                                        },
                                        StringArray: &shared.EnterpriseCrmEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "assumenda",
                                                "doloremque",
                                            },
                                        },
                                        StringValue: sdk.String("porro"),
                                    },
                                },
                            },
                        },
                        TriggerCriteriaTaskImplementationClassName: sdk.String("suscipit"),
                    },
                    TriggerID: sdk.String("temporibus"),
                    TriggerNumber: sdk.String("vel"),
                    TriggerType: shared.EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnumCloudScheduler.ToPointer(),
                },
                shared.EnterpriseCrmFrontendsEventbusProtoTriggerConfig{
                    AlertConfig: []shared.EnterpriseCrmEventbusProtoWorkflowAlertConfig{
                        shared.EnterpriseCrmEventbusProtoWorkflowAlertConfig{
                            AggregationPeriod: sdk.String("excepturi"),
                            AlertDisabled: sdk.Bool(false),
                            AlertName: sdk.String("quod"),
                            ClientID: sdk.String("in"),
                            DurationThresholdMs: sdk.String("nesciunt"),
                            ErrorEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "temporibus",
                                    "eum",
                                    "non",
                                    "ut",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumDefaultInclusive.ToPointer(),
                            },
                            MetricType: shared.EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnumTaskRate.ToPointer(),
                            NumAggregationPeriods: sdk.Int(76818),
                            OnlyFinalAttempt: sdk.Bool(false),
                            PlaybookURL: sdk.String("corporis"),
                            ThresholdType: shared.EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnumUnspecifiedThresholdType.ToPointer(),
                            ThresholdValue: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue{
                                Absolute: sdk.String("occaecati"),
                                Percentage: sdk.Int(680860),
                            },
                            WarningEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "recusandae",
                                    "deleniti",
                                    "dignissimos",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumDefaultInclusive.ToPointer(),
                            },
                        },
                        shared.EnterpriseCrmEventbusProtoWorkflowAlertConfig{
                            AggregationPeriod: sdk.String("quibusdam"),
                            AlertDisabled: sdk.Bool(false),
                            AlertName: sdk.String("adipisci"),
                            ClientID: sdk.String("minus"),
                            DurationThresholdMs: sdk.String("veniam"),
                            ErrorEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "architecto",
                                    "maiores",
                                    "perspiciatis",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumExclusive.ToPointer(),
                            },
                            MetricType: shared.EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnumEventErrorRate.ToPointer(),
                            NumAggregationPeriods: sdk.Int(274844),
                            OnlyFinalAttempt: sdk.Bool(false),
                            PlaybookURL: sdk.String("fugit"),
                            ThresholdType: shared.EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnumExpectedMax.ToPointer(),
                            ThresholdValue: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue{
                                Absolute: sdk.String("odio"),
                                Percentage: sdk.Int(692662),
                            },
                            WarningEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "aliquid",
                                    "culpa",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumDefaultInclusive.ToPointer(),
                            },
                        },
                        shared.EnterpriseCrmEventbusProtoWorkflowAlertConfig{
                            AggregationPeriod: sdk.String("reiciendis"),
                            AlertDisabled: sdk.Bool(false),
                            AlertName: sdk.String("ipsum"),
                            ClientID: sdk.String("doloremque"),
                            DurationThresholdMs: sdk.String("quod"),
                            ErrorEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "non",
                                    "facere",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumExclusive.ToPointer(),
                            },
                            MetricType: shared.EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnumTaskErrorRate.ToPointer(),
                            NumAggregationPeriods: sdk.Int(693988),
                            OnlyFinalAttempt: sdk.Bool(false),
                            PlaybookURL: sdk.String("ea"),
                            ThresholdType: shared.EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnumExpectedMin.ToPointer(),
                            ThresholdValue: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue{
                                Absolute: sdk.String("vitae"),
                                Percentage: sdk.Int(570437),
                            },
                            WarningEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "iste",
                                    "eaque",
                                    "reiciendis",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumDefaultInclusive.ToPointer(),
                            },
                        },
                        shared.EnterpriseCrmEventbusProtoWorkflowAlertConfig{
                            AggregationPeriod: sdk.String("consequuntur"),
                            AlertDisabled: sdk.Bool(false),
                            AlertName: sdk.String("est"),
                            ClientID: sdk.String("tempora"),
                            DurationThresholdMs: sdk.String("nobis"),
                            ErrorEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "modi",
                                    "adipisci",
                                    "atque",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumExclusive.ToPointer(),
                            },
                            MetricType: shared.EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnumTaskRate.ToPointer(),
                            NumAggregationPeriods: sdk.Int(346534),
                            OnlyFinalAttempt: sdk.Bool(false),
                            PlaybookURL: sdk.String("tempore"),
                            ThresholdType: shared.EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnumUnspecifiedThresholdType.ToPointer(),
                            ThresholdValue: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue{
                                Absolute: sdk.String("laboriosam"),
                                Percentage: sdk.Int(47620),
                            },
                            WarningEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "perspiciatis",
                                    "dicta",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumExclusive.ToPointer(),
                            },
                        },
                    },
                    CloudSchedulerConfig: &shared.EnterpriseCrmEventbusProtoCloudSchedulerConfig{
                        CronTab: sdk.String("reprehenderit"),
                        ErrorMessage: sdk.String("tempora"),
                        Location: sdk.String("ad"),
                        ServiceAccountEmail: sdk.String("voluptates"),
                    },
                    Description: sdk.String("sequi"),
                    EnabledClients: []string{
                        "consequuntur",
                        "quae",
                        "veniam",
                        "sint",
                    },
                    ErrorCatcherID: sdk.String("minus"),
                    Label: sdk.String("excepturi"),
                    NextTasksExecutionPolicy: shared.EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnumRunFirstMatch.ToPointer(),
                    PauseWorkflowExecutions: sdk.Bool(false),
                    Position: &shared.EnterpriseCrmEventbusProtoCoordinate{
                        X: sdk.Int(202372),
                        Y: sdk.Int(978631),
                    },
                    Properties: map[string]string{
                        "autem": "esse",
                        "officiis": "aperiam",
                    },
                    StartTasks: []shared.EnterpriseCrmEventbusProtoNextTask{
                        shared.EnterpriseCrmEventbusProtoNextTask{
                            CombinedConditions: []shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("consequuntur"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumGreaterThan.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        3395.03,
                                                        7473.58,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(1074.24),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "ex",
                                                        "consequuntur",
                                                        "delectus",
                                                        "nobis",
                                                    },
                                                },
                                                IntValue: sdk.String("possimus"),
                                                ProtoValue: map[string]interface{}{
                                                    "optio": "debitis",
                                                    "architecto": "reiciendis",
                                                    "consequatur": "sunt",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "inventore",
                                                    },
                                                },
                                                StringValue: sdk.String("laboriosam"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("quod"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumIsNotEmpty.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        1333.6,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(1945.74),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "accusamus",
                                                        "deleniti",
                                                        "earum",
                                                    },
                                                },
                                                IntValue: sdk.String("consequuntur"),
                                                ProtoValue: map[string]interface{}{
                                                    "minus": "quibusdam",
                                                    "accusantium": "nulla",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "omnis",
                                                    },
                                                },
                                                StringValue: sdk.String("quibusdam"),
                                            },
                                        },
                                    },
                                },
                            },
                            Condition: sdk.String("excepturi"),
                            Description: sdk.String("nostrum"),
                            Label: sdk.String("sint"),
                            TaskConfigID: sdk.String("doloribus"),
                            TaskNumber: sdk.String("magnam"),
                        },
                        shared.EnterpriseCrmEventbusProtoNextTask{
                            CombinedConditions: []shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("necessitatibus"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumContains.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        1776.32,
                                                        3933.85,
                                                        4129.5,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(7693.58),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "temporibus",
                                                        "error",
                                                        "quaerat",
                                                    },
                                                },
                                                IntValue: sdk.String("delectus"),
                                                ProtoValue: map[string]interface{}{
                                                    "deserunt": "laborum",
                                                    "odit": "rerum",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "magnam",
                                                    },
                                                },
                                                StringValue: sdk.String("et"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("et"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumEquals.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        5979.51,
                                                        3447.05,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(8382.87),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "debitis",
                                                    },
                                                },
                                                IntValue: sdk.String("nisi"),
                                                ProtoValue: map[string]interface{}{
                                                    "excepturi": "quas",
                                                    "repellat": "placeat",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "quaerat",
                                                        "veniam",
                                                        "perspiciatis",
                                                        "commodi",
                                                    },
                                                },
                                                StringValue: sdk.String("dolores"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("dicta"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumGreaterThan.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        1730.72,
                                                        5658.09,
                                                        4624.26,
                                                        4731.93,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(3968.2),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "eum",
                                                        "consectetur",
                                                    },
                                                },
                                                IntValue: sdk.String("velit"),
                                                ProtoValue: map[string]interface{}{
                                                    "aspernatur": "ad",
                                                    "incidunt": "alias",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "atque",
                                                    },
                                                },
                                                StringValue: sdk.String("tempore"),
                                            },
                                        },
                                    },
                                },
                            },
                            Condition: sdk.String("asperiores"),
                            Description: sdk.String("distinctio"),
                            Label: sdk.String("minima"),
                            TaskConfigID: sdk.String("cupiditate"),
                            TaskNumber: sdk.String("molestiae"),
                        },
                        shared.EnterpriseCrmEventbusProtoNextTask{
                            CombinedConditions: []shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("excepturi"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumGreaterThan.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        5952.24,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(181.73),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "ullam",
                                                        "molestiae",
                                                    },
                                                },
                                                IntValue: sdk.String("adipisci"),
                                                ProtoValue: map[string]interface{}{
                                                    "perspiciatis": "optio",
                                                    "itaque": "at",
                                                    "nam": "id",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "in",
                                                        "a",
                                                        "quibusdam",
                                                        "culpa",
                                                    },
                                                },
                                                StringValue: sdk.String("dolor"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("occaecati"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumLessThan.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        2883.31,
                                                        8658.06,
                                                        4269.42,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(3880.99),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "minus",
                                                        "magni",
                                                        "mollitia",
                                                    },
                                                },
                                                IntValue: sdk.String("officiis"),
                                                ProtoValue: map[string]interface{}{
                                                    "quas": "aut",
                                                    "autem": "dolorem",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "rerum",
                                                    },
                                                },
                                                StringValue: sdk.String("iste"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("occaecati"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumContains.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        7307.21,
                                                        4343.02,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(9762.31),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "qui",
                                                        "explicabo",
                                                        "accusantium",
                                                    },
                                                },
                                                IntValue: sdk.String("eum"),
                                                ProtoValue: map[string]interface{}{
                                                    "commodi": "molestias",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "explicabo",
                                                        "totam",
                                                        "ipsam",
                                                    },
                                                },
                                                StringValue: sdk.String("nemo"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("sequi"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumDoesNotExist.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        672.29,
                                                        32.41,
                                                        355.38,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(401.5),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "tempore",
                                                        "necessitatibus",
                                                    },
                                                },
                                                IntValue: sdk.String("reiciendis"),
                                                ProtoValue: map[string]interface{}{
                                                    "provident": "dolores",
                                                    "illo": "recusandae",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "magni",
                                                        "sit",
                                                        "voluptas",
                                                        "nesciunt",
                                                    },
                                                },
                                                StringValue: sdk.String("libero"),
                                            },
                                        },
                                    },
                                },
                            },
                            Condition: sdk.String("molestiae"),
                            Description: sdk.String("eius"),
                            Label: sdk.String("perspiciatis"),
                            TaskConfigID: sdk.String("amet"),
                            TaskNumber: sdk.String("ex"),
                        },
                        shared.EnterpriseCrmEventbusProtoNextTask{
                            CombinedConditions: []shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("quisquam"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumGreaterThan.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        9072.94,
                                                        312.92,
                                                        9994.27,
                                                        1651.08,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(7301.94),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "veritatis",
                                                        "provident",
                                                        "veniam",
                                                        "quos",
                                                    },
                                                },
                                                IntValue: sdk.String("totam"),
                                                ProtoValue: map[string]interface{}{
                                                    "eius": "doloremque",
                                                    "vero": "aut",
                                                    "sequi": "reiciendis",
                                                    "neque": "assumenda",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "nobis",
                                                        "est",
                                                        "quia",
                                                        "natus",
                                                    },
                                                },
                                                StringValue: sdk.String("molestiae"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("facilis"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumIsNotEmpty.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        9336,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(5863.66),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "harum",
                                                    },
                                                },
                                                IntValue: sdk.String("nobis"),
                                                ProtoValue: map[string]interface{}{
                                                    "consequatur": "temporibus",
                                                    "doloribus": "quos",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "blanditiis",
                                                        "voluptatibus",
                                                    },
                                                },
                                                StringValue: sdk.String("nulla"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("nemo"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumEquals.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        192.4,
                                                        3162.92,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(7705.39),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "dolor",
                                                        "nesciunt",
                                                        "vitae",
                                                    },
                                                },
                                                IntValue: sdk.String("pariatur"),
                                                ProtoValue: map[string]interface{}{
                                                    "provident": "quia",
                                                    "reiciendis": "modi",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "et",
                                                        "qui",
                                                        "iusto",
                                                        "a",
                                                    },
                                                },
                                                StringValue: sdk.String("quidem"),
                                            },
                                        },
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("saepe"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumUnset.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        9438.65,
                                                        1087.18,
                                                        9623.97,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(5351.51),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "inventore",
                                                    },
                                                },
                                                IntValue: sdk.String("reprehenderit"),
                                                ProtoValue: map[string]interface{}{
                                                    "dignissimos": "voluptatum",
                                                    "nulla": "consequatur",
                                                    "similique": "eligendi",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "officia",
                                                        "odio",
                                                        "voluptate",
                                                        "mollitia",
                                                    },
                                                },
                                                StringValue: sdk.String("repudiandae"),
                                            },
                                        },
                                    },
                                },
                            },
                            Condition: sdk.String("tempore"),
                            Description: sdk.String("voluptate"),
                            Label: sdk.String("cum"),
                            TaskConfigID: sdk.String("esse"),
                            TaskNumber: sdk.String("alias"),
                        },
                    },
                    TriggerCriteria: &shared.EnterpriseCrmEventbusProtoTriggerCriteria{
                        Condition: sdk.String("consequuntur"),
                        Parameters: &shared.EnterpriseCrmEventbusProtoEventParameters{
                            Parameters: []shared.EnterpriseCrmEventbusProtoParameterEntry{
                                shared.EnterpriseCrmEventbusProtoParameterEntry{
                                    Key: sdk.String("est"),
                                    Value: &shared.EnterpriseCrmEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                611.97,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(3096.37),
                                        IntArray: &shared.EnterpriseCrmEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "rerum",
                                                "laboriosam",
                                            },
                                        },
                                        IntValue: sdk.String("aliquam"),
                                        ProtoArray: &shared.EnterpriseCrmEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "excepturi": "voluptatibus",
                                                    "facilis": "doloremque",
                                                    "officiis": "nisi",
                                                },
                                                map[string]interface{}{
                                                    "necessitatibus": "alias",
                                                    "provident": "ut",
                                                },
                                                map[string]interface{}{
                                                    "facere": "tenetur",
                                                    "saepe": "assumenda",
                                                    "exercitationem": "exercitationem",
                                                    "dolore": "sit",
                                                },
                                                map[string]interface{}{
                                                    "a": "exercitationem",
                                                    "neque": "mollitia",
                                                    "velit": "ut",
                                                    "est": "quasi",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "blanditiis": "sapiente",
                                            "recusandae": "perspiciatis",
                                            "natus": "reprehenderit",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("dolorem"),
                                        },
                                        StringArray: &shared.EnterpriseCrmEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "fuga",
                                            },
                                        },
                                        StringValue: sdk.String("nulla"),
                                    },
                                },
                            },
                        },
                        TriggerCriteriaTaskImplementationClassName: sdk.String("cumque"),
                    },
                    TriggerID: sdk.String("aperiam"),
                    TriggerNumber: sdk.String("ad"),
                    TriggerType: shared.EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnumSfdcPlatformEventsChannel.ToPointer(),
                },
                shared.EnterpriseCrmFrontendsEventbusProtoTriggerConfig{
                    AlertConfig: []shared.EnterpriseCrmEventbusProtoWorkflowAlertConfig{
                        shared.EnterpriseCrmEventbusProtoWorkflowAlertConfig{
                            AggregationPeriod: sdk.String("quis"),
                            AlertDisabled: sdk.Bool(false),
                            AlertName: sdk.String("fuga"),
                            ClientID: sdk.String("eveniet"),
                            DurationThresholdMs: sdk.String("consequuntur"),
                            ErrorEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "delectus",
                                    "rerum",
                                    "voluptate",
                                    "perferendis",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumExclusive.ToPointer(),
                            },
                            MetricType: shared.EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnumEventAverageDuration.ToPointer(),
                            NumAggregationPeriods: sdk.Int(189574),
                            OnlyFinalAttempt: sdk.Bool(false),
                            PlaybookURL: sdk.String("molestias"),
                            ThresholdType: shared.EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnumExpectedMin.ToPointer(),
                            ThresholdValue: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue{
                                Absolute: sdk.String("non"),
                                Percentage: sdk.Int(165853),
                            },
                            WarningEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "consequatur",
                                    "illum",
                                    "adipisci",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumDefaultInclusive.ToPointer(),
                            },
                        },
                        shared.EnterpriseCrmEventbusProtoWorkflowAlertConfig{
                            AggregationPeriod: sdk.String("ex"),
                            AlertDisabled: sdk.Bool(false),
                            AlertName: sdk.String("quis"),
                            ClientID: sdk.String("eum"),
                            DurationThresholdMs: sdk.String("et"),
                            ErrorEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "quo",
                                    "culpa",
                                    "architecto",
                                    "iure",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumExclusive.ToPointer(),
                            },
                            MetricType: shared.EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnumTaskPercentileDuration.ToPointer(),
                            NumAggregationPeriods: sdk.Int(510856),
                            OnlyFinalAttempt: sdk.Bool(false),
                            PlaybookURL: sdk.String("iste"),
                            ThresholdType: shared.EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnumUnspecifiedThresholdType.ToPointer(),
                            ThresholdValue: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue{
                                Absolute: sdk.String("ad"),
                                Percentage: sdk.Int(70026),
                            },
                            WarningEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "facere",
                                    "ducimus",
                                    "nisi",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumExclusive.ToPointer(),
                            },
                        },
                        shared.EnterpriseCrmEventbusProtoWorkflowAlertConfig{
                            AggregationPeriod: sdk.String("officiis"),
                            AlertDisabled: sdk.Bool(false),
                            AlertName: sdk.String("necessitatibus"),
                            ClientID: sdk.String("nam"),
                            DurationThresholdMs: sdk.String("nemo"),
                            ErrorEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "molestias",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumExclusive.ToPointer(),
                            },
                            MetricType: shared.EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnumEventWarningRate.ToPointer(),
                            NumAggregationPeriods: sdk.Int(822631),
                            OnlyFinalAttempt: sdk.Bool(false),
                            PlaybookURL: sdk.String("similique"),
                            ThresholdType: shared.EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnumUnspecifiedThresholdType.ToPointer(),
                            ThresholdValue: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue{
                                Absolute: sdk.String("asperiores"),
                                Percentage: sdk.Int(670249),
                            },
                            WarningEnumList: &shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList{
                                EnumStrings: []string{
                                    "dolor",
                                    "nemo",
                                    "quis",
                                    "quasi",
                                },
                                FilterType: shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumDefaultInclusive.ToPointer(),
                            },
                        },
                    },
                    CloudSchedulerConfig: &shared.EnterpriseCrmEventbusProtoCloudSchedulerConfig{
                        CronTab: sdk.String("delectus"),
                        ErrorMessage: sdk.String("doloremque"),
                        Location: sdk.String("laboriosam"),
                        ServiceAccountEmail: sdk.String("nulla"),
                    },
                    Description: sdk.String("dolore"),
                    EnabledClients: []string{
                        "enim",
                        "nam",
                        "dignissimos",
                        "consequuntur",
                    },
                    ErrorCatcherID: sdk.String("sapiente"),
                    Label: sdk.String("alias"),
                    NextTasksExecutionPolicy: shared.EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnumRunFirstMatch.ToPointer(),
                    PauseWorkflowExecutions: sdk.Bool(false),
                    Position: &shared.EnterpriseCrmEventbusProtoCoordinate{
                        X: sdk.Int(363467),
                        Y: sdk.Int(296127),
                    },
                    Properties: map[string]string{
                        "exercitationem": "commodi",
                        "laudantium": "est",
                        "consequatur": "incidunt",
                    },
                    StartTasks: []shared.EnterpriseCrmEventbusProtoNextTask{
                        shared.EnterpriseCrmEventbusProtoNextTask{
                            CombinedConditions: []shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("consequatur"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumUnset.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        1009.76,
                                                        8459.84,
                                                        4206.47,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(9162.43),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "cupiditate",
                                                        "modi",
                                                        "ratione",
                                                    },
                                                },
                                                IntValue: sdk.String("aliquam"),
                                                ProtoValue: map[string]interface{}{
                                                    "aliquam": "corporis",
                                                    "at": "ipsa",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "aut",
                                                    },
                                                },
                                                StringValue: sdk.String("molestias"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("quaerat"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumIsNotEmpty.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        7284.66,
                                                        6509.37,
                                                        3363.5,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(7652.65),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "vero",
                                                        "a",
                                                        "tenetur",
                                                        "ipsam",
                                                    },
                                                },
                                                IntValue: sdk.String("quod"),
                                                ProtoValue: map[string]interface{}{
                                                    "doloremque": "illo",
                                                    "reiciendis": "debitis",
                                                    "enim": "quasi",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "ipsam",
                                                        "aspernatur",
                                                        "atque",
                                                        "animi",
                                                    },
                                                },
                                                StringValue: sdk.String("eius"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("ad"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumExists.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        5544.29,
                                                        1285.4,
                                                        7171.85,
                                                        5079.46,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(3541.39),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "corrupti",
                                                        "libero",
                                                        "placeat",
                                                        "explicabo",
                                                    },
                                                },
                                                IntValue: sdk.String("placeat"),
                                                ProtoValue: map[string]interface{}{
                                                    "expedita": "laborum",
                                                    "atque": "assumenda",
                                                    "laborum": "magnam",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "fugit",
                                                    },
                                                },
                                                StringValue: sdk.String("nihil"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("illum"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumIsEmpty.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        6073.65,
                                                        4392.75,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(9416.84),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "eius",
                                                        "esse",
                                                        "quasi",
                                                        "inventore",
                                                    },
                                                },
                                                IntValue: sdk.String("similique"),
                                                ProtoValue: map[string]interface{}{
                                                    "et": "distinctio",
                                                    "porro": "nihil",
                                                    "numquam": "rerum",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "aliquid",
                                                        "placeat",
                                                        "necessitatibus",
                                                    },
                                                },
                                                StringValue: sdk.String("quisquam"),
                                            },
                                        },
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoCombinedCondition{
                                    Conditions: []shared.EnterpriseCrmEventbusProtoCondition{
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("ducimus"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumContains.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        4721.52,
                                                        4976.33,
                                                        7222,
                                                        2787.91,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(5341.75),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "totam",
                                                        "soluta",
                                                    },
                                                },
                                                IntValue: sdk.String("quibusdam"),
                                                ProtoValue: map[string]interface{}{
                                                    "mollitia": "autem",
                                                    "hic": "perferendis",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "aliquam",
                                                        "architecto",
                                                    },
                                                },
                                                StringValue: sdk.String("nulla"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("qui"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumIsEmpty.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        7465.11,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(5541.99),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "laudantium",
                                                    },
                                                },
                                                IntValue: sdk.String("sit"),
                                                ProtoValue: map[string]interface{}{
                                                    "quaerat": "nesciunt",
                                                    "molestiae": "adipisci",
                                                    "eveniet": "ipsa",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "sit",
                                                        "labore",
                                                    },
                                                },
                                                StringValue: sdk.String("ullam"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("excepturi"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumDoesNotExist.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        7001.12,
                                                        7386.39,
                                                        6653.11,
                                                        8566.67,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(214.7),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "tenetur",
                                                    },
                                                },
                                                IntValue: sdk.String("sunt"),
                                                ProtoValue: map[string]interface{}{
                                                    "corrupti": "iure",
                                                    "quidem": "quod",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "et",
                                                        "ipsam",
                                                        "eos",
                                                        "exercitationem",
                                                    },
                                                },
                                                StringValue: sdk.String("minima"),
                                            },
                                        },
                                        shared.EnterpriseCrmEventbusProtoCondition{
                                            EventPropertyKey: sdk.String("laudantium"),
                                            Operator: shared.EnterpriseCrmEventbusProtoConditionOperatorEnumIsEmpty.ToPointer(),
                                            Value: &shared.EnterpriseCrmEventbusProtoValueType{
                                                BooleanValue: sdk.Bool(false),
                                                DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleArray{
                                                    Values: []float64{
                                                        6857.82,
                                                        5660.24,
                                                        3583.94,
                                                    },
                                                },
                                                DoubleValue: sdk.Float64(7230.31),
                                                IntArray: &shared.EnterpriseCrmEventbusProtoIntArray{
                                                    Values: []string{
                                                        "suscipit",
                                                        "porro",
                                                        "nulla",
                                                        "consequatur",
                                                    },
                                                },
                                                IntValue: sdk.String("qui"),
                                                ProtoValue: map[string]interface{}{
                                                    "enim": "vel",
                                                    "impedit": "consectetur",
                                                },
                                                StringArray: &shared.EnterpriseCrmEventbusProtoStringArray{
                                                    Values: []string{
                                                        "ut",
                                                        "est",
                                                    },
                                                },
                                                StringValue: sdk.String("fuga"),
                                            },
                                        },
                                    },
                                },
                            },
                            Condition: sdk.String("labore"),
                            Description: sdk.String("adipisci"),
                            Label: sdk.String("ratione"),
                            TaskConfigID: sdk.String("cum"),
                            TaskNumber: sdk.String("magnam"),
                        },
                    },
                    TriggerCriteria: &shared.EnterpriseCrmEventbusProtoTriggerCriteria{
                        Condition: sdk.String("nihil"),
                        Parameters: &shared.EnterpriseCrmEventbusProtoEventParameters{
                            Parameters: []shared.EnterpriseCrmEventbusProtoParameterEntry{
                                shared.EnterpriseCrmEventbusProtoParameterEntry{
                                    Key: sdk.String("inventore"),
                                    Value: &shared.EnterpriseCrmEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                2254.15,
                                                7915.16,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(3214.38),
                                        IntArray: &shared.EnterpriseCrmEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "alias",
                                            },
                                        },
                                        IntValue: sdk.String("blanditiis"),
                                        ProtoArray: &shared.EnterpriseCrmEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "amet": "recusandae",
                                                },
                                                map[string]interface{}{
                                                    "corrupti": "sit",
                                                    "magni": "repellendus",
                                                    "quas": "ratione",
                                                },
                                                map[string]interface{}{
                                                    "alias": "repellendus",
                                                    "magnam": "quis",
                                                    "repudiandae": "soluta",
                                                    "eius": "fuga",
                                                },
                                                map[string]interface{}{
                                                    "nobis": "ea",
                                                    "iusto": "dolore",
                                                    "repudiandae": "recusandae",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "quisquam": "delectus",
                                            "optio": "sunt",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("rem"),
                                        },
                                        StringArray: &shared.EnterpriseCrmEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "assumenda",
                                                "optio",
                                                "esse",
                                                "a",
                                            },
                                        },
                                        StringValue: sdk.String("quam"),
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoParameterEntry{
                                    Key: sdk.String("quos"),
                                    Value: &shared.EnterpriseCrmEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                2369.1,
                                                1696.1,
                                                9236.52,
                                                298.97,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(2587.5),
                                        IntArray: &shared.EnterpriseCrmEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "nesciunt",
                                                "pariatur",
                                                "velit",
                                            },
                                        },
                                        IntValue: sdk.String("necessitatibus"),
                                        ProtoArray: &shared.EnterpriseCrmEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "cumque": "ullam",
                                                },
                                                map[string]interface{}{
                                                    "reprehenderit": "aut",
                                                    "recusandae": "voluptatibus",
                                                },
                                                map[string]interface{}{
                                                    "aspernatur": "harum",
                                                    "illum": "dolor",
                                                },
                                                map[string]interface{}{
                                                    "iste": "earum",
                                                    "vitae": "impedit",
                                                    "eligendi": "veniam",
                                                    "aperiam": "consectetur",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "voluptas": "quod",
                                            "nesciunt": "iste",
                                            "distinctio": "cumque",
                                            "assumenda": "alias",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("deserunt"),
                                        },
                                        StringArray: &shared.EnterpriseCrmEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "qui",
                                                "perspiciatis",
                                            },
                                        },
                                        StringValue: sdk.String("accusantium"),
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoParameterEntry{
                                    Key: sdk.String("voluptatibus"),
                                    Value: &shared.EnterpriseCrmEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                4626.73,
                                                9704.91,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(1997.04),
                                        IntArray: &shared.EnterpriseCrmEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "nemo",
                                                "ab",
                                                "atque",
                                            },
                                        },
                                        IntValue: sdk.String("natus"),
                                        ProtoArray: &shared.EnterpriseCrmEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "molestiae": "officiis",
                                                    "reiciendis": "voluptatum",
                                                    "aperiam": "reprehenderit",
                                                    "animi": "officia",
                                                },
                                                map[string]interface{}{
                                                    "quae": "adipisci",
                                                    "hic": "dolorem",
                                                    "adipisci": "optio",
                                                    "similique": "odio",
                                                },
                                                map[string]interface{}{
                                                    "asperiores": "nam",
                                                    "provident": "fugiat",
                                                    "recusandae": "non",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "neque": "quia",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("soluta"),
                                        },
                                        StringArray: &shared.EnterpriseCrmEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "qui",
                                                "commodi",
                                                "a",
                                            },
                                        },
                                        StringValue: sdk.String("temporibus"),
                                    },
                                },
                                shared.EnterpriseCrmEventbusProtoParameterEntry{
                                    Key: sdk.String("sequi"),
                                    Value: &shared.EnterpriseCrmEventbusProtoParameterValueType{
                                        BooleanArray: &shared.EnterpriseCrmEventbusProtoBooleanParameterArray{
                                            BooleanValues: []bool{
                                                false,
                                                false,
                                            },
                                        },
                                        BooleanValue: sdk.Bool(false),
                                        DoubleArray: &shared.EnterpriseCrmEventbusProtoDoubleParameterArray{
                                            DoubleValues: []float64{
                                                7129.97,
                                                6562.72,
                                                5661.6,
                                            },
                                        },
                                        DoubleValue: sdk.Float64(1706.72),
                                        IntArray: &shared.EnterpriseCrmEventbusProtoIntParameterArray{
                                            IntValues: []string{
                                                "laboriosam",
                                            },
                                        },
                                        IntValue: sdk.String("distinctio"),
                                        ProtoArray: &shared.EnterpriseCrmEventbusProtoProtoParameterArray{
                                            ProtoValues: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "magnam": "dicta",
                                                    "nostrum": "molestias",
                                                    "neque": "quis",
                                                },
                                                map[string]interface{}{
                                                    "esse": "adipisci",
                                                    "autem": "tempora",
                                                    "beatae": "dignissimos",
                                                    "quia": "ratione",
                                                },
                                                map[string]interface{}{
                                                    "amet": "sequi",
                                                },
                                                map[string]interface{}{
                                                    "fugiat": "quod",
                                                    "sit": "modi",
                                                    "eum": "rerum",
                                                    "quod": "nemo",
                                                },
                                            },
                                        },
                                        ProtoValue: map[string]interface{}{
                                            "vel": "amet",
                                        },
                                        SerializedObjectValue: &shared.EnterpriseCrmEventbusProtoSerializedObjectParameter{
                                            ObjectValue: sdk.String("facilis"),
                                        },
                                        StringArray: &shared.EnterpriseCrmEventbusProtoStringParameterArray{
                                            StringValues: []string{
                                                "maxime",
                                                "deserunt",
                                                "eius",
                                            },
                                        },
                                        StringValue: sdk.String("molestias"),
                                    },
                                },
                            },
                        },
                        TriggerCriteriaTaskImplementationClassName: sdk.String("dolores"),
                    },
                    TriggerID: sdk.String("dolores"),
                    TriggerNumber: sdk.String("reprehenderit"),
                    TriggerType: shared.EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnumSfdcCdcChannel.ToPointer(),
                },
            },
            UserLabel: sdk.String("non"),
        },
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("magni"),
        Key: sdk.String("minus"),
        NewIntegration: sdk.Bool(false),
        OauthToken: sdk.String("minima"),
        Parent: "ipsam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sequi"),
        UploadType: sdk.String("quaerat"),
        UploadProtocol: sdk.String("accusantium"),
    }, operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsList

Returns the list of all IntegrationTemplateVersions in the specified project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsList(ctx, operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cupiditate"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quo"),
        Fields: sdk.String("quis"),
        Filter: sdk.String("facere"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("harum"),
        PageSize: sdk.Int64(240262),
        PageToken: sdk.String("optio"),
        Parent: "minima",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reprehenderit"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("vitae"),
    }, operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsSfdcInstancesCreate

Creates an sfdc instance record. Store the sfdc instance in Spanner. Returns the sfdc instance.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsSfdcInstancesCreate(ctx, operations.IntegrationsProjectsLocationsSfdcInstancesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudIntegrationsV1alphaSfdcInstanceInput: &shared.GoogleCloudIntegrationsV1alphaSfdcInstanceInput{
            AuthConfigID: []string{
                "iste",
                "molestias",
            },
            Description: sdk.String("beatae"),
            DisplayName: sdk.String("itaque"),
            Name: sdk.String("Omar Murazik"),
            ServiceAuthority: sdk.String("quam"),
            SfdcOrgID: sdk.String("assumenda"),
        },
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("sint"),
        Key: sdk.String("inventore"),
        OauthToken: sdk.String("fugit"),
        Parent: "earum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.IntegrationsProjectsLocationsSfdcInstancesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaSfdcInstance != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsSfdcInstancesList

Lists all sfdc instances that match the filter. Restrict to sfdc instances belonging to the current client only.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsSfdcInstancesList(ctx, operations.IntegrationsProjectsLocationsSfdcInstancesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("porro"),
        Filter: sdk.String("impedit"),
        Key: sdk.String("veniam"),
        OauthToken: sdk.String("magnam"),
        PageSize: sdk.Int64(436235),
        PageToken: sdk.String("natus"),
        Parent: "nulla",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quaerat"),
        ReadMask: sdk.String("aut"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("quis"),
    }, operations.IntegrationsProjectsLocationsSfdcInstancesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreate

Creates an sfdc channel record. Store the sfdc channel in Spanner. Returns the sfdc channel.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreate(ctx, operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudIntegrationsV1alphaSfdcChannelInput: &shared.GoogleCloudIntegrationsV1alphaSfdcChannelInput{
            ChannelTopic: sdk.String("reiciendis"),
            Description: sdk.String("est"),
            DisplayName: sdk.String("esse"),
            IsActive: sdk.Bool(false),
            LastReplayID: sdk.String("iste"),
            Name: sdk.String("Theresa Bartoletti"),
        },
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("aperiam"),
        OauthToken: sdk.String("animi"),
        Parent: "ratione",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("itaque"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("quia"),
    }, operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaSfdcChannel != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDelete

Deletes an sfdc channel.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDelete(ctx, operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("fuga"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("illo"),
        Name: "Laverne Mante",
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sunt"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("iste"),
    }, operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGet

Gets an sfdc channel. If the channel doesn't exist, Code.NOT_FOUND exception will be thrown.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGet(ctx, operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("adipisci"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("quos"),
        Key: sdk.String("ea"),
        Name: "Keith Luettgen",
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("reprehenderit"),
        UploadProtocol: sdk.String("est"),
    }, operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaSfdcChannel != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsList

Lists all sfdc channels that match the filter. Restrict to sfdc channels belonging to the current client only.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsList(ctx, operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fuga"),
        Fields: sdk.String("facere"),
        Filter: sdk.String("odit"),
        Key: sdk.String("nam"),
        OauthToken: sdk.String("asperiores"),
        PageSize: sdk.Int64(461812),
        PageToken: sdk.String("fugiat"),
        Parent: "ea",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        ReadMask: sdk.String("quo"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("totam"),
    }, operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse != nil {
        // handle response
    }
}
```

## IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatch

Updates an sfdc channel. Updates the sfdc channel in spanner. Returns the sfdc channel.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatch(ctx, operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudIntegrationsV1alphaSfdcChannelInput: &shared.GoogleCloudIntegrationsV1alphaSfdcChannelInput{
            ChannelTopic: sdk.String("id"),
            Description: sdk.String("repellendus"),
            DisplayName: sdk.String("excepturi"),
            IsActive: sdk.Bool(false),
            LastReplayID: sdk.String("unde"),
            Name: sdk.String("Ray Botsford"),
        },
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("numquam"),
        ClientCertificatePassphrase: sdk.String("velit"),
        ClientCertificateSslCertificate: sdk.String("quis"),
        Fields: sdk.String("nesciunt"),
        Key: sdk.String("sunt"),
        Name: "Jamie Auer",
        OauthToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        UpdateMask: sdk.String("quidem"),
        UploadType: sdk.String("eaque"),
        UploadProtocol: sdk.String("sequi"),
    }, operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaSfdcChannel != nil {
        // handle response
    }
}
```
