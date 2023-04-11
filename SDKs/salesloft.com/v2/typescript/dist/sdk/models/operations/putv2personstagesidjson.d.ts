import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutV2PersonStagesIdJsonRequestBody extends SpeakeasyBase {
    /**
     * The name of the stage.
     */
    name: string;
}
export declare class PutV2PersonStagesIdJsonRequest extends SpeakeasyBase {
    requestBody: PutV2PersonStagesIdJsonRequestBody;
    /**
     * Stage ID
     */
    id: string;
}
export declare class PutV2PersonStagesIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
