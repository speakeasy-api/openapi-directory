import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudResourcesettingsV1Value } from "./googlecloudresourcesettingsv1value";
/**
 * The data type for this setting.
 */
export declare enum GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum {
    DataTypeUnspecified = "DATA_TYPE_UNSPECIFIED",
    Boolean = "BOOLEAN",
    String = "STRING",
    StringSet = "STRING_SET",
    EnumValue = "ENUM_VALUE",
    DurationValue = "DURATION_VALUE",
    StringMap = "STRING_MAP"
}
/**
 * Metadata about a setting which is not editable by the end user.
 */
export declare class GoogleCloudResourcesettingsV1SettingMetadata extends SpeakeasyBase {
    /**
     * The data type for this setting.
     */
    dataType?: GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum;
    /**
     * The data in a setting value.
     */
    defaultValue?: GoogleCloudResourcesettingsV1Value;
    /**
     * A detailed description of what this setting does.
     */
    description?: string;
    /**
     * The human readable name for this setting.
     */
    displayName?: string;
    /**
     * A flag indicating that values of this setting cannot be modified. See documentation for the specific setting for updates and reasons.
     */
    readOnly?: boolean;
}
