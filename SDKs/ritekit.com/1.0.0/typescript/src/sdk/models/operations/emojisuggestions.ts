import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EmojiSuggestionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text: string;
}


export class EmojiSuggestionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EmojiSuggestionsQueryParams;
}


export class EmojiSuggestionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
