import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ResetFactorsRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    userId: string;
}
export declare class ResetFactorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
