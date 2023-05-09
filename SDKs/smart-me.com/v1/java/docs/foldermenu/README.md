# folderMenu

### Available Operations

* [folderMenuGet](#foldermenuget) - Gets the folder menu items (each item might contain child items)
* [folderMenuPostForm](#foldermenupostform) - Creates and updates the folder menu items
* [folderMenuPostJson](#foldermenupostjson) - Creates and updates the folder menu items
* [folderMenuPostRaw](#foldermenupostraw) - Creates and updates the folder menu items

## folderMenuGet

Gets the folder menu items (each item might contain child items)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FolderMenuGetRequest;
import org.openapis.openapi.models.operations.FolderMenuGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FolderMenuGetRequest req = new FolderMenuGetRequest() {{
                filter = "et";
            }};            

            FolderMenuGetResponse res = sdk.folderMenu.folderMenuGet(req);

            if (res.folderMenuConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## folderMenuPostForm

Creates and updates the folder menu items

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FolderMenuPostFormResponse;
import org.openapis.openapi.models.shared.AutoExportSettings;
import org.openapis.openapi.models.shared.AutoExportSettingsExportIntervalEnum;
import org.openapis.openapi.models.shared.FolderMenuConfiguration;
import org.openapis.openapi.models.shared.FolderMenuItem;
import org.openapis.openapi.models.shared.FolderMenuItemFolderTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.FolderMenuConfiguration req = new FolderMenuConfiguration() {{
                browserTimeZoneName = "excepturi";
                browserUtcTime = "ullam";
                items = new org.openapis.openapi.models.shared.FolderMenuItem[]{{
                    add(new FolderMenuItem() {{
                        autoExportSettings = new AutoExportSettings() {{
                            exportFormat = "quos";
                            exportInterval = AutoExportSettingsExportIntervalEnum.MONTHLY;
                            meterPointId = "accusantium";
                            uploadType = "mollitia";
                        }};
                        children = new org.openapis.openapi.models.shared.FolderMenuItem[]{{
                            add(new FolderMenuItem() {{}}),
                            add(new FolderMenuItem() {{}}),
                            add(new FolderMenuItem() {{}}),
                            add(new FolderMenuItem() {{}}),
                        }};
                        description = "mollitia";
                        folderType = FolderMenuItemFolderTypeEnum.ELECTICITY_FOLDER;
                        icon = "eum";
                        id = "3e2516fe-4c8b-4711-a5b7-fd2ed028921c";
                        meterSerialNumber = "illum";
                        name = "Simon Jenkins";
                        userId = "ea";
                    }}),
                    add(new FolderMenuItem() {{
                        autoExportSettings = new AutoExportSettings() {{
                            exportFormat = "accusantium";
                            exportInterval = AutoExportSettingsExportIntervalEnum.NO_EXPORT;
                            meterPointId = "maiores";
                            uploadType = "quidem";
                        }};
                        children = new org.openapis.openapi.models.shared.FolderMenuItem[]{{
                            add(new FolderMenuItem() {{}}),
                            add(new FolderMenuItem() {{}}),
                        }};
                        description = "voluptate";
                        folderType = FolderMenuItemFolderTypeEnum.GAS_FOLDER;
                        icon = "nam";
                        id = "0d5f0d30-c5fb-4b25-8705-3202c73d5fe9";
                        meterSerialNumber = "facilis";
                        name = "George Sawayn";
                        userId = "error";
                    }}),
                    add(new FolderMenuItem() {{
                        autoExportSettings = new AutoExportSettings() {{
                            exportFormat = "eaque";
                            exportInterval = AutoExportSettingsExportIntervalEnum.MONTHLY;
                            meterPointId = "rerum";
                            uploadType = "adipisci";
                        }};
                        children = new org.openapis.openapi.models.shared.FolderMenuItem[]{{
                            add(new FolderMenuItem() {{}}),
                            add(new FolderMenuItem() {{}}),
                            add(new FolderMenuItem() {{}}),
                            add(new FolderMenuItem() {{}}),
                        }};
                        description = "earum";
                        folderType = FolderMenuItemFolderTypeEnum.VIRTUAL_METER;
                        icon = "iste";
                        id = "a8d9cbf4-8633-4323-b9b7-7f3a4100674e";
                        meterSerialNumber = "quidem";
                        name = "Hector Mosciski";
                        userId = "sit";
                    }}),
                }};
            }};            

            FolderMenuPostFormResponse res = sdk.folderMenu.folderMenuPostForm(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## folderMenuPostJson

Creates and updates the folder menu items

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FolderMenuPostJsonResponse;
import org.openapis.openapi.models.shared.AutoExportSettings;
import org.openapis.openapi.models.shared.AutoExportSettingsExportIntervalEnum;
import org.openapis.openapi.models.shared.FolderMenuConfiguration;
import org.openapis.openapi.models.shared.FolderMenuItem;
import org.openapis.openapi.models.shared.FolderMenuItemFolderTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.FolderMenuConfiguration req = new FolderMenuConfiguration() {{
                browserTimeZoneName = "fugiat";
                browserUtcTime = "ab";
                items = new org.openapis.openapi.models.shared.FolderMenuItem[]{{
                    add(new FolderMenuItem() {{
                        autoExportSettings = new AutoExportSettings() {{
                            exportFormat = "dolorum";
                            exportInterval = AutoExportSettingsExportIntervalEnum.WEEKLY;
                            meterPointId = "voluptate";
                            uploadType = "dolorum";
                        }};
                        children = new org.openapis.openapi.models.shared.FolderMenuItem[]{{
                            add(new FolderMenuItem() {{}}),
                            add(new FolderMenuItem() {{}}),
                            add(new FolderMenuItem() {{}}),
                        }};
                        description = "omnis";
                        folderType = FolderMenuItemFolderTypeEnum.USER;
                        icon = "distinctio";
                        id = "f737ae42-03ce-45e6-a95d-8a0d446ce2af";
                        meterSerialNumber = "esse";
                        name = "Tyrone Emard";
                        userId = "amet";
                    }}),
                    add(new FolderMenuItem() {{
                        autoExportSettings = new AutoExportSettings() {{
                            exportFormat = "tempore";
                            exportInterval = AutoExportSettingsExportIntervalEnum.YEARLY;
                            meterPointId = "numquam";
                            uploadType = "enim";
                        }};
                        children = new org.openapis.openapi.models.shared.FolderMenuItem[]{{
                            add(new FolderMenuItem() {{}}),
                        }};
                        description = "sapiente";
                        folderType = FolderMenuItemFolderTypeEnum.SUN;
                        icon = "nihil";
                        id = "0b326b5a-7342-49cd-b1a8-422bb679d232";
                        meterSerialNumber = "magni";
                        name = "Ashley Hermiston";
                        userId = "voluptatem";
                    }}),
                    add(new FolderMenuItem() {{
                        autoExportSettings = new AutoExportSettings() {{
                            exportFormat = "cumque";
                            exportInterval = AutoExportSettingsExportIntervalEnum.QUATER_YEARLY;
                            meterPointId = "nobis";
                            uploadType = "et";
                        }};
                        children = new org.openapis.openapi.models.shared.FolderMenuItem[]{{
                            add(new FolderMenuItem() {{}}),
                            add(new FolderMenuItem() {{}}),
                            add(new FolderMenuItem() {{}}),
                            add(new FolderMenuItem() {{}}),
                        }};
                        description = "ipsum";
                        folderType = FolderMenuItemFolderTypeEnum.FACTORY;
                        icon = "nobis";
                        id = "8b90f344-3a11-408e-8adc-f4b921879fce";
                        meterSerialNumber = "omnis";
                        name = "Tiffany Willms";
                        userId = "vero";
                    }}),
                }};
            }};            

            FolderMenuPostJsonResponse res = sdk.folderMenu.folderMenuPostJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## folderMenuPostRaw

Creates and updates the folder menu items

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FolderMenuPostRawResponse;
import org.openapis.openapi.models.shared.AutoExportSettings;
import org.openapis.openapi.models.shared.AutoExportSettingsExportIntervalEnum;
import org.openapis.openapi.models.shared.FolderMenuConfiguration;
import org.openapis.openapi.models.shared.FolderMenuItem;
import org.openapis.openapi.models.shared.FolderMenuItemFolderTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "tenetur".getBytes()            

            FolderMenuPostRawResponse res = sdk.folderMenu.folderMenuPostRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
