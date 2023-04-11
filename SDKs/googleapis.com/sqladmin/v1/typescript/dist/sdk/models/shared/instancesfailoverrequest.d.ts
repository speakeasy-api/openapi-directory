import { SpeakeasyBase } from "../../../internal/utils";
import { FailoverContext } from "./failovercontext";
/**
 * Instance failover request.
 */
export declare class InstancesFailoverRequest extends SpeakeasyBase {
    /**
     * Database instance failover context.
     */
    failoverContext?: FailoverContext;
}
