import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetQuoteSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=author" })
  author?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlength" })
  maxlength?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlength" })
  minlength?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=private" })
  private?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sfw" })
  sfw?: boolean;
}


export class GetQuoteSearchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}


export class GetQuoteSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetQuoteSearchQueryParams;

  @SpeakeasyMetadata()
  security: GetQuoteSearchSecurity;
}


export class GetQuoteSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  quoteResponse?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
