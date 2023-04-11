import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about the application used to generate a change.
 */
export declare class SourceApplication extends SpeakeasyBase {
    /**
     * Read-only Square ID assigned to the application. Only used for
     *
     * @remarks
     * [Product](https://developer.squareup.com/reference/square_2021-08-18/enums/Product) type `EXTERNAL_API`.
     */
    applicationId?: string;
    /**
     * Read-only display name assigned to the application
     *
     * @remarks
     * (e.g. `"Custom Application"`, `"Square POS 4.74 for Android"`).
     */
    name?: string;
    /**
     * Read-only [Product](https://developer.squareup.com/reference/square_2021-08-18/enums/Product) type for the application.
     */
    product?: string;
}
