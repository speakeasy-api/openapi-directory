# Properties

### Available Operations

* [AnalyticsadminPropertiesAccessBindingsBatchCreate](#analyticsadminpropertiesaccessbindingsbatchcreate) - Creates information about multiple access bindings to an account or property. This method is transactional. If any AccessBinding cannot be created, none of the AccessBindings will be created.
* [AnalyticsadminPropertiesAccessBindingsBatchDelete](#analyticsadminpropertiesaccessbindingsbatchdelete) - Deletes information about multiple users' links to an account or property.
* [AnalyticsadminPropertiesAccessBindingsBatchGet](#analyticsadminpropertiesaccessbindingsbatchget) - Gets information about multiple access bindings to an account or property.
* [AnalyticsadminPropertiesAccessBindingsBatchUpdate](#analyticsadminpropertiesaccessbindingsbatchupdate) - Updates information about multiple access bindings to an account or property.
* [AnalyticsadminPropertiesAccessBindingsCreate](#analyticsadminpropertiesaccessbindingscreate) - Creates an access binding on an account or property.
* [AnalyticsadminPropertiesAccessBindingsList](#analyticsadminpropertiesaccessbindingslist) - Lists all access bindings on an account or property.
* [AnalyticsadminPropertiesAcknowledgeUserDataCollection](#analyticsadminpropertiesacknowledgeuserdatacollection) - Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.
* [AnalyticsadminPropertiesAudiencesCreate](#analyticsadminpropertiesaudiencescreate) - Creates an Audience.
* [AnalyticsadminPropertiesAudiencesList](#analyticsadminpropertiesaudienceslist) - Lists Audiences on a property. Audiences created before 2020 may not be supported. Default audiences will not show filter definitions.
* [AnalyticsadminPropertiesBigQueryLinksList](#analyticsadminpropertiesbigquerylinkslist) - Lists BigQuery Links on a property.
* [AnalyticsadminPropertiesChannelGroupsCreate](#analyticsadminpropertieschannelgroupscreate) - Creates a ChannelGroup.
* [AnalyticsadminPropertiesChannelGroupsList](#analyticsadminpropertieschannelgroupslist) - Lists ChannelGroups on a property.
* [AnalyticsadminPropertiesConversionEventsCreate](#analyticsadminpropertiesconversioneventscreate) - Creates a conversion event with the specified attributes.
* [AnalyticsadminPropertiesConversionEventsList](#analyticsadminpropertiesconversioneventslist) - Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
* [AnalyticsadminPropertiesCreate](#analyticsadminpropertiescreate) - Creates an "GA4" property with the specified location and attributes.
* [AnalyticsadminPropertiesCreateConnectedSiteTag](#analyticsadminpropertiescreateconnectedsitetag) - Creates a connected site tag for a Universal Analytics property. You can create a maximum of 20 connected site tags per property. Note: This API cannot be used on GA4 properties.
* [AnalyticsadminPropertiesCustomDimensionsCreate](#analyticsadminpropertiescustomdimensionscreate) - Creates a CustomDimension.
* [AnalyticsadminPropertiesCustomDimensionsList](#analyticsadminpropertiescustomdimensionslist) - Lists CustomDimensions on a property.
* [AnalyticsadminPropertiesCustomMetricsArchive](#analyticsadminpropertiescustommetricsarchive) - Archives a CustomMetric on a property.
* [AnalyticsadminPropertiesCustomMetricsCreate](#analyticsadminpropertiescustommetricscreate) - Creates a CustomMetric.
* [AnalyticsadminPropertiesCustomMetricsList](#analyticsadminpropertiescustommetricslist) - Lists CustomMetrics on a property.
* [AnalyticsadminPropertiesDataStreamsCreate](#analyticsadminpropertiesdatastreamscreate) - Creates a DataStream.
* [AnalyticsadminPropertiesDataStreamsEventCreateRulesCreate](#analyticsadminpropertiesdatastreamseventcreaterulescreate) - Creates an EventCreateRule.
* [AnalyticsadminPropertiesDataStreamsEventCreateRulesList](#analyticsadminpropertiesdatastreamseventcreateruleslist) - Lists EventCreateRules on a web data stream.
* [AnalyticsadminPropertiesDataStreamsList](#analyticsadminpropertiesdatastreamslist) - Lists DataStreams on a property.
* [AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate](#analyticsadminpropertiesdatastreamsmeasurementprotocolsecretscreate) - Creates a measurement protocol secret.
* [AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList](#analyticsadminpropertiesdatastreamsmeasurementprotocolsecretslist) - Returns child MeasurementProtocolSecrets under the specified parent Property.
* [AnalyticsadminPropertiesDeleteConnectedSiteTag](#analyticsadminpropertiesdeleteconnectedsitetag) - Deletes a connected site tag for a Universal Analytics property. Note: this has no effect on GA4 properties.
* [AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApprove](#analyticsadminpropertiesdisplayvideo360advertiserlinkproposalsapprove) - Approves a DisplayVideo360AdvertiserLinkProposal. The DisplayVideo360AdvertiserLinkProposal will be deleted and a new DisplayVideo360AdvertiserLink will be created.
* [AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancel](#analyticsadminpropertiesdisplayvideo360advertiserlinkproposalscancel) - Cancels a DisplayVideo360AdvertiserLinkProposal. Cancelling can mean either: - Declining a proposal initiated from Display & Video 360 - Withdrawing a proposal initiated from Google Analytics After being cancelled, a proposal will eventually be deleted automatically.
* [AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreate](#analyticsadminpropertiesdisplayvideo360advertiserlinkproposalscreate) - Creates a DisplayVideo360AdvertiserLinkProposal.
* [AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsList](#analyticsadminpropertiesdisplayvideo360advertiserlinkproposalslist) - Lists DisplayVideo360AdvertiserLinkProposals on a property.
* [AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreate](#analyticsadminpropertiesdisplayvideo360advertiserlinkscreate) - Creates a DisplayVideo360AdvertiserLink. This can only be utilized by users who have proper authorization both on the Google Analytics property and on the Display & Video 360 advertiser. Users who do not have access to the Display & Video 360 advertiser should instead seek to create a DisplayVideo360LinkProposal.
* [AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksList](#analyticsadminpropertiesdisplayvideo360advertiserlinkslist) - Lists all DisplayVideo360AdvertiserLinks on a property.
* [AnalyticsadminPropertiesExpandedDataSetsCreate](#analyticsadminpropertiesexpandeddatasetscreate) - Creates a ExpandedDataSet.
* [AnalyticsadminPropertiesExpandedDataSetsList](#analyticsadminpropertiesexpandeddatasetslist) - Lists ExpandedDataSets on a property.
* [AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOut](#analyticsadminpropertiesfetchautomatedga4configurationoptout) - Fetches the opt out status for the automated GA4 setup process for a UA property. Note: this has no effect on GA4 property.
* [AnalyticsadminPropertiesFetchConnectedGa4Property](#analyticsadminpropertiesfetchconnectedga4property) - Given a specified UA property, looks up the GA4 property connected to it. Note: this cannot be used with GA4 properties.
* [AnalyticsadminPropertiesFirebaseLinksCreate](#analyticsadminpropertiesfirebaselinkscreate) - Creates a FirebaseLink. Properties can have at most one FirebaseLink.
* [AnalyticsadminPropertiesFirebaseLinksList](#analyticsadminpropertiesfirebaselinkslist) - Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
* [AnalyticsadminPropertiesGoogleAdsLinksCreate](#analyticsadminpropertiesgoogleadslinkscreate) - Creates a GoogleAdsLink.
* [AnalyticsadminPropertiesGoogleAdsLinksList](#analyticsadminpropertiesgoogleadslinkslist) - Lists GoogleAdsLinks on a property.
* [AnalyticsadminPropertiesList](#analyticsadminpropertieslist) - Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
* [AnalyticsadminPropertiesListConnectedSiteTags](#analyticsadminpropertieslistconnectedsitetags) - Lists the connected site tags for a Universal Analytics property. A maximum of 20 connected site tags will be returned. Note: this has no effect on GA4 property.
* [AnalyticsadminPropertiesRunAccessReport](#analyticsadminpropertiesrunaccessreport) - Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).
* [AnalyticsadminPropertiesSearchAds360LinksCreate](#analyticsadminpropertiessearchads360linkscreate) - Creates a SearchAds360Link.
* [AnalyticsadminPropertiesSearchAds360LinksList](#analyticsadminpropertiessearchads360linkslist) - Lists all SearchAds360Links on a property.
* [AnalyticsadminPropertiesSetAutomatedGa4ConfigurationOptOut](#analyticsadminpropertiessetautomatedga4configurationoptout) - Sets the opt out status for the automated GA4 setup process for a UA property. Note: this has no effect on GA4 property.
* [AnalyticsadminPropertiesUserLinksAudit](#analyticsadminpropertiesuserlinksaudit) - Lists all user links on an account or property, including implicit ones that come from effective permissions granted by groups or organization admin roles. If a returned user link does not have direct permissions, they cannot be removed from the account or property directly with the DeleteUserLink command. They have to be removed from the group/etc that gives them permissions, which is currently only usable/discoverable in the GA or GMP UIs.
* [AnalyticsadminPropertiesUserLinksBatchCreate](#analyticsadminpropertiesuserlinksbatchcreate) - Creates information about multiple users' links to an account or property. This method is transactional. If any UserLink cannot be created, none of the UserLinks will be created.
* [AnalyticsadminPropertiesUserLinksBatchDelete](#analyticsadminpropertiesuserlinksbatchdelete) - Deletes information about multiple users' links to an account or property.
* [AnalyticsadminPropertiesUserLinksBatchGet](#analyticsadminpropertiesuserlinksbatchget) - Gets information about multiple users' links to an account or property.
* [AnalyticsadminPropertiesUserLinksBatchUpdate](#analyticsadminpropertiesuserlinksbatchupdate) - Updates information about multiple users' links to an account or property.
* [AnalyticsadminPropertiesUserLinksCreate](#analyticsadminpropertiesuserlinkscreate) - Creates a user link on an account or property. If the user with the specified email already has permissions on the account or property, then the user's existing permissions will be unioned with the permissions specified in the new UserLink.
* [AnalyticsadminPropertiesUserLinksDelete](#analyticsadminpropertiesuserlinksdelete) - Deletes a user link on an account or property.
* [AnalyticsadminPropertiesUserLinksGet](#analyticsadminpropertiesuserlinksget) - Gets information about a user's link to an account or property.
* [AnalyticsadminPropertiesUserLinksList](#analyticsadminpropertiesuserlinkslist) - Lists all user links on an account or property.
* [AnalyticsadminPropertiesUserLinksPatch](#analyticsadminpropertiesuserlinkspatch) - Updates a user link on an account or property.

## AnalyticsadminPropertiesAccessBindingsBatchCreate

Creates information about multiple access bindings to an account or property. This method is transactional. If any AccessBinding cannot be created, none of the AccessBindings will be created.

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
    res, err := s.Properties.AnalyticsadminPropertiesAccessBindingsBatchCreate(ctx, operations.AnalyticsadminPropertiesAccessBindingsBatchCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsRequestInput: &shared.GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsRequestInput{
            Requests: []shared.GoogleAnalyticsAdminV1alphaCreateAccessBindingRequestInput{
                shared.GoogleAnalyticsAdminV1alphaCreateAccessBindingRequestInput{
                    AccessBinding: &shared.GoogleAnalyticsAdminV1alphaAccessBindingInput{
                        Roles: []string{
                            "corporis",
                            "iste",
                        },
                        User: sdk.String("iure"),
                    },
                    Parent: sdk.String("saepe"),
                },
                shared.GoogleAnalyticsAdminV1alphaCreateAccessBindingRequestInput{
                    AccessBinding: &shared.GoogleAnalyticsAdminV1alphaAccessBindingInput{
                        Roles: []string{
                            "architecto",
                            "ipsa",
                            "reiciendis",
                        },
                        User: sdk.String("est"),
                    },
                    Parent: sdk.String("mollitia"),
                },
                shared.GoogleAnalyticsAdminV1alphaCreateAccessBindingRequestInput{
                    AccessBinding: &shared.GoogleAnalyticsAdminV1alphaAccessBindingInput{
                        Roles: []string{
                            "dolores",
                            "dolorem",
                            "corporis",
                        },
                        User: sdk.String("explicabo"),
                    },
                    Parent: sdk.String("nobis"),
                },
            },
        },
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("minima"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("accusantium"),
        Parent: "iure",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.AnalyticsadminPropertiesAccessBindingsBatchCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesAccessBindingsBatchDelete

Deletes information about multiple users' links to an account or property.

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
    res, err := s.Properties.AnalyticsadminPropertiesAccessBindingsBatchDelete(ctx, operations.AnalyticsadminPropertiesAccessBindingsBatchDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAnalyticsAdminV1alphaBatchDeleteAccessBindingsRequest: &shared.GoogleAnalyticsAdminV1alphaBatchDeleteAccessBindingsRequest{
            Requests: []shared.GoogleAnalyticsAdminV1alphaDeleteAccessBindingRequest{
                shared.GoogleAnalyticsAdminV1alphaDeleteAccessBindingRequest{
                    Name: sdk.String("Cecilia Crooks"),
                },
                shared.GoogleAnalyticsAdminV1alphaDeleteAccessBindingRequest{
                    Name: sdk.String("Francis Jerde"),
                },
                shared.GoogleAnalyticsAdminV1alphaDeleteAccessBindingRequest{
                    Name: sdk.String("Sabrina Cronin MD"),
                },
            },
        },
        AccessToken: sdk.String("animi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("quo"),
        Key: sdk.String("sequi"),
        OauthToken: sdk.String("tenetur"),
        Parent: "ipsam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("id"),
        UploadType: sdk.String("possimus"),
        UploadProtocol: sdk.String("aut"),
    }, operations.AnalyticsadminPropertiesAccessBindingsBatchDeleteSecurity{
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

## AnalyticsadminPropertiesAccessBindingsBatchGet

Gets information about multiple access bindings to an account or property.

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
    res, err := s.Properties.AnalyticsadminPropertiesAccessBindingsBatchGet(ctx, operations.AnalyticsadminPropertiesAccessBindingsBatchGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("reiciendis"),
        Names: []string{
            "vero",
            "nihil",
            "praesentium",
            "voluptatibus",
        },
        OauthToken: sdk.String("ipsa"),
        Parent: "omnis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.AnalyticsadminPropertiesAccessBindingsBatchGetSecurity{
        Option1: &operations.AnalyticsadminPropertiesAccessBindingsBatchGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesAccessBindingsBatchUpdate

Updates information about multiple access bindings to an account or property.

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
    res, err := s.Properties.AnalyticsadminPropertiesAccessBindingsBatchUpdate(ctx, operations.AnalyticsadminPropertiesAccessBindingsBatchUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsRequestInput: &shared.GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsRequestInput{
            Requests: []shared.GoogleAnalyticsAdminV1alphaUpdateAccessBindingRequestInput{
                shared.GoogleAnalyticsAdminV1alphaUpdateAccessBindingRequestInput{
                    AccessBinding: &shared.GoogleAnalyticsAdminV1alphaAccessBindingInput{
                        Roles: []string{
                            "maiores",
                            "dicta",
                        },
                        User: sdk.String("corporis"),
                    },
                },
                shared.GoogleAnalyticsAdminV1alphaUpdateAccessBindingRequestInput{
                    AccessBinding: &shared.GoogleAnalyticsAdminV1alphaAccessBindingInput{
                        Roles: []string{
                            "iusto",
                            "dicta",
                        },
                        User: sdk.String("harum"),
                    },
                },
            },
        },
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("quae"),
        OauthToken: sdk.String("ipsum"),
        Parent: "quidem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestias"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("pariatur"),
    }, operations.AnalyticsadminPropertiesAccessBindingsBatchUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesAccessBindingsCreate

Creates an access binding on an account or property.

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
    res, err := s.Properties.AnalyticsadminPropertiesAccessBindingsCreate(ctx, operations.AnalyticsadminPropertiesAccessBindingsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAnalyticsAdminV1alphaAccessBindingInput: &shared.GoogleAnalyticsAdminV1alphaAccessBindingInput{
            Roles: []string{
                "rem",
                "voluptates",
                "quasi",
            },
            User: sdk.String("repudiandae"),
        },
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("itaque"),
        Fields: sdk.String("incidunt"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("consequatur"),
        Parent: "est",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.AnalyticsadminPropertiesAccessBindingsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaAccessBinding != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesAccessBindingsList

Lists all access bindings on an account or property.

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
    res, err := s.Properties.AnalyticsadminPropertiesAccessBindingsList(ctx, operations.AnalyticsadminPropertiesAccessBindingsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("qui"),
        Key: sdk.String("aliquid"),
        OauthToken: sdk.String("cupiditate"),
        PageSize: sdk.Int64(552822),
        PageToken: sdk.String("perferendis"),
        Parent: "magni",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("assumenda"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("alias"),
    }, operations.AnalyticsadminPropertiesAccessBindingsListSecurity{
        Option1: &operations.AnalyticsadminPropertiesAccessBindingsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaListAccessBindingsResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesAcknowledgeUserDataCollection

Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.

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
    res, err := s.Properties.AnalyticsadminPropertiesAcknowledgeUserDataCollection(ctx, operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionRequest: &shared.GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionRequest{
            Acknowledgement: sdk.String("dolorum"),
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("tempore"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        Property: "eum",
        QuotaUser: sdk.String("non"),
        UploadType: sdk.String("eligendi"),
        UploadProtocol: sdk.String("sint"),
    }, operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesAudiencesCreate

Creates an Audience.

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
    res, err := s.Properties.AnalyticsadminPropertiesAudiencesCreate(ctx, operations.AnalyticsadminPropertiesAudiencesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAnalyticsAdminV1alphaAudienceInput: &shared.GoogleAnalyticsAdminV1alphaAudienceInput{
            Description: sdk.String("provident"),
            DisplayName: sdk.String("necessitatibus"),
            EventTrigger: &shared.GoogleAnalyticsAdminV1alphaAudienceEventTrigger{
                EventName: sdk.String("sint"),
                LogCondition: shared.GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnumAudienceJoined.ToPointer(),
            },
            ExclusionDurationMode: shared.GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnumAudienceExclusionDurationModeUnspecified.ToPointer(),
            FilterClauses: []shared.GoogleAnalyticsAdminV1alphaAudienceFilterClause{
                shared.GoogleAnalyticsAdminV1alphaAudienceFilterClause{
                    ClauseType: shared.GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnumExclude.ToPointer(),
                    SequenceFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilter{
                        Scope: shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnumAudienceFilterScopeWithinSameSession.ToPointer(),
                        SequenceMaximumDuration: sdk.String("in"),
                        SequenceSteps: []shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep{
                            shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep{
                                ConstraintDuration: sdk.String("illum"),
                                FilterExpression: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{
                                    AndGroup: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList{
                                        FilterExpressions: []shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{
                                            shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                            shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                            shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                            shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                        },
                                    },
                                    DimensionOrMetricFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter{
                                        AtAnyPointInTime: sdk.Bool(false),
                                        BetweenFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter{
                                            FromValue: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue{
                                                DoubleValue: sdk.Float64(6994.79),
                                                Int64Value: sdk.String("dicta"),
                                            },
                                            ToValue: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue{
                                                DoubleValue: sdk.Float64(2974.37),
                                                Int64Value: sdk.String("cumque"),
                                            },
                                        },
                                        FieldName: sdk.String("facere"),
                                        InAnyNDayPeriod: sdk.Int(411820),
                                        InListFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter{
                                            CaseSensitive: sdk.Bool(false),
                                            Values: []string{
                                                "laborum",
                                                "accusamus",
                                            },
                                        },
                                        NumericFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter{
                                            Operation: shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnumOperationUnspecified.ToPointer(),
                                            Value: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue{
                                                DoubleValue: sdk.Float64(5812.73),
                                                Int64Value: sdk.String("enim"),
                                            },
                                        },
                                        StringFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter{
                                            CaseSensitive: sdk.Bool(false),
                                            MatchType: shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnumFullRegexp.ToPointer(),
                                            Value: sdk.String("delectus"),
                                        },
                                    },
                                    EventFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceEventFilter{
                                        EventName: sdk.String("quidem"),
                                        EventParameterFilterExpression: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                    },
                                    NotExpression: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                    OrGroup: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList{
                                        FilterExpressions: []shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{
                                            shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                            shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                            shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                        },
                                    },
                                },
                                ImmediatelyFollows: sdk.Bool(false),
                                Scope: shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnumAudienceFilterScopeWithinSameSession.ToPointer(),
                            },
                            shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep{
                                ConstraintDuration: sdk.String("id"),
                                FilterExpression: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{
                                    AndGroup: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList{
                                        FilterExpressions: []shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{
                                            shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                            shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                            shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                        },
                                    },
                                    DimensionOrMetricFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter{
                                        AtAnyPointInTime: sdk.Bool(false),
                                        BetweenFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter{
                                            FromValue: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue{
                                                DoubleValue: sdk.Float64(5332.06),
                                                Int64Value: sdk.String("sapiente"),
                                            },
                                            ToValue: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue{
                                                DoubleValue: sdk.Float64(2305.33),
                                                Int64Value: sdk.String("deserunt"),
                                            },
                                        },
                                        FieldName: sdk.String("nisi"),
                                        InAnyNDayPeriod: sdk.Int(423855),
                                        InListFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter{
                                            CaseSensitive: sdk.Bool(false),
                                            Values: []string{
                                                "omnis",
                                                "molestiae",
                                                "perferendis",
                                            },
                                        },
                                        NumericFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter{
                                            Operation: shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnumEqual.ToPointer(),
                                            Value: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue{
                                                DoubleValue: sdk.Float64(3015.75),
                                                Int64Value: sdk.String("distinctio"),
                                            },
                                        },
                                        StringFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter{
                                            CaseSensitive: sdk.Bool(false),
                                            MatchType: shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnumEndsWith.ToPointer(),
                                            Value: sdk.String("labore"),
                                        },
                                    },
                                    EventFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceEventFilter{
                                        EventName: sdk.String("labore"),
                                        EventParameterFilterExpression: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                    },
                                    NotExpression: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                    OrGroup: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList{
                                        FilterExpressions: []shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{
                                            shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                            shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                        },
                                    },
                                },
                                ImmediatelyFollows: sdk.Bool(false),
                                Scope: shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnumAudienceFilterScopeWithinSameSession.ToPointer(),
                            },
                        },
                    },
                    SimpleFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceSimpleFilter{
                        FilterExpression: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{
                            AndGroup: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList{
                                FilterExpressions: []shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{
                                    shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                    shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                    shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                },
                            },
                            DimensionOrMetricFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter{
                                AtAnyPointInTime: sdk.Bool(false),
                                BetweenFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter{
                                    FromValue: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue{
                                        DoubleValue: sdk.Float64(4287.69),
                                        Int64Value: sdk.String("vero"),
                                    },
                                    ToValue: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue{
                                        DoubleValue: sdk.Float64(1354.74),
                                        Int64Value: sdk.String("architecto"),
                                    },
                                },
                                FieldName: sdk.String("magnam"),
                                InAnyNDayPeriod: sdk.Int(92373),
                                InListFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter{
                                    CaseSensitive: sdk.Bool(false),
                                    Values: []string{
                                        "ullam",
                                        "provident",
                                        "quos",
                                    },
                                },
                                NumericFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter{
                                    Operation: shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnumLessThan.ToPointer(),
                                    Value: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue{
                                        DoubleValue: sdk.Float64(336.25),
                                        Int64Value: sdk.String("mollitia"),
                                    },
                                },
                                StringFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter{
                                    CaseSensitive: sdk.Bool(false),
                                    MatchType: shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnumFullRegexp.ToPointer(),
                                    Value: sdk.String("mollitia"),
                                },
                            },
                            EventFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceEventFilter{
                                EventName: sdk.String("ad"),
                                EventParameterFilterExpression: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                            },
                            NotExpression: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                            OrGroup: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList{
                                FilterExpressions: []shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{
                                    shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                    shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                },
                            },
                        },
                        Scope: shared.GoogleAnalyticsAdminV1alphaAudienceSimpleFilterScopeEnumAudienceFilterScopeUnspecified.ToPointer(),
                    },
                },
                shared.GoogleAnalyticsAdminV1alphaAudienceFilterClause{
                    ClauseType: shared.GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnumExclude.ToPointer(),
                    SequenceFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilter{
                        Scope: shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnumAudienceFilterScopeUnspecified.ToPointer(),
                        SequenceMaximumDuration: sdk.String("nemo"),
                        SequenceSteps: []shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep{
                            shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep{
                                ConstraintDuration: sdk.String("iure"),
                                FilterExpression: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{
                                    AndGroup: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList{
                                        FilterExpressions: []shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{
                                            shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                            shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                            shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                            shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                        },
                                    },
                                    DimensionOrMetricFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter{
                                        AtAnyPointInTime: sdk.Bool(false),
                                        BetweenFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter{
                                            FromValue: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue{
                                                DoubleValue: sdk.Float64(8919.24),
                                                Int64Value: sdk.String("eius"),
                                            },
                                            ToValue: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue{
                                                DoubleValue: sdk.Float64(8061.94),
                                                Int64Value: sdk.String("deleniti"),
                                            },
                                        },
                                        FieldName: sdk.String("facilis"),
                                        InAnyNDayPeriod: sdk.Int(447926),
                                        InListFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter{
                                            CaseSensitive: sdk.Bool(false),
                                            Values: []string{
                                                "architecto",
                                            },
                                        },
                                        NumericFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter{
                                            Operation: shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnumGreaterThan.ToPointer(),
                                            Value: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue{
                                                DoubleValue: sdk.Float64(3523.12),
                                                Int64Value: sdk.String("expedita"),
                                            },
                                        },
                                        StringFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter{
                                            CaseSensitive: sdk.Bool(false),
                                            MatchType: shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnumBeginsWith.ToPointer(),
                                            Value: sdk.String("repellat"),
                                        },
                                    },
                                    EventFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceEventFilter{
                                        EventName: sdk.String("quibusdam"),
                                        EventParameterFilterExpression: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                    },
                                    NotExpression: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                    OrGroup: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList{
                                        FilterExpressions: []shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{
                                            shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                        },
                                    },
                                },
                                ImmediatelyFollows: sdk.Bool(false),
                                Scope: shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnumAudienceFilterScopeAcrossAllSessions.ToPointer(),
                            },
                        },
                    },
                    SimpleFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceSimpleFilter{
                        FilterExpression: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{
                            AndGroup: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList{
                                FilterExpressions: []shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{
                                    shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                    shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                    shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                    shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                },
                            },
                            DimensionOrMetricFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter{
                                AtAnyPointInTime: sdk.Bool(false),
                                BetweenFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter{
                                    FromValue: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue{
                                        DoubleValue: sdk.Float64(375.59),
                                        Int64Value: sdk.String("consequuntur"),
                                    },
                                    ToValue: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue{
                                        DoubleValue: sdk.Float64(5083.15),
                                        Int64Value: sdk.String("natus"),
                                    },
                                },
                                FieldName: sdk.String("magni"),
                                InAnyNDayPeriod: sdk.Int(123820),
                                InListFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter{
                                    CaseSensitive: sdk.Bool(false),
                                    Values: []string{
                                        "illum",
                                        "pariatur",
                                        "maxime",
                                        "ea",
                                    },
                                },
                                NumericFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter{
                                    Operation: shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnumLessThan.ToPointer(),
                                    Value: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue{
                                        DoubleValue: sdk.Float64(1399.72),
                                        Int64Value: sdk.String("ea"),
                                    },
                                },
                                StringFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter{
                                    CaseSensitive: sdk.Bool(false),
                                    MatchType: shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnumMatchTypeUnspecified.ToPointer(),
                                    Value: sdk.String("ab"),
                                },
                            },
                            EventFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceEventFilter{
                                EventName: sdk.String("maiores"),
                                EventParameterFilterExpression: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                            },
                            NotExpression: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                            OrGroup: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList{
                                FilterExpressions: []shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{
                                    shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                    shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                    shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                },
                            },
                        },
                        Scope: shared.GoogleAnalyticsAdminV1alphaAudienceSimpleFilterScopeEnumAudienceFilterScopeWithinSameEvent.ToPointer(),
                    },
                },
                shared.GoogleAnalyticsAdminV1alphaAudienceFilterClause{
                    ClauseType: shared.GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnumInclude.ToPointer(),
                    SequenceFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilter{
                        Scope: shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnumAudienceFilterScopeWithinSameEvent.ToPointer(),
                        SequenceMaximumDuration: sdk.String("nam"),
                        SequenceSteps: []shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep{
                            shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep{
                                ConstraintDuration: sdk.String("pariatur"),
                                FilterExpression: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{
                                    AndGroup: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList{
                                        FilterExpressions: []shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{
                                            shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                            shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                        },
                                    },
                                    DimensionOrMetricFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter{
                                        AtAnyPointInTime: sdk.Bool(false),
                                        BetweenFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter{
                                            FromValue: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue{
                                                DoubleValue: sdk.Float64(9755.22),
                                                Int64Value: sdk.String("perferendis"),
                                            },
                                            ToValue: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue{
                                                DoubleValue: sdk.Float64(8558.04),
                                                Int64Value: sdk.String("amet"),
                                            },
                                        },
                                        FieldName: sdk.String("aut"),
                                        InAnyNDayPeriod: sdk.Int(764912),
                                        InListFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter{
                                            CaseSensitive: sdk.Bool(false),
                                            Values: []string{
                                                "hic",
                                                "libero",
                                            },
                                        },
                                        NumericFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter{
                                            Operation: shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnumLessThan.ToPointer(),
                                            Value: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue{
                                                DoubleValue: sdk.Float64(1716.29),
                                                Int64Value: sdk.String("quis"),
                                            },
                                        },
                                        StringFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter{
                                            CaseSensitive: sdk.Bool(false),
                                            MatchType: shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnumEndsWith.ToPointer(),
                                            Value: sdk.String("dignissimos"),
                                        },
                                    },
                                    EventFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceEventFilter{
                                        EventName: sdk.String("eaque"),
                                        EventParameterFilterExpression: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                    },
                                    NotExpression: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                    OrGroup: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList{
                                        FilterExpressions: []shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{
                                            shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                            shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                        },
                                    },
                                },
                                ImmediatelyFollows: sdk.Bool(false),
                                Scope: shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnumAudienceFilterScopeUnspecified.ToPointer(),
                            },
                        },
                    },
                    SimpleFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceSimpleFilter{
                        FilterExpression: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{
                            AndGroup: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList{
                                FilterExpressions: []shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{
                                    shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                },
                            },
                            DimensionOrMetricFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter{
                                AtAnyPointInTime: sdk.Bool(false),
                                BetweenFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter{
                                    FromValue: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue{
                                        DoubleValue: sdk.Float64(185.21),
                                        Int64Value: sdk.String("dolores"),
                                    },
                                    ToValue: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue{
                                        DoubleValue: sdk.Float64(7936.98),
                                        Int64Value: sdk.String("quam"),
                                    },
                                },
                                FieldName: sdk.String("dolor"),
                                InAnyNDayPeriod: sdk.Int(874573),
                                InListFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter{
                                    CaseSensitive: sdk.Bool(false),
                                    Values: []string{
                                        "hic",
                                        "recusandae",
                                    },
                                },
                                NumericFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter{
                                    Operation: shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnumLessThan.ToPointer(),
                                    Value: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue{
                                        DoubleValue: sdk.Float64(7044.15),
                                        Int64Value: sdk.String("perspiciatis"),
                                    },
                                },
                                StringFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter{
                                    CaseSensitive: sdk.Bool(false),
                                    MatchType: shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnumMatchTypeUnspecified.ToPointer(),
                                    Value: sdk.String("porro"),
                                },
                            },
                            EventFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceEventFilter{
                                EventName: sdk.String("consequuntur"),
                                EventParameterFilterExpression: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                            },
                            NotExpression: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                            OrGroup: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList{
                                FilterExpressions: []shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{
                                    shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                    shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                    shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                },
                            },
                        },
                        Scope: shared.GoogleAnalyticsAdminV1alphaAudienceSimpleFilterScopeEnumAudienceFilterScopeWithinSameSession.ToPointer(),
                    },
                },
                shared.GoogleAnalyticsAdminV1alphaAudienceFilterClause{
                    ClauseType: shared.GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnumAudienceClauseTypeUnspecified.ToPointer(),
                    SequenceFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilter{
                        Scope: shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnumAudienceFilterScopeWithinSameSession.ToPointer(),
                        SequenceMaximumDuration: sdk.String("rerum"),
                        SequenceSteps: []shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep{
                            shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep{
                                ConstraintDuration: sdk.String("asperiores"),
                                FilterExpression: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{
                                    AndGroup: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList{
                                        FilterExpressions: []shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{
                                            shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                            shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                            shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                            shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                        },
                                    },
                                    DimensionOrMetricFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter{
                                        AtAnyPointInTime: sdk.Bool(false),
                                        BetweenFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter{
                                            FromValue: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue{
                                                DoubleValue: sdk.Float64(2672.62),
                                                Int64Value: sdk.String("iste"),
                                            },
                                            ToValue: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue{
                                                DoubleValue: sdk.Float64(6790.91),
                                                Int64Value: sdk.String("deleniti"),
                                            },
                                        },
                                        FieldName: sdk.String("pariatur"),
                                        InAnyNDayPeriod: sdk.Int(589910),
                                        InListFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter{
                                            CaseSensitive: sdk.Bool(false),
                                            Values: []string{
                                                "libero",
                                                "delectus",
                                                "quaerat",
                                                "quos",
                                            },
                                        },
                                        NumericFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter{
                                            Operation: shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnumEqual.ToPointer(),
                                            Value: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue{
                                                DoubleValue: sdk.Float64(2123.9),
                                                Int64Value: sdk.String("dolorem"),
                                            },
                                        },
                                        StringFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter{
                                            CaseSensitive: sdk.Bool(false),
                                            MatchType: shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnumExact.ToPointer(),
                                            Value: sdk.String("qui"),
                                        },
                                    },
                                    EventFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceEventFilter{
                                        EventName: sdk.String("ipsum"),
                                        EventParameterFilterExpression: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                    },
                                    NotExpression: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                    OrGroup: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList{
                                        FilterExpressions: []shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{
                                            shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                            shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                            shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                            shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                        },
                                    },
                                },
                                ImmediatelyFollows: sdk.Bool(false),
                                Scope: shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnumAudienceFilterScopeWithinSameSession.ToPointer(),
                            },
                        },
                    },
                    SimpleFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceSimpleFilter{
                        FilterExpression: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{
                            AndGroup: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList{
                                FilterExpressions: []shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{
                                    shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                    shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                    shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                },
                            },
                            DimensionOrMetricFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter{
                                AtAnyPointInTime: sdk.Bool(false),
                                BetweenFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter{
                                    FromValue: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue{
                                        DoubleValue: sdk.Float64(4521.09),
                                        Int64Value: sdk.String("dignissimos"),
                                    },
                                    ToValue: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue{
                                        DoubleValue: sdk.Float64(9702.37),
                                        Int64Value: sdk.String("amet"),
                                    },
                                },
                                FieldName: sdk.String("dolorum"),
                                InAnyNDayPeriod: sdk.Int(254356),
                                InListFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter{
                                    CaseSensitive: sdk.Bool(false),
                                    Values: []string{
                                        "ipsa",
                                    },
                                },
                                NumericFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter{
                                    Operation: shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnumOperationUnspecified.ToPointer(),
                                    Value: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue{
                                        DoubleValue: sdk.Float64(4344.17),
                                        Int64Value: sdk.String("odio"),
                                    },
                                },
                                StringFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter{
                                    CaseSensitive: sdk.Bool(false),
                                    MatchType: shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnumExact.ToPointer(),
                                    Value: sdk.String("accusamus"),
                                },
                            },
                            EventFilter: &shared.GoogleAnalyticsAdminV1alphaAudienceEventFilter{
                                EventName: sdk.String("quidem"),
                                EventParameterFilterExpression: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                            },
                            NotExpression: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                            OrGroup: &shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList{
                                FilterExpressions: []shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{
                                    shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                    shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                    shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                    shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression{},
                                },
                            },
                        },
                        Scope: shared.GoogleAnalyticsAdminV1alphaAudienceSimpleFilterScopeEnumAudienceFilterScopeWithinSameEvent.ToPointer(),
                    },
                },
            },
            MembershipDurationDays: sdk.Int(617658),
        },
        AccessToken: sdk.String("eos"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sit"),
        Fields: sdk.String("fugiat"),
        Key: sdk.String("ab"),
        OauthToken: sdk.String("soluta"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.AnalyticsadminPropertiesAudiencesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaAudience != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesAudiencesList

Lists Audiences on a property. Audiences created before 2020 may not be supported. Default audiences will not show filter definitions.

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
    res, err := s.Properties.AnalyticsadminPropertiesAudiencesList(ctx, operations.AnalyticsadminPropertiesAudiencesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("distinctio"),
        Fields: sdk.String("asperiores"),
        Key: sdk.String("nihil"),
        OauthToken: sdk.String("ipsum"),
        PageSize: sdk.Int64(456015),
        PageToken: sdk.String("id"),
        Parent: "saepe",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eius"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.AnalyticsadminPropertiesAudiencesListSecurity{
        Option1: &operations.AnalyticsadminPropertiesAudiencesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaListAudiencesResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesBigQueryLinksList

Lists BigQuery Links on a property.

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
    res, err := s.Properties.AnalyticsadminPropertiesBigQueryLinksList(ctx, operations.AnalyticsadminPropertiesBigQueryLinksListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("optio"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ad"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("deserunt"),
        PageSize: sdk.Int64(588317),
        PageToken: sdk.String("minima"),
        Parent: "repellendus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        UploadType: sdk.String("similique"),
        UploadProtocol: sdk.String("alias"),
    }, operations.AnalyticsadminPropertiesBigQueryLinksListSecurity{
        Option1: &operations.AnalyticsadminPropertiesBigQueryLinksListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaListBigQueryLinksResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesChannelGroupsCreate

Creates a ChannelGroup.

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
    res, err := s.Properties.AnalyticsadminPropertiesChannelGroupsCreate(ctx, operations.AnalyticsadminPropertiesChannelGroupsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleAnalyticsAdminV1alphaChannelGroupInput: &shared.GoogleAnalyticsAdminV1alphaChannelGroupInput{
            Description: sdk.String("quaerat"),
            DisplayName: sdk.String("tempora"),
            GroupingRule: []shared.GoogleAnalyticsAdminV1alphaGroupingRule{
                shared.GoogleAnalyticsAdminV1alphaGroupingRule{
                    DisplayName: sdk.String("quod"),
                    Expression: &shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression{
                        AndGroup: &shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterExpressionList{
                            FilterExpressions: []shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression{
                                shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression{},
                                shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression{},
                                shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression{},
                                shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression{},
                            },
                        },
                        Filter: &shared.GoogleAnalyticsAdminV1alphaChannelGroupFilter{
                            FieldName: sdk.String("qui"),
                            InListFilter: &shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterInListFilter{
                                Values: []string{
                                    "a",
                                    "esse",
                                    "harum",
                                },
                            },
                            StringFilter: &shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterStringFilter{
                                MatchType: shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterStringFilterMatchTypeEnumEndsWith.ToPointer(),
                                Value: sdk.String("ipsum"),
                            },
                        },
                        NotExpression: &shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression{},
                        OrGroup: &shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterExpressionList{
                            FilterExpressions: []shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression{
                                shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression{},
                                shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression{},
                                shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression{},
                                shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression{},
                            },
                        },
                    },
                },
                shared.GoogleAnalyticsAdminV1alphaGroupingRule{
                    DisplayName: sdk.String("tenetur"),
                    Expression: &shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression{
                        AndGroup: &shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterExpressionList{
                            FilterExpressions: []shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression{
                                shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression{},
                            },
                        },
                        Filter: &shared.GoogleAnalyticsAdminV1alphaChannelGroupFilter{
                            FieldName: sdk.String("tempore"),
                            InListFilter: &shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterInListFilter{
                                Values: []string{
                                    "numquam",
                                    "enim",
                                    "dolorem",
                                    "sapiente",
                                },
                            },
                            StringFilter: &shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterStringFilter{
                                MatchType: shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterStringFilterMatchTypeEnumEndsWith.ToPointer(),
                                Value: sdk.String("nihil"),
                            },
                        },
                        NotExpression: &shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression{},
                        OrGroup: &shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterExpressionList{
                            FilterExpressions: []shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression{
                                shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression{},
                            },
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("expedita"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sed"),
        Fields: sdk.String("vel"),
        Key: sdk.String("libero"),
        OauthToken: sdk.String("voluptas"),
        Parent: "deserunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quam"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("incidunt"),
    }, operations.AnalyticsadminPropertiesChannelGroupsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaChannelGroup != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesChannelGroupsList

Lists ChannelGroups on a property.

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
    res, err := s.Properties.AnalyticsadminPropertiesChannelGroupsList(ctx, operations.AnalyticsadminPropertiesChannelGroupsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cupiditate"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("soluta"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("laborum"),
        PageSize: sdk.Int64(517379),
        PageToken: sdk.String("incidunt"),
        Parent: "aspernatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolores"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("facilis"),
    }, operations.AnalyticsadminPropertiesChannelGroupsListSecurity{
        Option1: &operations.AnalyticsadminPropertiesChannelGroupsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaListChannelGroupsResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesConversionEventsCreate

Creates a conversion event with the specified attributes.

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
    res, err := s.Properties.AnalyticsadminPropertiesConversionEventsCreate(ctx, operations.AnalyticsadminPropertiesConversionEventsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAnalyticsAdminV1alphaConversionEventInput: &shared.GoogleAnalyticsAdminV1alphaConversionEventInput{
            EventName: sdk.String("quam"),
        },
        AccessToken: sdk.String("molestias"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("neque"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("magni"),
        Parent: "odio",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sunt"),
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("nam"),
    }, operations.AnalyticsadminPropertiesConversionEventsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaConversionEvent != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesConversionEventsList

Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.

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
    res, err := s.Properties.AnalyticsadminPropertiesConversionEventsList(ctx, operations.AnalyticsadminPropertiesConversionEventsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptatem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("soluta"),
        Fields: sdk.String("nobis"),
        Key: sdk.String("et"),
        OauthToken: sdk.String("saepe"),
        PageSize: sdk.Int64(217450),
        PageToken: sdk.String("veritatis"),
        Parent: "nobis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("tempore"),
        UploadProtocol: sdk.String("cupiditate"),
    }, operations.AnalyticsadminPropertiesConversionEventsListSecurity{
        Option1: &operations.AnalyticsadminPropertiesConversionEventsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaListConversionEventsResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesCreate

Creates an "GA4" property with the specified location and attributes.

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
    res, err := s.Properties.AnalyticsadminPropertiesCreate(ctx, operations.AnalyticsadminPropertiesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAnalyticsAdminV1alphaPropertyInput: &shared.GoogleAnalyticsAdminV1alphaPropertyInput{
            Account: sdk.String("delectus"),
            CurrencyCode: sdk.String("dolorem"),
            DisplayName: sdk.String("dolore"),
            IndustryCategory: shared.GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnumOther.ToPointer(),
            Parent: sdk.String("adipisci"),
            PropertyType: shared.GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnumPropertyTypeSubproperty.ToPointer(),
            TimeZone: sdk.String("architecto"),
        },
        AccessToken: sdk.String("quae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quas"),
        Fields: sdk.String("itaque"),
        Key: sdk.String("consequatur"),
        OauthToken: sdk.String("est"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellendus"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("doloribus"),
    }, operations.AnalyticsadminPropertiesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaProperty != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesCreateConnectedSiteTag

Creates a connected site tag for a Universal Analytics property. You can create a maximum of 20 connected site tags per property. Note: This API cannot be used on GA4 properties.

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
    res, err := s.Properties.AnalyticsadminPropertiesCreateConnectedSiteTag(ctx, operations.AnalyticsadminPropertiesCreateConnectedSiteTagRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagRequest: &shared.GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagRequest{
            ConnectedSiteTag: &shared.GoogleAnalyticsAdminV1alphaConnectedSiteTag{
                DisplayName: sdk.String("facilis"),
                TagID: sdk.String("cupiditate"),
            },
            Property: sdk.String("qui"),
        },
        AccessToken: sdk.String("quae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("odio"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("voluptatibus"),
        OauthToken: sdk.String("quisquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("quis"),
    }, operations.AnalyticsadminPropertiesCreateConnectedSiteTagSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesCustomDimensionsCreate

Creates a CustomDimension.

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
    res, err := s.Properties.AnalyticsadminPropertiesCustomDimensionsCreate(ctx, operations.AnalyticsadminPropertiesCustomDimensionsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAnalyticsAdminV1alphaCustomDimensionInput: &shared.GoogleAnalyticsAdminV1alphaCustomDimensionInput{
            Description: sdk.String("delectus"),
            DisallowAdsPersonalization: sdk.Bool(false),
            DisplayName: sdk.String("voluptate"),
            ParameterName: sdk.String("consectetur"),
            Scope: shared.GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnumItem.ToPointer(),
        },
        AccessToken: sdk.String("tenetur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("odio"),
        Parent: "similique",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("ducimus"),
    }, operations.AnalyticsadminPropertiesCustomDimensionsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaCustomDimension != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesCustomDimensionsList

Lists CustomDimensions on a property.

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
    res, err := s.Properties.AnalyticsadminPropertiesCustomDimensionsList(ctx, operations.AnalyticsadminPropertiesCustomDimensionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sequi"),
        Fields: sdk.String("natus"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("aut"),
        PageSize: sdk.Int64(974259),
        PageToken: sdk.String("exercitationem"),
        Parent: "nulla",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.AnalyticsadminPropertiesCustomDimensionsListSecurity{
        Option1: &operations.AnalyticsadminPropertiesCustomDimensionsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesCustomMetricsArchive

Archives a CustomMetric on a property.

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
    res, err := s.Properties.AnalyticsadminPropertiesCustomMetricsArchive(ctx, operations.AnalyticsadminPropertiesCustomMetricsArchiveRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "eligendi": "ducimus",
            "alias": "officia",
        },
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("vel"),
        Name: "Clifford Dickens",
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.AnalyticsadminPropertiesCustomMetricsArchiveSecurity{
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

## AnalyticsadminPropertiesCustomMetricsCreate

Creates a CustomMetric.

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
    res, err := s.Properties.AnalyticsadminPropertiesCustomMetricsCreate(ctx, operations.AnalyticsadminPropertiesCustomMetricsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAnalyticsAdminV1alphaCustomMetricInput: &shared.GoogleAnalyticsAdminV1alphaCustomMetricInput{
            Description: sdk.String("nulla"),
            DisplayName: sdk.String("excepturi"),
            MeasurementUnit: shared.GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnumHours.ToPointer(),
            ParameterName: sdk.String("nostrum"),
            RestrictedMetricType: []shared.GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum{
                shared.GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnumRevenueData,
                shared.GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnumRevenueData,
                shared.GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnumCostData,
                shared.GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnumRevenueData,
            },
            Scope: shared.GoogleAnalyticsAdminV1alphaCustomMetricScopeEnumMetricScopeUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("veniam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("inventore"),
        Fields: sdk.String("magnam"),
        Key: sdk.String("ea"),
        OauthToken: sdk.String("quo"),
        Parent: "consectetur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("minima"),
    }, operations.AnalyticsadminPropertiesCustomMetricsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaCustomMetric != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesCustomMetricsList

Lists CustomMetrics on a property.

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
    res, err := s.Properties.AnalyticsadminPropertiesCustomMetricsList(ctx, operations.AnalyticsadminPropertiesCustomMetricsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("a"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aut"),
        Fields: sdk.String("aut"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("impedit"),
        PageSize: sdk.Int64(304582),
        PageToken: sdk.String("fugit"),
        Parent: "accusamus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("inventore"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("et"),
    }, operations.AnalyticsadminPropertiesCustomMetricsListSecurity{
        Option1: &operations.AnalyticsadminPropertiesCustomMetricsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaListCustomMetricsResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesDataStreamsCreate

Creates a DataStream.

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
    res, err := s.Properties.AnalyticsadminPropertiesDataStreamsCreate(ctx, operations.AnalyticsadminPropertiesDataStreamsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleAnalyticsAdminV1alphaDataStreamInput: &shared.GoogleAnalyticsAdminV1alphaDataStreamInput{
            AndroidAppStreamData: &shared.GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamDataInput{
                PackageName: sdk.String("laborum"),
            },
            DisplayName: sdk.String("placeat"),
            IosAppStreamData: &shared.GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamDataInput{
                BundleID: sdk.String("velit"),
            },
            Type: shared.GoogleAnalyticsAdminV1alphaDataStreamTypeEnumWebDataStream.ToPointer(),
            WebStreamData: &shared.GoogleAnalyticsAdminV1alphaDataStreamWebStreamDataInput{
                DefaultURI: sdk.String("autem"),
            },
        },
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("assumenda"),
        Fields: sdk.String("nulla"),
        Key: sdk.String("voluptas"),
        OauthToken: sdk.String("libero"),
        Parent: "quasi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("explicabo"),
    }, operations.AnalyticsadminPropertiesDataStreamsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaDataStream != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesDataStreamsEventCreateRulesCreate

Creates an EventCreateRule.

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
    res, err := s.Properties.AnalyticsadminPropertiesDataStreamsEventCreateRulesCreate(ctx, operations.AnalyticsadminPropertiesDataStreamsEventCreateRulesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleAnalyticsAdminV1alphaEventCreateRuleInput: &shared.GoogleAnalyticsAdminV1alphaEventCreateRuleInput{
            DestinationEvent: sdk.String("ipsa"),
            EventConditions: []shared.GoogleAnalyticsAdminV1alphaMatchingCondition{
                shared.GoogleAnalyticsAdminV1alphaMatchingCondition{
                    ComparisonType: shared.GoogleAnalyticsAdminV1alphaMatchingConditionComparisonTypeEnumContainsCaseInsensitive.ToPointer(),
                    Field: sdk.String("odio"),
                    Negated: sdk.Bool(false),
                    Value: sdk.String("eius"),
                },
                shared.GoogleAnalyticsAdminV1alphaMatchingCondition{
                    ComparisonType: shared.GoogleAnalyticsAdminV1alphaMatchingConditionComparisonTypeEnumStartsWithCaseInsensitive.ToPointer(),
                    Field: sdk.String("esse"),
                    Negated: sdk.Bool(false),
                    Value: sdk.String("rem"),
                },
            },
            ParameterMutations: []shared.GoogleAnalyticsAdminV1alphaParameterMutation{
                shared.GoogleAnalyticsAdminV1alphaParameterMutation{
                    Parameter: sdk.String("reprehenderit"),
                    ParameterValue: sdk.String("quidem"),
                },
                shared.GoogleAnalyticsAdminV1alphaParameterMutation{
                    Parameter: sdk.String("fugiat"),
                    ParameterValue: sdk.String("ut"),
                },
                shared.GoogleAnalyticsAdminV1alphaParameterMutation{
                    Parameter: sdk.String("eum"),
                    ParameterValue: sdk.String("suscipit"),
                },
            },
            SourceCopyParameters: sdk.Bool(false),
        },
        AccessToken: sdk.String("assumenda"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("quisquam"),
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("ipsa"),
        Parent: "id",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("neque"),
        UploadProtocol: sdk.String("quo"),
    }, operations.AnalyticsadminPropertiesDataStreamsEventCreateRulesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaEventCreateRule != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesDataStreamsEventCreateRulesList

Lists EventCreateRules on a web data stream.

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
    res, err := s.Properties.AnalyticsadminPropertiesDataStreamsEventCreateRulesList(ctx, operations.AnalyticsadminPropertiesDataStreamsEventCreateRulesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eius"),
        Fields: sdk.String("eos"),
        Key: sdk.String("voluptas"),
        OauthToken: sdk.String("ab"),
        PageSize: sdk.Int64(587600),
        PageToken: sdk.String("consequatur"),
        Parent: "tempora",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("aspernatur"),
    }, operations.AnalyticsadminPropertiesDataStreamsEventCreateRulesListSecurity{
        Option1: &operations.AnalyticsadminPropertiesDataStreamsEventCreateRulesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaListEventCreateRulesResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesDataStreamsList

Lists DataStreams on a property.

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
    res, err := s.Properties.AnalyticsadminPropertiesDataStreamsList(ctx, operations.AnalyticsadminPropertiesDataStreamsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("aperiam"),
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("quod"),
        PageSize: sdk.Int64(490819),
        PageToken: sdk.String("inventore"),
        Parent: "nihil",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("aliquam"),
    }, operations.AnalyticsadminPropertiesDataStreamsListSecurity{
        Option1: &operations.AnalyticsadminPropertiesDataStreamsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaListDataStreamsResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate

Creates a measurement protocol secret.

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
    res, err := s.Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate(ctx, operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAnalyticsAdminV1alphaMeasurementProtocolSecretInput: &shared.GoogleAnalyticsAdminV1alphaMeasurementProtocolSecretInput{
            DisplayName: sdk.String("occaecati"),
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolores"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("accusantium"),
        Parent: "porro",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        UploadType: sdk.String("quas"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList

Returns child MeasurementProtocolSecrets under the specified parent Property.

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
    res, err := s.Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList(ctx, operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fuga"),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("incidunt"),
        OauthToken: sdk.String("atque"),
        PageSize: sdk.Int64(128860),
        PageToken: sdk.String("minima"),
        Parent: "nisi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurity{
        Option1: &operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesDeleteConnectedSiteTag

Deletes a connected site tag for a Universal Analytics property. Note: this has no effect on GA4 properties.

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
    res, err := s.Properties.AnalyticsadminPropertiesDeleteConnectedSiteTag(ctx, operations.AnalyticsadminPropertiesDeleteConnectedSiteTagRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAnalyticsAdminV1alphaDeleteConnectedSiteTagRequest: &shared.GoogleAnalyticsAdminV1alphaDeleteConnectedSiteTagRequest{
            Property: sdk.String("explicabo"),
            TagID: sdk.String("saepe"),
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("et"),
        Fields: sdk.String("esse"),
        Key: sdk.String("eveniet"),
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("quod"),
    }, operations.AnalyticsadminPropertiesDeleteConnectedSiteTagSecurity{
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

## AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApprove

Approves a DisplayVideo360AdvertiserLinkProposal. The DisplayVideo360AdvertiserLinkProposal will be deleted and a new DisplayVideo360AdvertiserLink will be created.

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
    res, err := s.Properties.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApprove(ctx, operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "aliquid": "quasi",
            "saepe": "vel",
            "harum": "molestiae",
            "rerum": "occaecati",
        },
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eligendi"),
        Fields: sdk.String("sit"),
        Key: sdk.String("culpa"),
        Name: "Chad Runolfsson DDS",
        OauthToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("esse"),
    }, operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancel

Cancels a DisplayVideo360AdvertiserLinkProposal. Cancelling can mean either: - Declining a proposal initiated from Display & Video 360 - Withdrawing a proposal initiated from Google Analytics After being cancelled, a proposal will eventually be deleted automatically.

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
    res, err := s.Properties.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancel(ctx, operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "a": "nulla",
            "quas": "esse",
            "quasi": "a",
        },
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("possimus"),
        Key: sdk.String("quia"),
        Name: "Mr. Marlon Schultz V",
        OauthToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("quae"),
    }, operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreate

Creates a DisplayVideo360AdvertiserLinkProposal.

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
    res, err := s.Properties.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreate(ctx, operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput: &shared.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput{
            AdsPersonalizationEnabled: sdk.Bool(false),
            AdvertiserID: sdk.String("vel"),
            CampaignDataSharingEnabled: sdk.Bool(false),
            CostDataSharingEnabled: sdk.Bool(false),
            ValidationEmail: sdk.String("in"),
        },
        AccessToken: sdk.String("eius"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("illum"),
        Fields: sdk.String("soluta"),
        Key: sdk.String("accusantium"),
        OauthToken: sdk.String("aliquam"),
        Parent: "sapiente",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("reprehenderit"),
    }, operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsList

Lists DisplayVideo360AdvertiserLinkProposals on a property.

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
    res, err := s.Properties.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsList(ctx, operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nisi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptatum"),
        Fields: sdk.String("qui"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("ex"),
        PageSize: sdk.Int64(536275),
        PageToken: sdk.String("itaque"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("tenetur"),
    }, operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurity{
        Option1: &operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreate

Creates a DisplayVideo360AdvertiserLink. This can only be utilized by users who have proper authorization both on the Google Analytics property and on the Display & Video 360 advertiser. Users who do not have access to the Display & Video 360 advertiser should instead seek to create a DisplayVideo360LinkProposal.

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
    res, err := s.Properties.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreate(ctx, operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput: &shared.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput{
            AdsPersonalizationEnabled: sdk.Bool(false),
            AdvertiserID: sdk.String("at"),
            CampaignDataSharingEnabled: sdk.Bool(false),
            CostDataSharingEnabled: sdk.Bool(false),
        },
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("minima"),
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("consectetur"),
        Parent: "adipisci",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("accusantium"),
    }, operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksList

Lists all DisplayVideo360AdvertiserLinks on a property.

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
    res, err := s.Properties.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksList(ctx, operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aut"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("ab"),
        OauthToken: sdk.String("corrupti"),
        PageSize: sdk.Int64(251941),
        PageToken: sdk.String("voluptatem"),
        Parent: "dolor",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("impedit"),
    }, operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurity{
        Option1: &operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesExpandedDataSetsCreate

Creates a ExpandedDataSet.

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
    res, err := s.Properties.AnalyticsadminPropertiesExpandedDataSetsCreate(ctx, operations.AnalyticsadminPropertiesExpandedDataSetsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAnalyticsAdminV1alphaExpandedDataSetInput: &shared.GoogleAnalyticsAdminV1alphaExpandedDataSetInput{
            Description: sdk.String("voluptas"),
            DimensionFilterExpression: &shared.GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression{
                AndGroup: &shared.GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionList{
                    FilterExpressions: []shared.GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression{
                        shared.GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression{},
                    },
                },
                Filter: &shared.GoogleAnalyticsAdminV1alphaExpandedDataSetFilter{
                    FieldName: sdk.String("dignissimos"),
                    InListFilter: &shared.GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter{
                        CaseSensitive: sdk.Bool(false),
                        Values: []string{
                            "maiores",
                        },
                    },
                    StringFilter: &shared.GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter{
                        CaseSensitive: sdk.Bool(false),
                        MatchType: shared.GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("velit"),
                    },
                },
                NotExpression: &shared.GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression{},
            },
            DimensionNames: []string{
                "voluptas",
                "asperiores",
                "aperiam",
                "ea",
            },
            DisplayName: sdk.String("quaerat"),
            MetricNames: []string{
                "repellendus",
            },
        },
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dignissimos"),
        Fields: sdk.String("officia"),
        Key: sdk.String("asperiores"),
        OauthToken: sdk.String("nemo"),
        Parent: "quae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quaerat"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("quod"),
    }, operations.AnalyticsadminPropertiesExpandedDataSetsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaExpandedDataSet != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesExpandedDataSetsList

Lists ExpandedDataSets on a property.

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
    res, err := s.Properties.AnalyticsadminPropertiesExpandedDataSetsList(ctx, operations.AnalyticsadminPropertiesExpandedDataSetsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fuga"),
        Fields: sdk.String("id"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("velit"),
        PageSize: sdk.Int64(633931),
        PageToken: sdk.String("est"),
        Parent: "recusandae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        UploadType: sdk.String("fugiat"),
        UploadProtocol: sdk.String("vel"),
    }, operations.AnalyticsadminPropertiesExpandedDataSetsListSecurity{
        Option1: &operations.AnalyticsadminPropertiesExpandedDataSetsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaListExpandedDataSetsResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOut

Fetches the opt out status for the automated GA4 setup process for a UA property. Note: this has no effect on GA4 property.

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
    res, err := s.Properties.AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOut(ctx, operations.AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutRequest: &shared.GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutRequest{
            Property: sdk.String("quos"),
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("possimus"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("cum"),
        OauthToken: sdk.String("commodi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutSecurity{
        Option1: &operations.AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesFetchConnectedGa4Property

Given a specified UA property, looks up the GA4 property connected to it. Note: this cannot be used with GA4 properties.

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
    res, err := s.Properties.AnalyticsadminPropertiesFetchConnectedGa4Property(ctx, operations.AnalyticsadminPropertiesFetchConnectedGa4PropertyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("aperiam"),
        Key: sdk.String("cum"),
        OauthToken: sdk.String("consectetur"),
        PrettyPrint: sdk.Bool(false),
        Property: sdk.String("in"),
        QuotaUser: sdk.String("exercitationem"),
        UploadType: sdk.String("earum"),
        UploadProtocol: sdk.String("facere"),
    }, operations.AnalyticsadminPropertiesFetchConnectedGa4PropertySecurity{
        Option1: &operations.AnalyticsadminPropertiesFetchConnectedGa4PropertySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaFetchConnectedGa4PropertyResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesFirebaseLinksCreate

Creates a FirebaseLink. Properties can have at most one FirebaseLink.

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
    res, err := s.Properties.AnalyticsadminPropertiesFirebaseLinksCreate(ctx, operations.AnalyticsadminPropertiesFirebaseLinksCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAnalyticsAdminV1alphaFirebaseLinkInput: &shared.GoogleAnalyticsAdminV1alphaFirebaseLinkInput{
            Project: sdk.String("doloribus"),
        },
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("necessitatibus"),
        OauthToken: sdk.String("dolore"),
        Parent: "sunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("asperiores"),
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("non"),
    }, operations.AnalyticsadminPropertiesFirebaseLinksCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaFirebaseLink != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesFirebaseLinksList

Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.

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
    res, err := s.Properties.AnalyticsadminPropertiesFirebaseLinksList(ctx, operations.AnalyticsadminPropertiesFirebaseLinksListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("beatae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("debitis"),
        Key: sdk.String("consectetur"),
        OauthToken: sdk.String("corporis"),
        PageSize: sdk.Int64(689768),
        PageToken: sdk.String("laboriosam"),
        Parent: "ipsa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptates"),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("vitae"),
    }, operations.AnalyticsadminPropertiesFirebaseLinksListSecurity{
        Option1: &operations.AnalyticsadminPropertiesFirebaseLinksListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesGoogleAdsLinksCreate

Creates a GoogleAdsLink.

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
    res, err := s.Properties.AnalyticsadminPropertiesGoogleAdsLinksCreate(ctx, operations.AnalyticsadminPropertiesGoogleAdsLinksCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleAnalyticsAdminV1alphaGoogleAdsLinkInput: &shared.GoogleAnalyticsAdminV1alphaGoogleAdsLinkInput{
            AdsPersonalizationEnabled: sdk.Bool(false),
            CustomerID: sdk.String("similique"),
        },
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("voluptas"),
        Key: sdk.String("voluptas"),
        OauthToken: sdk.String("minima"),
        Parent: "nobis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("minus"),
    }, operations.AnalyticsadminPropertiesGoogleAdsLinksCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaGoogleAdsLink != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesGoogleAdsLinksList

Lists GoogleAdsLinks on a property.

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
    res, err := s.Properties.AnalyticsadminPropertiesGoogleAdsLinksList(ctx, operations.AnalyticsadminPropertiesGoogleAdsLinksListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("blanditiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolore"),
        Fields: sdk.String("aliquam"),
        Key: sdk.String("officiis"),
        OauthToken: sdk.String("temporibus"),
        PageSize: sdk.Int64(351870),
        PageToken: sdk.String("adipisci"),
        Parent: "cum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("blanditiis"),
        UploadType: sdk.String("quas"),
        UploadProtocol: sdk.String("hic"),
    }, operations.AnalyticsadminPropertiesGoogleAdsLinksListSecurity{
        Option1: &operations.AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesList

Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.

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
    res, err := s.Properties.AnalyticsadminPropertiesList(ctx, operations.AnalyticsadminPropertiesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("culpa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("totam"),
        Filter: sdk.String("hic"),
        Key: sdk.String("exercitationem"),
        OauthToken: sdk.String("nobis"),
        PageSize: sdk.Int64(24619),
        PageToken: sdk.String("rerum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        ShowDeleted: sdk.Bool(false),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("explicabo"),
    }, operations.AnalyticsadminPropertiesListSecurity{
        Option1: &operations.AnalyticsadminPropertiesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaListPropertiesResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesListConnectedSiteTags

Lists the connected site tags for a Universal Analytics property. A maximum of 20 connected site tags will be returned. Note: this has no effect on GA4 property.

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
    res, err := s.Properties.AnalyticsadminPropertiesListConnectedSiteTags(ctx, operations.AnalyticsadminPropertiesListConnectedSiteTagsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleAnalyticsAdminV1alphaListConnectedSiteTagsRequest: &shared.GoogleAnalyticsAdminV1alphaListConnectedSiteTagsRequest{
            Property: sdk.String("facilis"),
        },
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ab"),
        Fields: sdk.String("iste"),
        Key: sdk.String("dolore"),
        OauthToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("commodi"),
    }, operations.AnalyticsadminPropertiesListConnectedSiteTagsSecurity{
        Option1: &operations.AnalyticsadminPropertiesListConnectedSiteTagsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaListConnectedSiteTagsResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesRunAccessReport

Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).

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
    res, err := s.Properties.AnalyticsadminPropertiesRunAccessReport(ctx, operations.AnalyticsadminPropertiesRunAccessReportRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleAnalyticsAdminV1alphaRunAccessReportRequest: &shared.GoogleAnalyticsAdminV1alphaRunAccessReportRequest{
            DateRanges: []shared.GoogleAnalyticsAdminV1alphaAccessDateRange{
                shared.GoogleAnalyticsAdminV1alphaAccessDateRange{
                    EndDate: sdk.String("voluptas"),
                    StartDate: sdk.String("unde"),
                },
            },
            DimensionFilter: &shared.GoogleAnalyticsAdminV1alphaAccessFilterExpression{
                AccessFilter: &shared.GoogleAnalyticsAdminV1alphaAccessFilter{
                    BetweenFilter: &shared.GoogleAnalyticsAdminV1alphaAccessBetweenFilter{
                        FromValue: &shared.GoogleAnalyticsAdminV1alphaNumericValue{
                            DoubleValue: sdk.Float64(1000.32),
                            Int64Value: sdk.String("suscipit"),
                        },
                        ToValue: &shared.GoogleAnalyticsAdminV1alphaNumericValue{
                            DoubleValue: sdk.Float64(9602.57),
                            Int64Value: sdk.String("debitis"),
                        },
                    },
                    FieldName: sdk.String("illo"),
                    InListFilter: &shared.GoogleAnalyticsAdminV1alphaAccessInListFilter{
                        CaseSensitive: sdk.Bool(false),
                        Values: []string{
                            "perferendis",
                            "corrupti",
                            "maiores",
                            "incidunt",
                        },
                    },
                    NumericFilter: &shared.GoogleAnalyticsAdminV1alphaAccessNumericFilter{
                        Operation: shared.GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnumOperationUnspecified.ToPointer(),
                        Value: &shared.GoogleAnalyticsAdminV1alphaNumericValue{
                            DoubleValue: sdk.Float64(5922.31),
                            Int64Value: sdk.String("eius"),
                        },
                    },
                    StringFilter: &shared.GoogleAnalyticsAdminV1alphaAccessStringFilter{
                        CaseSensitive: sdk.Bool(false),
                        MatchType: shared.GoogleAnalyticsAdminV1alphaAccessStringFilterMatchTypeEnumPartialRegexp.ToPointer(),
                        Value: sdk.String("ipsum"),
                    },
                },
                AndGroup: &shared.GoogleAnalyticsAdminV1alphaAccessFilterExpressionList{
                    Expressions: []shared.GoogleAnalyticsAdminV1alphaAccessFilterExpression{
                        shared.GoogleAnalyticsAdminV1alphaAccessFilterExpression{},
                        shared.GoogleAnalyticsAdminV1alphaAccessFilterExpression{},
                    },
                },
                NotExpression: &shared.GoogleAnalyticsAdminV1alphaAccessFilterExpression{},
                OrGroup: &shared.GoogleAnalyticsAdminV1alphaAccessFilterExpressionList{
                    Expressions: []shared.GoogleAnalyticsAdminV1alphaAccessFilterExpression{
                        shared.GoogleAnalyticsAdminV1alphaAccessFilterExpression{},
                        shared.GoogleAnalyticsAdminV1alphaAccessFilterExpression{},
                        shared.GoogleAnalyticsAdminV1alphaAccessFilterExpression{},
                    },
                },
            },
            Dimensions: []shared.GoogleAnalyticsAdminV1alphaAccessDimension{
                shared.GoogleAnalyticsAdminV1alphaAccessDimension{
                    DimensionName: sdk.String("voluptatibus"),
                },
                shared.GoogleAnalyticsAdminV1alphaAccessDimension{
                    DimensionName: sdk.String("tempora"),
                },
                shared.GoogleAnalyticsAdminV1alphaAccessDimension{
                    DimensionName: sdk.String("tempora"),
                },
            },
            Limit: sdk.String("voluptate"),
            MetricFilter: &shared.GoogleAnalyticsAdminV1alphaAccessFilterExpression{
                AccessFilter: &shared.GoogleAnalyticsAdminV1alphaAccessFilter{
                    BetweenFilter: &shared.GoogleAnalyticsAdminV1alphaAccessBetweenFilter{
                        FromValue: &shared.GoogleAnalyticsAdminV1alphaNumericValue{
                            DoubleValue: sdk.Float64(9700.76),
                            Int64Value: sdk.String("ex"),
                        },
                        ToValue: &shared.GoogleAnalyticsAdminV1alphaNumericValue{
                            DoubleValue: sdk.Float64(254.97),
                            Int64Value: sdk.String("non"),
                        },
                    },
                    FieldName: sdk.String("officiis"),
                    InListFilter: &shared.GoogleAnalyticsAdminV1alphaAccessInListFilter{
                        CaseSensitive: sdk.Bool(false),
                        Values: []string{
                            "facilis",
                            "quaerat",
                            "incidunt",
                        },
                    },
                    NumericFilter: &shared.GoogleAnalyticsAdminV1alphaAccessNumericFilter{
                        Operation: shared.GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnumLessThan.ToPointer(),
                        Value: &shared.GoogleAnalyticsAdminV1alphaNumericValue{
                            DoubleValue: sdk.Float64(8948.64),
                            Int64Value: sdk.String("rem"),
                        },
                    },
                    StringFilter: &shared.GoogleAnalyticsAdminV1alphaAccessStringFilter{
                        CaseSensitive: sdk.Bool(false),
                        MatchType: shared.GoogleAnalyticsAdminV1alphaAccessStringFilterMatchTypeEnumMatchTypeUnspecified.ToPointer(),
                        Value: sdk.String("nobis"),
                    },
                },
                AndGroup: &shared.GoogleAnalyticsAdminV1alphaAccessFilterExpressionList{
                    Expressions: []shared.GoogleAnalyticsAdminV1alphaAccessFilterExpression{
                        shared.GoogleAnalyticsAdminV1alphaAccessFilterExpression{},
                        shared.GoogleAnalyticsAdminV1alphaAccessFilterExpression{},
                        shared.GoogleAnalyticsAdminV1alphaAccessFilterExpression{},
                    },
                },
                NotExpression: &shared.GoogleAnalyticsAdminV1alphaAccessFilterExpression{},
                OrGroup: &shared.GoogleAnalyticsAdminV1alphaAccessFilterExpressionList{
                    Expressions: []shared.GoogleAnalyticsAdminV1alphaAccessFilterExpression{
                        shared.GoogleAnalyticsAdminV1alphaAccessFilterExpression{},
                        shared.GoogleAnalyticsAdminV1alphaAccessFilterExpression{},
                    },
                },
            },
            Metrics: []shared.GoogleAnalyticsAdminV1alphaAccessMetric{
                shared.GoogleAnalyticsAdminV1alphaAccessMetric{
                    MetricName: sdk.String("recusandae"),
                },
                shared.GoogleAnalyticsAdminV1alphaAccessMetric{
                    MetricName: sdk.String("reiciendis"),
                },
            },
            Offset: sdk.String("nulla"),
            OrderBys: []shared.GoogleAnalyticsAdminV1alphaAccessOrderBy{
                shared.GoogleAnalyticsAdminV1alphaAccessOrderBy{
                    Desc: sdk.Bool(false),
                    Dimension: &shared.GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderBy{
                        DimensionName: sdk.String("aperiam"),
                        OrderType: shared.GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByOrderTypeEnumNumeric.ToPointer(),
                    },
                    Metric: &shared.GoogleAnalyticsAdminV1alphaAccessOrderByMetricOrderBy{
                        MetricName: sdk.String("numquam"),
                    },
                },
            },
            ReturnEntityQuota: sdk.Bool(false),
            TimeZone: sdk.String("veniam"),
        },
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("beatae"),
        Entity: "laudantium",
        Fields: sdk.String("exercitationem"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laboriosam"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("voluptatum"),
    }, operations.AnalyticsadminPropertiesRunAccessReportSecurity{
        Option1: &operations.AnalyticsadminPropertiesRunAccessReportSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaRunAccessReportResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesSearchAds360LinksCreate

Creates a SearchAds360Link.

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
    res, err := s.Properties.AnalyticsadminPropertiesSearchAds360LinksCreate(ctx, operations.AnalyticsadminPropertiesSearchAds360LinksCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleAnalyticsAdminV1alphaSearchAds360LinkInput: &shared.GoogleAnalyticsAdminV1alphaSearchAds360LinkInput{
            AdsPersonalizationEnabled: sdk.Bool(false),
            AdvertiserID: sdk.String("hic"),
            CampaignDataSharingEnabled: sdk.Bool(false),
            CostDataSharingEnabled: sdk.Bool(false),
            SiteStatsSharingEnabled: sdk.Bool(false),
        },
        AccessToken: sdk.String("expedita"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("neque"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("nostrum"),
        OauthToken: sdk.String("officia"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corrupti"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.AnalyticsadminPropertiesSearchAds360LinksCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaSearchAds360Link != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesSearchAds360LinksList

Lists all SearchAds360Links on a property.

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
    res, err := s.Properties.AnalyticsadminPropertiesSearchAds360LinksList(ctx, operations.AnalyticsadminPropertiesSearchAds360LinksListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fugiat"),
        Fields: sdk.String("voluptatem"),
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("expedita"),
        PageSize: sdk.Int64(299643),
        PageToken: sdk.String("consequatur"),
        Parent: "esse",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("voluptatum"),
    }, operations.AnalyticsadminPropertiesSearchAds360LinksListSecurity{
        Option1: &operations.AnalyticsadminPropertiesSearchAds360LinksListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesSetAutomatedGa4ConfigurationOptOut

Sets the opt out status for the automated GA4 setup process for a UA property. Note: this has no effect on GA4 property.

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
    res, err := s.Properties.AnalyticsadminPropertiesSetAutomatedGa4ConfigurationOptOut(ctx, operations.AnalyticsadminPropertiesSetAutomatedGa4ConfigurationOptOutRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutRequest: &shared.GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutRequest{
            OptOut: sdk.Bool(false),
            Property: sdk.String("repudiandae"),
        },
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("blanditiis"),
        Fields: sdk.String("ex"),
        Key: sdk.String("sed"),
        OauthToken: sdk.String("sit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("nostrum"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.AnalyticsadminPropertiesSetAutomatedGa4ConfigurationOptOutSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesUserLinksAudit

Lists all user links on an account or property, including implicit ones that come from effective permissions granted by groups or organization admin roles. If a returned user link does not have direct permissions, they cannot be removed from the account or property directly with the DeleteUserLink command. They have to be removed from the group/etc that gives them permissions, which is currently only usable/discoverable in the GA or GMP UIs.

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
    res, err := s.Properties.AnalyticsadminPropertiesUserLinksAudit(ctx, operations.AnalyticsadminPropertiesUserLinksAuditRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleAnalyticsAdminV1alphaAuditUserLinksRequest: &shared.GoogleAnalyticsAdminV1alphaAuditUserLinksRequest{
            PageSize: sdk.Int(8511),
            PageToken: sdk.String("incidunt"),
        },
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("harum"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("occaecati"),
        Parent: "labore",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("atque"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.AnalyticsadminPropertiesUserLinksAuditSecurity{
        Option1: &operations.AnalyticsadminPropertiesUserLinksAuditSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaAuditUserLinksResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesUserLinksBatchCreate

Creates information about multiple users' links to an account or property. This method is transactional. If any UserLink cannot be created, none of the UserLinks will be created.

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
    res, err := s.Properties.AnalyticsadminPropertiesUserLinksBatchCreate(ctx, operations.AnalyticsadminPropertiesUserLinksBatchCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequestInput: &shared.GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequestInput{
            NotifyNewUsers: sdk.Bool(false),
            Requests: []shared.GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput{
                shared.GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput{
                    NotifyNewUser: sdk.Bool(false),
                    Parent: sdk.String("laboriosam"),
                    UserLink: &shared.GoogleAnalyticsAdminV1alphaUserLinkInput{
                        DirectRoles: []string{
                            "amet",
                        },
                        EmailAddress: sdk.String("deserunt"),
                    },
                },
                shared.GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput{
                    NotifyNewUser: sdk.Bool(false),
                    Parent: sdk.String("voluptate"),
                    UserLink: &shared.GoogleAnalyticsAdminV1alphaUserLinkInput{
                        DirectRoles: []string{
                            "reiciendis",
                            "provident",
                            "repellendus",
                        },
                        EmailAddress: sdk.String("delectus"),
                    },
                },
                shared.GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput{
                    NotifyNewUser: sdk.Bool(false),
                    Parent: sdk.String("voluptates"),
                    UserLink: &shared.GoogleAnalyticsAdminV1alphaUserLinkInput{
                        DirectRoles: []string{
                            "est",
                        },
                        EmailAddress: sdk.String("quidem"),
                    },
                },
                shared.GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput{
                    NotifyNewUser: sdk.Bool(false),
                    Parent: sdk.String("reprehenderit"),
                    UserLink: &shared.GoogleAnalyticsAdminV1alphaUserLinkInput{
                        DirectRoles: []string{
                            "fuga",
                            "praesentium",
                            "mollitia",
                            "veniam",
                        },
                        EmailAddress: sdk.String("voluptatem"),
                    },
                },
            },
        },
        AccessToken: sdk.String("quisquam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("atque"),
        Key: sdk.String("reprehenderit"),
        OauthToken: sdk.String("asperiores"),
        Parent: "totam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("maxime"),
    }, operations.AnalyticsadminPropertiesUserLinksBatchCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesUserLinksBatchDelete

Deletes information about multiple users' links to an account or property.

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
    res, err := s.Properties.AnalyticsadminPropertiesUserLinksBatchDelete(ctx, operations.AnalyticsadminPropertiesUserLinksBatchDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest: &shared.GoogleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest{
            Requests: []shared.GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest{
                shared.GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest{
                    Name: sdk.String("Angelina Jenkins"),
                },
                shared.GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest{
                    Name: sdk.String("Frankie Thompson"),
                },
            },
        },
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("corrupti"),
        Key: sdk.String("at"),
        OauthToken: sdk.String("error"),
        Parent: "blanditiis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("atque"),
    }, operations.AnalyticsadminPropertiesUserLinksBatchDeleteSecurity{
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

## AnalyticsadminPropertiesUserLinksBatchGet

Gets information about multiple users' links to an account or property.

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
    res, err := s.Properties.AnalyticsadminPropertiesUserLinksBatchGet(ctx, operations.AnalyticsadminPropertiesUserLinksBatchGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sunt"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("repellendus"),
        Key: sdk.String("labore"),
        Names: []string{
            "doloremque",
            "repudiandae",
            "dicta",
            "accusantium",
        },
        OauthToken: sdk.String("beatae"),
        Parent: "dolores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("velit"),
    }, operations.AnalyticsadminPropertiesUserLinksBatchGetSecurity{
        Option1: &operations.AnalyticsadminPropertiesUserLinksBatchGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesUserLinksBatchUpdate

Updates information about multiple users' links to an account or property.

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
    res, err := s.Properties.AnalyticsadminPropertiesUserLinksBatchUpdate(ctx, operations.AnalyticsadminPropertiesUserLinksBatchUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksRequestInput: &shared.GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksRequestInput{
            Requests: []shared.GoogleAnalyticsAdminV1alphaUpdateUserLinkRequestInput{
                shared.GoogleAnalyticsAdminV1alphaUpdateUserLinkRequestInput{
                    UserLink: &shared.GoogleAnalyticsAdminV1alphaUserLinkInput{
                        DirectRoles: []string{
                            "saepe",
                            "consequuntur",
                        },
                        EmailAddress: sdk.String("occaecati"),
                    },
                },
                shared.GoogleAnalyticsAdminV1alphaUpdateUserLinkRequestInput{
                    UserLink: &shared.GoogleAnalyticsAdminV1alphaUserLinkInput{
                        DirectRoles: []string{
                            "perspiciatis",
                            "in",
                            "adipisci",
                            "eveniet",
                        },
                        EmailAddress: sdk.String("occaecati"),
                    },
                },
                shared.GoogleAnalyticsAdminV1alphaUpdateUserLinkRequestInput{
                    UserLink: &shared.GoogleAnalyticsAdminV1alphaUserLinkInput{
                        DirectRoles: []string{
                            "fugit",
                        },
                        EmailAddress: sdk.String("id"),
                    },
                },
            },
        },
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("illo"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("quidem"),
        Parent: "eveniet",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("non"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("doloremque"),
    }, operations.AnalyticsadminPropertiesUserLinksBatchUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesUserLinksCreate

Creates a user link on an account or property. If the user with the specified email already has permissions on the account or property, then the user's existing permissions will be unioned with the permissions specified in the new UserLink.

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
    res, err := s.Properties.AnalyticsadminPropertiesUserLinksCreate(ctx, operations.AnalyticsadminPropertiesUserLinksCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAnalyticsAdminV1alphaUserLinkInput: &shared.GoogleAnalyticsAdminV1alphaUserLinkInput{
            DirectRoles: []string{
                "totam",
            },
            EmailAddress: sdk.String("quae"),
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("cum"),
        Key: sdk.String("iure"),
        NotifyNewUser: sdk.Bool(false),
        OauthToken: sdk.String("necessitatibus"),
        Parent: "ratione",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("voluptatum"),
    }, operations.AnalyticsadminPropertiesUserLinksCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaUserLink != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesUserLinksDelete

Deletes a user link on an account or property.

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
    res, err := s.Properties.AnalyticsadminPropertiesUserLinksDelete(ctx, operations.AnalyticsadminPropertiesUserLinksDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aliquam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repellat"),
        Fields: sdk.String("alias"),
        Key: sdk.String("corporis"),
        Name: "Christian O'Conner DVM",
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolores"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("minima"),
    }, operations.AnalyticsadminPropertiesUserLinksDeleteSecurity{
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

## AnalyticsadminPropertiesUserLinksGet

Gets information about a user's link to an account or property.

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
    res, err := s.Properties.AnalyticsadminPropertiesUserLinksGet(ctx, operations.AnalyticsadminPropertiesUserLinksGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quae"),
        Fields: sdk.String("recusandae"),
        Key: sdk.String("omnis"),
        Name: "Minnie Jacobson",
        OauthToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("laudantium"),
        UploadProtocol: sdk.String("eum"),
    }, operations.AnalyticsadminPropertiesUserLinksGetSecurity{
        Option1: &operations.AnalyticsadminPropertiesUserLinksGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaUserLink != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesUserLinksList

Lists all user links on an account or property.

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
    res, err := s.Properties.AnalyticsadminPropertiesUserLinksList(ctx, operations.AnalyticsadminPropertiesUserLinksListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("quis"),
        Key: sdk.String("eum"),
        OauthToken: sdk.String("reiciendis"),
        PageSize: sdk.Int64(592780),
        PageToken: sdk.String("aspernatur"),
        Parent: "ullam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("animi"),
        UploadProtocol: sdk.String("nostrum"),
    }, operations.AnalyticsadminPropertiesUserLinksListSecurity{
        Option1: &operations.AnalyticsadminPropertiesUserLinksListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaListUserLinksResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesUserLinksPatch

Updates a user link on an account or property.

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
    res, err := s.Properties.AnalyticsadminPropertiesUserLinksPatch(ctx, operations.AnalyticsadminPropertiesUserLinksPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleAnalyticsAdminV1alphaUserLinkInput: &shared.GoogleAnalyticsAdminV1alphaUserLinkInput{
            DirectRoles: []string{
                "possimus",
                "animi",
                "ex",
            },
            EmailAddress: sdk.String("aliquid"),
        },
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("doloribus"),
        Fields: sdk.String("ullam"),
        Key: sdk.String("in"),
        Name: "Darin Nienow",
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UpdateMask: sdk.String("molestias"),
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.AnalyticsadminPropertiesUserLinksPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaUserLink != nil {
        // handle response
    }
}
```
