import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateAccountGroupMappingSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class UpdateAccountGroupMappingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
