import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ComputeReservationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeReservationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeReservationsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeReservationsGetSecurity extends SpeakeasyBase {
    option1?: ComputeReservationsGetSecurityOption1;
    option2?: ComputeReservationsGetSecurityOption2;
    option3?: ComputeReservationsGetSecurityOption3;
}
export declare class ComputeReservationsGetRequest extends SpeakeasyBase {
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
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Project ID for this request.
     */
    project: string;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Name of the reservation to retrieve.
     */
    reservation: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * Legacy name for parameter that has been superseded by `quotaUser`.
     */
    userIp?: string;
    /**
     * Name of the zone for this request.
     */
    zone: string;
}
export declare class ComputeReservationsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    reservation?: shared.Reservation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
