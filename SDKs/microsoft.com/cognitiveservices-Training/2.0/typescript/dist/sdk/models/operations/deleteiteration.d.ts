import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteIterationRequest extends SpeakeasyBase {
    trainingKey: string;
    /**
     * The iteration id
     */
    iterationId: string;
    /**
     * The project id
     */
    projectId: string;
}
export declare class DeleteIterationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
