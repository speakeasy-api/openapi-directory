import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Error templates for a service descriptor
 */
export declare class ErrorTemplate extends SpeakeasyBase {
    /**
     * Map for custom messages
     */
    messages: Record<string, string>;
    /**
     * The Id of the service for which the error template is enabled
     */
    serviceId: string;
    /**
     * The html template for 40x errors
     */
    template40x: string;
    /**
     * The html template for 50x errors
     */
    template50x: string;
    /**
     * The html template for build page
     */
    templateBuild: string;
    /**
     * The html template for maintenance page
     */
    templateMaintenance: string;
}
