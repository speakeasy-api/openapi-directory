import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetReportsCustomInsertQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ids" })
  ids: any[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_hash" })
  uploadHash: string;
}


export class GetReportsCustomInsertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReportsCustomInsertQueryParams;
}


export class GetReportsCustomInsertResponse extends SpeakeasyBase {
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
  customInsert?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
