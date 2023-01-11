import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostReportsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=baseline" })
  baseline?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report_date" })
  reportDate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report_hash" })
  reportHash: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sample" })
  sample: number;
}


export class PostReportsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostReportsQueryParams;
}


export class PostReportsResponse extends SpeakeasyBase {
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
  reportSuccess?: shared.ReportSuccess;

  @SpeakeasyMetadata()
  statusCode: number;
}
