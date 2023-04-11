import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3QueryInput } from "./googleclouddialogflowcxv3queryinput";
import { GoogleCloudDialogflowCxV3QueryParameters } from "./googleclouddialogflowcxv3queryparameters";
/**
 * Request of MatchIntent.
 */
export declare class GoogleCloudDialogflowCxV3MatchIntentRequest extends SpeakeasyBase {
    /**
     * Persist session parameter changes from `query_params`.
     */
    persistParameterChanges?: boolean;
    /**
     * Represents the query input. It can contain one of: 1. A conversational query in the form of text. 2. An intent query that specifies which intent to trigger. 3. Natural language speech audio to be processed. 4. An event to be triggered.
     */
    queryInput?: GoogleCloudDialogflowCxV3QueryInput;
    /**
     * Represents the parameters of a conversational query.
     */
    queryParams?: GoogleCloudDialogflowCxV3QueryParameters;
}
