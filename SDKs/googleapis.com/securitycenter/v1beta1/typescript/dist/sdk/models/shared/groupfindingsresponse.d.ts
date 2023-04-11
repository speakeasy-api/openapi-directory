import { SpeakeasyBase } from "../../../internal/utils";
import { GroupResult } from "./groupresult";
/**
 * Response message for group by findings.
 */
export declare class GroupFindingsResponse extends SpeakeasyBase {
    /**
     * Group results. There exists an element for each existing unique combination of property/values. The element contains a count for the number of times those specific property/values appear.
     */
    groupByResults?: GroupResult[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results.
     */
    nextPageToken?: string;
    /**
     * Time used for executing the groupBy request.
     */
    readTime?: string;
}
