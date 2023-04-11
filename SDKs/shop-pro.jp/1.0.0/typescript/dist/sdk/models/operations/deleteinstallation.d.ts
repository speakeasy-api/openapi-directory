import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * （従量課金の場合）従量課金アンインストール情報
 */
export declare class DeleteInstallation200ApplicationJSONUsageCharge extends SpeakeasyBase {
    /**
     * アンインストール後に従量課金APIを利用いただくために必要な情報
     */
    apiToken?: string;
    /**
     * ポイント締め日
     */
    closingOn?: number;
}
/**
 * アンインストール成功
 */
export declare class DeleteInstallation200ApplicationJSON extends SpeakeasyBase {
    /**
     * アンインストールしたショップオーナーのアカウントID
     */
    accountId?: string;
    /**
     * プラン課金ID
     */
    applicationChargeSourceId?: string;
    /**
     * （買い切り以外の課金の場合）課金契約ID
     */
    recurringApplicationChargeId?: string;
    /**
     * アンインストール日時
     */
    uninstalledAt?: number;
    /**
     * （従量課金の場合）従量課金アンインストール情報
     */
    usageCharge?: DeleteInstallation200ApplicationJSONUsageCharge;
}
export declare class DeleteInstallationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * アンインストール成功
     */
    deleteInstallation200ApplicationJSONObject?: DeleteInstallation200ApplicationJSON;
}
