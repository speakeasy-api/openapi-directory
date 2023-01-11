import { SpeakeasyBase } from "../../../internal/utils";
import { TranslateTextGlossaryConfig } from "./translatetextglossaryconfig";
import { InputConfig } from "./inputconfig";
import { OutputConfig } from "./outputconfig";
/**
 * The batch translation request.
**/
export declare class BatchTranslateTextRequest extends SpeakeasyBase {
    glossaries?: Record<string, TranslateTextGlossaryConfig>;
    inputConfigs?: InputConfig[];
    labels?: Record<string, string>;
    models?: Record<string, string>;
    outputConfig?: OutputConfig;
    sourceLanguageCode?: string;
    targetLanguageCodes?: string[];
}
