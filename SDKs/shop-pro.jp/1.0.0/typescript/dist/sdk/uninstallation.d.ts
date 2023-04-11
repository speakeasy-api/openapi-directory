import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * アプリをアンインストールするAPIです。
 */
export declare class Uninstallation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * アプリストアアプリのアンインストール
     *
     * @remarks
     * このAPIは OAuth のアクセストークンに紐付くアプリケーションをショップから削除します。
     * このAPIを利用した場合、ショップオーナーがアンインストールした場合と異なり、アンインストールフックは実行されません。
     * 代わりにアンインストールフックで通知される情報は、このAPIのレスポンスに含まれています。
     *
     * アンインストール時の注意点については、[アプリのアンインストール](https://app.shop-pro.jp/open_api#section/API/アプリのインストール)を参照して下さい。
     *
     */
    deleteInstallation(config?: AxiosRequestConfig): Promise<operations.DeleteInstallationResponse>;
}
