import { SpeakeasyBase } from "../../../internal/utils";
import { Capabilities } from "./capabilities";
/**
 * Application privacy config
 */
export declare class ApplicationResponsePrivacy extends SpeakeasyBase {
    /**
     * If set to `true`, Vonage may store and use your content and data for the improvement of Vonage's AI based services and technologies.
     */
    improveAi?: boolean;
}
/**
 * Success
 */
export declare class ApplicationResponse extends SpeakeasyBase {
    /**
     * Your application can use multiple products. This contains the configuration for each product. This replaces the application `type` from version 1 of the Application API.
     */
    capabilities?: Capabilities;
    /**
     * The application's ID
     */
    id?: string;
    /**
     * Friendly identifier for your application. This is not unique
     */
    name?: string;
    /**
     * Application privacy config
     */
    privacy?: ApplicationResponsePrivacy;
}
