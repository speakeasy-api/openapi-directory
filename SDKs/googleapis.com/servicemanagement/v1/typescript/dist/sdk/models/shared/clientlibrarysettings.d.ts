import { SpeakeasyBase } from "../../../internal/utils";
import { CppSettings } from "./cppsettings";
import { DotnetSettings } from "./dotnetsettings";
import { GoSettings } from "./gosettings";
import { JavaSettings } from "./javasettings";
import { NodeSettings } from "./nodesettings";
import { PhpSettings } from "./phpsettings";
import { PythonSettings } from "./pythonsettings";
import { RubySettings } from "./rubysettings";
/**
 * Launch stage of this version of the API.
 */
export declare enum ClientLibrarySettingsLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED",
    Unimplemented = "UNIMPLEMENTED",
    Prelaunch = "PRELAUNCH",
    EarlyAccess = "EARLY_ACCESS",
    Alpha = "ALPHA",
    Beta = "BETA",
    Ga = "GA",
    Deprecated = "DEPRECATED"
}
/**
 * Details about how and where to publish client libraries.
 */
export declare class ClientLibrarySettings extends SpeakeasyBase {
    /**
     * Settings for C++ client libraries.
     */
    cppSettings?: CppSettings;
    /**
     * Settings for Dotnet client libraries.
     */
    dotnetSettings?: DotnetSettings;
    /**
     * Settings for Go client libraries.
     */
    goSettings?: GoSettings;
    /**
     * Settings for Java client libraries.
     */
    javaSettings?: JavaSettings;
    /**
     * Launch stage of this version of the API.
     */
    launchStage?: ClientLibrarySettingsLaunchStageEnum;
    /**
     * Settings for Node client libraries.
     */
    nodeSettings?: NodeSettings;
    /**
     * Settings for Php client libraries.
     */
    phpSettings?: PhpSettings;
    /**
     * Settings for Python client libraries.
     */
    pythonSettings?: PythonSettings;
    /**
     * When using transport=rest, the client request will encode enums as numbers rather than strings.
     */
    restNumericEnums?: boolean;
    /**
     * Settings for Ruby client libraries.
     */
    rubySettings?: RubySettings;
    /**
     * Version of the API to apply these settings to. This is the full protobuf package for the API, ending in the version element. Examples: "google.cloud.speech.v1" and "google.spanner.admin.database.v1".
     */
    version?: string;
}
