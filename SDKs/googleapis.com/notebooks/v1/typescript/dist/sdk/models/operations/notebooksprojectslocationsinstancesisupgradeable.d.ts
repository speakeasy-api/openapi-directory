import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class NotebooksProjectsLocationsInstancesIsUpgradeableSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Optional. The optional UpgradeType. Setting this field will search for additional compute images to upgrade this instance.
 */
export declare enum NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum {
    UpgradeTypeUnspecified = "UPGRADE_TYPE_UNSPECIFIED",
    UpgradeFramework = "UPGRADE_FRAMEWORK",
    UpgradeOs = "UPGRADE_OS",
    UpgradeCuda = "UPGRADE_CUDA",
    UpgradeAll = "UPGRADE_ALL"
}
export declare class NotebooksProjectsLocationsInstancesIsUpgradeableRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
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
     * Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     */
    notebookInstance: string;
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
     * Optional. The optional UpgradeType. Setting this field will search for additional compute images to upgrade this instance.
     */
    type?: NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class NotebooksProjectsLocationsInstancesIsUpgradeableResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    isInstanceUpgradeableResponse?: shared.IsInstanceUpgradeableResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
