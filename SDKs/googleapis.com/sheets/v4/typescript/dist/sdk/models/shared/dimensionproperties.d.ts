import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
import { DeveloperMetadata } from "./developermetadata";
/**
 * Properties about a dimension.
 */
export declare class DimensionProperties extends SpeakeasyBase {
    /**
     * An unique identifier that references a data source column.
     */
    dataSourceColumnReference?: DataSourceColumnReference;
    /**
     * The developer metadata associated with a single row or column.
     */
    developerMetadata?: DeveloperMetadata[];
    /**
     * True if this dimension is being filtered. This field is read-only.
     */
    hiddenByFilter?: boolean;
    /**
     * True if this dimension is explicitly hidden.
     */
    hiddenByUser?: boolean;
    /**
     * The height (if a row) or width (if a column) of the dimension in pixels.
     */
    pixelSize?: number;
}
