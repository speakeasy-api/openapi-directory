import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UploadSwaggerSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UploadSwaggerRequestBodySwagger extends SpeakeasyBase {
    content: Uint8Array;
    swagger: string;
}
export declare class UploadSwaggerRequestBody extends SpeakeasyBase {
    /**
     * Swagger file
     */
    swagger?: UploadSwaggerRequestBodySwagger;
}
export declare class UploadSwaggerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
