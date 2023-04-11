import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersUserEmailProgressRequest extends SpeakeasyBase {
    /**
     * user's email
     */
    userEmail: string;
}
export declare class GetUsersUserEmailProgressResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    /**
     * Learner Progress
     */
    learnerResponse?: shared.LearnerResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
