import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JSON template for a metadata column.
 */
export declare class Column extends SpeakeasyBase {
    /**
     * Map of attribute name and value for this column.
     */
    attributes?: Record<string, string>;
    /**
     * Column id.
     */
    id?: string;
    /**
     * Resource type for Analytics column.
     */
    kind?: string;
}
