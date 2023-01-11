import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DownloadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DownloadRequest extends SpeakeasyBase {
    pathParams: DownloadPathParams;
}
export declare class DownloadResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    download200ApplicationOctetStreamBinaryString?: Uint8Array;
}
