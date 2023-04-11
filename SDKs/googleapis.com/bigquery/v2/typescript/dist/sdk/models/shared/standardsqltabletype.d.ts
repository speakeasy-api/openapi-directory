import { SpeakeasyBase } from "../../../internal/utils";
import { StandardSqlField } from "./standardsqlfield";
/**
 * A table type
 */
export declare class StandardSqlTableType extends SpeakeasyBase {
    /**
     * The columns in this table type
     */
    columns?: StandardSqlField[];
}
