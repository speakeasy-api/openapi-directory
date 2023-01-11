import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetQuoteImageFontListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetQuoteImageFontListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}


export class GetQuoteImageFontListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetQuoteImageFontListQueryParams;

  @SpeakeasyMetadata()
  security: GetQuoteImageFontListSecurity;
}


export class GetQuoteImageFontListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
