# matters

### Available Operations

* [vaultMattersAddPermissions](#vaultmattersaddpermissions) - Adds an account as a matter collaborator.
* [vaultMattersClose](#vaultmattersclose) - Closes the specified matter. Returns the matter with updated state.
* [vaultMattersCount](#vaultmatterscount) - Counts the accounts processed by the specified query.
* [vaultMattersCreate](#vaultmatterscreate) - Creates a matter with the given name and description. The initial state is open, and the owner is the method caller. Returns the created matter with default view.
* [vaultMattersDelete](#vaultmattersdelete) - Deletes the specified matter. Returns the matter with updated state.
* [vaultMattersExportsCreate](#vaultmattersexportscreate) - Creates an export.
* [vaultMattersExportsDelete](#vaultmattersexportsdelete) - Deletes an export.
* [vaultMattersExportsGet](#vaultmattersexportsget) - Gets an export.
* [vaultMattersExportsList](#vaultmattersexportslist) - Lists details about the exports in the specified matter.
* [vaultMattersGet](#vaultmattersget) - Gets the specified matter.
* [vaultMattersHoldsAccountsCreate](#vaultmattersholdsaccountscreate) - Adds an account to a hold. Accounts can be added only to a hold that does not have an organizational unit set. If you try to add an account to an organizational unit-based hold, an error is returned.
* [vaultMattersHoldsAccountsDelete](#vaultmattersholdsaccountsdelete) - Removes an account from a hold.
* [vaultMattersHoldsAccountsList](#vaultmattersholdsaccountslist) - Lists the accounts covered by a hold. This can list only individually-specified accounts covered by the hold. If the hold covers an organizational unit, use the [Admin SDK](https://developers.google.com/admin-sdk/). to list the members of the organizational unit on hold.
* [vaultMattersHoldsAddHeldAccounts](#vaultmattersholdsaddheldaccounts) - Adds accounts to a hold. Returns a list of accounts that have been successfully added. Accounts can be added only to an existing account-based hold.
* [vaultMattersHoldsCreate](#vaultmattersholdscreate) - Creates a hold in the specified matter.
* [vaultMattersHoldsDelete](#vaultmattersholdsdelete) - Removes the specified hold and releases the accounts or organizational unit covered by the hold. If the data is not preserved by another hold or retention rule, it might be purged.
* [vaultMattersHoldsGet](#vaultmattersholdsget) - Gets the specified hold.
* [vaultMattersHoldsList](#vaultmattersholdslist) - Lists the holds in a matter.
* [vaultMattersHoldsRemoveHeldAccounts](#vaultmattersholdsremoveheldaccounts) - Removes the specified accounts from a hold. Returns a list of statuses in the same order as the request.
* [vaultMattersHoldsUpdate](#vaultmattersholdsupdate) - Updates the scope (organizational unit or accounts) and query parameters of a hold. You cannot add accounts to a hold that covers an organizational unit, nor can you add organizational units to a hold that covers individual accounts. If you try, the unsupported values are ignored.
* [vaultMattersList](#vaultmatterslist) - Lists matters the requestor has access to.
* [vaultMattersRemovePermissions](#vaultmattersremovepermissions) - Removes an account as a matter collaborator.
* [vaultMattersReopen](#vaultmattersreopen) - Reopens the specified matter. Returns the matter with updated state.
* [vaultMattersSavedQueriesCreate](#vaultmatterssavedqueriescreate) - Creates a saved query.
* [vaultMattersSavedQueriesDelete](#vaultmatterssavedqueriesdelete) - Deletes the specified saved query.
* [vaultMattersSavedQueriesGet](#vaultmatterssavedqueriesget) - Retrieves the specified saved query.
* [vaultMattersSavedQueriesList](#vaultmatterssavedquerieslist) - Lists the saved queries in a matter.
* [vaultMattersUndelete](#vaultmattersundelete) - Undeletes the specified matter. Returns the matter with updated state.
* [vaultMattersUpdate](#vaultmattersupdate) - Updates the specified matter. This updates only the name and description of the matter, identified by matter ID. Changes to any other fields are ignored. Returns the default view of the matter.

## vaultMattersAddPermissions

Adds an account as a matter collaborator.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultMattersAddPermissionsRequest;
import org.openapis.openapi.models.operations.VaultMattersAddPermissionsResponse;
import org.openapis.openapi.models.operations.VaultMattersAddPermissionsSecurity;
import org.openapis.openapi.models.shared.AddMatterPermissionsRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.MatterPermission;
import org.openapis.openapi.models.shared.MatterPermissionRoleEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersAddPermissionsRequest req = new VaultMattersAddPermissionsRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                addMatterPermissionsRequest = new AddMatterPermissionsRequest() {{
                    ccMe = false;
                    matterPermission = new MatterPermission() {{
                        accountId = "tempora";
                        role = MatterPermissionRoleEnum.COLLABORATOR;
                    }};;
                    sendEmails = false;
                }};;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "placeat";
                fields = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
            }};            

            VaultMattersAddPermissionsResponse res = sdk.matters.vaultMattersAddPermissions(req, new VaultMattersAddPermissionsSecurity("ab", "quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.matterPermission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultMattersClose

Closes the specified matter. Returns the matter with updated state.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultMattersCloseRequest;
import org.openapis.openapi.models.operations.VaultMattersCloseResponse;
import org.openapis.openapi.models.operations.VaultMattersCloseSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersCloseRequest req = new VaultMattersCloseRequest("veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("ipsam", "repellendus");
                }};
                accessToken = "sapiente";
                alt = AltEnum.PROTO;
                callback = "odit";
                fields = "at";
                key = "at";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "quod";
                uploadProtocol = "quod";
            }};            

            VaultMattersCloseResponse res = sdk.matters.vaultMattersClose(req, new VaultMattersCloseSecurity("esse", "totam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.closeMatterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultMattersCount

Counts the accounts processed by the specified query.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultMattersCountRequest;
import org.openapis.openapi.models.operations.VaultMattersCountResponse;
import org.openapis.openapi.models.operations.VaultMattersCountSecurity;
import org.openapis.openapi.models.shared.AccountInfo;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CountArtifactsRequest;
import org.openapis.openapi.models.shared.CountArtifactsRequestViewEnum;
import org.openapis.openapi.models.shared.DriveOptions;
import org.openapis.openapi.models.shared.DriveOptionsClientSideEncryptedOptionEnum;
import org.openapis.openapi.models.shared.HangoutsChatInfo;
import org.openapis.openapi.models.shared.HangoutsChatOptions;
import org.openapis.openapi.models.shared.MailOptions;
import org.openapis.openapi.models.shared.MailOptionsClientSideEncryptedOptionEnum;
import org.openapis.openapi.models.shared.OrgUnitInfo;
import org.openapis.openapi.models.shared.Query;
import org.openapis.openapi.models.shared.QueryCorpusEnum;
import org.openapis.openapi.models.shared.QueryDataScopeEnum;
import org.openapis.openapi.models.shared.QueryMethodEnum;
import org.openapis.openapi.models.shared.QuerySearchMethodEnum;
import org.openapis.openapi.models.shared.SharedDriveInfo;
import org.openapis.openapi.models.shared.SitesUrlInfo;
import org.openapis.openapi.models.shared.TeamDriveInfo;
import org.openapis.openapi.models.shared.VoiceOptions;
import org.openapis.openapi.models.shared.VoiceOptionsCoveredDataEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersCountRequest req = new VaultMattersCountRequest("porro") {{
                dollarXgafv = XgafvEnum.TWO;
                countArtifactsRequest = new CountArtifactsRequest() {{
                    query = new Query() {{
                        accountInfo = new AccountInfo() {{
                            emails = new String[]{{
                                add("nam"),
                            }};
                        }};;
                        corpus = QueryCorpusEnum.GROUPS;
                        dataScope = QueryDataScopeEnum.HELD_DATA;
                        driveOptions = new DriveOptions() {{
                            clientSideEncryptedOption = DriveOptionsClientSideEncryptedOptionEnum.CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED;
                            includeSharedDrives = false;
                            includeTeamDrives = false;
                            versionDate = "deleniti";
                        }};;
                        endTime = "hic";
                        hangoutsChatInfo = new HangoutsChatInfo() {{
                            roomId = new String[]{{
                                add("totam"),
                                add("beatae"),
                                add("commodi"),
                                add("molestiae"),
                            }};
                        }};;
                        hangoutsChatOptions = new HangoutsChatOptions() {{
                            includeRooms = false;
                        }};;
                        mailOptions = new MailOptions() {{
                            clientSideEncryptedOption = MailOptionsClientSideEncryptedOptionEnum.CLIENT_SIDE_ENCRYPTED_OPTION_ANY;
                            excludeDrafts = false;
                        }};;
                        method = QueryMethodEnum.ACCOUNT;
                        orgUnitInfo = new OrgUnitInfo() {{
                            orgUnitId = "impedit";
                        }};;
                        searchMethod = QuerySearchMethodEnum.ROOM;
                        sharedDriveInfo = new SharedDriveInfo() {{
                            sharedDriveIds = new String[]{{
                                add("ipsum"),
                                add("excepturi"),
                            }};
                        }};;
                        sitesUrlInfo = new SitesUrlInfo() {{
                            urls = new String[]{{
                                add("perferendis"),
                            }};
                        }};;
                        startTime = "ad";
                        teamDriveInfo = new TeamDriveInfo() {{
                            teamDriveIds = new String[]{{
                                add("sed"),
                                add("iste"),
                                add("dolor"),
                            }};
                        }};;
                        terms = "natus";
                        timeZone = "laboriosam";
                        voiceOptions = new VoiceOptions() {{
                            coveredData = new org.openapis.openapi.models.shared.VoiceOptionsCoveredDataEnum[]{{
                                add(VoiceOptionsCoveredDataEnum.CALL_LOGS),
                                add(VoiceOptionsCoveredDataEnum.VOICEMAILS),
                                add(VoiceOptionsCoveredDataEnum.TEXT_MESSAGES),
                                add(VoiceOptionsCoveredDataEnum.TEXT_MESSAGES),
                            }};
                        }};;
                    }};;
                    view = CountArtifactsRequestViewEnum.TOTAL_COUNT;
                }};;
                accessToken = "iure";
                alt = AltEnum.PROTO;
                callback = "quidem";
                fields = "architecto";
                key = "ipsa";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "mollitia";
                uploadProtocol = "laborum";
            }};            

            VaultMattersCountResponse res = sdk.matters.vaultMattersCount(req, new VaultMattersCountSecurity("dolores", "dolorem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultMattersCreate

Creates a matter with the given name and description. The initial state is open, and the owner is the method caller. Returns the created matter with default view.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultMattersCreateRequest;
import org.openapis.openapi.models.operations.VaultMattersCreateResponse;
import org.openapis.openapi.models.operations.VaultMattersCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Matter;
import org.openapis.openapi.models.shared.MatterPermission;
import org.openapis.openapi.models.shared.MatterPermissionRoleEnum;
import org.openapis.openapi.models.shared.MatterStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersCreateRequest req = new VaultMattersCreateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                matter = new Matter() {{
                    description = "explicabo";
                    matterId = "nobis";
                    matterPermissions = new org.openapis.openapi.models.shared.MatterPermission[]{{
                        add(new MatterPermission() {{
                            accountId = "omnis";
                            role = MatterPermissionRoleEnum.COLLABORATOR;
                        }}),
                        add(new MatterPermission() {{
                            accountId = "minima";
                            role = MatterPermissionRoleEnum.COLLABORATOR;
                        }}),
                    }};
                    name = "Charlene Nicolas";
                    state = MatterStateEnum.STATE_UNSPECIFIED;
                }};;
                accessToken = "mollitia";
                alt = AltEnum.JSON;
                callback = "culpa";
                fields = "consequuntur";
                key = "repellat";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "numquam";
                uploadProtocol = "commodi";
            }};            

            VaultMattersCreateResponse res = sdk.matters.vaultMattersCreate(req, new VaultMattersCreateSecurity("quam", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.matter != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultMattersDelete

Deletes the specified matter. Returns the matter with updated state.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultMattersDeleteRequest;
import org.openapis.openapi.models.operations.VaultMattersDeleteResponse;
import org.openapis.openapi.models.operations.VaultMattersDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersDeleteRequest req = new VaultMattersDeleteRequest("velit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quia";
                alt = AltEnum.MEDIA;
                callback = "vitae";
                fields = "laborum";
                key = "animi";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "quo";
                uploadProtocol = "sequi";
            }};            

            VaultMattersDeleteResponse res = sdk.matters.vaultMattersDelete(req, new VaultMattersDeleteSecurity("tenetur", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.matter != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultMattersExportsCreate

Creates an export.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultMattersExportsCreateRequest;
import org.openapis.openapi.models.operations.VaultMattersExportsCreateResponse;
import org.openapis.openapi.models.operations.VaultMattersExportsCreateSecurity;
import org.openapis.openapi.models.shared.AccountInfo;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CloudStorageFile;
import org.openapis.openapi.models.shared.CloudStorageSink;
import org.openapis.openapi.models.shared.DriveExportOptions;
import org.openapis.openapi.models.shared.DriveOptions;
import org.openapis.openapi.models.shared.DriveOptionsClientSideEncryptedOptionEnum;
import org.openapis.openapi.models.shared.Export;
import org.openapis.openapi.models.shared.ExportOptions;
import org.openapis.openapi.models.shared.ExportOptionsRegionEnum;
import org.openapis.openapi.models.shared.ExportStats;
import org.openapis.openapi.models.shared.ExportStatusEnum;
import org.openapis.openapi.models.shared.GroupsExportOptions;
import org.openapis.openapi.models.shared.GroupsExportOptionsExportFormatEnum;
import org.openapis.openapi.models.shared.HangoutsChatExportOptions;
import org.openapis.openapi.models.shared.HangoutsChatExportOptionsExportFormatEnum;
import org.openapis.openapi.models.shared.HangoutsChatInfo;
import org.openapis.openapi.models.shared.HangoutsChatOptions;
import org.openapis.openapi.models.shared.MailExportOptions;
import org.openapis.openapi.models.shared.MailExportOptionsExportFormatEnum;
import org.openapis.openapi.models.shared.MailOptions;
import org.openapis.openapi.models.shared.MailOptionsClientSideEncryptedOptionEnum;
import org.openapis.openapi.models.shared.OrgUnitInfo;
import org.openapis.openapi.models.shared.Query;
import org.openapis.openapi.models.shared.QueryCorpusEnum;
import org.openapis.openapi.models.shared.QueryDataScopeEnum;
import org.openapis.openapi.models.shared.QueryMethodEnum;
import org.openapis.openapi.models.shared.QuerySearchMethodEnum;
import org.openapis.openapi.models.shared.SharedDriveInfo;
import org.openapis.openapi.models.shared.SitesUrlInfo;
import org.openapis.openapi.models.shared.TeamDriveInfo;
import org.openapis.openapi.models.shared.UserInfo;
import org.openapis.openapi.models.shared.VoiceExportOptions;
import org.openapis.openapi.models.shared.VoiceExportOptionsExportFormatEnum;
import org.openapis.openapi.models.shared.VoiceOptions;
import org.openapis.openapi.models.shared.VoiceOptionsCoveredDataEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersExportsCreateRequest req = new VaultMattersExportsCreateRequest("id") {{
                dollarXgafv = XgafvEnum.TWO;
                export = new Export() {{
                    cloudStorageSink = new CloudStorageSink() {{
                        files = new org.openapis.openapi.models.shared.CloudStorageFile[]{{
                            add(new CloudStorageFile() {{
                                bucketName = "quasi";
                                md5Hash = "error";
                                objectName = "temporibus";
                                size = "laborum";
                            }}),
                        }};
                    }};;
                    createTime = "quasi";
                    exportOptions = new ExportOptions() {{
                        driveOptions = new DriveExportOptions() {{
                            includeAccessInfo = false;
                        }};;
                        groupsOptions = new GroupsExportOptions() {{
                            exportFormat = GroupsExportOptionsExportFormatEnum.PST;
                        }};;
                        hangoutsChatOptions = new HangoutsChatExportOptions() {{
                            exportFormat = HangoutsChatExportOptionsExportFormatEnum.PST;
                        }};;
                        mailOptions = new MailExportOptions() {{
                            exportFormat = MailExportOptionsExportFormatEnum.PST;
                            showConfidentialModeContent = false;
                            useNewExport = false;
                        }};;
                        region = ExportOptionsRegionEnum.ANY;
                        voiceOptions = new VoiceExportOptions() {{
                            exportFormat = VoiceExportOptionsExportFormatEnum.MBOX;
                        }};;
                    }};;
                    id = "f097b007-4f15-4471-b5e6-e13b99d488e1";
                    matterId = "repudiandae";
                    name = "Patrick Ward";
                    query = new Query() {{
                        accountInfo = new AccountInfo() {{
                            emails = new String[]{{
                                add("est"),
                            }};
                        }};;
                        corpus = QueryCorpusEnum.VOICE;
                        dataScope = QueryDataScopeEnum.DATA_SCOPE_UNSPECIFIED;
                        driveOptions = new DriveOptions() {{
                            clientSideEncryptedOption = DriveOptionsClientSideEncryptedOptionEnum.CLIENT_SIDE_ENCRYPTED_OPTION_ENCRYPTED;
                            includeSharedDrives = false;
                            includeTeamDrives = false;
                            versionDate = "distinctio";
                        }};;
                        endTime = "quibusdam";
                        hangoutsChatInfo = new HangoutsChatInfo() {{
                            roomId = new String[]{{
                                add("modi"),
                                add("qui"),
                            }};
                        }};;
                        hangoutsChatOptions = new HangoutsChatOptions() {{
                            includeRooms = false;
                        }};;
                        mailOptions = new MailOptions() {{
                            clientSideEncryptedOption = MailOptionsClientSideEncryptedOptionEnum.CLIENT_SIDE_ENCRYPTED_OPTION_ANY;
                            excludeDrafts = false;
                        }};;
                        method = QueryMethodEnum.ENTIRE_ORG;
                        orgUnitInfo = new OrgUnitInfo() {{
                            orgUnitId = "quos";
                        }};;
                        searchMethod = QuerySearchMethodEnum.SEARCH_METHOD_UNSPECIFIED;
                        sharedDriveInfo = new SharedDriveInfo() {{
                            sharedDriveIds = new String[]{{
                                add("assumenda"),
                            }};
                        }};;
                        sitesUrlInfo = new SitesUrlInfo() {{
                            urls = new String[]{{
                                add("alias"),
                                add("fugit"),
                            }};
                        }};;
                        startTime = "dolorum";
                        teamDriveInfo = new TeamDriveInfo() {{
                            teamDriveIds = new String[]{{
                                add("tempora"),
                                add("facilis"),
                                add("tempore"),
                            }};
                        }};;
                        terms = "labore";
                        timeZone = "delectus";
                        voiceOptions = new VoiceOptions() {{
                            coveredData = new org.openapis.openapi.models.shared.VoiceOptionsCoveredDataEnum[]{{
                                add(VoiceOptionsCoveredDataEnum.COVERED_DATA_UNSPECIFIED),
                                add(VoiceOptionsCoveredDataEnum.CALL_LOGS),
                            }};
                        }};;
                    }};;
                    requester = new UserInfo() {{
                        displayName = "sint";
                        email = "Laron_Tremblay@yahoo.com";
                    }};;
                    stats = new ExportStats() {{
                        exportedArtifactCount = "dolor";
                        sizeInBytes = "debitis";
                        totalArtifactCount = "a";
                    }};;
                    status = ExportStatusEnum.FAILED;
                }};;
                accessToken = "in";
                alt = AltEnum.MEDIA;
                callback = "illum";
                fields = "maiores";
                key = "rerum";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "cumque";
                uploadProtocol = "facere";
            }};            

            VaultMattersExportsCreateResponse res = sdk.matters.vaultMattersExportsCreate(req, new VaultMattersExportsCreateSecurity("ea", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.export != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultMattersExportsDelete

Deletes an export.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultMattersExportsDeleteRequest;
import org.openapis.openapi.models.operations.VaultMattersExportsDeleteResponse;
import org.openapis.openapi.models.operations.VaultMattersExportsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersExportsDeleteRequest req = new VaultMattersExportsDeleteRequest("laborum", "accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "accusamus";
                fields = "delectus";
                key = "quidem";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "id";
                uploadProtocol = "blanditiis";
            }};            

            VaultMattersExportsDeleteResponse res = sdk.matters.vaultMattersExportsDelete(req, new VaultMattersExportsDeleteSecurity("deleniti", "sapiente") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultMattersExportsGet

Gets an export.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultMattersExportsGetRequest;
import org.openapis.openapi.models.operations.VaultMattersExportsGetResponse;
import org.openapis.openapi.models.operations.VaultMattersExportsGetSecurity;
import org.openapis.openapi.models.operations.VaultMattersExportsGetSecurityOption1;
import org.openapis.openapi.models.operations.VaultMattersExportsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersExportsGetRequest req = new VaultMattersExportsGetRequest("amet", "deserunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "omnis";
                fields = "molestiae";
                key = "perferendis";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "distinctio";
                uploadProtocol = "id";
            }};            

            VaultMattersExportsGetResponse res = sdk.matters.vaultMattersExportsGet(req, new VaultMattersExportsGetSecurity() {{
                option1 = new VaultMattersExportsGetSecurityOption1("labore", "labore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.export != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultMattersExportsList

Lists details about the exports in the specified matter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultMattersExportsListRequest;
import org.openapis.openapi.models.operations.VaultMattersExportsListResponse;
import org.openapis.openapi.models.operations.VaultMattersExportsListSecurity;
import org.openapis.openapi.models.operations.VaultMattersExportsListSecurityOption1;
import org.openapis.openapi.models.operations.VaultMattersExportsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersExportsListRequest req = new VaultMattersExportsListRequest("suscipit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nobis";
                alt = AltEnum.MEDIA;
                callback = "vero";
                fields = "aspernatur";
                key = "architecto";
                oauthToken = "magnam";
                pageSize = 92373L;
                pageToken = "excepturi";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "provident";
                uploadProtocol = "quos";
            }};            

            VaultMattersExportsListResponse res = sdk.matters.vaultMattersExportsList(req, new VaultMattersExportsListSecurity() {{
                option1 = new VaultMattersExportsListSecurityOption1("sint", "accusantium") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listExportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultMattersGet

Gets the specified matter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultMattersGetRequest;
import org.openapis.openapi.models.operations.VaultMattersGetResponse;
import org.openapis.openapi.models.operations.VaultMattersGetSecurity;
import org.openapis.openapi.models.operations.VaultMattersGetSecurityOption1;
import org.openapis.openapi.models.operations.VaultMattersGetSecurityOption2;
import org.openapis.openapi.models.operations.VaultMattersGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersGetRequest req = new VaultMattersGetRequest("mollitia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "mollitia";
                alt = AltEnum.JSON;
                callback = "eum";
                fields = "dolor";
                key = "necessitatibus";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "quasi";
                uploadProtocol = "iure";
                view = VaultMattersGetViewEnum.FULL;
            }};            

            VaultMattersGetResponse res = sdk.matters.vaultMattersGet(req, new VaultMattersGetSecurity() {{
                option1 = new VaultMattersGetSecurityOption1("debitis", "eius") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.matter != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultMattersHoldsAccountsCreate

Adds an account to a hold. Accounts can be added only to a hold that does not have an organizational unit set. If you try to add an account to an organizational unit-based hold, an error is returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultMattersHoldsAccountsCreateRequest;
import org.openapis.openapi.models.operations.VaultMattersHoldsAccountsCreateResponse;
import org.openapis.openapi.models.operations.VaultMattersHoldsAccountsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.HeldAccount;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersHoldsAccountsCreateRequest req = new VaultMattersHoldsAccountsCreateRequest("maxime", "deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                heldAccount = new HeldAccount() {{
                    accountId = "in";
                    email = "Bailee_VonRueden@gmail.com";
                    firstName = "Janessa";
                    holdTime = "repellat";
                    lastName = "Spencer";
                }};;
                accessToken = "sed";
                alt = AltEnum.PROTO;
                callback = "pariatur";
                fields = "accusantium";
                key = "consequuntur";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "magni";
                uploadProtocol = "sunt";
            }};            

            VaultMattersHoldsAccountsCreateResponse res = sdk.matters.vaultMattersHoldsAccountsCreate(req, new VaultMattersHoldsAccountsCreateSecurity("quo", "illum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.heldAccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultMattersHoldsAccountsDelete

Removes an account from a hold.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultMattersHoldsAccountsDeleteRequest;
import org.openapis.openapi.models.operations.VaultMattersHoldsAccountsDeleteResponse;
import org.openapis.openapi.models.operations.VaultMattersHoldsAccountsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersHoldsAccountsDeleteRequest req = new VaultMattersHoldsAccountsDeleteRequest("pariatur", "maxime", "ea") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "odit";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "ab";
                key = "maiores";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "voluptate";
                uploadProtocol = "autem";
            }};            

            VaultMattersHoldsAccountsDeleteResponse res = sdk.matters.vaultMattersHoldsAccountsDelete(req, new VaultMattersHoldsAccountsDeleteSecurity("nam", "eaque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultMattersHoldsAccountsList

Lists the accounts covered by a hold. This can list only individually-specified accounts covered by the hold. If the hold covers an organizational unit, use the [Admin SDK](https://developers.google.com/admin-sdk/). to list the members of the organizational unit on hold.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultMattersHoldsAccountsListRequest;
import org.openapis.openapi.models.operations.VaultMattersHoldsAccountsListResponse;
import org.openapis.openapi.models.operations.VaultMattersHoldsAccountsListSecurity;
import org.openapis.openapi.models.operations.VaultMattersHoldsAccountsListSecurityOption1;
import org.openapis.openapi.models.operations.VaultMattersHoldsAccountsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersHoldsAccountsListRequest req = new VaultMattersHoldsAccountsListRequest("pariatur", "nemo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "perferendis";
                alt = AltEnum.PROTO;
                callback = "amet";
                fields = "aut";
                key = "cumque";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "libero";
                uploadProtocol = "nobis";
            }};            

            VaultMattersHoldsAccountsListResponse res = sdk.matters.vaultMattersHoldsAccountsList(req, new VaultMattersHoldsAccountsListSecurity() {{
                option1 = new VaultMattersHoldsAccountsListSecurityOption1("dolores", "quis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listHeldAccountsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultMattersHoldsAddHeldAccounts

Adds accounts to a hold. Returns a list of accounts that have been successfully added. Accounts can be added only to an existing account-based hold.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultMattersHoldsAddHeldAccountsRequest;
import org.openapis.openapi.models.operations.VaultMattersHoldsAddHeldAccountsResponse;
import org.openapis.openapi.models.operations.VaultMattersHoldsAddHeldAccountsSecurity;
import org.openapis.openapi.models.shared.AddHeldAccountsRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersHoldsAddHeldAccountsRequest req = new VaultMattersHoldsAddHeldAccountsRequest("totam", "dignissimos") {{
                dollarXgafv = XgafvEnum.ONE;
                addHeldAccountsRequest = new AddHeldAccountsRequest() {{
                    accountIds = new String[]{{
                        add("nesciunt"),
                        add("eos"),
                    }};
                    emails = new String[]{{
                        add("dolores"),
                    }};
                }};;
                accessToken = "minus";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                fields = "vero";
                key = "nostrum";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "omnis";
                uploadProtocol = "facilis";
            }};            

            VaultMattersHoldsAddHeldAccountsResponse res = sdk.matters.vaultMattersHoldsAddHeldAccounts(req, new VaultMattersHoldsAddHeldAccountsSecurity("perspiciatis", "voluptatem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.addHeldAccountsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultMattersHoldsCreate

Creates a hold in the specified matter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultMattersHoldsCreateRequest;
import org.openapis.openapi.models.operations.VaultMattersHoldsCreateResponse;
import org.openapis.openapi.models.operations.VaultMattersHoldsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CorpusQuery;
import org.openapis.openapi.models.shared.HeldAccount;
import org.openapis.openapi.models.shared.HeldDriveQuery;
import org.openapis.openapi.models.shared.HeldGroupsQuery;
import org.openapis.openapi.models.shared.HeldHangoutsChatQuery;
import org.openapis.openapi.models.shared.HeldMailQuery;
import org.openapis.openapi.models.shared.HeldOrgUnit;
import org.openapis.openapi.models.shared.HeldVoiceQuery;
import org.openapis.openapi.models.shared.HeldVoiceQueryCoveredDataEnum;
import org.openapis.openapi.models.shared.Hold;
import org.openapis.openapi.models.shared.HoldCorpusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersHoldsCreateRequest req = new VaultMattersHoldsCreateRequest("porro") {{
                dollarXgafv = XgafvEnum.ONE;
                hold = new Hold() {{
                    accounts = new org.openapis.openapi.models.shared.HeldAccount[]{{
                        add(new HeldAccount() {{
                            accountId = "error";
                            email = "Kitty99@gmail.com";
                            firstName = "Tracey";
                            holdTime = "modi";
                            lastName = "Morar";
                        }}),
                        add(new HeldAccount() {{
                            accountId = "dolorum";
                            email = "Sam_McLaughlin96@yahoo.com";
                            firstName = "Elvis";
                            holdTime = "quos";
                            lastName = "Jacobi";
                        }}),
                        add(new HeldAccount() {{
                            accountId = "dolorem";
                            email = "Dameon94@gmail.com";
                            firstName = "Kevin";
                            holdTime = "cum";
                            lastName = "Klein";
                        }}),
                    }};
                    corpus = HoldCorpusEnum.MAIL;
                    holdId = "reiciendis";
                    name = "Mr. Lee Funk III";
                    orgUnit = new HeldOrgUnit() {{
                        holdTime = "odio";
                        orgUnitId = "quaerat";
                    }};;
                    query = new CorpusQuery() {{
                        driveQuery = new HeldDriveQuery() {{
                            includeSharedDriveFiles = false;
                            includeTeamDriveFiles = false;
                        }};;
                        groupsQuery = new HeldGroupsQuery() {{
                            endTime = "accusamus";
                            startTime = "quidem";
                            terms = "voluptatibus";
                        }};;
                        hangoutsChatQuery = new HeldHangoutsChatQuery() {{
                            includeRooms = false;
                        }};;
                        mailQuery = new HeldMailQuery() {{
                            endTime = "voluptas";
                            startTime = "natus";
                            terms = "eos";
                        }};;
                        voiceQuery = new HeldVoiceQuery() {{
                            coveredData = new org.openapis.openapi.models.shared.HeldVoiceQueryCoveredDataEnum[]{{
                                add(HeldVoiceQueryCoveredDataEnum.COVERED_DATA_UNSPECIFIED),
                                add(HeldVoiceQueryCoveredDataEnum.CALL_LOGS),
                                add(HeldVoiceQueryCoveredDataEnum.COVERED_DATA_UNSPECIFIED),
                            }};
                        }};;
                    }};;
                    updateTime = "soluta";
                }};;
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "voluptate";
                fields = "dolorum";
                key = "deleniti";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                uploadType = "distinctio";
                uploadProtocol = "asperiores";
            }};            

            VaultMattersHoldsCreateResponse res = sdk.matters.vaultMattersHoldsCreate(req, new VaultMattersHoldsCreateSecurity("nihil", "ipsum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.hold != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultMattersHoldsDelete

Removes the specified hold and releases the accounts or organizational unit covered by the hold. If the data is not preserved by another hold or retention rule, it might be purged.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultMattersHoldsDeleteRequest;
import org.openapis.openapi.models.operations.VaultMattersHoldsDeleteResponse;
import org.openapis.openapi.models.operations.VaultMattersHoldsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersHoldsDeleteRequest req = new VaultMattersHoldsDeleteRequest("voluptate", "id") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eius";
                alt = AltEnum.JSON;
                callback = "perferendis";
                fields = "amet";
                key = "optio";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "ad";
                uploadType = "saepe";
                uploadProtocol = "suscipit";
            }};            

            VaultMattersHoldsDeleteResponse res = sdk.matters.vaultMattersHoldsDelete(req, new VaultMattersHoldsDeleteSecurity("deserunt", "provident") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultMattersHoldsGet

Gets the specified hold.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultMattersHoldsGetRequest;
import org.openapis.openapi.models.operations.VaultMattersHoldsGetResponse;
import org.openapis.openapi.models.operations.VaultMattersHoldsGetSecurity;
import org.openapis.openapi.models.operations.VaultMattersHoldsGetSecurityOption1;
import org.openapis.openapi.models.operations.VaultMattersHoldsGetSecurityOption2;
import org.openapis.openapi.models.operations.VaultMattersHoldsGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersHoldsGetRequest req = new VaultMattersHoldsGetRequest("minima", "repellendus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "similique";
                alt = AltEnum.JSON;
                callback = "at";
                fields = "quaerat";
                key = "tempora";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "officiis";
                uploadProtocol = "qui";
                view = VaultMattersHoldsGetViewEnum.FULL_HOLD;
            }};            

            VaultMattersHoldsGetResponse res = sdk.matters.vaultMattersHoldsGet(req, new VaultMattersHoldsGetSecurity() {{
                option1 = new VaultMattersHoldsGetSecurityOption1("a", "esse") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.hold != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultMattersHoldsList

Lists the holds in a matter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultMattersHoldsListRequest;
import org.openapis.openapi.models.operations.VaultMattersHoldsListResponse;
import org.openapis.openapi.models.operations.VaultMattersHoldsListSecurity;
import org.openapis.openapi.models.operations.VaultMattersHoldsListSecurityOption1;
import org.openapis.openapi.models.operations.VaultMattersHoldsListSecurityOption2;
import org.openapis.openapi.models.operations.VaultMattersHoldsListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersHoldsListRequest req = new VaultMattersHoldsListRequest("harum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsum";
                alt = AltEnum.PROTO;
                callback = "tenetur";
                fields = "amet";
                key = "tempore";
                oauthToken = "accusamus";
                pageSize = 253941L;
                pageToken = "enim";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "sapiente";
                uploadProtocol = "totam";
                view = VaultMattersHoldsListViewEnum.BASIC_HOLD;
            }};            

            VaultMattersHoldsListResponse res = sdk.matters.vaultMattersHoldsList(req, new VaultMattersHoldsListSecurity() {{
                option1 = new VaultMattersHoldsListSecurityOption1("sit", "expedita") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listHoldsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultMattersHoldsRemoveHeldAccounts

Removes the specified accounts from a hold. Returns a list of statuses in the same order as the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultMattersHoldsRemoveHeldAccountsRequest;
import org.openapis.openapi.models.operations.VaultMattersHoldsRemoveHeldAccountsResponse;
import org.openapis.openapi.models.operations.VaultMattersHoldsRemoveHeldAccountsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RemoveHeldAccountsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersHoldsRemoveHeldAccountsRequest req = new VaultMattersHoldsRemoveHeldAccountsRequest("neque", "sed") {{
                dollarXgafv = XgafvEnum.ONE;
                removeHeldAccountsRequest = new RemoveHeldAccountsRequest() {{
                    accountIds = new String[]{{
                        add("voluptas"),
                        add("deserunt"),
                        add("quam"),
                    }};
                }};;
                accessToken = "ipsum";
                alt = AltEnum.JSON;
                callback = "qui";
                fields = "cupiditate";
                key = "maxime";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "soluta";
                uploadType = "dicta";
                uploadProtocol = "laborum";
            }};            

            VaultMattersHoldsRemoveHeldAccountsResponse res = sdk.matters.vaultMattersHoldsRemoveHeldAccounts(req, new VaultMattersHoldsRemoveHeldAccountsSecurity("totam", "incidunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.removeHeldAccountsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultMattersHoldsUpdate

Updates the scope (organizational unit or accounts) and query parameters of a hold. You cannot add accounts to a hold that covers an organizational unit, nor can you add organizational units to a hold that covers individual accounts. If you try, the unsupported values are ignored.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultMattersHoldsUpdateRequest;
import org.openapis.openapi.models.operations.VaultMattersHoldsUpdateResponse;
import org.openapis.openapi.models.operations.VaultMattersHoldsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CorpusQuery;
import org.openapis.openapi.models.shared.HeldAccount;
import org.openapis.openapi.models.shared.HeldDriveQuery;
import org.openapis.openapi.models.shared.HeldGroupsQuery;
import org.openapis.openapi.models.shared.HeldHangoutsChatQuery;
import org.openapis.openapi.models.shared.HeldMailQuery;
import org.openapis.openapi.models.shared.HeldOrgUnit;
import org.openapis.openapi.models.shared.HeldVoiceQuery;
import org.openapis.openapi.models.shared.HeldVoiceQueryCoveredDataEnum;
import org.openapis.openapi.models.shared.Hold;
import org.openapis.openapi.models.shared.HoldCorpusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersHoldsUpdateRequest req = new VaultMattersHoldsUpdateRequest("aspernatur", "dolores") {{
                dollarXgafv = XgafvEnum.TWO;
                hold = new Hold() {{
                    accounts = new org.openapis.openapi.models.shared.HeldAccount[]{{
                        add(new HeldAccount() {{
                            accountId = "aliquid";
                            email = "Kennedy20@yahoo.com";
                            firstName = "Burdette";
                            holdTime = "magni";
                            lastName = "Kuhlman";
                        }}),
                        add(new HeldAccount() {{
                            accountId = "sunt";
                            email = "Mireya76@yahoo.com";
                            firstName = "Ned";
                            holdTime = "nobis";
                            lastName = "Bosco";
                        }}),
                        add(new HeldAccount() {{
                            accountId = "saepe";
                            email = "Arnulfo_Rohan@gmail.com";
                            firstName = "Kurt";
                            holdTime = "aperiam";
                            lastName = "Willms";
                        }}),
                    }};
                    corpus = HoldCorpusEnum.DRIVE;
                    holdId = "dolore";
                    name = "Mr. Josephine Pagac V";
                    orgUnit = new HeldOrgUnit() {{
                        holdTime = "itaque";
                        orgUnitId = "consequatur";
                    }};;
                    query = new CorpusQuery() {{
                        driveQuery = new HeldDriveQuery() {{
                            includeSharedDriveFiles = false;
                            includeTeamDriveFiles = false;
                        }};;
                        groupsQuery = new HeldGroupsQuery() {{
                            endTime = "est";
                            startTime = "repellendus";
                            terms = "porro";
                        }};;
                        hangoutsChatQuery = new HeldHangoutsChatQuery() {{
                            includeRooms = false;
                        }};;
                        mailQuery = new HeldMailQuery() {{
                            endTime = "doloribus";
                            startTime = "ut";
                            terms = "facilis";
                        }};;
                        voiceQuery = new HeldVoiceQuery() {{
                            coveredData = new org.openapis.openapi.models.shared.HeldVoiceQueryCoveredDataEnum[]{{
                                add(HeldVoiceQueryCoveredDataEnum.COVERED_DATA_UNSPECIFIED),
                                add(HeldVoiceQueryCoveredDataEnum.COVERED_DATA_UNSPECIFIED),
                                add(HeldVoiceQueryCoveredDataEnum.VOICEMAILS),
                            }};
                        }};;
                    }};;
                    updateTime = "odio";
                }};;
                accessToken = "occaecati";
                alt = AltEnum.PROTO;
                callback = "quisquam";
                fields = "vero";
                key = "omnis";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "delectus";
                uploadProtocol = "voluptate";
            }};            

            VaultMattersHoldsUpdateResponse res = sdk.matters.vaultMattersHoldsUpdate(req, new VaultMattersHoldsUpdateSecurity("consectetur", "vero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.hold != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultMattersList

Lists matters the requestor has access to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultMattersListRequest;
import org.openapis.openapi.models.operations.VaultMattersListResponse;
import org.openapis.openapi.models.operations.VaultMattersListSecurity;
import org.openapis.openapi.models.operations.VaultMattersListSecurityOption1;
import org.openapis.openapi.models.operations.VaultMattersListSecurityOption2;
import org.openapis.openapi.models.operations.VaultMattersListStateEnum;
import org.openapis.openapi.models.operations.VaultMattersListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersListRequest req = new VaultMattersListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dignissimos";
                alt = AltEnum.PROTO;
                callback = "distinctio";
                fields = "quod";
                key = "odio";
                oauthToken = "similique";
                pageSize = 708548L;
                pageToken = "vero";
                prettyPrint = false;
                quotaUser = "ducimus";
                state = VaultMattersListStateEnum.OPEN;
                uploadType = "quibusdam";
                uploadProtocol = "illum";
                view = VaultMattersListViewEnum.VIEW_UNSPECIFIED;
            }};            

            VaultMattersListResponse res = sdk.matters.vaultMattersList(req, new VaultMattersListSecurity() {{
                option1 = new VaultMattersListSecurityOption1("natus", "impedit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listMattersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultMattersRemovePermissions

Removes an account as a matter collaborator.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultMattersRemovePermissionsRequest;
import org.openapis.openapi.models.operations.VaultMattersRemovePermissionsResponse;
import org.openapis.openapi.models.operations.VaultMattersRemovePermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RemoveMatterPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersRemovePermissionsRequest req = new VaultMattersRemovePermissionsRequest("aut") {{
                dollarXgafv = XgafvEnum.TWO;
                removeMatterPermissionsRequest = new RemoveMatterPermissionsRequest() {{
                    accountId = "exercitationem";
                }};;
                accessToken = "nulla";
                alt = AltEnum.JSON;
                callback = "porro";
                fields = "maiores";
                key = "doloribus";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "ducimus";
                uploadProtocol = "alias";
            }};            

            VaultMattersRemovePermissionsResponse res = sdk.matters.vaultMattersRemovePermissions(req, new VaultMattersRemovePermissionsSecurity("officia", "tempora") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultMattersReopen

Reopens the specified matter. Returns the matter with updated state.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultMattersReopenRequest;
import org.openapis.openapi.models.operations.VaultMattersReopenResponse;
import org.openapis.openapi.models.operations.VaultMattersReopenSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersReopenRequest req = new VaultMattersReopenRequest("ipsam") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("vel", "possimus");
                }};
                accessToken = "magnam";
                alt = AltEnum.JSON;
                callback = "ex";
                fields = "laudantium";
                key = "dicta";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "quasi";
                uploadProtocol = "ex";
            }};            

            VaultMattersReopenResponse res = sdk.matters.vaultMattersReopen(req, new VaultMattersReopenSecurity("nulla", "excepturi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.reopenMatterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultMattersSavedQueriesCreate

Creates a saved query.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultMattersSavedQueriesCreateRequest;
import org.openapis.openapi.models.operations.VaultMattersSavedQueriesCreateResponse;
import org.openapis.openapi.models.operations.VaultMattersSavedQueriesCreateSecurity;
import org.openapis.openapi.models.shared.AccountInfo;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DriveOptions;
import org.openapis.openapi.models.shared.DriveOptionsClientSideEncryptedOptionEnum;
import org.openapis.openapi.models.shared.HangoutsChatInfo;
import org.openapis.openapi.models.shared.HangoutsChatOptions;
import org.openapis.openapi.models.shared.MailOptions;
import org.openapis.openapi.models.shared.MailOptionsClientSideEncryptedOptionEnum;
import org.openapis.openapi.models.shared.OrgUnitInfo;
import org.openapis.openapi.models.shared.Query;
import org.openapis.openapi.models.shared.QueryCorpusEnum;
import org.openapis.openapi.models.shared.QueryDataScopeEnum;
import org.openapis.openapi.models.shared.QueryMethodEnum;
import org.openapis.openapi.models.shared.QuerySearchMethodEnum;
import org.openapis.openapi.models.shared.SavedQuery;
import org.openapis.openapi.models.shared.SharedDriveInfo;
import org.openapis.openapi.models.shared.SitesUrlInfo;
import org.openapis.openapi.models.shared.TeamDriveInfo;
import org.openapis.openapi.models.shared.VoiceOptions;
import org.openapis.openapi.models.shared.VoiceOptionsCoveredDataEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersSavedQueriesCreateRequest req = new VaultMattersSavedQueriesCreateRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                savedQuery = new SavedQuery() {{
                    createTime = "sapiente";
                    displayName = "quisquam";
                    matterId = "saepe";
                    query = new Query() {{
                        accountInfo = new AccountInfo() {{
                            emails = new String[]{{
                                add("impedit"),
                                add("corporis"),
                            }};
                        }};;
                        corpus = QueryCorpusEnum.DRIVE;
                        dataScope = QueryDataScopeEnum.ALL_DATA;
                        driveOptions = new DriveOptions() {{
                            clientSideEncryptedOption = DriveOptionsClientSideEncryptedOptionEnum.CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED;
                            includeSharedDrives = false;
                            includeTeamDrives = false;
                            versionDate = "magnam";
                        }};;
                        endTime = "ea";
                        hangoutsChatInfo = new HangoutsChatInfo() {{
                            roomId = new String[]{{
                                add("consectetur"),
                                add("recusandae"),
                                add("aspernatur"),
                                add("minima"),
                            }};
                        }};;
                        hangoutsChatOptions = new HangoutsChatOptions() {{
                            includeRooms = false;
                        }};;
                        mailOptions = new MailOptions() {{
                            clientSideEncryptedOption = MailOptionsClientSideEncryptedOptionEnum.CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED;
                            excludeDrafts = false;
                        }};;
                        method = QueryMethodEnum.SHARED_DRIVE;
                        orgUnitInfo = new OrgUnitInfo() {{
                            orgUnitId = "libero";
                        }};;
                        searchMethod = QuerySearchMethodEnum.SEARCH_METHOD_UNSPECIFIED;
                        sharedDriveInfo = new SharedDriveInfo() {{
                            sharedDriveIds = new String[]{{
                                add("deleniti"),
                            }};
                        }};;
                        sitesUrlInfo = new SitesUrlInfo() {{
                            urls = new String[]{{
                                add("aliquam"),
                                add("fugit"),
                                add("accusamus"),
                                add("inventore"),
                            }};
                        }};;
                        startTime = "non";
                        teamDriveInfo = new TeamDriveInfo() {{
                            teamDriveIds = new String[]{{
                                add("dolorum"),
                            }};
                        }};;
                        terms = "laborum";
                        timeZone = "placeat";
                        voiceOptions = new VoiceOptions() {{
                            coveredData = new org.openapis.openapi.models.shared.VoiceOptionsCoveredDataEnum[]{{
                                add(VoiceOptionsCoveredDataEnum.TEXT_MESSAGES),
                            }};
                        }};;
                    }};;
                    savedQueryId = "autem";
                }};;
                accessToken = "nobis";
                alt = AltEnum.MEDIA;
                callback = "assumenda";
                fields = "nulla";
                key = "voluptas";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "tempora";
                uploadProtocol = "numquam";
            }};            

            VaultMattersSavedQueriesCreateResponse res = sdk.matters.vaultMattersSavedQueriesCreate(req, new VaultMattersSavedQueriesCreateSecurity("explicabo", "provident") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.savedQuery != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultMattersSavedQueriesDelete

Deletes the specified saved query.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultMattersSavedQueriesDeleteRequest;
import org.openapis.openapi.models.operations.VaultMattersSavedQueriesDeleteResponse;
import org.openapis.openapi.models.operations.VaultMattersSavedQueriesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersSavedQueriesDeleteRequest req = new VaultMattersSavedQueriesDeleteRequest("ipsa", "molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "odio";
                alt = AltEnum.JSON;
                callback = "esse";
                fields = "esse";
                key = "rem";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                uploadType = "quidem";
                uploadProtocol = "fugiat";
            }};            

            VaultMattersSavedQueriesDeleteResponse res = sdk.matters.vaultMattersSavedQueriesDelete(req, new VaultMattersSavedQueriesDeleteSecurity("ut", "eum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultMattersSavedQueriesGet

Retrieves the specified saved query.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultMattersSavedQueriesGetRequest;
import org.openapis.openapi.models.operations.VaultMattersSavedQueriesGetResponse;
import org.openapis.openapi.models.operations.VaultMattersSavedQueriesGetSecurity;
import org.openapis.openapi.models.operations.VaultMattersSavedQueriesGetSecurityOption1;
import org.openapis.openapi.models.operations.VaultMattersSavedQueriesGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersSavedQueriesGetRequest req = new VaultMattersSavedQueriesGetRequest("suscipit", "assumenda") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "praesentium";
                alt = AltEnum.PROTO;
                callback = "veritatis";
                fields = "ipsa";
                key = "id";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "neque";
                uploadType = "quo";
                uploadProtocol = "illum";
            }};            

            VaultMattersSavedQueriesGetResponse res = sdk.matters.vaultMattersSavedQueriesGet(req, new VaultMattersSavedQueriesGetSecurity() {{
                option1 = new VaultMattersSavedQueriesGetSecurityOption1("quo", "fuga") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.savedQuery != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultMattersSavedQueriesList

Lists the saved queries in a matter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultMattersSavedQueriesListRequest;
import org.openapis.openapi.models.operations.VaultMattersSavedQueriesListResponse;
import org.openapis.openapi.models.operations.VaultMattersSavedQueriesListSecurity;
import org.openapis.openapi.models.operations.VaultMattersSavedQueriesListSecurityOption1;
import org.openapis.openapi.models.operations.VaultMattersSavedQueriesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersSavedQueriesListRequest req = new VaultMattersSavedQueriesListRequest("eius") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptas";
                alt = AltEnum.JSON;
                callback = "cupiditate";
                fields = "consequatur";
                key = "tempora";
                oauthToken = "debitis";
                pageSize = 370853L;
                pageToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "quo";
                uploadProtocol = "esse";
            }};            

            VaultMattersSavedQueriesListResponse res = sdk.matters.vaultMattersSavedQueriesList(req, new VaultMattersSavedQueriesListSecurity() {{
                option1 = new VaultMattersSavedQueriesListSecurityOption1("recusandae", "aperiam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listSavedQueriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultMattersUndelete

Undeletes the specified matter. Returns the matter with updated state.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultMattersUndeleteRequest;
import org.openapis.openapi.models.operations.VaultMattersUndeleteResponse;
import org.openapis.openapi.models.operations.VaultMattersUndeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersUndeleteRequest req = new VaultMattersUndeleteRequest("distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("inventore", "nihil");
                    put("totam", "accusamus");
                }};
                accessToken = "aliquam";
                alt = AltEnum.MEDIA;
                callback = "occaecati";
                fields = "commodi";
                key = "sapiente";
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "molestiae";
                uploadProtocol = "accusantium";
            }};            

            VaultMattersUndeleteResponse res = sdk.matters.vaultMattersUndelete(req, new VaultMattersUndeleteSecurity("porro", "eum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.matter != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultMattersUpdate

Updates the specified matter. This updates only the name and description of the matter, identified by matter ID. Changes to any other fields are ignored. Returns the default view of the matter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultMattersUpdateRequest;
import org.openapis.openapi.models.operations.VaultMattersUpdateResponse;
import org.openapis.openapi.models.operations.VaultMattersUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Matter;
import org.openapis.openapi.models.shared.MatterPermission;
import org.openapis.openapi.models.shared.MatterPermissionRoleEnum;
import org.openapis.openapi.models.shared.MatterStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersUpdateRequest req = new VaultMattersUpdateRequest("quas") {{
                dollarXgafv = XgafvEnum.TWO;
                matter = new Matter() {{
                    description = "consequuntur";
                    matterId = "deleniti";
                    matterPermissions = new org.openapis.openapi.models.shared.MatterPermission[]{{
                        add(new MatterPermission() {{
                            accountId = "fuga";
                            role = MatterPermissionRoleEnum.COLLABORATOR;
                        }}),
                    }};
                    name = "Leah Champlin";
                    state = MatterStateEnum.STATE_UNSPECIFIED;
                }};;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "ratione";
                fields = "explicabo";
                key = "saepe";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "atque";
                uploadType = "et";
                uploadProtocol = "esse";
            }};            

            VaultMattersUpdateResponse res = sdk.matters.vaultMattersUpdate(req, new VaultMattersUpdateSecurity("eveniet", "accusamus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.matter != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
