import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostApplicationChargeSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PostApplicationChargeRequestBodyApplicationCharge extends SpeakeasyBase {
    /**
     * アプリ内課金ID
     */
    applicationChargeSourceId?: string;
}
export declare class PostApplicationChargeRequestBody extends SpeakeasyBase {
    applicationCharge?: PostApplicationChargeRequestBodyApplicationCharge;
}
export declare class PostApplicationCharge201ApplicationJSONApplicationCharge extends SpeakeasyBase {
    /**
     * 課金ID
     */
    id?: string;
    /**
     * 作成日時
     */
    makeDate?: number;
    /**
     * ポイント請求額(税抜)
     */
    point?: number;
    /**
     * 更新日時
     */
    updateDate?: number;
}
export declare class PostApplicationCharge201ApplicationJSON extends SpeakeasyBase {
    applicationCharge?: PostApplicationCharge201ApplicationJSONApplicationCharge;
}
export declare class PostApplicationChargeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    postApplicationCharge201ApplicationJSONObject?: PostApplicationCharge201ApplicationJSON;
}
