import { SpeakeasyBase } from "../../../internal/utils";
import { TranslateTextGlossaryConfig } from "./translatetextglossaryconfig";
import { BatchDocumentInputConfig } from "./batchdocumentinputconfig";
import { BatchDocumentOutputConfig } from "./batchdocumentoutputconfig";
/**
 * The BatchTranslateDocument request.
**/
export declare class BatchTranslateDocumentRequest extends SpeakeasyBase {
    formatConversions?: Record<string, string>;
    glossaries?: Record<string, TranslateTextGlossaryConfig>;
    inputConfigs?: BatchDocumentInputConfig[];
    models?: Record<string, string>;
    outputConfig?: BatchDocumentOutputConfig;
    sourceLanguageCode?: string;
    targetLanguageCodes?: string[];
}
