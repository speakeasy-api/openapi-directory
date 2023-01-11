import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteLabelsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteLabelsId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class DeleteLabelsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteLabelsIdPathParams;
}


export class DeleteLabelsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteLabelsId401ApplicationJSONObject?: DeleteLabelsId401ApplicationJson;
}
