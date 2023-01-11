import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteApplicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteApplicationPathParams;
}


export class DeleteApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteApplication401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  deleteApplication404ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  deleteApplication405ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  deleteApplication406ApplicationJSONAny?: any;
}
