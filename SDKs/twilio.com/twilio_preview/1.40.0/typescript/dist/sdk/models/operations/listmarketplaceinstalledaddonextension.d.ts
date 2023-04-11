import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListMarketplaceInstalledAddOnExtensionServerList: readonly ["https://preview.twilio.com"];
export declare class ListMarketplaceInstalledAddOnExtensionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListMarketplaceInstalledAddOnExtensionRequest extends SpeakeasyBase {
    /**
     * The SID of the InstalledAddOn resource with the extensions to read.
     */
    installedAddOnSid: string;
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
export declare class ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta extends SpeakeasyBase {
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
export declare class ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse extends SpeakeasyBase {
    extensions?: shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension[];
    meta?: ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta;
}
export declare class ListMarketplaceInstalledAddOnExtensionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listMarketplaceInstalledAddOnExtensionResponse?: ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
