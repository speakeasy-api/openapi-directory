import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetQuoteImageBackgroundListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetQuoteImageBackgroundListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}


export class GetQuoteImageBackgroundListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetQuoteImageBackgroundListQueryParams;

  @SpeakeasyMetadata()
  security: GetQuoteImageBackgroundListSecurity;
}


export class GetQuoteImageBackgroundListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
