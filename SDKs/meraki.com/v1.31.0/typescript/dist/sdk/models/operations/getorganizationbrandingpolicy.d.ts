import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationBrandingPolicyRequest extends SpeakeasyBase {
    brandingPolicyId: string;
    organizationId: string;
}
/**
 * Which kinds of admins this policy applies to. Can be one of 'All organization admins', 'All enterprise admins', 'All network admins', 'All admins of networks...', 'All admins of networks tagged...', 'Specific admins...', 'All admins' or 'All SAML admins'.
 */
export declare enum GetOrganizationBrandingPolicy200ApplicationJSONAdminSettingsAppliesToEnum {
    AllSAMLAdmins = "All SAML admins",
    AllAdmins = "All admins",
    AllAdminsOfNetworksTagged = "All admins of networks tagged...",
    AllAdminsOfNetworks = "All admins of networks...",
    AllEnterpriseAdmins = "All enterprise admins",
    AllNetworkAdmins = "All network admins",
    AllOrganizationAdmins = "All organization admins",
    SpecificAdmins = "Specific admins..."
}
/**
 * Settings for describing which kinds of admins this policy applies to.
 */
export declare class GetOrganizationBrandingPolicy200ApplicationJSONAdminSettings extends SpeakeasyBase {
    /**
     * Which kinds of admins this policy applies to. Can be one of 'All organization admins', 'All enterprise admins', 'All network admins', 'All admins of networks...', 'All admins of networks tagged...', 'Specific admins...', 'All admins' or 'All SAML admins'.
     */
    appliesTo?: GetOrganizationBrandingPolicy200ApplicationJSONAdminSettingsAppliesToEnum;
    /**
     *       If 'appliesTo' is set to one of 'Specific admins...', 'All admins of networks...' or 'All admins of networks tagged...', then you must specify this 'values' property to provide the set of
     *
     * @remarks
     *       entities to apply the branding policy to. For 'Specific admins...', specify an array of admin IDs. For 'All admins of
     *       networks...', specify an array of network IDs and/or configuration template IDs. For 'All admins of networks tagged...',
     *       specify an array of tag names.
     *
     */
    values?: string[];
}
/**
 * Preview of the image
 */
export declare class GetOrganizationBrandingPolicy200ApplicationJSONCustomLogoImagePreview extends SpeakeasyBase {
    /**
     * Timestamp of the preview image
     */
    expiresAt?: Date;
    /**
     * Url of the preview image
     */
    url?: string;
}
/**
 * Properties of the image.
 */
export declare class GetOrganizationBrandingPolicy200ApplicationJSONCustomLogoImage extends SpeakeasyBase {
    /**
     * Preview of the image
     */
    preview?: GetOrganizationBrandingPolicy200ApplicationJSONCustomLogoImagePreview;
}
/**
 * Properties describing the custom logo attached to the branding policy.
 */
export declare class GetOrganizationBrandingPolicy200ApplicationJSONCustomLogo extends SpeakeasyBase {
    /**
     * Whether or not there is a custom logo enabled.
     */
    enabled?: boolean;
    /**
     * Properties of the image.
     */
    image?: GetOrganizationBrandingPolicy200ApplicationJSONCustomLogoImage;
}
/**
 *       The 'Help -> API docs' subtab where a detailed description of the Dashboard API is listed. Can be one of
 *
 * @remarks
 *       'default or inherit', 'hide' or 'show'.
 *
 */
export declare enum GetOrganizationBrandingPolicy200ApplicationJSONHelpSettingsApiDocsSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
/**
 *       The 'Help -> Cases' Dashboard subtab on which Cisco Meraki support cases for this organization can be managed. Can be one
 *
 * @remarks
 *       of 'default or inherit', 'hide' or 'show'.
 *
 */
export declare enum GetOrganizationBrandingPolicy200ApplicationJSONHelpSettingsCasesSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
/**
 *       The 'Help -> Community' subtab which provides a link to Meraki Community. Can be one of 'default or inherit', 'hide' or 'show'.
 *
 * @remarks
 *
 */
export declare enum GetOrganizationBrandingPolicy200ApplicationJSONHelpSettingsCommunitySubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
/**
 *       The 'Help -> Data protection requests' Dashboard subtab on which requests to delete, restrict, or export end-user data can
 *
 * @remarks
 *       be audited. Can be one of 'default or inherit', 'hide' or 'show'.
 *
 */
export declare enum GetOrganizationBrandingPolicy200ApplicationJSONHelpSettingsDataProtectionRequestsSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
/**
 *       The 'Help -> Firewall info' subtab where necessary upstream firewall rules for communication to the Cisco Meraki cloud are
 *
 * @remarks
 *       listed. Can be one of 'default or inherit', 'hide' or 'show'.
 *
 */
export declare enum GetOrganizationBrandingPolicy200ApplicationJSONHelpSettingsFirewallInfoSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
/**
 *       The 'Help -> Get Help' subtab on which Cisco Meraki KB, Product Manuals, and Support/Case Information are displayed. Note
 *
 * @remarks
 *       that if this subtab is hidden, branding customizations for the KB on 'Get help', Cisco Meraki product documentation,
 *       and support contact info will not be visible. Can be one of 'default or inherit', 'hide' or 'show'.
 *
 */
export declare enum GetOrganizationBrandingPolicy200ApplicationJSONHelpSettingsGetHelpSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
/**
 *       The 'Help -> Replacement info' subtab where important information regarding device replacements is detailed. Can be one of
 *
 * @remarks
 *       'default or inherit', 'hide' or 'show'.
 *
 */
export declare enum GetOrganizationBrandingPolicy200ApplicationJSONHelpSettingsHardwareReplacementsSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
/**
 *       The Help tab, under which all support information resides. If this tab is hidden, no other 'Help' branding
 *
 * @remarks
 *       customizations will be visible. Can be one of 'default or inherit', 'hide' or 'show'.
 *
 */
export declare enum GetOrganizationBrandingPolicy200ApplicationJSONHelpSettingsHelpTabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
/**
 *       The 'Help Widget' is a support widget which provides access to live chat, documentation links, Sales contact info,
 *
 * @remarks
 *       and other contact avenues to reach Meraki Support. Can be one of 'default or inherit', 'hide' or 'show'.
 *
 */
export declare enum GetOrganizationBrandingPolicy200ApplicationJSONHelpSettingsHelpWidgetEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
/**
 *       The 'Help -> New features' subtab where new Dashboard features are detailed. Can be one of 'default or inherit', 'hide' or 'show'.
 *
 * @remarks
 *
 */
export declare enum GetOrganizationBrandingPolicy200ApplicationJSONHelpSettingsNewFeaturesSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
/**
 *       The 'SM Forums' subtab which links to community-based support for Cisco Meraki Systems Manager. Only configurable for
 *
 * @remarks
 *       organizations that contain Systems Manager networks. Can be one of 'default or inherit', 'hide' or 'show'.
 *
 */
export declare enum GetOrganizationBrandingPolicy200ApplicationJSONHelpSettingsSmForumsEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
/**
 *       The universal search box always visible on Dashboard will, by default, present results from the Meraki KB. This configures
 *
 * @remarks
 *       whether these Meraki KB results should be returned. Can be one of 'default or inherit', 'hide' or 'show'.
 *
 */
export declare enum GetOrganizationBrandingPolicy200ApplicationJSONHelpSettingsUniversalSearchKnowledgeBaseSearchEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
/**
 *       Settings for describing the modifications to various Help page features. Each property in this object accepts one of
 *
 * @remarks
 *       'default or inherit' (do not modify functionality), 'hide' (remove the section from Dashboard), or 'show' (always show
 *       the section on Dashboard). Some properties in this object also accept custom HTML used to replace the section on
 *       Dashboard; see the documentation for each property to see the allowed values.
 *
 */
export declare class GetOrganizationBrandingPolicy200ApplicationJSONHelpSettings extends SpeakeasyBase {
    /**
     *       The 'Help -> API docs' subtab where a detailed description of the Dashboard API is listed. Can be one of
     *
     * @remarks
     *       'default or inherit', 'hide' or 'show'.
     *
     */
    apiDocsSubtab?: GetOrganizationBrandingPolicy200ApplicationJSONHelpSettingsApiDocsSubtabEnum;
    /**
     *       The 'Help -> Cases' Dashboard subtab on which Cisco Meraki support cases for this organization can be managed. Can be one
     *
     * @remarks
     *       of 'default or inherit', 'hide' or 'show'.
     *
     */
    casesSubtab?: GetOrganizationBrandingPolicy200ApplicationJSONHelpSettingsCasesSubtabEnum;
    /**
     *       The 'Product Manuals' section of the 'Help -> Get Help' subtab. Can be one of 'default or inherit', 'hide', 'show', or a replacement custom HTML string.
     *
     * @remarks
     *
     */
    ciscoMerakiProductDocumentation?: string;
    /**
     *       The 'Help -> Community' subtab which provides a link to Meraki Community. Can be one of 'default or inherit', 'hide' or 'show'.
     *
     * @remarks
     *
     */
    communitySubtab?: GetOrganizationBrandingPolicy200ApplicationJSONHelpSettingsCommunitySubtabEnum;
    /**
     *       The 'Help -> Data protection requests' Dashboard subtab on which requests to delete, restrict, or export end-user data can
     *
     * @remarks
     *       be audited. Can be one of 'default or inherit', 'hide' or 'show'.
     *
     */
    dataProtectionRequestsSubtab?: GetOrganizationBrandingPolicy200ApplicationJSONHelpSettingsDataProtectionRequestsSubtabEnum;
    /**
     *       The 'Help -> Firewall info' subtab where necessary upstream firewall rules for communication to the Cisco Meraki cloud are
     *
     * @remarks
     *       listed. Can be one of 'default or inherit', 'hide' or 'show'.
     *
     */
    firewallInfoSubtab?: GetOrganizationBrandingPolicy200ApplicationJSONHelpSettingsFirewallInfoSubtabEnum;
    /**
     *       The 'Help -> Get Help' subtab on which Cisco Meraki KB, Product Manuals, and Support/Case Information are displayed. Note
     *
     * @remarks
     *       that if this subtab is hidden, branding customizations for the KB on 'Get help', Cisco Meraki product documentation,
     *       and support contact info will not be visible. Can be one of 'default or inherit', 'hide' or 'show'.
     *
     */
    getHelpSubtab?: GetOrganizationBrandingPolicy200ApplicationJSONHelpSettingsGetHelpSubtabEnum;
    /**
     *       The KB search box which appears on the Help page. Can be one of 'default or inherit', 'hide', 'show', or a replacement custom HTML string.
     *
     * @remarks
     *
     */
    getHelpSubtabKnowledgeBaseSearch?: string;
    /**
     *       The 'Help -> Replacement info' subtab where important information regarding device replacements is detailed. Can be one of
     *
     * @remarks
     *       'default or inherit', 'hide' or 'show'.
     *
     */
    hardwareReplacementsSubtab?: GetOrganizationBrandingPolicy200ApplicationJSONHelpSettingsHardwareReplacementsSubtabEnum;
    /**
     *       The Help tab, under which all support information resides. If this tab is hidden, no other 'Help' branding
     *
     * @remarks
     *       customizations will be visible. Can be one of 'default or inherit', 'hide' or 'show'.
     *
     */
    helpTab?: GetOrganizationBrandingPolicy200ApplicationJSONHelpSettingsHelpTabEnum;
    /**
     *       The 'Help Widget' is a support widget which provides access to live chat, documentation links, Sales contact info,
     *
     * @remarks
     *       and other contact avenues to reach Meraki Support. Can be one of 'default or inherit', 'hide' or 'show'.
     *
     */
    helpWidget?: GetOrganizationBrandingPolicy200ApplicationJSONHelpSettingsHelpWidgetEnum;
    /**
     *       The 'Help -> New features' subtab where new Dashboard features are detailed. Can be one of 'default or inherit', 'hide' or 'show'.
     *
     * @remarks
     *
     */
    newFeaturesSubtab?: GetOrganizationBrandingPolicy200ApplicationJSONHelpSettingsNewFeaturesSubtabEnum;
    /**
     *       The 'SM Forums' subtab which links to community-based support for Cisco Meraki Systems Manager. Only configurable for
     *
     * @remarks
     *       organizations that contain Systems Manager networks. Can be one of 'default or inherit', 'hide' or 'show'.
     *
     */
    smForums?: GetOrganizationBrandingPolicy200ApplicationJSONHelpSettingsSmForumsEnum;
    /**
     *       The 'Contact Meraki Support' section of the 'Help -> Get Help' subtab. Can be one of 'default or inherit', 'hide', 'show', or a replacement custom HTML string.
     *
     * @remarks
     *
     */
    supportContactInfo?: string;
    /**
     *       The universal search box always visible on Dashboard will, by default, present results from the Meraki KB. This configures
     *
     * @remarks
     *       whether these Meraki KB results should be returned. Can be one of 'default or inherit', 'hide' or 'show'.
     *
     */
    universalSearchKnowledgeBaseSearch?: GetOrganizationBrandingPolicy200ApplicationJSONHelpSettingsUniversalSearchKnowledgeBaseSearchEnum;
}
/**
 * Successful operation
 */
export declare class GetOrganizationBrandingPolicy200ApplicationJSON extends SpeakeasyBase {
    /**
     * Settings for describing which kinds of admins this policy applies to.
     */
    adminSettings?: GetOrganizationBrandingPolicy200ApplicationJSONAdminSettings;
    /**
     * Properties describing the custom logo attached to the branding policy.
     */
    customLogo?: GetOrganizationBrandingPolicy200ApplicationJSONCustomLogo;
    /**
     * Boolean indicating whether this policy is enabled.
     */
    enabled?: boolean;
    /**
     *       Settings for describing the modifications to various Help page features. Each property in this object accepts one of
     *
     * @remarks
     *       'default or inherit' (do not modify functionality), 'hide' (remove the section from Dashboard), or 'show' (always show
     *       the section on Dashboard). Some properties in this object also accept custom HTML used to replace the section on
     *       Dashboard; see the documentation for each property to see the allowed values.
     *
     */
    helpSettings?: GetOrganizationBrandingPolicy200ApplicationJSONHelpSettings;
    /**
     * Name of the Dashboard branding policy.
     */
    name?: string;
}
export declare class GetOrganizationBrandingPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationBrandingPolicy200ApplicationJSONObject?: GetOrganizationBrandingPolicy200ApplicationJSON;
}
