import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Required. Specifies which parts to the Category resource should be returned in the response.
 */
export declare enum MybusinessbusinessinformationCategoriesBatchGetViewEnum {
    CategoryViewUnspecified = "CATEGORY_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class MybusinessbusinessinformationCategoriesBatchGetRequest extends SpeakeasyBase {
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
     * Required. The BCP 47 code of language that the category names should be returned in.
     */
    languageCode?: string;
    /**
     * Required. At least one name must be set. The GConcept ids the localized category names should be returned for. To return details for more than one category, repeat this parameter in the request.
     */
    names?: string[];
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
     * Optional. The ISO 3166-1 alpha-2 country code used to infer non-standard language.
     */
    regionCode?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * Required. Specifies which parts to the Category resource should be returned in the response.
     */
    view?: MybusinessbusinessinformationCategoriesBatchGetViewEnum;
}
export declare class MybusinessbusinessinformationCategoriesBatchGetResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    batchGetCategoriesResponse?: shared.BatchGetCategoriesResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
