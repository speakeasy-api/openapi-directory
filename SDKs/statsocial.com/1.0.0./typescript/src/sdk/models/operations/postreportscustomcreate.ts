import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostReportsCustomCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_hash" })
  uploadHash: string;
}


export class PostReportsCustomCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostReportsCustomCreateQueryParams;
}


export class PostReportsCustomCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fourHundredError?: any;

  @SpeakeasyMetadata()
  fourHundredAndOneError?: any;

  @SpeakeasyMetadata()
  fourHundredAndThreeError?: any;

  @SpeakeasyMetadata()
  fourHundredAndFourError?: any;

  @SpeakeasyMetadata()
  fiveHundredError?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customCreate?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
