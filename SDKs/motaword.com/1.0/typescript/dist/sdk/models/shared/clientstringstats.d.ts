import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageStringStat } from "./languagestringstat";
/**
 * Translation statistics for your account
 */
export declare class ClientStringStats extends SpeakeasyBase {
    languageCounts?: LanguageStringStat[];
    totalProjectStringsCount?: number;
    totalTmStringsCount?: number;
}
