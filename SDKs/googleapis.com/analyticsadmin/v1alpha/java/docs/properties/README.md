# properties

### Available Operations

* [analyticsadminPropertiesAccessBindingsBatchCreate](#analyticsadminpropertiesaccessbindingsbatchcreate) - Creates information about multiple access bindings to an account or property. This method is transactional. If any AccessBinding cannot be created, none of the AccessBindings will be created.
* [analyticsadminPropertiesAccessBindingsBatchDelete](#analyticsadminpropertiesaccessbindingsbatchdelete) - Deletes information about multiple users' links to an account or property.
* [analyticsadminPropertiesAccessBindingsBatchGet](#analyticsadminpropertiesaccessbindingsbatchget) - Gets information about multiple access bindings to an account or property.
* [analyticsadminPropertiesAccessBindingsBatchUpdate](#analyticsadminpropertiesaccessbindingsbatchupdate) - Updates information about multiple access bindings to an account or property.
* [analyticsadminPropertiesAccessBindingsCreate](#analyticsadminpropertiesaccessbindingscreate) - Creates an access binding on an account or property.
* [analyticsadminPropertiesAccessBindingsList](#analyticsadminpropertiesaccessbindingslist) - Lists all access bindings on an account or property.
* [analyticsadminPropertiesAcknowledgeUserDataCollection](#analyticsadminpropertiesacknowledgeuserdatacollection) - Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.
* [analyticsadminPropertiesAudiencesCreate](#analyticsadminpropertiesaudiencescreate) - Creates an Audience.
* [analyticsadminPropertiesAudiencesList](#analyticsadminpropertiesaudienceslist) - Lists Audiences on a property. Audiences created before 2020 may not be supported. Default audiences will not show filter definitions.
* [analyticsadminPropertiesBigQueryLinksList](#analyticsadminpropertiesbigquerylinkslist) - Lists BigQuery Links on a property.
* [analyticsadminPropertiesChannelGroupsCreate](#analyticsadminpropertieschannelgroupscreate) - Creates a ChannelGroup.
* [analyticsadminPropertiesChannelGroupsList](#analyticsadminpropertieschannelgroupslist) - Lists ChannelGroups on a property.
* [analyticsadminPropertiesConversionEventsCreate](#analyticsadminpropertiesconversioneventscreate) - Creates a conversion event with the specified attributes.
* [analyticsadminPropertiesConversionEventsList](#analyticsadminpropertiesconversioneventslist) - Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
* [analyticsadminPropertiesCreate](#analyticsadminpropertiescreate) - Creates an "GA4" property with the specified location and attributes.
* [analyticsadminPropertiesCreateConnectedSiteTag](#analyticsadminpropertiescreateconnectedsitetag) - Creates a connected site tag for a Universal Analytics property. You can create a maximum of 20 connected site tags per property. Note: This API cannot be used on GA4 properties.
* [analyticsadminPropertiesCustomDimensionsCreate](#analyticsadminpropertiescustomdimensionscreate) - Creates a CustomDimension.
* [analyticsadminPropertiesCustomDimensionsList](#analyticsadminpropertiescustomdimensionslist) - Lists CustomDimensions on a property.
* [analyticsadminPropertiesCustomMetricsArchive](#analyticsadminpropertiescustommetricsarchive) - Archives a CustomMetric on a property.
* [analyticsadminPropertiesCustomMetricsCreate](#analyticsadminpropertiescustommetricscreate) - Creates a CustomMetric.
* [analyticsadminPropertiesCustomMetricsList](#analyticsadminpropertiescustommetricslist) - Lists CustomMetrics on a property.
* [analyticsadminPropertiesDataStreamsCreate](#analyticsadminpropertiesdatastreamscreate) - Creates a DataStream.
* [analyticsadminPropertiesDataStreamsEventCreateRulesCreate](#analyticsadminpropertiesdatastreamseventcreaterulescreate) - Creates an EventCreateRule.
* [analyticsadminPropertiesDataStreamsEventCreateRulesList](#analyticsadminpropertiesdatastreamseventcreateruleslist) - Lists EventCreateRules on a web data stream.
* [analyticsadminPropertiesDataStreamsList](#analyticsadminpropertiesdatastreamslist) - Lists DataStreams on a property.
* [analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate](#analyticsadminpropertiesdatastreamsmeasurementprotocolsecretscreate) - Creates a measurement protocol secret.
* [analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList](#analyticsadminpropertiesdatastreamsmeasurementprotocolsecretslist) - Returns child MeasurementProtocolSecrets under the specified parent Property.
* [analyticsadminPropertiesDeleteConnectedSiteTag](#analyticsadminpropertiesdeleteconnectedsitetag) - Deletes a connected site tag for a Universal Analytics property. Note: this has no effect on GA4 properties.
* [analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApprove](#analyticsadminpropertiesdisplayvideo360advertiserlinkproposalsapprove) - Approves a DisplayVideo360AdvertiserLinkProposal. The DisplayVideo360AdvertiserLinkProposal will be deleted and a new DisplayVideo360AdvertiserLink will be created.
* [analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancel](#analyticsadminpropertiesdisplayvideo360advertiserlinkproposalscancel) - Cancels a DisplayVideo360AdvertiserLinkProposal. Cancelling can mean either: - Declining a proposal initiated from Display & Video 360 - Withdrawing a proposal initiated from Google Analytics After being cancelled, a proposal will eventually be deleted automatically.
* [analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreate](#analyticsadminpropertiesdisplayvideo360advertiserlinkproposalscreate) - Creates a DisplayVideo360AdvertiserLinkProposal.
* [analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsList](#analyticsadminpropertiesdisplayvideo360advertiserlinkproposalslist) - Lists DisplayVideo360AdvertiserLinkProposals on a property.
* [analyticsadminPropertiesDisplayVideo360AdvertiserLinksCreate](#analyticsadminpropertiesdisplayvideo360advertiserlinkscreate) - Creates a DisplayVideo360AdvertiserLink. This can only be utilized by users who have proper authorization both on the Google Analytics property and on the Display & Video 360 advertiser. Users who do not have access to the Display & Video 360 advertiser should instead seek to create a DisplayVideo360LinkProposal.
* [analyticsadminPropertiesDisplayVideo360AdvertiserLinksList](#analyticsadminpropertiesdisplayvideo360advertiserlinkslist) - Lists all DisplayVideo360AdvertiserLinks on a property.
* [analyticsadminPropertiesExpandedDataSetsCreate](#analyticsadminpropertiesexpandeddatasetscreate) - Creates a ExpandedDataSet.
* [analyticsadminPropertiesExpandedDataSetsList](#analyticsadminpropertiesexpandeddatasetslist) - Lists ExpandedDataSets on a property.
* [analyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOut](#analyticsadminpropertiesfetchautomatedga4configurationoptout) - Fetches the opt out status for the automated GA4 setup process for a UA property. Note: this has no effect on GA4 property.
* [analyticsadminPropertiesFetchConnectedGa4Property](#analyticsadminpropertiesfetchconnectedga4property) - Given a specified UA property, looks up the GA4 property connected to it. Note: this cannot be used with GA4 properties.
* [analyticsadminPropertiesFirebaseLinksCreate](#analyticsadminpropertiesfirebaselinkscreate) - Creates a FirebaseLink. Properties can have at most one FirebaseLink.
* [analyticsadminPropertiesFirebaseLinksList](#analyticsadminpropertiesfirebaselinkslist) - Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
* [analyticsadminPropertiesGoogleAdsLinksCreate](#analyticsadminpropertiesgoogleadslinkscreate) - Creates a GoogleAdsLink.
* [analyticsadminPropertiesGoogleAdsLinksList](#analyticsadminpropertiesgoogleadslinkslist) - Lists GoogleAdsLinks on a property.
* [analyticsadminPropertiesList](#analyticsadminpropertieslist) - Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
* [analyticsadminPropertiesListConnectedSiteTags](#analyticsadminpropertieslistconnectedsitetags) - Lists the connected site tags for a Universal Analytics property. A maximum of 20 connected site tags will be returned. Note: this has no effect on GA4 property.
* [analyticsadminPropertiesRunAccessReport](#analyticsadminpropertiesrunaccessreport) - Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).
* [analyticsadminPropertiesSearchAds360LinksCreate](#analyticsadminpropertiessearchads360linkscreate) - Creates a SearchAds360Link.
* [analyticsadminPropertiesSearchAds360LinksList](#analyticsadminpropertiessearchads360linkslist) - Lists all SearchAds360Links on a property.
* [analyticsadminPropertiesSetAutomatedGa4ConfigurationOptOut](#analyticsadminpropertiessetautomatedga4configurationoptout) - Sets the opt out status for the automated GA4 setup process for a UA property. Note: this has no effect on GA4 property.
* [analyticsadminPropertiesUserLinksAudit](#analyticsadminpropertiesuserlinksaudit) - Lists all user links on an account or property, including implicit ones that come from effective permissions granted by groups or organization admin roles. If a returned user link does not have direct permissions, they cannot be removed from the account or property directly with the DeleteUserLink command. They have to be removed from the group/etc that gives them permissions, which is currently only usable/discoverable in the GA or GMP UIs.
* [analyticsadminPropertiesUserLinksBatchCreate](#analyticsadminpropertiesuserlinksbatchcreate) - Creates information about multiple users' links to an account or property. This method is transactional. If any UserLink cannot be created, none of the UserLinks will be created.
* [analyticsadminPropertiesUserLinksBatchDelete](#analyticsadminpropertiesuserlinksbatchdelete) - Deletes information about multiple users' links to an account or property.
* [analyticsadminPropertiesUserLinksBatchGet](#analyticsadminpropertiesuserlinksbatchget) - Gets information about multiple users' links to an account or property.
* [analyticsadminPropertiesUserLinksBatchUpdate](#analyticsadminpropertiesuserlinksbatchupdate) - Updates information about multiple users' links to an account or property.
* [analyticsadminPropertiesUserLinksCreate](#analyticsadminpropertiesuserlinkscreate) - Creates a user link on an account or property. If the user with the specified email already has permissions on the account or property, then the user's existing permissions will be unioned with the permissions specified in the new UserLink.
* [analyticsadminPropertiesUserLinksDelete](#analyticsadminpropertiesuserlinksdelete) - Deletes a user link on an account or property.
* [analyticsadminPropertiesUserLinksGet](#analyticsadminpropertiesuserlinksget) - Gets information about a user's link to an account or property.
* [analyticsadminPropertiesUserLinksList](#analyticsadminpropertiesuserlinkslist) - Lists all user links on an account or property.
* [analyticsadminPropertiesUserLinksPatch](#analyticsadminpropertiesuserlinkspatch) - Updates a user link on an account or property.

## analyticsadminPropertiesAccessBindingsBatchCreate

Creates information about multiple access bindings to an account or property. This method is transactional. If any AccessBinding cannot be created, none of the AccessBindings will be created.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAccessBindingsBatchCreateRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAccessBindingsBatchCreateResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAccessBindingsBatchCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAccessBindingInput;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsRequestInput;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaCreateAccessBindingRequestInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesAccessBindingsBatchCreateRequest req = new AnalyticsadminPropertiesAccessBindingsBatchCreateRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                googleAnalyticsAdminV1alphaBatchCreateAccessBindingsRequestInput = new GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsRequestInput() {{
                    requests = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaCreateAccessBindingRequestInput[]{{
                        add(new GoogleAnalyticsAdminV1alphaCreateAccessBindingRequestInput() {{
                            accessBinding = new GoogleAnalyticsAdminV1alphaAccessBindingInput() {{
                                roles = new String[]{{
                                    add("dolores"),
                                    add("dolorem"),
                                    add("corporis"),
                                }};
                                user = "explicabo";
                            }};
                            parent = "nobis";
                        }}),
                        add(new GoogleAnalyticsAdminV1alphaCreateAccessBindingRequestInput() {{
                            accessBinding = new GoogleAnalyticsAdminV1alphaAccessBindingInput() {{
                                roles = new String[]{{
                                    add("omnis"),
                                    add("nemo"),
                                }};
                                user = "minima";
                            }};
                            parent = "excepturi";
                        }}),
                        add(new GoogleAnalyticsAdminV1alphaCreateAccessBindingRequestInput() {{
                            accessBinding = new GoogleAnalyticsAdminV1alphaAccessBindingInput() {{
                                roles = new String[]{{
                                    add("iure"),
                                }};
                                user = "culpa";
                            }};
                            parent = "doloribus";
                        }}),
                    }};
                }};;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "mollitia";
                fields = "dolorem";
                key = "culpa";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "repellat";
                uploadType = "mollitia";
                uploadProtocol = "occaecati";
            }};            

            AnalyticsadminPropertiesAccessBindingsBatchCreateResponse res = sdk.properties.analyticsadminPropertiesAccessBindingsBatchCreate(req, new AnalyticsadminPropertiesAccessBindingsBatchCreateSecurity("numquam", "commodi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesAccessBindingsBatchDelete

Deletes information about multiple users' links to an account or property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAccessBindingsBatchDeleteRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAccessBindingsBatchDeleteResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAccessBindingsBatchDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaBatchDeleteAccessBindingsRequest;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaDeleteAccessBindingRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesAccessBindingsBatchDeleteRequest req = new AnalyticsadminPropertiesAccessBindingsBatchDeleteRequest("quam") {{
                dollarXgafv = XgafvEnum.ONE;
                googleAnalyticsAdminV1alphaBatchDeleteAccessBindingsRequest = new GoogleAnalyticsAdminV1alphaBatchDeleteAccessBindingsRequest() {{
                    requests = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaDeleteAccessBindingRequest[]{{
                        add(new GoogleAnalyticsAdminV1alphaDeleteAccessBindingRequest() {{
                            name = "Miss Eugene Hauck";
                        }}),
                    }};
                }};;
                accessToken = "enim";
                alt = AltEnum.JSON;
                callback = "quo";
                fields = "sequi";
                key = "tenetur";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "id";
                uploadType = "possimus";
                uploadProtocol = "aut";
            }};            

            AnalyticsadminPropertiesAccessBindingsBatchDeleteResponse res = sdk.properties.analyticsadminPropertiesAccessBindingsBatchDelete(req, new AnalyticsadminPropertiesAccessBindingsBatchDeleteSecurity("quasi", "error") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesAccessBindingsBatchGet

Gets information about multiple access bindings to an account or property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAccessBindingsBatchGetRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAccessBindingsBatchGetResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAccessBindingsBatchGetSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAccessBindingsBatchGetSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAccessBindingsBatchGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesAccessBindingsBatchGetRequest req = new AnalyticsadminPropertiesAccessBindingsBatchGetRequest("temporibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "voluptatibus";
                fields = "vero";
                key = "nihil";
                names = new String[]{{
                    add("voluptatibus"),
                    add("ipsa"),
                    add("omnis"),
                }};
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "perferendis";
                uploadProtocol = "doloremque";
            }};            

            AnalyticsadminPropertiesAccessBindingsBatchGetResponse res = sdk.properties.analyticsadminPropertiesAccessBindingsBatchGet(req, new AnalyticsadminPropertiesAccessBindingsBatchGetSecurity() {{
                option1 = new AnalyticsadminPropertiesAccessBindingsBatchGetSecurityOption1("reprehenderit", "ut") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesAccessBindingsBatchUpdate

Updates information about multiple access bindings to an account or property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAccessBindingsBatchUpdateRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAccessBindingsBatchUpdateResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAccessBindingsBatchUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAccessBindingInput;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsRequestInput;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaUpdateAccessBindingRequestInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesAccessBindingsBatchUpdateRequest req = new AnalyticsadminPropertiesAccessBindingsBatchUpdateRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                googleAnalyticsAdminV1alphaBatchUpdateAccessBindingsRequestInput = new GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsRequestInput() {{
                    requests = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaUpdateAccessBindingRequestInput[]{{
                        add(new GoogleAnalyticsAdminV1alphaUpdateAccessBindingRequestInput() {{
                            accessBinding = new GoogleAnalyticsAdminV1alphaAccessBindingInput() {{
                                roles = new String[]{{
                                    add("iusto"),
                                    add("dicta"),
                                }};
                                user = "harum";
                            }};
                        }}),
                        add(new GoogleAnalyticsAdminV1alphaUpdateAccessBindingRequestInput() {{
                            accessBinding = new GoogleAnalyticsAdminV1alphaAccessBindingInput() {{
                                roles = new String[]{{
                                    add("accusamus"),
                                    add("commodi"),
                                }};
                                user = "repudiandae";
                            }};
                        }}),
                    }};
                }};;
                accessToken = "quae";
                alt = AltEnum.JSON;
                callback = "quidem";
                fields = "molestias";
                key = "excepturi";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "praesentium";
                uploadProtocol = "rem";
            }};            

            AnalyticsadminPropertiesAccessBindingsBatchUpdateResponse res = sdk.properties.analyticsadminPropertiesAccessBindingsBatchUpdate(req, new AnalyticsadminPropertiesAccessBindingsBatchUpdateSecurity("voluptates", "quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesAccessBindingsCreate

Creates an access binding on an account or property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAccessBindingsCreateRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAccessBindingsCreateResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAccessBindingsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAccessBindingInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesAccessBindingsCreateRequest req = new AnalyticsadminPropertiesAccessBindingsCreateRequest("repudiandae") {{
                dollarXgafv = XgafvEnum.TWO;
                googleAnalyticsAdminV1alphaAccessBindingInput = new GoogleAnalyticsAdminV1alphaAccessBindingInput() {{
                    roles = new String[]{{
                        add("itaque"),
                    }};
                    user = "incidunt";
                }};;
                accessToken = "enim";
                alt = AltEnum.JSON;
                callback = "est";
                fields = "quibusdam";
                key = "explicabo";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "quibusdam";
                uploadProtocol = "labore";
            }};            

            AnalyticsadminPropertiesAccessBindingsCreateResponse res = sdk.properties.analyticsadminPropertiesAccessBindingsCreate(req, new AnalyticsadminPropertiesAccessBindingsCreateSecurity("modi", "qui") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1alphaAccessBinding != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesAccessBindingsList

Lists all access bindings on an account or property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAccessBindingsListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAccessBindingsListResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAccessBindingsListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAccessBindingsListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAccessBindingsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesAccessBindingsListRequest req = new AnalyticsadminPropertiesAccessBindingsListRequest("aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quos";
                alt = AltEnum.JSON;
                callback = "magni";
                fields = "assumenda";
                key = "ipsam";
                oauthToken = "alias";
                pageSize = 146441L;
                pageToken = "dolorum";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "tempora";
                uploadProtocol = "facilis";
            }};            

            AnalyticsadminPropertiesAccessBindingsListResponse res = sdk.properties.analyticsadminPropertiesAccessBindingsList(req, new AnalyticsadminPropertiesAccessBindingsListSecurity() {{
                option1 = new AnalyticsadminPropertiesAccessBindingsListSecurityOption1("tempore", "labore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1alphaListAccessBindingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesAcknowledgeUserDataCollection

Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest req = new AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                googleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionRequest = new GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionRequest() {{
                    acknowledgement = "non";
                }};;
                accessToken = "eligendi";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "provident";
                key = "necessitatibus";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "dolor";
                uploadProtocol = "debitis";
            }};            

            AnalyticsadminPropertiesAcknowledgeUserDataCollectionResponse res = sdk.properties.analyticsadminPropertiesAcknowledgeUserDataCollection(req, new AnalyticsadminPropertiesAcknowledgeUserDataCollectionSecurity("a", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesAudiencesCreate

Creates an Audience.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAudiencesCreateRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAudiencesCreateResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAudiencesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceEventFilter;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceEventTrigger;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterClause;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceInput;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilter;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceSimpleFilter;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceSimpleFilterScopeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesAudiencesCreateRequest req = new AnalyticsadminPropertiesAudiencesCreateRequest("in") {{
                dollarXgafv = XgafvEnum.ONE;
                googleAnalyticsAdminV1alphaAudienceInput = new GoogleAnalyticsAdminV1alphaAudienceInput() {{
                    description = "illum";
                    displayName = "maiores";
                    eventTrigger = new GoogleAnalyticsAdminV1alphaAudienceEventTrigger() {{
                        eventName = "rerum";
                        logCondition = GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnum.LOG_CONDITION_UNSPECIFIED;
                    }};;
                    exclusionDurationMode = GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum.AUDIENCE_EXCLUSION_DURATION_MODE_UNSPECIFIED;
                    filterClauses = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterClause[]{{
                        add(new GoogleAnalyticsAdminV1alphaAudienceFilterClause() {{
                            clauseType = GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum.EXCLUDE;
                            sequenceFilter = new GoogleAnalyticsAdminV1alphaAudienceSequenceFilter() {{
                                scope = GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum.AUDIENCE_FILTER_SCOPE_WITHIN_SAME_EVENT;
                                sequenceMaximumDuration = "aliquid";
                                sequenceSteps = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep[]{{
                                    add(new GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep() {{
                                        constraintDuration = "accusamus";
                                        filterExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{
                                            andGroup = new GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList() {{
                                                filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression[]{{
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                }};
                                            }};
                                            dimensionOrMetricFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter() {{
                                                atAnyPointInTime = false;
                                                betweenFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter() {{
                                                    fromValue = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 5812.73;
                                                        int64Value = "enim";
                                                    }};
                                                    toValue = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 8817.36;
                                                        int64Value = "delectus";
                                                    }};
                                                }};
                                                fieldName = "quidem";
                                                inAnyNDayPeriod = 588465;
                                                inListFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter() {{
                                                    caseSensitive = false;
                                                    values = new String[]{{
                                                        add("id"),
                                                        add("blanditiis"),
                                                        add("deleniti"),
                                                    }};
                                                }};
                                                numericFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter() {{
                                                    operation = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnum.GREATER_THAN;
                                                    value = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 2305.33;
                                                        int64Value = "deserunt";
                                                    }};
                                                }};
                                                stringFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter() {{
                                                    caseSensitive = false;
                                                    matchType = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnum.BEGINS_WITH;
                                                    value = "vel";
                                                }};
                                            }};
                                            eventFilter = new GoogleAnalyticsAdminV1alphaAudienceEventFilter() {{
                                                eventName = "natus";
                                                eventParameterFilterExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}};
                                            }};
                                            notExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}};
                                            orGroup = new GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList() {{
                                                filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression[]{{
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                }};
                                            }};
                                        }};
                                        immediatelyFollows = false;
                                        scope = GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum.AUDIENCE_FILTER_SCOPE_WITHIN_SAME_EVENT;
                                    }}),
                                    add(new GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep() {{
                                        constraintDuration = "perferendis";
                                        filterExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{
                                            andGroup = new GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList() {{
                                                filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression[]{{
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                }};
                                            }};
                                            dimensionOrMetricFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter() {{
                                                atAnyPointInTime = false;
                                                betweenFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter() {{
                                                    fromValue = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 3015.75;
                                                        int64Value = "distinctio";
                                                    }};
                                                    toValue = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 6601.74;
                                                        int64Value = "labore";
                                                    }};
                                                }};
                                                fieldName = "labore";
                                                inAnyNDayPeriod = 383462;
                                                inListFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter() {{
                                                    caseSensitive = false;
                                                    values = new String[]{{
                                                        add("nobis"),
                                                        add("eum"),
                                                        add("vero"),
                                                    }};
                                                }};
                                                numericFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter() {{
                                                    operation = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnum.OPERATION_UNSPECIFIED;
                                                    value = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 1028.63;
                                                        int64Value = "magnam";
                                                    }};
                                                }};
                                                stringFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter() {{
                                                    caseSensitive = false;
                                                    matchType = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnum.MATCH_TYPE_UNSPECIFIED;
                                                    value = "excepturi";
                                                }};
                                            }};
                                            eventFilter = new GoogleAnalyticsAdminV1alphaAudienceEventFilter() {{
                                                eventName = "ullam";
                                                eventParameterFilterExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}};
                                            }};
                                            notExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}};
                                            orGroup = new GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList() {{
                                                filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression[]{{
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                }};
                                            }};
                                        }};
                                        immediatelyFollows = false;
                                        scope = GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum.AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION;
                                    }}),
                                    add(new GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep() {{
                                        constraintDuration = "sint";
                                        filterExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{
                                            andGroup = new GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList() {{
                                                filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression[]{{
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                }};
                                            }};
                                            dimensionOrMetricFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter() {{
                                                atAnyPointInTime = false;
                                                betweenFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter() {{
                                                    fromValue = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 6532.01;
                                                        int64Value = "reiciendis";
                                                    }};
                                                    toValue = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 6521.03;
                                                        int64Value = "ad";
                                                    }};
                                                }};
                                                fieldName = "eum";
                                                inAnyNDayPeriod = 221262;
                                                inListFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter() {{
                                                    caseSensitive = false;
                                                    values = new String[]{{
                                                        add("odit"),
                                                        add("nemo"),
                                                        add("quasi"),
                                                        add("iure"),
                                                    }};
                                                }};
                                                numericFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter() {{
                                                    operation = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnum.GREATER_THAN;
                                                    value = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 8919.24;
                                                        int64Value = "eius";
                                                    }};
                                                }};
                                                stringFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter() {{
                                                    caseSensitive = false;
                                                    matchType = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnum.CONTAINS;
                                                    value = "deleniti";
                                                }};
                                            }};
                                            eventFilter = new GoogleAnalyticsAdminV1alphaAudienceEventFilter() {{
                                                eventName = "facilis";
                                                eventParameterFilterExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}};
                                            }};
                                            notExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}};
                                            orGroup = new GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList() {{
                                                filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression[]{{
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                }};
                                            }};
                                        }};
                                        immediatelyFollows = false;
                                        scope = GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum.AUDIENCE_FILTER_SCOPE_UNSPECIFIED;
                                    }}),
                                }};
                            }};
                            simpleFilter = new GoogleAnalyticsAdminV1alphaAudienceSimpleFilter() {{
                                filterExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{
                                    andGroup = new GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList() {{
                                        filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression[]{{
                                            add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                        }};
                                    }};
                                    dimensionOrMetricFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter() {{
                                        atAnyPointInTime = false;
                                        betweenFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter() {{
                                            fromValue = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                doubleValue = 9194.83;
                                                int64Value = "ullam";
                                            }};
                                            toValue = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                doubleValue = 7142.42;
                                                int64Value = "nihil";
                                            }};
                                        }};
                                        fieldName = "repellat";
                                        inAnyNDayPeriod = 841140;
                                        inListFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter() {{
                                            caseSensitive = false;
                                            values = new String[]{{
                                                add("saepe"),
                                            }};
                                        }};
                                        numericFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter() {{
                                            operation = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnum.GREATER_THAN;
                                            value = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                doubleValue = 375.59;
                                                int64Value = "consequuntur";
                                            }};
                                        }};
                                        stringFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter() {{
                                            caseSensitive = false;
                                            matchType = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnum.ENDS_WITH;
                                            value = "natus";
                                        }};
                                    }};
                                    eventFilter = new GoogleAnalyticsAdminV1alphaAudienceEventFilter() {{
                                        eventName = "magni";
                                        eventParameterFilterExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}};
                                    }};
                                    notExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}};
                                    orGroup = new GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList() {{
                                        filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression[]{{
                                            add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                        }};
                                    }};
                                }};
                                scope = GoogleAnalyticsAdminV1alphaAudienceSimpleFilterScopeEnum.AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS;
                            }};
                        }}),
                        add(new GoogleAnalyticsAdminV1alphaAudienceFilterClause() {{
                            clauseType = GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum.EXCLUDE;
                            sequenceFilter = new GoogleAnalyticsAdminV1alphaAudienceSequenceFilter() {{
                                scope = GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum.AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS;
                                sequenceMaximumDuration = "maxime";
                                sequenceSteps = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep[]{{
                                    add(new GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep() {{
                                        constraintDuration = "excepturi";
                                        filterExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{
                                            andGroup = new GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList() {{
                                                filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression[]{{
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                }};
                                            }};
                                            dimensionOrMetricFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter() {{
                                                atAnyPointInTime = false;
                                                betweenFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter() {{
                                                    fromValue = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 4071.83;
                                                        int64Value = "accusantium";
                                                    }};
                                                    toValue = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 691.67;
                                                        int64Value = "maiores";
                                                    }};
                                                }};
                                                fieldName = "quidem";
                                                inAnyNDayPeriod = 373291;
                                                inListFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter() {{
                                                    caseSensitive = false;
                                                    values = new String[]{{
                                                        add("autem"),
                                                        add("nam"),
                                                    }};
                                                }};
                                                numericFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter() {{
                                                    operation = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnum.OPERATION_UNSPECIFIED;
                                                    value = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 8663.83;
                                                        int64Value = "nemo";
                                                    }};
                                                }};
                                                stringFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter() {{
                                                    caseSensitive = false;
                                                    matchType = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnum.FULL_REGEXP;
                                                    value = "perferendis";
                                                }};
                                            }};
                                            eventFilter = new GoogleAnalyticsAdminV1alphaAudienceEventFilter() {{
                                                eventName = "fugiat";
                                                eventParameterFilterExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}};
                                            }};
                                            notExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}};
                                            orGroup = new GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList() {{
                                                filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression[]{{
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                }};
                                            }};
                                        }};
                                        immediatelyFollows = false;
                                        scope = GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum.AUDIENCE_FILTER_SCOPE_UNSPECIFIED;
                                    }}),
                                    add(new GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep() {{
                                        constraintDuration = "cumque";
                                        filterExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{
                                            andGroup = new GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList() {{
                                                filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression[]{{
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                }};
                                            }};
                                            dimensionOrMetricFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter() {{
                                                atAnyPointInTime = false;
                                                betweenFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter() {{
                                                    fromValue = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 9441.24;
                                                        int64Value = "libero";
                                                    }};
                                                    toValue = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 7499.99;
                                                        int64Value = "dolores";
                                                    }};
                                                }};
                                                fieldName = "quis";
                                                inAnyNDayPeriod = 521037;
                                                inListFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter() {{
                                                    caseSensitive = false;
                                                    values = new String[]{{
                                                        add("eaque"),
                                                        add("quis"),
                                                    }};
                                                }};
                                                numericFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter() {{
                                                    operation = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnum.OPERATION_UNSPECIFIED;
                                                    value = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 1794.9;
                                                        int64Value = "perferendis";
                                                    }};
                                                }};
                                                stringFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter() {{
                                                    caseSensitive = false;
                                                    matchType = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnum.EXACT;
                                                    value = "minus";
                                                }};
                                            }};
                                            eventFilter = new GoogleAnalyticsAdminV1alphaAudienceEventFilter() {{
                                                eventName = "quam";
                                                eventParameterFilterExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}};
                                            }};
                                            notExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}};
                                            orGroup = new GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList() {{
                                                filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression[]{{
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                }};
                                            }};
                                        }};
                                        immediatelyFollows = false;
                                        scope = GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum.AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS;
                                    }}),
                                }};
                            }};
                            simpleFilter = new GoogleAnalyticsAdminV1alphaAudienceSimpleFilter() {{
                                filterExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{
                                    andGroup = new GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList() {{
                                        filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression[]{{
                                            add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                            add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                        }};
                                    }};
                                    dimensionOrMetricFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter() {{
                                        atAnyPointInTime = false;
                                        betweenFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter() {{
                                            fromValue = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                doubleValue = 9441.2;
                                                int64Value = "recusandae";
                                            }};
                                            toValue = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                doubleValue = 6082.53;
                                                int64Value = "facilis";
                                            }};
                                        }};
                                        fieldName = "perspiciatis";
                                        inAnyNDayPeriod = 31838;
                                        inListFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter() {{
                                            caseSensitive = false;
                                            values = new String[]{{
                                                add("consequuntur"),
                                                add("blanditiis"),
                                                add("error"),
                                                add("eaque"),
                                            }};
                                        }};
                                        numericFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter() {{
                                            operation = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnum.LESS_THAN;
                                            value = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                doubleValue = 6990.98;
                                                int64Value = "adipisci";
                                            }};
                                        }};
                                        stringFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter() {{
                                            caseSensitive = false;
                                            matchType = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnum.FULL_REGEXP;
                                            value = "earum";
                                        }};
                                    }};
                                    eventFilter = new GoogleAnalyticsAdminV1alphaAudienceEventFilter() {{
                                        eventName = "modi";
                                        eventParameterFilterExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}};
                                    }};
                                    notExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}};
                                    orGroup = new GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList() {{
                                        filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression[]{{
                                            add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                            add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                            add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                        }};
                                    }};
                                }};
                                scope = GoogleAnalyticsAdminV1alphaAudienceSimpleFilterScopeEnum.AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION;
                            }};
                        }}),
                        add(new GoogleAnalyticsAdminV1alphaAudienceFilterClause() {{
                            clauseType = GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum.INCLUDE;
                            sequenceFilter = new GoogleAnalyticsAdminV1alphaAudienceSequenceFilter() {{
                                scope = GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum.AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS;
                                sequenceMaximumDuration = "provident";
                                sequenceSteps = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep[]{{
                                    add(new GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep() {{
                                        constraintDuration = "libero";
                                        filterExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{
                                            andGroup = new GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList() {{
                                                filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression[]{{
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                }};
                                            }};
                                            dimensionOrMetricFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter() {{
                                                atAnyPointInTime = false;
                                                betweenFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter() {{
                                                    fromValue = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 3119.45;
                                                        int64Value = "quos";
                                                    }};
                                                    toValue = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 3982.21;
                                                        int64Value = "dolorem";
                                                    }};
                                                }};
                                                fieldName = "dolorem";
                                                inAnyNDayPeriod = 222443;
                                                inListFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter() {{
                                                    caseSensitive = false;
                                                    values = new String[]{{
                                                        add("ipsum"),
                                                    }};
                                                }};
                                                numericFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter() {{
                                                    operation = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnum.GREATER_THAN;
                                                    value = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 5695.74;
                                                        int64Value = "cum";
                                                    }};
                                                }};
                                                stringFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter() {{
                                                    caseSensitive = false;
                                                    matchType = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnum.BEGINS_WITH;
                                                    value = "dignissimos";
                                                }};
                                            }};
                                            eventFilter = new GoogleAnalyticsAdminV1alphaAudienceEventFilter() {{
                                                eventName = "reiciendis";
                                                eventParameterFilterExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}};
                                            }};
                                            notExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}};
                                            orGroup = new GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList() {{
                                                filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression[]{{
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                }};
                                            }};
                                        }};
                                        immediatelyFollows = false;
                                        scope = GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum.AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION;
                                    }}),
                                    add(new GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep() {{
                                        constraintDuration = "numquam";
                                        filterExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{
                                            andGroup = new GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList() {{
                                                filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression[]{{
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                }};
                                            }};
                                            dimensionOrMetricFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter() {{
                                                atAnyPointInTime = false;
                                                betweenFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter() {{
                                                    fromValue = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 580.29;
                                                        int64Value = "ipsa";
                                                    }};
                                                    toValue = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 4344.17;
                                                        int64Value = "odio";
                                                    }};
                                                }};
                                                fieldName = "quaerat";
                                                inAnyNDayPeriod = 881005;
                                                inListFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter() {{
                                                    caseSensitive = false;
                                                    values = new String[]{{
                                                        add("voluptatibus"),
                                                        add("voluptas"),
                                                        add("natus"),
                                                    }};
                                                }};
                                                numericFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter() {{
                                                    operation = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnum.OPERATION_UNSPECIFIED;
                                                    value = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 5424.99;
                                                        int64Value = "sit";
                                                    }};
                                                }};
                                                stringFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter() {{
                                                    caseSensitive = false;
                                                    matchType = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnum.FULL_REGEXP;
                                                    value = "ab";
                                                }};
                                            }};
                                            eventFilter = new GoogleAnalyticsAdminV1alphaAudienceEventFilter() {{
                                                eventName = "soluta";
                                                eventParameterFilterExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}};
                                            }};
                                            notExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}};
                                            orGroup = new GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList() {{
                                                filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression[]{{
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                }};
                                            }};
                                        }};
                                        immediatelyFollows = false;
                                        scope = GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum.AUDIENCE_FILTER_SCOPE_WITHIN_SAME_EVENT;
                                    }}),
                                    add(new GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep() {{
                                        constraintDuration = "voluptate";
                                        filterExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{
                                            andGroup = new GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList() {{
                                                filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression[]{{
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                }};
                                            }};
                                            dimensionOrMetricFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter() {{
                                                atAnyPointInTime = false;
                                                betweenFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter() {{
                                                    fromValue = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 5365.79;
                                                        int64Value = "omnis";
                                                    }};
                                                    toValue = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 8966.72;
                                                        int64Value = "distinctio";
                                                    }};
                                                }};
                                                fieldName = "asperiores";
                                                inAnyNDayPeriod = 469497;
                                                inListFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter() {{
                                                    caseSensitive = false;
                                                    values = new String[]{{
                                                        add("voluptate"),
                                                    }};
                                                }};
                                                numericFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter() {{
                                                    operation = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnum.LESS_THAN;
                                                    value = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 9064.18;
                                                        int64Value = "eius";
                                                    }};
                                                }};
                                                stringFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter() {{
                                                    caseSensitive = false;
                                                    matchType = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnum.MATCH_TYPE_UNSPECIFIED;
                                                    value = "perferendis";
                                                }};
                                            }};
                                            eventFilter = new GoogleAnalyticsAdminV1alphaAudienceEventFilter() {{
                                                eventName = "amet";
                                                eventParameterFilterExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}};
                                            }};
                                            notExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}};
                                            orGroup = new GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList() {{
                                                filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression[]{{
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                }};
                                            }};
                                        }};
                                        immediatelyFollows = false;
                                        scope = GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum.AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS;
                                    }}),
                                    add(new GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep() {{
                                        constraintDuration = "ad";
                                        filterExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{
                                            andGroup = new GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList() {{
                                                filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression[]{{
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                }};
                                            }};
                                            dimensionOrMetricFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter() {{
                                                atAnyPointInTime = false;
                                                betweenFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter() {{
                                                    fromValue = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 3834.64;
                                                        int64Value = "deserunt";
                                                    }};
                                                    toValue = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 5883.17;
                                                        int64Value = "minima";
                                                    }};
                                                }};
                                                fieldName = "repellendus";
                                                inAnyNDayPeriod = 519711;
                                                inListFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter() {{
                                                    caseSensitive = false;
                                                    values = new String[]{{
                                                        add("alias"),
                                                        add("at"),
                                                        add("quaerat"),
                                                    }};
                                                }};
                                                numericFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter() {{
                                                    operation = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnum.EQUAL;
                                                    value = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 4254.51;
                                                        int64Value = "quod";
                                                    }};
                                                }};
                                                stringFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter() {{
                                                    caseSensitive = false;
                                                    matchType = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnum.FULL_REGEXP;
                                                    value = "qui";
                                                }};
                                            }};
                                            eventFilter = new GoogleAnalyticsAdminV1alphaAudienceEventFilter() {{
                                                eventName = "dolorum";
                                                eventParameterFilterExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}};
                                            }};
                                            notExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}};
                                            orGroup = new GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList() {{
                                                filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression[]{{
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                }};
                                            }};
                                        }};
                                        immediatelyFollows = false;
                                        scope = GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum.AUDIENCE_FILTER_SCOPE_WITHIN_SAME_EVENT;
                                    }}),
                                }};
                            }};
                            simpleFilter = new GoogleAnalyticsAdminV1alphaAudienceSimpleFilter() {{
                                filterExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{
                                    andGroup = new GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList() {{
                                        filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression[]{{
                                            add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                            add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                            add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                        }};
                                    }};
                                    dimensionOrMetricFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter() {{
                                        atAnyPointInTime = false;
                                        betweenFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter() {{
                                            fromValue = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                doubleValue = 4834.09;
                                                int64Value = "ipsum";
                                            }};
                                            toValue = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                doubleValue = 7887.4;
                                                int64Value = "tenetur";
                                            }};
                                        }};
                                        fieldName = "amet";
                                        inAnyNDayPeriod = 730856;
                                        inListFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter() {{
                                            caseSensitive = false;
                                            values = new String[]{{
                                                add("numquam"),
                                                add("enim"),
                                                add("dolorem"),
                                                add("sapiente"),
                                            }};
                                        }};
                                        numericFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter() {{
                                            operation = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnum.LESS_THAN;
                                            value = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                doubleValue = 4717.52;
                                                int64Value = "sit";
                                            }};
                                        }};
                                        stringFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter() {{
                                            caseSensitive = false;
                                            matchType = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnum.CONTAINS;
                                            value = "neque";
                                        }};
                                    }};
                                    eventFilter = new GoogleAnalyticsAdminV1alphaAudienceEventFilter() {{
                                        eventName = "sed";
                                        eventParameterFilterExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}};
                                    }};
                                    notExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}};
                                    orGroup = new GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList() {{
                                        filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression[]{{
                                            add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                            add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                        }};
                                    }};
                                }};
                                scope = GoogleAnalyticsAdminV1alphaAudienceSimpleFilterScopeEnum.AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION;
                            }};
                        }}),
                        add(new GoogleAnalyticsAdminV1alphaAudienceFilterClause() {{
                            clauseType = GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum.INCLUDE;
                            sequenceFilter = new GoogleAnalyticsAdminV1alphaAudienceSequenceFilter() {{
                                scope = GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum.AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION;
                                sequenceMaximumDuration = "quam";
                                sequenceSteps = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep[]{{
                                    add(new GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep() {{
                                        constraintDuration = "incidunt";
                                        filterExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{
                                            andGroup = new GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList() {{
                                                filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression[]{{
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                }};
                                            }};
                                            dimensionOrMetricFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter() {{
                                                atAnyPointInTime = false;
                                                betweenFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter() {{
                                                    fromValue = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 5867.84;
                                                        int64Value = "maxime";
                                                    }};
                                                    toValue = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 8638.56;
                                                        int64Value = "soluta";
                                                    }};
                                                }};
                                                fieldName = "dicta";
                                                inAnyNDayPeriod = 674848;
                                                inListFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter() {{
                                                    caseSensitive = false;
                                                    values = new String[]{{
                                                        add("incidunt"),
                                                        add("aspernatur"),
                                                        add("dolores"),
                                                    }};
                                                }};
                                                numericFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter() {{
                                                    operation = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnum.LESS_THAN;
                                                    value = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                        doubleValue = 7044.74;
                                                        int64Value = "aliquid";
                                                    }};
                                                }};
                                                stringFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter() {{
                                                    caseSensitive = false;
                                                    matchType = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnum.BEGINS_WITH;
                                                    value = "molestias";
                                                }};
                                            }};
                                            eventFilter = new GoogleAnalyticsAdminV1alphaAudienceEventFilter() {{
                                                eventName = "temporibus";
                                                eventParameterFilterExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}};
                                            }};
                                            notExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}};
                                            orGroup = new GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList() {{
                                                filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression[]{{
                                                    add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                                }};
                                            }};
                                        }};
                                        immediatelyFollows = false;
                                        scope = GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum.AUDIENCE_FILTER_SCOPE_UNSPECIFIED;
                                    }}),
                                }};
                            }};
                            simpleFilter = new GoogleAnalyticsAdminV1alphaAudienceSimpleFilter() {{
                                filterExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{
                                    andGroup = new GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList() {{
                                        filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression[]{{
                                            add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                        }};
                                    }};
                                    dimensionOrMetricFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter() {{
                                        atAnyPointInTime = false;
                                        betweenFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter() {{
                                            fromValue = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                doubleValue = 1649.59;
                                                int64Value = "odio";
                                            }};
                                            toValue = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                doubleValue = 1248.33;
                                                int64Value = "ullam";
                                            }};
                                        }};
                                        fieldName = "nam";
                                        inAnyNDayPeriod = 940432;
                                        inListFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter() {{
                                            caseSensitive = false;
                                            values = new String[]{{
                                                add("cumque"),
                                            }};
                                        }};
                                        numericFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter() {{
                                            operation = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnum.LESS_THAN;
                                            value = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue() {{
                                                doubleValue = 7486.64;
                                                int64Value = "et";
                                            }};
                                        }};
                                        stringFilter = new GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter() {{
                                            caseSensitive = false;
                                            matchType = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnum.FULL_REGEXP;
                                            value = "ipsum";
                                        }};
                                    }};
                                    eventFilter = new GoogleAnalyticsAdminV1alphaAudienceEventFilter() {{
                                        eventName = "veritatis";
                                        eventParameterFilterExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}};
                                    }};
                                    notExpression = new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}};
                                    orGroup = new GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList() {{
                                        filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression[]{{
                                            add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                            add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                            add(new GoogleAnalyticsAdminV1alphaAudienceFilterExpression() {{}}),
                                        }};
                                    }};
                                }};
                                scope = GoogleAnalyticsAdminV1alphaAudienceSimpleFilterScopeEnum.AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION;
                            }};
                        }}),
                    }};
                    membershipDurationDays = 731694;
                }};;
                accessToken = "cupiditate";
                alt = AltEnum.JSON;
                callback = "delectus";
                fields = "dolorem";
                key = "dolore";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "dolorum";
                uploadProtocol = "architecto";
            }};            

            AnalyticsadminPropertiesAudiencesCreateResponse res = sdk.properties.analyticsadminPropertiesAudiencesCreate(req, new AnalyticsadminPropertiesAudiencesCreateSecurity("quae", "aut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1alphaAudience != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesAudiencesList

Lists Audiences on a property. Audiences created before 2020 may not be supported. Default audiences will not show filter definitions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAudiencesListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAudiencesListResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAudiencesListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAudiencesListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAudiencesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesAudiencesListRequest req = new AnalyticsadminPropertiesAudiencesListRequest("quas") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequatur";
                alt = AltEnum.PROTO;
                callback = "repellendus";
                fields = "porro";
                key = "doloribus";
                oauthToken = "ut";
                pageSize = 703495L;
                pageToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "quae";
                uploadProtocol = "laudantium";
            }};            

            AnalyticsadminPropertiesAudiencesListResponse res = sdk.properties.analyticsadminPropertiesAudiencesList(req, new AnalyticsadminPropertiesAudiencesListSecurity() {{
                option1 = new AnalyticsadminPropertiesAudiencesListSecurityOption1("odio", "occaecati") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1alphaListAudiencesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesBigQueryLinksList

Lists BigQuery Links on a property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesBigQueryLinksListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesBigQueryLinksListResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesBigQueryLinksListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesBigQueryLinksListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesBigQueryLinksListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesBigQueryLinksListRequest req = new AnalyticsadminPropertiesBigQueryLinksListRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vero";
                alt = AltEnum.MEDIA;
                callback = "quis";
                fields = "ipsum";
                key = "delectus";
                oauthToken = "voluptate";
                pageSize = 231701L;
                pageToken = "vero";
                prettyPrint = false;
                quotaUser = "tenetur";
                uploadType = "dignissimos";
                uploadProtocol = "hic";
            }};            

            AnalyticsadminPropertiesBigQueryLinksListResponse res = sdk.properties.analyticsadminPropertiesBigQueryLinksList(req, new AnalyticsadminPropertiesBigQueryLinksListSecurity() {{
                option1 = new AnalyticsadminPropertiesBigQueryLinksListSecurityOption1("distinctio", "quod") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1alphaListBigQueryLinksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesChannelGroupsCreate

Creates a ChannelGroup.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesChannelGroupsCreateRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesChannelGroupsCreateResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesChannelGroupsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaChannelGroupFilter;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterExpressionList;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterInListFilter;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterStringFilter;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterStringFilterMatchTypeEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaChannelGroupInput;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaGroupingRule;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesChannelGroupsCreateRequest req = new AnalyticsadminPropertiesChannelGroupsCreateRequest("odio") {{
                dollarXgafv = XgafvEnum.TWO;
                googleAnalyticsAdminV1alphaChannelGroupInput = new GoogleAnalyticsAdminV1alphaChannelGroupInput() {{
                    description = "facilis";
                    displayName = "vero";
                    groupingRule = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaGroupingRule[]{{
                        add(new GoogleAnalyticsAdminV1alphaGroupingRule() {{
                            displayName = "dolore";
                            expression = new GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression() {{
                                andGroup = new GoogleAnalyticsAdminV1alphaChannelGroupFilterExpressionList() {{
                                    filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression[]{{
                                        add(new GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression() {{}}),
                                        add(new GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression() {{}}),
                                        add(new GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression() {{}}),
                                        add(new GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression() {{}}),
                                    }};
                                }};
                                filter = new GoogleAnalyticsAdminV1alphaChannelGroupFilter() {{
                                    fieldName = "illum";
                                    inListFilter = new GoogleAnalyticsAdminV1alphaChannelGroupFilterInListFilter() {{
                                        values = new String[]{{
                                            add("natus"),
                                        }};
                                    }};
                                    stringFilter = new GoogleAnalyticsAdminV1alphaChannelGroupFilterStringFilter() {{
                                        matchType = GoogleAnalyticsAdminV1alphaChannelGroupFilterStringFilterMatchTypeEnum.FULL_REGEXP;
                                        value = "aut";
                                    }};
                                }};
                                notExpression = new GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression() {{}};
                                orGroup = new GoogleAnalyticsAdminV1alphaChannelGroupFilterExpressionList() {{
                                    filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression[]{{
                                        add(new GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression() {{}}),
                                        add(new GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression() {{}}),
                                        add(new GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression() {{}}),
                                        add(new GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression() {{}}),
                                    }};
                                }};
                            }};
                        }}),
                        add(new GoogleAnalyticsAdminV1alphaGroupingRule() {{
                            displayName = "exercitationem";
                            expression = new GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression() {{
                                andGroup = new GoogleAnalyticsAdminV1alphaChannelGroupFilterExpressionList() {{
                                    filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression[]{{
                                        add(new GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression() {{}}),
                                        add(new GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression() {{}}),
                                        add(new GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression() {{}}),
                                        add(new GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression() {{}}),
                                    }};
                                }};
                                filter = new GoogleAnalyticsAdminV1alphaChannelGroupFilter() {{
                                    fieldName = "fugit";
                                    inListFilter = new GoogleAnalyticsAdminV1alphaChannelGroupFilterInListFilter() {{
                                        values = new String[]{{
                                            add("maiores"),
                                            add("doloribus"),
                                            add("iusto"),
                                            add("eligendi"),
                                        }};
                                    }};
                                    stringFilter = new GoogleAnalyticsAdminV1alphaChannelGroupFilterStringFilter() {{
                                        matchType = GoogleAnalyticsAdminV1alphaChannelGroupFilterStringFilterMatchTypeEnum.ENDS_WITH;
                                        value = "alias";
                                    }};
                                }};
                                notExpression = new GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression() {{}};
                                orGroup = new GoogleAnalyticsAdminV1alphaChannelGroupFilterExpressionList() {{
                                    filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression[]{{
                                        add(new GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression() {{}}),
                                        add(new GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression() {{}}),
                                        add(new GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression() {{}}),
                                    }};
                                }};
                            }};
                        }}),
                    }};
                }};;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "ea";
                fields = "aspernatur";
                key = "vel";
                oauthToken = "possimus";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "ratione";
                uploadProtocol = "ex";
            }};            

            AnalyticsadminPropertiesChannelGroupsCreateResponse res = sdk.properties.analyticsadminPropertiesChannelGroupsCreate(req, new AnalyticsadminPropertiesChannelGroupsCreateSecurity("laudantium", "dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1alphaChannelGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesChannelGroupsList

Lists ChannelGroups on a property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesChannelGroupsListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesChannelGroupsListResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesChannelGroupsListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesChannelGroupsListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesChannelGroupsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesChannelGroupsListRequest req = new AnalyticsadminPropertiesChannelGroupsListRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "excepturi";
                key = "voluptatibus";
                oauthToken = "nostrum";
                pageSize = 960835L;
                pageToken = "quisquam";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "ea";
                uploadProtocol = "impedit";
            }};            

            AnalyticsadminPropertiesChannelGroupsListResponse res = sdk.properties.analyticsadminPropertiesChannelGroupsList(req, new AnalyticsadminPropertiesChannelGroupsListSecurity() {{
                option1 = new AnalyticsadminPropertiesChannelGroupsListSecurityOption1("corporis", "veniam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1alphaListChannelGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesConversionEventsCreate

Creates a conversion event with the specified attributes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesConversionEventsCreateRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesConversionEventsCreateResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesConversionEventsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaConversionEventInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesConversionEventsCreateRequest req = new AnalyticsadminPropertiesConversionEventsCreateRequest("aliquid") {{
                dollarXgafv = XgafvEnum.ONE;
                googleAnalyticsAdminV1alphaConversionEventInput = new GoogleAnalyticsAdminV1alphaConversionEventInput() {{
                    eventName = "magnam";
                }};;
                accessToken = "ea";
                alt = AltEnum.PROTO;
                callback = "consectetur";
                fields = "recusandae";
                key = "aspernatur";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "eaque";
                uploadType = "a";
                uploadProtocol = "libero";
            }};            

            AnalyticsadminPropertiesConversionEventsCreateResponse res = sdk.properties.analyticsadminPropertiesConversionEventsCreate(req, new AnalyticsadminPropertiesConversionEventsCreateSecurity("aut", "aut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1alphaConversionEvent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesConversionEventsList

Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesConversionEventsListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesConversionEventsListResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesConversionEventsListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesConversionEventsListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesConversionEventsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesConversionEventsListRequest req = new AnalyticsadminPropertiesConversionEventsListRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aliquam";
                alt = AltEnum.JSON;
                callback = "accusamus";
                fields = "inventore";
                key = "non";
                oauthToken = "et";
                pageSize = 677412L;
                pageToken = "laborum";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "velit";
                uploadProtocol = "eum";
            }};            

            AnalyticsadminPropertiesConversionEventsListResponse res = sdk.properties.analyticsadminPropertiesConversionEventsList(req, new AnalyticsadminPropertiesConversionEventsListSecurity() {{
                option1 = new AnalyticsadminPropertiesConversionEventsListSecurityOption1("autem", "nobis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1alphaListConversionEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesCreate

Creates an "GA4" property with the specified location and attributes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCreateRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCreateResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaPropertyInput;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesCreateRequest req = new AnalyticsadminPropertiesCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                googleAnalyticsAdminV1alphaPropertyInput = new GoogleAnalyticsAdminV1alphaPropertyInput() {{
                    account = "assumenda";
                    currencyCode = "nulla";
                    displayName = "voluptas";
                    industryCategory = GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum.PEOPLE_AND_SOCIETY;
                    parent = "quasi";
                    propertyType = GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnum.PROPERTY_TYPE_ORDINARY;
                    timeZone = "numquam";
                }};;
                accessToken = "explicabo";
                alt = AltEnum.MEDIA;
                callback = "ipsa";
                fields = "molestiae";
                key = "magnam";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "eius";
                uploadType = "esse";
                uploadProtocol = "esse";
            }};            

            AnalyticsadminPropertiesCreateResponse res = sdk.properties.analyticsadminPropertiesCreate(req, new AnalyticsadminPropertiesCreateSecurity("rem", "fuga") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1alphaProperty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesCreateConnectedSiteTag

Creates a connected site tag for a Universal Analytics property. You can create a maximum of 20 connected site tags per property. Note: This API cannot be used on GA4 properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCreateConnectedSiteTagRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCreateConnectedSiteTagResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCreateConnectedSiteTagSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaConnectedSiteTag;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesCreateConnectedSiteTagRequest req = new AnalyticsadminPropertiesCreateConnectedSiteTagRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                googleAnalyticsAdminV1alphaCreateConnectedSiteTagRequest = new GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagRequest() {{
                    connectedSiteTag = new GoogleAnalyticsAdminV1alphaConnectedSiteTag() {{
                        displayName = "quidem";
                        tagId = "fugiat";
                    }};;
                    property = "ut";
                }};;
                accessToken = "eum";
                alt = AltEnum.MEDIA;
                callback = "assumenda";
                fields = "eos";
                key = "praesentium";
                oauthToken = "quisquam";
                prettyPrint = false;
                quotaUser = "veritatis";
                uploadType = "ipsa";
                uploadProtocol = "id";
            }};            

            AnalyticsadminPropertiesCreateConnectedSiteTagResponse res = sdk.properties.analyticsadminPropertiesCreateConnectedSiteTag(req, new AnalyticsadminPropertiesCreateConnectedSiteTagSecurity("quidem", "neque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1alphaCreateConnectedSiteTagResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesCustomDimensionsCreate

Creates a CustomDimension.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomDimensionsCreateRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomDimensionsCreateResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomDimensionsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaCustomDimensionInput;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesCustomDimensionsCreateRequest req = new AnalyticsadminPropertiesCustomDimensionsCreateRequest("quo") {{
                dollarXgafv = XgafvEnum.TWO;
                googleAnalyticsAdminV1alphaCustomDimensionInput = new GoogleAnalyticsAdminV1alphaCustomDimensionInput() {{
                    description = "quo";
                    disallowAdsPersonalization = false;
                    displayName = "fuga";
                    parameterName = "eius";
                    scope = GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum.DIMENSION_SCOPE_UNSPECIFIED;
                }};;
                accessToken = "voluptas";
                alt = AltEnum.JSON;
                callback = "cupiditate";
                fields = "consequatur";
                key = "tempora";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "aspernatur";
                uploadProtocol = "sequi";
            }};            

            AnalyticsadminPropertiesCustomDimensionsCreateResponse res = sdk.properties.analyticsadminPropertiesCustomDimensionsCreate(req, new AnalyticsadminPropertiesCustomDimensionsCreateSecurity("quo", "esse") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1alphaCustomDimension != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesCustomDimensionsList

Lists CustomDimensions on a property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomDimensionsListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomDimensionsListResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomDimensionsListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomDimensionsListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomDimensionsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesCustomDimensionsListRequest req = new AnalyticsadminPropertiesCustomDimensionsListRequest("recusandae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "dignissimos";
                fields = "inventore";
                key = "nihil";
                oauthToken = "totam";
                pageSize = 882710L;
                pageToken = "aliquam";
                prettyPrint = false;
                quotaUser = "odio";
                uploadType = "occaecati";
                uploadProtocol = "commodi";
            }};            

            AnalyticsadminPropertiesCustomDimensionsListResponse res = sdk.properties.analyticsadminPropertiesCustomDimensionsList(req, new AnalyticsadminPropertiesCustomDimensionsListSecurity() {{
                option1 = new AnalyticsadminPropertiesCustomDimensionsListSecurityOption1("sapiente", "dolores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1alphaListCustomDimensionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesCustomMetricsArchive

Archives a CustomMetric on a property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomMetricsArchiveRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomMetricsArchiveResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomMetricsArchiveSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesCustomMetricsArchiveRequest req = new AnalyticsadminPropertiesCustomMetricsArchiveRequest("deserunt") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("porro", "eum");
                }};
                accessToken = "quas";
                alt = AltEnum.MEDIA;
                callback = "consequuntur";
                fields = "deleniti";
                key = "fugit";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "incidunt";
                uploadProtocol = "atque";
            }};            

            AnalyticsadminPropertiesCustomMetricsArchiveResponse res = sdk.properties.analyticsadminPropertiesCustomMetricsArchive(req, new AnalyticsadminPropertiesCustomMetricsArchiveSecurity("explicabo", "minima") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesCustomMetricsCreate

Creates a CustomMetric.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomMetricsCreateRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomMetricsCreateResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomMetricsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaCustomMetricInput;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaCustomMetricScopeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesCustomMetricsCreateRequest req = new AnalyticsadminPropertiesCustomMetricsCreateRequest("nisi") {{
                dollarXgafv = XgafvEnum.ONE;
                googleAnalyticsAdminV1alphaCustomMetricInput = new GoogleAnalyticsAdminV1alphaCustomMetricInput() {{
                    description = "sapiente";
                    displayName = "consequuntur";
                    measurementUnit = GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum.CURRENCY;
                    parameterName = "explicabo";
                    restrictedMetricType = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum[]{{
                        add(GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum.COST_DATA),
                        add(GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum.COST_DATA),
                        add(GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum.RESTRICTED_METRIC_TYPE_UNSPECIFIED),
                        add(GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum.COST_DATA),
                    }};
                    scope = GoogleAnalyticsAdminV1alphaCustomMetricScopeEnum.EVENT;
                }};;
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "esse";
                fields = "quod";
                key = "nam";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "quasi";
                uploadProtocol = "saepe";
            }};            

            AnalyticsadminPropertiesCustomMetricsCreateResponse res = sdk.properties.analyticsadminPropertiesCustomMetricsCreate(req, new AnalyticsadminPropertiesCustomMetricsCreateSecurity("vel", "harum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1alphaCustomMetric != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesCustomMetricsList

Lists CustomMetrics on a property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomMetricsListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomMetricsListResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomMetricsListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomMetricsListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomMetricsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesCustomMetricsListRequest req = new AnalyticsadminPropertiesCustomMetricsListRequest("molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "distinctio";
                fields = "eligendi";
                key = "sit";
                oauthToken = "culpa";
                pageSize = 731398L;
                pageToken = "adipisci";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "consequuntur";
                uploadProtocol = "consequatur";
            }};            

            AnalyticsadminPropertiesCustomMetricsListResponse res = sdk.properties.analyticsadminPropertiesCustomMetricsList(req, new AnalyticsadminPropertiesCustomMetricsListSecurity() {{
                option1 = new AnalyticsadminPropertiesCustomMetricsListSecurityOption1("minus", "quaerat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1alphaListCustomMetricsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesDataStreamsCreate

Creates a DataStream.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsCreateRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsCreateResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamDataInput;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaDataStreamInput;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamDataInput;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaDataStreamTypeEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaDataStreamWebStreamDataInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesDataStreamsCreateRequest req = new AnalyticsadminPropertiesDataStreamsCreateRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                googleAnalyticsAdminV1alphaDataStreamInput = new GoogleAnalyticsAdminV1alphaDataStreamInput() {{
                    androidAppStreamData = new GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamDataInput() {{
                        packageName = "esse";
                    }};;
                    displayName = "blanditiis";
                    iosAppStreamData = new GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamDataInput() {{
                        bundleId = "provident";
                    }};;
                    type = GoogleAnalyticsAdminV1alphaDataStreamTypeEnum.IOS_APP_DATA_STREAM;
                    webStreamData = new GoogleAnalyticsAdminV1alphaDataStreamWebStreamDataInput() {{
                        defaultUri = "nulla";
                    }};;
                }};;
                accessToken = "quas";
                alt = AltEnum.MEDIA;
                callback = "quasi";
                fields = "a";
                key = "error";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "possimus";
                uploadProtocol = "quia";
            }};            

            AnalyticsadminPropertiesDataStreamsCreateResponse res = sdk.properties.analyticsadminPropertiesDataStreamsCreate(req, new AnalyticsadminPropertiesDataStreamsCreateSecurity("eveniet", "asperiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1alphaDataStream != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesDataStreamsEventCreateRulesCreate

Creates an EventCreateRule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsEventCreateRulesCreateRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsEventCreateRulesCreateResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsEventCreateRulesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaEventCreateRuleInput;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaMatchingCondition;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaMatchingConditionComparisonTypeEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaParameterMutation;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesDataStreamsEventCreateRulesCreateRequest req = new AnalyticsadminPropertiesDataStreamsEventCreateRulesCreateRequest("facere") {{
                dollarXgafv = XgafvEnum.ONE;
                googleAnalyticsAdminV1alphaEventCreateRuleInput = new GoogleAnalyticsAdminV1alphaEventCreateRuleInput() {{
                    destinationEvent = "consequuntur";
                    eventConditions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaMatchingCondition[]{{
                        add(new GoogleAnalyticsAdminV1alphaMatchingCondition() {{
                            comparisonType = GoogleAnalyticsAdminV1alphaMatchingConditionComparisonTypeEnum.GREATER_THAN;
                            field = "culpa";
                            negated = false;
                            value = "aliquid";
                        }}),
                    }};
                    parameterMutations = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaParameterMutation[]{{
                        add(new GoogleAnalyticsAdminV1alphaParameterMutation() {{
                            parameter = "quae";
                            parameterValue = "earum";
                        }}),
                        add(new GoogleAnalyticsAdminV1alphaParameterMutation() {{
                            parameter = "vel";
                            parameterValue = "in";
                        }}),
                        add(new GoogleAnalyticsAdminV1alphaParameterMutation() {{
                            parameter = "eius";
                            parameterValue = "libero";
                        }}),
                        add(new GoogleAnalyticsAdminV1alphaParameterMutation() {{
                            parameter = "illum";
                            parameterValue = "soluta";
                        }}),
                    }};
                    sourceCopyParameters = false;
                }};;
                accessToken = "accusantium";
                alt = AltEnum.JSON;
                callback = "sapiente";
                fields = "dicta";
                key = "ullam";
                oauthToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "nisi";
                uploadProtocol = "aut";
            }};            

            AnalyticsadminPropertiesDataStreamsEventCreateRulesCreateResponse res = sdk.properties.analyticsadminPropertiesDataStreamsEventCreateRulesCreate(req, new AnalyticsadminPropertiesDataStreamsEventCreateRulesCreateSecurity("voluptatum", "qui") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1alphaEventCreateRule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesDataStreamsEventCreateRulesList

Lists EventCreateRules on a web data stream.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsEventCreateRulesListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsEventCreateRulesListResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsEventCreateRulesListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsEventCreateRulesListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsEventCreateRulesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesDataStreamsEventCreateRulesListRequest req = new AnalyticsadminPropertiesDataStreamsEventCreateRulesListRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "architecto";
                key = "omnis";
                oauthToken = "tenetur";
                pageSize = 98478L;
                pageToken = "at";
                prettyPrint = false;
                quotaUser = "et";
                uploadType = "voluptate";
                uploadProtocol = "ipsa";
            }};            

            AnalyticsadminPropertiesDataStreamsEventCreateRulesListResponse res = sdk.properties.analyticsadminPropertiesDataStreamsEventCreateRulesList(req, new AnalyticsadminPropertiesDataStreamsEventCreateRulesListSecurity() {{
                option1 = new AnalyticsadminPropertiesDataStreamsEventCreateRulesListSecurityOption1("minima", "veritatis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1alphaListEventCreateRulesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesDataStreamsList

Lists DataStreams on a property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsListResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesDataStreamsListRequest req = new AnalyticsadminPropertiesDataStreamsListRequest("consectetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iste";
                alt = AltEnum.PROTO;
                callback = "accusantium";
                fields = "rem";
                key = "aut";
                oauthToken = "laudantium";
                pageSize = 428796L;
                pageToken = "mollitia";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "corrupti";
                uploadProtocol = "non";
            }};            

            AnalyticsadminPropertiesDataStreamsListResponse res = sdk.properties.analyticsadminPropertiesDataStreamsList(req, new AnalyticsadminPropertiesDataStreamsListSecurity() {{
                option1 = new AnalyticsadminPropertiesDataStreamsListSecurityOption1("voluptatem", "dolor") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1alphaListDataStreamsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate

Creates a measurement protocol secret.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaMeasurementProtocolSecretInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest req = new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest("occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                googleAnalyticsAdminV1alphaMeasurementProtocolSecretInput = new GoogleAnalyticsAdminV1alphaMeasurementProtocolSecretInput() {{
                    displayName = "impedit";
                }};;
                accessToken = "explicabo";
                alt = AltEnum.MEDIA;
                callback = "aut";
                fields = "dignissimos";
                key = "dicta";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "velit";
                uploadProtocol = "voluptatibus";
            }};            

            AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse res = sdk.properties.analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate(req, new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateSecurity("voluptas", "asperiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1alphaMeasurementProtocolSecret != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList

Returns child MeasurementProtocolSecrets under the specified parent Property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest req = new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest("aperiam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quaerat";
                alt = AltEnum.JSON;
                callback = "repellendus";
                fields = "officia";
                key = "maxime";
                oauthToken = "dignissimos";
                pageSize = 640024L;
                pageToken = "asperiores";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "quae";
                uploadProtocol = "quaerat";
            }};            

            AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse res = sdk.properties.analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList(req, new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurity() {{
                option1 = new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption1("porro", "quod") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesDeleteConnectedSiteTag

Deletes a connected site tag for a Universal Analytics property. Note: this has no effect on GA4 properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDeleteConnectedSiteTagRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDeleteConnectedSiteTagResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDeleteConnectedSiteTagSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaDeleteConnectedSiteTagRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesDeleteConnectedSiteTagRequest req = new AnalyticsadminPropertiesDeleteConnectedSiteTagRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                googleAnalyticsAdminV1alphaDeleteConnectedSiteTagRequest = new GoogleAnalyticsAdminV1alphaDeleteConnectedSiteTagRequest() {{
                    property = "ab";
                    tagId = "adipisci";
                }};;
                accessToken = "fuga";
                alt = AltEnum.MEDIA;
                callback = "suscipit";
                fields = "velit";
                key = "culpa";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "totam";
                uploadProtocol = "fugiat";
            }};            

            AnalyticsadminPropertiesDeleteConnectedSiteTagResponse res = sdk.properties.analyticsadminPropertiesDeleteConnectedSiteTag(req, new AnalyticsadminPropertiesDeleteConnectedSiteTagSecurity("vel", "ducimus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApprove

Approves a DisplayVideo360AdvertiserLinkProposal. The DisplayVideo360AdvertiserLinkProposal will be deleted and a new DisplayVideo360AdvertiserLink will be created.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveRequest req = new AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveRequest("quos") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("possimus", "facilis");
                    put("cum", "commodi");
                }};
                accessToken = "in";
                alt = AltEnum.MEDIA;
                callback = "reiciendis";
                fields = "assumenda";
                key = "nemo";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "aperiam";
                uploadProtocol = "cum";
            }};            

            AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveResponse res = sdk.properties.analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApprove(req, new AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveSecurity("consectetur", "in") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancel

Cancels a DisplayVideo360AdvertiserLinkProposal. Cancelling can mean either: - Declining a proposal initiated from Display & Video 360 - Withdrawing a proposal initiated from Google Analytics After being cancelled, a proposal will eventually be deleted automatically.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelRequest req = new AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelRequest("exercitationem") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("numquam", "doloribus");
                    put("suscipit", "reiciendis");
                    put("quidem", "saepe");
                    put("necessitatibus", "dolore");
                }};
                accessToken = "sunt";
                alt = AltEnum.PROTO;
                callback = "adipisci";
                fields = "non";
                key = "amet";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "dignissimos";
                uploadType = "a";
                uploadProtocol = "debitis";
            }};            

            AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelResponse res = sdk.properties.analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancel(req, new AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelSecurity("consectetur", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreate

Creates a DisplayVideo360AdvertiserLinkProposal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateRequest req = new AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateRequest("harum") {{
                dollarXgafv = XgafvEnum.ONE;
                googleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput = new GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput() {{
                    adsPersonalizationEnabled = false;
                    advertiserId = "ipsa";
                    campaignDataSharingEnabled = false;
                    costDataSharingEnabled = false;
                    validationEmail = "voluptates";
                }};;
                accessToken = "libero";
                alt = AltEnum.JSON;
                callback = "accusamus";
                fields = "similique";
                key = "tempora";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "voluptas";
                uploadProtocol = "voluptas";
            }};            

            AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateResponse res = sdk.properties.analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreate(req, new AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateSecurity("minima", "nobis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsList

Lists DisplayVideo360AdvertiserLinkProposals on a property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListRequest req = new AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListRequest("dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "minus";
                alt = AltEnum.JSON;
                callback = "blanditiis";
                fields = "in";
                key = "dolore";
                oauthToken = "aliquam";
                pageSize = 885963L;
                pageToken = "temporibus";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "adipisci";
                uploadProtocol = "cum";
            }};            

            AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListResponse res = sdk.properties.analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsList(req, new AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurity() {{
                option1 = new AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption1("blanditiis", "quas") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesDisplayVideo360AdvertiserLinksCreate

Creates a DisplayVideo360AdvertiserLink. This can only be utilized by users who have proper authorization both on the Google Analytics property and on the Display & Video 360 advertiser. Users who do not have access to the Display & Video 360 advertiser should instead seek to create a DisplayVideo360LinkProposal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateRequest req = new AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateRequest("hic") {{
                dollarXgafv = XgafvEnum.ONE;
                googleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput = new GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput() {{
                    adsPersonalizationEnabled = false;
                    advertiserId = "culpa";
                    campaignDataSharingEnabled = false;
                    costDataSharingEnabled = false;
                }};;
                accessToken = "corrupti";
                alt = AltEnum.PROTO;
                callback = "totam";
                fields = "hic";
                key = "exercitationem";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "sit";
                uploadType = "rerum";
                uploadProtocol = "sed";
            }};            

            AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateResponse res = sdk.properties.analyticsadminPropertiesDisplayVideo360AdvertiserLinksCreate(req, new AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateSecurity("reiciendis", "explicabo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesDisplayVideo360AdvertiserLinksList

Lists all DisplayVideo360AdvertiserLinks on a property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListRequest req = new AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListRequest("asperiores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptate";
                alt = AltEnum.PROTO;
                callback = "ab";
                fields = "iste";
                key = "dolore";
                oauthToken = "laborum";
                pageSize = 152354L;
                pageToken = "in";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "quidem";
                uploadProtocol = "explicabo";
            }};            

            AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListResponse res = sdk.properties.analyticsadminPropertiesDisplayVideo360AdvertiserLinksList(req, new AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurity() {{
                option1 = new AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption1("voluptas", "unde") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesExpandedDataSetsCreate

Creates a ExpandedDataSet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesExpandedDataSetsCreateRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesExpandedDataSetsCreateResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesExpandedDataSetsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaExpandedDataSetFilter;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionList;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterMatchTypeEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaExpandedDataSetInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesExpandedDataSetsCreateRequest req = new AnalyticsadminPropertiesExpandedDataSetsCreateRequest("architecto") {{
                dollarXgafv = XgafvEnum.ONE;
                googleAnalyticsAdminV1alphaExpandedDataSetInput = new GoogleAnalyticsAdminV1alphaExpandedDataSetInput() {{
                    description = "sapiente";
                    dimensionFilterExpression = new GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression() {{
                        andGroup = new GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionList() {{
                            filterExpressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression[]{{
                                add(new GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression() {{}}),
                                add(new GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression() {{}}),
                                add(new GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression() {{}}),
                                add(new GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression() {{}}),
                            }};
                        }};;
                        filter = new GoogleAnalyticsAdminV1alphaExpandedDataSetFilter() {{
                            fieldName = "illo";
                            inListFilter = new GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter() {{
                                caseSensitive = false;
                                values = new String[]{{
                                    add("perferendis"),
                                    add("corrupti"),
                                    add("maiores"),
                                    add("incidunt"),
                                }};
                            }};;
                            stringFilter = new GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter() {{
                                caseSensitive = false;
                                matchType = GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterMatchTypeEnum.MATCH_TYPE_UNSPECIFIED;
                                value = "provident";
                            }};;
                        }};;
                        notExpression = new GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression();;
                    }};;
                    dimensionNames = new String[]{{
                        add("necessitatibus"),
                        add("ipsum"),
                    }};
                    displayName = "ea";
                    metricNames = new String[]{{
                        add("quos"),
                        add("voluptatibus"),
                        add("tempora"),
                    }};
                }};;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "reiciendis";
                fields = "ex";
                key = "sit";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "praesentium";
                uploadProtocol = "facilis";
            }};            

            AnalyticsadminPropertiesExpandedDataSetsCreateResponse res = sdk.properties.analyticsadminPropertiesExpandedDataSetsCreate(req, new AnalyticsadminPropertiesExpandedDataSetsCreateSecurity("quaerat", "incidunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1alphaExpandedDataSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesExpandedDataSetsList

Lists ExpandedDataSets on a property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesExpandedDataSetsListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesExpandedDataSetsListResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesExpandedDataSetsListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesExpandedDataSetsListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesExpandedDataSetsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesExpandedDataSetsListRequest req = new AnalyticsadminPropertiesExpandedDataSetsListRequest("ipsam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "rem";
                alt = AltEnum.JSON;
                callback = "nobis";
                fields = "error";
                key = "veniam";
                oauthToken = "minima";
                pageSize = 924159L;
                pageToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "nulla";
                uploadType = "magni";
                uploadProtocol = "aperiam";
            }};            

            AnalyticsadminPropertiesExpandedDataSetsListResponse res = sdk.properties.analyticsadminPropertiesExpandedDataSetsList(req, new AnalyticsadminPropertiesExpandedDataSetsListSecurity() {{
                option1 = new AnalyticsadminPropertiesExpandedDataSetsListSecurityOption1("saepe", "numquam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1alphaListExpandedDataSetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOut

Fetches the opt out status for the automated GA4 setup process for a UA property. Note: this has no effect on GA4 property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutRequest req = new AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                googleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutRequest = new GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutRequest() {{
                    property = "in";
                }};;
                accessToken = "officiis";
                alt = AltEnum.JSON;
                callback = "laudantium";
                fields = "exercitationem";
                key = "praesentium";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "laboriosam";
                uploadType = "dolorum";
                uploadProtocol = "voluptatum";
            }};            

            AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutResponse res = sdk.properties.analyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOut(req, new AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutSecurity() {{
                option1 = new AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutSecurityOption1("error", "hic") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesFetchConnectedGa4Property

Given a specified UA property, looks up the GA4 property connected to it. Note: this cannot be used with GA4 properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesFetchConnectedGa4PropertyRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesFetchConnectedGa4PropertyResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesFetchConnectedGa4PropertySecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesFetchConnectedGa4PropertySecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesFetchConnectedGa4PropertySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesFetchConnectedGa4PropertyRequest req = new AnalyticsadminPropertiesFetchConnectedGa4PropertyRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "debitis";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "nostrum";
                key = "officia";
                oauthToken = "dolorum";
                prettyPrint = false;
                property = "corrupti";
                quotaUser = "accusamus";
                uploadType = "tempora";
                uploadProtocol = "atque";
            }};            

            AnalyticsadminPropertiesFetchConnectedGa4PropertyResponse res = sdk.properties.analyticsadminPropertiesFetchConnectedGa4Property(req, new AnalyticsadminPropertiesFetchConnectedGa4PropertySecurity() {{
                option1 = new AnalyticsadminPropertiesFetchConnectedGa4PropertySecurityOption1("fugit", "ut") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1alphaFetchConnectedGa4PropertyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesFirebaseLinksCreate

Creates a FirebaseLink. Properties can have at most one FirebaseLink.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesFirebaseLinksCreateRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesFirebaseLinksCreateResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesFirebaseLinksCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaFirebaseLinkInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesFirebaseLinksCreateRequest req = new AnalyticsadminPropertiesFirebaseLinksCreateRequest("fugiat") {{
                dollarXgafv = XgafvEnum.ONE;
                googleAnalyticsAdminV1alphaFirebaseLinkInput = new GoogleAnalyticsAdminV1alphaFirebaseLinkInput() {{
                    project = "culpa";
                }};;
                accessToken = "expedita";
                alt = AltEnum.JSON;
                callback = "consequatur";
                fields = "esse";
                key = "ipsam";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "voluptatum";
                uploadType = "quas";
                uploadProtocol = "repudiandae";
            }};            

            AnalyticsadminPropertiesFirebaseLinksCreateResponse res = sdk.properties.analyticsadminPropertiesFirebaseLinksCreate(req, new AnalyticsadminPropertiesFirebaseLinksCreateSecurity("corporis", "et") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1alphaFirebaseLink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesFirebaseLinksList

Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesFirebaseLinksListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesFirebaseLinksListResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesFirebaseLinksListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesFirebaseLinksListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesFirebaseLinksListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesFirebaseLinksListRequest req = new AnalyticsadminPropertiesFirebaseLinksListRequest("blanditiis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sed";
                alt = AltEnum.JSON;
                callback = "vel";
                fields = "nostrum";
                key = "saepe";
                oauthToken = "error";
                pageSize = 8511L;
                pageToken = "incidunt";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "dolorem";
                uploadProtocol = "harum";
            }};            

            AnalyticsadminPropertiesFirebaseLinksListResponse res = sdk.properties.analyticsadminPropertiesFirebaseLinksList(req, new AnalyticsadminPropertiesFirebaseLinksListSecurity() {{
                option1 = new AnalyticsadminPropertiesFirebaseLinksListSecurityOption1("dicta", "architecto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1alphaListFirebaseLinksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesGoogleAdsLinksCreate

Creates a GoogleAdsLink.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesGoogleAdsLinksCreateRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesGoogleAdsLinksCreateResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesGoogleAdsLinksCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaGoogleAdsLinkInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesGoogleAdsLinksCreateRequest req = new AnalyticsadminPropertiesGoogleAdsLinksCreateRequest("occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                googleAnalyticsAdminV1alphaGoogleAdsLinkInput = new GoogleAnalyticsAdminV1alphaGoogleAdsLinkInput() {{
                    adsPersonalizationEnabled = false;
                    customerId = "quidem";
                }};;
                accessToken = "atque";
                alt = AltEnum.PROTO;
                callback = "nam";
                fields = "tenetur";
                key = "laboriosam";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "deserunt";
                uploadProtocol = "voluptate";
            }};            

            AnalyticsadminPropertiesGoogleAdsLinksCreateResponse res = sdk.properties.analyticsadminPropertiesGoogleAdsLinksCreate(req, new AnalyticsadminPropertiesGoogleAdsLinksCreateSecurity("unde", "reiciendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1alphaGoogleAdsLink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesGoogleAdsLinksList

Lists GoogleAdsLinks on a property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesGoogleAdsLinksListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesGoogleAdsLinksListResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesGoogleAdsLinksListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesGoogleAdsLinksListRequest req = new AnalyticsadminPropertiesGoogleAdsLinksListRequest("provident") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "delectus";
                alt = AltEnum.PROTO;
                callback = "perferendis";
                fields = "est";
                key = "quidem";
                oauthToken = "reprehenderit";
                pageSize = 813679L;
                pageToken = "fuga";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "mollitia";
                uploadProtocol = "veniam";
            }};            

            AnalyticsadminPropertiesGoogleAdsLinksListResponse res = sdk.properties.analyticsadminPropertiesGoogleAdsLinksList(req, new AnalyticsadminPropertiesGoogleAdsLinksListSecurity() {{
                option1 = new AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption1("voluptatem", "quisquam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1alphaListGoogleAdsLinksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesList

Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesListResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesListRequest req = new AnalyticsadminPropertiesListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "reprehenderit";
                fields = "asperiores";
                filter = "totam";
                key = "suscipit";
                oauthToken = "quidem";
                pageSize = 806670L;
                pageToken = "et";
                prettyPrint = false;
                quotaUser = "esse";
                showDeleted = false;
                uploadType = "amet";
                uploadProtocol = "assumenda";
            }};            

            AnalyticsadminPropertiesListResponse res = sdk.properties.analyticsadminPropertiesList(req, new AnalyticsadminPropertiesListSecurity() {{
                option1 = new AnalyticsadminPropertiesListSecurityOption1("ea", "atque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1alphaListPropertiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesListConnectedSiteTags

Lists the connected site tags for a Universal Analytics property. A maximum of 20 connected site tags will be returned. Note: this has no effect on GA4 property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesListConnectedSiteTagsRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesListConnectedSiteTagsResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesListConnectedSiteTagsSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesListConnectedSiteTagsSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesListConnectedSiteTagsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaListConnectedSiteTagsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesListConnectedSiteTagsRequest req = new AnalyticsadminPropertiesListConnectedSiteTagsRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                googleAnalyticsAdminV1alphaListConnectedSiteTagsRequest = new GoogleAnalyticsAdminV1alphaListConnectedSiteTagsRequest() {{
                    property = "officiis";
                }};;
                accessToken = "officiis";
                alt = AltEnum.PROTO;
                callback = "natus";
                fields = "minima";
                key = "aspernatur";
                oauthToken = "ex";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "corrupti";
                uploadProtocol = "at";
            }};            

            AnalyticsadminPropertiesListConnectedSiteTagsResponse res = sdk.properties.analyticsadminPropertiesListConnectedSiteTags(req, new AnalyticsadminPropertiesListConnectedSiteTagsSecurity() {{
                option1 = new AnalyticsadminPropertiesListConnectedSiteTagsSecurityOption1("error", "blanditiis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1alphaListConnectedSiteTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesRunAccessReport

Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesRunAccessReportRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesRunAccessReportResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesRunAccessReportSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesRunAccessReportSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesRunAccessReportSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAccessBetweenFilter;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAccessDateRange;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAccessDimension;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAccessFilter;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAccessFilterExpression;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAccessFilterExpressionList;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAccessInListFilter;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAccessMetric;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAccessNumericFilter;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAccessOrderBy;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderBy;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByOrderTypeEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAccessOrderByMetricOrderBy;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAccessStringFilter;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAccessStringFilterMatchTypeEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaNumericValue;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaRunAccessReportRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesRunAccessReportRequest req = new AnalyticsadminPropertiesRunAccessReportRequest("suscipit") {{
                dollarXgafv = XgafvEnum.TWO;
                googleAnalyticsAdminV1alphaRunAccessReportRequest = new GoogleAnalyticsAdminV1alphaRunAccessReportRequest() {{
                    dateRanges = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAccessDateRange[]{{
                        add(new GoogleAnalyticsAdminV1alphaAccessDateRange() {{
                            endDate = "atque";
                            startDate = "sunt";
                        }}),
                        add(new GoogleAnalyticsAdminV1alphaAccessDateRange() {{
                            endDate = "recusandae";
                            startDate = "dolorum";
                        }}),
                        add(new GoogleAnalyticsAdminV1alphaAccessDateRange() {{
                            endDate = "repellendus";
                            startDate = "labore";
                        }}),
                    }};
                    dimensionFilter = new GoogleAnalyticsAdminV1alphaAccessFilterExpression() {{
                        accessFilter = new GoogleAnalyticsAdminV1alphaAccessFilter() {{
                            betweenFilter = new GoogleAnalyticsAdminV1alphaAccessBetweenFilter() {{
                                fromValue = new GoogleAnalyticsAdminV1alphaNumericValue() {{
                                    doubleValue = 9682.87;
                                    int64Value = "doloremque";
                                }};;
                                toValue = new GoogleAnalyticsAdminV1alphaNumericValue() {{
                                    doubleValue = 9197.83;
                                    int64Value = "dicta";
                                }};;
                            }};;
                            fieldName = "accusantium";
                            inListFilter = new GoogleAnalyticsAdminV1alphaAccessInListFilter() {{
                                caseSensitive = false;
                                values = new String[]{{
                                    add("dolores"),
                                }};
                            }};;
                            numericFilter = new GoogleAnalyticsAdminV1alphaAccessNumericFilter() {{
                                operation = GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnum.EQUAL;
                                value = new GoogleAnalyticsAdminV1alphaNumericValue() {{
                                    doubleValue = 3891.35;
                                    int64Value = "velit";
                                }};;
                            }};;
                            stringFilter = new GoogleAnalyticsAdminV1alphaAccessStringFilter() {{
                                caseSensitive = false;
                                matchType = GoogleAnalyticsAdminV1alphaAccessStringFilterMatchTypeEnum.PARTIAL_REGEXP;
                                value = "molestias";
                            }};;
                        }};;
                        andGroup = new GoogleAnalyticsAdminV1alphaAccessFilterExpressionList() {{
                            expressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAccessFilterExpression[]{{
                                add(new GoogleAnalyticsAdminV1alphaAccessFilterExpression() {{}}),
                                add(new GoogleAnalyticsAdminV1alphaAccessFilterExpression() {{}}),
                            }};
                        }};;
                        notExpression = new GoogleAnalyticsAdminV1alphaAccessFilterExpression();;
                        orGroup = new GoogleAnalyticsAdminV1alphaAccessFilterExpressionList() {{
                            expressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAccessFilterExpression[]{{
                                add(new GoogleAnalyticsAdminV1alphaAccessFilterExpression() {{}}),
                                add(new GoogleAnalyticsAdminV1alphaAccessFilterExpression() {{}}),
                                add(new GoogleAnalyticsAdminV1alphaAccessFilterExpression() {{}}),
                                add(new GoogleAnalyticsAdminV1alphaAccessFilterExpression() {{}}),
                            }};
                        }};;
                    }};;
                    dimensions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAccessDimension[]{{
                        add(new GoogleAnalyticsAdminV1alphaAccessDimension() {{
                            dimensionName = "occaecati";
                        }}),
                    }};
                    limit = "officiis";
                    metricFilter = new GoogleAnalyticsAdminV1alphaAccessFilterExpression() {{
                        accessFilter = new GoogleAnalyticsAdminV1alphaAccessFilter() {{
                            betweenFilter = new GoogleAnalyticsAdminV1alphaAccessBetweenFilter() {{
                                fromValue = new GoogleAnalyticsAdminV1alphaNumericValue() {{
                                    doubleValue = 5979.37;
                                    int64Value = "in";
                                }};;
                                toValue = new GoogleAnalyticsAdminV1alphaNumericValue() {{
                                    doubleValue = 2380.43;
                                    int64Value = "eveniet";
                                }};;
                            }};;
                            fieldName = "occaecati";
                            inListFilter = new GoogleAnalyticsAdminV1alphaAccessInListFilter() {{
                                caseSensitive = false;
                                values = new String[]{{
                                    add("fugit"),
                                }};
                            }};;
                            numericFilter = new GoogleAnalyticsAdminV1alphaAccessNumericFilter() {{
                                operation = GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnum.LESS_THAN_OR_EQUAL;
                                value = new GoogleAnalyticsAdminV1alphaNumericValue() {{
                                    doubleValue = 3356.31;
                                    int64Value = "reprehenderit";
                                }};;
                            }};;
                            stringFilter = new GoogleAnalyticsAdminV1alphaAccessStringFilter() {{
                                caseSensitive = false;
                                matchType = GoogleAnalyticsAdminV1alphaAccessStringFilterMatchTypeEnum.CONTAINS;
                                value = "illo";
                            }};;
                        }};;
                        andGroup = new GoogleAnalyticsAdminV1alphaAccessFilterExpressionList() {{
                            expressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAccessFilterExpression[]{{
                                add(new GoogleAnalyticsAdminV1alphaAccessFilterExpression() {{}}),
                                add(new GoogleAnalyticsAdminV1alphaAccessFilterExpression() {{}}),
                            }};
                        }};;
                        notExpression = new GoogleAnalyticsAdminV1alphaAccessFilterExpression();;
                        orGroup = new GoogleAnalyticsAdminV1alphaAccessFilterExpressionList() {{
                            expressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAccessFilterExpression[]{{
                                add(new GoogleAnalyticsAdminV1alphaAccessFilterExpression() {{}}),
                                add(new GoogleAnalyticsAdminV1alphaAccessFilterExpression() {{}}),
                                add(new GoogleAnalyticsAdminV1alphaAccessFilterExpression() {{}}),
                            }};
                        }};;
                    }};;
                    metrics = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAccessMetric[]{{
                        add(new GoogleAnalyticsAdminV1alphaAccessMetric() {{
                            metricName = "non";
                        }}),
                        add(new GoogleAnalyticsAdminV1alphaAccessMetric() {{
                            metricName = "vero";
                        }}),
                        add(new GoogleAnalyticsAdminV1alphaAccessMetric() {{
                            metricName = "doloremque";
                        }}),
                        add(new GoogleAnalyticsAdminV1alphaAccessMetric() {{
                            metricName = "iure";
                        }}),
                    }};
                    offset = "ipsa";
                    orderBys = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAccessOrderBy[]{{
                        add(new GoogleAnalyticsAdminV1alphaAccessOrderBy() {{
                            desc = false;
                            dimension = new GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderBy() {{
                                dimensionName = "quae";
                                orderType = GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByOrderTypeEnum.ALPHANUMERIC;
                            }};
                            metric = new GoogleAnalyticsAdminV1alphaAccessOrderByMetricOrderBy() {{
                                metricName = "eveniet";
                            }};
                        }}),
                        add(new GoogleAnalyticsAdminV1alphaAccessOrderBy() {{
                            desc = false;
                            dimension = new GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderBy() {{
                                dimensionName = "qui";
                                orderType = GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByOrderTypeEnum.CASE_INSENSITIVE_ALPHANUMERIC;
                            }};
                            metric = new GoogleAnalyticsAdminV1alphaAccessOrderByMetricOrderBy() {{
                                metricName = "iure";
                            }};
                        }}),
                        add(new GoogleAnalyticsAdminV1alphaAccessOrderBy() {{
                            desc = false;
                            dimension = new GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderBy() {{
                                dimensionName = "necessitatibus";
                                orderType = GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByOrderTypeEnum.ORDER_TYPE_UNSPECIFIED;
                            }};
                            metric = new GoogleAnalyticsAdminV1alphaAccessOrderByMetricOrderBy() {{
                                metricName = "laborum";
                            }};
                        }}),
                    }};
                    returnEntityQuota = false;
                    timeZone = "distinctio";
                }};;
                accessToken = "voluptatum";
                alt = AltEnum.MEDIA;
                callback = "aliquam";
                fields = "ad";
                key = "repellat";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "perspiciatis";
                uploadProtocol = "nihil";
            }};            

            AnalyticsadminPropertiesRunAccessReportResponse res = sdk.properties.analyticsadminPropertiesRunAccessReport(req, new AnalyticsadminPropertiesRunAccessReportSecurity() {{
                option1 = new AnalyticsadminPropertiesRunAccessReportSecurityOption1("mollitia", "voluptas") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1alphaRunAccessReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesSearchAds360LinksCreate

Creates a SearchAds360Link.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesSearchAds360LinksCreateRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesSearchAds360LinksCreateResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesSearchAds360LinksCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaSearchAds360LinkInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesSearchAds360LinksCreateRequest req = new AnalyticsadminPropertiesSearchAds360LinksCreateRequest("alias") {{
                dollarXgafv = XgafvEnum.TWO;
                googleAnalyticsAdminV1alphaSearchAds360LinkInput = new GoogleAnalyticsAdminV1alphaSearchAds360LinkInput() {{
                    adsPersonalizationEnabled = false;
                    advertiserId = "reiciendis";
                    campaignDataSharingEnabled = false;
                    costDataSharingEnabled = false;
                    siteStatsSharingEnabled = false;
                }};;
                accessToken = "dolores";
                alt = AltEnum.MEDIA;
                callback = "minima";
                fields = "dolore";
                key = "dolorum";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "quae";
                uploadType = "recusandae";
                uploadProtocol = "omnis";
            }};            

            AnalyticsadminPropertiesSearchAds360LinksCreateResponse res = sdk.properties.analyticsadminPropertiesSearchAds360LinksCreate(req, new AnalyticsadminPropertiesSearchAds360LinksCreateSecurity("quaerat", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1alphaSearchAds360Link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesSearchAds360LinksList

Lists all SearchAds360Links on a property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesSearchAds360LinksListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesSearchAds360LinksListResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesSearchAds360LinksListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesSearchAds360LinksListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesSearchAds360LinksListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesSearchAds360LinksListRequest req = new AnalyticsadminPropertiesSearchAds360LinksListRequest("ex") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "culpa";
                alt = AltEnum.JSON;
                callback = "debitis";
                fields = "laudantium";
                key = "eum";
                oauthToken = "nemo";
                pageSize = 928219L;
                pageToken = "esse";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "quis";
                uploadProtocol = "eum";
            }};            

            AnalyticsadminPropertiesSearchAds360LinksListResponse res = sdk.properties.analyticsadminPropertiesSearchAds360LinksList(req, new AnalyticsadminPropertiesSearchAds360LinksListSecurity() {{
                option1 = new AnalyticsadminPropertiesSearchAds360LinksListSecurityOption1("reiciendis", "provident") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1alphaListSearchAds360LinksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesSetAutomatedGa4ConfigurationOptOut

Sets the opt out status for the automated GA4 setup process for a UA property. Note: this has no effect on GA4 property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesSetAutomatedGa4ConfigurationOptOutRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesSetAutomatedGa4ConfigurationOptOutResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesSetAutomatedGa4ConfigurationOptOutSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesSetAutomatedGa4ConfigurationOptOutRequest req = new AnalyticsadminPropertiesSetAutomatedGa4ConfigurationOptOutRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                googleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutRequest = new GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutRequest() {{
                    optOut = false;
                    property = "ullam";
                }};;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "nostrum";
                fields = "mollitia";
                key = "provident";
                oauthToken = "possimus";
                prettyPrint = false;
                quotaUser = "animi";
                uploadType = "ex";
                uploadProtocol = "aliquid";
            }};            

            AnalyticsadminPropertiesSetAutomatedGa4ConfigurationOptOutResponse res = sdk.properties.analyticsadminPropertiesSetAutomatedGa4ConfigurationOptOut(req, new AnalyticsadminPropertiesSetAutomatedGa4ConfigurationOptOutSecurity("accusantium", "repellat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesUserLinksAudit

Lists all user links on an account or property, including implicit ones that come from effective permissions granted by groups or organization admin roles. If a returned user link does not have direct permissions, they cannot be removed from the account or property directly with the DeleteUserLink command. They have to be removed from the group/etc that gives them permissions, which is currently only usable/discoverable in the GA or GMP UIs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksAuditRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksAuditResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksAuditSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksAuditSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksAuditSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAuditUserLinksRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesUserLinksAuditRequest req = new AnalyticsadminPropertiesUserLinksAuditRequest("doloribus") {{
                dollarXgafv = XgafvEnum.ONE;
                googleAnalyticsAdminV1alphaAuditUserLinksRequest = new GoogleAnalyticsAdminV1alphaAuditUserLinksRequest() {{
                    pageSize = 448143;
                    pageToken = "nam";
                }};;
                accessToken = "earum";
                alt = AltEnum.MEDIA;
                callback = "laborum";
                fields = "placeat";
                key = "modi";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "molestias";
                uploadType = "officiis";
                uploadProtocol = "sapiente";
            }};            

            AnalyticsadminPropertiesUserLinksAuditResponse res = sdk.properties.analyticsadminPropertiesUserLinksAudit(req, new AnalyticsadminPropertiesUserLinksAuditSecurity() {{
                option1 = new AnalyticsadminPropertiesUserLinksAuditSecurityOption1("cumque", "vitae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1alphaAuditUserLinksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesUserLinksBatchCreate

Creates information about multiple users' links to an account or property. This method is transactional. If any UserLink cannot be created, none of the UserLinks will be created.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksBatchCreateRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksBatchCreateResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksBatchCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequestInput;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaUserLinkInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesUserLinksBatchCreateRequest req = new AnalyticsadminPropertiesUserLinksBatchCreateRequest("rerum") {{
                dollarXgafv = XgafvEnum.ONE;
                googleAnalyticsAdminV1alphaBatchCreateUserLinksRequestInput = new GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequestInput() {{
                    notifyNewUsers = false;
                    requests = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput[]{{
                        add(new GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput() {{
                            notifyNewUser = false;
                            parent = "inventore";
                            userLink = new GoogleAnalyticsAdminV1alphaUserLinkInput() {{
                                directRoles = new String[]{{
                                    add("cumque"),
                                }};
                                emailAddress = "quae";
                            }};
                        }}),
                        add(new GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput() {{
                            notifyNewUser = false;
                            parent = "perferendis";
                            userLink = new GoogleAnalyticsAdminV1alphaUserLinkInput() {{
                                directRoles = new String[]{{
                                    add("aspernatur"),
                                }};
                                emailAddress = "eum";
                            }};
                        }}),
                    }};
                }};;
                accessToken = "eius";
                alt = AltEnum.MEDIA;
                callback = "at";
                fields = "impedit";
                key = "eos";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "dicta";
                uploadProtocol = "minima";
            }};            

            AnalyticsadminPropertiesUserLinksBatchCreateResponse res = sdk.properties.analyticsadminPropertiesUserLinksBatchCreate(req, new AnalyticsadminPropertiesUserLinksBatchCreateSecurity("beatae", "cupiditate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1alphaBatchCreateUserLinksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesUserLinksBatchDelete

Deletes information about multiple users' links to an account or property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksBatchDeleteRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksBatchDeleteResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksBatchDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesUserLinksBatchDeleteRequest req = new AnalyticsadminPropertiesUserLinksBatchDeleteRequest("provident") {{
                dollarXgafv = XgafvEnum.TWO;
                googleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest = new GoogleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest() {{
                    requests = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest[]{{
                        add(new GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest() {{
                            name = "Gilberto Bechtelar";
                        }}),
                        add(new GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest() {{
                            name = "Doyle Jacobs";
                        }}),
                        add(new GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest() {{
                            name = "Denise Runolfsdottir";
                        }}),
                    }};
                }};;
                accessToken = "animi";
                alt = AltEnum.PROTO;
                callback = "nulla";
                fields = "consequatur";
                key = "quasi";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "ducimus";
                uploadType = "natus";
                uploadProtocol = "occaecati";
            }};            

            AnalyticsadminPropertiesUserLinksBatchDeleteResponse res = sdk.properties.analyticsadminPropertiesUserLinksBatchDelete(req, new AnalyticsadminPropertiesUserLinksBatchDeleteSecurity("suscipit", "adipisci") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesUserLinksBatchGet

Gets information about multiple users' links to an account or property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksBatchGetRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksBatchGetResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksBatchGetSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksBatchGetSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksBatchGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesUserLinksBatchGetRequest req = new AnalyticsadminPropertiesUserLinksBatchGetRequest("quasi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "necessitatibus";
                fields = "ipsa";
                key = "tempora";
                names = new String[]{{
                    add("molestiae"),
                    add("dicta"),
                }};
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "praesentium";
                uploadProtocol = "maiores";
            }};            

            AnalyticsadminPropertiesUserLinksBatchGetResponse res = sdk.properties.analyticsadminPropertiesUserLinksBatchGet(req, new AnalyticsadminPropertiesUserLinksBatchGetSecurity() {{
                option1 = new AnalyticsadminPropertiesUserLinksBatchGetSecurityOption1("reiciendis", "vel") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1alphaBatchGetUserLinksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesUserLinksBatchUpdate

Updates information about multiple users' links to an account or property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksBatchUpdateRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksBatchUpdateResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksBatchUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksRequestInput;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaUpdateUserLinkRequestInput;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaUserLinkInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesUserLinksBatchUpdateRequest req = new AnalyticsadminPropertiesUserLinksBatchUpdateRequest("architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                googleAnalyticsAdminV1alphaBatchUpdateUserLinksRequestInput = new GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksRequestInput() {{
                    requests = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaUpdateUserLinkRequestInput[]{{
                        add(new GoogleAnalyticsAdminV1alphaUpdateUserLinkRequestInput() {{
                            userLink = new GoogleAnalyticsAdminV1alphaUserLinkInput() {{
                                directRoles = new String[]{{
                                    add("odio"),
                                }};
                                emailAddress = "tempora";
                            }};
                        }}),
                    }};
                }};;
                accessToken = "esse";
                alt = AltEnum.MEDIA;
                callback = "consectetur";
                fields = "aliquid";
                key = "ipsa";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "sunt";
                uploadType = "nostrum";
                uploadProtocol = "fugiat";
            }};            

            AnalyticsadminPropertiesUserLinksBatchUpdateResponse res = sdk.properties.analyticsadminPropertiesUserLinksBatchUpdate(req, new AnalyticsadminPropertiesUserLinksBatchUpdateSecurity("expedita", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesUserLinksCreate

Creates a user link on an account or property. If the user with the specified email already has permissions on the account or property, then the user's existing permissions will be unioned with the permissions specified in the new UserLink.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksCreateRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksCreateResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaUserLinkInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesUserLinksCreateRequest req = new AnalyticsadminPropertiesUserLinksCreateRequest("officia") {{
                dollarXgafv = XgafvEnum.ONE;
                googleAnalyticsAdminV1alphaUserLinkInput = new GoogleAnalyticsAdminV1alphaUserLinkInput() {{
                    directRoles = new String[]{{
                        add("perferendis"),
                        add("eum"),
                    }};
                    emailAddress = "voluptas";
                }};;
                accessToken = "iste";
                alt = AltEnum.MEDIA;
                callback = "ab";
                fields = "error";
                key = "possimus";
                notifyNewUser = false;
                oauthToken = "voluptates";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "laborum";
                uploadProtocol = "libero";
            }};            

            AnalyticsadminPropertiesUserLinksCreateResponse res = sdk.properties.analyticsadminPropertiesUserLinksCreate(req, new AnalyticsadminPropertiesUserLinksCreateSecurity("ad", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1alphaUserLink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesUserLinksDelete

Deletes a user link on an account or property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksDeleteRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksDeleteResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesUserLinksDeleteRequest req = new AnalyticsadminPropertiesUserLinksDeleteRequest("enim") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellendus";
                alt = AltEnum.MEDIA;
                callback = "quo";
                fields = "ex";
                key = "ut";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "expedita";
                uploadType = "voluptatem";
                uploadProtocol = "molestias";
            }};            

            AnalyticsadminPropertiesUserLinksDeleteResponse res = sdk.properties.analyticsadminPropertiesUserLinksDelete(req, new AnalyticsadminPropertiesUserLinksDeleteSecurity("cum", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesUserLinksGet

Gets information about a user's link to an account or property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksGetRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksGetResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksGetSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksGetSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesUserLinksGetRequest req = new AnalyticsadminPropertiesUserLinksGetRequest("beatae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "omnis";
                alt = AltEnum.JSON;
                callback = "rerum";
                fields = "est";
                key = "culpa";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "officiis";
                uploadProtocol = "architecto";
            }};            

            AnalyticsadminPropertiesUserLinksGetResponse res = sdk.properties.analyticsadminPropertiesUserLinksGet(req, new AnalyticsadminPropertiesUserLinksGetSecurity() {{
                option1 = new AnalyticsadminPropertiesUserLinksGetSecurityOption1("fuga", "pariatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1alphaUserLink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesUserLinksList

Lists all user links on an account or property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksListResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesUserLinksListRequest req = new AnalyticsadminPropertiesUserLinksListRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "alias";
                alt = AltEnum.MEDIA;
                callback = "earum";
                fields = "ex";
                key = "sapiente";
                oauthToken = "rem";
                pageSize = 796320L;
                pageToken = "nemo";
                prettyPrint = false;
                quotaUser = "asperiores";
                uploadType = "ratione";
                uploadProtocol = "ullam";
            }};            

            AnalyticsadminPropertiesUserLinksListResponse res = sdk.properties.analyticsadminPropertiesUserLinksList(req, new AnalyticsadminPropertiesUserLinksListSecurity() {{
                option1 = new AnalyticsadminPropertiesUserLinksListSecurityOption1("perferendis", "illum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1alphaListUserLinksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesUserLinksPatch

Updates a user link on an account or property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksPatchRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksPatchResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesUserLinksPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaUserLinkInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesUserLinksPatchRequest req = new AnalyticsadminPropertiesUserLinksPatchRequest("totam") {{
                dollarXgafv = XgafvEnum.TWO;
                googleAnalyticsAdminV1alphaUserLinkInput = new GoogleAnalyticsAdminV1alphaUserLinkInput() {{
                    directRoles = new String[]{{
                        add("nam"),
                        add("ipsam"),
                        add("culpa"),
                        add("dolor"),
                    }};
                    emailAddress = "aliquam";
                }};;
                accessToken = "inventore";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "tempora";
                key = "dolor";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "architecto";
                updateMask = "sit";
                uploadType = "modi";
                uploadProtocol = "fugit";
            }};            

            AnalyticsadminPropertiesUserLinksPatchResponse res = sdk.properties.analyticsadminPropertiesUserLinksPatch(req, new AnalyticsadminPropertiesUserLinksPatchSecurity("ab", "laudantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1alphaUserLink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
