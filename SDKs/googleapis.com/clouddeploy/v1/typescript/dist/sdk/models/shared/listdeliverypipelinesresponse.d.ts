import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryPipeline } from "./deliverypipeline";
/**
 * The response object from `ListDeliveryPipelines`.
 */
export declare class ListDeliveryPipelinesResponse extends SpeakeasyBase {
    /**
     * The `DeliveryPipeline` objects.
     */
    deliveryPipelines?: DeliveryPipeline[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
