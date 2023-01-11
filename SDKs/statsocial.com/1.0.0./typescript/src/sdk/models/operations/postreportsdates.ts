import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostReportsDatesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report_hash" })
  reportHash: string;
}


export class PostReportsDatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostReportsDatesQueryParams;
}


export class PostReportsDatesResponse extends SpeakeasyBase {
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
  reportDates?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
