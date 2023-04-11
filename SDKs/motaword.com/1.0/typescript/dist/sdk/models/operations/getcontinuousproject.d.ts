import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContinuousProjectRequest extends SpeakeasyBase {
    /**
     * Continuous Project ID
     */
    id: number;
}
export declare class GetContinuousProjectResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ContinuousProject model
     */
    continuousProject?: shared.ContinuousProject;
    /**
     * ProjectNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
