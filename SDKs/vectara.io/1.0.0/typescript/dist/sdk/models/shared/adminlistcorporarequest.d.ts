import { SpeakeasyBase } from "../../../internal/utils";
export declare class AdminListCorporaRequest extends SpeakeasyBase {
    /**
     * A regex to match corpora against.
     */
    filter?: string;
    /**
     * The maximum results to return.
     */
    numResults?: number;
    /**
     * A key that is passed in to retrieve a specific page of results.
     */
    pageKey?: string;
}
