import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostReportsStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report_hash" })
  reportHash: string;
}


export class PostReportsStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostReportsStatusQueryParams;
}


export class PostReportsStatusResponse extends SpeakeasyBase {
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
  reportStatus?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
