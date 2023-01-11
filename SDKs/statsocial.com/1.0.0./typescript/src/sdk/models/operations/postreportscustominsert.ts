import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostReportsCustomInsertQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ids" })
  ids: any[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_hash" })
  uploadHash: string;
}


export class PostReportsCustomInsertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostReportsCustomInsertQueryParams;
}


export class PostReportsCustomInsertResponse extends SpeakeasyBase {
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
