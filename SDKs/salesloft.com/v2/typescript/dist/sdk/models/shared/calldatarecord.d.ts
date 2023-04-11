import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedRecordingResource } from "./embeddedrecordingresource";
import { EmbeddedResource } from "./embeddedresource";
/**
 * Success
 */
export declare class CallDataRecord extends SpeakeasyBase {
    call?: EmbeddedResource;
    /**
     * Type of the call. Can be one of: call, bridge, collaboration. Though exact values may change over time
     */
    callType?: string;
    /**
     * UUID of the call. Legs of the same call will have the same call_uuid.
     */
    callUuid?: string;
    calledPerson?: EmbeddedResource;
    /**
     * Datetime of when the call was created
     */
    createdAt?: Date;
    /**
     * Direction of the call. Can be one of: inbound, outbound
     */
    direction?: string;
    /**
     * Length of the call in seconds
     */
    duration?: number;
    /**
     * Phone number that placed the call
     */
    from?: string;
    /**
     * ID of CallDataRecord
     */
    id?: number;
    recording?: EmbeddedRecordingResource;
    /**
     * The outcome of the call. Can be one of: queued, initiated, ringing, in-progress, completed, busy, no-answer, canceled, failed
     */
    status?: string;
    /**
     * Phone number that received the call
     */
    to?: string;
    /**
     * Datetime of when the call was last updated
     */
    updatedAt?: Date;
    user?: EmbeddedResource;
}
