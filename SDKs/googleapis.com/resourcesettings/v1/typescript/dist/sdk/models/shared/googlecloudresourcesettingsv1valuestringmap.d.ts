import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A string->string map value that can hold a map of string keys to string values. The maximum length of each string is 200 characters and there can be a maximum of 50 key-value pairs in the map.
 */
export declare class GoogleCloudResourcesettingsV1ValueStringMap extends SpeakeasyBase {
    /**
     * The key-value pairs in the map
     */
    mappings?: Record<string, string>;
}
