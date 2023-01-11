import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetQuoteRandomQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetQuoteRandomSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}


export class GetQuoteRandomRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetQuoteRandomQueryParams;

  @SpeakeasyMetadata()
  security: GetQuoteRandomSecurity;
}


export class GetQuoteRandomResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  quoteResponse?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
