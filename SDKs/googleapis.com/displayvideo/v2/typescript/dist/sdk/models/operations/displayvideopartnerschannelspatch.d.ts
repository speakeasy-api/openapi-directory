import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DisplayvideoPartnersChannelsPatchSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DisplayvideoPartnersChannelsPatchRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    channelInput?: shared.ChannelInput;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * The ID of the advertiser that owns the created channel.
     */
    advertiserId?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Output only. The unique ID of the channel. Assigned by the system.
     */
    channelId: string;
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
     * The ID of the partner that owns the created channel.
     */
    partnerId: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Required. The mask to control which fields to update.
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
export declare class DisplayvideoPartnersChannelsPatchResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    channel?: shared.Channel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
