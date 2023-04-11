import { SpeakeasyBase } from "../../../internal/utils";
import { Database } from "./database";
/**
 * Database list response.
 */
export declare class DatabasesListResponse extends SpeakeasyBase {
    /**
     * List of database resources in the instance.
     */
    items?: Database[];
    /**
     * This is always `sql#databasesList`.
     */
    kind?: string;
}
