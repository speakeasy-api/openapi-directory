import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateAccountGroupMappingSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class CreateAccountGroupMappingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
