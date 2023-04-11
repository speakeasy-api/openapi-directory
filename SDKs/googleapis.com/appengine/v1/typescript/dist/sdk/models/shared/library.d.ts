import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Third-party Python runtime library that is required by the application.
 */
export declare class Library extends SpeakeasyBase {
    /**
     * Name of the library. Example: "django".
     */
    name?: string;
    /**
     * Version of the library to select, or "latest".
     */
    version?: string;
}
