import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases } from "./googleclouddialogflowcxv3beta1fulfillmentconditionalcases";
import { GoogleCloudDialogflowCxV3beta1ResponseMessage, GoogleCloudDialogflowCxV3beta1ResponseMessageInput } from "./googleclouddialogflowcxv3beta1responsemessage";
/**
 * The list of messages or conditional cases to activate for this case.
 */
export declare class GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent extends SpeakeasyBase {
    /**
     * A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
     */
    additionalCases?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases;
    /**
     * Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard.
     */
    message?: GoogleCloudDialogflowCxV3beta1ResponseMessage;
}
/**
 * The list of messages or conditional cases to activate for this case.
 */
export declare class GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContentInput extends SpeakeasyBase {
    /**
     * A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
     */
    additionalCases?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases;
    /**
     * Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard.
     */
    message?: GoogleCloudDialogflowCxV3beta1ResponseMessageInput;
}
