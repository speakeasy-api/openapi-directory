import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class PreviewMarketplaceAvailableAddOn extends SpeakeasyBase {
    /**
     * The JSON object with the configuration that must be provided when installing a given Add-on.
     */
    configurationSchema?: any;
    /**
     * A short description of the Add-on's functionality.
     */
    description?: string;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The URLs of related resources.
     */
    links?: Record<string, any>;
    /**
     * How customers are charged for using this Add-on.
     */
    pricingType?: string;
    /**
     * The unique string that we created to identify the AvailableAddOn resource.
     */
    sid?: string;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
}
