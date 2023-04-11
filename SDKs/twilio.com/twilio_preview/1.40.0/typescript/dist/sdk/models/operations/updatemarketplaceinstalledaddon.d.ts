import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateMarketplaceInstalledAddOnServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateMarketplaceInstalledAddOnSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest extends SpeakeasyBase {
    /**
     * Valid JSON object that conform to the configuration schema exposed by the associated AvailableAddOn resource. This is only required by Add-ons that need to be configured
     */
    configuration?: any;
    /**
     * An application-defined string that uniquely identifies the resource. This value must be unique within the Account.
     */
    uniqueName?: string;
}
export declare class UpdateMarketplaceInstalledAddOnRequest extends SpeakeasyBase {
    requestBody?: UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest;
    /**
     * The SID of the InstalledAddOn resource to update.
     */
    sid: string;
}
export declare class UpdateMarketplaceInstalledAddOnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewMarketplaceInstalledAddOn?: shared.PreviewMarketplaceInstalledAddOn;
}
