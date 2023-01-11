package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccessApprovalSettingsInput
 * Settings on a Project/Folder/Organization related to Access Approval.
**/
public class AccessApprovalSettingsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeKeyVersion")
    public String activeKeyVersion;
    public AccessApprovalSettingsInput withActiveKeyVersion(String activeKeyVersion) {
        this.activeKeyVersion = activeKeyVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enrolledServices")
    public EnrolledService[] enrolledServices;
    public AccessApprovalSettingsInput withEnrolledServices(EnrolledService[] enrolledServices) {
        this.enrolledServices = enrolledServices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AccessApprovalSettingsInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationEmails")
    public String[] notificationEmails;
    public AccessApprovalSettingsInput withNotificationEmails(String[] notificationEmails) {
        this.notificationEmails = notificationEmails;
        return this;
    }
}