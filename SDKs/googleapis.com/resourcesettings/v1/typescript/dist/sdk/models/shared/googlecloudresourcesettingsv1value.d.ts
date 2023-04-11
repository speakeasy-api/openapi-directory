import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudResourcesettingsV1ValueEnumValue } from "./googlecloudresourcesettingsv1valueenumvalue";
import { GoogleCloudResourcesettingsV1ValueStringMap } from "./googlecloudresourcesettingsv1valuestringmap";
import { GoogleCloudResourcesettingsV1ValueStringSet } from "./googlecloudresourcesettingsv1valuestringset";
/**
 * The data in a setting value.
 */
export declare class GoogleCloudResourcesettingsV1Value extends SpeakeasyBase {
    /**
     * Defines this value as being a boolean value.
     */
    booleanValue?: boolean;
    /**
     * Defines this value as being a Duration.
     */
    durationValue?: string;
    /**
     * A enum value that can hold any enum type setting values. Each enum type is represented by a number, this representation is stored in the definitions.
     */
    enumValue?: GoogleCloudResourcesettingsV1ValueEnumValue;
    /**
     * A string->string map value that can hold a map of string keys to string values. The maximum length of each string is 200 characters and there can be a maximum of 50 key-value pairs in the map.
     */
    stringMapValue?: GoogleCloudResourcesettingsV1ValueStringMap;
    /**
     * A string set value that can hold a set of strings. The maximum length of each string is 200 characters and there can be a maximum of 50 strings in the string set.
     */
    stringSetValue?: GoogleCloudResourcesettingsV1ValueStringSet;
    /**
     * Defines this value as being a string value.
     */
    stringValue?: string;
}
