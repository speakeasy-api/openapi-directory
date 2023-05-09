# projects

### Available Operations

* [resourcesettingsProjectsSettingsGet](#resourcesettingsprojectssettingsget) - Returns a specified setting. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the setting does not exist.
* [resourcesettingsProjectsSettingsList](#resourcesettingsprojectssettingslist) - Lists all the settings that are available on the Cloud resource `parent`.
* [resourcesettingsProjectsSettingsPatch](#resourcesettingsprojectssettingspatch) - Updates a specified setting. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the setting does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.FAILED_PRECONDITION` if the setting is flagged as read only. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the setting value. On success, the response will contain only `name`, `local_value` and `etag`. The `metadata` and `effective_value` cannot be updated through this API. Note: the supplied setting will perform a full overwrite of the `local_value` field.

## resourcesettingsProjectsSettingsGet

Returns a specified setting. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the setting does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResourcesettingsProjectsSettingsGetRequest;
import org.openapis.openapi.models.operations.ResourcesettingsProjectsSettingsGetResponse;
import org.openapis.openapi.models.operations.ResourcesettingsProjectsSettingsGetSecurity;
import org.openapis.openapi.models.operations.ResourcesettingsProjectsSettingsGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResourcesettingsProjectsSettingsGetRequest req = new ResourcesettingsProjectsSettingsGetRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "suscipit";
                fields = "molestiae";
                key = "minus";
                oauthToken = "placeat";
                prettyPrint = false;
                quotaUser = "voluptatum";
                uploadType = "iusto";
                uploadProtocol = "excepturi";
                view = ResourcesettingsProjectsSettingsGetViewEnum.SETTING_VIEW_BASIC;
            }};            

            ResourcesettingsProjectsSettingsGetResponse res = sdk.projects.resourcesettingsProjectsSettingsGet(req, new ResourcesettingsProjectsSettingsGetSecurity("recusandae", "temporibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudResourcesettingsV1Setting != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resourcesettingsProjectsSettingsList

Lists all the settings that are available on the Cloud resource `parent`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResourcesettingsProjectsSettingsListRequest;
import org.openapis.openapi.models.operations.ResourcesettingsProjectsSettingsListResponse;
import org.openapis.openapi.models.operations.ResourcesettingsProjectsSettingsListSecurity;
import org.openapis.openapi.models.operations.ResourcesettingsProjectsSettingsListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResourcesettingsProjectsSettingsListRequest req = new ResourcesettingsProjectsSettingsListRequest("ab") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "veritatis";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                fields = "ipsam";
                key = "repellendus";
                oauthToken = "sapiente";
                pageSize = 778157L;
                pageToken = "odit";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "at";
                uploadProtocol = "maiores";
                view = ResourcesettingsProjectsSettingsListViewEnum.SETTING_VIEW_BASIC;
            }};            

            ResourcesettingsProjectsSettingsListResponse res = sdk.projects.resourcesettingsProjectsSettingsList(req, new ResourcesettingsProjectsSettingsListSecurity("quod", "quod") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudResourcesettingsV1ListSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resourcesettingsProjectsSettingsPatch

Updates a specified setting. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the setting does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.FAILED_PRECONDITION` if the setting is flagged as read only. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the setting value. On success, the response will contain only `name`, `local_value` and `etag`. The `metadata` and `effective_value` cannot be updated through this API. Note: the supplied setting will perform a full overwrite of the `local_value` field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResourcesettingsProjectsSettingsPatchRequest;
import org.openapis.openapi.models.operations.ResourcesettingsProjectsSettingsPatchResponse;
import org.openapis.openapi.models.operations.ResourcesettingsProjectsSettingsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudResourcesettingsV1Setting;
import org.openapis.openapi.models.shared.GoogleCloudResourcesettingsV1SettingMetadata;
import org.openapis.openapi.models.shared.GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudResourcesettingsV1Value;
import org.openapis.openapi.models.shared.GoogleCloudResourcesettingsV1ValueEnumValue;
import org.openapis.openapi.models.shared.GoogleCloudResourcesettingsV1ValueStringMap;
import org.openapis.openapi.models.shared.GoogleCloudResourcesettingsV1ValueStringSet;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResourcesettingsProjectsSettingsPatchRequest req = new ResourcesettingsProjectsSettingsPatchRequest("esse") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudResourcesettingsV1Setting = new GoogleCloudResourcesettingsV1Setting() {{
                    effectiveValue = new GoogleCloudResourcesettingsV1Value() {{
                        booleanValue = false;
                        durationValue = "porro";
                        enumValue = new GoogleCloudResourcesettingsV1ValueEnumValue() {{
                            value = "dolorum";
                        }};;
                        stringMapValue = new GoogleCloudResourcesettingsV1ValueStringMap() {{
                            mappings = new java.util.HashMap<String, String>() {{
                                put("nam", "officia");
                            }};
                        }};;
                        stringSetValue = new GoogleCloudResourcesettingsV1ValueStringSet() {{
                            values = new String[]{{
                                add("fugit"),
                                add("deleniti"),
                                add("hic"),
                            }};
                        }};;
                        stringValue = "optio";
                    }};;
                    etag = "totam";
                    localValue = new GoogleCloudResourcesettingsV1Value() {{
                        booleanValue = false;
                        durationValue = "beatae";
                        enumValue = new GoogleCloudResourcesettingsV1ValueEnumValue() {{
                            value = "commodi";
                        }};;
                        stringMapValue = new GoogleCloudResourcesettingsV1ValueStringMap() {{
                            mappings = new java.util.HashMap<String, String>() {{
                                put("modi", "qui");
                                put("impedit", "cum");
                            }};
                        }};;
                        stringSetValue = new GoogleCloudResourcesettingsV1ValueStringSet() {{
                            values = new String[]{{
                                add("ipsum"),
                                add("excepturi"),
                            }};
                        }};;
                        stringValue = "aspernatur";
                    }};;
                    metadata = new GoogleCloudResourcesettingsV1SettingMetadata() {{
                        dataType = GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum.DATA_TYPE_UNSPECIFIED;
                        defaultValue = new GoogleCloudResourcesettingsV1Value() {{
                            booleanValue = false;
                            durationValue = "ad";
                            enumValue = new GoogleCloudResourcesettingsV1ValueEnumValue() {{
                                value = "natus";
                            }};;
                            stringMapValue = new GoogleCloudResourcesettingsV1ValueStringMap() {{
                                mappings = new java.util.HashMap<String, String>() {{
                                    put("iste", "dolor");
                                }};
                            }};;
                            stringSetValue = new GoogleCloudResourcesettingsV1ValueStringSet() {{
                                values = new String[]{{
                                    add("laboriosam"),
                                    add("hic"),
                                    add("saepe"),
                                }};
                            }};;
                            stringValue = "fuga";
                        }};;
                        description = "in";
                        displayName = "corporis";
                        readOnly = false;
                    }};;
                    name = "Brad Turcotte Jr.";
                }};;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                fields = "laborum";
                key = "dolores";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "explicabo";
                uploadProtocol = "nobis";
            }};            

            ResourcesettingsProjectsSettingsPatchResponse res = sdk.projects.resourcesettingsProjectsSettingsPatch(req, new ResourcesettingsProjectsSettingsPatchSecurity("enim", "omnis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudResourcesettingsV1Setting != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
