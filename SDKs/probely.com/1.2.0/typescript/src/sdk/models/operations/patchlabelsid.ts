import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchLabelsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatchLabelsId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchLabelsId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchLabelsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchLabelsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.LabelInput;
}


export class PatchLabelsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  label?: shared.Label;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  patchLabelsId401ApplicationJSONObject?: PatchLabelsId401ApplicationJson;

  @SpeakeasyMetadata()
  patchLabelsId404ApplicationJSONObject?: PatchLabelsId404ApplicationJson;
}
