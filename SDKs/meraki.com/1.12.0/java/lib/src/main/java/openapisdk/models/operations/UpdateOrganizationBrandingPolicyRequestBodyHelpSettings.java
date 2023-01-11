package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateOrganizationBrandingPolicyRequestBodyHelpSettings
 *     Settings for describing the modifications to various Help page features. Each property in this object accepts one of
 *     'default or inherit' (do not modify functionality), 'hide' (remove the section from Dashboard), or 'show' (always show
 *     the section on Dashboard). Some properties in this object also accept custom HTML used to replace the section on
 *     Dashboard; see the documentation for each property to see the allowed values.
 * 
**/
public class UpdateOrganizationBrandingPolicyRequestBodyHelpSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiDocsSubtab")
    public UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum apiDocsSubtab;
    public UpdateOrganizationBrandingPolicyRequestBodyHelpSettings withApiDocsSubtab(UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum apiDocsSubtab) {
        this.apiDocsSubtab = apiDocsSubtab;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("casesSubtab")
    public UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum casesSubtab;
    public UpdateOrganizationBrandingPolicyRequestBodyHelpSettings withCasesSubtab(UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum casesSubtab) {
        this.casesSubtab = casesSubtab;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ciscoMerakiProductDocumentation")
    public String ciscoMerakiProductDocumentation;
    public UpdateOrganizationBrandingPolicyRequestBodyHelpSettings withCiscoMerakiProductDocumentation(String ciscoMerakiProductDocumentation) {
        this.ciscoMerakiProductDocumentation = ciscoMerakiProductDocumentation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("communitySubtab")
    public UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum communitySubtab;
    public UpdateOrganizationBrandingPolicyRequestBodyHelpSettings withCommunitySubtab(UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum communitySubtab) {
        this.communitySubtab = communitySubtab;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataProtectionRequestsSubtab")
    public UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum dataProtectionRequestsSubtab;
    public UpdateOrganizationBrandingPolicyRequestBodyHelpSettings withDataProtectionRequestsSubtab(UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum dataProtectionRequestsSubtab) {
        this.dataProtectionRequestsSubtab = dataProtectionRequestsSubtab;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firewallInfoSubtab")
    public UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum firewallInfoSubtab;
    public UpdateOrganizationBrandingPolicyRequestBodyHelpSettings withFirewallInfoSubtab(UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum firewallInfoSubtab) {
        this.firewallInfoSubtab = firewallInfoSubtab;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("getHelpSubtab")
    public UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum getHelpSubtab;
    public UpdateOrganizationBrandingPolicyRequestBodyHelpSettings withGetHelpSubtab(UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum getHelpSubtab) {
        this.getHelpSubtab = getHelpSubtab;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("getHelpSubtabKnowledgeBaseSearch")
    public String getHelpSubtabKnowledgeBaseSearch;
    public UpdateOrganizationBrandingPolicyRequestBodyHelpSettings withGetHelpSubtabKnowledgeBaseSearch(String getHelpSubtabKnowledgeBaseSearch) {
        this.getHelpSubtabKnowledgeBaseSearch = getHelpSubtabKnowledgeBaseSearch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hardwareReplacementsSubtab")
    public UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum hardwareReplacementsSubtab;
    public UpdateOrganizationBrandingPolicyRequestBodyHelpSettings withHardwareReplacementsSubtab(UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum hardwareReplacementsSubtab) {
        this.hardwareReplacementsSubtab = hardwareReplacementsSubtab;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("helpTab")
    public UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum helpTab;
    public UpdateOrganizationBrandingPolicyRequestBodyHelpSettings withHelpTab(UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum helpTab) {
        this.helpTab = helpTab;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newFeaturesSubtab")
    public UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum newFeaturesSubtab;
    public UpdateOrganizationBrandingPolicyRequestBodyHelpSettings withNewFeaturesSubtab(UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum newFeaturesSubtab) {
        this.newFeaturesSubtab = newFeaturesSubtab;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smForums")
    public UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum smForums;
    public UpdateOrganizationBrandingPolicyRequestBodyHelpSettings withSmForums(UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum smForums) {
        this.smForums = smForums;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportContactInfo")
    public String supportContactInfo;
    public UpdateOrganizationBrandingPolicyRequestBodyHelpSettings withSupportContactInfo(String supportContactInfo) {
        this.supportContactInfo = supportContactInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("universalSearchKnowledgeBaseSearch")
    public UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum universalSearchKnowledgeBaseSearch;
    public UpdateOrganizationBrandingPolicyRequestBodyHelpSettings withUniversalSearchKnowledgeBaseSearch(UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum universalSearchKnowledgeBaseSearch) {
        this.universalSearchKnowledgeBaseSearch = universalSearchKnowledgeBaseSearch;
        return this;
    }
}