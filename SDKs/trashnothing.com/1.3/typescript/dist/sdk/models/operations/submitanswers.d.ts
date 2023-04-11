import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SubmitAnswersRequest extends SpeakeasyBase {
    /**
     * A JSON object mapping each question from the group membership.questionnaire.questions field to an answer (eg. {"Where do you live?": "New York City"} ). All questions are required so no null or empty string answers are allowed.
     *
     * @remarks
     *
     */
    requestBody: Record<string, string>;
    /**
     * The group ID of the group that the user is submitting answers for.
     */
    groupId: string;
}
export declare class SubmitAnswersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The updated group.
     */
    group?: shared.Group;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
