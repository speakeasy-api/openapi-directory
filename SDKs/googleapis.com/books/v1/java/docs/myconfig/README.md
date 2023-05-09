# myconfig

### Available Operations

* [booksMyconfigGetUserSettings](#booksmyconfiggetusersettings) - Gets the current settings for the user.
* [booksMyconfigReleaseDownloadAccess](#booksmyconfigreleasedownloadaccess) - Release downloaded content access restriction.
* [booksMyconfigRequestAccess](#booksmyconfigrequestaccess) - Request concurrent and download access restrictions.
* [booksMyconfigSyncVolumeLicenses](#booksmyconfigsyncvolumelicenses) - Request downloaded content access for specified volumes on the My eBooks shelf.
* [booksMyconfigUpdateUserSettings](#booksmyconfigupdateusersettings) - Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.

## booksMyconfigGetUserSettings

Gets the current settings for the user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksMyconfigGetUserSettingsRequest;
import org.openapis.openapi.models.operations.BooksMyconfigGetUserSettingsResponse;
import org.openapis.openapi.models.operations.BooksMyconfigGetUserSettingsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksMyconfigGetUserSettingsRequest req = new BooksMyconfigGetUserSettingsRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "architecto";
                alt = AltEnum.JSON;
                callback = "repudiandae";
                country = "Guam";
                fields = "expedita";
                key = "nihil";
                oauthToken = "repellat";
                prettyPrint = false;
                quotaUser = "quibusdam";
                uploadType = "sed";
                uploadProtocol = "saepe";
            }};            

            BooksMyconfigGetUserSettingsResponse res = sdk.myconfig.booksMyconfigGetUserSettings(req, new BooksMyconfigGetUserSettingsSecurity("pariatur", "accusantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.usersettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksMyconfigReleaseDownloadAccess

Release downloaded content access restriction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksMyconfigReleaseDownloadAccessRequest;
import org.openapis.openapi.models.operations.BooksMyconfigReleaseDownloadAccessResponse;
import org.openapis.openapi.models.operations.BooksMyconfigReleaseDownloadAccessSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksMyconfigReleaseDownloadAccessRequest req = new BooksMyconfigReleaseDownloadAccessRequest("consequuntur",                 new String[]{{
                                add("natus"),
                                add("magni"),
                                add("sunt"),
                            }}) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "maxime";
                fields = "ea";
                key = "excepturi";
                locale = "odit";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "accusantium";
                source = "ab";
                uploadType = "maiores";
                uploadProtocol = "quidem";
            }};            

            BooksMyconfigReleaseDownloadAccessResponse res = sdk.myconfig.booksMyconfigReleaseDownloadAccess(req, new BooksMyconfigReleaseDownloadAccessSecurity("ipsam", "voluptate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.downloadAccesses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksMyconfigRequestAccess

Request concurrent and download access restrictions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksMyconfigRequestAccessLicenseTypesEnum;
import org.openapis.openapi.models.operations.BooksMyconfigRequestAccessRequest;
import org.openapis.openapi.models.operations.BooksMyconfigRequestAccessResponse;
import org.openapis.openapi.models.operations.BooksMyconfigRequestAccessSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksMyconfigRequestAccessRequest req = new BooksMyconfigRequestAccessRequest("autem", "nam", "eaque", "pariatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatibus";
                alt = AltEnum.JSON;
                callback = "fugiat";
                fields = "amet";
                key = "aut";
                licenseTypes = BooksMyconfigRequestAccessLicenseTypesEnum.DOWNLOAD;
                locale = "corporis";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "libero";
                uploadType = "nobis";
                uploadProtocol = "dolores";
            }};            

            BooksMyconfigRequestAccessResponse res = sdk.myconfig.booksMyconfigRequestAccess(req, new BooksMyconfigRequestAccessSecurity("quis", "totam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.requestAccessData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksMyconfigSyncVolumeLicenses

Request downloaded content access for specified volumes on the My eBooks shelf.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksMyconfigSyncVolumeLicensesFeaturesEnum;
import org.openapis.openapi.models.operations.BooksMyconfigSyncVolumeLicensesRequest;
import org.openapis.openapi.models.operations.BooksMyconfigSyncVolumeLicensesResponse;
import org.openapis.openapi.models.operations.BooksMyconfigSyncVolumeLicensesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksMyconfigSyncVolumeLicensesRequest req = new BooksMyconfigSyncVolumeLicensesRequest("dignissimos", "eaque", "quis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eos";
                alt = AltEnum.JSON;
                callback = "dolores";
                features = new org.openapis.openapi.models.operations.BooksMyconfigSyncVolumeLicensesFeaturesEnum[]{{
                    add(BooksMyconfigSyncVolumeLicensesFeaturesEnum.FEATURES_UNDEFINED),
                    add(BooksMyconfigSyncVolumeLicensesFeaturesEnum.FEATURES_UNDEFINED),
                    add(BooksMyconfigSyncVolumeLicensesFeaturesEnum.RENTALS),
                    add(BooksMyconfigSyncVolumeLicensesFeaturesEnum.FEATURES_UNDEFINED),
                }};
                fields = "hic";
                includeNonComicsSeries = false;
                key = "recusandae";
                locale = "omnis";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                showPreorders = false;
                uploadType = "voluptatem";
                uploadProtocol = "porro";
                volumeIds = new String[]{{
                    add("blanditiis"),
                }};
            }};            

            BooksMyconfigSyncVolumeLicensesResponse res = sdk.myconfig.booksMyconfigSyncVolumeLicenses(req, new BooksMyconfigSyncVolumeLicensesSecurity("error", "eaque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.volumes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksMyconfigUpdateUserSettings

Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksMyconfigUpdateUserSettingsRequest;
import org.openapis.openapi.models.operations.BooksMyconfigUpdateUserSettingsResponse;
import org.openapis.openapi.models.operations.BooksMyconfigUpdateUserSettingsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Usersettings;
import org.openapis.openapi.models.shared.UsersettingsNotesExport;
import org.openapis.openapi.models.shared.UsersettingsNotification;
import org.openapis.openapi.models.shared.UsersettingsNotificationMatchMyInterests;
import org.openapis.openapi.models.shared.UsersettingsNotificationMoreFromAuthors;
import org.openapis.openapi.models.shared.UsersettingsNotificationMoreFromSeries;
import org.openapis.openapi.models.shared.UsersettingsNotificationPriceDrop;
import org.openapis.openapi.models.shared.UsersettingsNotificationRewardExpirations;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksMyconfigUpdateUserSettingsRequest req = new BooksMyconfigUpdateUserSettingsRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                usersettings = new Usersettings() {{
                    kind = "rerum";
                    notesExport = new UsersettingsNotesExport() {{
                        folderName = "adipisci";
                        isEnabled = false;
                    }};;
                    notification = new UsersettingsNotification() {{
                        matchMyInterests = new UsersettingsNotificationMatchMyInterests() {{
                            optedState = "asperiores";
                        }};;
                        moreFromAuthors = new UsersettingsNotificationMoreFromAuthors() {{
                            optedState = "earum";
                        }};;
                        moreFromSeries = new UsersettingsNotificationMoreFromSeries() {{
                            optedState = "modi";
                        }};;
                        priceDrop = new UsersettingsNotificationPriceDrop() {{
                            optedState = "iste";
                        }};;
                        rewardExpirations = new UsersettingsNotificationRewardExpirations() {{
                            optedState = "dolorum";
                        }};;
                    }};;
                }};;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "provident";
                fields = "nobis";
                key = "libero";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "quos";
                uploadProtocol = "aliquid";
            }};            

            BooksMyconfigUpdateUserSettingsResponse res = sdk.myconfig.booksMyconfigUpdateUserSettings(req, new BooksMyconfigUpdateUserSettingsSecurity("dolorem", "dolorem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.usersettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
