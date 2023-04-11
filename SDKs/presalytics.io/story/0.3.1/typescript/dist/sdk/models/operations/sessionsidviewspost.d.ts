import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A page view required a page number from the story outline to be created
 */
export declare class SessionsIdViewsPostRequiredParametersToCreateAView extends SpeakeasyBase {
    activeMSecs?: number;
    additional?: string;
    endTime: Date;
    pageNumber: number;
    startTime: Date;
}
export declare class SessionsIdViewsPostRequest extends SpeakeasyBase {
    /**
     * Collaborator user id and permission type
     */
    requestBody: SessionsIdViewsPostRequiredParametersToCreateAView;
    /**
     * The primary key for a view session
     */
    sessionId: string;
}
export declare class SessionsIdViewsPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized
     */
    problemDetail?: shared.ProblemDetail;
    /**
     * A new view object
     */
    view?: shared.View;
}
