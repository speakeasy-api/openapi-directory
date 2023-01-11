import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HashtagSuggestionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text: string;
}


export class HashtagSuggestionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: HashtagSuggestionsQueryParams;
}


export class HashtagSuggestionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
