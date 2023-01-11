import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostQshowQuotesRemoveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quoteid" })
  quoteid: string;
}


export class PostQshowQuotesRemoveSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}


export class PostQshowQuotesRemoveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostQshowQuotesRemoveQueryParams;

  @SpeakeasyMetadata()
  security: PostQshowQuotesRemoveSecurity;
}


export class PostQshowQuotesRemoveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
