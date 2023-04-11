import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProjectsUpdateCardRequestBody extends SpeakeasyBase {
    /**
     * Whether or not the card is archived
     */
    archived?: boolean;
    /**
     * The project card's note
     */
    note?: string;
}
export declare class ProjectsUpdateCardRequest extends SpeakeasyBase {
    requestBody?: ProjectsUpdateCardRequestBody;
    /**
     * The unique identifier of the card.
     */
    cardId: number;
}
export declare class ProjectsUpdateCardResponse extends SpeakeasyBase {
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
    validationErrorSimple?: shared.ValidationErrorSimple;
}
