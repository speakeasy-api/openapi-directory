import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetReportsTweetCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report_name" })
  reportName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=terms" })
  terms: string;
}


export class GetReportsTweetCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReportsTweetCreateQueryParams;
}


export class GetReportsTweetCreateResponse extends SpeakeasyBase {
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
  createTweet?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
