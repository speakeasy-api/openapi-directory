import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatapipelinesV1Pipeline } from "./googleclouddatapipelinesv1pipeline";
/**
 * Response message for ListPipelines.
 */
export declare class GoogleCloudDatapipelinesV1ListPipelinesResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Results that matched the filter criteria and were accessible to the caller. Results are always in descending order of pipeline creation date.
     */
    pipelines?: GoogleCloudDatapipelinesV1Pipeline[];
}
