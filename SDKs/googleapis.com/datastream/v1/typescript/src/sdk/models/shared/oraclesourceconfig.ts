import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OracleRdbms } from "./oraclerdbms";



// OracleSourceConfig
/** 
 * Oracle data source configuration
**/
export class OracleSourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dropLargeObjects" })
  dropLargeObjects?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=excludeObjects" })
  excludeObjects?: OracleRdbms;

  @SpeakeasyMetadata({ data: "json, name=includeObjects" })
  includeObjects?: OracleRdbms;

  @SpeakeasyMetadata({ data: "json, name=maxConcurrentCdcTasks" })
  maxConcurrentCdcTasks?: number;

  @SpeakeasyMetadata({ data: "json, name=streamLargeObjects" })
  streamLargeObjects?: Record<string, any>;
}
