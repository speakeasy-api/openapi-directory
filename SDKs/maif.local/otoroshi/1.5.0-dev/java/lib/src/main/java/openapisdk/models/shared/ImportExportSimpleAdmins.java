package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ImportExportSimpleAdmins
 * Administrator using just login/password tuple to access Otoroshi
**/
public class ImportExportSimpleAdmins {
    @JsonProperty("createdAt")
    public Long createdAt;
    public ImportExportSimpleAdmins withCreatedAt(Long createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("label")
    public String label;
    public ImportExportSimpleAdmins withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public ImportExportSimpleAdmins withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public ImportExportSimpleAdmins withUsername(String username) {
        this.username = username;
        return this;
    }
}