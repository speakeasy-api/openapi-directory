import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Dataset metadata that is specific to translation.
 */
export declare class TranslationDatasetMetadata extends SpeakeasyBase {
    /**
     * Required. The BCP-47 language code of the source language.
     */
    sourceLanguageCode?: string;
    /**
     * Required. The BCP-47 language code of the target language.
     */
    targetLanguageCode?: string;
}
