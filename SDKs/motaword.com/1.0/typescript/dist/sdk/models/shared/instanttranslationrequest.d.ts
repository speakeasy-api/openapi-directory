import { SpeakeasyBase } from "../../../internal/utils";
import { FileAsData } from "./fileasdata";
import { InstantTranslationFilter } from "./instanttranslationfilter";
export declare class InstantTranslationRequest extends SpeakeasyBase {
    /**
     * Simple list of strings to be translated. You can also choose to upload files instead of strings.
     */
    contents?: string[];
    /**
     * You can add as many files as you want in documents parameter.
     */
    documents?: FileAsData[];
    filters?: InstantTranslationFilter;
    /**
     * Free-form meta data to attach to your instant translation request. This can be used in statistics and analytical dashboards.
     */
    meta?: Record<string, any>;
}
