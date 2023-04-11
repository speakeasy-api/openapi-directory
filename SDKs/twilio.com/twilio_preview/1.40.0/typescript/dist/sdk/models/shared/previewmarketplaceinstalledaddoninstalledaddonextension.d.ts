import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class PreviewMarketplaceInstalledAddOnInstalledAddOnExtension extends SpeakeasyBase {
    /**
     * Whether the Extension will be invoked.
     */
    enabled?: boolean;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The SID of the InstalledAddOn resource to which this extension applies.
     */
    installedAddOnSid?: string;
    /**
     * The name of the Product this Extension is used within.
     */
    productName?: string;
    /**
     * The unique string that we created to identify the InstalledAddOn Extension resource.
     */
    sid?: string;
    /**
     * An application-defined string that uniquely identifies the resource.
     */
    uniqueName?: string;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
}
