import { SpeakeasyBase } from "../../../internal/utils";
import { ConstraintEntity } from "./constraintentity";
/**
 * View's parent is a schema.
 */
export declare class ViewEntity extends SpeakeasyBase {
    /**
     * View constraints.
     */
    constraints?: ConstraintEntity[];
    /**
     * Custom engine specific features.
     */
    customFeatures?: Record<string, any>;
    /**
     * The SQL code which creates the view.
     */
    sqlCode?: string;
}
