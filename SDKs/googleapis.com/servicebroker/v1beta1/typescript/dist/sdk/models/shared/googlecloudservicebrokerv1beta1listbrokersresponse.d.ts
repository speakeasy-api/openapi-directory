import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudServicebrokerV1beta1Broker } from "./googlecloudservicebrokerv1beta1broker";
/**
 * The response for the `ListBrokers()` method.
 */
export declare class GoogleCloudServicebrokerV1beta1ListBrokersResponse extends SpeakeasyBase {
    /**
     * The list of brokers in the container.
     */
    brokers?: GoogleCloudServicebrokerV1beta1Broker[];
    /**
     * This token allows you to get the next page of results for list requests.
     *
     * @remarks
     * If the number of results is larger than `pageSize`, use the `nextPageToken`
     * as a value for the query parameter `pageToken` in the next list request.
     * Subsequent list requests will have their own `nextPageToken` to continue
     * paging through the results
     */
    nextPageToken?: string;
}
