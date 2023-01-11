import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetReportsDatesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report_hash" })
  reportHash: string;
}


export class GetReportsDatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReportsDatesQueryParams;
}


export class GetReportsDatesResponse extends SpeakeasyBase {
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
