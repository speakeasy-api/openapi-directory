import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    googleCloudSecuritycenterV1beta1SecurityMarks?: shared.GoogleCloudSecuritycenterV1beta1SecurityMarks;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks".
     */
    name: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * The time at which the updated SecurityMarks take effect.
     */
    startTime?: string;
    /**
     * The FieldMask to use when updating the security marks resource.
     */
    updateMask?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleCloudSecuritycenterV1beta1SecurityMarks?: shared.GoogleCloudSecuritycenterV1beta1SecurityMarks;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
