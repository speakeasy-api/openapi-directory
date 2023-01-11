import { SpeakeasyBase } from "../../../internal/utils";
import { KerberosConfig } from "./kerberosconfig";
/**
 * Specifies configuration information specific to running Hive metastore software as the metastore service.
**/
export declare class HiveMetastoreConfig extends SpeakeasyBase {
    configOverrides?: Record<string, string>;
    kerberosConfig?: KerberosConfig;
    version?: string;
}
