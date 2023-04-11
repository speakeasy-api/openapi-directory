import { SpeakeasyBase } from "../../../internal/utils";
import { DebugOptions } from "./debugoptions";
import { Schema } from "./schema";
export declare class UpdateSchemaRequest extends SpeakeasyBase {
    /**
     * Shared request debug options for all cloudsearch RPC methods.
     */
    debugOptions?: DebugOptions;
    /**
     * The schema definition for a data source.
     */
    schema?: Schema;
    /**
     * If true, the schema will be checked for validity, but will not be registered with the data source, even if valid.
     */
    validateOnly?: boolean;
}
