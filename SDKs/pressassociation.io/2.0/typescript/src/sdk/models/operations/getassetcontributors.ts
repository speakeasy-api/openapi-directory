import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAssetContributorsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assetId" })
  assetId: string;
}


export class GetAssetContributorsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=aliases" })
  aliases?: boolean;
}


export class GetAssetContributorsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class GetAssetContributorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAssetContributorsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAssetContributorsQueryParams;

  @SpeakeasyMetadata()
  security: GetAssetContributorsSecurity;
}


export class GetAssetContributorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAssetContributors200ApplicationJSONObject?: Record<string, any>;
}
