import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DownloadAsyncQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=async_request_key" })
  asyncRequestKey: string;
}


export class DownloadAsyncRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DownloadAsyncQueryParams;
}


export class DownloadAsyncResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  downloadAsync200ApplicationOctetStreamBinaryString?: Uint8Array;
}
