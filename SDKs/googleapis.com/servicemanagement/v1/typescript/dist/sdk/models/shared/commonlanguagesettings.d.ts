import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CommonLanguageSettingsDestinationsEnum {
    ClientLibraryDestinationUnspecified = "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED",
    Github = "GITHUB",
    PackageManager = "PACKAGE_MANAGER"
}
/**
 * Required information for every language.
 */
export declare class CommonLanguageSettings extends SpeakeasyBase {
    /**
     * The destination where API teams want this client library to be published.
     */
    destinations?: CommonLanguageSettingsDestinationsEnum[];
    /**
     * Link to automatically generated reference documentation. Example: https://cloud.google.com/nodejs/docs/reference/asset/latest
     */
    referenceDocsUri?: string;
}
