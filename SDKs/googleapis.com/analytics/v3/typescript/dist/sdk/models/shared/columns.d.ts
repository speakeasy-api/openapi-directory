import { SpeakeasyBase } from "../../../internal/utils";
import { Column } from "./column";
/**
 * Lists columns (dimensions and metrics) for a particular report type.
 */
export declare class Columns extends SpeakeasyBase {
    /**
     * List of attributes names returned by columns.
     */
    attributeNames?: string[];
    /**
     * Etag of collection. This etag can be compared with the last response etag to check if response has changed.
     */
    etag?: string;
    /**
     * List of columns for a report type.
     */
    items?: Column[];
    /**
     * Collection type.
     */
    kind?: string;
    /**
     * Total number of columns returned in the response.
     */
    totalResults?: number;
}
