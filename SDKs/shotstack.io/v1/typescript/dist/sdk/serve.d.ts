import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Serve {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteAsset - Delete Asset
     *
     * Delete an asset by its asset id. If a render creates multiple assets, such as thumbnail and poster images, each asset must be deleted individually by the asset id.
     *
     * **base URL:** https://api.shotstack.io/serve/{version}
    **/
    deleteAsset(req: operations.DeleteAssetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAssetResponse>;
    /**
     * getAsset - Get Asset
     *
     * The Serve API is used to interact with, and delete hosted assets including videos, images, audio files,  thumbnails and poster images. Use this endpoint to fetch an asset by asset id. Note that an asset id is unique for each asset and different from the render id.
     *
     * **base URL:** https://api.shotstack.io/serve/{version}
    **/
    getAsset(req: operations.GetAssetRequest, config?: AxiosRequestConfig): Promise<operations.GetAssetResponse>;
    /**
     * getAssetByRenderId - Get Asset by Render ID
     *
     * A render may generate more than one file, such as a video, thumbnail and poster image. When the assets are created the only known id is the render id returned by the original [render request](#render-video), status  request or webhook. This endpoint lets you look up one or more assets by the render id.
     *
     * **base URL:** https://api.shotstack.io/serve/{version}
    **/
    getAssetByRenderId(req: operations.GetAssetByRenderIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAssetByRenderIdResponse>;
}
