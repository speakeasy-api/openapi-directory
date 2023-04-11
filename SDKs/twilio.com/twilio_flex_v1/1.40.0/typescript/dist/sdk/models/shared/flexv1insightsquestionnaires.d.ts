import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class FlexV1InsightsQuestionnaires extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Insights resource and owns this resource.
     */
    accountSid?: string;
    /**
     * The flag to enable or disable questionnaire
     */
    active?: boolean;
    /**
     * The description of this questionnaire
     */
    description?: string;
    /**
     * The unique id of this questionnaire
     */
    id?: string;
    /**
     * The name of this category.
     */
    name?: string;
    /**
     * The list of questions with category for a questionnaire
     */
    questions?: any[];
    url?: string;
}
