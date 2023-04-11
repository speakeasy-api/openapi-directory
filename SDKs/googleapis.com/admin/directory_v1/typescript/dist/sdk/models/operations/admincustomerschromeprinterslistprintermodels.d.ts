import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AdminCustomersChromePrintersListPrinterModelsSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AdminCustomersChromePrintersListPrinterModelsSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AdminCustomersChromePrintersListPrinterModelsSecurity extends SpeakeasyBase {
    option1?: AdminCustomersChromePrintersListPrinterModelsSecurityOption1;
    option2?: AdminCustomersChromePrintersListPrinterModelsSecurityOption2;
}
export declare class AdminCustomersChromePrintersListPrinterModelsRequest extends SpeakeasyBase {
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
     * Filer to list only models by a given manufacturer in format: "manufacturer:Brother". Search syntax is shared between this api and Admin Console printers pages.
     */
    filter?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The maximum number of objects to return. The service may return fewer than this value.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous call.
     */
    pageToken?: string;
    /**
     * Required. The name of the customer who owns this collection of printers. Format: customers/{customer_id}
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
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class AdminCustomersChromePrintersListPrinterModelsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listPrinterModelsResponse?: shared.ListPrinterModelsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
