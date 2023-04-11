import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2PersonStagesIdJsonRequest extends SpeakeasyBase {
    /**
     * Stage ID
     */
    id: string;
}
export declare class GetV2PersonStagesIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
