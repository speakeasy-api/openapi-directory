import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AvailableVendorsFilterTypesEnum {
    Translator = "translator",
    Proofreader = "proofreader",
    Both = "both"
}
export declare class AvailableVendorsFilter extends SpeakeasyBase {
    /**
     * Corporate account ID to filter for vendor authorization
     */
    corporateId?: number;
    /**
     * Filter vendors for manual work permission
     */
    manualWorkPermission?: boolean;
    /**
     * Source language code
     */
    sourceLanguage?: string;
    /**
     * List of target language codes.
     */
    targetLanguages?: string[];
    /**
     * List of vendor types
     */
    types?: AvailableVendorsFilterTypesEnum[];
}
