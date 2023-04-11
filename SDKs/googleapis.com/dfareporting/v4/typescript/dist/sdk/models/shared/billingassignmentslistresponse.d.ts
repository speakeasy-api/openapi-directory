import { SpeakeasyBase } from "../../../internal/utils";
import { BillingAssignment } from "./billingassignment";
/**
 * Billing assignment List Response
 */
export declare class BillingAssignmentsListResponse extends SpeakeasyBase {
    /**
     * Billing assignments collection.
     */
    billingAssignments?: BillingAssignment[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingAssignmentsListResponse".
     */
    kind?: string;
}
