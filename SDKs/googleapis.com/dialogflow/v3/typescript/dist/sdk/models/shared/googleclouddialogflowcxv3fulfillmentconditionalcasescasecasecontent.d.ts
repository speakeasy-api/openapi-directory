import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3FulfillmentConditionalCases } from "./googleclouddialogflowcxv3fulfillmentconditionalcases";
import { GoogleCloudDialogflowCxV3ResponseMessage, GoogleCloudDialogflowCxV3ResponseMessageInput } from "./googleclouddialogflowcxv3responsemessage";
/**
 * The list of messages or conditional cases to activate for this case.
 */
export declare class GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent extends SpeakeasyBase {
    /**
     * A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
     */
    additionalCases?: GoogleCloudDialogflowCxV3FulfillmentConditionalCases;
    /**
     * Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard.
     */
    message?: GoogleCloudDialogflowCxV3ResponseMessage;
}
/**
 * The list of messages or conditional cases to activate for this case.
 */
export declare class GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContentInput extends SpeakeasyBase {
    /**
     * A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
     */
    additionalCases?: GoogleCloudDialogflowCxV3FulfillmentConditionalCases;
    /**
     * Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard.
     */
    message?: GoogleCloudDialogflowCxV3ResponseMessageInput;
}
