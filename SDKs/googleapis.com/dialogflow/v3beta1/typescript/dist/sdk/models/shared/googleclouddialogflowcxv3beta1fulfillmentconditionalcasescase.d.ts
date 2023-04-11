import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent, GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContentInput } from "./googleclouddialogflowcxv3beta1fulfillmentconditionalcasescasecasecontent";
/**
 * Each case has a Boolean condition. When it is evaluated to be True, the corresponding messages will be selected and evaluated recursively.
 */
export declare class GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase extends SpeakeasyBase {
    /**
     * A list of case content.
     */
    caseContent?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent[];
    /**
     * The condition to activate and select this case. Empty means the condition is always true. The condition is evaluated against form parameters or session parameters. See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition).
     */
    condition?: string;
}
/**
 * Each case has a Boolean condition. When it is evaluated to be True, the corresponding messages will be selected and evaluated recursively.
 */
export declare class GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseInput extends SpeakeasyBase {
    /**
     * A list of case content.
     */
    caseContent?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContentInput[];
    /**
     * The condition to activate and select this case. Empty means the condition is always true. The condition is evaluated against form parameters or session parameters. See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition).
     */
    condition?: string;
}
