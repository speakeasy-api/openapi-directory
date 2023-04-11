import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectBillingInfo } from "./projectbillinginfo";
/**
 * Request message for `ListProjectBillingInfoResponse`.
 */
export declare class ListProjectBillingInfoResponse extends SpeakeasyBase {
    /**
     * A token to retrieve the next page of results. To retrieve the next page, call `ListProjectBillingInfo` again with the `page_token` field set to this value. This field is empty if there are no more results to retrieve.
     */
    nextPageToken?: string;
    /**
     * A list of `ProjectBillingInfo` resources representing the projects associated with the billing account.
     */
    projectBillingInfo?: ProjectBillingInfo[];
}
