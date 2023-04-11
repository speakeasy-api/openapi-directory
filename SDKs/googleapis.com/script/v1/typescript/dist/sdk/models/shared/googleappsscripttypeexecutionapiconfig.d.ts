import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Who has permission to run the API executable.
 */
export declare enum GoogleAppsScriptTypeExecutionApiConfigAccessEnum {
    UnknownAccess = "UNKNOWN_ACCESS",
    Myself = "MYSELF",
    Domain = "DOMAIN",
    Anyone = "ANYONE",
    AnyoneAnonymous = "ANYONE_ANONYMOUS"
}
/**
 * API executable entry point configuration.
 */
export declare class GoogleAppsScriptTypeExecutionApiConfig extends SpeakeasyBase {
    /**
     * Who has permission to run the API executable.
     */
    access?: GoogleAppsScriptTypeExecutionApiConfigAccessEnum;
}
