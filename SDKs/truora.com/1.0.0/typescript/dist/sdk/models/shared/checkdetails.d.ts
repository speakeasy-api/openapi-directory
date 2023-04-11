import { SpeakeasyBase } from "../../../internal/utils";
import { Table } from "./table";
/**
 * table group type
 */
export declare enum CheckDetailsGroupEnum {
    Profile = "profile",
    Legal = "legal",
    Affiliations = "affiliations",
    Vehicle = "vehicle",
    Global = "global",
    Media = "media",
    Unknown = "unknown"
}
/**
 * Database result
 */
export declare enum CheckDetailsResultEnum {
    Pending = "pending",
    Found = "found",
    NotFound = "not_found",
    Error = "error"
}
/**
 * Represents background check details
 */
export declare class CheckDetails extends SpeakeasyBase {
    /**
     * Associated background check ID
     */
    checkId: string;
    /**
     * Details dataset
     */
    dataSet: string;
    /**
     * Database name. Do not use this field to identify the database as its value may vary as the check is completed
     */
    databaseName: string;
    /**
     * table group type
     */
    group: CheckDetailsGroupEnum;
    /**
     * Detail ID
     */
    id: string;
    /**
     * Database result
     */
    result: CheckDetailsResultEnum;
    /**
     * Partial detail score. Scores are aggregated later in the background check
     */
    score: number;
    /**
     * Query detailed information
     */
    tables: Table[];
}
