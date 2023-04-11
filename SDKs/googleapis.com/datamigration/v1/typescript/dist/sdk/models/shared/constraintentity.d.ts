import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Constraint is not used as an independent entity, it is retrieved as part of another entity such as Table or View.
 */
export declare class ConstraintEntity extends SpeakeasyBase {
    /**
     * Custom engine specific features.
     */
    customFeatures?: Record<string, any>;
    /**
     * The name of the table constraint.
     */
    name?: string;
    /**
     * Reference columns which may be associated with the constraint. For example, if the constraint is a FOREIGN_KEY, this represents the list of full names of referenced columns by the foreign key.
     */
    referenceColumns?: string[];
    /**
     * Reference table which may be associated with the constraint. For example, if the constraint is a FOREIGN_KEY, this represents the list of full name of the referenced table by the foreign key.
     */
    referenceTable?: string;
    /**
     * Table columns used as part of the Constraint, for example primary key constraint should list the columns which constitutes the key.
     */
    tableColumns?: string[];
    /**
     * Table which is associated with the constraint. In case the constraint is defined on a table, this field is left empty as this information is stored in parent_name. However, if constraint is defined on a view, this field stores the table name on which the view is defined.
     */
    tableName?: string;
    /**
     * Type of constraint, for example unique, primary key, foreign key (currently only primary key is supported).
     */
    type?: string;
}
