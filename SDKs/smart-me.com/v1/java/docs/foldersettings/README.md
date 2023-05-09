# folderSettings

### Available Operations

* [folderSettingsDelete](#foldersettingsdelete) - Deletes a folder
* [folderSettingsGet](#foldersettingsget) - Gets the settings of a folder or meter
* [folderSettingsPostForm](#foldersettingspostform) - Add or edit a folder or a meter. To add a new folder use and empty ID
* [folderSettingsPostJson](#foldersettingspostjson) - Add or edit a folder or a meter. To add a new folder use and empty ID
* [folderSettingsPostRaw](#foldersettingspostraw) - Add or edit a folder or a meter. To add a new folder use and empty ID

## folderSettingsDelete

Deletes a folder

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FolderSettingsDeleteRequest;
import org.openapis.openapi.models.operations.FolderSettingsDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FolderSettingsDeleteRequest req = new FolderSettingsDeleteRequest("dignissimos");            

            FolderSettingsDeleteResponse res = sdk.folderSettings.folderSettingsDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## folderSettingsGet

Gets the settings of a folder or meter

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FolderSettingsGetRequest;
import org.openapis.openapi.models.operations.FolderSettingsGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FolderSettingsGetRequest req = new FolderSettingsGetRequest("hic");            

            FolderSettingsGetResponse res = sdk.folderSettings.folderSettingsGet(req);

            if (res.folderSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## folderSettingsPostForm

Add or edit a folder or a meter. To add a new folder use and empty ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FolderSettingsPostFormRequest;
import org.openapis.openapi.models.operations.FolderSettingsPostFormResponse;
import org.openapis.openapi.models.shared.FolderSettings;
import org.openapis.openapi.models.shared.FolderSettingsFolderTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FolderSettingsPostFormRequest req = new FolderSettingsPostFormRequest(                new FolderSettings() {{
                                description = "distinctio";
                                enable = false;
                                folderType = FolderSettingsFolderTypeEnum.CHARGING_STATION;
                                name = "Harriet Quitzon";
                                parentFolderId = "dolore";
                                serialNumber = 844550L;
                                useableForVirtualBillingMeters = false;
                                valueCorrection = 8489.44;
                                valueCorrectionParentFolder = 1943.42;
                                visualizationName = "natus";
                            }};, "impedit");            

            FolderSettingsPostFormResponse res = sdk.folderSettings.folderSettingsPostForm(req);

            if (res.folderMenuItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## folderSettingsPostJson

Add or edit a folder or a meter. To add a new folder use and empty ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FolderSettingsPostJsonRequest;
import org.openapis.openapi.models.operations.FolderSettingsPostJsonResponse;
import org.openapis.openapi.models.shared.FolderSettings;
import org.openapis.openapi.models.shared.FolderSettingsFolderTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FolderSettingsPostJsonRequest req = new FolderSettingsPostJsonRequest(                new FolderSettings() {{
                                description = "aut";
                                enable = false;
                                folderType = FolderSettingsFolderTypeEnum.GRID_PHOTOVOLTAIC_POWER_SYSTEM;
                                name = "Freda Cormier";
                                parentFolderId = "doloribus";
                                serialNumber = 478370L;
                                useableForVirtualBillingMeters = false;
                                valueCorrection = 7535.7;
                                valueCorrectionParentFolder = 4973.91;
                                visualizationName = "alias";
                            }};, "officia");            

            FolderSettingsPostJsonResponse res = sdk.folderSettings.folderSettingsPostJson(req);

            if (res.folderMenuItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## folderSettingsPostRaw

Add or edit a folder or a meter. To add a new folder use and empty ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FolderSettingsPostRawRequest;
import org.openapis.openapi.models.operations.FolderSettingsPostRawResponse;
import org.openapis.openapi.models.shared.FolderSettings;
import org.openapis.openapi.models.shared.FolderSettingsFolderTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FolderSettingsPostRawRequest req = new FolderSettingsPostRawRequest("tempora".getBytes(), "ipsam");            

            FolderSettingsPostRawResponse res = sdk.folderSettings.folderSettingsPostRaw(req);

            if (res.folderMenuItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
