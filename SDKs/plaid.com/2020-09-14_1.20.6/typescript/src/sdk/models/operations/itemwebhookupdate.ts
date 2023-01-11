import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ItemWebhookUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ItemWebhookUpdateRequest;
}


export class ItemWebhookUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itemWebhookUpdateResponse?: Record<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
