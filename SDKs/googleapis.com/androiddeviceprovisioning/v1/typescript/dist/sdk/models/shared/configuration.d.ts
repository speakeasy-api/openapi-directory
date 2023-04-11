import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A configuration collects the provisioning options for Android devices. Each configuration combines the following: * The EMM device policy controller (DPC) installed on the devices. * EMM policies enforced on the devices. * Metadata displayed on the device to help users during setup. Customers can add as many configurations as they need. However, zero-touch enrollment works best when a customer sets a default configuration that's applied to any new devices the organization purchases.
 */
export declare class ConfigurationInput extends SpeakeasyBase {
    /**
     * Required. The name of the organization. Zero-touch enrollment shows this organization name to device users during device provisioning.
     */
    companyName?: string;
    /**
     * Required. A short name that describes the configuration's purpose. For example, _Sales team_ or _Temporary employees_. The zero-touch enrollment portal displays this name to IT admins.
     */
    configurationName?: string;
    /**
     * Required. The email address that device users can contact to get help. Zero-touch enrollment shows this email address to device users before device provisioning. The value is validated on input.
     */
    contactEmail?: string;
    /**
     * Required. The telephone number that device users can call, using another device, to get help. Zero-touch enrollment shows this number to device users before device provisioning. Accepts numerals, spaces, the plus sign, hyphens, and parentheses.
     */
    contactPhone?: string;
    /**
     * A message, containing one or two sentences, to help device users get help or give them more details about what’s happening to their device. Zero-touch enrollment shows this message before the device is provisioned.
     */
    customMessage?: string;
    /**
     * The JSON-formatted EMM provisioning extras that are passed to the DPC.
     */
    dpcExtras?: string;
    /**
     * Required. The resource name of the selected DPC (device policy controller) in the format `customers/[CUSTOMER_ID]/dpcs/*`. To list the supported DPCs, call `customers.dpcs.list`.
     */
    dpcResourcePath?: string;
    /**
     * Required. Whether this is the default configuration that zero-touch enrollment applies to any new devices the organization purchases in the future. Only one customer configuration can be the default. Setting this value to `true`, changes the previous default configuration's `isDefault` value to `false`.
     */
    isDefault?: boolean;
}
/**
 * A configuration collects the provisioning options for Android devices. Each configuration combines the following: * The EMM device policy controller (DPC) installed on the devices. * EMM policies enforced on the devices. * Metadata displayed on the device to help users during setup. Customers can add as many configurations as they need. However, zero-touch enrollment works best when a customer sets a default configuration that's applied to any new devices the organization purchases.
 */
export declare class Configuration extends SpeakeasyBase {
    /**
     * Required. The name of the organization. Zero-touch enrollment shows this organization name to device users during device provisioning.
     */
    companyName?: string;
    /**
     * Output only. The ID of the configuration. Assigned by the server.
     */
    configurationId?: string;
    /**
     * Required. A short name that describes the configuration's purpose. For example, _Sales team_ or _Temporary employees_. The zero-touch enrollment portal displays this name to IT admins.
     */
    configurationName?: string;
    /**
     * Required. The email address that device users can contact to get help. Zero-touch enrollment shows this email address to device users before device provisioning. The value is validated on input.
     */
    contactEmail?: string;
    /**
     * Required. The telephone number that device users can call, using another device, to get help. Zero-touch enrollment shows this number to device users before device provisioning. Accepts numerals, spaces, the plus sign, hyphens, and parentheses.
     */
    contactPhone?: string;
    /**
     * A message, containing one or two sentences, to help device users get help or give them more details about what’s happening to their device. Zero-touch enrollment shows this message before the device is provisioned.
     */
    customMessage?: string;
    /**
     * The JSON-formatted EMM provisioning extras that are passed to the DPC.
     */
    dpcExtras?: string;
    /**
     * Required. The resource name of the selected DPC (device policy controller) in the format `customers/[CUSTOMER_ID]/dpcs/*`. To list the supported DPCs, call `customers.dpcs.list`.
     */
    dpcResourcePath?: string;
    /**
     * Required. Whether this is the default configuration that zero-touch enrollment applies to any new devices the organization purchases in the future. Only one customer configuration can be the default. Setting this value to `true`, changes the previous default configuration's `isDefault` value to `false`.
     */
    isDefault?: boolean;
    /**
     * Output only. The API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. Assigned by the server.
     */
    name?: string;
}
