import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudServicebrokerV1beta1Service } from "./googlecloudservicebrokerv1beta1service";
/**
 * Response message for the `ListCatalog()` method.
 */
export declare class GoogleCloudServicebrokerV1beta1ListCatalogResponse extends SpeakeasyBase {
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
    /**
     * The services available for the requested GCP project.
     */
    services?: GoogleCloudServicebrokerV1beta1Service[];
}
