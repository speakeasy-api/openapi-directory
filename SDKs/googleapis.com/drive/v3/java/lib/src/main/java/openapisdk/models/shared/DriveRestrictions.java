package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DriveRestrictions
 * A set of restrictions that apply to this shared drive or items inside this shared drive.
**/
public class DriveRestrictions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adminManagedRestrictions")
    public Boolean adminManagedRestrictions;
    public DriveRestrictions withAdminManagedRestrictions(Boolean adminManagedRestrictions) {
        this.adminManagedRestrictions = adminManagedRestrictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyRequiresWriterPermission")
    public Boolean copyRequiresWriterPermission;
    public DriveRestrictions withCopyRequiresWriterPermission(Boolean copyRequiresWriterPermission) {
        this.copyRequiresWriterPermission = copyRequiresWriterPermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainUsersOnly")
    public Boolean domainUsersOnly;
    public DriveRestrictions withDomainUsersOnly(Boolean domainUsersOnly) {
        this.domainUsersOnly = domainUsersOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driveMembersOnly")
    public Boolean driveMembersOnly;
    public DriveRestrictions withDriveMembersOnly(Boolean driveMembersOnly) {
        this.driveMembersOnly = driveMembersOnly;
        return this;
    }
}