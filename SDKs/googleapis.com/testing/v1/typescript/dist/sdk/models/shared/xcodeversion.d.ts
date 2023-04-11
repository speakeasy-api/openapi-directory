import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An Xcode version that an iOS version is compatible with.
 */
export declare class XcodeVersion extends SpeakeasyBase {
    /**
     * Tags for this Xcode version. Example: "default".
     */
    tags?: string[];
    /**
     * The id for this version. Example: "9.2".
     */
    version?: string;
}
