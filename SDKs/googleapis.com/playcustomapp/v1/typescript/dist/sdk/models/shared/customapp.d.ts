import { SpeakeasyBase } from "../../../internal/utils";
import { Organization } from "./organization";
/**
 * This resource represents a custom app.
 */
export declare class CustomAppInput extends SpeakeasyBase {
    /**
     * Default listing language in BCP 47 format.
     */
    languageCode?: string;
    /**
     * Organizations to which the custom app should be made available. If the request contains any organizations, then the app will be restricted to only these organizations. To support the organization linked to the developer account, the organization ID should be provided explicitly together with other organizations. If no organizations are provided, then the app is only available to the organization linked to the developer account.
     */
    organizations?: Organization[];
    /**
     * Title for the Android app.
     */
    title?: string;
}
/**
 * This resource represents a custom app.
 */
export declare class CustomApp extends SpeakeasyBase {
    /**
     * Default listing language in BCP 47 format.
     */
    languageCode?: string;
    /**
     * Organizations to which the custom app should be made available. If the request contains any organizations, then the app will be restricted to only these organizations. To support the organization linked to the developer account, the organization ID should be provided explicitly together with other organizations. If no organizations are provided, then the app is only available to the organization linked to the developer account.
     */
    organizations?: Organization[];
    /**
     * Output only. Package name of the created Android app. Only present in the API response.
     */
    packageName?: string;
    /**
     * Title for the Android app.
     */
    title?: string;
}
