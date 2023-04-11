import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An iOS version.
 */
export declare class IosVersion extends SpeakeasyBase {
    /**
     * An opaque id for this iOS version. Use this id to invoke the TestExecutionService.
     */
    id?: string;
    /**
     * An integer representing the major iOS version. Examples: "8", "9".
     */
    majorVersion?: number;
    /**
     * An integer representing the minor iOS version. Examples: "1", "2".
     */
    minorVersion?: number;
    /**
     * The available Xcode versions for this version.
     */
    supportedXcodeVersionIds?: string[];
    /**
     * Tags for this dimension. Examples: "default", "preview", "deprecated".
     */
    tags?: string[];
}
