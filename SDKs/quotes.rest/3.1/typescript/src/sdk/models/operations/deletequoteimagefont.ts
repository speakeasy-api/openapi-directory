import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteQuoteImageFontQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;
}


export class DeleteQuoteImageFontSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}


export class DeleteQuoteImageFontRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DeleteQuoteImageFontQueryParams;

  @SpeakeasyMetadata()
  security: DeleteQuoteImageFontSecurity;
}


export class DeleteQuoteImageFontResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
