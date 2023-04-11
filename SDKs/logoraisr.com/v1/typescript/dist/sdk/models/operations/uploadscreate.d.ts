import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UploadsCreateRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class UploadsCreateRequestBody extends SpeakeasyBase {
    /**
     * File which should be uploaded. Supported file types are: JPEG and PNG
     */
    file: UploadsCreateRequestBodyFile;
}
export declare class UploadsCreateResponse extends SpeakeasyBase {
    contentType: string;
    fileResponse?: shared.FileResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
