import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DisconnectInsurerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  disconnectInsurerResponseBody?: Record<string, any>;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;
}
