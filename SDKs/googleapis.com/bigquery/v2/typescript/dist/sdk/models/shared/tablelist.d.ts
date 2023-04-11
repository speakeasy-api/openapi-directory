import { SpeakeasyBase } from "../../../internal/utils";
import { Clustering } from "./clustering";
import { RangePartitioning } from "./rangepartitioning";
import { TableReference } from "./tablereference";
import { TimePartitioning } from "./timepartitioning";
/**
 * Additional details for a view.
 */
export declare class TableListTablesView extends SpeakeasyBase {
    /**
     * True if view is defined in legacy SQL dialect, false if in standard SQL.
     */
    useLegacySql?: boolean;
}
export declare class TableListTables extends SpeakeasyBase {
    clustering?: Clustering;
    /**
     * The time when this table was created, in milliseconds since the epoch.
     */
    creationTime?: string;
    /**
     * [Optional] The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed.
     */
    expirationTime?: string;
    /**
     * The user-friendly name for this table.
     */
    friendlyName?: string;
    /**
     * An opaque ID of the table
     */
    id?: string;
    /**
     * The resource type.
     */
    kind?: string;
    /**
     * The labels associated with this table. You can use these to organize and group your tables.
     */
    labels?: Record<string, string>;
    rangePartitioning?: RangePartitioning;
    tableReference?: TableReference;
    timePartitioning?: TimePartitioning;
    /**
     * The type of table. Possible values are: TABLE, VIEW.
     */
    type?: string;
    /**
     * Additional details for a view.
     */
    view?: TableListTablesView;
}
/**
 * Successful response
 */
export declare class TableList extends SpeakeasyBase {
    /**
     * A hash of this page of results.
     */
    etag?: string;
    /**
     * The type of list.
     */
    kind?: string;
    /**
     * A token to request the next page of results.
     */
    nextPageToken?: string;
    /**
     * Tables in the requested dataset.
     */
    tables?: TableListTables[];
    /**
     * The total number of tables in the dataset.
     */
    totalItems?: number;
}
