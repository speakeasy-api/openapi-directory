import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetReportsStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report_hash" })
  reportHash: string;
}


export class GetReportsStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReportsStatusQueryParams;
}


export class GetReportsStatusResponse extends SpeakeasyBase {
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
