import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1AudioInput } from "./googleclouddialogflowcxv3beta1audioinput";
import { GoogleCloudDialogflowCxV3beta1DtmfInput } from "./googleclouddialogflowcxv3beta1dtmfinput";
import { GoogleCloudDialogflowCxV3beta1EventInput } from "./googleclouddialogflowcxv3beta1eventinput";
import { GoogleCloudDialogflowCxV3beta1IntentInput } from "./googleclouddialogflowcxv3beta1intentinput";
import { GoogleCloudDialogflowCxV3beta1TextInput } from "./googleclouddialogflowcxv3beta1textinput";
/**
 * Represents the query input. It can contain one of: 1. A conversational query in the form of text. 2. An intent query that specifies which intent to trigger. 3. Natural language speech audio to be processed. 4. An event to be triggered.
 */
export declare class GoogleCloudDialogflowCxV3beta1QueryInput extends SpeakeasyBase {
    /**
     * Represents the natural speech audio to be processed.
     */
    audio?: GoogleCloudDialogflowCxV3beta1AudioInput;
    /**
     * Represents the input for dtmf event.
     */
    dtmf?: GoogleCloudDialogflowCxV3beta1DtmfInput;
    /**
     * Represents the event to trigger.
     */
    event?: GoogleCloudDialogflowCxV3beta1EventInput;
    /**
     * Represents the intent to trigger programmatically rather than as a result of natural language processing.
     */
    intent?: GoogleCloudDialogflowCxV3beta1IntentInput;
    /**
     * Required. The language of the input. See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language.
     */
    languageCode?: string;
    /**
     * Represents the natural language text to be processed.
     */
    text?: GoogleCloudDialogflowCxV3beta1TextInput;
}
