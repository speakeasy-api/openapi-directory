import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AdsensehostAssociationsessionsStartSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare enum AdsensehostAssociationsessionsStartProductCodeEnum {
    Afc = "AFC",
    Afg = "AFG",
    Afmc = "AFMC",
    Afs = "AFS",
    Afv = "AFV"
}
export declare class AdsensehostAssociationsessionsStartRequest extends SpeakeasyBase {
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * The URL to redirect the user to once association is completed. It receives a token parameter that can then be used to retrieve the associated account.
     */
    callbackUrl?: string;
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
     * Products to associate with the user.
     */
    productCode: AdsensehostAssociationsessionsStartProductCodeEnum[];
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
    /**
     * The preferred locale of the user.
     */
    userLocale?: string;
    /**
     * The locale of the user's hosted website.
     */
    websiteLocale?: string;
    /**
     * The URL of the user's hosted website.
     */
    websiteUrl: string;
}
export declare class AdsensehostAssociationsessionsStartResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    associationSession?: shared.AssociationSession;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
