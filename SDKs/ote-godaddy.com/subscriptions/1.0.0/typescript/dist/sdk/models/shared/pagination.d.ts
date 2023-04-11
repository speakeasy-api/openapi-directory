import { SpeakeasyBase } from "../../../internal/utils";
export declare class Pagination extends SpeakeasyBase {
    /**
     * URI to access the first page
     */
    first?: string;
    /**
     * URI to access the last page
     */
    last?: string;
    /**
     * URI to access the next page
     */
    next?: string;
    /**
     * URI to access the previous page
     */
    previous?: string;
    /**
     * Number of records available
     */
    total?: number;
}
