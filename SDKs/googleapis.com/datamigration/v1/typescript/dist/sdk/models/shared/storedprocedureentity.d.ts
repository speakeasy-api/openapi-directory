import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Stored procedure's parent is a schema.
 */
export declare class StoredProcedureEntity extends SpeakeasyBase {
    /**
     * Custom engine specific features.
     */
    customFeatures?: Record<string, any>;
    /**
     * The SQL code which creates the stored procedure.
     */
    sqlCode?: string;
}
