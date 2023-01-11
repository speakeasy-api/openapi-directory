import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostQshowQuotesAddQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quoteid" })
  quoteid: string;
}


export class PostQshowQuotesAddSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}


export class PostQshowQuotesAddRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostQshowQuotesAddQueryParams;

  @SpeakeasyMetadata()
  security: PostQshowQuotesAddSecurity;
}


export class PostQshowQuotesAddResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
