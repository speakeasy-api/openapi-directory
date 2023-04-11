import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostV2PersonStagesJsonRequestBody extends SpeakeasyBase {
    /**
     * The name of the new stage
     */
    name: string;
}
export declare class PostV2PersonStagesJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
