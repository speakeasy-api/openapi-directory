import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListPlatformsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=aliases" })
  aliases?: boolean;
}


export class ListPlatformsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class ListPlatformsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListPlatformsQueryParams;

  @SpeakeasyMetadata()
  security: ListPlatformsSecurity;
}


export class ListPlatformsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listPlatforms200ApplicationJSONObject?: Record<string, any>;
}
