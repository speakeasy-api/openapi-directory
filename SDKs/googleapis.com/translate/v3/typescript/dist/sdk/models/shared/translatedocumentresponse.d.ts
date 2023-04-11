import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentTranslation } from "./documenttranslation";
import { TranslateTextGlossaryConfig } from "./translatetextglossaryconfig";
/**
 * A translated document response message.
 */
export declare class TranslateDocumentResponse extends SpeakeasyBase {
    /**
     * A translated document message.
     */
    documentTranslation?: DocumentTranslation;
    /**
     * Configures which glossary is used for a specific target language and defines options for applying that glossary.
     */
    glossaryConfig?: TranslateTextGlossaryConfig;
    /**
     * A translated document message.
     */
    glossaryDocumentTranslation?: DocumentTranslation;
    /**
     * Only present when 'model' is present in the request. 'model' is normalized to have a project number. For example: If the 'model' field in TranslateDocumentRequest is: `projects/{project-id}/locations/{location-id}/models/general/nmt` then `model` here would be normalized to `projects/{project-number}/locations/{location-id}/models/general/nmt`.
     */
    model?: string;
}
