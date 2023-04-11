import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterConfiguration } from "./clusterconfiguration";
import { ClusterCustomer } from "./clustercustomer";
/**
 * Request object that contains the problem to be solved
 */
export declare class ClusterRequest extends SpeakeasyBase {
    configuration?: ClusterConfiguration;
    customers?: ClusterCustomer[];
}
