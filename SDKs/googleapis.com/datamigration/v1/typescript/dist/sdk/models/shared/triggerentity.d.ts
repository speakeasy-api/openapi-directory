import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Trigger is not used as an independent entity, it is retrieved as part of a Table entity.
 */
export declare class TriggerEntity extends SpeakeasyBase {
    /**
     * Custom engine specific features.
     */
    customFeatures?: Record<string, any>;
    /**
     * The name of the trigger.
     */
    name?: string;
    /**
     * The SQL code which creates the trigger.
     */
    sqlCode?: string;
    /**
     * Indicates when the trigger fires, for example BEFORE STATEMENT, AFTER EACH ROW.
     */
    triggerType?: string;
    /**
     * The DML, DDL, or database events that fire the trigger, for example INSERT, UPDATE.
     */
    triggeringEvents?: string[];
}
