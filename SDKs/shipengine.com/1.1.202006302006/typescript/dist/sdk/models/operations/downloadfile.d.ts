import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DownloadFilePathParams extends SpeakeasyBase {
    dir: string;
    filename: string;
    subdir: string;
}
export declare class DownloadFileQueryParams extends SpeakeasyBase {
    download?: string;
}
export declare class DownloadFileRequest extends SpeakeasyBase {
    pathParams: DownloadFilePathParams;
    queryParams: DownloadFileQueryParams;
}
export declare class DownloadFileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    downloadFilePdfResponseBody?: Uint8Array;
    downloadFilePngResponseBody?: Uint8Array;
    downloadFileZplResponseBody?: Uint8Array;
    errorResponseBody?: shared.ErrorResponseBody;
}
