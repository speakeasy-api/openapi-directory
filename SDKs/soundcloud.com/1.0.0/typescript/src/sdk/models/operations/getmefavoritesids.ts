import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMeFavoritesIdsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetMeFavoritesIdsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  authHeader: shared.SchemeAuthHeader;
}


export class GetMeFavoritesIdsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMeFavoritesIdsQueryParams;

  @SpeakeasyMetadata()
  security: GetMeFavoritesIdsSecurity;
}


export class GetMeFavoritesIdsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
