import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KerberosConfig } from "./kerberosconfig";



// HiveMetastoreConfig
/** 
 * Specifies configuration information specific to running Hive metastore software as the metastore service.
**/
export class HiveMetastoreConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configOverrides" })
  configOverrides?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=kerberosConfig" })
  kerberosConfig?: KerberosConfig;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
