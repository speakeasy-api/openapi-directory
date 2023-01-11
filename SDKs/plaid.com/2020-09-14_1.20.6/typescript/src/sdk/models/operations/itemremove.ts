import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ItemRemoveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ItemRemoveRequest;
}


export class ItemRemoveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: Record<string, any>;

  @SpeakeasyMetadata()
  itemRemoveResponse?: Record<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
