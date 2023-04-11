import { SpeakeasyBase } from "../../../internal/utils";
import { OracleColumn } from "./oraclecolumn";
/**
 * Oracle table.
 */
export declare class OracleTable extends SpeakeasyBase {
    /**
     * Oracle columns in the schema. When unspecified as part of inclue/exclude lists, includes/excludes everything.
     */
    oracleColumns?: OracleColumn[];
    /**
     * Table name.
     */
    tableName?: string;
}
