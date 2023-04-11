import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2AccountStagesIdJsonRequest extends SpeakeasyBase {
    /**
     * Account Stage ID
     */
    id: string;
}
export declare class GetV2AccountStagesIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
