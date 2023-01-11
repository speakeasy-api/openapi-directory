import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HashtagsCleanerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=post" })
  post: string;
}


export class HashtagsCleanerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: HashtagsCleanerQueryParams;
}


export class HashtagsCleanerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
