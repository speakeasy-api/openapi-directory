import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Database instance failover context.
 */
export declare class FailoverContext extends SpeakeasyBase {
    /**
     * This is always `sql#failoverContext`.
     */
    kind?: string;
    /**
     * The current settings version of this instance. Request will be rejected if this version doesn't match the current settings version.
     */
    settingsVersion?: string;
}
