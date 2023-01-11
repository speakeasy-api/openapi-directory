import { SpeakeasyBase } from "../../../internal/utils";
import { Consumer } from "./consumer";
import { ConsumerInput } from "./consumer";
/**
 * Network configuration for the Dataproc Metastore service.
**/
export declare class NetworkConfig extends SpeakeasyBase {
    consumers?: Consumer[];
}
/**
 * Network configuration for the Dataproc Metastore service.
**/
export declare class NetworkConfigInput extends SpeakeasyBase {
    consumers?: ConsumerInput[];
}
