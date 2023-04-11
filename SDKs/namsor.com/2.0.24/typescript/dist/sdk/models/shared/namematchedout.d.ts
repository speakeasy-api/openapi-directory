import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The name matching status.
 */
export declare enum NameMatchedOutMatchStatusEnum {
    Match = "Match",
    Mismatch = "Mismatch"
}
/**
 * Classified matched names
 */
export declare class NameMatchedOut extends SpeakeasyBase {
    id?: string;
    /**
     * The name matching status.
     */
    matchStatus?: NameMatchedOutMatchStatusEnum;
    score?: number;
    script?: string;
}
