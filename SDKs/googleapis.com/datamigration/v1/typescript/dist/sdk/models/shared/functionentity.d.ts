import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Function's parent is a schema.
 */
export declare class FunctionEntity extends SpeakeasyBase {
    /**
     * Custom engine specific features.
     */
    customFeatures?: Record<string, any>;
    /**
     * The SQL code which creates the function.
     */
    sqlCode?: string;
}
