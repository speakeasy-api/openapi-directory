import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudOrgpolicyV2CustomConstraint } from "./googlecloudorgpolicyv2customconstraint";
/**
 * The response returned from the ListCustomConstraints method. It will be empty if no custom constraints are set on the organization resource.
 */
export declare class GoogleCloudOrgpolicyV2ListCustomConstraintsResponse extends SpeakeasyBase {
    /**
     * All custom constraints that exist on the organization resource. It will be empty if no custom constraints are set.
     */
    customConstraints?: GoogleCloudOrgpolicyV2CustomConstraint[];
    /**
     * Page token used to retrieve the next page. This is currently not used, but the server may at any point start supplying a valid token.
     */
    nextPageToken?: string;
}
