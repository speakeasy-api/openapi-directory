import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetApplicationsStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key: string;
}


export class GetApplicationsStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApplicationsStatusQueryParams;
}


export class GetApplicationsStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fourHundredError?: any;

  @SpeakeasyMetadata()
  fourHundredAndOneError?: any;

  @SpeakeasyMetadata()
  fourHundredAndThreeError?: any;

  @SpeakeasyMetadata()
  fiveHundredError?: any;

  @SpeakeasyMetadata()
  applicationStatus?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
