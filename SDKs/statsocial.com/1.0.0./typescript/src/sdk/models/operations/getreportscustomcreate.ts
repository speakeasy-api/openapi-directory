import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetReportsCustomCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_hash" })
  uploadHash: string;
}


export class GetReportsCustomCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReportsCustomCreateQueryParams;
}


export class GetReportsCustomCreateResponse extends SpeakeasyBase {
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
