import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchMarketplaceInstalledAddOnExtensionServerList: readonly ["https://preview.twilio.com"];
export declare class FetchMarketplaceInstalledAddOnExtensionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchMarketplaceInstalledAddOnExtensionRequest extends SpeakeasyBase {
    /**
     * The SID of the InstalledAddOn resource with the extension to fetch.
     */
    installedAddOnSid: string;
    /**
     * The SID of the InstalledAddOn Extension resource to fetch.
     */
    sid: string;
}
export declare class FetchMarketplaceInstalledAddOnExtensionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewMarketplaceInstalledAddOnInstalledAddOnExtension?: shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension;
}
