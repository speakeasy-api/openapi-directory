import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAssetsVarianceSampleRequestBodyAssets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetReturns" })
  assetReturns: number[];
}


export class PostAssetsVarianceSampleRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsVarianceSampleRequestBodyAssets })
  assets: PostAssetsVarianceSampleRequestBodyAssets[];
}


export class PostAssetsVarianceSample200ApplicationJsonAssets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetVariance" })
  assetVariance: number;
}


export class PostAssetsVarianceSample200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsVarianceSample200ApplicationJsonAssets })
  assets: PostAssetsVarianceSample200ApplicationJsonAssets[];
}


export class PostAssetsVarianceSampleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostAssetsVarianceSampleRequestBody;
}


export class PostAssetsVarianceSampleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postAssetsVarianceSample200ApplicationJSONObject?: PostAssetsVarianceSample200ApplicationJson;
}
