import { SpeakeasyBase } from "../../../internal/utils";
export declare class Pagination extends SpeakeasyBase {
    /**
     * Optional link to first list of results
     */
    first?: string;
    /**
     * Optional link to last list of results
     */
    last?: string;
    /**
     * Optional link to next list of results
     */
    next?: string;
    /**
     * Optional link to previous list of results
     */
    previous?: string;
    /**
     * Number of records available
     */
    total?: number;
}
