import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3AudioInput } from "./googleclouddialogflowcxv3audioinput";
import { GoogleCloudDialogflowCxV3DtmfInput } from "./googleclouddialogflowcxv3dtmfinput";
import { GoogleCloudDialogflowCxV3EventInput } from "./googleclouddialogflowcxv3eventinput";
import { GoogleCloudDialogflowCxV3IntentInput } from "./googleclouddialogflowcxv3intentinput";
import { GoogleCloudDialogflowCxV3TextInput } from "./googleclouddialogflowcxv3textinput";
/**
 * Represents the query input. It can contain one of: 1. A conversational query in the form of text. 2. An intent query that specifies which intent to trigger. 3. Natural language speech audio to be processed. 4. An event to be triggered.
 */
export declare class GoogleCloudDialogflowCxV3QueryInput extends SpeakeasyBase {
    /**
     * Represents the natural speech audio to be processed.
     */
    audio?: GoogleCloudDialogflowCxV3AudioInput;
    /**
     * Represents the input for dtmf event.
     */
    dtmf?: GoogleCloudDialogflowCxV3DtmfInput;
    /**
     * Represents the event to trigger.
     */
    event?: GoogleCloudDialogflowCxV3EventInput;
    /**
     * Represents the intent to trigger programmatically rather than as a result of natural language processing.
     */
    intent?: GoogleCloudDialogflowCxV3IntentInput;
    /**
     * Required. The language of the input. See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language.
     */
    languageCode?: string;
    /**
     * Represents the natural language text to be processed.
     */
    text?: GoogleCloudDialogflowCxV3TextInput;
}
