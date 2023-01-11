import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class HtmlCleanRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=content;" })
  content: string;

  @SpeakeasyMetadata({ data: "form, name=output-type;" })
  outputType: string;
}


export class HtmlCleanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: HtmlCleanRequestBody;
}


export class HtmlCleanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  htmlClean200ApplicationJSONBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
