import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteMarketplaceInstalledAddOnServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteMarketplaceInstalledAddOnSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteMarketplaceInstalledAddOnRequest extends SpeakeasyBase {
    /**
     * The SID of the InstalledAddOn resource to delete.
     */
    sid: string;
}
export declare class DeleteMarketplaceInstalledAddOnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
