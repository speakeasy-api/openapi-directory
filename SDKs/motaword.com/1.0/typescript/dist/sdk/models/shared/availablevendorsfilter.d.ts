import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AvailableVendorsFilterTypesEnum {
    Translator = "translator",
    Proofreader = "proofreader",
    Both = "both"
}
export declare class AvailableVendorsFilter extends SpeakeasyBase {
    corporateId?: number;
    manualWorkPermission?: boolean;
    sourceLanguage?: string;
    targetLanguages?: string[];
    types?: AvailableVendorsFilterTypesEnum[];
}
