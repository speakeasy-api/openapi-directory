import { SpeakeasyBase } from "../../../internal/utils";
import { DataType } from "./datatype";
/**
 * `StructType` defines the DataType-s of a STRUCT type.
 */
export declare class StructType extends SpeakeasyBase {
    /**
     * Unordered map of struct field names to their data types. Fields cannot be added or removed via Update. Their names and data types are still mutable.
     */
    fields?: Record<string, DataType>;
}
