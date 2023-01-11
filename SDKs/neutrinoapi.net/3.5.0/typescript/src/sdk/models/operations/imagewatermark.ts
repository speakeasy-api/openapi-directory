import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImageWatermarkRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=format;" })
  format?: string;

  @SpeakeasyMetadata({ data: "form, name=height;" })
  height?: number;

  @SpeakeasyMetadata({ data: "form, name=image-url;" })
  imageUrl: string;

  @SpeakeasyMetadata({ data: "form, name=opacity;" })
  opacity?: number;

  @SpeakeasyMetadata({ data: "form, name=position;" })
  position?: string;

  @SpeakeasyMetadata({ data: "form, name=watermark-url;" })
  watermarkUrl: string;

  @SpeakeasyMetadata({ data: "form, name=width;" })
  width?: number;
}


export class ImageWatermarkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: ImageWatermarkRequestBody;
}


export class ImageWatermarkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imageWatermark200ApplicationJSONBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
