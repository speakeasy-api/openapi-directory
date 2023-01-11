import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RecognizeTextQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mode" })
  mode: shared.TextRecognitionModeEnum;
}


export class RecognizeTextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RecognizeTextQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ImageUrl;
}


export class RecognizeTextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  computerVisionError?: shared.ComputerVisionError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
