import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Consumer } from "./consumer";
import { ConsumerInput } from "./consumer";



// NetworkConfig
/** 
 * Network configuration for the Dataproc Metastore service.
**/
export class NetworkConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumers", elemType: Consumer })
  consumers?: Consumer[];
}


// NetworkConfigInput
/** 
 * Network configuration for the Dataproc Metastore service.
**/
export class NetworkConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumers", elemType: ConsumerInput })
  consumers?: ConsumerInput[];
}
