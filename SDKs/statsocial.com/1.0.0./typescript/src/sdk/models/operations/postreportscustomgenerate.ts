import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostReportsCustomGenerateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report_name" })
  reportName: string;
}


export class PostReportsCustomGenerateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostReportsCustomGenerateQueryParams;
}


export class PostReportsCustomGenerateResponse extends SpeakeasyBase {
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
