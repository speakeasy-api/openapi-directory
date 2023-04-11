import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteV2PersonStagesIdJsonRequest extends SpeakeasyBase {
    /**
     * Stage ID
     */
    id: string;
}
export declare class DeleteV2PersonStagesIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
