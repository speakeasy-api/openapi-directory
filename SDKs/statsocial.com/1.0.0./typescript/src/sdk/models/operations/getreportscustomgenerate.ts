import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetReportsCustomGenerateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report_name" })
  reportName: string;
}


export class GetReportsCustomGenerateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReportsCustomGenerateQueryParams;
}


export class GetReportsCustomGenerateResponse extends SpeakeasyBase {
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
  customGenerate?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
