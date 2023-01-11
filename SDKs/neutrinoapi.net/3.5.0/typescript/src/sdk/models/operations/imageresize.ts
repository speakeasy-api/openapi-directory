import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImageResizeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=format;" })
  format?: string;

  @SpeakeasyMetadata({ data: "form, name=height;" })
  height: number;

  @SpeakeasyMetadata({ data: "form, name=image-url;" })
  imageUrl: string;

  @SpeakeasyMetadata({ data: "form, name=width;" })
  width: number;
}


export class ImageResizeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: ImageResizeRequestBody;
}


export class ImageResizeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imageResize200ApplicationJSONBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
