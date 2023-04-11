import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. Describes the read access mechanism of the data. Not user settable.
 */
export declare enum GoogleCloudDataplexV1StorageAccessReadEnum {
    AccessModeUnspecified = "ACCESS_MODE_UNSPECIFIED",
    Direct = "DIRECT",
    Managed = "MANAGED"
}
/**
 * Describes the access mechanism of the data within its storage location.
 */
export declare class GoogleCloudDataplexV1StorageAccess extends SpeakeasyBase {
    /**
     * Output only. Describes the read access mechanism of the data. Not user settable.
     */
    read?: GoogleCloudDataplexV1StorageAccessReadEnum;
}
