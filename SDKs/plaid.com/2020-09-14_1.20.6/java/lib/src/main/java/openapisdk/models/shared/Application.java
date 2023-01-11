package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Application
 * Metadata about the application
**/
public class Application {
    @JsonProperty("application_id")
    public String applicationId;
    public Application withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @JsonProperty("application_url")
    public String applicationUrl;
    public Application withApplicationUrl(String applicationUrl) {
        this.applicationUrl = applicationUrl;
        return this;
    }
    @JsonProperty("created_at")
    public LocalDate createdAt;
    public Application withCreatedAt(LocalDate createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("logo_url")
    public String logoUrl;
    public Application withLogoUrl(String logoUrl) {
        this.logoUrl = logoUrl;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Application withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("reason_for_access")
    public String reasonForAccess;
    public Application withReasonForAccess(String reasonForAccess) {
        this.reasonForAccess = reasonForAccess;
        return this;
    }
}