import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutQuoteDislikeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quote_id" })
  quoteId: string;
}


export class PutQuoteDislikeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}


export class PutQuoteDislikeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PutQuoteDislikeQueryParams;

  @SpeakeasyMetadata()
  security: PutQuoteDislikeSecurity;
}


export class PutQuoteDislikeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
