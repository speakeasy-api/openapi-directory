import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAssetsVarianceSampleRequestBodyAssets extends SpeakeasyBase {
    assetReturns: number[];
}
export declare class PostAssetsVarianceSampleRequestBody extends SpeakeasyBase {
    assets: PostAssetsVarianceSampleRequestBodyAssets[];
}
export declare class PostAssetsVarianceSample200ApplicationJsonAssets extends SpeakeasyBase {
    assetVariance: number;
}
export declare class PostAssetsVarianceSample200ApplicationJson extends SpeakeasyBase {
    assets: PostAssetsVarianceSample200ApplicationJsonAssets[];
}
export declare class PostAssetsVarianceSampleRequest extends SpeakeasyBase {
    request: PostAssetsVarianceSampleRequestBody;
}
export declare class PostAssetsVarianceSampleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postAssetsVarianceSample200ApplicationJSONObject?: PostAssetsVarianceSample200ApplicationJson;
}
