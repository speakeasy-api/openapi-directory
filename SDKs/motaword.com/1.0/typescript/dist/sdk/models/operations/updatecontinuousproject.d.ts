import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateContinuousProjectRequest extends SpeakeasyBase {
    continuousProjectUpdateContent?: shared.ContinuousProjectUpdateContent;
    /**
     * Continuous project ID
     */
    id: number;
}
export declare class UpdateContinuousProjectResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Update continuous project operation status
     */
    continuousProject?: shared.ContinuousProject;
    /**
     * ProjectNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
