import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConnectInsurerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ConnectInsurerRequestBody;
}


export class ConnectInsurerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  connectInsurerResponseBody?: Record<string, any>;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;
}
