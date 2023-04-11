import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2StepsIdJsonRequest extends SpeakeasyBase {
    /**
     * Step ID
     */
    id: string;
}
export declare class GetV2StepsIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
