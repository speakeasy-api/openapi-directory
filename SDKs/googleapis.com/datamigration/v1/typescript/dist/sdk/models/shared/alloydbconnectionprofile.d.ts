import { SpeakeasyBase } from "../../../internal/utils";
import { AlloyDbSettings, AlloyDbSettingsInput } from "./alloydbsettings";
/**
 * Specifies required connection parameters, and the parameters required to create an AlloyDB destination cluster.
 */
export declare class AlloyDbConnectionProfile extends SpeakeasyBase {
    /**
     * Required. The AlloyDB cluster ID that this connection profile is associated with.
     */
    clusterId?: string;
    /**
     * Settings for creating an AlloyDB cluster.
     */
    settings?: AlloyDbSettings;
}
/**
 * Specifies required connection parameters, and the parameters required to create an AlloyDB destination cluster.
 */
export declare class AlloyDbConnectionProfileInput extends SpeakeasyBase {
    /**
     * Required. The AlloyDB cluster ID that this connection profile is associated with.
     */
    clusterId?: string;
    /**
     * Settings for creating an AlloyDB cluster.
     */
    settings?: AlloyDbSettingsInput;
}
