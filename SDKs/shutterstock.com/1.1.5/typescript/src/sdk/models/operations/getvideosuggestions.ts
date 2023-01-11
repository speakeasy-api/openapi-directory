import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVideoSuggestionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class GetVideoSuggestionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class GetVideoSuggestionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetVideoSuggestionsQueryParams;

  @SpeakeasyMetadata()
  security: GetVideoSuggestionsSecurity;
}


export class GetVideoSuggestionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  suggestions?: shared.Suggestions;
}
