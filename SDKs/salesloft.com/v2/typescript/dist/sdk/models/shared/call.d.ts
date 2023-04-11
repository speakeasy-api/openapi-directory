import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedRecordingResource } from "./embeddedrecordingresource";
import { EmbeddedResource } from "./embeddedresource";
/**
 * Success
 */
export declare class Call extends SpeakeasyBase {
    action?: EmbeddedResource;
    cadence?: EmbeddedResource;
    calledPerson?: EmbeddedResource;
    /**
     * Datetime of when the call was created
     */
    createdAt?: Date;
    crmActivity?: EmbeddedResource;
    /**
     * Result of the call
     */
    disposition?: string;
    /**
     * Length of the call in seconds
     */
    duration?: number;
    /**
     * ID of Call
     */
    id?: number;
    note?: EmbeddedResource;
    /**
     * The recordings for this this call and their status
     */
    recordings?: EmbeddedRecordingResource[];
    /**
     * Outcome of the conversation
     */
    sentiment?: string;
    step?: EmbeddedResource;
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
