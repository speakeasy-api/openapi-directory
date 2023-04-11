import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ContentOrdersGettestordertemplateSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * The name of the template to retrieve.
 */
export declare enum ContentOrdersGettestordertemplateTemplateNameEnum {
    Template1 = "TEMPLATE1",
    Template2 = "TEMPLATE2",
    Template1A = "TEMPLATE1A",
    Template1B = "TEMPLATE1B",
    Template3 = "TEMPLATE3"
}
export declare class ContentOrdersGettestordertemplateRequest extends SpeakeasyBase {
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
     * The country of the template to retrieve. Defaults to `US`.
     */
    country?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The ID of the account that should manage the order. This cannot be a multi-client account.
     */
    merchantId: string;
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
     * The name of the template to retrieve.
     */
    templateName: ContentOrdersGettestordertemplateTemplateNameEnum;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class ContentOrdersGettestordertemplateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    ordersGetTestOrderTemplateResponse?: shared.OrdersGetTestOrderTemplateResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
