import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetReportsTwitterCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=twitter_handle" })
  twitterHandle?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=twitter_id" })
  twitterId?: number;
}


export class GetReportsTwitterCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReportsTwitterCreateQueryParams;
}


export class GetReportsTwitterCreateResponse extends SpeakeasyBase {
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
