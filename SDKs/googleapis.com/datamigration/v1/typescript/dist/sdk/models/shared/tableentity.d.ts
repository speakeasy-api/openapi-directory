import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnEntity } from "./columnentity";
import { ConstraintEntity } from "./constraintentity";
import { IndexEntity } from "./indexentity";
import { TriggerEntity } from "./triggerentity";
/**
 * Table's parent is a schema.
 */
export declare class TableEntity extends SpeakeasyBase {
    /**
     * Table columns.
     */
    columns?: ColumnEntity[];
    /**
     * Comment associated with the table.
     */
    comment?: string;
    /**
     * Table constraints.
     */
    constraints?: ConstraintEntity[];
    /**
     * Custom engine specific features.
     */
    customFeatures?: Record<string, any>;
    /**
     * Table indices.
     */
    indices?: IndexEntity[];
    /**
     * Table triggers.
     */
    triggers?: TriggerEntity[];
}
