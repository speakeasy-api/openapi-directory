import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceRecordSet } from "./resourcerecordset";
/**
 * Status of the operation (output only). A status of "done" means that the request to update the authoritative servers has been sent, but the servers might not be updated yet.
 */
export declare enum ChangeStatusEnum {
    Pending = "PENDING",
    Done = "DONE"
}
/**
 * A Change represents a set of ResourceRecordSet additions and deletions applied atomically to a ManagedZone. ResourceRecordSets within a ManagedZone are modified by creating a new Change element in the Changes collection. In turn the Changes collection also records the past modifications to the ResourceRecordSets in a ManagedZone. The current state of the ManagedZone is the sum effect of applying all Change elements in the Changes collection in sequence.
 */
export declare class Change extends SpeakeasyBase {
    /**
     * Which ResourceRecordSets to add?
     */
    additions?: ResourceRecordSet[];
    /**
     * Which ResourceRecordSets to remove? Must match existing data exactly.
     */
    deletions?: ResourceRecordSet[];
    /**
     * Unique identifier for the resource; defined by the server (output only).
     */
    id?: string;
    /**
     * If the DNS queries for the zone will be served.
     */
    isServing?: boolean;
    kind?: string;
    /**
     * The time that this operation was started by the server (output only). This is in RFC3339 text format.
     */
    startTime?: string;
    /**
     * Status of the operation (output only). A status of "done" means that the request to update the authoritative servers has been sent, but the servers might not be updated yet.
     */
    status?: ChangeStatusEnum;
}
