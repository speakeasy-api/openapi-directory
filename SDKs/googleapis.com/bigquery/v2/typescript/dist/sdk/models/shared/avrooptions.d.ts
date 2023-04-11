import { SpeakeasyBase } from "../../../internal/utils";
export declare class AvroOptions extends SpeakeasyBase {
    /**
     * [Optional] If sourceFormat is set to "AVRO", indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER).
     */
    useAvroLogicalTypes?: boolean;
}
