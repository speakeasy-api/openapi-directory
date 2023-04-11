import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2TasksIdJsonRequest extends SpeakeasyBase {
    /**
     * Task ID
     */
    id: string;
}
export declare class GetV2TasksIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
