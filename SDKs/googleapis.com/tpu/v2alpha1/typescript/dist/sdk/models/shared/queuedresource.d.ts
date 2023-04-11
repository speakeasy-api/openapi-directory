import { SpeakeasyBase } from "../../../internal/utils";
import { Guaranteed } from "./guaranteed";
import { QueuedResourceState } from "./queuedresourcestate";
import { QueueingPolicy } from "./queueingpolicy";
import { Tpu, TpuInput } from "./tpu";
/**
 * A QueuedResource represents a request for resources that will be placed in a queue and fulfilled when the necessary resources are available.
 */
export declare class QueuedResource extends SpeakeasyBase {
    /**
     * BestEffort tier definition.
     */
    bestEffort?: Record<string, any>;
    /**
     * Guaranteed tier definition.
     */
    guaranteed?: Guaranteed;
    /**
     * Output only. Immutable. The name of the QueuedResource.
     */
    name?: string;
    /**
     * Defines the policy of the QueuedRequest.
     */
    queueingPolicy?: QueueingPolicy;
    /**
     * QueuedResourceState defines the details of the QueuedResource request.
     */
    state?: QueuedResourceState;
    /**
     * Details of the TPU resource(s) being requested.
     */
    tpu?: Tpu;
}
/**
 * A QueuedResource represents a request for resources that will be placed in a queue and fulfilled when the necessary resources are available.
 */
export declare class QueuedResourceInput extends SpeakeasyBase {
    /**
     * BestEffort tier definition.
     */
    bestEffort?: Record<string, any>;
    /**
     * Guaranteed tier definition.
     */
    guaranteed?: Guaranteed;
    /**
     * Defines the policy of the QueuedRequest.
     */
    queueingPolicy?: QueueingPolicy;
    /**
     * QueuedResourceState defines the details of the QueuedResource request.
     */
    state?: QueuedResourceState;
    /**
     * Details of the TPU resource(s) being requested.
     */
    tpu?: TpuInput;
}
