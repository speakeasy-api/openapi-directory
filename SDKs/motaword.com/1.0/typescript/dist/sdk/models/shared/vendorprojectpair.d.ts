import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
export declare class VendorProjectPair extends SpeakeasyBase {
    currency?: string;
    isProofreader?: boolean;
    proofreader?: User;
    proofreadingRate?: number;
    sourceLanguage?: string;
    targetLanguage?: string;
    translationRate?: number;
}
