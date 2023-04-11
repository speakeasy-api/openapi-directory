import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information reported for an outdated library.
 */
export declare class OutdatedLibrary extends SpeakeasyBase {
    /**
     * URLs to learn more information about the vulnerabilities in the library.
     */
    learnMoreUrls?: string[];
    /**
     * The name of the outdated library.
     */
    libraryName?: string;
    /**
     * The version number.
     */
    version?: string;
}
