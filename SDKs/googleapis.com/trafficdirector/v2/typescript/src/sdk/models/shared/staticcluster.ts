import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StaticCluster
/** 
 * Describes a statically loaded cluster.
**/
export class StaticCluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: string;
}
