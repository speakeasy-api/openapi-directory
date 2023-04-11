import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposGetAllTopicsRequest extends SpeakeasyBase {
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
/**
 * Preview header missing
 */
export declare class ReposGetAllTopics415ApplicationJSON extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReposGetAllTopicsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Preview header missing
     */
    reposGetAllTopics415ApplicationJSONObject?: ReposGetAllTopics415ApplicationJSON;
    /**
     * Response
     */
    topic?: shared.Topic;
}
