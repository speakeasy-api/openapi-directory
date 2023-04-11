import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProjectsGetCardRequest extends SpeakeasyBase {
    /**
     * card_id parameter
     */
    cardId: number;
}
export declare class ProjectsGetCardResponse extends SpeakeasyBase {
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
}
