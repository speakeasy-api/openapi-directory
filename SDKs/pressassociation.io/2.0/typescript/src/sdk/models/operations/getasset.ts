import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAssetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assetId" })
  assetId: string;
}


export class GetAssetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=aliases" })
  aliases?: boolean;
}


export class GetAssetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class GetAssetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAssetPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAssetQueryParams;

  @SpeakeasyMetadata()
  security: GetAssetSecurity;
}


export class GetAssetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAsset200ApplicationJSONObject?: Record<string, any>;
}
