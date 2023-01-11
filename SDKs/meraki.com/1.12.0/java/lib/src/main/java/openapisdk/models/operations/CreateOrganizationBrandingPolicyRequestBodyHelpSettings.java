package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateOrganizationBrandingPolicyRequestBodyHelpSettings
 *     Settings for describing the modifications to various Help page features. Each property in this object accepts one of
 *     'default or inherit' (do not modify functionality), 'hide' (remove the section from Dashboard), or 'show' (always show
 *     the section on Dashboard). Some properties in this object also accept custom HTML used to replace the section on
 *     Dashboard; see the documentation for each property to see the allowed values.
 *  Each property defaults to 'default or inherit' when not provided.
**/
public class CreateOrganizationBrandingPolicyRequestBodyHelpSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiDocsSubtab")
    public CreateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum apiDocsSubtab;
    public CreateOrganizationBrandingPolicyRequestBodyHelpSettings withApiDocsSubtab(CreateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum apiDocsSubtab) {
        this.apiDocsSubtab = apiDocsSubtab;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("casesSubtab")
    public CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum casesSubtab;
    public CreateOrganizationBrandingPolicyRequestBodyHelpSettings withCasesSubtab(CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum casesSubtab) {
        this.casesSubtab = casesSubtab;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ciscoMerakiProductDocumentation")
    public String ciscoMerakiProductDocumentation;
    public CreateOrganizationBrandingPolicyRequestBodyHelpSettings withCiscoMerakiProductDocumentation(String ciscoMerakiProductDocumentation) {
        this.ciscoMerakiProductDocumentation = ciscoMerakiProductDocumentation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("communitySubtab")
    public CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum communitySubtab;
    public CreateOrganizationBrandingPolicyRequestBodyHelpSettings withCommunitySubtab(CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum communitySubtab) {
        this.communitySubtab = communitySubtab;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataProtectionRequestsSubtab")
    public CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum dataProtectionRequestsSubtab;
    public CreateOrganizationBrandingPolicyRequestBodyHelpSettings withDataProtectionRequestsSubtab(CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum dataProtectionRequestsSubtab) {
        this.dataProtectionRequestsSubtab = dataProtectionRequestsSubtab;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firewallInfoSubtab")
    public CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum firewallInfoSubtab;
    public CreateOrganizationBrandingPolicyRequestBodyHelpSettings withFirewallInfoSubtab(CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum firewallInfoSubtab) {
        this.firewallInfoSubtab = firewallInfoSubtab;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("getHelpSubtab")
    public CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum getHelpSubtab;
    public CreateOrganizationBrandingPolicyRequestBodyHelpSettings withGetHelpSubtab(CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum getHelpSubtab) {
        this.getHelpSubtab = getHelpSubtab;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("getHelpSubtabKnowledgeBaseSearch")
    public String getHelpSubtabKnowledgeBaseSearch;
    public CreateOrganizationBrandingPolicyRequestBodyHelpSettings withGetHelpSubtabKnowledgeBaseSearch(String getHelpSubtabKnowledgeBaseSearch) {
        this.getHelpSubtabKnowledgeBaseSearch = getHelpSubtabKnowledgeBaseSearch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hardwareReplacementsSubtab")
    public CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum hardwareReplacementsSubtab;
    public CreateOrganizationBrandingPolicyRequestBodyHelpSettings withHardwareReplacementsSubtab(CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum hardwareReplacementsSubtab) {
        this.hardwareReplacementsSubtab = hardwareReplacementsSubtab;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("helpTab")
    public CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum helpTab;
    public CreateOrganizationBrandingPolicyRequestBodyHelpSettings withHelpTab(CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum helpTab) {
        this.helpTab = helpTab;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newFeaturesSubtab")
    public CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum newFeaturesSubtab;
    public CreateOrganizationBrandingPolicyRequestBodyHelpSettings withNewFeaturesSubtab(CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum newFeaturesSubtab) {
        this.newFeaturesSubtab = newFeaturesSubtab;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smForums")
    public CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum smForums;
    public CreateOrganizationBrandingPolicyRequestBodyHelpSettings withSmForums(CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum smForums) {
        this.smForums = smForums;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportContactInfo")
    public String supportContactInfo;
    public CreateOrganizationBrandingPolicyRequestBodyHelpSettings withSupportContactInfo(String supportContactInfo) {
        this.supportContactInfo = supportContactInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("universalSearchKnowledgeBaseSearch")
    public CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum universalSearchKnowledgeBaseSearch;
    public CreateOrganizationBrandingPolicyRequestBodyHelpSettings withUniversalSearchKnowledgeBaseSearch(CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum universalSearchKnowledgeBaseSearch) {
        this.universalSearchKnowledgeBaseSearch = universalSearchKnowledgeBaseSearch;
        return this;
    }
}