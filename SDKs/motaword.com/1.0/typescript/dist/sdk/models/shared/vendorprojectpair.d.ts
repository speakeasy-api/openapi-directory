import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
export declare class VendorProjectPair extends SpeakeasyBase {
    currency?: string;
    /**
     * Indicates if the vendor be able to proofred this pair
     */
    isProofreader?: boolean;
    proofreader?: User;
    proofreadingRate?: number;
    /**
     * Source language code
     */
    sourceLanguage?: string;
    /**
     * Target language code
     */
    targetLanguage?: string;
    translationRate?: number;
}
