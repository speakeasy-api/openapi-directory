import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Which kinds of admins this policy applies to. Can be one of 'All organization admins', 'All enterprise admins', 'All network admins', 'All admins of networks...', 'All admins of networks tagged...', 'Specific admins...', 'All admins' or 'All SAML admins'.
 */
export declare enum CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum {
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
export declare class CreateOrganizationBrandingPolicyRequestBodyAdminSettings extends SpeakeasyBase {
    /**
     * Which kinds of admins this policy applies to. Can be one of 'All organization admins', 'All enterprise admins', 'All network admins', 'All admins of networks...', 'All admins of networks tagged...', 'Specific admins...', 'All admins' or 'All SAML admins'.
     */
    appliesTo?: CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum;
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
 * The format of the encoded contents.  Supported formats are 'png', 'gif', and jpg'.
 */
export declare enum CreateOrganizationBrandingPolicyRequestBodyCustomLogoImageFormatEnum {
    Gif = "gif",
    Jpg = "jpg",
    Png = "png"
}
/**
 * Properties for setting the image.
 */
export declare class CreateOrganizationBrandingPolicyRequestBodyCustomLogoImage extends SpeakeasyBase {
    /**
     * The file contents (a base 64 encoded string) of your new logo.
     */
    contents?: string;
    /**
     * The format of the encoded contents.  Supported formats are 'png', 'gif', and jpg'.
     */
    format?: CreateOrganizationBrandingPolicyRequestBodyCustomLogoImageFormatEnum;
}
/**
 * Properties describing the custom logo attached to the branding policy.
 */
export declare class CreateOrganizationBrandingPolicyRequestBodyCustomLogo extends SpeakeasyBase {
    /**
     * Whether or not there is a custom logo enabled.
     */
    enabled?: boolean;
    /**
     * Properties for setting the image.
     */
    image?: CreateOrganizationBrandingPolicyRequestBodyCustomLogoImage;
}
/**
 *       The 'Help -> API docs' subtab where a detailed description of the Dashboard API is listed. Can be one of
 *
 * @remarks
 *       'default or inherit', 'hide' or 'show'.
 *
 */
export declare enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum {
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
export declare enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum {
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
export declare enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum {
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
export declare enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum {
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
export declare enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum {
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
export declare enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum {
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
export declare enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum {
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
export declare enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum {
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
export declare enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpWidgetEnum {
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
export declare enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum {
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
export declare enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum {
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
export declare enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum {
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
 *  Each property defaults to 'default or inherit' when not provided.
 */
export declare class CreateOrganizationBrandingPolicyRequestBodyHelpSettings extends SpeakeasyBase {
    /**
     *       The 'Help -> API docs' subtab where a detailed description of the Dashboard API is listed. Can be one of
     *
     * @remarks
     *       'default or inherit', 'hide' or 'show'.
     *
     */
    apiDocsSubtab?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum;
    /**
     *       The 'Help -> Cases' Dashboard subtab on which Cisco Meraki support cases for this organization can be managed. Can be one
     *
     * @remarks
     *       of 'default or inherit', 'hide' or 'show'.
     *
     */
    casesSubtab?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum;
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
    communitySubtab?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum;
    /**
     *       The 'Help -> Data protection requests' Dashboard subtab on which requests to delete, restrict, or export end-user data can
     *
     * @remarks
     *       be audited. Can be one of 'default or inherit', 'hide' or 'show'.
     *
     */
    dataProtectionRequestsSubtab?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum;
    /**
     *       The 'Help -> Firewall info' subtab where necessary upstream firewall rules for communication to the Cisco Meraki cloud are
     *
     * @remarks
     *       listed. Can be one of 'default or inherit', 'hide' or 'show'.
     *
     */
    firewallInfoSubtab?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum;
    /**
     *       The 'Help -> Get Help' subtab on which Cisco Meraki KB, Product Manuals, and Support/Case Information are displayed. Note
     *
     * @remarks
     *       that if this subtab is hidden, branding customizations for the KB on 'Get help', Cisco Meraki product documentation,
     *       and support contact info will not be visible. Can be one of 'default or inherit', 'hide' or 'show'.
     *
     */
    getHelpSubtab?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum;
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
    hardwareReplacementsSubtab?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum;
    /**
     *       The Help tab, under which all support information resides. If this tab is hidden, no other 'Help' branding
     *
     * @remarks
     *       customizations will be visible. Can be one of 'default or inherit', 'hide' or 'show'.
     *
     */
    helpTab?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum;
    /**
     *       The 'Help Widget' is a support widget which provides access to live chat, documentation links, Sales contact info,
     *
     * @remarks
     *       and other contact avenues to reach Meraki Support. Can be one of 'default or inherit', 'hide' or 'show'.
     *
     */
    helpWidget?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpWidgetEnum;
    /**
     *       The 'Help -> New features' subtab where new Dashboard features are detailed. Can be one of 'default or inherit', 'hide' or 'show'.
     *
     * @remarks
     *
     */
    newFeaturesSubtab?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum;
    /**
     *       The 'SM Forums' subtab which links to community-based support for Cisco Meraki Systems Manager. Only configurable for
     *
     * @remarks
     *       organizations that contain Systems Manager networks. Can be one of 'default or inherit', 'hide' or 'show'.
     *
     */
    smForums?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum;
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
    universalSearchKnowledgeBaseSearch?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum;
}
export declare class CreateOrganizationBrandingPolicyRequestBody extends SpeakeasyBase {
    /**
     * Settings for describing which kinds of admins this policy applies to.
     */
    adminSettings?: CreateOrganizationBrandingPolicyRequestBodyAdminSettings;
    /**
     * Properties describing the custom logo attached to the branding policy.
     */
    customLogo?: CreateOrganizationBrandingPolicyRequestBodyCustomLogo;
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
     *  Each property defaults to 'default or inherit' when not provided.
     */
    helpSettings?: CreateOrganizationBrandingPolicyRequestBodyHelpSettings;
    /**
     * Name of the Dashboard branding policy.
     */
    name?: string;
}
export declare class CreateOrganizationBrandingPolicyRequest extends SpeakeasyBase {
    requestBody?: CreateOrganizationBrandingPolicyRequestBody;
    organizationId: string;
}
/**
 * Which kinds of admins this policy applies to. Can be one of 'All organization admins', 'All enterprise admins', 'All network admins', 'All admins of networks...', 'All admins of networks tagged...', 'Specific admins...', 'All admins' or 'All SAML admins'.
 */
export declare enum CreateOrganizationBrandingPolicy201ApplicationJSONAdminSettingsAppliesToEnum {
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
export declare class CreateOrganizationBrandingPolicy201ApplicationJSONAdminSettings extends SpeakeasyBase {
    /**
     * Which kinds of admins this policy applies to. Can be one of 'All organization admins', 'All enterprise admins', 'All network admins', 'All admins of networks...', 'All admins of networks tagged...', 'Specific admins...', 'All admins' or 'All SAML admins'.
     */
    appliesTo?: CreateOrganizationBrandingPolicy201ApplicationJSONAdminSettingsAppliesToEnum;
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
export declare class CreateOrganizationBrandingPolicy201ApplicationJSONCustomLogoImagePreview extends SpeakeasyBase {
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
export declare class CreateOrganizationBrandingPolicy201ApplicationJSONCustomLogoImage extends SpeakeasyBase {
    /**
     * Preview of the image
     */
    preview?: CreateOrganizationBrandingPolicy201ApplicationJSONCustomLogoImagePreview;
}
/**
 * Properties describing the custom logo attached to the branding policy.
 */
export declare class CreateOrganizationBrandingPolicy201ApplicationJSONCustomLogo extends SpeakeasyBase {
    /**
     * Whether or not there is a custom logo enabled.
     */
    enabled?: boolean;
    /**
     * Properties of the image.
     */
    image?: CreateOrganizationBrandingPolicy201ApplicationJSONCustomLogoImage;
}
/**
 *       The 'Help -> API docs' subtab where a detailed description of the Dashboard API is listed. Can be one of
 *
 * @remarks
 *       'default or inherit', 'hide' or 'show'.
 *
 */
export declare enum CreateOrganizationBrandingPolicy201ApplicationJSONHelpSettingsApiDocsSubtabEnum {
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
export declare enum CreateOrganizationBrandingPolicy201ApplicationJSONHelpSettingsCasesSubtabEnum {
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
export declare enum CreateOrganizationBrandingPolicy201ApplicationJSONHelpSettingsCommunitySubtabEnum {
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
export declare enum CreateOrganizationBrandingPolicy201ApplicationJSONHelpSettingsDataProtectionRequestsSubtabEnum {
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
export declare enum CreateOrganizationBrandingPolicy201ApplicationJSONHelpSettingsFirewallInfoSubtabEnum {
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
export declare enum CreateOrganizationBrandingPolicy201ApplicationJSONHelpSettingsGetHelpSubtabEnum {
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
export declare enum CreateOrganizationBrandingPolicy201ApplicationJSONHelpSettingsHardwareReplacementsSubtabEnum {
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
export declare enum CreateOrganizationBrandingPolicy201ApplicationJSONHelpSettingsHelpTabEnum {
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
export declare enum CreateOrganizationBrandingPolicy201ApplicationJSONHelpSettingsHelpWidgetEnum {
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
export declare enum CreateOrganizationBrandingPolicy201ApplicationJSONHelpSettingsNewFeaturesSubtabEnum {
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
export declare enum CreateOrganizationBrandingPolicy201ApplicationJSONHelpSettingsSmForumsEnum {
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
export declare enum CreateOrganizationBrandingPolicy201ApplicationJSONHelpSettingsUniversalSearchKnowledgeBaseSearchEnum {
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
 *  Each property defaults to 'default or inherit' when not provided.
 */
export declare class CreateOrganizationBrandingPolicy201ApplicationJSONHelpSettings extends SpeakeasyBase {
    /**
     *       The 'Help -> API docs' subtab where a detailed description of the Dashboard API is listed. Can be one of
     *
     * @remarks
     *       'default or inherit', 'hide' or 'show'.
     *
     */
    apiDocsSubtab?: CreateOrganizationBrandingPolicy201ApplicationJSONHelpSettingsApiDocsSubtabEnum;
    /**
     *       The 'Help -> Cases' Dashboard subtab on which Cisco Meraki support cases for this organization can be managed. Can be one
     *
     * @remarks
     *       of 'default or inherit', 'hide' or 'show'.
     *
     */
    casesSubtab?: CreateOrganizationBrandingPolicy201ApplicationJSONHelpSettingsCasesSubtabEnum;
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
    communitySubtab?: CreateOrganizationBrandingPolicy201ApplicationJSONHelpSettingsCommunitySubtabEnum;
    /**
     *       The 'Help -> Data protection requests' Dashboard subtab on which requests to delete, restrict, or export end-user data can
     *
     * @remarks
     *       be audited. Can be one of 'default or inherit', 'hide' or 'show'.
     *
     */
    dataProtectionRequestsSubtab?: CreateOrganizationBrandingPolicy201ApplicationJSONHelpSettingsDataProtectionRequestsSubtabEnum;
    /**
     *       The 'Help -> Firewall info' subtab where necessary upstream firewall rules for communication to the Cisco Meraki cloud are
     *
     * @remarks
     *       listed. Can be one of 'default or inherit', 'hide' or 'show'.
     *
     */
    firewallInfoSubtab?: CreateOrganizationBrandingPolicy201ApplicationJSONHelpSettingsFirewallInfoSubtabEnum;
    /**
     *       The 'Help -> Get Help' subtab on which Cisco Meraki KB, Product Manuals, and Support/Case Information are displayed. Note
     *
     * @remarks
     *       that if this subtab is hidden, branding customizations for the KB on 'Get help', Cisco Meraki product documentation,
     *       and support contact info will not be visible. Can be one of 'default or inherit', 'hide' or 'show'.
     *
     */
    getHelpSubtab?: CreateOrganizationBrandingPolicy201ApplicationJSONHelpSettingsGetHelpSubtabEnum;
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
    hardwareReplacementsSubtab?: CreateOrganizationBrandingPolicy201ApplicationJSONHelpSettingsHardwareReplacementsSubtabEnum;
    /**
     *       The Help tab, under which all support information resides. If this tab is hidden, no other 'Help' branding
     *
     * @remarks
     *       customizations will be visible. Can be one of 'default or inherit', 'hide' or 'show'.
     *
     */
    helpTab?: CreateOrganizationBrandingPolicy201ApplicationJSONHelpSettingsHelpTabEnum;
    /**
     *       The 'Help Widget' is a support widget which provides access to live chat, documentation links, Sales contact info,
     *
     * @remarks
     *       and other contact avenues to reach Meraki Support. Can be one of 'default or inherit', 'hide' or 'show'.
     *
     */
    helpWidget?: CreateOrganizationBrandingPolicy201ApplicationJSONHelpSettingsHelpWidgetEnum;
    /**
     *       The 'Help -> New features' subtab where new Dashboard features are detailed. Can be one of 'default or inherit', 'hide' or 'show'.
     *
     * @remarks
     *
     */
    newFeaturesSubtab?: CreateOrganizationBrandingPolicy201ApplicationJSONHelpSettingsNewFeaturesSubtabEnum;
    /**
     *       The 'SM Forums' subtab which links to community-based support for Cisco Meraki Systems Manager. Only configurable for
     *
     * @remarks
     *       organizations that contain Systems Manager networks. Can be one of 'default or inherit', 'hide' or 'show'.
     *
     */
    smForums?: CreateOrganizationBrandingPolicy201ApplicationJSONHelpSettingsSmForumsEnum;
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
    universalSearchKnowledgeBaseSearch?: CreateOrganizationBrandingPolicy201ApplicationJSONHelpSettingsUniversalSearchKnowledgeBaseSearchEnum;
}
/**
 * Successful operation
 */
export declare class CreateOrganizationBrandingPolicy201ApplicationJSON extends SpeakeasyBase {
    /**
     * Settings for describing which kinds of admins this policy applies to.
     */
    adminSettings?: CreateOrganizationBrandingPolicy201ApplicationJSONAdminSettings;
    /**
     * Properties describing the custom logo attached to the branding policy.
     */
    customLogo?: CreateOrganizationBrandingPolicy201ApplicationJSONCustomLogo;
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
     *  Each property defaults to 'default or inherit' when not provided.
     */
    helpSettings?: CreateOrganizationBrandingPolicy201ApplicationJSONHelpSettings;
    /**
     * Name of the Dashboard branding policy.
     */
    name?: string;
}
export declare class CreateOrganizationBrandingPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createOrganizationBrandingPolicy201ApplicationJSONObject?: CreateOrganizationBrandingPolicy201ApplicationJSON;
}
