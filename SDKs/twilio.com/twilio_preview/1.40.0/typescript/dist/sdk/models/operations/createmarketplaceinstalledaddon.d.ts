import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateMarketplaceInstalledAddOnServerList: readonly ["https://preview.twilio.com"];
export declare class CreateMarketplaceInstalledAddOnSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest extends SpeakeasyBase {
    /**
     * Whether the Terms of Service were accepted.
     */
    acceptTermsOfService: boolean;
    /**
     * The SID of the AvaliableAddOn to install.
     */
    availableAddOnSid: string;
    /**
     * The JSON object that represents the configuration of the new Add-on being installed.
     */
    configuration?: any;
    /**
     * An application-defined string that uniquely identifies the resource. This value must be unique within the Account.
     */
    uniqueName?: string;
}
export declare class CreateMarketplaceInstalledAddOnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    previewMarketplaceInstalledAddOn?: shared.PreviewMarketplaceInstalledAddOn;
}
