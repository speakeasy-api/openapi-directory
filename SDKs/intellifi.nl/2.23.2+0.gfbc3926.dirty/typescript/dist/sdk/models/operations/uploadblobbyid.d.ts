import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UploadBlobByIdRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class UploadBlobByIdRequestBody extends SpeakeasyBase {
    file?: UploadBlobByIdRequestBodyFile;
}
export declare class UploadBlobByIdRequest extends SpeakeasyBase {
    requestBody?: UploadBlobByIdRequestBody;
    /**
     * Unique identifier
     */
    id: string;
}
export declare class UploadBlobByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
