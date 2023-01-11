import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutQuoteLikeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quote_id" })
  quoteId: string;
}


export class PutQuoteLikeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}


export class PutQuoteLikeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PutQuoteLikeQueryParams;

  @SpeakeasyMetadata()
  security: PutQuoteLikeSecurity;
}


export class PutQuoteLikeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
