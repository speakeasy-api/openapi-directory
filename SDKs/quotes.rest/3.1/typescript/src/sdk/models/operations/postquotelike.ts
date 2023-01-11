import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostQuoteLikeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quote_id" })
  quoteId: string;
}


export class PostQuoteLikeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}


export class PostQuoteLikeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostQuoteLikeQueryParams;

  @SpeakeasyMetadata()
  security: PostQuoteLikeSecurity;
}


export class PostQuoteLikeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
