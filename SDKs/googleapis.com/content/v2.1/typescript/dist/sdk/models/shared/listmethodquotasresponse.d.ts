import { SpeakeasyBase } from "../../../internal/utils";
import { MethodQuota } from "./methodquota";
/**
 * Response message for the ListMethodQuotas method.
 */
export declare class ListMethodQuotasResponse extends SpeakeasyBase {
    /**
     * The current quota usage and limits per each method.
     */
    methodQuotas?: MethodQuota[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
