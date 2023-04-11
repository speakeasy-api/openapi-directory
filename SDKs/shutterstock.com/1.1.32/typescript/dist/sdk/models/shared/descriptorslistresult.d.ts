import { SpeakeasyBase } from "../../../internal/utils";
import { Descriptors } from "./descriptors";
/**
 * List Descriptors results
 */
export declare class DescriptorsListResult extends SpeakeasyBase {
    /**
     * List of descriptors
     */
    data?: Descriptors[];
    /**
     * Current page that is returned
     */
    page?: number;
    /**
     * Number of results per page
     */
    perPage?: number;
}
