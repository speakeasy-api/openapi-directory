import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsScriptTypeAddOnEntryPoint } from "./googleappsscripttypeaddonentrypoint";
import { GoogleAppsScriptTypeExecutionApiEntryPoint } from "./googleappsscripttypeexecutionapientrypoint";
import { GoogleAppsScriptTypeWebAppEntryPoint } from "./googleappsscripttypewebappentrypoint";
/**
 * The type of the entry point.
 */
export declare enum EntryPointEntryPointTypeEnum {
    EntryPointTypeUnspecified = "ENTRY_POINT_TYPE_UNSPECIFIED",
    WebApp = "WEB_APP",
    ExecutionApi = "EXECUTION_API",
    AddOn = "ADD_ON"
}
/**
 * A configuration that defines how a deployment is accessed externally.
 */
export declare class EntryPoint extends SpeakeasyBase {
    /**
     * An add-on entry point.
     */
    addOn?: GoogleAppsScriptTypeAddOnEntryPoint;
    /**
     * The type of the entry point.
     */
    entryPointType?: EntryPointEntryPointTypeEnum;
    /**
     * An API executable entry point.
     */
    executionApi?: GoogleAppsScriptTypeExecutionApiEntryPoint;
    /**
     * A web application entry point.
     */
    webApp?: GoogleAppsScriptTypeWebAppEntryPoint;
}
