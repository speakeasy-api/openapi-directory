import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetQuoteImageFontSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class GetQuoteImageFontSearchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}


export class GetQuoteImageFontSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetQuoteImageFontSearchQueryParams;

  @SpeakeasyMetadata()
  security: GetQuoteImageFontSearchSecurity;
}


export class GetQuoteImageFontSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
