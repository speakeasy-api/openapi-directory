import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class QrCodeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=bg-color;" })
  bgColor?: string;

  @SpeakeasyMetadata({ data: "form, name=content;" })
  content: string;

  @SpeakeasyMetadata({ data: "form, name=fg-color;" })
  fgColor?: string;

  @SpeakeasyMetadata({ data: "form, name=height;" })
  height?: number;

  @SpeakeasyMetadata({ data: "form, name=width;" })
  width?: number;
}


export class QrCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: QrCodeRequestBody;
}


export class QrCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  qrCode200ApplicationJSONBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
