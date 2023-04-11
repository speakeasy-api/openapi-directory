import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchMarketplaceAvailableAddOnExtensionServerList: readonly ["https://preview.twilio.com"];
export declare class FetchMarketplaceAvailableAddOnExtensionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchMarketplaceAvailableAddOnExtensionRequest extends SpeakeasyBase {
    /**
     * The SID of the AvailableAddOn resource with the extension to fetch.
     */
    availableAddOnSid: string;
    /**
     * The SID of the AvailableAddOn Extension resource to fetch.
     */
    sid: string;
}
export declare class FetchMarketplaceAvailableAddOnExtensionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewMarketplaceAvailableAddOnAvailableAddOnExtension?: shared.PreviewMarketplaceAvailableAddOnAvailableAddOnExtension;
}
