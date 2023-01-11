package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ImportExportAdmins
 * Administrator using FIDO U2F device to access Otoroshi
**/
public class ImportExportAdmins {
    @JsonProperty("createdAt")
    public Long createdAt;
    public ImportExportAdmins withCreatedAt(Long createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("label")
    public String label;
    public ImportExportAdmins withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public ImportExportAdmins withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("registration")
    public java.util.Map<String, String> registration;
    public ImportExportAdmins withRegistration(java.util.Map<String, String> registration) {
        this.registration = registration;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public ImportExportAdmins withUsername(String username) {
        this.username = username;
        return this;
    }
}