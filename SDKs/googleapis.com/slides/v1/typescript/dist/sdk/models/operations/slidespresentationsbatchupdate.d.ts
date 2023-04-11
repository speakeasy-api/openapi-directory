import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SlidesPresentationsBatchUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SlidesPresentationsBatchUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SlidesPresentationsBatchUpdateSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SlidesPresentationsBatchUpdateSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SlidesPresentationsBatchUpdateSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SlidesPresentationsBatchUpdateSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SlidesPresentationsBatchUpdateSecurity extends SpeakeasyBase {
    option1?: SlidesPresentationsBatchUpdateSecurityOption1;
    option2?: SlidesPresentationsBatchUpdateSecurityOption2;
    option3?: SlidesPresentationsBatchUpdateSecurityOption3;
    option4?: SlidesPresentationsBatchUpdateSecurityOption4;
    option5?: SlidesPresentationsBatchUpdateSecurityOption5;
    option6?: SlidesPresentationsBatchUpdateSecurityOption6;
}
export declare class SlidesPresentationsBatchUpdateRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    batchUpdatePresentationRequest?: shared.BatchUpdatePresentationRequest;
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
     * The presentation to apply the updates to.
     */
    presentationId: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class SlidesPresentationsBatchUpdateResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    batchUpdatePresentationResponse?: shared.BatchUpdatePresentationResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
