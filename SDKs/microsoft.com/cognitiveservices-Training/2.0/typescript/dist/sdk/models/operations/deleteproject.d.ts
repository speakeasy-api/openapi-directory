import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteProjectRequest extends SpeakeasyBase {
    trainingKey: string;
    /**
     * The project id
     */
    projectId: string;
}
export declare class DeleteProjectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
