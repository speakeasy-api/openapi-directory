import { AxiosInstance } from "axios";
import { ImagePredictionApi } from "./imagepredictionapi";
export declare const ServerList: readonly ["https://southcentralus.api.cognitive.microsoft.com/customvision/v2.0/Prediction", "https://{Endpoint}/customvision/v2.0/Prediction"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    imagePredictionApi: ImagePredictionApi;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
