import { SpeakeasyBase } from "../../../internal/utils";
import { CheckDetails } from "./checkdetails";
/**
 * Represents a list of background check details
 */
export declare class CheckDetailsOutput extends SpeakeasyBase {
    /**
     * Detail list
     */
    details: CheckDetails[];
    /**
     * Next page path
     */
    next?: string;
    /**
     * Current page path
     */
    self: string;
}
