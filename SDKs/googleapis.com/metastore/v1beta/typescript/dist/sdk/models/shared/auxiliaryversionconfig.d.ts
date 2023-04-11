import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkConfig, NetworkConfigInput } from "./networkconfig";
/**
 * Configuration information for the auxiliary service versions.
 */
export declare class AuxiliaryVersionConfig extends SpeakeasyBase {
    /**
     * A mapping of Hive metastore configuration key-value pairs to apply to the auxiliary Hive metastore (configured in hive-site.xml) in addition to the primary version's overrides. If keys are present in both the auxiliary version's overrides and the primary version's overrides, the value from the auxiliary version's overrides takes precedence.
     */
    configOverrides?: Record<string, string>;
    /**
     * Network configuration for the Dataproc Metastore service.
     */
    networkConfig?: NetworkConfig;
    /**
     * The Hive metastore version of the auxiliary service. It must be less than the primary Hive metastore service's version.
     */
    version?: string;
}
/**
 * Configuration information for the auxiliary service versions.
 */
export declare class AuxiliaryVersionConfigInput extends SpeakeasyBase {
    /**
     * A mapping of Hive metastore configuration key-value pairs to apply to the auxiliary Hive metastore (configured in hive-site.xml) in addition to the primary version's overrides. If keys are present in both the auxiliary version's overrides and the primary version's overrides, the value from the auxiliary version's overrides takes precedence.
     */
    configOverrides?: Record<string, string>;
    /**
     * Network configuration for the Dataproc Metastore service.
     */
    networkConfig?: NetworkConfigInput;
    /**
     * The Hive metastore version of the auxiliary service. It must be less than the primary Hive metastore service's version.
     */
    version?: string;
}
