import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetEqualizerValuesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SetEqualizerValuesRequest;
}


export class SetEqualizerValuesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  setEqualizerValues200TextPlainObject?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
