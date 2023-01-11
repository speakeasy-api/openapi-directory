import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DownloadFilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dir" })
  dir: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=filename" })
  filename: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subdir" })
  subdir: string;
}


export class DownloadFileQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=download" })
  download?: string;
}


export class DownloadFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DownloadFilePathParams;

  @SpeakeasyMetadata()
  queryParams: DownloadFileQueryParams;
}


export class DownloadFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  downloadFilePdfResponseBody?: Uint8Array;

  @SpeakeasyMetadata()
  downloadFilePngResponseBody?: Uint8Array;

  @SpeakeasyMetadata()
  downloadFileZplResponseBody?: Uint8Array;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;
}
