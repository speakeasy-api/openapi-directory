import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudOrgpolicyV2Constraint } from "./googlecloudorgpolicyv2constraint";
/**
 * The response returned from the ListConstraints method.
 */
export declare class GoogleCloudOrgpolicyV2ListConstraintsResponse extends SpeakeasyBase {
    /**
     * The collection of constraints that are available on the targeted resource.
     */
    constraints?: GoogleCloudOrgpolicyV2Constraint[];
    /**
     * Page token used to retrieve the next page. This is currently not used.
     */
    nextPageToken?: string;
}
