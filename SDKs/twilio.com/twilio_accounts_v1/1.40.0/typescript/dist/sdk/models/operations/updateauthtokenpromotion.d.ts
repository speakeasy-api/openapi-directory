import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateAuthTokenPromotionServerList: readonly ["https://accounts.twilio.com"];
export declare class UpdateAuthTokenPromotionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    accountsV1AuthTokenPromotion?: shared.AccountsV1AuthTokenPromotion;
}
