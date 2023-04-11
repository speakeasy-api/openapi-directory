import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class FlexV1InsightsQuestionnairesQuestion extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Insights resource and owns this resource.
     */
    accountSid?: string;
    /**
     * The flag  to enable for disable NA for answer.
     */
    allowNa?: boolean;
    /**
     * Set of answers for the question
     */
    answerSet?: any;
    /**
     * The answer_set for the question.
     */
    answerSetId?: string;
    /**
     * The Category for the question.
     */
    category?: any;
    /**
     * The description for the question.
     */
    description?: string;
    /**
     * The question.
     */
    question?: string;
    /**
     * The unique ID of the question
     */
    questionId?: string;
    url?: string;
    /**
     * Integer value that tells a particular question is used by how many questionnaires
     */
    usage?: number;
}
