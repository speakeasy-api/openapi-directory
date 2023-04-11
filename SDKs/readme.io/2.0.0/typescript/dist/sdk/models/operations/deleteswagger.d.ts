import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSwaggerSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSwaggerRequest extends SpeakeasyBase {
    /**
     * ID of swagger the file
     */
    id: string;
}
export declare class DeleteSwaggerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
