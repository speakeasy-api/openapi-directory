import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the destination.
 */
export declare enum DestinationStatusStatusEnum {
    Unknown = "UNKNOWN",
    Active = "ACTIVE",
    Pending = "PENDING",
    Disapproved = "DISAPPROVED"
}
/**
 * The destination status.
 */
export declare class DestinationStatus extends SpeakeasyBase {
    /**
     * The name of the destination.
     */
    destination?: string;
    /**
     * The status of the destination.
     */
    status?: DestinationStatusStatusEnum;
}
