import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListPlatformRegionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platformId" })
  platformId: string;
}


export class ListPlatformRegionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=aliases" })
  aliases?: boolean;
}


export class ListPlatformRegionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class ListPlatformRegionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListPlatformRegionsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListPlatformRegionsQueryParams;

  @SpeakeasyMetadata()
  security: ListPlatformRegionsSecurity;
}


export class ListPlatformRegionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listPlatformRegions200ApplicationJSONObject?: Record<string, any>;
}
