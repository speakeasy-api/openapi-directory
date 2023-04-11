import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Generic half-open interval [start, end)
 */
export declare class GooglePrivacyDlpV2Range extends SpeakeasyBase {
    /**
     * Index of the last character of the range (exclusive).
     */
    end?: string;
    /**
     * Index of the first character of the range (inclusive).
     */
    start?: string;
}
