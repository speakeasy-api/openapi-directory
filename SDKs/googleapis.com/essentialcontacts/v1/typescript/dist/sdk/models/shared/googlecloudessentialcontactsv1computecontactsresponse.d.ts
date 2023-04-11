import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudEssentialcontactsV1Contact } from "./googlecloudessentialcontactsv1contact";
/**
 * Response message for the ComputeContacts method.
 */
export declare class GoogleCloudEssentialcontactsV1ComputeContactsResponse extends SpeakeasyBase {
    /**
     * All contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.
     */
    contacts?: GoogleCloudEssentialcontactsV1Contact[];
    /**
     * If there are more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token` and the rest of the parameters the same as the original request.
     */
    nextPageToken?: string;
}
