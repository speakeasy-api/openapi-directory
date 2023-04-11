import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message of SearchExampleComparisons.
 */
export declare class GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest extends SpeakeasyBase {
    /**
     * Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken of the response to a previous search rquest. If you don't specify this field, the API call requests the first page of the search.
     */
    pageToken?: string;
}
