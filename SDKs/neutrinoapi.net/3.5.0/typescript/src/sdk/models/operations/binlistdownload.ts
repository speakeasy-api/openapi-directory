import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BinListDownloadRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=include-8digit;" })
  include8digit?: boolean;

  @SpeakeasyMetadata({ data: "form, name=include-iso3;" })
  includeIso3?: boolean;
}


export class BinListDownloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: BinListDownloadRequestBody;
}


export class BinListDownloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  binListDownload200ApplicationJSONBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
