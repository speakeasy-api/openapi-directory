import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorProto } from "./errorproto";
export declare class TableDataInsertAllResponseInsertErrors extends SpeakeasyBase {
    /**
     * Error information for the row indicated by the index property.
     */
    errors?: ErrorProto[];
    /**
     * The index of the row that error applies to.
     */
    index?: number;
}
/**
 * Successful response
 */
export declare class TableDataInsertAllResponse extends SpeakeasyBase {
    /**
     * An array of errors for rows that were not inserted.
     */
    insertErrors?: TableDataInsertAllResponseInsertErrors[];
    /**
     * The resource type of the response.
     */
    kind?: string;
}
