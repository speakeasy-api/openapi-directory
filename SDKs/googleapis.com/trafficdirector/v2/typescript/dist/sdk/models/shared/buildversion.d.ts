import { SpeakeasyBase } from "../../../internal/utils";
import { SemanticVersion } from "./semanticversion";
/**
 * BuildVersion combines SemVer version of extension with free-form build information (i.e. 'alpha', 'private-build') as a set of strings.
 */
export declare class BuildVersion extends SpeakeasyBase {
    /**
     * Free-form build information. Envoy defines several well known keys in the source/common/version/version.h file
     */
    metadata?: Record<string, any>;
    /**
     * Envoy uses SemVer (https://semver.org/). Major/minor versions indicate expected behaviors and APIs, the patch version field is used only for security fixes and can be generally ignored.
     */
    version?: SemanticVersion;
}
