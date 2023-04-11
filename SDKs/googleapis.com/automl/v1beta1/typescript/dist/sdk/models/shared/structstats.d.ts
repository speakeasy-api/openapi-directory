import { SpeakeasyBase } from "../../../internal/utils";
import { DataStats } from "./datastats";
/**
 * The data statistics of a series of STRUCT values.
 */
export declare class StructStats extends SpeakeasyBase {
    /**
     * Map from a field name of the struct to data stats aggregated over series of all data in that field across all the structs.
     */
    fieldStats?: Record<string, DataStats>;
}
