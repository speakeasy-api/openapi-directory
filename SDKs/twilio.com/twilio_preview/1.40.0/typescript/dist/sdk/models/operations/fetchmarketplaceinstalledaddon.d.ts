import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchMarketplaceInstalledAddOnServerList: readonly ["https://preview.twilio.com"];
export declare class FetchMarketplaceInstalledAddOnSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchMarketplaceInstalledAddOnRequest extends SpeakeasyBase {
    /**
     * The SID of the InstalledAddOn resource to fetch.
     */
    sid: string;
}
export declare class FetchMarketplaceInstalledAddOnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewMarketplaceInstalledAddOn?: shared.PreviewMarketplaceInstalledAddOn;
}
