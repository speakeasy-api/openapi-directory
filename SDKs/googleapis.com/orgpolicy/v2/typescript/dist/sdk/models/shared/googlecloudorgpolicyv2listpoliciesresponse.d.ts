import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudOrgpolicyV2Policy } from "./googlecloudorgpolicyv2policy";
/**
 * The response returned from the ListPolicies method. It will be empty if no policies are set on the resource.
 */
export declare class GoogleCloudOrgpolicyV2ListPoliciesResponse extends SpeakeasyBase {
    /**
     * Page token used to retrieve the next page. This is currently not used, but the server may at any point start supplying a valid token.
     */
    nextPageToken?: string;
    /**
     * All policies that exist on the resource. It will be empty if no policies are set.
     */
    policies?: GoogleCloudOrgpolicyV2Policy[];
}
