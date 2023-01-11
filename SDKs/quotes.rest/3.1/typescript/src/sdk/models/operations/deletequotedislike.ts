import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteQuoteDislikeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quote_id" })
  quoteId: string;
}


export class DeleteQuoteDislikeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}


export class DeleteQuoteDislikeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DeleteQuoteDislikeQueryParams;

  @SpeakeasyMetadata()
  security: DeleteQuoteDislikeSecurity;
}


export class DeleteQuoteDislikeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
