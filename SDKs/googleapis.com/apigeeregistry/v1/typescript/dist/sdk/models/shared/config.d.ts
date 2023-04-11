import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Available configurations to provision an Instance.
 */
export declare class ConfigInput extends SpeakeasyBase {
    /**
     * Required. The Customer Managed Encryption Key (CMEK) used for data encryption. The CMEK name should follow the format of `projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)`, where the `location` must match InstanceConfig.location.
     */
    cmekKeyName?: string;
}
