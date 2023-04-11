import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudServicebrokerV1beta1Binding } from "./googlecloudservicebrokerv1beta1binding";
/**
 * The response for the `ListBindings()` method.
 */
export declare class GoogleCloudServicebrokerV1beta1ListBindingsResponse extends SpeakeasyBase {
    /**
     * The list of bindings in the instance.
     */
    bindings?: GoogleCloudServicebrokerV1beta1Binding[];
    /**
     * Used to communicate description of the response. Usually for non-standard
     *
     * @remarks
     * error codes.
     * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
     */
    description?: string;
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
