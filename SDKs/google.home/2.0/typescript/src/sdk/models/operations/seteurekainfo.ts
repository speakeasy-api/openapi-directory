import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetEurekaInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SetEurekaInfoRequest;
}


export class SetEurekaInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  setEurekaInfo200TextPlainObject?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
