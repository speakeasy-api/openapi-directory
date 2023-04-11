import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListMarketplaceAvailableAddOnExtensionServerList: readonly ["https://preview.twilio.com"];
export declare class ListMarketplaceAvailableAddOnExtensionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListMarketplaceAvailableAddOnExtensionRequest extends SpeakeasyBase {
    /**
     * The SID of the AvailableAddOn resource with the extensions to read.
     */
    availableAddOnSid: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
}
export declare class ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponse extends SpeakeasyBase {
    extensions?: shared.PreviewMarketplaceAvailableAddOnAvailableAddOnExtension[];
    meta?: ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponseMeta;
}
export declare class ListMarketplaceAvailableAddOnExtensionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listMarketplaceAvailableAddOnExtensionResponse?: ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
