import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ClearUserSessionsRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    userId: string;
}
export declare class ClearUserSessionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
