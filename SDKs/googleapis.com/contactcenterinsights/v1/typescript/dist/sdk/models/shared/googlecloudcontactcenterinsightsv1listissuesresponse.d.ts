import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1Issue } from "./googlecloudcontactcenterinsightsv1issue";
/**
 * The response of listing issues.
 */
export declare class GoogleCloudContactcenterinsightsV1ListIssuesResponse extends SpeakeasyBase {
    /**
     * The issues that match the request.
     */
    issues?: GoogleCloudContactcenterinsightsV1Issue[];
}
