import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DownloadLanguagePathParams extends SpeakeasyBase {
    id: number;
    language: string;
}
export declare class DownloadLanguageRequest extends SpeakeasyBase {
    pathParams: DownloadLanguagePathParams;
}
export declare class DownloadLanguageResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    downloadLanguage200ApplicationOctetStreamBinaryString?: Uint8Array;
}
