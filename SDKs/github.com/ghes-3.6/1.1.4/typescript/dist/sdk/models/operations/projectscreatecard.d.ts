import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProjectsCreateCardRequestBody2 extends SpeakeasyBase {
    /**
     * The unique identifier of the content associated with the card
     */
    contentId: number;
    /**
     * The piece of content associated with the card
     */
    contentType: string;
}
export declare class ProjectsCreateCardRequestBody1 extends SpeakeasyBase {
    /**
     * The project card's note
     */
    note: string;
}
export declare class ProjectsCreateCardRequest extends SpeakeasyBase {
    requestBody: any;
    /**
     * The unique identifier of the column.
     */
    columnId: number;
}
export declare class ProjectsCreateCard503ApplicationJSONErrors extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * Response
 */
export declare class ProjectsCreateCard503ApplicationJSON extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    errors?: ProjectsCreateCard503ApplicationJSONErrors[];
    message?: string;
}
export declare class ProjectsCreateCardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    projectCard?: shared.ProjectCard;
    /**
     * Validation failed
     */
    projectsCreateCard422ApplicationJSONOneOf?: any;
    /**
     * Response
     */
    projectsCreateCard503ApplicationJSONObject?: ProjectsCreateCard503ApplicationJSON;
}
