import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchMarketplaceAvailableAddOnServerList: readonly ["https://preview.twilio.com"];
export declare class FetchMarketplaceAvailableAddOnSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchMarketplaceAvailableAddOnRequest extends SpeakeasyBase {
    /**
     * The SID of the AvailableAddOn resource to fetch.
     */
    sid: string;
}
export declare class FetchMarketplaceAvailableAddOnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewMarketplaceAvailableAddOn?: shared.PreviewMarketplaceAvailableAddOn;
}
