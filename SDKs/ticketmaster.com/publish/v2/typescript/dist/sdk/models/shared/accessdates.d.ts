import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Event's Access Date
 */
export declare class AccessDates extends SpeakeasyBase {
    /**
     * Boolean flag to indicate whether or not the access end date is approximated
     */
    endApproximate?: boolean;
    /**
     * Event's end access time
     */
    endDateTime?: Date;
    /**
     * Boolean flag to indicate whether or not the access start date is approximated
     */
    startApproximate?: boolean;
    /**
     * Event's start access time
     */
    startDateTime?: Date;
}
