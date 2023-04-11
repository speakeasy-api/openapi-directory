import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumerConfigInput } from "./consumerconfig";
/**
 * Request to update the configuration of a service networking connection including the import/export of custom routes and subnetwork routes with public IP.
 */
export declare class UpdateConsumerConfigRequestInput extends SpeakeasyBase {
    /**
     * Configuration information for a private service access connection.
     */
    consumerConfig?: ConsumerConfigInput;
}
