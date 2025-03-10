import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposReplaceAllTopicsRequestBody extends SpeakeasyBase {
    /**
     * An array of topics to add to the repository. Pass one or more topics to _replace_ the set of existing topics. Send an empty array (`[]`) to clear all topics from the repository. **Note:** Topic `names` cannot contain uppercase letters.
     */
    names: string[];
}
export declare class ReposReplaceAllTopicsRequest extends SpeakeasyBase {
    requestBody: ReposReplaceAllTopicsRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReposReplaceAllTopicsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    topic?: shared.Topic;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
