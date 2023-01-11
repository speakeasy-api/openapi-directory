package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LdapAuthModuleConfig
 * Settings to authenticate users using a generic OAuth2 provider
**/
public class LdapAuthModuleConfig {
    @JsonProperty("adminPassword")
    public String adminPassword;
    public LdapAuthModuleConfig withAdminPassword(String adminPassword) {
        this.adminPassword = adminPassword;
        return this;
    }
    @JsonProperty("adminUsername")
    public String adminUsername;
    public LdapAuthModuleConfig withAdminUsername(String adminUsername) {
        this.adminUsername = adminUsername;
        return this;
    }
    @JsonProperty("desc")
    public String desc;
    public LdapAuthModuleConfig withDesc(String desc) {
        this.desc = desc;
        return this;
    }
    @JsonProperty("emailField")
    public String emailField;
    public LdapAuthModuleConfig withEmailField(String emailField) {
        this.emailField = emailField;
        return this;
    }
    @JsonProperty("groupFilter")
    public String groupFilter;
    public LdapAuthModuleConfig withGroupFilter(String groupFilter) {
        this.groupFilter = groupFilter;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public LdapAuthModuleConfig withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public LdapAuthModuleConfig withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("nameField")
    public String nameField;
    public LdapAuthModuleConfig withNameField(String nameField) {
        this.nameField = nameField;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otoroshiDataField")
    public String otoroshiDataField;
    public LdapAuthModuleConfig withOtoroshiDataField(String otoroshiDataField) {
        this.otoroshiDataField = otoroshiDataField;
        return this;
    }
    @JsonProperty("searchBase")
    public String searchBase;
    public LdapAuthModuleConfig withSearchBase(String searchBase) {
        this.searchBase = searchBase;
        return this;
    }
    @JsonProperty("searchFilter")
    public String searchFilter;
    public LdapAuthModuleConfig withSearchFilter(String searchFilter) {
        this.searchFilter = searchFilter;
        return this;
    }
    @JsonProperty("serverUrl")
    public String serverUrl;
    public LdapAuthModuleConfig withServerUrl(String serverUrl) {
        this.serverUrl = serverUrl;
        return this;
    }
    @JsonProperty("sessionMaxAge")
    public Integer sessionMaxAge;
    public LdapAuthModuleConfig withSessionMaxAge(Integer sessionMaxAge) {
        this.sessionMaxAge = sessionMaxAge;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public LdapAuthModuleConfig withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("userBase")
    public String userBase;
    public LdapAuthModuleConfig withUserBase(String userBase) {
        this.userBase = userBase;
        return this;
    }
}