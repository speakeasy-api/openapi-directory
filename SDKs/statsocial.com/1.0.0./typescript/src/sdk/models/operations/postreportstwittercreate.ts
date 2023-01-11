import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostReportsTwitterCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=twitter_handle" })
  twitterHandle?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=twitter_id" })
  twitterId?: number;
}


export class PostReportsTwitterCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostReportsTwitterCreateQueryParams;
}


export class PostReportsTwitterCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fourHundredError?: any;

  @SpeakeasyMetadata()
  fourHundredAndOneError?: any;

  @SpeakeasyMetadata()
  fourHundredAndThreeError?: any;

  @SpeakeasyMetadata()
  fiveHundredError?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createTwitter?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
