import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3OutputAudioConfig } from "./googleclouddialogflowcxv3outputaudioconfig";
import { GoogleCloudDialogflowCxV3QueryInput } from "./googleclouddialogflowcxv3queryinput";
import { GoogleCloudDialogflowCxV3QueryParameters } from "./googleclouddialogflowcxv3queryparameters";
/**
 * The request to detect user's intent.
 */
export declare class GoogleCloudDialogflowCxV3DetectIntentRequest extends SpeakeasyBase {
    /**
     * Instructs the speech synthesizer how to generate the output audio content.
     */
    outputAudioConfig?: GoogleCloudDialogflowCxV3OutputAudioConfig;
    /**
     * Represents the query input. It can contain one of: 1. A conversational query in the form of text. 2. An intent query that specifies which intent to trigger. 3. Natural language speech audio to be processed. 4. An event to be triggered.
     */
    queryInput?: GoogleCloudDialogflowCxV3QueryInput;
    /**
     * Represents the parameters of a conversational query.
     */
    queryParams?: GoogleCloudDialogflowCxV3QueryParameters;
}
