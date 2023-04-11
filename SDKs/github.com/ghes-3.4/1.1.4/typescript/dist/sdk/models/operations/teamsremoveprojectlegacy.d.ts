import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsRemoveProjectLegacyRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the project.
     */
    projectId: number;
    /**
     * The unique identifier of the team.
     */
    teamId: number;
}
export declare class TeamsRemoveProjectLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
