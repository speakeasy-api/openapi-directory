import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostQuoteDislikeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quote_id" })
  quoteId: string;
}


export class PostQuoteDislikeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}


export class PostQuoteDislikeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostQuoteDislikeQueryParams;

  @SpeakeasyMetadata()
  security: PostQuoteDislikeSecurity;
}


export class PostQuoteDislikeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
