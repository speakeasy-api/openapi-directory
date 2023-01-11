import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ForgetpaireddeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ForgetpaireddeviceRequest;
}


export class ForgetpaireddeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  forgetpaireddevice200TextPlainObject?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
