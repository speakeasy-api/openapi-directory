import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message for Versions.CompareVersions.
 */
export declare class GoogleCloudDialogflowCxV3beta1CompareVersionsRequest extends SpeakeasyBase {
    /**
     * The language to compare the flow versions for. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     */
    languageCode?: string;
    /**
     * Required. Name of the target flow version to compare with the base version. Use version ID `0` to indicate the draft version of the specified flow. Format: `projects//locations//agents//flows//versions/`.
     */
    targetVersion?: string;
}
