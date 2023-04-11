import { SpeakeasyBase } from "../../../internal/utils";
import { Consumer, ConsumerInput } from "./consumer";
/**
 * Network configuration for the Dataproc Metastore service.
 */
export declare class NetworkConfig extends SpeakeasyBase {
    /**
     * Immutable. The consumer-side network configuration for the Dataproc Metastore instance.
     */
    consumers?: Consumer[];
    /**
     * Enables custom routes to be imported and exported for the Dataproc Metastore service's peered VPC network.
     */
    customRoutesEnabled?: boolean;
}
/**
 * Network configuration for the Dataproc Metastore service.
 */
export declare class NetworkConfigInput extends SpeakeasyBase {
    /**
     * Immutable. The consumer-side network configuration for the Dataproc Metastore instance.
     */
    consumers?: ConsumerInput[];
    /**
     * Enables custom routes to be imported and exported for the Dataproc Metastore service's peered VPC network.
     */
    customRoutesEnabled?: boolean;
}
