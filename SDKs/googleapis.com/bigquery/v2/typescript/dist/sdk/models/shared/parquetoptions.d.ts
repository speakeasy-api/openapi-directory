import { SpeakeasyBase } from "../../../internal/utils";
export declare class ParquetOptions extends SpeakeasyBase {
    /**
     * [Optional] Indicates whether to use schema inference specifically for Parquet LIST logical type.
     */
    enableListInference?: boolean;
    /**
     * [Optional] Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.
     */
    enumAsString?: boolean;
}
