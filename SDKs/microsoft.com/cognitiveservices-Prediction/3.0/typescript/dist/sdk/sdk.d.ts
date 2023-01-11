import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { ImagePredictionApi } from "./imagepredictionapi";
export declare const ServerList: readonly ["https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/prediction", "https://{Endpoint}/customvision/v3.0/prediction"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
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
