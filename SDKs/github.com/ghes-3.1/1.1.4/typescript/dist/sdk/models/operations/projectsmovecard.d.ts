import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProjectsMoveCardRequestBody extends SpeakeasyBase {
    /**
     * The unique identifier of the column the card should be moved to
     */
    columnId?: number;
    /**
     * The position of the card in a column. Can be one of: `top`, `bottom`, or `after:<card_id>` to place after the specified card.
     */
    position: string;
}
export declare class ProjectsMoveCardRequest extends SpeakeasyBase {
    requestBody: ProjectsMoveCardRequestBody;
    /**
     * The unique identifier of the card.
     */
    cardId: number;
}
export declare class ProjectsMoveCard503ApplicationJSONErrors extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * Response
 */
export declare class ProjectsMoveCard503ApplicationJSON extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    errors?: ProjectsMoveCard503ApplicationJSONErrors[];
    message?: string;
}
export declare class ProjectsMoveCard403ApplicationJSONErrors extends SpeakeasyBase {
    code?: string;
    field?: string;
    message?: string;
    resource?: string;
}
/**
 * Forbidden
 */
export declare class ProjectsMoveCard403ApplicationJSON extends SpeakeasyBase {
    documentationUrl?: string;
    errors?: ProjectsMoveCard403ApplicationJSONErrors[];
    message?: string;
}
export declare class ProjectsMoveCardResponse extends SpeakeasyBase {
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
    projectsMoveCard201ApplicationJSONObject?: Record<string, any>;
    /**
     * Forbidden
     */
    projectsMoveCard403ApplicationJSONObject?: ProjectsMoveCard403ApplicationJSON;
    /**
     * Response
     */
    projectsMoveCard503ApplicationJSONObject?: ProjectsMoveCard503ApplicationJSON;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
