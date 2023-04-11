import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateSwaggerSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateSwaggerRequestBodySwagger extends SpeakeasyBase {
    content: Uint8Array;
    swagger: string;
}
export declare class UpdateSwaggerRequestBody extends SpeakeasyBase {
    /**
     * Swagger file
     */
    swagger?: UpdateSwaggerRequestBodySwagger;
}
export declare class UpdateSwaggerRequest extends SpeakeasyBase {
    requestBody: UpdateSwaggerRequestBody;
    /**
     * ID of the Swagger file
     */
    id: string;
}
export declare class UpdateSwaggerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
