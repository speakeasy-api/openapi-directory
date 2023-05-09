# projects

### Available Operations

* [integrationsProjectsLocationsAppsScriptProjectsCreate](#integrationsprojectslocationsappsscriptprojectscreate) - Creates an Apps Script project.
* [integrationsProjectsLocationsAppsScriptProjectsLink](#integrationsprojectslocationsappsscriptprojectslink) - Links a existing Apps Script project.
* [integrationsProjectsLocationsConnectionsList](#integrationsprojectslocationsconnectionslist) - Lists Connections in a given project and location.
* [integrationsProjectsLocationsConnectionsRuntimeActionSchemasList](#integrationsprojectslocationsconnectionsruntimeactionschemaslist) - Lists the JSON schemas for the inputs and outputs of actions, filtered by action name.
* [integrationsProjectsLocationsConnectionsRuntimeEntitySchemasList](#integrationsprojectslocationsconnectionsruntimeentityschemaslist) - Lists the JSON schemas for the properties of runtime entities, filtered by entity name.
* [integrationsProjectsLocationsProductsAuthConfigsCreate](#integrationsprojectslocationsproductsauthconfigscreate) - Creates an auth config record. Fetch corresponding credentials for specific auth types, e.g. access token for OAuth 2.0, JWT token for JWT. Encrypt the auth config with Cloud KMS and store the encrypted credentials in Spanner. Returns the encrypted auth config.
* [integrationsProjectsLocationsProductsAuthConfigsList](#integrationsprojectslocationsproductsauthconfigslist) - Lists all auth configs that match the filter. Restrict to auth configs belong to the current client only.
* [integrationsProjectsLocationsProductsCertificatesCreate](#integrationsprojectslocationsproductscertificatescreate) - Creates a new certificate. The certificate will be registered to the trawler service and will be encrypted using cloud KMS and stored in Spanner Returns the certificate.
* [integrationsProjectsLocationsProductsCertificatesList](#integrationsprojectslocationsproductscertificateslist) - List all the certificates that match the filter. Restrict to certificate of current client only.
* [integrationsProjectsLocationsProductsIntegrationsExecute](#integrationsprojectslocationsproductsintegrationsexecute) - Executes integrations synchronously by passing the trigger id in the request body. The request is not returned until the requested executions are either fulfilled or experienced an error. If the integration name is not specified (passing `-`), all of the associated integration under the given trigger_id will be executed. Otherwise only the specified integration for the given `trigger_id` is executed. This is helpful for execution the integration from UI.
* [integrationsProjectsLocationsProductsIntegrationsExecutionsCancel](#integrationsprojectslocationsproductsintegrationsexecutionscancel) - Cancellation of an execution
* [integrationsProjectsLocationsProductsIntegrationsExecutionsList](#integrationsprojectslocationsproductsintegrationsexecutionslist) - Lists the results of all the integration executions. The response includes the same information as the [execution log](https://cloud.google.com/application-integration/docs/viewing-logs) in the Integration UI.
* [integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLift](#integrationsprojectslocationsproductsintegrationsexecutionssuspensionslift) - * Lifts suspension for advanced suspension task. Fetch corresponding suspension with provided suspension Id, resolve suspension, and set up suspension result for the Suspension Task.
* [integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsList](#integrationsprojectslocationsproductsintegrationsexecutionssuspensionslist) - * Lists suspensions associated with a specific execution. Only those with permissions to resolve the relevant suspensions will be able to view them.
* [integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolve](#integrationsprojectslocationsproductsintegrationsexecutionssuspensionsresolve) - * Resolves (lifts/rejects) any number of suspensions. If the integration is already running, only the status of the suspension is updated. Otherwise, the suspended integration will begin execution again.
* [integrationsProjectsLocationsProductsIntegrationsList](#integrationsprojectslocationsproductsintegrationslist) - Returns the list of all integrations in the specified project.
* [integrationsProjectsLocationsProductsIntegrationsSchedule](#integrationsprojectslocationsproductsintegrationsschedule) - Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.
* [integrationsProjectsLocationsProductsIntegrationsVersionsDownload](#integrationsprojectslocationsproductsintegrationsversionsdownload) - Downloads an integration. Retrieves the `IntegrationVersion` for a given `integration_id` and returns the response as a string.
* [integrationsProjectsLocationsProductsIntegrationsVersionsPublish](#integrationsprojectslocationsproductsintegrationsversionspublish) - This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. This RPC throws an exception if the version being published is DRAFT, and if the `locked_by` user is not the same as the user performing the Publish. Audit fields updated include last_published_timestamp, last_published_by, last_modified_timestamp, last_modified_by. Any existing lock is on this integration is released.
* [integrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLock](#integrationsprojectslocationsproductsintegrationsversionstakeovereditlock) - Clears the `locked_by` and `locked_at_timestamp`in the DRAFT version of this integration. It then performs the same action as the CreateDraftIntegrationVersion (i.e., copies the DRAFT version of the integration as a SNAPSHOT and then creates a new DRAFT version with the `locked_by` set to the `user_taking_over` and the `locked_at_timestamp` set to the current timestamp). Both the `locked_by` and `user_taking_over` are notified via email about the takeover. This RPC throws an exception if the integration is not in DRAFT status or if the `locked_by` and `locked_at_timestamp` fields are not set.The TakeoverEdit lock is treated the same as an edit of the integration, and hence shares ACLs with edit. Audit fields updated include last_modified_timestamp, last_modified_by.
* [integrationsProjectsLocationsProductsIntegrationsVersionsUnpublish](#integrationsprojectslocationsproductsintegrationsversionsunpublish) - Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it. The "HEAD" and "PUBLISH_REQUESTED" tags do not change. This RPC throws an exception if the version being snapshot is not ACTIVE. Audit fields added include action, action_by, action_timestamp.
* [integrationsProjectsLocationsProductsIntegrationsVersionsUpload](#integrationsprojectslocationsproductsintegrationsversionsupload) - Uploads an integration. The content can be a previously downloaded integration. Performs the same function as CreateDraftIntegrationVersion, but accepts input in a string format, which holds the complete representation of the IntegrationVersion content.
* [integrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreate](#integrationsprojectslocationsproductsintegrationtemplatesversionscreate) - Creates an IntegrationTemplateVersion.
* [integrationsProjectsLocationsProductsIntegrationtemplatesVersionsList](#integrationsprojectslocationsproductsintegrationtemplatesversionslist) - Returns the list of all IntegrationTemplateVersions in the specified project.
* [integrationsProjectsLocationsSfdcInstancesCreate](#integrationsprojectslocationssfdcinstancescreate) - Creates an sfdc instance record. Store the sfdc instance in Spanner. Returns the sfdc instance.
* [integrationsProjectsLocationsSfdcInstancesList](#integrationsprojectslocationssfdcinstanceslist) - Lists all sfdc instances that match the filter. Restrict to sfdc instances belonging to the current client only.
* [integrationsProjectsLocationsSfdcInstancesSfdcChannelsCreate](#integrationsprojectslocationssfdcinstancessfdcchannelscreate) - Creates an sfdc channel record. Store the sfdc channel in Spanner. Returns the sfdc channel.
* [integrationsProjectsLocationsSfdcInstancesSfdcChannelsDelete](#integrationsprojectslocationssfdcinstancessfdcchannelsdelete) - Deletes an sfdc channel.
* [integrationsProjectsLocationsSfdcInstancesSfdcChannelsGet](#integrationsprojectslocationssfdcinstancessfdcchannelsget) - Gets an sfdc channel. If the channel doesn't exist, Code.NOT_FOUND exception will be thrown.
* [integrationsProjectsLocationsSfdcInstancesSfdcChannelsList](#integrationsprojectslocationssfdcinstancessfdcchannelslist) - Lists all sfdc channels that match the filter. Restrict to sfdc channels belonging to the current client only.
* [integrationsProjectsLocationsSfdcInstancesSfdcChannelsPatch](#integrationsprojectslocationssfdcinstancessfdcchannelspatch) - Updates an sfdc channel. Updates the sfdc channel in spanner. Returns the sfdc channel.

## integrationsProjectsLocationsAppsScriptProjectsCreate

Creates an Apps Script project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsAppsScriptProjectsCreateRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsAppsScriptProjectsCreateResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsAppsScriptProjectsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsAppsScriptProjectsCreateRequest req = new IntegrationsProjectsLocationsAppsScriptProjectsCreateRequest("porro") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest = new GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest() {{
                    appsScriptProject = "dicta";
                    authConfigId = "nam";
                }};;
                accessToken = "officia";
                alt = AltEnum.MEDIA;
                callback = "fugit";
                fields = "deleniti";
                key = "hic";
                oauthToken = "optio";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "beatae";
                uploadProtocol = "commodi";
            }};            

            IntegrationsProjectsLocationsAppsScriptProjectsCreateResponse res = sdk.projects.integrationsProjectsLocationsAppsScriptProjectsCreate(req, new IntegrationsProjectsLocationsAppsScriptProjectsCreateSecurity("molestiae", "modi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaCreateAppsScriptProjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## integrationsProjectsLocationsAppsScriptProjectsLink

Links a existing Apps Script project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsAppsScriptProjectsLinkRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsAppsScriptProjectsLinkResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsAppsScriptProjectsLinkSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsAppsScriptProjectsLinkRequest req = new IntegrationsProjectsLocationsAppsScriptProjectsLinkRequest("qui") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudIntegrationsV1alphaLinkAppsScriptProjectRequest = new GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectRequest() {{
                    scriptId = "cum";
                }};;
                accessToken = "esse";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "aspernatur";
                key = "perferendis";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "sed";
                uploadProtocol = "iste";
            }};            

            IntegrationsProjectsLocationsAppsScriptProjectsLinkResponse res = sdk.projects.integrationsProjectsLocationsAppsScriptProjectsLink(req, new IntegrationsProjectsLocationsAppsScriptProjectsLinkSecurity("dolor", "natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaLinkAppsScriptProjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## integrationsProjectsLocationsConnectionsList

Lists Connections in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsConnectionsListRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsConnectionsListResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsConnectionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsConnectionsListRequest req = new IntegrationsProjectsLocationsConnectionsListRequest("laboriosam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "saepe";
                alt = AltEnum.PROTO;
                callback = "in";
                fields = "corporis";
                filter = "iste";
                key = "iure";
                oauthToken = "saepe";
                orderBy = "quidem";
                pageSize = 99280L;
                pageToken = "ipsa";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "est";
                uploadProtocol = "mollitia";
            }};            

            IntegrationsProjectsLocationsConnectionsListResponse res = sdk.projects.integrationsProjectsLocationsConnectionsList(req, new IntegrationsProjectsLocationsConnectionsListSecurity("laborum", "dolores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaListConnectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## integrationsProjectsLocationsConnectionsRuntimeActionSchemasList

Lists the JSON schemas for the inputs and outputs of actions, filtered by action name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListRequest req = new IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListRequest("dolorem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "explicabo";
                alt = AltEnum.PROTO;
                callback = "enim";
                fields = "omnis";
                filter = "nemo";
                key = "minima";
                oauthToken = "excepturi";
                pageSize = 38425L;
                pageToken = "iure";
                prettyPrint = false;
                quotaUser = "culpa";
                uploadType = "doloribus";
                uploadProtocol = "sapiente";
            }};            

            IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListResponse res = sdk.projects.integrationsProjectsLocationsConnectionsRuntimeActionSchemasList(req, new IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListSecurity("architecto", "mollitia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## integrationsProjectsLocationsConnectionsRuntimeEntitySchemasList

Lists the JSON schemas for the properties of runtime entities, filtered by entity name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListRequest req = new IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListRequest("dolorem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequuntur";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                fields = "occaecati";
                filter = "numquam";
                key = "commodi";
                oauthToken = "quam";
                pageSize = 474697L;
                pageToken = "velit";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "quia";
                uploadProtocol = "quis";
            }};            

            IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListResponse res = sdk.projects.integrationsProjectsLocationsConnectionsRuntimeEntitySchemasList(req, new IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListSecurity("vitae", "laborum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## integrationsProjectsLocationsProductsAuthConfigsCreate

Creates an auth config record. Fetch corresponding credentials for specific auth types, e.g. access token for OAuth 2.0, JWT token for JWT. Encrypt the auth config with Cloud KMS and store the encrypted credentials in Spanner. Returns the encrypted auth config.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsAuthConfigsCreateRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsAuthConfigsCreateResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsAuthConfigsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaAccessToken;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaAuthConfigInput;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaAuthConfigStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnum;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaAuthToken;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaBooleanParameterArray;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaCredential;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaDoubleParameterArray;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaIntParameterArray;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaJwt;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaOidcToken;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaParameterMap;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaParameterMapEntry;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaParameterMapField;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaServiceAccountCredentials;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaStringParameterArray;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaUsernameAndPassword;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaValueType;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsProductsAuthConfigsCreateRequest req = new IntegrationsProjectsLocationsProductsAuthConfigsCreateRequest("animi") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudIntegrationsV1alphaAuthConfigInput = new GoogleCloudIntegrationsV1alphaAuthConfigInput() {{
                    certificateId = "odit";
                    creatorEmail = "quo";
                    credentialType = GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum.API_KEY;
                    decryptedCredential = new GoogleCloudIntegrationsV1alphaCredential() {{
                        authToken = new GoogleCloudIntegrationsV1alphaAuthToken() {{
                            token = "tenetur";
                            type = "ipsam";
                        }};;
                        credentialType = GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum.JWT;
                        jwt = new GoogleCloudIntegrationsV1alphaJwt() {{
                            jwt = "possimus";
                            jwtHeader = "aut";
                            jwtPayload = "quasi";
                            secret = "error";
                        }};;
                        oauth2AuthorizationCode = new GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode() {{
                            accessToken = new GoogleCloudIntegrationsV1alphaAccessToken() {{
                                accessToken = "temporibus";
                                accessTokenExpireTime = "laborum";
                                refreshToken = "quasi";
                                refreshTokenExpireTime = "reiciendis";
                                tokenType = "voluptatibus";
                            }};;
                            applyReauthPolicy = false;
                            authCode = "vero";
                            authEndpoint = "nihil";
                            authParams = new GoogleCloudIntegrationsV1alphaParameterMap() {{
                                entries = new org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaParameterMapEntry[]{{
                                    add(new GoogleCloudIntegrationsV1alphaParameterMapEntry() {{
                                        key = new GoogleCloudIntegrationsV1alphaParameterMapField() {{
                                            literalValue = new GoogleCloudIntegrationsV1alphaValueType() {{
                                                booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(6048.46),
                                                    }};
                                                }};
                                                doubleValue = 4511.59;
                                                intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("perferendis"),
                                                        add("doloremque"),
                                                        add("reprehenderit"),
                                                    }};
                                                }};
                                                intValue = "ut";
                                                jsonValue = "maiores";
                                                stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("corporis"),
                                                    }};
                                                }};
                                                stringValue = "dolore";
                                            }};
                                            referenceKey = "iusto";
                                        }};
                                        value = new GoogleCloudIntegrationsV1alphaParameterMapField() {{
                                            literalValue = new GoogleCloudIntegrationsV1alphaValueType() {{
                                                booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(3179.83),
                                                        add(8804.76),
                                                        add(4142.63),
                                                    }};
                                                }};
                                                doubleValue = 9182.36;
                                                intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("ipsum"),
                                                    }};
                                                }};
                                                intValue = "quidem";
                                                jsonValue = "molestias";
                                                stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("pariatur"),
                                                        add("modi"),
                                                        add("praesentium"),
                                                    }};
                                                }};
                                                stringValue = "rem";
                                            }};
                                            referenceKey = "voluptates";
                                        }};
                                    }}),
                                    add(new GoogleCloudIntegrationsV1alphaParameterMapEntry() {{
                                        key = new GoogleCloudIntegrationsV1alphaParameterMapField() {{
                                            literalValue = new GoogleCloudIntegrationsV1alphaValueType() {{
                                                booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(5759.47),
                                                        add(831.12),
                                                        add(9292.97),
                                                        add(2777.18),
                                                    }};
                                                }};
                                                doubleValue = 3185.69;
                                                intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("est"),
                                                    }};
                                                }};
                                                intValue = "quibusdam";
                                                jsonValue = "explicabo";
                                                stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("distinctio"),
                                                        add("quibusdam"),
                                                        add("labore"),
                                                    }};
                                                }};
                                                stringValue = "modi";
                                            }};
                                            referenceKey = "qui";
                                        }};
                                        value = new GoogleCloudIntegrationsV1alphaParameterMapField() {{
                                            literalValue = new GoogleCloudIntegrationsV1alphaValueType() {{
                                                booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(5528.22),
                                                        add(201.07),
                                                        add(1649.4),
                                                    }};
                                                }};
                                                doubleValue = 8289.4;
                                                intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("alias"),
                                                        add("fugit"),
                                                    }};
                                                }};
                                                intValue = "dolorum";
                                                jsonValue = "excepturi";
                                                stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("facilis"),
                                                        add("tempore"),
                                                    }};
                                                }};
                                                stringValue = "labore";
                                            }};
                                            referenceKey = "delectus";
                                        }};
                                    }}),
                                    add(new GoogleCloudIntegrationsV1alphaParameterMapEntry() {{
                                        key = new GoogleCloudIntegrationsV1alphaParameterMapField() {{
                                            literalValue = new GoogleCloudIntegrationsV1alphaValueType() {{
                                                booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(7561.07),
                                                    }};
                                                }};
                                                doubleValue = 5761.57;
                                                intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("provident"),
                                                        add("necessitatibus"),
                                                    }};
                                                }};
                                                intValue = "sint";
                                                jsonValue = "officia";
                                                stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("debitis"),
                                                    }};
                                                }};
                                                stringValue = "a";
                                            }};
                                            referenceKey = "dolorum";
                                        }};
                                        value = new GoogleCloudIntegrationsV1alphaParameterMapField() {{
                                            literalValue = new GoogleCloudIntegrationsV1alphaValueType() {{
                                                booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(8464.09),
                                                        add(9785.71),
                                                    }};
                                                }};
                                                doubleValue = 6994.79;
                                                intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("magnam"),
                                                    }};
                                                }};
                                                intValue = "cumque";
                                                jsonValue = "facere";
                                                stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("aliquid"),
                                                        add("laborum"),
                                                    }};
                                                }};
                                                stringValue = "accusamus";
                                            }};
                                            referenceKey = "non";
                                        }};
                                    }}),
                                }};
                                keyType = GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum.INT_ARRAY;
                                valueType = GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum.DOUBLE_VALUE;
                            }};;
                            clientId = "accusamus";
                            clientSecret = "delectus";
                            requestType = GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum.QUERY_PARAMETERS;
                            scope = "provident";
                            tokenEndpoint = "nam";
                            tokenParams = new GoogleCloudIntegrationsV1alphaParameterMap() {{
                                entries = new org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaParameterMapEntry[]{{
                                    add(new GoogleCloudIntegrationsV1alphaParameterMapEntry() {{
                                        key = new GoogleCloudIntegrationsV1alphaParameterMapField() {{
                                            literalValue = new GoogleCloudIntegrationsV1alphaValueType() {{
                                                booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(9560.84),
                                                        add(2305.33),
                                                        add(6439.9),
                                                    }};
                                                }};
                                                doubleValue = 3948.69;
                                                intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("natus"),
                                                        add("omnis"),
                                                    }};
                                                }};
                                                intValue = "molestiae";
                                                jsonValue = "perferendis";
                                                stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("magnam"),
                                                        add("distinctio"),
                                                    }};
                                                }};
                                                stringValue = "id";
                                            }};
                                            referenceKey = "labore";
                                        }};
                                        value = new GoogleCloudIntegrationsV1alphaParameterMapField() {{
                                            literalValue = new GoogleCloudIntegrationsV1alphaValueType() {{
                                                booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(6180.16),
                                                        add(7491.7),
                                                    }};
                                                }};
                                                doubleValue = 4287.69;
                                                intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("aspernatur"),
                                                        add("architecto"),
                                                        add("magnam"),
                                                        add("et"),
                                                    }};
                                                }};
                                                intValue = "excepturi";
                                                jsonValue = "ullam";
                                                stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("quos"),
                                                        add("sint"),
                                                        add("accusantium"),
                                                    }};
                                                }};
                                                stringValue = "mollitia";
                                            }};
                                            referenceKey = "reiciendis";
                                        }};
                                    }}),
                                    add(new GoogleCloudIntegrationsV1alphaParameterMapEntry() {{
                                        key = new GoogleCloudIntegrationsV1alphaParameterMapField() {{
                                            literalValue = new GoogleCloudIntegrationsV1alphaValueType() {{
                                                booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(4314.18),
                                                        add(2212.62),
                                                    }};
                                                }};
                                                doubleValue = 8965.47;
                                                intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("nemo"),
                                                    }};
                                                }};
                                                intValue = "quasi";
                                                jsonValue = "iure";
                                                stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("debitis"),
                                                        add("eius"),
                                                        add("maxime"),
                                                        add("deleniti"),
                                                    }};
                                                }};
                                                stringValue = "facilis";
                                            }};
                                            referenceKey = "in";
                                        }};
                                        value = new GoogleCloudIntegrationsV1alphaParameterMapField() {{
                                            literalValue = new GoogleCloudIntegrationsV1alphaValueType() {{
                                                booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(9194.83),
                                                    }};
                                                }};
                                                doubleValue = 3523.12;
                                                intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("nihil"),
                                                        add("repellat"),
                                                        add("quibusdam"),
                                                    }};
                                                }};
                                                intValue = "sed";
                                                jsonValue = "saepe";
                                                stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("accusantium"),
                                                        add("consequuntur"),
                                                        add("praesentium"),
                                                        add("natus"),
                                                    }};
                                                }};
                                                stringValue = "magni";
                                            }};
                                            referenceKey = "sunt";
                                        }};
                                    }}),
                                    add(new GoogleCloudIntegrationsV1alphaParameterMapEntry() {{
                                        key = new GoogleCloudIntegrationsV1alphaParameterMapField() {{
                                            literalValue = new GoogleCloudIntegrationsV1alphaValueType() {{
                                                booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(8649.34),
                                                        add(8073.19),
                                                        add(4113.97),
                                                        add(5691.01),
                                                    }};
                                                }};
                                                doubleValue = 1399.72;
                                                intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("accusantium"),
                                                        add("ab"),
                                                    }};
                                                }};
                                                intValue = "maiores";
                                                jsonValue = "quidem";
                                                stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("voluptate"),
                                                        add("autem"),
                                                    }};
                                                }};
                                                stringValue = "nam";
                                            }};
                                            referenceKey = "eaque";
                                        }};
                                        value = new GoogleCloudIntegrationsV1alphaParameterMapField() {{
                                            literalValue = new GoogleCloudIntegrationsV1alphaValueType() {{
                                                booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(9755.22),
                                                        add(166.27),
                                                    }};
                                                }};
                                                doubleValue = 8558.04;
                                                intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("aut"),
                                                    }};
                                                }};
                                                intValue = "cumque";
                                                jsonValue = "corporis";
                                                stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("libero"),
                                                        add("nobis"),
                                                        add("dolores"),
                                                        add("quis"),
                                                    }};
                                                }};
                                                stringValue = "totam";
                                            }};
                                            referenceKey = "dignissimos";
                                        }};
                                    }}),
                                }};
                                keyType = GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum.INTEGRATION_PARAMETER_DATA_TYPE_UNSPECIFIED;
                                valueType = GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum.BOOLEAN_VALUE;
                            }};;
                        }};;
                        oauth2ClientCredentials = new GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials() {{
                            accessToken = new GoogleCloudIntegrationsV1alphaAccessToken() {{
                                accessToken = "nesciunt";
                                accessTokenExpireTime = "eos";
                                refreshToken = "perferendis";
                                refreshTokenExpireTime = "dolores";
                                tokenType = "minus";
                            }};;
                            clientId = "quam";
                            clientSecret = "dolor";
                            requestType = GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnum.ENCODED_HEADER;
                            scope = "nostrum";
                            tokenEndpoint = "hic";
                            tokenParams = new GoogleCloudIntegrationsV1alphaParameterMap() {{
                                entries = new org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaParameterMapEntry[]{{
                                    add(new GoogleCloudIntegrationsV1alphaParameterMapEntry() {{
                                        key = new GoogleCloudIntegrationsV1alphaParameterMapField() {{
                                            literalValue = new GoogleCloudIntegrationsV1alphaValueType() {{
                                                booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(5966.56),
                                                        add(318.38),
                                                        add(7836.45),
                                                    }};
                                                }};
                                                doubleValue = 1646.94;
                                                intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("error"),
                                                        add("eaque"),
                                                        add("occaecati"),
                                                    }};
                                                }};
                                                intValue = "rerum";
                                                jsonValue = "adipisci";
                                                stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("earum"),
                                                        add("modi"),
                                                        add("iste"),
                                                        add("dolorum"),
                                                    }};
                                                }};
                                                stringValue = "deleniti";
                                            }};
                                            referenceKey = "pariatur";
                                        }};
                                        value = new GoogleCloudIntegrationsV1alphaParameterMapField() {{
                                            literalValue = new GoogleCloudIntegrationsV1alphaValueType() {{
                                                booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(7301.22),
                                                        add(9644.9),
                                                        add(3119.45),
                                                        add(5542.42),
                                                    }};
                                                }};
                                                doubleValue = 3982.21;
                                                intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("dolorem"),
                                                    }};
                                                }};
                                                intValue = "dolor";
                                                jsonValue = "qui";
                                                stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("hic"),
                                                    }};
                                                }};
                                                stringValue = "excepturi";
                                            }};
                                            referenceKey = "cum";
                                        }};
                                    }}),
                                    add(new GoogleCloudIntegrationsV1alphaParameterMapEntry() {{
                                        key = new GoogleCloudIntegrationsV1alphaParameterMapField() {{
                                            literalValue = new GoogleCloudIntegrationsV1alphaValueType() {{
                                                booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(9702.37),
                                                        add(2274.14),
                                                    }};
                                                }};
                                                doubleValue = 6805.45;
                                                intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("veritatis"),
                                                        add("ipsa"),
                                                    }};
                                                }};
                                                intValue = "ipsa";
                                                jsonValue = "iure";
                                                stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("quaerat"),
                                                        add("accusamus"),
                                                    }};
                                                }};
                                                stringValue = "quidem";
                                            }};
                                            referenceKey = "voluptatibus";
                                        }};
                                        value = new GoogleCloudIntegrationsV1alphaParameterMapField() {{
                                            literalValue = new GoogleCloudIntegrationsV1alphaValueType() {{
                                                booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(1796.03),
                                                        add(5424.99),
                                                        add(246.78),
                                                    }};
                                                }};
                                                doubleValue = 8546.14;
                                                intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("soluta"),
                                                    }};
                                                }};
                                                intValue = "dolorum";
                                                jsonValue = "iusto";
                                                stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("dolorum"),
                                                        add("deleniti"),
                                                    }};
                                                }};
                                                stringValue = "omnis";
                                            }};
                                            referenceKey = "necessitatibus";
                                        }};
                                    }}),
                                    add(new GoogleCloudIntegrationsV1alphaParameterMapEntry() {{
                                        key = new GoogleCloudIntegrationsV1alphaParameterMapField() {{
                                            literalValue = new GoogleCloudIntegrationsV1alphaValueType() {{
                                                booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(4694.97),
                                                        add(2168.97),
                                                        add(4560.15),
                                                        add(6630.78),
                                                    }};
                                                }};
                                                doubleValue = 9064.18;
                                                intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("aspernatur"),
                                                        add("perferendis"),
                                                    }};
                                                }};
                                                intValue = "amet";
                                                jsonValue = "optio";
                                                stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("ad"),
                                                        add("saepe"),
                                                        add("suscipit"),
                                                        add("deserunt"),
                                                    }};
                                                }};
                                                stringValue = "provident";
                                            }};
                                            referenceKey = "minima";
                                        }};
                                        value = new GoogleCloudIntegrationsV1alphaParameterMapField() {{
                                            literalValue = new GoogleCloudIntegrationsV1alphaValueType() {{
                                                booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(6289.82),
                                                        add(0.55),
                                                        add(8726.51),
                                                    }};
                                                }};
                                                doubleValue = 3118.6;
                                                intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("vel"),
                                                        add("quod"),
                                                    }};
                                                }};
                                                intValue = "officiis";
                                                jsonValue = "qui";
                                                stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("a"),
                                                        add("esse"),
                                                        add("harum"),
                                                    }};
                                                }};
                                                stringValue = "iusto";
                                            }};
                                            referenceKey = "ipsum";
                                        }};
                                    }}),
                                    add(new GoogleCloudIntegrationsV1alphaParameterMapEntry() {{
                                        key = new GoogleCloudIntegrationsV1alphaParameterMapField() {{
                                            literalValue = new GoogleCloudIntegrationsV1alphaValueType() {{
                                                booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(2294.42),
                                                        add(7308.56),
                                                        add(8802.98),
                                                        add(2539.41),
                                                    }};
                                                }};
                                                doubleValue = 3136.92;
                                                intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("sapiente"),
                                                    }};
                                                }};
                                                intValue = "totam";
                                                jsonValue = "nihil";
                                                stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("expedita"),
                                                    }};
                                                }};
                                                stringValue = "neque";
                                            }};
                                            referenceKey = "sed";
                                        }};
                                        value = new GoogleCloudIntegrationsV1alphaParameterMapField() {{
                                            literalValue = new GoogleCloudIntegrationsV1alphaValueType() {{
                                                booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(3741.7),
                                                        add(6462.65),
                                                        add(4635.75),
                                                    }};
                                                }};
                                                doubleValue = 2148.8;
                                                intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("qui"),
                                                        add("cupiditate"),
                                                    }};
                                                }};
                                                intValue = "maxime";
                                                jsonValue = "pariatur";
                                                stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("dicta"),
                                                        add("laborum"),
                                                        add("totam"),
                                                    }};
                                                }};
                                                stringValue = "incidunt";
                                            }};
                                            referenceKey = "aspernatur";
                                        }};
                                    }}),
                                }};
                                keyType = GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum.INT_VALUE;
                                valueType = GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum.BOOLEAN_ARRAY;
                            }};;
                        }};;
                        oauth2ResourceOwnerCredentials = new GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials() {{
                            accessToken = new GoogleCloudIntegrationsV1alphaAccessToken() {{
                                accessToken = "facilis";
                                accessTokenExpireTime = "aliquid";
                                refreshToken = "quam";
                                refreshTokenExpireTime = "molestias";
                                tokenType = "temporibus";
                            }};;
                            clientId = "qui";
                            clientSecret = "neque";
                            password = "fugit";
                            requestType = GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum.REQUEST_TYPE_UNSPECIFIED;
                            scope = "odio";
                            tokenEndpoint = "sunt";
                            tokenParams = new GoogleCloudIntegrationsV1alphaParameterMap() {{
                                entries = new org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaParameterMapEntry[]{{
                                    add(new GoogleCloudIntegrationsV1alphaParameterMapEntry() {{
                                        key = new GoogleCloudIntegrationsV1alphaParameterMapField() {{
                                            literalValue = new GoogleCloudIntegrationsV1alphaValueType() {{
                                                booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(304.52),
                                                        add(7653.26),
                                                        add(7469.94),
                                                        add(7486.64),
                                                    }};
                                                }};
                                                doubleValue = 925.96;
                                                intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("ipsum"),
                                                        add("veritatis"),
                                                        add("nobis"),
                                                        add("quos"),
                                                    }};
                                                }};
                                                intValue = "tempore";
                                                jsonValue = "cupiditate";
                                                stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("delectus"),
                                                    }};
                                                }};
                                                stringValue = "dolorem";
                                            }};
                                            referenceKey = "dolore";
                                        }};
                                        value = new GoogleCloudIntegrationsV1alphaParameterMapField() {{
                                            literalValue = new GoogleCloudIntegrationsV1alphaValueType() {{
                                                booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(6772.63),
                                                    }};
                                                }};
                                                doubleValue = 1002.94;
                                                intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("aut"),
                                                    }};
                                                }};
                                                intValue = "quas";
                                                jsonValue = "itaque";
                                                stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("est"),
                                                    }};
                                                }};
                                                stringValue = "repellendus";
                                            }};
                                            referenceKey = "porro";
                                        }};
                                    }}),
                                    add(new GoogleCloudIntegrationsV1alphaParameterMapEntry() {{
                                        key = new GoogleCloudIntegrationsV1alphaParameterMapField() {{
                                            literalValue = new GoogleCloudIntegrationsV1alphaValueType() {{
                                                booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(7034.95),
                                                        add(5864.1),
                                                    }};
                                                }};
                                                doubleValue = 1816.31;
                                                intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("laudantium"),
                                                    }};
                                                }};
                                                intValue = "odio";
                                                jsonValue = "occaecati";
                                                stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("quisquam"),
                                                        add("vero"),
                                                        add("omnis"),
                                                        add("quis"),
                                                    }};
                                                }};
                                                stringValue = "ipsum";
                                            }};
                                            referenceKey = "delectus";
                                        }};
                                        value = new GoogleCloudIntegrationsV1alphaParameterMapField() {{
                                            literalValue = new GoogleCloudIntegrationsV1alphaValueType() {{
                                                booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(8788.7),
                                                    }};
                                                }};
                                                doubleValue = 9493.19;
                                                intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("hic"),
                                                        add("distinctio"),
                                                    }};
                                                }};
                                                intValue = "quod";
                                                jsonValue = "odio";
                                                stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("facilis"),
                                                        add("vero"),
                                                        add("ducimus"),
                                                    }};
                                                }};
                                                stringValue = "dolore";
                                            }};
                                            referenceKey = "quibusdam";
                                        }};
                                    }}),
                                }};
                                keyType = GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum.PROTO_VALUE;
                                valueType = GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum.INT_VALUE;
                            }};;
                            username = "Liam97";
                        }};;
                        oidcToken = new GoogleCloudIntegrationsV1alphaOidcToken() {{
                            audience = "exercitationem";
                            serviceAccountEmail = "nulla";
                            token = "fugit";
                            tokenExpireTime = "porro";
                        }};;
                        serviceAccountCredentials = new GoogleCloudIntegrationsV1alphaServiceAccountCredentials() {{
                            scope = "maiores";
                            serviceAccount = "doloribus";
                        }};;
                        usernameAndPassword = new GoogleCloudIntegrationsV1alphaUsernameAndPassword() {{
                            password = "iusto";
                            username = "Nick63";
                        }};;
                    }};;
                    description = "tempora";
                    displayName = "ipsam";
                    encryptedCredential = "ea";
                    expiryNotificationDuration = new String[]{{
                        add("vel"),
                    }};
                    lastModifierEmail = "possimus";
                    name = "Paula Jacobs I";
                    overrideValidTime = "maiores";
                    reason = "quasi";
                    state = GoogleCloudIntegrationsV1alphaAuthConfigStateEnum.INVALID;
                    validTime = "nulla";
                    visibility = GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnum.PRIVATE_;
                }};;
                accessToken = "voluptatibus";
                alt = AltEnum.MEDIA;
                callback = "sapiente";
                clientCertificateEncryptedPrivateKey = "quisquam";
                clientCertificatePassphrase = "saepe";
                clientCertificateSslCertificate = "ea";
                fields = "impedit";
                key = "corporis";
                oauthToken = "veniam";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "inventore";
                uploadProtocol = "magnam";
            }};            

            IntegrationsProjectsLocationsProductsAuthConfigsCreateResponse res = sdk.projects.integrationsProjectsLocationsProductsAuthConfigsCreate(req, new IntegrationsProjectsLocationsProductsAuthConfigsCreateSecurity("ea", "quo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaAuthConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## integrationsProjectsLocationsProductsAuthConfigsList

Lists all auth configs that match the filter. Restrict to auth configs belong to the current client only.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsAuthConfigsListRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsAuthConfigsListResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsAuthConfigsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsProductsAuthConfigsListRequest req = new IntegrationsProjectsLocationsProductsAuthConfigsListRequest("consectetur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "eaque";
                fields = "a";
                filter = "libero";
                key = "aut";
                oauthToken = "aut";
                pageSize = 533466L;
                pageToken = "impedit";
                prettyPrint = false;
                quotaUser = "aliquam";
                readMask = "fugit";
                uploadType = "accusamus";
                uploadProtocol = "inventore";
            }};            

            IntegrationsProjectsLocationsProductsAuthConfigsListResponse res = sdk.projects.integrationsProjectsLocationsProductsAuthConfigsList(req, new IntegrationsProjectsLocationsProductsAuthConfigsListSecurity("non", "et") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaListAuthConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## integrationsProjectsLocationsProductsCertificatesCreate

Creates a new certificate. The certificate will be registered to the trawler service and will be encrypted using cloud KMS and stored in Spanner Returns the certificate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsCertificatesCreateRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsCertificatesCreateResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsCertificatesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaCertificateInput;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaClientCertificate;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsProductsCertificatesCreateRequest req = new IntegrationsProjectsLocationsProductsCertificatesCreateRequest("dolorum") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudIntegrationsV1alphaCertificateInput = new GoogleCloudIntegrationsV1alphaCertificateInput() {{
                    certificateStatus = GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum.EXPIRED;
                    credentialId = "velit";
                    description = "eum";
                    displayName = "autem";
                    rawCertificate = new GoogleCloudIntegrationsV1alphaClientCertificate() {{
                        encryptedPrivateKey = "nobis";
                        passphrase = "quas";
                        sslCertificate = "assumenda";
                    }};;
                    requestorId = "nulla";
                }};;
                accessToken = "voluptas";
                alt = AltEnum.PROTO;
                callback = "quasi";
                fields = "tempora";
                key = "numquam";
                oauthToken = "explicabo";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "ipsa";
                uploadProtocol = "molestiae";
            }};            

            IntegrationsProjectsLocationsProductsCertificatesCreateResponse res = sdk.projects.integrationsProjectsLocationsProductsCertificatesCreate(req, new IntegrationsProjectsLocationsProductsCertificatesCreateSecurity("magnam", "odio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaCertificate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## integrationsProjectsLocationsProductsCertificatesList

List all the certificates that match the filter. Restrict to certificate of current client only.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsCertificatesListRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsCertificatesListResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsCertificatesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsProductsCertificatesListRequest req = new IntegrationsProjectsLocationsProductsCertificatesListRequest("eius") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "esse";
                alt = AltEnum.MEDIA;
                callback = "fuga";
                fields = "reprehenderit";
                filter = "quidem";
                key = "fugiat";
                oauthToken = "ut";
                pageSize = 433439L;
                pageToken = "suscipit";
                prettyPrint = false;
                quotaUser = "assumenda";
                readMask = "eos";
                uploadType = "praesentium";
                uploadProtocol = "quisquam";
            }};            

            IntegrationsProjectsLocationsProductsCertificatesListResponse res = sdk.projects.integrationsProjectsLocationsProductsCertificatesList(req, new IntegrationsProjectsLocationsProductsCertificatesListSecurity("veritatis", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaListCertificatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## integrationsProjectsLocationsProductsIntegrationsExecute

Executes integrations synchronously by passing the trigger id in the request body. The request is not returned until the requested executions are either fulfilled or experienced an error. If the integration name is not specified (passing `-`), all of the associated integration under the given trigger_id will be executed. Otherwise only the specified integration for the given `trigger_id` is executed. This is helpful for execution the integration from UI.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsExecuteRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsExecuteResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsExecuteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoEventParameters;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaBooleanParameterArray;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaDoubleParameterArray;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaIntParameterArray;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaStringParameterArray;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaValueType;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsProductsIntegrationsExecuteRequest req = new IntegrationsProjectsLocationsProductsIntegrationsExecuteRequest("id") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudIntegrationsV1alphaExecuteIntegrationsRequest = new GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest() {{
                    doNotPropagateError = false;
                    executionId = "neque";
                    inputParameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaValueType>() {{
                        put("illum", new GoogleCloudIntegrationsV1alphaValueType() {{
                            booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                booleanValues = new Boolean[]{{
                                    add(false),
                                    add(false),
                                    add(false),
                                    add(false),
                                }};
                            }};
                            booleanValue = false;
                            doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                doubleValues = new Double[]{{
                                    add(2594.22),
                                    add(1783.67),
                                    add(3738.13),
                                }};
                            }};
                            doubleValue = 698.59;
                            intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                intValues = new String[]{{
                                    add("consequatur"),
                                    add("tempora"),
                                    add("debitis"),
                                }};
                            }};
                            intValue = "ipsam";
                            jsonValue = "aspernatur";
                            stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                stringValues = new String[]{{
                                    add("quo"),
                                }};
                            }};
                            stringValue = "esse";
                        }});
                        put("recusandae", new GoogleCloudIntegrationsV1alphaValueType() {{
                            booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                booleanValues = new Boolean[]{{
                                    add(false),
                                }};
                            }};
                            booleanValue = false;
                            doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                doubleValues = new Double[]{{
                                    add(7997.96),
                                    add(4908.19),
                                    add(769.56),
                                }};
                            }};
                            doubleValue = 4694.98;
                            intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                intValues = new String[]{{
                                    add("accusamus"),
                                    add("aliquam"),
                                    add("odio"),
                                }};
                            }};
                            intValue = "occaecati";
                            jsonValue = "commodi";
                            stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                stringValues = new String[]{{
                                    add("dolores"),
                                    add("deserunt"),
                                    add("molestiae"),
                                    add("accusantium"),
                                }};
                            }};
                            stringValue = "porro";
                        }});
                        put("eum", new GoogleCloudIntegrationsV1alphaValueType() {{
                            booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                booleanValues = new Boolean[]{{
                                    add(false),
                                    add(false),
                                    add(false),
                                }};
                            }};
                            booleanValue = false;
                            doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                doubleValues = new Double[]{{
                                    add(1598.67),
                                    add(5361.78),
                                    add(1438.29),
                                }};
                            }};
                            doubleValue = 6813.93;
                            intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                intValues = new String[]{{
                                    add("incidunt"),
                                    add("atque"),
                                    add("explicabo"),
                                }};
                            }};
                            intValue = "minima";
                            jsonValue = "nisi";
                            stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                stringValues = new String[]{{
                                    add("sapiente"),
                                }};
                            }};
                            stringValue = "consequuntur";
                        }});
                        put("ratione", new GoogleCloudIntegrationsV1alphaValueType() {{
                            booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                booleanValues = new Boolean[]{{
                                    add(false),
                                }};
                            }};
                            booleanValue = false;
                            doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                doubleValues = new Double[]{{
                                    add(5789.22),
                                    add(5438.06),
                                    add(922.6),
                                    add(4569.11),
                                }};
                            }};
                            doubleValue = 9105.45;
                            intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                intValues = new String[]{{
                                    add("veritatis"),
                                    add("esse"),
                                    add("quod"),
                                    add("nam"),
                                }};
                            }};
                            intValue = "vero";
                            jsonValue = "aliquid";
                            stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                stringValues = new String[]{{
                                    add("saepe"),
                                }};
                            }};
                            stringValue = "vel";
                        }});
                    }};
                    parameterEntries = new org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry[]{{
                        add(new EnterpriseCrmFrontendsEventbusProtoParameterEntry() {{
                            dataType = EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum.INT_ARRAY;
                            key = "rerum";
                            value = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                    booleanValues = new Boolean[]{{
                                        add(false),
                                        add(false),
                                        add(false),
                                    }};
                                }};
                                booleanValue = false;
                                doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                    doubleValues = new Double[]{{
                                        add(7162.44),
                                        add(7567.79),
                                    }};
                                }};
                                doubleValue = 270.69;
                                intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                    intValues = new String[]{{
                                        add("tempore"),
                                        add("adipisci"),
                                        add("cumque"),
                                    }};
                                }};
                                intValue = "consequuntur";
                                jsonValue = "consequatur";
                                protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                    protoValues = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("sapiente", "consectetur");
                                            put("esse", "blanditiis");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("a", "nulla");
                                            put("quas", "esse");
                                            put("quasi", "a");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("sint", "pariatur");
                                            put("possimus", "quia");
                                            put("eveniet", "asperiores");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("veritatis", "consequuntur");
                                            put("quasi", "similique");
                                            put("culpa", "aliquid");
                                            put("tenetur", "quae");
                                        }}),
                                    }};
                                }};
                                protoValue = new java.util.HashMap<String, Object>() {{
                                    put("vel", "in");
                                    put("eius", "libero");
                                    put("illum", "soluta");
                                    put("accusantium", "aliquam");
                                }};
                                serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                    objectValue = "sapiente";
                                }};
                                stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                    stringValues = new String[]{{
                                        add("ullam"),
                                    }};
                                }};
                                stringValue = "reprehenderit";
                            }};
                        }}),
                        add(new EnterpriseCrmFrontendsEventbusProtoParameterEntry() {{
                            dataType = EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum.SERIALIZED_OBJECT_VALUE;
                            key = "nisi";
                            value = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                    booleanValues = new Boolean[]{{
                                        add(false),
                                    }};
                                }};
                                booleanValue = false;
                                doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                    doubleValues = new Double[]{{
                                        add(1852.32),
                                        add(8453.58),
                                        add(4012.59),
                                    }};
                                }};
                                doubleValue = 5362.75;
                                intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                    intValues = new String[]{{
                                        add("dolorum"),
                                        add("architecto"),
                                        add("omnis"),
                                        add("tenetur"),
                                    }};
                                }};
                                intValue = "quasi";
                                jsonValue = "at";
                                protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                    protoValues = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("ipsa", "minima");
                                            put("veritatis", "consectetur");
                                        }}),
                                    }};
                                }};
                                protoValue = new java.util.HashMap<String, Object>() {{
                                    put("iste", "temporibus");
                                }};
                                serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                    objectValue = "accusantium";
                                }};
                                stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                    stringValues = new String[]{{
                                        add("aut"),
                                        add("laudantium"),
                                        add("eum"),
                                    }};
                                }};
                                stringValue = "mollitia";
                            }};
                        }}),
                        add(new EnterpriseCrmFrontendsEventbusProtoParameterEntry() {{
                            dataType = EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum.STRING_VALUE;
                            key = "corrupti";
                            value = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                    booleanValues = new Boolean[]{{
                                        add(false),
                                        add(false),
                                    }};
                                }};
                                booleanValue = false;
                                doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                    doubleValues = new Double[]{{
                                        add(2211.61),
                                    }};
                                }};
                                doubleValue = 5801.52;
                                intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                    intValues = new String[]{{
                                        add("impedit"),
                                        add("explicabo"),
                                    }};
                                }};
                                intValue = "voluptas";
                                jsonValue = "aut";
                                protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                    protoValues = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("maiores", "natus");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("voluptatibus", "voluptas");
                                        }}),
                                    }};
                                }};
                                protoValue = new java.util.HashMap<String, Object>() {{
                                    put("aperiam", "ea");
                                    put("quaerat", "consequuntur");
                                    put("repellendus", "officia");
                                    put("maxime", "dignissimos");
                                }};
                                serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                    objectValue = "officia";
                                }};
                                stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                    stringValues = new String[]{{
                                        add("nemo"),
                                        add("quae"),
                                        add("quaerat"),
                                        add("porro"),
                                    }};
                                }};
                                stringValue = "quod";
                            }};
                        }}),
                    }};
                    parameters = new EnterpriseCrmFrontendsEventbusProtoEventParameters() {{
                        parameters = new org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry[]{{
                            add(new EnterpriseCrmFrontendsEventbusProtoParameterEntry() {{
                                dataType = EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum.STRING_VALUE;
                                key = "adipisci";
                                value = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                    booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                        booleanValues = new Boolean[]{{
                                            add(false),
                                            add(false),
                                            add(false),
                                        }};
                                    }};
                                    booleanValue = false;
                                    doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                        doubleValues = new Double[]{{
                                            add(3807.29),
                                            add(2460.63),
                                            add(6339.31),
                                        }};
                                    }};
                                    doubleValue = 6658.59;
                                    intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                        intValues = new String[]{{
                                            add("totam"),
                                            add("fugiat"),
                                            add("vel"),
                                            add("ducimus"),
                                        }};
                                    }};
                                    intValue = "quos";
                                    jsonValue = "vel";
                                    protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                        protoValues = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("facilis", "cum");
                                                put("commodi", "in");
                                                put("corporis", "reiciendis");
                                                put("assumenda", "nemo");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("aliquid", "aperiam");
                                                put("cum", "consectetur");
                                                put("in", "exercitationem");
                                                put("earum", "facere");
                                            }}),
                                        }};
                                    }};
                                    protoValue = new java.util.HashMap<String, Object>() {{
                                        put("doloribus", "suscipit");
                                        put("reiciendis", "quidem");
                                    }};
                                    serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                        objectValue = "saepe";
                                    }};
                                    stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                        stringValues = new String[]{{
                                            add("dolore"),
                                            add("sunt"),
                                            add("asperiores"),
                                            add("adipisci"),
                                        }};
                                    }};
                                    stringValue = "non";
                                }};
                            }}),
                            add(new EnterpriseCrmFrontendsEventbusProtoParameterEntry() {{
                                dataType = EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum.BOOLEAN_VALUE;
                                key = "beatae";
                                value = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                    booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                        booleanValues = new Boolean[]{{
                                            add(false),
                                            add(false),
                                        }};
                                    }};
                                    booleanValue = false;
                                    doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                        doubleValues = new Double[]{{
                                            add(8915.23),
                                            add(2334.2),
                                            add(3581.07),
                                            add(6897.68),
                                        }};
                                    }};
                                    doubleValue = 3852.37;
                                    intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                        intValues = new String[]{{
                                            add("voluptates"),
                                        }};
                                    }};
                                    intValue = "libero";
                                    jsonValue = "vitae";
                                    protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                        protoValues = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("tempora", "aspernatur");
                                                put("voluptas", "voluptas");
                                                put("voluptas", "minima");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("dolorum", "adipisci");
                                                put("minus", "dolores");
                                                put("blanditiis", "in");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("aliquam", "officiis");
                                                put("temporibus", "ullam");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("cum", "blanditiis");
                                            }}),
                                        }};
                                    }};
                                    protoValue = new java.util.HashMap<String, Object>() {{
                                        put("hic", "nesciunt");
                                        put("culpa", "corrupti");
                                        put("pariatur", "totam");
                                    }};
                                    serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                        objectValue = "hic";
                                    }};
                                    stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                        stringValues = new String[]{{
                                            add("nobis"),
                                            add("sit"),
                                        }};
                                    }};
                                    stringValue = "rerum";
                                }};
                            }}),
                        }};
                    }};;
                    requestId = "sed";
                    triggerId = "reiciendis";
                }};;
                accessToken = "explicabo";
                alt = AltEnum.PROTO;
                callback = "facilis";
                fields = "voluptate";
                key = "expedita";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "dolore";
                uploadProtocol = "laborum";
            }};            

            IntegrationsProjectsLocationsProductsIntegrationsExecuteResponse res = sdk.projects.integrationsProjectsLocationsProductsIntegrationsExecute(req, new IntegrationsProjectsLocationsProductsIntegrationsExecuteSecurity("sed", "in") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaExecuteIntegrationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## integrationsProjectsLocationsProductsIntegrationsExecutionsCancel

Cancellation of an execution

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelRequest req = new IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelRequest("commodi") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("voluptas", "unde");
                }};
                accessToken = "architecto";
                alt = AltEnum.MEDIA;
                callback = "sapiente";
                fields = "debitis";
                key = "illo";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "corrupti";
                uploadProtocol = "maiores";
            }};            

            IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelResponse res = sdk.projects.integrationsProjectsLocationsProductsIntegrationsExecutionsCancel(req, new IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelSecurity("incidunt", "sed") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaCancelExecutionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## integrationsProjectsLocationsProductsIntegrationsExecutionsList

Lists the results of all the integration executions. The response includes the same information as the [execution log](https://cloud.google.com/application-integration/docs/viewing-logs) in the Integration UI.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest req = new IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest("provident") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "necessitatibus";
                alt = AltEnum.JSON;
                callback = "ea";
                fields = "occaecati";
                filter = "quos";
                filterParamsCustomFilter = "voluptatibus";
                filterParamsEndTime = "tempora";
                filterParamsEventStatuses = new String[]{{
                    add("voluptate"),
                    add("reiciendis"),
                }};
                filterParamsExecutionId = "ex";
                filterParamsParameterKey = "sit";
                filterParamsParameterPairKey = "non";
                filterParamsParameterPairValue = "officiis";
                filterParamsParameterType = "praesentium";
                filterParamsParameterValue = "facilis";
                filterParamsStartTime = "quaerat";
                filterParamsTaskStatuses = new String[]{{
                    add("ipsam"),
                    add("debitis"),
                }};
                filterParamsWorkflowName = "rem";
                key = "sit";
                oauthToken = "nobis";
                orderBy = "error";
                pageSize = 333507L;
                pageToken = "minima";
                prettyPrint = false;
                quotaUser = "recusandae";
                readMask = "reiciendis";
                refreshAcl = false;
                truncateParams = false;
                uploadType = "nulla";
                uploadProtocol = "magni";
            }};            

            IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse res = sdk.projects.integrationsProjectsLocationsProductsIntegrationsExecutionsList(req, new IntegrationsProjectsLocationsProductsIntegrationsExecutionsListSecurity("aperiam", "saepe") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaListExecutionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLift

* Lifts suspension for advanced suspension task. Fetch corresponding suspension with provided suspension Id, resolve suspension, and set up suspension result for the Suspension Task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaLiftSuspensionRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftRequest req = new IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftRequest("numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudIntegrationsV1alphaLiftSuspensionRequest = new GoogleCloudIntegrationsV1alphaLiftSuspensionRequest() {{
                    suspensionResult = "in";
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

            IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftResponse res = sdk.projects.integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLift(req, new IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftSecurity("error", "hic") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaLiftSuspensionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsList

* Lists suspensions associated with a specific execution. Only those with permissions to resolve the relevant suspensions will be able to view them.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListRequest req = new IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListRequest("expedita") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "neque";
                alt = AltEnum.PROTO;
                callback = "nostrum";
                fields = "officia";
                filter = "dolorum";
                key = "corrupti";
                oauthToken = "accusamus";
                orderBy = "tempora";
                pageSize = 543678L;
                pageToken = "fugit";
                prettyPrint = false;
                quotaUser = "ut";
                uploadType = "fugiat";
                uploadProtocol = "voluptatem";
            }};            

            IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListResponse res = sdk.projects.integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsList(req, new IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListSecurity("culpa", "expedita") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaListSuspensionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolve

* Resolves (lifts/rejects) any number of suspensions. If the integration is already running, only the status of the suspension is updated. Otherwise, the suspended integration will begin execution again.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoAddress;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoBooleanParameterArray;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoBuganizerNotification;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCustomSuspensionRequest;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoDoubleParameterArray;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoEventParameters;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoIntParameterArray;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoNotification;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoParameterEntry;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoParameterValueType;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoProtoParameterArray;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoSerializedObjectParameter;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoStringParameterArray;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoSuspensionAuthPermissions;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoSuspensionConfig;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoSuspensionExpiration;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoToken;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaResolveSuspensionRequestInput;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaSuspensionApprovalExpirationInput;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaSuspensionAudit;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaSuspensionInput;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaSuspensionStateEnum;
import org.openapis.openapi.models.shared.GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest;
import org.openapis.openapi.models.shared.GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequestPriorityEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveRequest req = new IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveRequest("magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudIntegrationsV1alphaResolveSuspensionRequestInput = new GoogleCloudIntegrationsV1alphaResolveSuspensionRequestInput() {{
                    suspension = new GoogleCloudIntegrationsV1alphaSuspensionInput() {{
                        approvalConfig = new GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput() {{
                            customMessage = "esse";
                            emailAddresses = new String[]{{
                                add("sit"),
                                add("voluptatum"),
                            }};
                            expiration = new GoogleCloudIntegrationsV1alphaSuspensionApprovalExpirationInput() {{
                                liftWhenExpired = false;
                                remindTime = "quas";
                            }};;
                        }};;
                        audit = new GoogleCloudIntegrationsV1alphaSuspensionAudit() {{
                            resolveTime = "repudiandae";
                            resolver = "corporis";
                        }};;
                        eventExecutionInfoId = "et";
                        integration = "blanditiis";
                        name = "Jane Bailey";
                        state = GoogleCloudIntegrationsV1alphaSuspensionStateEnum.LIFTED;
                        suspensionConfig = new EnterpriseCrmEventbusProtoSuspensionConfig() {{
                            customMessage = "error";
                            notifications = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoNotification[]{{
                                add(new EnterpriseCrmEventbusProtoNotification() {{
                                    buganizerNotification = new EnterpriseCrmEventbusProtoBuganizerNotification() {{
                                        assigneeEmailAddress = "incidunt";
                                        componentId = "reiciendis";
                                        templateId = "dolorem";
                                        title = "Miss";
                                    }};
                                    emailAddress = new EnterpriseCrmEventbusProtoAddress() {{
                                        email = "Baby69@gmail.com";
                                        name = "Cameron Reilly";
                                        tokens = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoToken[]{{
                                            add(new EnterpriseCrmEventbusProtoToken() {{
                                                name = "Joanna Klocko";
                                                value = "provident";
                                            }}),
                                        }};
                                    }};
                                    escalatorQueue = "repellendus";
                                    pubsubTopic = "delectus";
                                    request = new EnterpriseCrmEventbusProtoCustomSuspensionRequest() {{
                                        postToQueueWithTriggerIdRequest = new GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest() {{
                                            clientId = "voluptates";
                                            ignoreErrorIfNoActiveWorkflow = false;
                                            parameters = new EnterpriseCrmEventbusProtoEventParameters() {{
                                                parameters = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoParameterEntry[]{{
                                                    add(new EnterpriseCrmEventbusProtoParameterEntry() {{
                                                        key = "est";
                                                        value = new EnterpriseCrmEventbusProtoParameterValueType() {{
                                                            booleanArray = new EnterpriseCrmEventbusProtoBooleanParameterArray() {{
                                                                booleanValues = new Boolean[]{{
                                                                    add(false),
                                                                    add(false),
                                                                    add(false),
                                                                }};
                                                            }};
                                                            booleanValue = false;
                                                            doubleArray = new EnterpriseCrmEventbusProtoDoubleParameterArray() {{
                                                                doubleValues = new Double[]{{
                                                                    add(8136.79),
                                                                    add(6850.92),
                                                                }};
                                                            }};
                                                            doubleValue = 5098.07;
                                                            intArray = new EnterpriseCrmEventbusProtoIntParameterArray() {{
                                                                intValues = new String[]{{
                                                                    add("veniam"),
                                                                    add("voluptatem"),
                                                                    add("quisquam"),
                                                                }};
                                                            }};
                                                            intValue = "repudiandae";
                                                            protoArray = new EnterpriseCrmEventbusProtoProtoParameterArray() {{
                                                                protoValues = new java.util.HashMap<String, Object>[]{{
                                                                    add(new java.util.HashMap<String, Object>() {{
                                                                        put("reprehenderit", "asperiores");
                                                                        put("totam", "suscipit");
                                                                        put("quidem", "maxime");
                                                                    }}),
                                                                }};
                                                            }};
                                                            protoValue = new java.util.HashMap<String, Object>() {{
                                                                put("esse", "amet");
                                                            }};
                                                            serializedObjectValue = new EnterpriseCrmEventbusProtoSerializedObjectParameter() {{
                                                                objectValue = "assumenda";
                                                            }};
                                                            stringArray = new EnterpriseCrmEventbusProtoStringParameterArray() {{
                                                                stringValues = new String[]{{
                                                                    add("atque"),
                                                                    add("error"),
                                                                }};
                                                            }};
                                                            stringValue = "officiis";
                                                        }};
                                                    }}),
                                                }};
                                            }};
                                            priority = GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequestPriorityEnum.CRITICAL_PLUS;
                                            requestId = "accusamus";
                                            resourceName = "natus";
                                            scheduledTime = "minima";
                                            testMode = false;
                                            triggerId = "aspernatur";
                                            workflowName = "ex";
                                        }};
                                        suspensionInfoEventParameterKey = "maiores";
                                    }};
                                }}),
                            }};
                            suspensionExpiration = new EnterpriseCrmEventbusProtoSuspensionExpiration() {{
                                expireAfterMs = 544647;
                                liftWhenExpired = false;
                                remindAfterMs = 871786;
                            }};;
                            whoMayResolve = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoSuspensionAuthPermissions[]{{
                                add(new EnterpriseCrmEventbusProtoSuspensionAuthPermissions() {{
                                    gaiaIdentity = new EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity() {{
                                        emailAddress = "blanditiis";
                                        gaiaId = "suscipit";
                                    }};
                                    googleGroup = new EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity() {{
                                        emailAddress = "repudiandae";
                                        gaiaId = "atque";
                                    }};
                                    loasRole = "atque";
                                    mdbGroup = "sunt";
                                }}),
                                add(new EnterpriseCrmEventbusProtoSuspensionAuthPermissions() {{
                                    gaiaIdentity = new EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity() {{
                                        emailAddress = "recusandae";
                                        gaiaId = "dolorum";
                                    }};
                                    googleGroup = new EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity() {{
                                        emailAddress = "repellendus";
                                        gaiaId = "labore";
                                    }};
                                    loasRole = "reiciendis";
                                    mdbGroup = "doloremque";
                                }}),
                                add(new EnterpriseCrmEventbusProtoSuspensionAuthPermissions() {{
                                    gaiaIdentity = new EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity() {{
                                        emailAddress = "repudiandae";
                                        gaiaId = "dicta";
                                    }};
                                    googleGroup = new EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity() {{
                                        emailAddress = "accusantium";
                                        gaiaId = "beatae";
                                    }};
                                    loasRole = "dolores";
                                    mdbGroup = "enim";
                                }}),
                            }};
                        }};;
                        taskId = "laboriosam";
                    }};;
                }};;
                accessToken = "velit";
                alt = AltEnum.PROTO;
                callback = "molestias";
                fields = "magnam";
                key = "saepe";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "officiis";
                uploadProtocol = "perspiciatis";
            }};            

            IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveResponse res = sdk.projects.integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolve(req, new IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveSecurity("in", "adipisci") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaResolveSuspensionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## integrationsProjectsLocationsProductsIntegrationsList

Returns the list of all integrations in the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsListRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsListResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsProductsIntegrationsListRequest req = new IntegrationsProjectsLocationsProductsIntegrationsListRequest("eveniet") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequuntur";
                alt = AltEnum.JSON;
                callback = "id";
                fields = "quis";
                filter = "reprehenderit";
                key = "error";
                oauthToken = "illo";
                orderBy = "corporis";
                pageSize = 696463L;
                pageToken = "eveniet";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "vero";
                uploadProtocol = "doloremque";
            }};            

            IntegrationsProjectsLocationsProductsIntegrationsListResponse res = sdk.projects.integrationsProjectsLocationsProductsIntegrationsList(req, new IntegrationsProjectsLocationsProductsIntegrationsListSecurity("iure", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaListIntegrationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## integrationsProjectsLocationsProductsIntegrationsSchedule

Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsScheduleRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsScheduleResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsScheduleSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoBooleanParameterArray;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoDoubleParameterArray;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoEventParameters;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoIntParameterArray;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoParameterEntry;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoParameterValueType;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoProtoParameterArray;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoSerializedObjectParameter;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoStringParameterArray;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaBooleanParameterArray;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaDoubleParameterArray;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaIntParameterArray;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaStringParameterArray;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaValueType;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsProductsIntegrationsScheduleRequest req = new IntegrationsProjectsLocationsProductsIntegrationsScheduleRequest("totam") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudIntegrationsV1alphaScheduleIntegrationsRequest = new GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest() {{
                    inputParameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaValueType>() {{
                        put("eveniet", new GoogleCloudIntegrationsV1alphaValueType() {{
                            booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                booleanValues = new Boolean[]{{
                                    add(false),
                                }};
                            }};
                            booleanValue = false;
                            doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                doubleValues = new Double[]{{
                                    add(4347.61),
                                    add(8980.63),
                                    add(1875.52),
                                }};
                            }};
                            doubleValue = 6725.82;
                            intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                intValues = new String[]{{
                                    add("voluptatum"),
                                    add("rem"),
                                    add("aliquam"),
                                }};
                            }};
                            intValue = "ad";
                            jsonValue = "repellat";
                            stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                stringValues = new String[]{{
                                    add("corporis"),
                                }};
                            }};
                            stringValue = "perspiciatis";
                        }});
                        put("nihil", new GoogleCloudIntegrationsV1alphaValueType() {{
                            booleanArray = new GoogleCloudIntegrationsV1alphaBooleanParameterArray() {{
                                booleanValues = new Boolean[]{{
                                    add(false),
                                    add(false),
                                    add(false),
                                }};
                            }};
                            booleanValue = false;
                            doubleArray = new GoogleCloudIntegrationsV1alphaDoubleParameterArray() {{
                                doubleValues = new Double[]{{
                                    add(51.89),
                                    add(9795.27),
                                }};
                            }};
                            doubleValue = 9702.22;
                            intArray = new GoogleCloudIntegrationsV1alphaIntParameterArray() {{
                                intValues = new String[]{{
                                    add("id"),
                                }};
                            }};
                            intValue = "minima";
                            jsonValue = "dolore";
                            stringArray = new GoogleCloudIntegrationsV1alphaStringParameterArray() {{
                                stringValues = new String[]{{
                                    add("nesciunt"),
                                    add("quae"),
                                    add("recusandae"),
                                }};
                            }};
                            stringValue = "omnis";
                        }});
                    }};
                    parameterEntries = new org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry[]{{
                        add(new EnterpriseCrmFrontendsEventbusProtoParameterEntry() {{
                            dataType = EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum.INT_ARRAY;
                            key = "ex";
                            value = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                    booleanValues = new Boolean[]{{
                                        add(false),
                                        add(false),
                                    }};
                                }};
                                booleanValue = false;
                                doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                    doubleValues = new Double[]{{
                                        add(2384.13),
                                        add(8906.53),
                                        add(5145.13),
                                    }};
                                }};
                                doubleValue = 4326.06;
                                intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                    intValues = new String[]{{
                                        add("recusandae"),
                                        add("esse"),
                                    }};
                                }};
                                intValue = "provident";
                                jsonValue = "quis";
                                protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                    protoValues = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("provident", "aspernatur");
                                            put("ullam", "quasi");
                                            put("animi", "nostrum");
                                            put("mollitia", "provident");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("animi", "ex");
                                            put("aliquid", "accusantium");
                                            put("repellat", "doloribus");
                                            put("ullam", "in");
                                        }}),
                                    }};
                                }};
                                protoValue = new java.util.HashMap<String, Object>() {{
                                    put("earum", "officia");
                                    put("laborum", "placeat");
                                    put("modi", "voluptatibus");
                                }};
                                serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                    objectValue = "molestias";
                                }};
                                stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                    stringValues = new String[]{{
                                        add("sapiente"),
                                        add("cumque"),
                                        add("vitae"),
                                        add("rerum"),
                                    }};
                                }};
                                stringValue = "tempora";
                            }};
                        }}),
                        add(new EnterpriseCrmFrontendsEventbusProtoParameterEntry() {{
                            dataType = EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum.SERIALIZED_OBJECT_VALUE;
                            key = "inventore";
                            value = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                    booleanValues = new Boolean[]{{
                                        add(false),
                                    }};
                                }};
                                booleanValue = false;
                                doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                    doubleValues = new Double[]{{
                                        add(626.36),
                                        add(216.88),
                                        add(2419.01),
                                        add(1372.51),
                                    }};
                                }};
                                doubleValue = 4322.81;
                                intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                    intValues = new String[]{{
                                        add("rem"),
                                        add("at"),
                                    }};
                                }};
                                intValue = "impedit";
                                jsonValue = "eos";
                                protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                    protoValues = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("dicta", "minima");
                                            put("beatae", "cupiditate");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("earum", "soluta");
                                            put("hic", "illum");
                                            put("eaque", "earum");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("maiores", "debitis");
                                            put("aliquid", "porro");
                                            put("suscipit", "dolorem");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("cumque", "fuga");
                                        }}),
                                    }};
                                }};
                                protoValue = new java.util.HashMap<String, Object>() {{
                                    put("animi", "necessitatibus");
                                }};
                                serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                    objectValue = "nulla";
                                }};
                                stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                    stringValues = new String[]{{
                                        add("quasi"),
                                    }};
                                }};
                                stringValue = "et";
                            }};
                        }}),
                    }};
                    parameters = new EnterpriseCrmEventbusProtoEventParameters() {{
                        parameters = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoParameterEntry[]{{
                            add(new EnterpriseCrmEventbusProtoParameterEntry() {{
                                key = "natus";
                                value = new EnterpriseCrmEventbusProtoParameterValueType() {{
                                    booleanArray = new EnterpriseCrmEventbusProtoBooleanParameterArray() {{
                                        booleanValues = new Boolean[]{{
                                            add(false),
                                            add(false),
                                            add(false),
                                        }};
                                    }};
                                    booleanValue = false;
                                    doubleArray = new EnterpriseCrmEventbusProtoDoubleParameterArray() {{
                                        doubleValues = new Double[]{{
                                            add(2415.57),
                                            add(965.62),
                                        }};
                                    }};
                                    doubleValue = 1690.25;
                                    intArray = new EnterpriseCrmEventbusProtoIntParameterArray() {{
                                        intValues = new String[]{{
                                            add("nulla"),
                                            add("necessitatibus"),
                                            add("ipsa"),
                                            add("tempora"),
                                        }};
                                    }};
                                    intValue = "nihil";
                                    protoArray = new EnterpriseCrmEventbusProtoProtoParameterArray() {{
                                        protoValues = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("iusto", "esse");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("maiores", "reiciendis");
                                                put("vel", "architecto");
                                                put("fugiat", "doloremque");
                                            }}),
                                        }};
                                    }};
                                    protoValue = new java.util.HashMap<String, Object>() {{
                                        put("odio", "tempora");
                                    }};
                                    serializedObjectValue = new EnterpriseCrmEventbusProtoSerializedObjectParameter() {{
                                        objectValue = "esse";
                                    }};
                                    stringArray = new EnterpriseCrmEventbusProtoStringParameterArray() {{
                                        stringValues = new String[]{{
                                            add("consectetur"),
                                            add("aliquid"),
                                        }};
                                    }};
                                    stringValue = "ipsa";
                                }};
                            }}),
                            add(new EnterpriseCrmEventbusProtoParameterEntry() {{
                                key = "laborum";
                                value = new EnterpriseCrmEventbusProtoParameterValueType() {{
                                    booleanArray = new EnterpriseCrmEventbusProtoBooleanParameterArray() {{
                                        booleanValues = new Boolean[]{{
                                            add(false),
                                        }};
                                    }};
                                    booleanValue = false;
                                    doubleArray = new EnterpriseCrmEventbusProtoDoubleParameterArray() {{
                                        doubleValues = new Double[]{{
                                            add(8567.56),
                                            add(7137.67),
                                        }};
                                    }};
                                    doubleValue = 3996.67;
                                    intArray = new EnterpriseCrmEventbusProtoIntParameterArray() {{
                                        intValues = new String[]{{
                                            add("suscipit"),
                                            add("aliquid"),
                                            add("perferendis"),
                                        }};
                                    }};
                                    intValue = "eum";
                                    protoArray = new EnterpriseCrmEventbusProtoProtoParameterArray() {{
                                        protoValues = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("id", "ab");
                                                put("error", "possimus");
                                                put("voluptates", "mollitia");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("libero", "ad");
                                                put("deleniti", "enim");
                                                put("vitae", "repellendus");
                                            }}),
                                        }};
                                    }};
                                    protoValue = new java.util.HashMap<String, Object>() {{
                                        put("quo", "ex");
                                        put("ut", "ad");
                                    }};
                                    serializedObjectValue = new EnterpriseCrmEventbusProtoSerializedObjectParameter() {{
                                        objectValue = "expedita";
                                    }};
                                    stringArray = new EnterpriseCrmEventbusProtoStringParameterArray() {{
                                        stringValues = new String[]{{
                                            add("molestias"),
                                        }};
                                    }};
                                    stringValue = "cum";
                                }};
                            }}),
                        }};
                    }};;
                    requestId = "aliquid";
                    scheduleTime = "beatae";
                    triggerId = "voluptatum";
                }};;
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

            IntegrationsProjectsLocationsProductsIntegrationsScheduleResponse res = sdk.projects.integrationsProjectsLocationsProductsIntegrationsSchedule(req, new IntegrationsProjectsLocationsProductsIntegrationsScheduleSecurity("fuga", "pariatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaScheduleIntegrationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## integrationsProjectsLocationsProductsIntegrationsVersionsDownload

Downloads an integration. Retrieves the `IntegrationVersion` for a given `integration_id` and returns the response as a string.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadFileFormatEnum;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadRequest req = new IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "alias";
                alt = AltEnum.MEDIA;
                callback = "earum";
                fields = "ex";
                fileFormat = IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadFileFormatEnum.YAML;
                key = "rem";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "asperiores";
                uploadProtocol = "ratione";
            }};            

            IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadResponse res = sdk.projects.integrationsProjectsLocationsProductsIntegrationsVersionsDownload(req, new IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadSecurity("ullam", "perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaDownloadIntegrationVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## integrationsProjectsLocationsProductsIntegrationsVersionsPublish

This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. This RPC throws an exception if the version being published is DRAFT, and if the `locked_by` user is not the same as the user performing the Publish. Audit fields updated include last_published_timestamp, last_published_by, last_modified_timestamp, last_modified_by. Any existing lock is on this integration is released.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishRequest req = new IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishRequest("illum") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quibusdam", "nam");
                    put("ipsam", "culpa");
                    put("dolor", "aliquam");
                    put("inventore", "deleniti");
                }};
                accessToken = "veritatis";
                alt = AltEnum.JSON;
                callback = "dolor";
                fields = "consequatur";
                key = "architecto";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "fugit";
                uploadProtocol = "ab";
            }};            

            IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishResponse res = sdk.projects.integrationsProjectsLocationsProductsIntegrationsVersionsPublish(req, new IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishSecurity("laudantium", "quae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaPublishIntegrationVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## integrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLock

Clears the `locked_by` and `locked_at_timestamp`in the DRAFT version of this integration. It then performs the same action as the CreateDraftIntegrationVersion (i.e., copies the DRAFT version of the integration as a SNAPSHOT and then creates a new DRAFT version with the `locked_by` set to the `user_taking_over` and the `locked_at_timestamp` set to the current timestamp). Both the `locked_by` and `user_taking_over` are notified via email about the takeover. This RPC throws an exception if the integration is not in DRAFT status or if the `locked_by` and `locked_at_timestamp` fields are not set.The TakeoverEdit lock is treated the same as an edit of the integration, and hence shares ACLs with edit. Audit fields updated include last_modified_timestamp, last_modified_by.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockRequest req = new IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("consequuntur", "ipsa");
                    put("quas", "eveniet");
                }};
                accessToken = "impedit";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "necessitatibus";
                key = "sed";
                oauthToken = "veniam";
                prettyPrint = false;
                quotaUser = "nesciunt";
                uploadType = "expedita";
                uploadProtocol = "eum";
            }};            

            IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockResponse res = sdk.projects.integrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLock(req, new IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockSecurity("vel", "voluptatum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaTakeoverEditLockResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## integrationsProjectsLocationsProductsIntegrationsVersionsUnpublish

Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it. The "HEAD" and "PUBLISH_REQUESTED" tags do not change. This RPC throws an exception if the version being snapshot is not ACTIVE. Audit fields added include action, action_by, action_timestamp.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUnpublishRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUnpublishResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUnpublishSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsProductsIntegrationsVersionsUnpublishRequest req = new IntegrationsProjectsLocationsProductsIntegrationsVersionsUnpublishRequest("magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("porro", "autem");
                }};
                accessToken = "nobis";
                alt = AltEnum.MEDIA;
                callback = "recusandae";
                fields = "consequuntur";
                key = "voluptatem";
                oauthToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                uploadType = "quasi";
                uploadProtocol = "nisi";
            }};            

            IntegrationsProjectsLocationsProductsIntegrationsVersionsUnpublishResponse res = sdk.projects.integrationsProjectsLocationsProductsIntegrationsVersionsUnpublish(req, new IntegrationsProjectsLocationsProductsIntegrationsVersionsUnpublishSecurity("at", "vero") {{
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

## integrationsProjectsLocationsProductsIntegrationsVersionsUpload

Uploads an integration. The content can be a previously downloaded integration. Performs the same function as CreateDraftIntegrationVersion, but accepts input in a string format, which holds the complete representation of the IntegrationVersion content.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequest;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequestFileFormatEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadRequest req = new IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadRequest("est") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudIntegrationsV1alphaUploadIntegrationVersionRequest = new GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequest() {{
                    content = "sequi";
                    fileFormat = GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequestFileFormatEnum.YAML;
                }};;
                accessToken = "repudiandae";
                alt = AltEnum.PROTO;
                callback = "occaecati";
                fields = "nemo";
                key = "voluptate";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "voluptas";
                uploadProtocol = "numquam";
            }};            

            IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadResponse res = sdk.projects.integrationsProjectsLocationsProductsIntegrationsVersionsUpload(req, new IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadSecurity("nemo", "quos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaUploadIntegrationVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## integrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreate

Creates an IntegrationTemplateVersion.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoAttributes;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoAttributesDataTypeEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoAttributesSearchableEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoBooleanParameterArray;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCloudSchedulerConfig;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCombinedCondition;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoConditionOperatorEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCoordinate;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoDoubleArray;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoDoubleParameterArray;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoEventBusProperties;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoEventParameters;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoFailurePolicy;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoIntArray;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoIntParameterArray;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoLogSettings;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoNextTask;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoNextTeardownTask;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoNodeIdentifier;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoParamSpecEntryConfig;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRule;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoParameterEntry;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoParameterValueType;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoPropertyEntry;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoProtoParameterArray;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoSerializedObjectParameter;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoStringArray;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoStringParameterArray;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoSuccessPolicy;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoTaskAlertConfig;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoTaskMetadata;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoTaskMetadataAdmin;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOptionEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoTaskMetadataStatusEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoTaskMetadataSystemEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoTaskUiConfig;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoTaskUiModuleConfig;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoTeardown;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoTeardownTaskConfig;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoTriggerCriteria;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoValueType;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoWorkflowAlertConfig;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusStats;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusStatsDimensions;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusStatsDimensionsEnumFilterTypeEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoEventParameters;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoIntParameterArray;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoParamSpecEntry;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoParameterValueType;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoRollbackStrategy;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoStringParameterArray;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoTaskConfig;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoTaskConfigExternalTaskTypeEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoTaskConfigJsonValidationOptionEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoTaskEntity;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoTriggerConfig;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoWorkflowParameters;
import org.openapis.openapi.models.shared.EnterpriseCrmLoggingGwsFieldLimits;
import org.openapis.openapi.models.shared.EnterpriseCrmLoggingGwsFieldLimitsLogActionEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmLoggingGwsSanitizeOptions;
import org.openapis.openapi.models.shared.EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum;
import org.openapis.openapi.models.shared.EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaCoordinate;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaErrorCatcherConfig;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnum;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionInput;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaNextTask;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateRequest req = new IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateRequest("eius") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudIntegrationsV1alphaIntegrationTemplateVersionInput = new GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionInput() {{
                    databasePersistencePolicy = GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnum.DATABASE_PERSISTENCE_POLICY_UNSPECIFIED;
                    description = "nesciunt";
                    errorCatcherConfigs = new org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaErrorCatcherConfig[]{{
                        add(new GoogleCloudIntegrationsV1alphaErrorCatcherConfig() {{
                            description = "laudantium";
                            errorCatcherId = "incidunt";
                            errorCatcherNumber = "quasi";
                            label = "rem";
                            position = new GoogleCloudIntegrationsV1alphaCoordinate() {{
                                x = 851854;
                                y = 117380;
                            }};
                            startErrorTasks = new org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaNextTask[]{{
                                add(new GoogleCloudIntegrationsV1alphaNextTask() {{
                                    condition = "consequuntur";
                                    description = "consectetur";
                                    displayName = "aperiam";
                                    taskConfigId = "cupiditate";
                                    taskId = "reiciendis";
                                }}),
                                add(new GoogleCloudIntegrationsV1alphaNextTask() {{
                                    condition = "soluta";
                                    description = "alias";
                                    displayName = "omnis";
                                    taskConfigId = "eos";
                                    taskId = "occaecati";
                                }}),
                            }};
                        }}),
                        add(new GoogleCloudIntegrationsV1alphaErrorCatcherConfig() {{
                            description = "iste";
                            errorCatcherId = "magni";
                            errorCatcherNumber = "inventore";
                            label = "fuga";
                            position = new GoogleCloudIntegrationsV1alphaCoordinate() {{
                                x = 881897;
                                y = 976802;
                            }};
                            startErrorTasks = new org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaNextTask[]{{
                                add(new GoogleCloudIntegrationsV1alphaNextTask() {{
                                    condition = "omnis";
                                    description = "delectus";
                                    displayName = "minima";
                                    taskConfigId = "praesentium";
                                    taskId = "maxime";
                                }}),
                                add(new GoogleCloudIntegrationsV1alphaNextTask() {{
                                    condition = "magnam";
                                    description = "temporibus";
                                    displayName = "quos";
                                    taskConfigId = "commodi";
                                    taskId = "itaque";
                                }}),
                                add(new GoogleCloudIntegrationsV1alphaNextTask() {{
                                    condition = "commodi";
                                    description = "totam";
                                    displayName = "earum";
                                    taskConfigId = "modi";
                                    taskId = "nam";
                                }}),
                            }};
                        }}),
                        add(new GoogleCloudIntegrationsV1alphaErrorCatcherConfig() {{
                            description = "vero";
                            errorCatcherId = "voluptatem";
                            errorCatcherNumber = "ipsam";
                            label = "vel";
                            position = new GoogleCloudIntegrationsV1alphaCoordinate() {{
                                x = 1383;
                                y = 93894;
                            }};
                            startErrorTasks = new org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaNextTask[]{{
                                add(new GoogleCloudIntegrationsV1alphaNextTask() {{
                                    condition = "maiores";
                                    description = "enim";
                                    displayName = "sint";
                                    taskConfigId = "nulla";
                                    taskId = "deserunt";
                                }}),
                            }};
                        }}),
                    }};
                    lastModifierEmail = "esse";
                    parentIntegrationVersionId = "nemo";
                    status = GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum.ACTIVE;
                    taskConfigs = new org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoTaskConfig[]{{
                        add(new EnterpriseCrmFrontendsEventbusProtoTaskConfig() {{
                            alertConfigs = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoTaskAlertConfig[]{{
                                add(new EnterpriseCrmEventbusProtoTaskAlertConfig() {{
                                    aggregationPeriod = "sint";
                                    alertDisabled = false;
                                    alertName = "accusamus";
                                    clientId = "impedit";
                                    durationThresholdMs = "hic";
                                    errorEnumList = new EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList() {{
                                        enumStrings = new String[]{{
                                            add("asperiores"),
                                            add("ex"),
                                            add("voluptas"),
                                            add("debitis"),
                                        }};
                                        filterType = EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum.EXCLUSIVE;
                                    }};
                                    metricType = EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum.METRIC_TYPE_UNSPECIFIED;
                                    numAggregationPeriods = 791880;
                                    onlyFinalAttempt = false;
                                    playbookUrl = "fuga";
                                    thresholdType = EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum.EXPECTED_MAX;
                                    thresholdValue = new EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue() {{
                                        absolute = "consectetur";
                                        percentage = 244889;
                                    }};
                                    warningEnumList = new EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList() {{
                                        enumStrings = new String[]{{
                                            add("ipsum"),
                                            add("impedit"),
                                            add("magni"),
                                        }};
                                        filterType = EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum.EXCLUSIVE;
                                    }};
                                }}),
                                add(new EnterpriseCrmEventbusProtoTaskAlertConfig() {{
                                    aggregationPeriod = "repudiandae";
                                    alertDisabled = false;
                                    alertName = "nam";
                                    clientId = "dolore";
                                    durationThresholdMs = "iusto";
                                    errorEnumList = new EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList() {{
                                        enumStrings = new String[]{{
                                            add("sequi"),
                                            add("dignissimos"),
                                        }};
                                        filterType = EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum.DEFAULT_INCLUSIVE;
                                    }};
                                    metricType = EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum.TASK_AVERAGE_DURATION;
                                    numAggregationPeriods = 535468;
                                    onlyFinalAttempt = false;
                                    playbookUrl = "quibusdam";
                                    thresholdType = EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum.EXPECTED_MIN;
                                    thresholdValue = new EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue() {{
                                        absolute = "odit";
                                        percentage = 974990;
                                    }};
                                    warningEnumList = new EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList() {{
                                        enumStrings = new String[]{{
                                            add("magnam"),
                                            add("quibusdam"),
                                        }};
                                        filterType = EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum.DEFAULT_INCLUSIVE;
                                    }};
                                }}),
                            }};
                            createTime = "facere";
                            creatorEmail = "libero";
                            description = "architecto";
                            disableStrictTypeValidation = false;
                            errorCatcherId = "voluptatibus";
                            externalTaskType = EnterpriseCrmFrontendsEventbusProtoTaskConfigExternalTaskTypeEnum.EXTERNAL_TASK_TYPE_UNSPECIFIED;
                            failurePolicy = new EnterpriseCrmEventbusProtoFailurePolicy() {{
                                intervalInSeconds = "porro";
                                maxNumRetries = 304198;
                                retryStrategy = EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum.IGNORE;
                            }};
                            incomingEdgeCount = 75359;
                            jsonValidationOption = EnterpriseCrmFrontendsEventbusProtoTaskConfigJsonValidationOptionEnum.UNSPECIFIED_JSON_VALIDATION_OPTION;
                            label = "vel";
                            lastModifiedTime = "ea";
                            nextTasks = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoNextTask[]{{
                                add(new EnterpriseCrmEventbusProtoNextTask() {{
                                    combinedConditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCombinedCondition[]{{
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "eum";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.CONTAINS;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(5964.33),
                                                                add(9353.02),
                                                            }};
                                                        }};
                                                        doubleValue = 1175.25;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("voluptatibus"),
                                                                add("iste"),
                                                                add("itaque"),
                                                                add("alias"),
                                                            }};
                                                        }};
                                                        intValue = "nisi";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("velit", "laborum");
                                                            put("non", "dolor");
                                                            put("iusto", "sit");
                                                            put("doloremque", "consequatur");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("recusandae"),
                                                                add("ea"),
                                                                add("quidem"),
                                                            }};
                                                        }};
                                                        stringValue = "voluptas";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "facilis";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.IS_EMPTY;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(7090.36),
                                                                add(5372.36),
                                                                add(9543.34),
                                                            }};
                                                        }};
                                                        doubleValue = 4555.79;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("unde"),
                                                                add("necessitatibus"),
                                                            }};
                                                        }};
                                                        intValue = "animi";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("ipsam", "corporis");
                                                            put("est", "error");
                                                            put("esse", "labore");
                                                            put("veritatis", "vero");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("vitae"),
                                                            }};
                                                        }};
                                                        stringValue = "inventore";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "dolorem";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.CONTAINS;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(6113.28),
                                                            }};
                                                        }};
                                                        doubleValue = 4030.26;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("soluta"),
                                                                add("libero"),
                                                            }};
                                                        }};
                                                        intValue = "rem";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("odio", "fugit");
                                                            put("alias", "magni");
                                                            put("vel", "quae");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("modi"),
                                                            }};
                                                        }};
                                                        stringValue = "neque";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "itaque";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.UNSET;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(6022.29),
                                                            }};
                                                        }};
                                                        doubleValue = 8583.38;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("maxime"),
                                                                add("quia"),
                                                                add("quia"),
                                                            }};
                                                        }};
                                                        intValue = "nostrum";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("libero", "dicta");
                                                            put("id", "libero");
                                                            put("fugiat", "officia");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("placeat"),
                                                                add("sit"),
                                                                add("iusto"),
                                                            }};
                                                        }};
                                                        stringValue = "ipsa";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "voluptates";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.UNSET;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(5171.37),
                                                            }};
                                                        }};
                                                        doubleValue = 2928.88;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("distinctio"),
                                                                add("voluptatem"),
                                                                add("autem"),
                                                                add("esse"),
                                                            }};
                                                        }};
                                                        intValue = "dolores";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("beatae", "est");
                                                            put("facere", "corrupti");
                                                            put("molestiae", "provident");
                                                            put("accusamus", "necessitatibus");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("sint"),
                                                                add("ea"),
                                                                add("autem"),
                                                            }};
                                                        }};
                                                        stringValue = "ipsam";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "laudantium";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.LESS_THAN;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(9729.12),
                                                                add(7372.79),
                                                                add(8723.03),
                                                                add(51.52),
                                                            }};
                                                        }};
                                                        doubleValue = 1566.53;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("fuga"),
                                                                add("repudiandae"),
                                                                add("accusantium"),
                                                            }};
                                                        }};
                                                        intValue = "expedita";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("eos", "quibusdam");
                                                            put("odio", "praesentium");
                                                            put("odit", "explicabo");
                                                            put("corporis", "error");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("adipisci"),
                                                                add("recusandae"),
                                                                add("similique"),
                                                                add("ut"),
                                                            }};
                                                        }};
                                                        stringValue = "quidem";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "quis";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.UNSET;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(4769.46),
                                                                add(9631.98),
                                                                add(5855.93),
                                                            }};
                                                        }};
                                                        doubleValue = 1478.01;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("numquam"),
                                                                add("nesciunt"),
                                                            }};
                                                        }};
                                                        intValue = "at";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("dignissimos", "optio");
                                                            put("necessitatibus", "corporis");
                                                            put("qui", "expedita");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("cupiditate"),
                                                                add("minima"),
                                                                add("placeat"),
                                                            }};
                                                        }};
                                                        stringValue = "enim";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "neque";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.GREATER_THAN;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(4330.77),
                                                                add(2664.08),
                                                                add(3573.47),
                                                                add(2982.64),
                                                            }};
                                                        }};
                                                        doubleValue = 9149.71;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("tempore"),
                                                                add("aperiam"),
                                                                add("libero"),
                                                                add("ratione"),
                                                            }};
                                                        }};
                                                        intValue = "labore";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("occaecati", "voluptas");
                                                            put("quo", "velit");
                                                            put("minus", "fuga");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("est"),
                                                                add("impedit"),
                                                            }};
                                                        }};
                                                        stringValue = "delectus";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "vero";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.EQUALS;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(8659.46),
                                                                add(3628.88),
                                                                add(4413.21),
                                                                add(452.34),
                                                            }};
                                                        }};
                                                        doubleValue = 4864.1;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("in"),
                                                                add("ducimus"),
                                                            }};
                                                        }};
                                                        intValue = "excepturi";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("error", "veritatis");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("voluptate"),
                                                                add("pariatur"),
                                                            }};
                                                        }};
                                                        stringValue = "itaque";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "similique";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.DOES_NOT_EXIST;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(3114.86),
                                                                add(4166.92),
                                                            }};
                                                        }};
                                                        doubleValue = 8886.16;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("quidem"),
                                                                add("exercitationem"),
                                                                add("quam"),
                                                                add("dolorem"),
                                                            }};
                                                        }};
                                                        intValue = "modi";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("sint", "vero");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("repudiandae"),
                                                            }};
                                                        }};
                                                        stringValue = "cum";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "dicta";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.IS_NOT_EMPTY;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(6592.68),
                                                                add(1753.72),
                                                            }};
                                                        }};
                                                        doubleValue = 7249.94;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("consequuntur"),
                                                            }};
                                                        }};
                                                        intValue = "necessitatibus";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("ipsa", "ducimus");
                                                            put("maiores", "veritatis");
                                                            put("quasi", "laboriosam");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("libero"),
                                                                add("excepturi"),
                                                                add("occaecati"),
                                                                add("nemo"),
                                                            }};
                                                        }};
                                                        stringValue = "aliquam";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                    }};
                                    condition = "nostrum";
                                    description = "doloribus";
                                    label = "eligendi";
                                    taskConfigId = "sint";
                                    taskNumber = "enim";
                                }}),
                            }};
                            nextTasksExecutionPolicy = EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum.RUN_FIRST_MATCH;
                            parameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry>() {{
                                put("quas", new EnterpriseCrmFrontendsEventbusProtoParameterEntry() {{
                                    dataType = EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum.DOUBLE_ARRAY;
                                    key = "molestias";
                                    value = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                        booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                            booleanValues = new Boolean[]{{
                                                add(false),
                                                add(false),
                                            }};
                                        }};
                                        booleanValue = false;
                                        doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                            doubleValues = new Double[]{{
                                                add(9011.63),
                                            }};
                                        }};
                                        doubleValue = 1040.78;
                                        intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                            intValues = new String[]{{
                                                add("iste"),
                                                add("assumenda"),
                                                add("tempore"),
                                            }};
                                        }};
                                        intValue = "libero";
                                        jsonValue = "velit";
                                        protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                            protoValues = new java.util.HashMap<String, Object>[]{{
                                                add(new java.util.HashMap<String, Object>() {{
                                                    put("impedit", "cum");
                                                    put("ipsum", "adipisci");
                                                    put("saepe", "deserunt");
                                                    put("doloremque", "quis");
                                                }}),
                                            }};
                                        }};
                                        protoValue = new java.util.HashMap<String, Object>() {{
                                            put("libero", "architecto");
                                            put("cupiditate", "molestiae");
                                        }};
                                        serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                            objectValue = "eligendi";
                                        }};
                                        stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                            stringValues = new String[]{{
                                                add("non"),
                                                add("magnam"),
                                                add("itaque"),
                                                add("sed"),
                                            }};
                                        }};
                                        stringValue = "asperiores";
                                    }};
                                }});
                                put("veniam", new EnterpriseCrmFrontendsEventbusProtoParameterEntry() {{
                                    dataType = EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum.INT_VALUE;
                                    key = "facere";
                                    value = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                        booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                            booleanValues = new Boolean[]{{
                                                add(false),
                                                add(false),
                                                add(false),
                                            }};
                                        }};
                                        booleanValue = false;
                                        doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                            doubleValues = new Double[]{{
                                                add(8634.77),
                                            }};
                                        }};
                                        doubleValue = 2273.62;
                                        intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                            intValues = new String[]{{
                                                add("ab"),
                                                add("velit"),
                                            }};
                                        }};
                                        intValue = "facilis";
                                        jsonValue = "tempore";
                                        protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                            protoValues = new java.util.HashMap<String, Object>[]{{
                                                add(new java.util.HashMap<String, Object>() {{
                                                    put("quaerat", "blanditiis");
                                                    put("distinctio", "nisi");
                                                    put("quis", "nisi");
                                                    put("libero", "minus");
                                                }}),
                                                add(new java.util.HashMap<String, Object>() {{
                                                    put("facilis", "ipsum");
                                                    put("ad", "voluptatibus");
                                                    put("voluptatibus", "consequuntur");
                                                    put("debitis", "labore");
                                                }}),
                                            }};
                                        }};
                                        protoValue = new java.util.HashMap<String, Object>() {{
                                            put("eos", "reprehenderit");
                                            put("nostrum", "neque");
                                            put("iusto", "est");
                                        }};
                                        serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                            objectValue = "rem";
                                        }};
                                        stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                            stringValues = new String[]{{
                                                add("fugiat"),
                                                add("unde"),
                                                add("officiis"),
                                                add("ducimus"),
                                            }};
                                        }};
                                        stringValue = "dolor";
                                    }};
                                }});
                                put("dicta", new EnterpriseCrmFrontendsEventbusProtoParameterEntry() {{
                                    dataType = EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum.PROTO_ENUM;
                                    key = "porro";
                                    value = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                        booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                            booleanValues = new Boolean[]{{
                                                add(false),
                                            }};
                                        }};
                                        booleanValue = false;
                                        doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                            doubleValues = new Double[]{{
                                                add(4589.7),
                                                add(8541.15),
                                            }};
                                        }};
                                        doubleValue = 3223.33;
                                        intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                            intValues = new String[]{{
                                                add("enim"),
                                            }};
                                        }};
                                        intValue = "delectus";
                                        jsonValue = "iusto";
                                        protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                            protoValues = new java.util.HashMap<String, Object>[]{{
                                                add(new java.util.HashMap<String, Object>() {{
                                                    put("illo", "ab");
                                                    put("incidunt", "accusamus");
                                                    put("saepe", "tempore");
                                                }}),
                                                add(new java.util.HashMap<String, Object>() {{
                                                    put("eos", "reiciendis");
                                                    put("earum", "reprehenderit");
                                                }}),
                                            }};
                                        }};
                                        protoValue = new java.util.HashMap<String, Object>() {{
                                            put("nemo", "repellat");
                                            put("quisquam", "sequi");
                                            put("nihil", "deleniti");
                                        }};
                                        serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                            objectValue = "illo";
                                        }};
                                        stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                            stringValues = new String[]{{
                                                add("assumenda"),
                                                add("aliquam"),
                                            }};
                                        }};
                                        stringValue = "quisquam";
                                    }};
                                }});
                            }};
                            position = new EnterpriseCrmEventbusProtoCoordinate() {{
                                x = 591065;
                                y = 514993;
                            }};
                            precondition = "repudiandae";
                            preconditionLabel = "consequatur";
                            rollbackStrategy = new EnterpriseCrmFrontendsEventbusProtoRollbackStrategy() {{
                                parameters = new EnterpriseCrmFrontendsEventbusProtoEventParameters() {{
                                    parameters = new org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry[]{{
                                        add(new EnterpriseCrmFrontendsEventbusProtoParameterEntry() {{
                                            dataType = EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum.INT_VALUE;
                                            key = "nam";
                                            value = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                                booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(5908.58),
                                                        add(9222.99),
                                                        add(7000.45),
                                                    }};
                                                }};
                                                doubleValue = 4923.61;
                                                intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("vero"),
                                                        add("similique"),
                                                    }};
                                                }};
                                                intValue = "repellendus";
                                                jsonValue = "iure";
                                                protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                                    protoValues = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("impedit", "commodi");
                                                            put("aut", "voluptatem");
                                                        }}),
                                                    }};
                                                }};
                                                protoValue = new java.util.HashMap<String, Object>() {{
                                                    put("quae", "amet");
                                                    put("illum", "praesentium");
                                                }};
                                                serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                                    objectValue = "quidem";
                                                }};
                                                stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("amet"),
                                                        add("quasi"),
                                                        add("dicta"),
                                                    }};
                                                }};
                                                stringValue = "laudantium";
                                            }};
                                        }}),
                                        add(new EnterpriseCrmFrontendsEventbusProtoParameterEntry() {{
                                            dataType = EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum.DATA_TYPE_UNSPECIFIED;
                                            key = "earum";
                                            value = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                                booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(5879.67),
                                                    }};
                                                }};
                                                doubleValue = 6771.41;
                                                intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("provident"),
                                                        add("repudiandae"),
                                                        add("consequatur"),
                                                        add("nemo"),
                                                    }};
                                                }};
                                                intValue = "molestiae";
                                                jsonValue = "itaque";
                                                protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                                    protoValues = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("aperiam", "sint");
                                                            put("accusamus", "eos");
                                                            put("totam", "dicta");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("velit", "dolor");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("a", "dolor");
                                                        }}),
                                                    }};
                                                }};
                                                protoValue = new java.util.HashMap<String, Object>() {{
                                                    put("atque", "beatae");
                                                    put("at", "labore");
                                                    put("minus", "esse");
                                                }};
                                                serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                                    objectValue = "voluptatem";
                                                }};
                                                stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("rerum"),
                                                    }};
                                                }};
                                                stringValue = "ea";
                                            }};
                                        }}),
                                        add(new EnterpriseCrmFrontendsEventbusProtoParameterEntry() {{
                                            dataType = EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum.DATA_TYPE_UNSPECIFIED;
                                            key = "dignissimos";
                                            value = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                                booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(7841.15),
                                                    }};
                                                }};
                                                doubleValue = 5886.39;
                                                intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("eligendi"),
                                                    }};
                                                }};
                                                intValue = "dignissimos";
                                                jsonValue = "consectetur";
                                                protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                                    protoValues = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("temporibus", "officia");
                                                            put("amet", "tenetur");
                                                            put("aspernatur", "quo");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("illum", "laborum");
                                                            put("dignissimos", "vero");
                                                            put("qui", "consectetur");
                                                            put("repellat", "explicabo");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("exercitationem", "nihil");
                                                        }}),
                                                    }};
                                                }};
                                                protoValue = new java.util.HashMap<String, Object>() {{
                                                    put("ab", "illo");
                                                    put("hic", "deserunt");
                                                }};
                                                serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                                    objectValue = "delectus";
                                                }};
                                                stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("distinctio"),
                                                        add("in"),
                                                    }};
                                                }};
                                                stringValue = "exercitationem";
                                            }};
                                        }}),
                                        add(new EnterpriseCrmFrontendsEventbusProtoParameterEntry() {{
                                            dataType = EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum.PROTO_VALUE;
                                            key = "numquam";
                                            value = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                                booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(4502.09),
                                                        add(1272.94),
                                                    }};
                                                }};
                                                doubleValue = 8798.57;
                                                intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("aperiam"),
                                                        add("odit"),
                                                        add("deleniti"),
                                                    }};
                                                }};
                                                intValue = "enim";
                                                jsonValue = "voluptate";
                                                protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                                    protoValues = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("libero", "magnam");
                                                            put("sit", "modi");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("nesciunt", "mollitia");
                                                            put("dignissimos", "fugiat");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("molestiae", "veniam");
                                                            put("reiciendis", "ab");
                                                        }}),
                                                    }};
                                                }};
                                                protoValue = new java.util.HashMap<String, Object>() {{
                                                    put("aut", "aut");
                                                    put("eveniet", "odio");
                                                }};
                                                serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                                    objectValue = "commodi";
                                                }};
                                                stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("dolorum"),
                                                        add("possimus"),
                                                    }};
                                                }};
                                                stringValue = "voluptate";
                                            }};
                                        }}),
                                    }};
                                }};
                                rollbackTaskImplementationClassName = "consectetur";
                                taskNumbersToRollback = new String[]{{
                                    add("quaerat"),
                                }};
                            }};
                            successPolicy = new EnterpriseCrmEventbusProtoSuccessPolicy() {{
                                finalState = EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnum.SUSPENDED;
                            }};
                            synchronousCallFailurePolicy = new EnterpriseCrmEventbusProtoFailurePolicy() {{
                                intervalInSeconds = "minus";
                                maxNumRetries = 122662;
                                retryStrategy = EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum.LINEAR_BACKOFF;
                            }};
                            taskEntity = new EnterpriseCrmFrontendsEventbusProtoTaskEntity() {{
                                disabledForVpcSc = false;
                                metadata = new EnterpriseCrmEventbusProtoTaskMetadata() {{
                                    activeTaskName = "iusto";
                                    admins = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoTaskMetadataAdmin[]{{
                                        add(new EnterpriseCrmEventbusProtoTaskMetadataAdmin() {{
                                            googleGroupEmail = "et";
                                            userEmail = "facilis";
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoTaskMetadataAdmin() {{
                                            googleGroupEmail = "amet";
                                            userEmail = "autem";
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoTaskMetadataAdmin() {{
                                            googleGroupEmail = "fuga";
                                            userEmail = "alias";
                                        }}),
                                    }};
                                    category = EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum.CONNECTOR;
                                    codeSearchLink = "aut";
                                    defaultJsonValidationOption = EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOptionEnum.PRE_EXECUTION;
                                    defaultSpec = "laudantium";
                                    description = "repellendus";
                                    descriptiveName = "veritatis";
                                    docMarkdown = "quae";
                                    externalCategory = EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnum.UNSPECIFIED_EXTERNAL_CATEGORY;
                                    externalCategorySequence = 904827;
                                    externalDocHtml = "delectus";
                                    externalDocLink = "mollitia";
                                    externalDocMarkdown = "nulla";
                                    g3DocLink = "officia";
                                    iconLink = "sed";
                                    isDeprecated = false;
                                    name = "Mary Vandervort II";
                                    standaloneExternalDocHtml = "qui";
                                    status = EnterpriseCrmEventbusProtoTaskMetadataStatusEnum.UNSPECIFIED_STATUS;
                                    system = EnterpriseCrmEventbusProtoTaskMetadataSystemEnum.SPANNER;
                                    tags = new String[]{{
                                        add("explicabo"),
                                        add("beatae"),
                                        add("aliquid"),
                                    }};
                                }};
                                paramSpecs = new EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage() {{
                                    parameters = new org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoParamSpecEntry[]{{
                                        add(new EnterpriseCrmFrontendsEventbusProtoParamSpecEntry() {{
                                            className = "optio";
                                            collectionElementClassName = "voluptatibus";
                                            config = new EnterpriseCrmEventbusProtoParamSpecEntryConfig() {{
                                                descriptivePhrase = "molestias";
                                                helpText = "officia";
                                                hideDefaultValue = false;
                                                inputDisplayOption = EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnum.NUMBER_SLIDER;
                                                isHidden = false;
                                                label = "totam";
                                                parameterNameOption = EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnum.DEFAULT_NOT_PARAMETER_NAME;
                                                subSectionLabel = "aliquid";
                                                uiPlaceholderText = "ea";
                                            }};
                                            dataType = EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum.PROTO_ENUM_ARRAY;
                                            defaultValue = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                                booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(2436.23),
                                                    }};
                                                }};
                                                doubleValue = 9673.38;
                                                intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("nulla"),
                                                        add("laborum"),
                                                        add("natus"),
                                                        add("accusamus"),
                                                    }};
                                                }};
                                                intValue = "doloremque";
                                                jsonValue = "nisi";
                                                protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                                    protoValues = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("voluptates", "non");
                                                            put("rem", "quia");
                                                            put("ullam", "quisquam");
                                                            put("dicta", "voluptatibus");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("quae", "officiis");
                                                            put("architecto", "architecto");
                                                            put("enim", "optio");
                                                            put("rem", "perferendis");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("reiciendis", "a");
                                                            put("iste", "dicta");
                                                            put("quos", "ullam");
                                                        }}),
                                                    }};
                                                }};
                                                protoValue = new java.util.HashMap<String, Object>() {{
                                                    put("modi", "itaque");
                                                    put("maxime", "modi");
                                                }};
                                                serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                                    objectValue = "consequuntur";
                                                }};
                                                stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("vero"),
                                                        add("doloribus"),
                                                        add("impedit"),
                                                        add("porro"),
                                                    }};
                                                }};
                                                stringValue = "accusamus";
                                            }};
                                            isDeprecated = false;
                                            isOutput = false;
                                            jsonSchema = "totam";
                                            key = "reiciendis";
                                            protoDef = new EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition() {{
                                                fullName = "ab";
                                                path = "sint";
                                            }};
                                            required = false;
                                            validationRule = new EnterpriseCrmEventbusProtoParamSpecEntryValidationRule() {{
                                                doubleRange = new EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange() {{
                                                    max = 4724.14;
                                                    min = 4584.12;
                                                }};
                                                intRange = new EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange() {{
                                                    max = "iure";
                                                    min = "odio";
                                                }};
                                                stringRegex = new EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex() {{
                                                    exclusive = false;
                                                    regex = "nesciunt";
                                                }};
                                            }};
                                        }}),
                                        add(new EnterpriseCrmFrontendsEventbusProtoParamSpecEntry() {{
                                            className = "debitis";
                                            collectionElementClassName = "vel";
                                            config = new EnterpriseCrmEventbusProtoParamSpecEntryConfig() {{
                                                descriptivePhrase = "neque";
                                                helpText = "corporis";
                                                hideDefaultValue = false;
                                                inputDisplayOption = EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnum.STRING_MULTI_LINE;
                                                isHidden = false;
                                                label = "consequuntur";
                                                parameterNameOption = EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnum.KEY_IS_PARAMETER_NAME;
                                                subSectionLabel = "reprehenderit";
                                                uiPlaceholderText = "distinctio";
                                            }};
                                            dataType = EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum.BOOLEAN_VALUE;
                                            defaultValue = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                                booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(9781.54),
                                                        add(351.6),
                                                        add(3314.52),
                                                    }};
                                                }};
                                                doubleValue = 9062.32;
                                                intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("facere"),
                                                    }};
                                                }};
                                                intValue = "aliquam";
                                                jsonValue = "quos";
                                                protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                                    protoValues = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("est", "delectus");
                                                            put("velit", "vitae");
                                                            put("nesciunt", "similique");
                                                            put("illo", "repellat");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("doloribus", "possimus");
                                                            put("unde", "incidunt");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("ipsam", "cupiditate");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("alias", "quidem");
                                                            put("nesciunt", "commodi");
                                                            put("sapiente", "consequuntur");
                                                            put("veniam", "debitis");
                                                        }}),
                                                    }};
                                                }};
                                                protoValue = new java.util.HashMap<String, Object>() {{
                                                    put("sint", "ut");
                                                    put("numquam", "tenetur");
                                                    put("adipisci", "libero");
                                                }};
                                                serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                                    objectValue = "in";
                                                }};
                                                stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("ex"),
                                                        add("minus"),
                                                    }};
                                                }};
                                                stringValue = "ab";
                                            }};
                                            isDeprecated = false;
                                            isOutput = false;
                                            jsonSchema = "beatae";
                                            key = "hic";
                                            protoDef = new EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition() {{
                                                fullName = "nisi";
                                                path = "quisquam";
                                            }};
                                            required = false;
                                            validationRule = new EnterpriseCrmEventbusProtoParamSpecEntryValidationRule() {{
                                                doubleRange = new EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange() {{
                                                    max = 2212.18;
                                                    min = 4965.48;
                                                }};
                                                intRange = new EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange() {{
                                                    max = "fuga";
                                                    min = "minima";
                                                }};
                                                stringRegex = new EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex() {{
                                                    exclusive = false;
                                                    regex = "architecto";
                                                }};
                                            }};
                                        }}),
                                    }};
                                }};
                                stats = new EnterpriseCrmEventbusStats() {{
                                    dimensions = new EnterpriseCrmEventbusStatsDimensions() {{
                                        clientId = "qui";
                                        enumFilterType = EnterpriseCrmEventbusStatsDimensionsEnumFilterTypeEnum.DEFAULT_INCLUSIVE;
                                        errorEnumString = "magni";
                                        retryAttempt = EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnum.FINAL_;
                                        taskName = "adipisci";
                                        taskNumber = "praesentium";
                                        triggerId = "dolor";
                                        warningEnumString = "exercitationem";
                                        workflowId = "expedita";
                                        workflowName = "facilis";
                                    }};
                                    durationInSeconds = 7696.34;
                                    errorRate = 245.77;
                                    qps = 3634.82;
                                    warningRate = 6339.87;
                                }};
                                taskType = EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum.TASK;
                                uiConfig = new EnterpriseCrmEventbusProtoTaskUiConfig() {{
                                    taskUiModuleConfigs = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoTaskUiModuleConfig[]{{
                                        add(new EnterpriseCrmEventbusProtoTaskUiModuleConfig() {{
                                            moduleId = EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum.APPS_SCRIPT_NAVIGATOR;
                                        }}),
                                    }};
                                }};
                            }};
                            taskExecutionStrategy = EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum.WHEN_ALL_SUCCEED;
                            taskName = "veniam";
                            taskNumber = "quod";
                            taskSpec = "itaque";
                            taskTemplateName = "a";
                            taskType = EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum.IO_TEMPLATE;
                        }}),
                        add(new EnterpriseCrmFrontendsEventbusProtoTaskConfig() {{
                            alertConfigs = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoTaskAlertConfig[]{{
                                add(new EnterpriseCrmEventbusProtoTaskAlertConfig() {{
                                    aggregationPeriod = "doloribus";
                                    alertDisabled = false;
                                    alertName = "assumenda";
                                    clientId = "officiis";
                                    durationThresholdMs = "architecto";
                                    errorEnumList = new EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList() {{
                                        enumStrings = new String[]{{
                                            add("culpa"),
                                        }};
                                        filterType = EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum.DEFAULT_INCLUSIVE;
                                    }};
                                    metricType = EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum.TASK_AVERAGE_DURATION;
                                    numAggregationPeriods = 898193;
                                    onlyFinalAttempt = false;
                                    playbookUrl = "quia";
                                    thresholdType = EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum.UNSPECIFIED_THRESHOLD_TYPE;
                                    thresholdValue = new EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue() {{
                                        absolute = "vel";
                                        percentage = 595584;
                                    }};
                                    warningEnumList = new EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList() {{
                                        enumStrings = new String[]{{
                                            add("ullam"),
                                            add("architecto"),
                                            add("accusantium"),
                                            add("perferendis"),
                                        }};
                                        filterType = EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum.DEFAULT_INCLUSIVE;
                                    }};
                                }}),
                                add(new EnterpriseCrmEventbusProtoTaskAlertConfig() {{
                                    aggregationPeriod = "provident";
                                    alertDisabled = false;
                                    alertName = "cumque";
                                    clientId = "iure";
                                    durationThresholdMs = "quibusdam";
                                    errorEnumList = new EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList() {{
                                        enumStrings = new String[]{{
                                            add("nemo"),
                                            add("recusandae"),
                                            add("velit"),
                                            add("magnam"),
                                        }};
                                        filterType = EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum.DEFAULT_INCLUSIVE;
                                    }};
                                    metricType = EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum.TASK_WARNING_RATE;
                                    numAggregationPeriods = 152283;
                                    onlyFinalAttempt = false;
                                    playbookUrl = "odio";
                                    thresholdType = EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum.EXPECTED_MIN;
                                    thresholdValue = new EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue() {{
                                        absolute = "provident";
                                        percentage = 739508;
                                    }};
                                    warningEnumList = new EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList() {{
                                        enumStrings = new String[]{{
                                            add("facilis"),
                                            add("quidem"),
                                            add("itaque"),
                                            add("laboriosam"),
                                        }};
                                        filterType = EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum.EXCLUSIVE;
                                    }};
                                }}),
                            }};
                            createTime = "modi";
                            creatorEmail = "perspiciatis";
                            description = "hic";
                            disableStrictTypeValidation = false;
                            errorCatcherId = "cum";
                            externalTaskType = EnterpriseCrmFrontendsEventbusProtoTaskConfigExternalTaskTypeEnum.EXTERNAL_TASK_TYPE_UNSPECIFIED;
                            failurePolicy = new EnterpriseCrmEventbusProtoFailurePolicy() {{
                                intervalInSeconds = "libero";
                                maxNumRetries = 720266;
                                retryStrategy = EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum.NONE;
                            }};
                            incomingEdgeCount = 925395;
                            jsonValidationOption = EnterpriseCrmFrontendsEventbusProtoTaskConfigJsonValidationOptionEnum.POST_EXECUTION;
                            label = "id";
                            lastModifiedTime = "saepe";
                            nextTasks = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoNextTask[]{{
                                add(new EnterpriseCrmEventbusProtoNextTask() {{
                                    combinedConditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCombinedCondition[]{{
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "illum";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.LESS_THAN;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(7068.72),
                                                                add(2476.18),
                                                                add(6495.34),
                                                                add(8270.51),
                                                            }};
                                                        }};
                                                        doubleValue = 9279.77;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("pariatur"),
                                                                add("ad"),
                                                                add("facere"),
                                                            }};
                                                        }};
                                                        intValue = "laborum";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("laborum", "incidunt");
                                                            put("maxime", "ipsam");
                                                            put("alias", "suscipit");
                                                            put("deserunt", "molestias");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("est"),
                                                                add("occaecati"),
                                                                add("labore"),
                                                            }};
                                                        }};
                                                        stringValue = "quo";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "fugit";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.LESS_THAN;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(3085.28),
                                                                add(7558.68),
                                                            }};
                                                        }};
                                                        doubleValue = 9421.85;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("officiis"),
                                                                add("unde"),
                                                            }};
                                                        }};
                                                        intValue = "nulla";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("mollitia", "magnam");
                                                            put("nostrum", "esse");
                                                            put("corrupti", "fuga");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("impedit"),
                                                                add("quasi"),
                                                                add("deserunt"),
                                                                add("quod"),
                                                            }};
                                                        }};
                                                        stringValue = "laboriosam";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "voluptatem";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.IS_EMPTY;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(8075.64),
                                                                add(93.75),
                                                                add(510.07),
                                                                add(1023.9),
                                                            }};
                                                        }};
                                                        doubleValue = 6271.61;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("blanditiis"),
                                                                add("quae"),
                                                                add("magni"),
                                                                add("officiis"),
                                                            }};
                                                        }};
                                                        intValue = "sed";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("impedit", "ipsa");
                                                            put("excepturi", "a");
                                                            put("maiores", "laudantium");
                                                            put("maiores", "alias");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("rem"),
                                                                add("dicta"),
                                                                add("suscipit"),
                                                                add("earum"),
                                                            }};
                                                        }};
                                                        stringValue = "doloribus";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "eius";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.GREATER_THAN;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(7574.07),
                                                                add(946.97),
                                                            }};
                                                        }};
                                                        doubleValue = 2036.21;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("excepturi"),
                                                                add("accusantium"),
                                                                add("qui"),
                                                                add("impedit"),
                                                            }};
                                                        }};
                                                        intValue = "beatae";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("dicta", "odit");
                                                            put("corporis", "rerum");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("error"),
                                                            }};
                                                        }};
                                                        stringValue = "vel";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                    }};
                                    condition = "accusantium";
                                    description = "id";
                                    label = "laboriosam";
                                    taskConfigId = "ex";
                                    taskNumber = "quas";
                                }}),
                                add(new EnterpriseCrmEventbusProtoNextTask() {{
                                    combinedConditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCombinedCondition[]{{
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "quae";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.EXISTS;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(4625.83),
                                                                add(1693.12),
                                                            }};
                                                        }};
                                                        doubleValue = 6463.29;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("omnis"),
                                                                add("sed"),
                                                                add("nesciunt"),
                                                                add("maxime"),
                                                            }};
                                                        }};
                                                        intValue = "quis";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("aliquam", "excepturi");
                                                            put("maiores", "laudantium");
                                                            put("velit", "reiciendis");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("nemo"),
                                                            }};
                                                        }};
                                                        stringValue = "ipsa";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "quisquam";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.IS_NOT_EMPTY;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(4760.03),
                                                                add(3956.34),
                                                                add(9890.33),
                                                            }};
                                                        }};
                                                        doubleValue = 9554.66;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("perspiciatis"),
                                                                add("accusantium"),
                                                                add("dicta"),
                                                            }};
                                                        }};
                                                        intValue = "minus";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("eveniet", "porro");
                                                            put("tempore", "quidem");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("voluptates"),
                                                                add("fugit"),
                                                            }};
                                                        }};
                                                        stringValue = "eius";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                    }};
                                    condition = "sequi";
                                    description = "eligendi";
                                    label = "asperiores";
                                    taskConfigId = "esse";
                                    taskNumber = "blanditiis";
                                }}),
                            }};
                            nextTasksExecutionPolicy = EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum.RUN_ALL_MATCH;
                            parameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry>() {{
                                put("a", new EnterpriseCrmFrontendsEventbusProtoParameterEntry() {{
                                    dataType = EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum.PROTO_ENUM;
                                    key = "maiores";
                                    value = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                        booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                            booleanValues = new Boolean[]{{
                                                add(false),
                                                add(false),
                                                add(false),
                                                add(false),
                                            }};
                                        }};
                                        booleanValue = false;
                                        doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                            doubleValues = new Double[]{{
                                                add(6434.19),
                                                add(3590.97),
                                                add(2465.77),
                                                add(8877.01),
                                            }};
                                        }};
                                        doubleValue = 3150.22;
                                        intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                            intValues = new String[]{{
                                                add("saepe"),
                                                add("eum"),
                                                add("repudiandae"),
                                            }};
                                        }};
                                        intValue = "accusantium";
                                        jsonValue = "officia";
                                        protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                            protoValues = new java.util.HashMap<String, Object>[]{{
                                                add(new java.util.HashMap<String, Object>() {{
                                                    put("blanditiis", "eius");
                                                }}),
                                                add(new java.util.HashMap<String, Object>() {{
                                                    put("eos", "nobis");
                                                    put("natus", "minus");
                                                    put("quia", "magnam");
                                                    put("reprehenderit", "quod");
                                                }}),
                                                add(new java.util.HashMap<String, Object>() {{
                                                    put("corrupti", "amet");
                                                    put("molestiae", "amet");
                                                    put("laborum", "modi");
                                                }}),
                                                add(new java.util.HashMap<String, Object>() {{
                                                    put("necessitatibus", "architecto");
                                                }}),
                                            }};
                                        }};
                                        protoValue = new java.util.HashMap<String, Object>() {{
                                            put("dolore", "sunt");
                                            put("maiores", "neque");
                                            put("odit", "earum");
                                        }};
                                        serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                            objectValue = "veniam";
                                        }};
                                        stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                            stringValues = new String[]{{
                                                add("eaque"),
                                                add("exercitationem"),
                                            }};
                                        }};
                                        stringValue = "veniam";
                                    }};
                                }});
                                put("nihil", new EnterpriseCrmFrontendsEventbusProtoParameterEntry() {{
                                    dataType = EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum.PROTO_VALUE;
                                    key = "nisi";
                                    value = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                        booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                            booleanValues = new Boolean[]{{
                                                add(false),
                                                add(false),
                                                add(false),
                                                add(false),
                                            }};
                                        }};
                                        booleanValue = false;
                                        doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                            doubleValues = new Double[]{{
                                                add(8451.54),
                                                add(3664.8),
                                            }};
                                        }};
                                        doubleValue = 3827.64;
                                        intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                            intValues = new String[]{{
                                                add("sit"),
                                                add("quidem"),
                                                add("repellendus"),
                                                add("perferendis"),
                                            }};
                                        }};
                                        intValue = "id";
                                        jsonValue = "sapiente";
                                        protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                            protoValues = new java.util.HashMap<String, Object>[]{{
                                                add(new java.util.HashMap<String, Object>() {{
                                                    put("repellat", "repudiandae");
                                                    put("architecto", "adipisci");
                                                    put("pariatur", "harum");
                                                    put("dolore", "voluptatibus");
                                                }}),
                                            }};
                                        }};
                                        protoValue = new java.util.HashMap<String, Object>() {{
                                            put("explicabo", "minus");
                                            put("soluta", "dolorum");
                                        }};
                                        serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                            objectValue = "velit";
                                        }};
                                        stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                            stringValues = new String[]{{
                                                add("praesentium"),
                                                add("error"),
                                                add("non"),
                                                add("quasi"),
                                            }};
                                        }};
                                        stringValue = "mollitia";
                                    }};
                                }});
                                put("accusamus", new EnterpriseCrmFrontendsEventbusProtoParameterEntry() {{
                                    dataType = EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum.BOOLEAN_ARRAY;
                                    key = "cumque";
                                    value = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                        booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                            booleanValues = new Boolean[]{{
                                                add(false),
                                            }};
                                        }};
                                        booleanValue = false;
                                        doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                            doubleValues = new Double[]{{
                                                add(5492.37),
                                                add(537.33),
                                                add(6431.99),
                                            }};
                                        }};
                                        doubleValue = 3962.23;
                                        intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                            intValues = new String[]{{
                                                add("magni"),
                                                add("tempora"),
                                                add("possimus"),
                                            }};
                                        }};
                                        intValue = "dolor";
                                        jsonValue = "rerum";
                                        protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                            protoValues = new java.util.HashMap<String, Object>[]{{
                                                add(new java.util.HashMap<String, Object>() {{
                                                    put("optio", "delectus");
                                                    put("minus", "quo");
                                                    put("quos", "asperiores");
                                                    put("voluptatum", "iste");
                                                }}),
                                            }};
                                        }};
                                        protoValue = new java.util.HashMap<String, Object>() {{
                                            put("accusantium", "illo");
                                            put("aut", "doloribus");
                                        }};
                                        serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                            objectValue = "nostrum";
                                        }};
                                        stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                            stringValues = new String[]{{
                                                add("possimus"),
                                                add("neque"),
                                                add("pariatur"),
                                                add("vel"),
                                            }};
                                        }};
                                        stringValue = "sapiente";
                                    }};
                                }});
                                put("mollitia", new EnterpriseCrmFrontendsEventbusProtoParameterEntry() {{
                                    dataType = EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum.STRING_VALUE;
                                    key = "quos";
                                    value = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                        booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                            booleanValues = new Boolean[]{{
                                                add(false),
                                            }};
                                        }};
                                        booleanValue = false;
                                        doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                            doubleValues = new Double[]{{
                                                add(9132.84),
                                                add(3240.52),
                                            }};
                                        }};
                                        doubleValue = 3050.47;
                                        intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                            intValues = new String[]{{
                                                add("quas"),
                                                add("consequuntur"),
                                                add("maiores"),
                                                add("inventore"),
                                            }};
                                        }};
                                        intValue = "aliquid";
                                        jsonValue = "laudantium";
                                        protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                            protoValues = new java.util.HashMap<String, Object>[]{{
                                                add(new java.util.HashMap<String, Object>() {{
                                                    put("aliquid", "consectetur");
                                                }}),
                                                add(new java.util.HashMap<String, Object>() {{
                                                    put("rem", "voluptatum");
                                                    put("ducimus", "adipisci");
                                                    put("recusandae", "tempora");
                                                    put("blanditiis", "numquam");
                                                }}),
                                                add(new java.util.HashMap<String, Object>() {{
                                                    put("voluptatum", "sit");
                                                }}),
                                            }};
                                        }};
                                        protoValue = new java.util.HashMap<String, Object>() {{
                                            put("veritatis", "tenetur");
                                            put("autem", "quidem");
                                            put("totam", "porro");
                                        }};
                                        serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                            objectValue = "deserunt";
                                        }};
                                        stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                            stringValues = new String[]{{
                                                add("nihil"),
                                            }};
                                        }};
                                        stringValue = "voluptas";
                                    }};
                                }});
                            }};
                            position = new EnterpriseCrmEventbusProtoCoordinate() {{
                                x = 658199;
                                y = 413780;
                            }};
                            precondition = "alias";
                            preconditionLabel = "fuga";
                            rollbackStrategy = new EnterpriseCrmFrontendsEventbusProtoRollbackStrategy() {{
                                parameters = new EnterpriseCrmFrontendsEventbusProtoEventParameters() {{
                                    parameters = new org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry[]{{
                                        add(new EnterpriseCrmFrontendsEventbusProtoParameterEntry() {{
                                            dataType = EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum.PROTO_VALUE;
                                            key = "maxime";
                                            value = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                                booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(3558.89),
                                                        add(7557.38),
                                                        add(8103.02),
                                                    }};
                                                }};
                                                doubleValue = 3784.03;
                                                intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("unde"),
                                                        add("illo"),
                                                        add("nihil"),
                                                    }};
                                                }};
                                                intValue = "inventore";
                                                jsonValue = "libero";
                                                protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                                    protoValues = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("cumque", "dicta");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("facere", "facilis");
                                                            put("beatae", "cumque");
                                                            put("delectus", "labore");
                                                        }}),
                                                    }};
                                                }};
                                                protoValue = new java.util.HashMap<String, Object>() {{
                                                    put("corrupti", "rem");
                                                    put("atque", "officiis");
                                                    put("cum", "pariatur");
                                                }};
                                                serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                                    objectValue = "sapiente";
                                                }};
                                                stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("incidunt"),
                                                        add("quod"),
                                                        add("minus"),
                                                        add("porro"),
                                                    }};
                                                }};
                                                stringValue = "id";
                                            }};
                                        }}),
                                    }};
                                }};
                                rollbackTaskImplementationClassName = "excepturi";
                                taskNumbersToRollback = new String[]{{
                                    add("libero"),
                                    add("quo"),
                                    add("esse"),
                                }};
                            }};
                            successPolicy = new EnterpriseCrmEventbusProtoSuccessPolicy() {{
                                finalState = EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnum.SUSPENDED;
                            }};
                            synchronousCallFailurePolicy = new EnterpriseCrmEventbusProtoFailurePolicy() {{
                                intervalInSeconds = "maxime";
                                maxNumRetries = 36691;
                                retryStrategy = EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum.LINEAR_BACKOFF;
                            }};
                            taskEntity = new EnterpriseCrmFrontendsEventbusProtoTaskEntity() {{
                                disabledForVpcSc = false;
                                metadata = new EnterpriseCrmEventbusProtoTaskMetadata() {{
                                    activeTaskName = "fugit";
                                    admins = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoTaskMetadataAdmin[]{{
                                        add(new EnterpriseCrmEventbusProtoTaskMetadataAdmin() {{
                                            googleGroupEmail = "eligendi";
                                            userEmail = "recusandae";
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoTaskMetadataAdmin() {{
                                            googleGroupEmail = "veritatis";
                                            userEmail = "aut";
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoTaskMetadataAdmin() {{
                                            googleGroupEmail = "laudantium";
                                            userEmail = "iusto";
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoTaskMetadataAdmin() {{
                                            googleGroupEmail = "dolor";
                                            userEmail = "voluptates";
                                        }}),
                                    }};
                                    category = EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum.FLOW_CONTROL;
                                    codeSearchLink = "magni";
                                    defaultJsonValidationOption = EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOptionEnum.POST_EXECUTION;
                                    defaultSpec = "doloremque";
                                    description = "voluptatem";
                                    descriptiveName = "eum";
                                    docMarkdown = "at";
                                    externalCategory = EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnum.EXTERNAL_FLOW_CONTROL;
                                    externalCategorySequence = 444479;
                                    externalDocHtml = "voluptatum";
                                    externalDocLink = "blanditiis";
                                    externalDocMarkdown = "nihil";
                                    g3DocLink = "atque";
                                    iconLink = "rerum";
                                    isDeprecated = false;
                                    name = "Dave Hegmann MD";
                                    standaloneExternalDocHtml = "enim";
                                    status = EnterpriseCrmEventbusProtoTaskMetadataStatusEnum.DEFAULT_INACTIVE;
                                    system = EnterpriseCrmEventbusProtoTaskMetadataSystemEnum.GENERIC;
                                    tags = new String[]{{
                                        add("quas"),
                                    }};
                                }};
                                paramSpecs = new EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage() {{
                                    parameters = new org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoParamSpecEntry[]{{
                                        add(new EnterpriseCrmFrontendsEventbusProtoParamSpecEntry() {{
                                            className = "enim";
                                            collectionElementClassName = "labore";
                                            config = new EnterpriseCrmEventbusProtoParamSpecEntryConfig() {{
                                                descriptivePhrase = "sapiente";
                                                helpText = "saepe";
                                                hideDefaultValue = false;
                                                inputDisplayOption = EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnum.BOOLEAN_TOGGLE;
                                                isHidden = false;
                                                label = "officia";
                                                parameterNameOption = EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnum.KEY_IS_PARAMETER_NAME;
                                                subSectionLabel = "cumque";
                                                uiPlaceholderText = "natus";
                                            }};
                                            dataType = EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum.PROTO_VALUE;
                                            defaultValue = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                                booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(8872.84),
                                                    }};
                                                }};
                                                doubleValue = 6514.67;
                                                intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("quis"),
                                                        add("enim"),
                                                        add("eum"),
                                                        add("nemo"),
                                                    }};
                                                }};
                                                intValue = "illum";
                                                jsonValue = "nesciunt";
                                                protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                                    protoValues = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("minus", "asperiores");
                                                            put("recusandae", "voluptates");
                                                        }}),
                                                    }};
                                                }};
                                                protoValue = new java.util.HashMap<String, Object>() {{
                                                    put("dicta", "fugit");
                                                    put("sit", "aliquid");
                                                    put("necessitatibus", "sed");
                                                }};
                                                serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                                    objectValue = "deleniti";
                                                }};
                                                stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("nesciunt"),
                                                    }};
                                                }};
                                                stringValue = "delectus";
                                            }};
                                            isDeprecated = false;
                                            isOutput = false;
                                            jsonSchema = "laborum";
                                            key = "aliquam";
                                            protoDef = new EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition() {{
                                                fullName = "deserunt";
                                                path = "modi";
                                            }};
                                            required = false;
                                            validationRule = new EnterpriseCrmEventbusProtoParamSpecEntryValidationRule() {{
                                                doubleRange = new EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange() {{
                                                    max = 1220.85;
                                                    min = 7710.92;
                                                }};
                                                intRange = new EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange() {{
                                                    max = "eius";
                                                    min = "voluptatum";
                                                }};
                                                stringRegex = new EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex() {{
                                                    exclusive = false;
                                                    regex = "ipsa";
                                                }};
                                            }};
                                        }}),
                                        add(new EnterpriseCrmFrontendsEventbusProtoParamSpecEntry() {{
                                            className = "at";
                                            collectionElementClassName = "dolorem";
                                            config = new EnterpriseCrmEventbusProtoParamSpecEntryConfig() {{
                                                descriptivePhrase = "repellat";
                                                helpText = "aspernatur";
                                                hideDefaultValue = false;
                                                inputDisplayOption = EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnum.DEFAULT_;
                                                isHidden = false;
                                                label = "sequi";
                                                parameterNameOption = EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnum.DEFAULT_NOT_PARAMETER_NAME;
                                                subSectionLabel = "fuga";
                                                uiPlaceholderText = "hic";
                                            }};
                                            dataType = EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum.DATA_TYPE_UNSPECIFIED;
                                            defaultValue = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                                booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(449.29),
                                                    }};
                                                }};
                                                doubleValue = 1341.73;
                                                intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("enim"),
                                                        add("illo"),
                                                        add("magnam"),
                                                        add("delectus"),
                                                    }};
                                                }};
                                                intValue = "numquam";
                                                jsonValue = "optio";
                                                protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                                    protoValues = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("repellat", "quae");
                                                            put("deleniti", "expedita");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("excepturi", "aliquid");
                                                            put("sed", "beatae");
                                                            put("similique", "ea");
                                                            put("animi", "dolore");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("dignissimos", "esse");
                                                            put("animi", "laudantium");
                                                            put("esse", "eveniet");
                                                            put("earum", "velit");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("eius", "rerum");
                                                            put("itaque", "dignissimos");
                                                            put("ipsam", "explicabo");
                                                            put("impedit", "aliquid");
                                                        }}),
                                                    }};
                                                }};
                                                protoValue = new java.util.HashMap<String, Object>() {{
                                                    put("facilis", "ipsum");
                                                    put("ut", "quaerat");
                                                }};
                                                serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                                    objectValue = "architecto";
                                                }};
                                                stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("eveniet"),
                                                        add("dolor"),
                                                        add("expedita"),
                                                    }};
                                                }};
                                                stringValue = "libero";
                                            }};
                                            isDeprecated = false;
                                            isOutput = false;
                                            jsonSchema = "iste";
                                            key = "illo";
                                            protoDef = new EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition() {{
                                                fullName = "minus";
                                                path = "quos";
                                            }};
                                            required = false;
                                            validationRule = new EnterpriseCrmEventbusProtoParamSpecEntryValidationRule() {{
                                                doubleRange = new EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange() {{
                                                    max = 8356.46;
                                                    min = 5766.57;
                                                }};
                                                intRange = new EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange() {{
                                                    max = "iusto";
                                                    min = "enim";
                                                }};
                                                stringRegex = new EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex() {{
                                                    exclusive = false;
                                                    regex = "accusamus";
                                                }};
                                            }};
                                        }}),
                                        add(new EnterpriseCrmFrontendsEventbusProtoParamSpecEntry() {{
                                            className = "aperiam";
                                            collectionElementClassName = "voluptates";
                                            config = new EnterpriseCrmEventbusProtoParamSpecEntryConfig() {{
                                                descriptivePhrase = "laudantium";
                                                helpText = "tempora";
                                                hideDefaultValue = false;
                                                inputDisplayOption = EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnum.DEFAULT_;
                                                isHidden = false;
                                                label = "omnis";
                                                parameterNameOption = EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnum.VALUE_IS_PARAMETER_NAME;
                                                subSectionLabel = "rem";
                                                uiPlaceholderText = "tenetur";
                                            }};
                                            dataType = EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum.DOUBLE_ARRAY;
                                            defaultValue = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                                booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(1013.74),
                                                        add(3051.89),
                                                        add(2867.26),
                                                        add(9834.34),
                                                    }};
                                                }};
                                                doubleValue = 1966.46;
                                                intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("consequatur"),
                                                        add("esse"),
                                                        add("debitis"),
                                                        add("facere"),
                                                    }};
                                                }};
                                                intValue = "quisquam";
                                                jsonValue = "cumque";
                                                protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                                    protoValues = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("deserunt", "ad");
                                                            put("reiciendis", "sequi");
                                                            put("porro", "laborum");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("quibusdam", "omnis");
                                                            put("aut", "ipsam");
                                                            put("officia", "cupiditate");
                                                        }}),
                                                    }};
                                                }};
                                                protoValue = new java.util.HashMap<String, Object>() {{
                                                    put("quia", "necessitatibus");
                                                    put("accusantium", "ad");
                                                }};
                                                serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                                    objectValue = "nisi";
                                                }};
                                                stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("quia"),
                                                        add("laudantium"),
                                                    }};
                                                }};
                                                stringValue = "sed";
                                            }};
                                            isDeprecated = false;
                                            isOutput = false;
                                            jsonSchema = "odit";
                                            key = "iusto";
                                            protoDef = new EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition() {{
                                                fullName = "expedita";
                                                path = "eos";
                                            }};
                                            required = false;
                                            validationRule = new EnterpriseCrmEventbusProtoParamSpecEntryValidationRule() {{
                                                doubleRange = new EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange() {{
                                                    max = 8304.77;
                                                    min = 1998.79;
                                                }};
                                                intRange = new EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange() {{
                                                    max = "ipsa";
                                                    min = "sint";
                                                }};
                                                stringRegex = new EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex() {{
                                                    exclusive = false;
                                                    regex = "dolore";
                                                }};
                                            }};
                                        }}),
                                        add(new EnterpriseCrmFrontendsEventbusProtoParamSpecEntry() {{
                                            className = "esse";
                                            collectionElementClassName = "accusantium";
                                            config = new EnterpriseCrmEventbusProtoParamSpecEntryConfig() {{
                                                descriptivePhrase = "distinctio";
                                                helpText = "sapiente";
                                                hideDefaultValue = false;
                                                inputDisplayOption = EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnum.STRING_MULTI_LINE;
                                                isHidden = false;
                                                label = "est";
                                                parameterNameOption = EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnum.IS_PARAMETER_NAME;
                                                subSectionLabel = "delectus";
                                                uiPlaceholderText = "culpa";
                                            }};
                                            dataType = EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum.DOUBLE_ARRAY;
                                            defaultValue = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                                booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(9775.83),
                                                        add(3744.14),
                                                        add(2477.67),
                                                        add(3538.19),
                                                    }};
                                                }};
                                                doubleValue = 6750.58;
                                                intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("doloribus"),
                                                        add("animi"),
                                                    }};
                                                }};
                                                intValue = "recusandae";
                                                jsonValue = "corporis";
                                                protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                                    protoValues = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("distinctio", "maiores");
                                                            put("laboriosam", "voluptatem");
                                                            put("optio", "sequi");
                                                            put("sunt", "vitae");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("doloremque", "sed");
                                                            put("amet", "rerum");
                                                            put("in", "nostrum");
                                                            put("temporibus", "ratione");
                                                        }}),
                                                    }};
                                                }};
                                                protoValue = new java.util.HashMap<String, Object>() {{
                                                    put("nisi", "dignissimos");
                                                }};
                                                serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                                    objectValue = "reiciendis";
                                                }};
                                                stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("vitae"),
                                                        add("est"),
                                                        add("accusantium"),
                                                        add("quod"),
                                                    }};
                                                }};
                                                stringValue = "minus";
                                            }};
                                            isDeprecated = false;
                                            isOutput = false;
                                            jsonSchema = "quos";
                                            key = "possimus";
                                            protoDef = new EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition() {{
                                                fullName = "maiores";
                                                path = "odio";
                                            }};
                                            required = false;
                                            validationRule = new EnterpriseCrmEventbusProtoParamSpecEntryValidationRule() {{
                                                doubleRange = new EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange() {{
                                                    max = 5886.62;
                                                    min = 9609.33;
                                                }};
                                                intRange = new EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange() {{
                                                    max = "aperiam";
                                                    min = "similique";
                                                }};
                                                stringRegex = new EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex() {{
                                                    exclusive = false;
                                                    regex = "nesciunt";
                                                }};
                                            }};
                                        }}),
                                    }};
                                }};
                                stats = new EnterpriseCrmEventbusStats() {{
                                    dimensions = new EnterpriseCrmEventbusStatsDimensions() {{
                                        clientId = "provident";
                                        enumFilterType = EnterpriseCrmEventbusStatsDimensionsEnumFilterTypeEnum.DEFAULT_INCLUSIVE;
                                        errorEnumString = "repellendus";
                                        retryAttempt = EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnum.RETRYABLE;
                                        taskName = "alias";
                                        taskNumber = "impedit";
                                        triggerId = "sequi";
                                        warningEnumString = "commodi";
                                        workflowId = "labore";
                                        workflowName = "expedita";
                                    }};
                                    durationInSeconds = 4467.37;
                                    errorRate = 7898.7;
                                    qps = 1237.95;
                                    warningRate = 3172.6;
                                }};
                                taskType = EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum.IO_TEMPLATE;
                                uiConfig = new EnterpriseCrmEventbusProtoTaskUiConfig() {{
                                    taskUiModuleConfigs = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoTaskUiModuleConfig[]{{
                                        add(new EnterpriseCrmEventbusProtoTaskUiModuleConfig() {{
                                            moduleId = EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum.FIELD_MAPPING;
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoTaskUiModuleConfig() {{
                                            moduleId = EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum.APPS_SCRIPT_NAVIGATOR;
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoTaskUiModuleConfig() {{
                                            moduleId = EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum.README;
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoTaskUiModuleConfig() {{
                                            moduleId = EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum.SUB_WORKFLOW_SCATTER_GATHER;
                                        }}),
                                    }};
                                }};
                            }};
                            taskExecutionStrategy = EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum.WHEN_ALL_SUCCEED;
                            taskName = "quas";
                            taskNumber = "blanditiis";
                            taskSpec = "cum";
                            taskTemplateName = "dicta";
                            taskType = EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum.IO_TEMPLATE;
                        }}),
                        add(new EnterpriseCrmFrontendsEventbusProtoTaskConfig() {{
                            alertConfigs = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoTaskAlertConfig[]{{
                                add(new EnterpriseCrmEventbusProtoTaskAlertConfig() {{
                                    aggregationPeriod = "eveniet";
                                    alertDisabled = false;
                                    alertName = "repudiandae";
                                    clientId = "sed";
                                    durationThresholdMs = "impedit";
                                    errorEnumList = new EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList() {{
                                        enumStrings = new String[]{{
                                            add("impedit"),
                                            add("vel"),
                                            add("eligendi"),
                                        }};
                                        filterType = EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum.EXCLUSIVE;
                                    }};
                                    metricType = EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum.TASK_WARNING_RATE;
                                    numAggregationPeriods = 105094;
                                    onlyFinalAttempt = false;
                                    playbookUrl = "veritatis";
                                    thresholdType = EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum.EXPECTED_MAX;
                                    thresholdValue = new EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue() {{
                                        absolute = "itaque";
                                        percentage = 875452;
                                    }};
                                    warningEnumList = new EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList() {{
                                        enumStrings = new String[]{{
                                            add("illo"),
                                            add("quo"),
                                            add("dignissimos"),
                                        }};
                                        filterType = EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum.EXCLUSIVE;
                                    }};
                                }}),
                                add(new EnterpriseCrmEventbusProtoTaskAlertConfig() {{
                                    aggregationPeriod = "distinctio";
                                    alertDisabled = false;
                                    alertName = "possimus";
                                    clientId = "cum";
                                    durationThresholdMs = "suscipit";
                                    errorEnumList = new EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList() {{
                                        enumStrings = new String[]{{
                                            add("earum"),
                                            add("quod"),
                                            add("nihil"),
                                            add("quaerat"),
                                        }};
                                        filterType = EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum.DEFAULT_INCLUSIVE;
                                    }};
                                    metricType = EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum.TASK_WARNING_RATE;
                                    numAggregationPeriods = 514625;
                                    onlyFinalAttempt = false;
                                    playbookUrl = "rerum";
                                    thresholdType = EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum.EXPECTED_MIN;
                                    thresholdValue = new EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue() {{
                                        absolute = "odit";
                                        percentage = 319419;
                                    }};
                                    warningEnumList = new EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList() {{
                                        enumStrings = new String[]{{
                                            add("beatae"),
                                        }};
                                        filterType = EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum.DEFAULT_INCLUSIVE;
                                    }};
                                }}),
                            }};
                            createTime = "esse";
                            creatorEmail = "magnam";
                            description = "odio";
                            disableStrictTypeValidation = false;
                            errorCatcherId = "nulla";
                            externalTaskType = EnterpriseCrmFrontendsEventbusProtoTaskConfigExternalTaskTypeEnum.ERROR_TASK;
                            failurePolicy = new EnterpriseCrmEventbusProtoFailurePolicy() {{
                                intervalInSeconds = "cupiditate";
                                maxNumRetries = 72422;
                                retryStrategy = EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum.NONE;
                            }};
                            incomingEdgeCount = 670430;
                            jsonValidationOption = EnterpriseCrmFrontendsEventbusProtoTaskConfigJsonValidationOptionEnum.PRE_POST_EXECUTION;
                            label = "fugit";
                            lastModifiedTime = "maxime";
                            nextTasks = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoNextTask[]{{
                                add(new EnterpriseCrmEventbusProtoNextTask() {{
                                    combinedConditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCombinedCondition[]{{
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "illum";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.IS_EMPTY;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(4563.71),
                                                                add(1274.99),
                                                            }};
                                                        }};
                                                        doubleValue = 2337.08;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("optio"),
                                                                add("ipsa"),
                                                                add("maiores"),
                                                                add("exercitationem"),
                                                            }};
                                                        }};
                                                        intValue = "culpa";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("aspernatur", "sapiente");
                                                            put("neque", "officia");
                                                            put("suscipit", "harum");
                                                            put("ducimus", "doloremque");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("laudantium"),
                                                            }};
                                                        }};
                                                        stringValue = "iusto";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "corrupti";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.GREATER_THAN;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(4358.83),
                                                                add(685.96),
                                                            }};
                                                        }};
                                                        doubleValue = 3086.58;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("sapiente"),
                                                            }};
                                                        }};
                                                        intValue = "corporis";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("iure", "quisquam");
                                                            put("provident", "laudantium");
                                                            put("nam", "nemo");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("ipsam"),
                                                                add("minima"),
                                                            }};
                                                        }};
                                                        stringValue = "tempora";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "corrupti";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.UNSET;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(2578.21),
                                                                add(392.02),
                                                                add(7402.45),
                                                                add(7512.98),
                                                            }};
                                                        }};
                                                        doubleValue = 6283.14;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("impedit"),
                                                                add("nisi"),
                                                                add("cumque"),
                                                                add("soluta"),
                                                            }};
                                                        }};
                                                        intValue = "fugiat";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("nam", "enim");
                                                            put("maiores", "consectetur");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("maxime"),
                                                                add("cupiditate"),
                                                                add("voluptatem"),
                                                                add("provident"),
                                                            }};
                                                        }};
                                                        stringValue = "adipisci";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "magnam";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.IS_NOT_EMPTY;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(1315.76),
                                                                add(4258.17),
                                                                add(7403.47),
                                                            }};
                                                        }};
                                                        doubleValue = 6630.62;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("fugit"),
                                                                add("ipsam"),
                                                                add("nostrum"),
                                                                add("sequi"),
                                                            }};
                                                        }};
                                                        intValue = "voluptatum";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("error", "nobis");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("voluptate"),
                                                                add("eius"),
                                                            }};
                                                        }};
                                                        stringValue = "expedita";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "voluptates";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.IS_EMPTY;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(279.46),
                                                            }};
                                                        }};
                                                        doubleValue = 9191.71;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("ea"),
                                                                add("eos"),
                                                            }};
                                                        }};
                                                        intValue = "aliquam";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("hic", "maiores");
                                                            put("asperiores", "autem");
                                                            put("nesciunt", "cupiditate");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("provident"),
                                                                add("beatae"),
                                                                add("ipsa"),
                                                            }};
                                                        }};
                                                        stringValue = "mollitia";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                    }};
                                    condition = "nam";
                                    description = "assumenda";
                                    label = "quo";
                                    taskConfigId = "fuga";
                                    taskNumber = "tempore";
                                }}),
                                add(new EnterpriseCrmEventbusProtoNextTask() {{
                                    combinedConditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCombinedCondition[]{{
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "suscipit";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.GREATER_THAN;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(3971.6),
                                                                add(5897.12),
                                                            }};
                                                        }};
                                                        doubleValue = 3857.6;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("ab"),
                                                                add("itaque"),
                                                                add("quisquam"),
                                                                add("eaque"),
                                                            }};
                                                        }};
                                                        intValue = "alias";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("consequuntur", "vitae");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("sequi"),
                                                                add("amet"),
                                                                add("exercitationem"),
                                                            }};
                                                        }};
                                                        stringValue = "illum";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "unde";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.EXISTS;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(7321.42),
                                                                add(2258.09),
                                                                add(8901.12),
                                                                add(7513.81),
                                                            }};
                                                        }};
                                                        doubleValue = 9890.89;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("id"),
                                                                add("atque"),
                                                                add("quibusdam"),
                                                                add("sit"),
                                                            }};
                                                        }};
                                                        intValue = "quo";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("aliquam", "provident");
                                                            put("vero", "earum");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("ipsum"),
                                                            }};
                                                        }};
                                                        stringValue = "alias";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "doloremque";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.CONTAINS;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(4620.97),
                                                                add(5410.09),
                                                                add(6383.63),
                                                            }};
                                                        }};
                                                        doubleValue = 4064.93;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("a"),
                                                            }};
                                                        }};
                                                        intValue = "laborum";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("quod", "a");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("accusantium"),
                                                            }};
                                                        }};
                                                        stringValue = "commodi";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "atque";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.GREATER_THAN;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(4518.07),
                                                                add(4617.54),
                                                                add(7998.3),
                                                                add(1102.47),
                                                            }};
                                                        }};
                                                        doubleValue = 9605.23;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("quod"),
                                                                add("voluptate"),
                                                                add("inventore"),
                                                                add("facere"),
                                                            }};
                                                        }};
                                                        intValue = "maxime";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("ab", "ex");
                                                            put("consectetur", "maiores");
                                                            put("sed", "animi");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("eligendi"),
                                                            }};
                                                        }};
                                                        stringValue = "voluptatum";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                    }};
                                    condition = "perferendis";
                                    description = "laborum";
                                    label = "omnis";
                                    taskConfigId = "nihil";
                                    taskNumber = "tenetur";
                                }}),
                                add(new EnterpriseCrmEventbusProtoNextTask() {{
                                    combinedConditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCombinedCondition[]{{
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "adipisci";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.CONTAINS;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(8501.96),
                                                                add(8701.83),
                                                                add(9453.2),
                                                                add(5620.66),
                                                            }};
                                                        }};
                                                        doubleValue = 3712.95;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("laborum"),
                                                                add("perspiciatis"),
                                                            }};
                                                        }};
                                                        intValue = "voluptates";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("quasi", "quas");
                                                            put("odio", "commodi");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("aliquid"),
                                                                add("mollitia"),
                                                                add("quidem"),
                                                                add("explicabo"),
                                                            }};
                                                        }};
                                                        stringValue = "et";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "magni";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.EXISTS;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(9506.61),
                                                                add(7710.78),
                                                                add(6018.03),
                                                                add(2814.54),
                                                            }};
                                                        }};
                                                        doubleValue = 8145.85;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("doloribus"),
                                                                add("recusandae"),
                                                            }};
                                                        }};
                                                        intValue = "quisquam";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("dignissimos", "iste");
                                                            put("provident", "dolor");
                                                            put("sint", "aperiam");
                                                            put("eaque", "eum");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("laborum"),
                                                                add("autem"),
                                                            }};
                                                        }};
                                                        stringValue = "assumenda";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "explicabo";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.IS_EMPTY;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(327.75),
                                                            }};
                                                        }};
                                                        doubleValue = 47.47;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("ullam"),
                                                            }};
                                                        }};
                                                        intValue = "quis";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("ratione", "quas");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("recusandae"),
                                                                add("cumque"),
                                                                add("doloremque"),
                                                                add("totam"),
                                                            }};
                                                        }};
                                                        stringValue = "iure";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "maiores";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.DOES_NOT_EXIST;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(842.07),
                                                            }};
                                                        }};
                                                        doubleValue = 8996.52;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("dicta"),
                                                                add("ipsam"),
                                                                add("consequuntur"),
                                                            }};
                                                        }};
                                                        intValue = "cumque";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("non", "beatae");
                                                            put("sunt", "molestias");
                                                            put("beatae", "autem");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("libero"),
                                                                add("molestias"),
                                                            }};
                                                        }};
                                                        stringValue = "necessitatibus";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "ipsum";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.DOES_NOT_EXIST;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(8496.9),
                                                                add(7178.53),
                                                                add(329.45),
                                                            }};
                                                        }};
                                                        doubleValue = 2498.03;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("consequatur"),
                                                                add("laudantium"),
                                                            }};
                                                        }};
                                                        intValue = "repellendus";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("quibusdam", "consectetur");
                                                            put("voluptas", "quaerat");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("tenetur"),
                                                                add("assumenda"),
                                                                add("dolore"),
                                                                add("enim"),
                                                            }};
                                                        }};
                                                        stringValue = "ullam";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "alias";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.LESS_THAN;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(1168.67),
                                                                add(1548.4),
                                                                add(4124.81),
                                                                add(2041.44),
                                                            }};
                                                        }};
                                                        doubleValue = 8436.59;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("rem"),
                                                                add("officiis"),
                                                            }};
                                                        }};
                                                        intValue = "omnis";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("corporis", "quod");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("placeat"),
                                                            }};
                                                        }};
                                                        stringValue = "excepturi";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "recusandae";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.GREATER_THAN;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(9561.3),
                                                            }};
                                                        }};
                                                        doubleValue = 2172.79;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("soluta"),
                                                            }};
                                                        }};
                                                        intValue = "necessitatibus";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("recusandae", "labore");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("magni"),
                                                            }};
                                                        }};
                                                        stringValue = "aperiam";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "dolores";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.IS_EMPTY;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(1689.76),
                                                                add(1096.83),
                                                            }};
                                                        }};
                                                        doubleValue = 3968.84;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("voluptate"),
                                                                add("vel"),
                                                            }};
                                                        }};
                                                        intValue = "minima";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("vel", "laboriosam");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("quasi"),
                                                                add("rem"),
                                                            }};
                                                        }};
                                                        stringValue = "dignissimos";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "assumenda";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.EXISTS;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(1528.87),
                                                                add(804.48),
                                                                add(9764.03),
                                                                add(6012.28),
                                                            }};
                                                        }};
                                                        doubleValue = 6456.09;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("consequatur"),
                                                                add("adipisci"),
                                                                add("doloremque"),
                                                                add("optio"),
                                                            }};
                                                        }};
                                                        intValue = "tempora";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("cumque", "maxime");
                                                            put("et", "beatae");
                                                            put("id", "consequatur");
                                                            put("quos", "ratione");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("tempora"),
                                                                add("eos"),
                                                            }};
                                                        }};
                                                        stringValue = "natus";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                    }};
                                    condition = "voluptatem";
                                    description = "suscipit";
                                    label = "laudantium";
                                    taskConfigId = "facilis";
                                    taskNumber = "laudantium";
                                }}),
                            }};
                            nextTasksExecutionPolicy = EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum.RUN_ALL_MATCH;
                            parameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry>() {{
                                put("quia", new EnterpriseCrmFrontendsEventbusProtoParameterEntry() {{
                                    dataType = EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum.PROTO_ENUM;
                                    key = "quaerat";
                                    value = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                        booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                            booleanValues = new Boolean[]{{
                                                add(false),
                                                add(false),
                                            }};
                                        }};
                                        booleanValue = false;
                                        doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                            doubleValues = new Double[]{{
                                                add(4813.07),
                                                add(9585.33),
                                                add(4590.86),
                                                add(2075.12),
                                            }};
                                        }};
                                        doubleValue = 6975.91;
                                        intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                            intValues = new String[]{{
                                                add("praesentium"),
                                                add("tempora"),
                                                add("ipsam"),
                                                add("officiis"),
                                            }};
                                        }};
                                        intValue = "sequi";
                                        jsonValue = "magni";
                                        protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                            protoValues = new java.util.HashMap<String, Object>[]{{
                                                add(new java.util.HashMap<String, Object>() {{
                                                    put("amet", "veritatis");
                                                    put("error", "voluptatibus");
                                                    put("numquam", "rerum");
                                                }}),
                                            }};
                                        }};
                                        protoValue = new java.util.HashMap<String, Object>() {{
                                            put("quibusdam", "earum");
                                            put("excepturi", "numquam");
                                            put("molestiae", "impedit");
                                        }};
                                        serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                            objectValue = "error";
                                        }};
                                        stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                            stringValues = new String[]{{
                                                add("voluptatum"),
                                                add("aliquid"),
                                                add("nihil"),
                                            }};
                                        }};
                                        stringValue = "facilis";
                                    }};
                                }});
                            }};
                            position = new EnterpriseCrmEventbusProtoCoordinate() {{
                                x = 759451;
                                y = 279673;
                            }};
                            precondition = "eos";
                            preconditionLabel = "magnam";
                            rollbackStrategy = new EnterpriseCrmFrontendsEventbusProtoRollbackStrategy() {{
                                parameters = new EnterpriseCrmFrontendsEventbusProtoEventParameters() {{
                                    parameters = new org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry[]{{
                                        add(new EnterpriseCrmFrontendsEventbusProtoParameterEntry() {{
                                            dataType = EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum.STRING_ARRAY;
                                            key = "eum";
                                            value = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                                booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(5522.87),
                                                        add(741.24),
                                                    }};
                                                }};
                                                doubleValue = 3833.81;
                                                intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("fugiat"),
                                                        add("impedit"),
                                                        add("culpa"),
                                                        add("atque"),
                                                    }};
                                                }};
                                                intValue = "voluptates";
                                                jsonValue = "maiores";
                                                protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                                    protoValues = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("doloribus", "cumque");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("modi", "cumque");
                                                            put("ipsam", "occaecati");
                                                            put("ipsum", "accusamus");
                                                        }}),
                                                    }};
                                                }};
                                                protoValue = new java.util.HashMap<String, Object>() {{
                                                    put("quasi", "fugit");
                                                    put("quo", "temporibus");
                                                    put("mollitia", "id");
                                                    put("quibusdam", "ipsa");
                                                }};
                                                serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                                    objectValue = "accusamus";
                                                }};
                                                stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("quam"),
                                                        add("similique"),
                                                        add("delectus"),
                                                        add("saepe"),
                                                    }};
                                                }};
                                                stringValue = "facere";
                                            }};
                                        }}),
                                    }};
                                }};
                                rollbackTaskImplementationClassName = "nobis";
                                taskNumbersToRollback = new String[]{{
                                    add("molestias"),
                                    add("aut"),
                                    add("temporibus"),
                                    add("tenetur"),
                                }};
                            }};
                            successPolicy = new EnterpriseCrmEventbusProtoSuccessPolicy() {{
                                finalState = EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnum.UNSPECIFIED;
                            }};
                            synchronousCallFailurePolicy = new EnterpriseCrmEventbusProtoFailurePolicy() {{
                                intervalInSeconds = "numquam";
                                maxNumRetries = 546950;
                                retryStrategy = EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum.LINEAR_BACKOFF;
                            }};
                            taskEntity = new EnterpriseCrmFrontendsEventbusProtoTaskEntity() {{
                                disabledForVpcSc = false;
                                metadata = new EnterpriseCrmEventbusProtoTaskMetadata() {{
                                    activeTaskName = "dolore";
                                    admins = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoTaskMetadataAdmin[]{{
                                        add(new EnterpriseCrmEventbusProtoTaskMetadataAdmin() {{
                                            googleGroupEmail = "reiciendis";
                                            userEmail = "iste";
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoTaskMetadataAdmin() {{
                                            googleGroupEmail = "amet";
                                            userEmail = "occaecati";
                                        }}),
                                    }};
                                    category = EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum.UNSPECIFIED_CATEGORY;
                                    codeSearchLink = "impedit";
                                    defaultJsonValidationOption = EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOptionEnum.SKIP;
                                    defaultSpec = "quos";
                                    description = "blanditiis";
                                    descriptiveName = "quas";
                                    docMarkdown = "voluptatem";
                                    externalCategory = EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnum.EXTERNAL_SECURITY;
                                    externalCategorySequence = 559248;
                                    externalDocHtml = "ipsum";
                                    externalDocLink = "vero";
                                    externalDocMarkdown = "fuga";
                                    g3DocLink = "facilis";
                                    iconLink = "maiores";
                                    isDeprecated = false;
                                    name = "Clay Will";
                                    standaloneExternalDocHtml = "voluptatibus";
                                    status = EnterpriseCrmEventbusProtoTaskMetadataStatusEnum.ACTIVE;
                                    system = EnterpriseCrmEventbusProtoTaskMetadataSystemEnum.SPANNER;
                                    tags = new String[]{{
                                        add("delectus"),
                                        add("odio"),
                                        add("voluptatibus"),
                                    }};
                                }};
                                paramSpecs = new EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage() {{
                                    parameters = new org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoParamSpecEntry[]{{
                                        add(new EnterpriseCrmFrontendsEventbusProtoParamSpecEntry() {{
                                            className = "quam";
                                            collectionElementClassName = "omnis";
                                            config = new EnterpriseCrmEventbusProtoParamSpecEntryConfig() {{
                                                descriptivePhrase = "similique";
                                                helpText = "asperiores";
                                                hideDefaultValue = false;
                                                inputDisplayOption = EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnum.STRING_MULTI_LINE;
                                                isHidden = false;
                                                label = "facere";
                                                parameterNameOption = EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnum.DEFAULT_NOT_PARAMETER_NAME;
                                                subSectionLabel = "quis";
                                                uiPlaceholderText = "in";
                                            }};
                                            dataType = EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum.INT_VALUE;
                                            defaultValue = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                                booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(8526.1),
                                                        add(7439.38),
                                                        add(584.63),
                                                        add(9670.47),
                                                    }};
                                                }};
                                                doubleValue = 2891.53;
                                                intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("eos"),
                                                        add("quas"),
                                                        add("quasi"),
                                                        add("architecto"),
                                                    }};
                                                }};
                                                intValue = "praesentium";
                                                jsonValue = "iusto";
                                                protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                                    protoValues = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("iure", "laudantium");
                                                            put("modi", "magnam");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("nulla", "repudiandae");
                                                            put("quibusdam", "praesentium");
                                                            put("enim", "animi");
                                                            put("unde", "quae");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("nostrum", "eveniet");
                                                            put("laboriosam", "ratione");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("quidem", "illum");
                                                            put("reiciendis", "placeat");
                                                            put("dolores", "consequatur");
                                                        }}),
                                                    }};
                                                }};
                                                protoValue = new java.util.HashMap<String, Object>() {{
                                                    put("quia", "quidem");
                                                }};
                                                serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                                    objectValue = "voluptas";
                                                }};
                                                stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("laudantium"),
                                                        add("dignissimos"),
                                                        add("omnis"),
                                                        add("omnis"),
                                                    }};
                                                }};
                                                stringValue = "fugit";
                                            }};
                                            isDeprecated = false;
                                            isOutput = false;
                                            jsonSchema = "dolorem";
                                            key = "quidem";
                                            protoDef = new EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition() {{
                                                fullName = "molestiae";
                                                path = "debitis";
                                            }};
                                            required = false;
                                            validationRule = new EnterpriseCrmEventbusProtoParamSpecEntryValidationRule() {{
                                                doubleRange = new EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange() {{
                                                    max = 1120.71;
                                                    min = 2237.17;
                                                }};
                                                intRange = new EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange() {{
                                                    max = "ad";
                                                    min = "atque";
                                                }};
                                                stringRegex = new EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex() {{
                                                    exclusive = false;
                                                    regex = "ut";
                                                }};
                                            }};
                                        }}),
                                    }};
                                }};
                                stats = new EnterpriseCrmEventbusStats() {{
                                    dimensions = new EnterpriseCrmEventbusStatsDimensions() {{
                                        clientId = "asperiores";
                                        enumFilterType = EnterpriseCrmEventbusStatsDimensionsEnumFilterTypeEnum.DEFAULT_INCLUSIVE;
                                        errorEnumString = "deserunt";
                                        retryAttempt = EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnum.CANCELED;
                                        taskName = "et";
                                        taskNumber = "eos";
                                        triggerId = "impedit";
                                        warningEnumString = "ex";
                                        workflowId = "praesentium";
                                        workflowName = "natus";
                                    }};
                                    durationInSeconds = 1120.14;
                                    errorRate = 9465.58;
                                    qps = 5151.53;
                                    warningRate = 1331.48;
                                }};
                                taskType = EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum.IO_TEMPLATE;
                                uiConfig = new EnterpriseCrmEventbusProtoTaskUiConfig() {{
                                    taskUiModuleConfigs = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoTaskUiModuleConfig[]{{
                                        add(new EnterpriseCrmEventbusProtoTaskUiModuleConfig() {{
                                            moduleId = EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum.ERROR_HANDLING;
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoTaskUiModuleConfig() {{
                                            moduleId = EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum.LABEL;
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoTaskUiModuleConfig() {{
                                            moduleId = EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum.RPC;
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoTaskUiModuleConfig() {{
                                            moduleId = EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum.SUSPENSION;
                                        }}),
                                    }};
                                }};
                            }};
                            taskExecutionStrategy = EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum.WHEN_ALL_SUCCEED;
                            taskName = "voluptate";
                            taskNumber = "sed";
                            taskSpec = "dolorem";
                            taskTemplateName = "eaque";
                            taskType = EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum.ASIS_TEMPLATE;
                        }}),
                    }};
                    teardown = new EnterpriseCrmEventbusProtoTeardown() {{
                        teardownTaskConfigs = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoTeardownTaskConfig[]{{
                            add(new EnterpriseCrmEventbusProtoTeardownTaskConfig() {{
                                creatorEmail = "voluptate";
                                name = "Mercedes Schiller";
                                nextTeardownTask = new EnterpriseCrmEventbusProtoNextTeardownTask() {{
                                    name = "Terrance Strosin";
                                }};
                                parameters = new EnterpriseCrmEventbusProtoEventParameters() {{
                                    parameters = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoParameterEntry[]{{
                                        add(new EnterpriseCrmEventbusProtoParameterEntry() {{
                                            key = "exercitationem";
                                            value = new EnterpriseCrmEventbusProtoParameterValueType() {{
                                                booleanArray = new EnterpriseCrmEventbusProtoBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new EnterpriseCrmEventbusProtoDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(3366.4),
                                                    }};
                                                }};
                                                doubleValue = 4131.35;
                                                intArray = new EnterpriseCrmEventbusProtoIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("rem"),
                                                        add("aliquid"),
                                                    }};
                                                }};
                                                intValue = "aperiam";
                                                protoArray = new EnterpriseCrmEventbusProtoProtoParameterArray() {{
                                                    protoValues = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("itaque", "unde");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("dolor", "repellendus");
                                                            put("temporibus", "minus");
                                                            put("minima", "a");
                                                            put("beatae", "vitae");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("facere", "earum");
                                                        }}),
                                                    }};
                                                }};
                                                protoValue = new java.util.HashMap<String, Object>() {{
                                                    put("dicta", "voluptatem");
                                                    put("odit", "aliquid");
                                                    put("pariatur", "enim");
                                                }};
                                                serializedObjectValue = new EnterpriseCrmEventbusProtoSerializedObjectParameter() {{
                                                    objectValue = "numquam";
                                                }};
                                                stringArray = new EnterpriseCrmEventbusProtoStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("est"),
                                                    }};
                                                }};
                                                stringValue = "quaerat";
                                            }};
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoParameterEntry() {{
                                            key = "facere";
                                            value = new EnterpriseCrmEventbusProtoParameterValueType() {{
                                                booleanArray = new EnterpriseCrmEventbusProtoBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new EnterpriseCrmEventbusProtoDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(38.6),
                                                        add(9574.89),
                                                        add(8876),
                                                    }};
                                                }};
                                                doubleValue = 7088.83;
                                                intArray = new EnterpriseCrmEventbusProtoIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("vitae"),
                                                    }};
                                                }};
                                                intValue = "odio";
                                                protoArray = new EnterpriseCrmEventbusProtoProtoParameterArray() {{
                                                    protoValues = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("distinctio", "placeat");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("eligendi", "sit");
                                                            put("possimus", "distinctio");
                                                            put("distinctio", "assumenda");
                                                            put("illum", "soluta");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("laudantium", "tempora");
                                                            put("esse", "doloremque");
                                                        }}),
                                                    }};
                                                }};
                                                protoValue = new java.util.HashMap<String, Object>() {{
                                                    put("reiciendis", "facilis");
                                                    put("aliquam", "repudiandae");
                                                    put("amet", "natus");
                                                }};
                                                serializedObjectValue = new EnterpriseCrmEventbusProtoSerializedObjectParameter() {{
                                                    objectValue = "ab";
                                                }};
                                                stringArray = new EnterpriseCrmEventbusProtoStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("eum"),
                                                        add("rerum"),
                                                        add("placeat"),
                                                        add("ab"),
                                                    }};
                                                }};
                                                stringValue = "ad";
                                            }};
                                        }}),
                                    }};
                                }};
                                properties = new EnterpriseCrmEventbusProtoEventBusProperties() {{
                                    properties = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoPropertyEntry[]{{
                                        add(new EnterpriseCrmEventbusProtoPropertyEntry() {{
                                            key = "porro";
                                            value = new EnterpriseCrmEventbusProtoValueType() {{
                                                booleanValue = false;
                                                doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                    values = new Double[]{{
                                                        add(7738.89),
                                                        add(2851.75),
                                                    }};
                                                }};
                                                doubleValue = 9365.18;
                                                intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                    values = new String[]{{
                                                        add("numquam"),
                                                        add("enim"),
                                                    }};
                                                }};
                                                intValue = "cupiditate";
                                                protoValue = new java.util.HashMap<String, Object>() {{
                                                    put("itaque", "fuga");
                                                    put("consectetur", "modi");
                                                    put("aspernatur", "explicabo");
                                                }};
                                                stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                    values = new String[]{{
                                                        add("ipsa"),
                                                        add("eveniet"),
                                                    }};
                                                }};
                                                stringValue = "sint";
                                            }};
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoPropertyEntry() {{
                                            key = "nobis";
                                            value = new EnterpriseCrmEventbusProtoValueType() {{
                                                booleanValue = false;
                                                doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                    values = new Double[]{{
                                                        add(374.77),
                                                    }};
                                                }};
                                                doubleValue = 92.48;
                                                intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                    values = new String[]{{
                                                        add("recusandae"),
                                                        add("voluptate"),
                                                        add("deleniti"),
                                                        add("est"),
                                                    }};
                                                }};
                                                intValue = "et";
                                                protoValue = new java.util.HashMap<String, Object>() {{
                                                    put("quibusdam", "quos");
                                                    put("maiores", "quidem");
                                                    put("in", "culpa");
                                                }};
                                                stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                    values = new String[]{{
                                                        add("fuga"),
                                                    }};
                                                }};
                                                stringValue = "dicta";
                                            }};
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoPropertyEntry() {{
                                            key = "architecto";
                                            value = new EnterpriseCrmEventbusProtoValueType() {{
                                                booleanValue = false;
                                                doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                    values = new Double[]{{
                                                        add(7574.38),
                                                        add(8855.23),
                                                    }};
                                                }};
                                                doubleValue = 4909.56;
                                                intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                    values = new String[]{{
                                                        add("ratione"),
                                                    }};
                                                }};
                                                intValue = "possimus";
                                                protoValue = new java.util.HashMap<String, Object>() {{
                                                    put("aut", "natus");
                                                    put("esse", "delectus");
                                                }};
                                                stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                    values = new String[]{{
                                                        add("ratione"),
                                                        add("ipsa"),
                                                        add("debitis"),
                                                    }};
                                                }};
                                                stringValue = "iste";
                                            }};
                                        }}),
                                    }};
                                }};
                                teardownTaskImplementationClassName = "deserunt";
                            }}),
                        }};
                    }};;
                    templateParameters = new EnterpriseCrmFrontendsEventbusProtoWorkflowParameters() {{
                        parameters = new org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry[]{{
                            add(new EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry() {{
                                attributes = new EnterpriseCrmEventbusProtoAttributes() {{
                                    dataType = EnterpriseCrmEventbusProtoAttributesDataTypeEnum.URL;
                                    defaultValue = new EnterpriseCrmEventbusProtoValueType() {{
                                        booleanValue = false;
                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                            values = new Double[]{{
                                                add(3701.95),
                                            }};
                                        }};
                                        doubleValue = 7296.12;
                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                            values = new String[]{{
                                                add("omnis"),
                                            }};
                                        }};
                                        intValue = "dicta";
                                        protoValue = new java.util.HashMap<String, Object>() {{
                                            put("explicabo", "consequatur");
                                        }};
                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                            values = new String[]{{
                                                add("consequatur"),
                                            }};
                                        }};
                                        stringValue = "fugiat";
                                    }};
                                    isRequired = false;
                                    isSearchable = false;
                                    logSettings = new EnterpriseCrmEventbusProtoLogSettings() {{
                                        logFieldName = "voluptatum";
                                        sanitizeOptions = new EnterpriseCrmLoggingGwsSanitizeOptions() {{
                                            isAlreadySanitized = false;
                                            logType = new org.openapis.openapi.models.shared.EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum[]{{
                                                add(EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum.ALL),
                                            }};
                                            privacy = EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum.NOT_PII;
                                            sanitizeType = EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum.OBFUSCATE;
                                        }};
                                        seedPeriod = EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum.MONTH;
                                        seedScope = EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum.TIME_PERIOD;
                                        shorteningLimits = new EnterpriseCrmLoggingGwsFieldLimits() {{
                                            logAction = EnterpriseCrmLoggingGwsFieldLimitsLogActionEnum.DONT_LOG;
                                            logType = new org.openapis.openapi.models.shared.EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum[]{{
                                                add(EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum.GTS),
                                                add(EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum.GTS),
                                            }};
                                            maxArraySize = 828735;
                                            maxStringLength = 126367;
                                            shortenerType = EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum.SHORTENER_TYPE_UNSPECIFIED;
                                        }};
                                    }};
                                    searchable = EnterpriseCrmEventbusProtoAttributesSearchableEnum.NO;
                                    taskVisibility = new String[]{{
                                        add("optio"),
                                        add("quasi"),
                                        add("repellat"),
                                    }};
                                }};
                                children = new org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry[]{{
                                    add(new EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry() {{}}),
                                    add(new EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry() {{}}),
                                    add(new EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry() {{}}),
                                }};
                                dataType = EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum.PROTO_VALUE;
                                defaultValue = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                    booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                        booleanValues = new Boolean[]{{
                                            add(false),
                                            add(false),
                                            add(false),
                                        }};
                                    }};
                                    booleanValue = false;
                                    doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                        doubleValues = new Double[]{{
                                            add(5460.89),
                                        }};
                                    }};
                                    doubleValue = 1251.61;
                                    intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                        intValues = new String[]{{
                                            add("delectus"),
                                            add("illum"),
                                        }};
                                    }};
                                    intValue = "porro";
                                    jsonValue = "quaerat";
                                    protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                        protoValues = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("quos", "in");
                                                put("commodi", "maxime");
                                                put("sed", "minus");
                                                put("consequuntur", "possimus");
                                            }}),
                                        }};
                                    }};
                                    protoValue = new java.util.HashMap<String, Object>() {{
                                        put("harum", "aliquam");
                                        put("eligendi", "hic");
                                        put("quo", "illo");
                                        put("nobis", "esse");
                                    }};
                                    serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                        objectValue = "nisi";
                                    }};
                                    stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                        stringValues = new String[]{{
                                            add("sequi"),
                                        }};
                                    }};
                                    stringValue = "alias";
                                }};
                                inOutType = EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum.IN_OUT;
                                isTransient = false;
                                jsonSchema = "quos";
                                key = "numquam";
                                name = "Miss Elisa Reichert";
                                producedBy = new EnterpriseCrmEventbusProtoNodeIdentifier() {{
                                    elementIdentifier = "eos";
                                    elementType = EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum.UNKNOWN_TYPE;
                                }};
                                producer = "hic";
                                protoDefName = "repellendus";
                                protoDefPath = "nam";
                            }}),
                            add(new EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry() {{
                                attributes = new EnterpriseCrmEventbusProtoAttributes() {{
                                    dataType = EnterpriseCrmEventbusProtoAttributesDataTypeEnum.DATA_TYPE_UNSPECIFIED;
                                    defaultValue = new EnterpriseCrmEventbusProtoValueType() {{
                                        booleanValue = false;
                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                            values = new Double[]{{
                                                add(8667.03),
                                                add(7092.34),
                                            }};
                                        }};
                                        doubleValue = 4183.63;
                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                            values = new String[]{{
                                                add("recusandae"),
                                                add("nostrum"),
                                                add("officia"),
                                            }};
                                        }};
                                        intValue = "voluptas";
                                        protoValue = new java.util.HashMap<String, Object>() {{
                                            put("corporis", "excepturi");
                                            put("natus", "deleniti");
                                            put("necessitatibus", "aspernatur");
                                        }};
                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                            values = new String[]{{
                                                add("laborum"),
                                            }};
                                        }};
                                        stringValue = "vero";
                                    }};
                                    isRequired = false;
                                    isSearchable = false;
                                    logSettings = new EnterpriseCrmEventbusProtoLogSettings() {{
                                        logFieldName = "eos";
                                        sanitizeOptions = new EnterpriseCrmLoggingGwsSanitizeOptions() {{
                                            isAlreadySanitized = false;
                                            logType = new org.openapis.openapi.models.shared.EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum[]{{
                                                add(EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum.ALL),
                                            }};
                                            privacy = EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum.SPII;
                                            sanitizeType = EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum.SANITIZE_TYPE_UNSPECIFIED;
                                        }};
                                        seedPeriod = EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum.DAY;
                                        seedScope = EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum.PARAM_NAME;
                                        shorteningLimits = new EnterpriseCrmLoggingGwsFieldLimits() {{
                                            logAction = EnterpriseCrmLoggingGwsFieldLimitsLogActionEnum.LOG;
                                            logType = new org.openapis.openapi.models.shared.EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum[]{{
                                                add(EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum.GTS),
                                            }};
                                            maxArraySize = 155473;
                                            maxStringLength = 480108;
                                            shortenerType = EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum.SHORTENER_TYPE_UNSPECIFIED;
                                        }};
                                    }};
                                    searchable = EnterpriseCrmEventbusProtoAttributesSearchableEnum.YES;
                                    taskVisibility = new String[]{{
                                        add("blanditiis"),
                                    }};
                                }};
                                children = new org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry[]{{
                                    add(new EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry() {{}}),
                                    add(new EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry() {{}}),
                                    add(new EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry() {{}}),
                                }};
                                dataType = EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum.BYTES;
                                defaultValue = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                    booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                        booleanValues = new Boolean[]{{
                                            add(false),
                                            add(false),
                                        }};
                                    }};
                                    booleanValue = false;
                                    doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                        doubleValues = new Double[]{{
                                            add(9338.4),
                                            add(5231.56),
                                        }};
                                    }};
                                    doubleValue = 3663.27;
                                    intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                        intValues = new String[]{{
                                            add("recusandae"),
                                            add("omnis"),
                                        }};
                                    }};
                                    intValue = "ipsa";
                                    jsonValue = "aliquam";
                                    protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                        protoValues = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("quibusdam", "magni");
                                                put("consequuntur", "consequuntur");
                                                put("eius", "commodi");
                                            }}),
                                        }};
                                    }};
                                    protoValue = new java.util.HashMap<String, Object>() {{
                                        put("vel", "cupiditate");
                                        put("modi", "nisi");
                                    }};
                                    serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                        objectValue = "explicabo";
                                    }};
                                    stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                        stringValues = new String[]{{
                                            add("doloremque"),
                                            add("odio"),
                                        }};
                                    }};
                                    stringValue = "sit";
                                }};
                                inOutType = EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum.OUT;
                                isTransient = false;
                                jsonSchema = "tempora";
                                key = "delectus";
                                name = "Kayla Reinger";
                                producedBy = new EnterpriseCrmEventbusProtoNodeIdentifier() {{
                                    elementIdentifier = "optio";
                                    elementType = EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum.TRIGGER_CONFIG;
                                }};
                                producer = "maiores";
                                protoDefName = "accusantium";
                                protoDefPath = "sed";
                            }}),
                            add(new EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry() {{
                                attributes = new EnterpriseCrmEventbusProtoAttributes() {{
                                    dataType = EnterpriseCrmEventbusProtoAttributesDataTypeEnum.EMAIL;
                                    defaultValue = new EnterpriseCrmEventbusProtoValueType() {{
                                        booleanValue = false;
                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                            values = new Double[]{{
                                                add(3385.14),
                                            }};
                                        }};
                                        doubleValue = 1146.81;
                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                            values = new String[]{{
                                                add("labore"),
                                                add("fugiat"),
                                                add("quidem"),
                                            }};
                                        }};
                                        intValue = "exercitationem";
                                        protoValue = new java.util.HashMap<String, Object>() {{
                                            put("modi", "quasi");
                                            put("quae", "similique");
                                        }};
                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                            values = new String[]{{
                                                add("quo"),
                                                add("suscipit"),
                                                add("ex"),
                                                add("sint"),
                                            }};
                                        }};
                                        stringValue = "est";
                                    }};
                                    isRequired = false;
                                    isSearchable = false;
                                    logSettings = new EnterpriseCrmEventbusProtoLogSettings() {{
                                        logFieldName = "doloribus";
                                        sanitizeOptions = new EnterpriseCrmLoggingGwsSanitizeOptions() {{
                                            isAlreadySanitized = false;
                                            logType = new org.openapis.openapi.models.shared.EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum[]{{
                                                add(EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum.LOG_TYPE_UNSPECIFIED),
                                                add(EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum.GTS),
                                                add(EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum.LOG_TYPE_UNSPECIFIED),
                                            }};
                                            privacy = EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum.PII;
                                            sanitizeType = EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum.ENCRYPT;
                                        }};
                                        seedPeriod = EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum.DAY;
                                        seedScope = EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum.PARAM_NAME;
                                        shorteningLimits = new EnterpriseCrmLoggingGwsFieldLimits() {{
                                            logAction = EnterpriseCrmLoggingGwsFieldLimitsLogActionEnum.LOG;
                                            logType = new org.openapis.openapi.models.shared.EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum[]{{
                                                add(EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum.GTS),
                                                add(EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum.GTS),
                                                add(EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum.LOG_TYPE_UNSPECIFIED),
                                                add(EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum.ALL),
                                            }};
                                            maxArraySize = 29853;
                                            maxStringLength = 396184;
                                            shortenerType = EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum.SHORTEN_WITH_HASH;
                                        }};
                                    }};
                                    searchable = EnterpriseCrmEventbusProtoAttributesSearchableEnum.YES;
                                    taskVisibility = new String[]{{
                                        add("quae"),
                                        add("facere"),
                                        add("ea"),
                                    }};
                                }};
                                children = new org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry[]{{
                                    add(new EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry() {{}}),
                                    add(new EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry() {{}}),
                                    add(new EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry() {{}}),
                                }};
                                dataType = EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum.PROTO_ENUM_ARRAY;
                                defaultValue = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                    booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                        booleanValues = new Boolean[]{{
                                            add(false),
                                        }};
                                    }};
                                    booleanValue = false;
                                    doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                        doubleValues = new Double[]{{
                                            add(7935.97),
                                        }};
                                    }};
                                    doubleValue = 9438.28;
                                    intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                        intValues = new String[]{{
                                            add("fuga"),
                                            add("consectetur"),
                                            add("labore"),
                                        }};
                                    }};
                                    intValue = "laudantium";
                                    jsonValue = "cumque";
                                    protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                        protoValues = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("nam", "voluptatibus");
                                            }}),
                                        }};
                                    }};
                                    protoValue = new java.util.HashMap<String, Object>() {{
                                        put("aperiam", "ducimus");
                                        put("itaque", "necessitatibus");
                                    }};
                                    serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                        objectValue = "numquam";
                                    }};
                                    stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                        stringValues = new String[]{{
                                            add("eligendi"),
                                            add("sapiente"),
                                            add("alias"),
                                            add("impedit"),
                                        }};
                                    }};
                                    stringValue = "numquam";
                                }};
                                inOutType = EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum.IN_OUT_TYPE_UNSPECIFIED;
                                isTransient = false;
                                jsonSchema = "nobis";
                                key = "nihil";
                                name = "Abel Buckridge";
                                producedBy = new EnterpriseCrmEventbusProtoNodeIdentifier() {{
                                    elementIdentifier = "consequuntur";
                                    elementType = EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum.TASK_CONFIG;
                                }};
                                producer = "ratione";
                                protoDefName = "excepturi";
                                protoDefPath = "corrupti";
                            }}),
                            add(new EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry() {{
                                attributes = new EnterpriseCrmEventbusProtoAttributes() {{
                                    dataType = EnterpriseCrmEventbusProtoAttributesDataTypeEnum.TIMESTAMP;
                                    defaultValue = new EnterpriseCrmEventbusProtoValueType() {{
                                        booleanValue = false;
                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                            values = new Double[]{{
                                                add(8408.31),
                                            }};
                                        }};
                                        doubleValue = 7702.62;
                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                            values = new String[]{{
                                                add("nisi"),
                                                add("nisi"),
                                            }};
                                        }};
                                        intValue = "dolor";
                                        protoValue = new java.util.HashMap<String, Object>() {{
                                            put("dolore", "maxime");
                                        }};
                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                            values = new String[]{{
                                                add("expedita"),
                                                add("accusantium"),
                                                add("ea"),
                                                add("impedit"),
                                            }};
                                        }};
                                        stringValue = "totam";
                                    }};
                                    isRequired = false;
                                    isSearchable = false;
                                    logSettings = new EnterpriseCrmEventbusProtoLogSettings() {{
                                        logFieldName = "optio";
                                        sanitizeOptions = new EnterpriseCrmLoggingGwsSanitizeOptions() {{
                                            isAlreadySanitized = false;
                                            logType = new org.openapis.openapi.models.shared.EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum[]{{
                                                add(EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum.LOG_TYPE_UNSPECIFIED),
                                                add(EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum.LOG_TYPE_UNSPECIFIED),
                                                add(EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum.ALL),
                                            }};
                                            privacy = EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum.PRIVACY_TYPE_UNSPECIFIED;
                                            sanitizeType = EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum.SCRUB;
                                        }};
                                        seedPeriod = EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum.DAY;
                                        seedScope = EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum.SEED_SCOPE_UNSPECIFIED;
                                        shorteningLimits = new EnterpriseCrmLoggingGwsFieldLimits() {{
                                            logAction = EnterpriseCrmLoggingGwsFieldLimitsLogActionEnum.DONT_LOG;
                                            logType = new org.openapis.openapi.models.shared.EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum[]{{
                                                add(EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum.GWS),
                                            }};
                                            maxArraySize = 2758;
                                            maxStringLength = 692555;
                                            shortenerType = EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum.SHORTEN_WITH_HASH;
                                        }};
                                    }};
                                    searchable = EnterpriseCrmEventbusProtoAttributesSearchableEnum.NO;
                                    taskVisibility = new String[]{{
                                        add("odio"),
                                        add("fugit"),
                                    }};
                                }};
                                children = new org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry[]{{
                                    add(new EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry() {{}}),
                                }};
                                dataType = EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum.BYTES_ARRAY;
                                defaultValue = new EnterpriseCrmFrontendsEventbusProtoParameterValueType() {{
                                    booleanArray = new EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray() {{
                                        booleanValues = new Boolean[]{{
                                            add(false),
                                            add(false),
                                            add(false),
                                            add(false),
                                        }};
                                    }};
                                    booleanValue = false;
                                    doubleArray = new EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray() {{
                                        doubleValues = new Double[]{{
                                            add(5749.9),
                                            add(3487.08),
                                            add(7399.38),
                                        }};
                                    }};
                                    doubleValue = 5327.21;
                                    intArray = new EnterpriseCrmFrontendsEventbusProtoIntParameterArray() {{
                                        intValues = new String[]{{
                                            add("placeat"),
                                            add("reiciendis"),
                                            add("dolores"),
                                        }};
                                    }};
                                    intValue = "dolore";
                                    jsonValue = "pariatur";
                                    protoArray = new EnterpriseCrmFrontendsEventbusProtoProtoParameterArray() {{
                                        protoValues = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("nemo", "natus");
                                                put("nisi", "provident");
                                                put("amet", "dolor");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("qui", "tenetur");
                                                put("molestiae", "dolore");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("velit", "adipisci");
                                                put("cupiditate", "occaecati");
                                            }}),
                                        }};
                                    }};
                                    protoValue = new java.util.HashMap<String, Object>() {{
                                        put("fugiat", "molestiae");
                                        put("quas", "repellendus");
                                    }};
                                    serializedObjectValue = new EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter() {{
                                        objectValue = "saepe";
                                    }};
                                    stringArray = new EnterpriseCrmFrontendsEventbusProtoStringParameterArray() {{
                                        stringValues = new String[]{{
                                            add("distinctio"),
                                        }};
                                    }};
                                    stringValue = "vel";
                                }};
                                inOutType = EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum.IN_OUT;
                                isTransient = false;
                                jsonSchema = "iste";
                                key = "nesciunt";
                                name = "Terrance Wolf";
                                producedBy = new EnterpriseCrmEventbusProtoNodeIdentifier() {{
                                    elementIdentifier = "soluta";
                                    elementType = EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum.TRIGGER_CONFIG;
                                }};
                                producer = "in";
                                protoDefName = "delectus";
                                protoDefPath = "commodi";
                            }}),
                        }};
                    }};;
                    triggerConfigs = new org.openapis.openapi.models.shared.EnterpriseCrmFrontendsEventbusProtoTriggerConfig[]{{
                        add(new EnterpriseCrmFrontendsEventbusProtoTriggerConfig() {{
                            alertConfig = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoWorkflowAlertConfig[]{{
                                add(new EnterpriseCrmEventbusProtoWorkflowAlertConfig() {{
                                    aggregationPeriod = "ullam";
                                    alertDisabled = false;
                                    alertName = "ullam";
                                    clientId = "doloremque";
                                    durationThresholdMs = "est";
                                    errorEnumList = new EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList() {{
                                        enumStrings = new String[]{{
                                            add("praesentium"),
                                        }};
                                        filterType = EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum.DEFAULT_INCLUSIVE;
                                    }};
                                    metricType = EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum.TASK_RATE;
                                    numAggregationPeriods = 183504;
                                    onlyFinalAttempt = false;
                                    playbookUrl = "deserunt";
                                    thresholdType = EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum.EXPECTED_MAX;
                                    thresholdValue = new EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue() {{
                                        absolute = "incidunt";
                                        percentage = 535883;
                                    }};
                                    warningEnumList = new EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList() {{
                                        enumStrings = new String[]{{
                                            add("est"),
                                        }};
                                        filterType = EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum.EXCLUSIVE;
                                    }};
                                }}),
                            }};
                            cloudSchedulerConfig = new EnterpriseCrmEventbusProtoCloudSchedulerConfig() {{
                                cronTab = "possimus";
                                errorMessage = "odit";
                                location = "consectetur";
                                serviceAccountEmail = "inventore";
                            }};
                            description = "minima";
                            enabledClients = new String[]{{
                                add("facilis"),
                                add("deserunt"),
                                add("nisi"),
                            }};
                            errorCatcherId = "ipsam";
                            label = "voluptatem";
                            nextTasksExecutionPolicy = EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum.UNSPECIFIED;
                            pauseWorkflowExecutions = false;
                            position = new EnterpriseCrmEventbusProtoCoordinate() {{
                                x = 434955;
                                y = 279530;
                            }};
                            properties = new java.util.HashMap<String, String>() {{
                                put("quae", "ea");
                                put("asperiores", "veniam");
                                put("quidem", "asperiores");
                                put("eum", "deserunt");
                            }};
                            startTasks = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoNextTask[]{{
                                add(new EnterpriseCrmEventbusProtoNextTask() {{
                                    combinedConditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCombinedCondition[]{{
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "architecto";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.DOES_NOT_EXIST;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(5067.7),
                                                                add(7080.75),
                                                                add(8264.78),
                                                                add(9219.16),
                                                            }};
                                                        }};
                                                        doubleValue = 9824.47;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("commodi"),
                                                            }};
                                                        }};
                                                        intValue = "vitae";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("nam", "ex");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("quod"),
                                                            }};
                                                        }};
                                                        stringValue = "eos";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "alias";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.CONTAINS;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(8168.25),
                                                                add(6625.15),
                                                                add(5395.37),
                                                                add(3106.48),
                                                            }};
                                                        }};
                                                        doubleValue = 458.5;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("quam"),
                                                                add("modi"),
                                                            }};
                                                        }};
                                                        intValue = "fuga";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("deleniti", "officia");
                                                            put("sint", "laborum");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("ad"),
                                                            }};
                                                        }};
                                                        stringValue = "illum";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "sit";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.EXISTS;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(7132.46),
                                                                add(3753.78),
                                                            }};
                                                        }};
                                                        doubleValue = 9818.65;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("vel"),
                                                                add("delectus"),
                                                            }};
                                                        }};
                                                        intValue = "accusamus";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("consequatur", "sed");
                                                            put("accusantium", "voluptates");
                                                            put("provident", "maiores");
                                                            put("quaerat", "numquam");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("cum"),
                                                            }};
                                                        }};
                                                        stringValue = "incidunt";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "enim";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.GREATER_THAN;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(6072.05),
                                                                add(5691.96),
                                                                add(1795.88),
                                                            }};
                                                        }};
                                                        doubleValue = 7890.36;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("repellendus"),
                                                                add("cum"),
                                                                add("quibusdam"),
                                                            }};
                                                        }};
                                                        intValue = "est";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("similique", "autem");
                                                            put("dicta", "recusandae");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("id"),
                                                                add("odit"),
                                                                add("inventore"),
                                                                add("iste"),
                                                            }};
                                                        }};
                                                        stringValue = "atque";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                    }};
                                    condition = "explicabo";
                                    description = "ullam";
                                    label = "atque";
                                    taskConfigId = "doloribus";
                                    taskNumber = "pariatur";
                                }}),
                                add(new EnterpriseCrmEventbusProtoNextTask() {{
                                    combinedConditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCombinedCondition[]{{
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "iste";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.IS_NOT_EMPTY;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(6585.44),
                                                                add(2889.07),
                                                                add(4554),
                                                            }};
                                                        }};
                                                        doubleValue = 9736.42;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("nulla"),
                                                                add("dolorem"),
                                                            }};
                                                        }};
                                                        intValue = "voluptates";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("perferendis", "quaerat");
                                                            put("excepturi", "aliquid");
                                                            put("dolore", "voluptatem");
                                                            put("illum", "laboriosam");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("dicta"),
                                                                add("atque"),
                                                                add("ratione"),
                                                            }};
                                                        }};
                                                        stringValue = "vitae";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "quisquam";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.GREATER_THAN;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(6319.04),
                                                                add(8377.39),
                                                            }};
                                                        }};
                                                        doubleValue = 9559.13;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("cupiditate"),
                                                                add("suscipit"),
                                                            }};
                                                        }};
                                                        intValue = "reiciendis";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("delectus", "ab");
                                                            put("mollitia", "possimus");
                                                            put("praesentium", "neque");
                                                            put("quam", "animi");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("voluptatum"),
                                                                add("voluptatem"),
                                                                add("quisquam"),
                                                                add("vitae"),
                                                            }};
                                                        }};
                                                        stringValue = "cumque";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "architecto";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.EXISTS;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(5806.89),
                                                                add(3396.51),
                                                                add(7343.61),
                                                                add(6379.69),
                                                            }};
                                                        }};
                                                        doubleValue = 6105.63;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("quas"),
                                                                add("laboriosam"),
                                                                add("ducimus"),
                                                            }};
                                                        }};
                                                        intValue = "voluptatum";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("deserunt", "dolor");
                                                            put("hic", "iure");
                                                            put("sint", "autem");
                                                            put("iste", "cupiditate");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("fuga"),
                                                            }};
                                                        }};
                                                        stringValue = "a";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                    }};
                                    condition = "dolor";
                                    description = "voluptatum";
                                    label = "molestias";
                                    taskConfigId = "quod";
                                    taskNumber = "repudiandae";
                                }}),
                                add(new EnterpriseCrmEventbusProtoNextTask() {{
                                    combinedConditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCombinedCondition[]{{
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "autem";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.UNSET;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(2792.32),
                                                                add(2669.76),
                                                            }};
                                                        }};
                                                        doubleValue = 5527.41;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("voluptate"),
                                                                add("error"),
                                                                add("reprehenderit"),
                                                                add("reprehenderit"),
                                                            }};
                                                        }};
                                                        intValue = "animi";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("voluptates", "delectus");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("delectus"),
                                                            }};
                                                        }};
                                                        stringValue = "exercitationem";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                    }};
                                    condition = "ipsum";
                                    description = "laboriosam";
                                    label = "doloremque";
                                    taskConfigId = "sed";
                                    taskNumber = "voluptatum";
                                }}),
                                add(new EnterpriseCrmEventbusProtoNextTask() {{
                                    combinedConditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCombinedCondition[]{{
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "itaque";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.IS_NOT_EMPTY;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(5846.63),
                                                                add(2372.08),
                                                                add(3035.49),
                                                                add(717.51),
                                                            }};
                                                        }};
                                                        doubleValue = 3299.61;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("necessitatibus"),
                                                            }};
                                                        }};
                                                        intValue = "possimus";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("itaque", "explicabo");
                                                            put("ullam", "non");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("incidunt"),
                                                                add("quod"),
                                                                add("sunt"),
                                                                add("ullam"),
                                                            }};
                                                        }};
                                                        stringValue = "quam";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "illum";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.IS_NOT_EMPTY;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(6687.83),
                                                                add(4464.84),
                                                                add(724.73),
                                                            }};
                                                        }};
                                                        doubleValue = 4519.26;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("delectus"),
                                                            }};
                                                        }};
                                                        intValue = "incidunt";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("nemo", "est");
                                                            put("quo", "maxime");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("laboriosam"),
                                                                add("laboriosam"),
                                                                add("quam"),
                                                                add("fuga"),
                                                            }};
                                                        }};
                                                        stringValue = "officia";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "repellat";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.EXISTS;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(7332.26),
                                                                add(6361.9),
                                                                add(8556.47),
                                                            }};
                                                        }};
                                                        doubleValue = 780.74;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("ad"),
                                                                add("sapiente"),
                                                                add("voluptates"),
                                                            }};
                                                        }};
                                                        intValue = "ut";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("ab", "quibusdam");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("quidem"),
                                                                add("delectus"),
                                                            }};
                                                        }};
                                                        stringValue = "nemo";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "cumque";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.GREATER_THAN;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(5428.07),
                                                            }};
                                                        }};
                                                        doubleValue = 9797.06;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("rerum"),
                                                                add("totam"),
                                                                add("quod"),
                                                            }};
                                                        }};
                                                        intValue = "aspernatur";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("impedit", "nam");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("odio"),
                                                                add("delectus"),
                                                            }};
                                                        }};
                                                        stringValue = "minus";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "distinctio";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.CONTAINS;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(3335.07),
                                                            }};
                                                        }};
                                                        doubleValue = 9187.2;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("occaecati"),
                                                                add("debitis"),
                                                                add("laboriosam"),
                                                            }};
                                                        }};
                                                        intValue = "eos";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("incidunt", "porro");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("reiciendis"),
                                                                add("voluptate"),
                                                                add("tempore"),
                                                            }};
                                                        }};
                                                        stringValue = "in";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "omnis";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.IS_EMPTY;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(9238.79),
                                                                add(7115.72),
                                                                add(4813.07),
                                                                add(4564.73),
                                                            }};
                                                        }};
                                                        doubleValue = 6873.52;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("quod"),
                                                                add("ratione"),
                                                            }};
                                                        }};
                                                        intValue = "totam";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("dolore", "nam");
                                                            put("officia", "maiores");
                                                            put("cupiditate", "illo");
                                                            put("saepe", "enim");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("ex"),
                                                            }};
                                                        }};
                                                        stringValue = "eveniet";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "deleniti";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.EXISTS;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(6800.84),
                                                            }};
                                                        }};
                                                        doubleValue = 3447.02;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("nam"),
                                                                add("numquam"),
                                                            }};
                                                        }};
                                                        intValue = "odio";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("maiores", "veritatis");
                                                            put("autem", "earum");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("ex"),
                                                                add("possimus"),
                                                            }};
                                                        }};
                                                        stringValue = "nesciunt";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "corrupti";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.LESS_THAN;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(1957.89),
                                                                add(8057.03),
                                                                add(2558.39),
                                                            }};
                                                        }};
                                                        doubleValue = 6714.28;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("autem"),
                                                                add("adipisci"),
                                                                add("sunt"),
                                                                add("rerum"),
                                                            }};
                                                        }};
                                                        intValue = "occaecati";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("necessitatibus", "fugit");
                                                            put("autem", "optio");
                                                            put("eveniet", "fugiat");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("a"),
                                                                add("natus"),
                                                                add("sapiente"),
                                                            }};
                                                        }};
                                                        stringValue = "repellendus";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "facilis";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.EXISTS;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(909.69),
                                                                add(379.11),
                                                            }};
                                                        }};
                                                        doubleValue = 9809.8;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("velit"),
                                                                add("tempore"),
                                                            }};
                                                        }};
                                                        intValue = "expedita";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("blanditiis", "vitae");
                                                            put("iusto", "atque");
                                                            put("velit", "molestiae");
                                                            put("nam", "aperiam");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("mollitia"),
                                                            }};
                                                        }};
                                                        stringValue = "asperiores";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "at";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.IS_EMPTY;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(5345.09),
                                                                add(5232.66),
                                                            }};
                                                        }};
                                                        doubleValue = 4245.53;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("labore"),
                                                            }};
                                                        }};
                                                        intValue = "sunt";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("iste", "accusamus");
                                                            put("distinctio", "incidunt");
                                                            put("labore", "blanditiis");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("consectetur"),
                                                                add("sapiente"),
                                                            }};
                                                        }};
                                                        stringValue = "quis";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "ratione";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.CONTAINS;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(1030.53),
                                                                add(5714.98),
                                                                add(8219.93),
                                                                add(7328.15),
                                                            }};
                                                        }};
                                                        doubleValue = 9922.44;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("consequuntur"),
                                                            }};
                                                        }};
                                                        intValue = "nemo";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("debitis", "labore");
                                                            put("veritatis", "minima");
                                                            put("magni", "itaque");
                                                            put("error", "expedita");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("placeat"),
                                                                add("temporibus"),
                                                                add("voluptate"),
                                                            }};
                                                        }};
                                                        stringValue = "earum";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                    }};
                                    condition = "minima";
                                    description = "odit";
                                    label = "odit";
                                    taskConfigId = "eius";
                                    taskNumber = "error";
                                }}),
                            }};
                            triggerCriteria = new EnterpriseCrmEventbusProtoTriggerCriteria() {{
                                condition = "vel";
                                parameters = new EnterpriseCrmEventbusProtoEventParameters() {{
                                    parameters = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoParameterEntry[]{{
                                        add(new EnterpriseCrmEventbusProtoParameterEntry() {{
                                            key = "alias";
                                            value = new EnterpriseCrmEventbusProtoParameterValueType() {{
                                                booleanArray = new EnterpriseCrmEventbusProtoBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new EnterpriseCrmEventbusProtoDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(1251.54),
                                                    }};
                                                }};
                                                doubleValue = 2264.91;
                                                intArray = new EnterpriseCrmEventbusProtoIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("iusto"),
                                                        add("corrupti"),
                                                        add("non"),
                                                    }};
                                                }};
                                                intValue = "esse";
                                                protoArray = new EnterpriseCrmEventbusProtoProtoParameterArray() {{
                                                    protoValues = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("minima", "omnis");
                                                            put("recusandae", "architecto");
                                                            put("voluptatibus", "autem");
                                                            put("in", "repellat");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("cumque", "dolore");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("quo", "repudiandae");
                                                            put("tempora", "libero");
                                                            put("suscipit", "illum");
                                                            put("iusto", "aliquid");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("aliquid", "repellat");
                                                            put("sapiente", "consectetur");
                                                            put("eligendi", "ullam");
                                                        }}),
                                                    }};
                                                }};
                                                protoValue = new java.util.HashMap<String, Object>() {{
                                                    put("eius", "dignissimos");
                                                    put("corporis", "perferendis");
                                                }};
                                                serializedObjectValue = new EnterpriseCrmEventbusProtoSerializedObjectParameter() {{
                                                    objectValue = "architecto";
                                                }};
                                                stringArray = new EnterpriseCrmEventbusProtoStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("corporis"),
                                                    }};
                                                }};
                                                stringValue = "nihil";
                                            }};
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoParameterEntry() {{
                                            key = "officiis";
                                            value = new EnterpriseCrmEventbusProtoParameterValueType() {{
                                                booleanArray = new EnterpriseCrmEventbusProtoBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new EnterpriseCrmEventbusProtoDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(9818.17),
                                                        add(3719.35),
                                                    }};
                                                }};
                                                doubleValue = 1155.22;
                                                intArray = new EnterpriseCrmEventbusProtoIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("praesentium"),
                                                        add("libero"),
                                                        add("consequatur"),
                                                        add("totam"),
                                                    }};
                                                }};
                                                intValue = "tempora";
                                                protoArray = new EnterpriseCrmEventbusProtoProtoParameterArray() {{
                                                    protoValues = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("sunt", "omnis");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("officiis", "dicta");
                                                            put("excepturi", "consectetur");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("odit", "incidunt");
                                                            put("corporis", "quaerat");
                                                            put("suscipit", "ducimus");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("excepturi", "modi");
                                                            put("corrupti", "nihil");
                                                            put("eius", "placeat");
                                                            put("fugit", "facere");
                                                        }}),
                                                    }};
                                                }};
                                                protoValue = new java.util.HashMap<String, Object>() {{
                                                    put("nobis", "porro");
                                                    put("labore", "perspiciatis");
                                                }};
                                                serializedObjectValue = new EnterpriseCrmEventbusProtoSerializedObjectParameter() {{
                                                    objectValue = "ducimus";
                                                }};
                                                stringArray = new EnterpriseCrmEventbusProtoStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("qui"),
                                                    }};
                                                }};
                                                stringValue = "consectetur";
                                            }};
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoParameterEntry() {{
                                            key = "ratione";
                                            value = new EnterpriseCrmEventbusProtoParameterValueType() {{
                                                booleanArray = new EnterpriseCrmEventbusProtoBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new EnterpriseCrmEventbusProtoDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(3961.88),
                                                        add(7385.92),
                                                    }};
                                                }};
                                                doubleValue = 8537.01;
                                                intArray = new EnterpriseCrmEventbusProtoIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("voluptatibus"),
                                                        add("officiis"),
                                                        add("corporis"),
                                                    }};
                                                }};
                                                intValue = "repellendus";
                                                protoArray = new EnterpriseCrmEventbusProtoProtoParameterArray() {{
                                                    protoValues = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("libero", "excepturi");
                                                        }}),
                                                    }};
                                                }};
                                                protoValue = new java.util.HashMap<String, Object>() {{
                                                    put("omnis", "officiis");
                                                    put("delectus", "magni");
                                                }};
                                                serializedObjectValue = new EnterpriseCrmEventbusProtoSerializedObjectParameter() {{
                                                    objectValue = "sit";
                                                }};
                                                stringArray = new EnterpriseCrmEventbusProtoStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("voluptatum"),
                                                    }};
                                                }};
                                                stringValue = "nihil";
                                            }};
                                        }}),
                                    }};
                                }};
                                triggerCriteriaTaskImplementationClassName = "neque";
                            }};
                            triggerId = "aspernatur";
                            triggerNumber = "eaque";
                            triggerType = EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum.CRON;
                        }}),
                        add(new EnterpriseCrmFrontendsEventbusProtoTriggerConfig() {{
                            alertConfig = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoWorkflowAlertConfig[]{{
                                add(new EnterpriseCrmEventbusProtoWorkflowAlertConfig() {{
                                    aggregationPeriod = "aut";
                                    alertDisabled = false;
                                    alertName = "impedit";
                                    clientId = "quod";
                                    durationThresholdMs = "quo";
                                    errorEnumList = new EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList() {{
                                        enumStrings = new String[]{{
                                            add("voluptatem"),
                                        }};
                                        filterType = EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum.EXCLUSIVE;
                                    }};
                                    metricType = EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum.TASK_WARNING_RATE;
                                    numAggregationPeriods = 262231;
                                    onlyFinalAttempt = false;
                                    playbookUrl = "aperiam";
                                    thresholdType = EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum.UNSPECIFIED_THRESHOLD_TYPE;
                                    thresholdValue = new EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue() {{
                                        absolute = "non";
                                        percentage = 109695;
                                    }};
                                    warningEnumList = new EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList() {{
                                        enumStrings = new String[]{{
                                            add("rerum"),
                                        }};
                                        filterType = EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum.DEFAULT_INCLUSIVE;
                                    }};
                                }}),
                                add(new EnterpriseCrmEventbusProtoWorkflowAlertConfig() {{
                                    aggregationPeriod = "debitis";
                                    alertDisabled = false;
                                    alertName = "quis";
                                    clientId = "eaque";
                                    durationThresholdMs = "incidunt";
                                    errorEnumList = new EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList() {{
                                        enumStrings = new String[]{{
                                            add("delectus"),
                                            add("aliquid"),
                                        }};
                                        filterType = EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum.DEFAULT_INCLUSIVE;
                                    }};
                                    metricType = EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum.TASK_PERCENTILE_DURATION;
                                    numAggregationPeriods = 894173;
                                    onlyFinalAttempt = false;
                                    playbookUrl = "reprehenderit";
                                    thresholdType = EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum.UNSPECIFIED_THRESHOLD_TYPE;
                                    thresholdValue = new EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue() {{
                                        absolute = "assumenda";
                                        percentage = 763747;
                                    }};
                                    warningEnumList = new EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList() {{
                                        enumStrings = new String[]{{
                                            add("quae"),
                                            add("nihil"),
                                        }};
                                        filterType = EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum.DEFAULT_INCLUSIVE;
                                    }};
                                }}),
                                add(new EnterpriseCrmEventbusProtoWorkflowAlertConfig() {{
                                    aggregationPeriod = "assumenda";
                                    alertDisabled = false;
                                    alertName = "consequatur";
                                    clientId = "cumque";
                                    durationThresholdMs = "placeat";
                                    errorEnumList = new EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList() {{
                                        enumStrings = new String[]{{
                                            add("tenetur"),
                                        }};
                                        filterType = EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum.DEFAULT_INCLUSIVE;
                                    }};
                                    metricType = EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum.METRIC_TYPE_UNSPECIFIED;
                                    numAggregationPeriods = 548473;
                                    onlyFinalAttempt = false;
                                    playbookUrl = "itaque";
                                    thresholdType = EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum.EXPECTED_MAX;
                                    thresholdValue = new EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue() {{
                                        absolute = "impedit";
                                        percentage = 119928;
                                    }};
                                    warningEnumList = new EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList() {{
                                        enumStrings = new String[]{{
                                            add("impedit"),
                                            add("eveniet"),
                                        }};
                                        filterType = EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum.EXCLUSIVE;
                                    }};
                                }}),
                            }};
                            cloudSchedulerConfig = new EnterpriseCrmEventbusProtoCloudSchedulerConfig() {{
                                cronTab = "dolore";
                                errorMessage = "illum";
                                location = "ea";
                                serviceAccountEmail = "officiis";
                            }};
                            description = "quasi";
                            enabledClients = new String[]{{
                                add("animi"),
                                add("necessitatibus"),
                                add("voluptatem"),
                                add("maiores"),
                            }};
                            errorCatcherId = "odio";
                            label = "veniam";
                            nextTasksExecutionPolicy = EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum.RUN_FIRST_MATCH;
                            pauseWorkflowExecutions = false;
                            position = new EnterpriseCrmEventbusProtoCoordinate() {{
                                x = 929012;
                                y = 821238;
                            }};
                            properties = new java.util.HashMap<String, String>() {{
                                put("sed", "deserunt");
                                put("eligendi", "id");
                                put("distinctio", "corporis");
                                put("quas", "soluta");
                            }};
                            startTasks = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoNextTask[]{{
                                add(new EnterpriseCrmEventbusProtoNextTask() {{
                                    combinedConditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCombinedCondition[]{{
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "quisquam";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.EXISTS;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(3815.22),
                                                            }};
                                                        }};
                                                        doubleValue = 8145.93;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("nam"),
                                                                add("quaerat"),
                                                                add("corrupti"),
                                                                add("sint"),
                                                            }};
                                                        }};
                                                        intValue = "eius";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("quasi", "vero");
                                                            put("odio", "numquam");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("inventore"),
                                                            }};
                                                        }};
                                                        stringValue = "optio";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "recusandae";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.LESS_THAN;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(5890.98),
                                                                add(3304.59),
                                                                add(263.89),
                                                                add(1460.04),
                                                            }};
                                                        }};
                                                        doubleValue = 9521.1;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("vero"),
                                                            }};
                                                        }};
                                                        intValue = "id";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("ratione", "perferendis");
                                                            put("distinctio", "voluptas");
                                                            put("sint", "maiores");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("fuga"),
                                                                add("cumque"),
                                                            }};
                                                        }};
                                                        stringValue = "consequuntur";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "maiores";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.GREATER_THAN;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(9667.38),
                                                            }};
                                                        }};
                                                        doubleValue = 5505.19;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("enim"),
                                                                add("sit"),
                                                                add("voluptatem"),
                                                            }};
                                                        }};
                                                        intValue = "natus";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("tempora", "occaecati");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("veritatis"),
                                                            }};
                                                        }};
                                                        stringValue = "ex";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "doloremque";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.EXISTS;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(170.4),
                                                            }};
                                                        }};
                                                        doubleValue = 4598.65;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("blanditiis"),
                                                                add("laudantium"),
                                                                add("voluptates"),
                                                            }};
                                                        }};
                                                        intValue = "minus";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("vel", "beatae");
                                                            put("quos", "consectetur");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("tenetur"),
                                                                add("necessitatibus"),
                                                                add("perspiciatis"),
                                                            }};
                                                        }};
                                                        stringValue = "suscipit";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "unde";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.IS_NOT_EMPTY;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(3005.74),
                                                                add(432.7),
                                                                add(8810.95),
                                                            }};
                                                        }};
                                                        doubleValue = 8007.61;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("voluptas"),
                                                            }};
                                                        }};
                                                        intValue = "earum";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("earum", "nihil");
                                                            put("nostrum", "rerum");
                                                            put("perferendis", "nam");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("ratione"),
                                                                add("eos"),
                                                            }};
                                                        }};
                                                        stringValue = "id";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "modi";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.IS_EMPTY;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(2355.67),
                                                                add(4430.98),
                                                                add(7581.84),
                                                            }};
                                                        }};
                                                        doubleValue = 7363.13;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("culpa"),
                                                                add("a"),
                                                                add("magnam"),
                                                            }};
                                                        }};
                                                        intValue = "eius";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("quia", "quod");
                                                            put("quaerat", "voluptatum");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("explicabo"),
                                                                add("eligendi"),
                                                            }};
                                                        }};
                                                        stringValue = "cupiditate";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                    }};
                                    condition = "tempore";
                                    description = "odit";
                                    label = "est";
                                    taskConfigId = "at";
                                    taskNumber = "ipsum";
                                }}),
                                add(new EnterpriseCrmEventbusProtoNextTask() {{
                                    combinedConditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCombinedCondition[]{{
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "est";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.IS_NOT_EMPTY;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(5316.06),
                                                                add(981.23),
                                                                add(6493.73),
                                                                add(5302.32),
                                                            }};
                                                        }};
                                                        doubleValue = 5006.92;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("ut"),
                                                                add("incidunt"),
                                                                add("labore"),
                                                                add("ut"),
                                                            }};
                                                        }};
                                                        intValue = "enim";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("ratione", "tenetur");
                                                            put("saepe", "quod");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("tempora"),
                                                                add("quam"),
                                                                add("consectetur"),
                                                                add("nemo"),
                                                            }};
                                                        }};
                                                        stringValue = "nesciunt";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "earum";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.LESS_THAN;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(8079.06),
                                                            }};
                                                        }};
                                                        doubleValue = 5535.42;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("eaque"),
                                                            }};
                                                        }};
                                                        intValue = "natus";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("nihil", "unde");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("id"),
                                                                add("ex"),
                                                                add("occaecati"),
                                                            }};
                                                        }};
                                                        stringValue = "optio";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "at";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.CONTAINS;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(7221.68),
                                                                add(7638.62),
                                                                add(9596.59),
                                                                add(4650.92),
                                                            }};
                                                        }};
                                                        doubleValue = 5792.42;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("culpa"),
                                                                add("dicta"),
                                                                add("rem"),
                                                                add("fuga"),
                                                            }};
                                                        }};
                                                        intValue = "odio";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("magni", "eos");
                                                            put("harum", "voluptatibus");
                                                            put("omnis", "quis");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("natus"),
                                                                add("aliquam"),
                                                                add("vero"),
                                                            }};
                                                        }};
                                                        stringValue = "nisi";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "praesentium";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.LESS_THAN;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(6574.85),
                                                            }};
                                                        }};
                                                        doubleValue = 8187.39;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("ullam"),
                                                                add("quaerat"),
                                                                add("maiores"),
                                                            }};
                                                        }};
                                                        intValue = "iste";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("ipsam", "fugiat");
                                                            put("odio", "ullam");
                                                            put("inventore", "eligendi");
                                                            put("occaecati", "doloribus");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("rem"),
                                                                add("a"),
                                                                add("nihil"),
                                                                add("veniam"),
                                                            }};
                                                        }};
                                                        stringValue = "aut";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                    }};
                                    condition = "magni";
                                    description = "rerum";
                                    label = "voluptatibus";
                                    taskConfigId = "nulla";
                                    taskNumber = "quod";
                                }}),
                                add(new EnterpriseCrmEventbusProtoNextTask() {{
                                    combinedConditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCombinedCondition[]{{
                                        add(new EnterpriseCrmEventbusProtoCombinedCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoCondition[]{{
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "enim";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.UNSET;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(2642.04),
                                                                add(720.8),
                                                                add(9549.46),
                                                            }};
                                                        }};
                                                        doubleValue = 896.42;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("autem"),
                                                                add("dolore"),
                                                            }};
                                                        }};
                                                        intValue = "eius";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("ex", "amet");
                                                            put("voluptate", "molestias");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("ipsum"),
                                                                add("hic"),
                                                                add("quidem"),
                                                                add("odit"),
                                                            }};
                                                        }};
                                                        stringValue = "molestiae";
                                                    }};
                                                }}),
                                                add(new EnterpriseCrmEventbusProtoCondition() {{
                                                    eventPropertyKey = "accusamus";
                                                    operator = EnterpriseCrmEventbusProtoConditionOperatorEnum.EQUALS;
                                                    value = new EnterpriseCrmEventbusProtoValueType() {{
                                                        booleanValue = false;
                                                        doubleArray = new EnterpriseCrmEventbusProtoDoubleArray() {{
                                                            values = new Double[]{{
                                                                add(9884.07),
                                                            }};
                                                        }};
                                                        doubleValue = 5076.35;
                                                        intArray = new EnterpriseCrmEventbusProtoIntArray() {{
                                                            values = new String[]{{
                                                                add("consequuntur"),
                                                                add("laboriosam"),
                                                            }};
                                                        }};
                                                        intValue = "nemo";
                                                        protoValue = new java.util.HashMap<String, Object>() {{
                                                            put("soluta", "ipsum");
                                                            put("vel", "delectus");
                                                        }};
                                                        stringArray = new EnterpriseCrmEventbusProtoStringArray() {{
                                                            values = new String[]{{
                                                                add("vel"),
                                                                add("distinctio"),
                                                                add("cupiditate"),
                                                                add("hic"),
                                                            }};
                                                        }};
                                                        stringValue = "quis";
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                    }};
                                    condition = "deleniti";
                                    description = "iusto";
                                    label = "quod";
                                    taskConfigId = "saepe";
                                    taskNumber = "ad";
                                }}),
                            }};
                            triggerCriteria = new EnterpriseCrmEventbusProtoTriggerCriteria() {{
                                condition = "magni";
                                parameters = new EnterpriseCrmEventbusProtoEventParameters() {{
                                    parameters = new org.openapis.openapi.models.shared.EnterpriseCrmEventbusProtoParameterEntry[]{{
                                        add(new EnterpriseCrmEventbusProtoParameterEntry() {{
                                            key = "minus";
                                            value = new EnterpriseCrmEventbusProtoParameterValueType() {{
                                                booleanArray = new EnterpriseCrmEventbusProtoBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new EnterpriseCrmEventbusProtoDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(4109.16),
                                                        add(2569.41),
                                                    }};
                                                }};
                                                doubleValue = 1032.53;
                                                intArray = new EnterpriseCrmEventbusProtoIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("totam"),
                                                        add("velit"),
                                                        add("quasi"),
                                                    }};
                                                }};
                                                intValue = "sed";
                                                protoArray = new EnterpriseCrmEventbusProtoProtoParameterArray() {{
                                                    protoValues = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("quae", "dolore");
                                                            put("in", "libero");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("cumque", "quia");
                                                            put("beatae", "porro");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("distinctio", "numquam");
                                                            put("fugit", "amet");
                                                            put("culpa", "facilis");
                                                            put("minus", "vero");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("omnis", "et");
                                                            put("earum", "fuga");
                                                            put("est", "distinctio");
                                                            put("fugiat", "nulla");
                                                        }}),
                                                    }};
                                                }};
                                                protoValue = new java.util.HashMap<String, Object>() {{
                                                    put("praesentium", "officiis");
                                                    put("esse", "vitae");
                                                    put("delectus", "laboriosam");
                                                }};
                                                serializedObjectValue = new EnterpriseCrmEventbusProtoSerializedObjectParameter() {{
                                                    objectValue = "minus";
                                                }};
                                                stringArray = new EnterpriseCrmEventbusProtoStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("quas"),
                                                        add("sed"),
                                                    }};
                                                }};
                                                stringValue = "veniam";
                                            }};
                                        }}),
                                        add(new EnterpriseCrmEventbusProtoParameterEntry() {{
                                            key = "sed";
                                            value = new EnterpriseCrmEventbusProtoParameterValueType() {{
                                                booleanArray = new EnterpriseCrmEventbusProtoBooleanParameterArray() {{
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                    }};
                                                }};
                                                booleanValue = false;
                                                doubleArray = new EnterpriseCrmEventbusProtoDoubleParameterArray() {{
                                                    doubleValues = new Double[]{{
                                                        add(4554.36),
                                                        add(4424.35),
                                                    }};
                                                }};
                                                doubleValue = 926.85;
                                                intArray = new EnterpriseCrmEventbusProtoIntParameterArray() {{
                                                    intValues = new String[]{{
                                                        add("voluptate"),
                                                        add("hic"),
                                                        add("at"),
                                                        add("perferendis"),
                                                    }};
                                                }};
                                                intValue = "in";
                                                protoArray = new EnterpriseCrmEventbusProtoProtoParameterArray() {{
                                                    protoValues = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("consequatur", "iste");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("repellat", "voluptatum");
                                                            put("facere", "consequuntur");
                                                            put("natus", "repellendus");
                                                            put("voluptates", "illo");
                                                        }}),
                                                    }};
                                                }};
                                                protoValue = new java.util.HashMap<String, Object>() {{
                                                    put("fugiat", "ducimus");
                                                    put("aut", "provident");
                                                    put("voluptate", "tempore");
                                                    put("ullam", "illum");
                                                }};
                                                serializedObjectValue = new EnterpriseCrmEventbusProtoSerializedObjectParameter() {{
                                                    objectValue = "mollitia";
                                                }};
                                                stringArray = new EnterpriseCrmEventbusProtoStringParameterArray() {{
                                                    stringValues = new String[]{{
                                                        add("quos"),
                                                    }};
                                                }};
                                                stringValue = "quo";
                                            }};
                                        }}),
                                    }};
                                }};
                                triggerCriteriaTaskImplementationClassName = "ullam";
                            }};
                            triggerId = "in";
                            triggerNumber = "doloribus";
                            triggerType = EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum.SFDC_CHANNEL;
                        }}),
                    }};
                    userLabel = "eum";
                }};;
                accessToken = "cumque";
                alt = AltEnum.MEDIA;
                callback = "atque";
                fields = "similique";
                key = "quia";
                newIntegration = false;
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "accusamus";
                uploadProtocol = "illo";
            }};            

            IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateResponse res = sdk.projects.integrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreate(req, new IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateSecurity("excepturi", "harum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaIntegrationTemplateVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## integrationsProjectsLocationsProductsIntegrationtemplatesVersionsList

Returns the list of all IntegrationTemplateVersions in the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListRequest req = new IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListRequest("laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "repudiandae";
                alt = AltEnum.PROTO;
                callback = "officia";
                fields = "laboriosam";
                filter = "illo";
                key = "cupiditate";
                oauthToken = "veritatis";
                pageSize = 304200L;
                pageToken = "excepturi";
                prettyPrint = false;
                quotaUser = "atque";
                uploadType = "dicta";
                uploadProtocol = "magnam";
            }};            

            IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListResponse res = sdk.projects.integrationsProjectsLocationsProductsIntegrationtemplatesVersionsList(req, new IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListSecurity("doloremque", "cum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## integrationsProjectsLocationsSfdcInstancesCreate

Creates an sfdc instance record. Store the sfdc instance in Spanner. Returns the sfdc instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsSfdcInstancesCreateRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsSfdcInstancesCreateResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsSfdcInstancesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaSfdcInstanceInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsSfdcInstancesCreateRequest req = new IntegrationsProjectsLocationsSfdcInstancesCreateRequest("suscipit") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudIntegrationsV1alphaSfdcInstanceInput = new GoogleCloudIntegrationsV1alphaSfdcInstanceInput() {{
                    authConfigId = new String[]{{
                        add("delectus"),
                        add("quos"),
                        add("id"),
                        add("officiis"),
                    }};
                    description = "ab";
                    displayName = "voluptate";
                    name = "Mrs. Lorena Zieme";
                    serviceAuthority = "quaerat";
                    sfdcOrgId = "a";
                }};;
                accessToken = "neque";
                alt = AltEnum.MEDIA;
                callback = "recusandae";
                fields = "numquam";
                key = "mollitia";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "blanditiis";
                uploadType = "suscipit";
                uploadProtocol = "quas";
            }};            

            IntegrationsProjectsLocationsSfdcInstancesCreateResponse res = sdk.projects.integrationsProjectsLocationsSfdcInstancesCreate(req, new IntegrationsProjectsLocationsSfdcInstancesCreateSecurity("quis", "enim") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaSfdcInstance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## integrationsProjectsLocationsSfdcInstancesList

Lists all sfdc instances that match the filter. Restrict to sfdc instances belonging to the current client only.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsSfdcInstancesListRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsSfdcInstancesListResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsSfdcInstancesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsSfdcInstancesListRequest req = new IntegrationsProjectsLocationsSfdcInstancesListRequest("corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ea";
                alt = AltEnum.MEDIA;
                callback = "voluptate";
                fields = "nesciunt";
                filter = "magni";
                key = "animi";
                oauthToken = "dolorum";
                pageSize = 373840L;
                pageToken = "temporibus";
                prettyPrint = false;
                quotaUser = "porro";
                readMask = "tempore";
                uploadType = "commodi";
                uploadProtocol = "autem";
            }};            

            IntegrationsProjectsLocationsSfdcInstancesListResponse res = sdk.projects.integrationsProjectsLocationsSfdcInstancesList(req, new IntegrationsProjectsLocationsSfdcInstancesListSecurity("praesentium", "magni") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaListSfdcInstancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## integrationsProjectsLocationsSfdcInstancesSfdcChannelsCreate

Creates an sfdc channel record. Store the sfdc channel in Spanner. Returns the sfdc channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaSfdcChannelInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateRequest req = new IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateRequest("quisquam") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudIntegrationsV1alphaSfdcChannelInput = new GoogleCloudIntegrationsV1alphaSfdcChannelInput() {{
                    channelTopic = "in";
                    description = "eaque";
                    displayName = "delectus";
                    isActive = false;
                    lastReplayId = "blanditiis";
                    name = "Roman Shanahan";
                }};;
                accessToken = "tempore";
                alt = AltEnum.MEDIA;
                callback = "earum";
                fields = "occaecati";
                key = "dicta";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "laborum";
                uploadProtocol = "molestias";
            }};            

            IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateResponse res = sdk.projects.integrationsProjectsLocationsSfdcInstancesSfdcChannelsCreate(req, new IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateSecurity("a", "dignissimos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaSfdcChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## integrationsProjectsLocationsSfdcInstancesSfdcChannelsDelete

Deletes an sfdc channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteRequest req = new IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteRequest("labore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolore";
                alt = AltEnum.MEDIA;
                callback = "repudiandae";
                fields = "aspernatur";
                key = "quod";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "neque";
                uploadType = "ipsa";
                uploadProtocol = "excepturi";
            }};            

            IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteResponse res = sdk.projects.integrationsProjectsLocationsSfdcInstancesSfdcChannelsDelete(req, new IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteSecurity("repellendus", "soluta") {{
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

## integrationsProjectsLocationsSfdcInstancesSfdcChannelsGet

Gets an sfdc channel. If the channel doesn't exist, Code.NOT_FOUND exception will be thrown.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetRequest req = new IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetRequest("aut") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "amet";
                alt = AltEnum.MEDIA;
                callback = "quibusdam";
                fields = "sint";
                key = "voluptates";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "ad";
                uploadType = "eligendi";
                uploadProtocol = "fuga";
            }};            

            IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetResponse res = sdk.projects.integrationsProjectsLocationsSfdcInstancesSfdcChannelsGet(req, new IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetSecurity("consequatur", "sit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaSfdcChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## integrationsProjectsLocationsSfdcInstancesSfdcChannelsList

Lists all sfdc channels that match the filter. Restrict to sfdc channels belonging to the current client only.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListRequest req = new IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListRequest("iure") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "omnis";
                fields = "sed";
                filter = "quo";
                key = "et";
                oauthToken = "illo";
                pageSize = 668881L;
                pageToken = "quia";
                prettyPrint = false;
                quotaUser = "veniam";
                readMask = "est";
                uploadType = "rem";
                uploadProtocol = "cum";
            }};            

            IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListResponse res = sdk.projects.integrationsProjectsLocationsSfdcInstancesSfdcChannelsList(req, new IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListSecurity("maiores", "provident") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaListSfdcChannelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## integrationsProjectsLocationsSfdcInstancesSfdcChannelsPatch

Updates an sfdc channel. Updates the sfdc channel in spanner. Returns the sfdc channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchRequest;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchResponse;
import org.openapis.openapi.models.operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaSfdcChannelInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchRequest req = new IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchRequest("sunt") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudIntegrationsV1alphaSfdcChannelInput = new GoogleCloudIntegrationsV1alphaSfdcChannelInput() {{
                    channelTopic = "excepturi";
                    description = "ducimus";
                    displayName = "dolore";
                    isActive = false;
                    lastReplayId = "aspernatur";
                    name = "Horace Strosin";
                }};;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "corrupti";
                clientCertificatePassphrase = "soluta";
                clientCertificateSslCertificate = "earum";
                fields = "praesentium";
                key = "explicabo";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "illo";
                updateMask = "architecto";
                uploadType = "quia";
                uploadProtocol = "ad";
            }};            

            IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchResponse res = sdk.projects.integrationsProjectsLocationsSfdcInstancesSfdcChannelsPatch(req, new IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchSecurity("velit", "ullam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaSfdcChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
