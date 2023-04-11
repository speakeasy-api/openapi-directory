import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Who has permission to run the web app.
 */
export declare enum GoogleAppsScriptTypeWebAppConfigAccessEnum {
    UnknownAccess = "UNKNOWN_ACCESS",
    Myself = "MYSELF",
    Domain = "DOMAIN",
    Anyone = "ANYONE",
    AnyoneAnonymous = "ANYONE_ANONYMOUS"
}
/**
 * Who to execute the web app as.
 */
export declare enum GoogleAppsScriptTypeWebAppConfigExecuteAsEnum {
    UnknownExecuteAs = "UNKNOWN_EXECUTE_AS",
    UserAccessing = "USER_ACCESSING",
    UserDeploying = "USER_DEPLOYING"
}
/**
 * Web app entry point configuration.
 */
export declare class GoogleAppsScriptTypeWebAppConfig extends SpeakeasyBase {
    /**
     * Who has permission to run the web app.
     */
    access?: GoogleAppsScriptTypeWebAppConfigAccessEnum;
    /**
     * Who to execute the web app as.
     */
    executeAs?: GoogleAppsScriptTypeWebAppConfigExecuteAsEnum;
}
