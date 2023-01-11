package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccessApprovalSettings
 * Settings on a Project/Folder/Organization related to Access Approval.
**/
public class AccessApprovalSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeKeyVersion")
    public String activeKeyVersion;
    public AccessApprovalSettings withActiveKeyVersion(String activeKeyVersion) {
        this.activeKeyVersion = activeKeyVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ancestorHasActiveKeyVersion")
    public Boolean ancestorHasActiveKeyVersion;
    public AccessApprovalSettings withAncestorHasActiveKeyVersion(Boolean ancestorHasActiveKeyVersion) {
        this.ancestorHasActiveKeyVersion = ancestorHasActiveKeyVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enrolledAncestor")
    public Boolean enrolledAncestor;
    public AccessApprovalSettings withEnrolledAncestor(Boolean enrolledAncestor) {
        this.enrolledAncestor = enrolledAncestor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enrolledServices")
    public EnrolledService[] enrolledServices;
    public AccessApprovalSettings withEnrolledServices(EnrolledService[] enrolledServices) {
        this.enrolledServices = enrolledServices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invalidKeyVersion")
    public Boolean invalidKeyVersion;
    public AccessApprovalSettings withInvalidKeyVersion(Boolean invalidKeyVersion) {
        this.invalidKeyVersion = invalidKeyVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AccessApprovalSettings withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationEmails")
    public String[] notificationEmails;
    public AccessApprovalSettings withNotificationEmails(String[] notificationEmails) {
        this.notificationEmails = notificationEmails;
        return this;
    }
}