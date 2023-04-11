import { SpeakeasyBase } from "../../../internal/utils";
import { TableReference } from "./tablereference";
export declare class IndexUnusedReason extends SpeakeasyBase {
    baseTable?: TableReference;
    /**
     * [Output-only] Specifies the high-level reason for the scenario when no search index was used.
     */
    code?: string;
    /**
     * [Output-only] Specifies the name of the unused search index, if available.
     */
    indexName?: string;
    /**
     * [Output-only] Free form human-readable reason for the scenario when no search index was used.
     */
    message?: string;
}
