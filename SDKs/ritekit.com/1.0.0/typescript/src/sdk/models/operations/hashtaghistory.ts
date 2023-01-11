import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HashtagHistoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=hashtag" })
  hashtag: string;
}


export class HashtagHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: HashtagHistoryPathParams;
}


export class HashtagHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
