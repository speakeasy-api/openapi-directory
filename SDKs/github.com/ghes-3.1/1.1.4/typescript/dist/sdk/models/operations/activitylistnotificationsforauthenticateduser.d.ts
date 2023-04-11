import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActivityListNotificationsForAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * If `true`, show notifications marked as read.
     */
    all?: boolean;
    /**
     * Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    before?: Date;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * If `true`, only shows notifications in which the user is directly participating or mentioned.
     */
    participating?: boolean;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    since?: Date;
}
export declare class ActivityListNotificationsForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    threads?: shared.Thread[];
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
