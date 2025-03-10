import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DialogflowProjectsLocationsSetAgentSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DialogflowProjectsLocationsSetAgentSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DialogflowProjectsLocationsSetAgentSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsSetAgentSecurityOption1;
    option2?: DialogflowProjectsLocationsSetAgentSecurityOption2;
}
export declare class DialogflowProjectsLocationsSetAgentRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    googleCloudDialogflowV2beta1Agent?: shared.GoogleCloudDialogflowV2beta1Agent;
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
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Required. The project of this agent. Format: `projects/` or `projects//locations/`
     */
    parent: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Optional. The mask to control which fields get updated.
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
export declare class DialogflowProjectsLocationsSetAgentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleCloudDialogflowV2beta1Agent?: shared.GoogleCloudDialogflowV2beta1Agent;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
