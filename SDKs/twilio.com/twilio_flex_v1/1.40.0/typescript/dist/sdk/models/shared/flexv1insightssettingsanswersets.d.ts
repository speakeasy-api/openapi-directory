import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class FlexV1InsightsSettingsAnswersets extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Insights resource and owns this resource.
     */
    accountSid?: string;
    /**
     * The list of answer set categories
     */
    answerSetCategories?: any;
    /**
     * The lis of answer sets
     */
    answerSets?: any;
    /**
     * The details for not applicable answer set
     */
    notApplicable?: any;
    url?: string;
}
