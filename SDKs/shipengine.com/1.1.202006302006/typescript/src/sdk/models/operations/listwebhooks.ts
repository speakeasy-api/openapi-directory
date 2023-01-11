import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListWebhooksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;

  @SpeakeasyMetadata({ elemType: shared.Webhook })
  listWebhooksResponseBody?: shared.Webhook[];
}
