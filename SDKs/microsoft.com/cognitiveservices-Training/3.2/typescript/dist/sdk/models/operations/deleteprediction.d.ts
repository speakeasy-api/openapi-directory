import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletePredictionRequest extends SpeakeasyBase {
    /**
     * The prediction ids. Limited to 64.
     */
    ids: string[];
    /**
     * The project id.
     */
    projectId: string;
}
export declare class DeletePredictionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
