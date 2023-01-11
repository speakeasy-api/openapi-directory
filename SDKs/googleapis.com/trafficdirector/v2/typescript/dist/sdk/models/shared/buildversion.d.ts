import { SpeakeasyBase } from "../../../internal/utils";
import { SemanticVersion } from "./semanticversion";
/**
 * BuildVersion combines SemVer version of extension with free-form build information (i.e. 'alpha', 'private-build') as a set of strings.
**/
export declare class BuildVersion extends SpeakeasyBase {
    metadata?: Record<string, any>;
    version?: SemanticVersion;
}
