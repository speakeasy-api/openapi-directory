import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2ActionDetailsCallInstructionsIdJsonRequest extends SpeakeasyBase {
    /**
     * Call instructions ID
     */
    id: string;
}
export declare class GetV2ActionDetailsCallInstructionsIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
