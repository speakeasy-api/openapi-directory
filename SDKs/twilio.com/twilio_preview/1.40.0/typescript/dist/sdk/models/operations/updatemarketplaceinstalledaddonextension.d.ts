import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateMarketplaceInstalledAddOnExtensionServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateMarketplaceInstalledAddOnExtensionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateMarketplaceInstalledAddOnExtensionUpdateMarketplaceInstalledAddOnExtensionRequest extends SpeakeasyBase {
    /**
     * Whether the Extension should be invoked.
     */
    enabled: boolean;
}
export declare class UpdateMarketplaceInstalledAddOnExtensionRequest extends SpeakeasyBase {
    /**
     * The SID of the InstalledAddOn resource with the extension to update.
     */
    installedAddOnSid: string;
    requestBody?: UpdateMarketplaceInstalledAddOnExtensionUpdateMarketplaceInstalledAddOnExtensionRequest;
    /**
     * The SID of the InstalledAddOn Extension resource to update.
     */
    sid: string;
}
export declare class UpdateMarketplaceInstalledAddOnExtensionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewMarketplaceInstalledAddOnInstalledAddOnExtension?: shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension;
}
