import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteProjectRequest extends SpeakeasyBase {
    /**
     * API key.
     */
    trainingKey: string;
    /**
     * The project id.
     */
    projectId: string;
}
export declare class DeleteProjectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
