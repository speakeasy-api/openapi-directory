import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateLabelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateLabelRequestBodyInput;
}


export class CreateLabelResponseOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createLabelResponseBody?: shared.CreateLabelResponseBodyOutput;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;
}
