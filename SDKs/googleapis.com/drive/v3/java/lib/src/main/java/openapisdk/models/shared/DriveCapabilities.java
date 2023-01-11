package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DriveCapabilities
 * Capabilities the current user has on this shared drive.
**/
public class DriveCapabilities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canAddChildren")
    public Boolean canAddChildren;
    public DriveCapabilities withCanAddChildren(Boolean canAddChildren) {
        this.canAddChildren = canAddChildren;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canChangeCopyRequiresWriterPermissionRestriction")
    public Boolean canChangeCopyRequiresWriterPermissionRestriction;
    public DriveCapabilities withCanChangeCopyRequiresWriterPermissionRestriction(Boolean canChangeCopyRequiresWriterPermissionRestriction) {
        this.canChangeCopyRequiresWriterPermissionRestriction = canChangeCopyRequiresWriterPermissionRestriction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canChangeDomainUsersOnlyRestriction")
    public Boolean canChangeDomainUsersOnlyRestriction;
    public DriveCapabilities withCanChangeDomainUsersOnlyRestriction(Boolean canChangeDomainUsersOnlyRestriction) {
        this.canChangeDomainUsersOnlyRestriction = canChangeDomainUsersOnlyRestriction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canChangeDriveBackground")
    public Boolean canChangeDriveBackground;
    public DriveCapabilities withCanChangeDriveBackground(Boolean canChangeDriveBackground) {
        this.canChangeDriveBackground = canChangeDriveBackground;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canChangeDriveMembersOnlyRestriction")
    public Boolean canChangeDriveMembersOnlyRestriction;
    public DriveCapabilities withCanChangeDriveMembersOnlyRestriction(Boolean canChangeDriveMembersOnlyRestriction) {
        this.canChangeDriveMembersOnlyRestriction = canChangeDriveMembersOnlyRestriction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canComment")
    public Boolean canComment;
    public DriveCapabilities withCanComment(Boolean canComment) {
        this.canComment = canComment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canCopy")
    public Boolean canCopy;
    public DriveCapabilities withCanCopy(Boolean canCopy) {
        this.canCopy = canCopy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canDeleteChildren")
    public Boolean canDeleteChildren;
    public DriveCapabilities withCanDeleteChildren(Boolean canDeleteChildren) {
        this.canDeleteChildren = canDeleteChildren;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canDeleteDrive")
    public Boolean canDeleteDrive;
    public DriveCapabilities withCanDeleteDrive(Boolean canDeleteDrive) {
        this.canDeleteDrive = canDeleteDrive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canDownload")
    public Boolean canDownload;
    public DriveCapabilities withCanDownload(Boolean canDownload) {
        this.canDownload = canDownload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canEdit")
    public Boolean canEdit;
    public DriveCapabilities withCanEdit(Boolean canEdit) {
        this.canEdit = canEdit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canListChildren")
    public Boolean canListChildren;
    public DriveCapabilities withCanListChildren(Boolean canListChildren) {
        this.canListChildren = canListChildren;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canManageMembers")
    public Boolean canManageMembers;
    public DriveCapabilities withCanManageMembers(Boolean canManageMembers) {
        this.canManageMembers = canManageMembers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canReadRevisions")
    public Boolean canReadRevisions;
    public DriveCapabilities withCanReadRevisions(Boolean canReadRevisions) {
        this.canReadRevisions = canReadRevisions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canRename")
    public Boolean canRename;
    public DriveCapabilities withCanRename(Boolean canRename) {
        this.canRename = canRename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canRenameDrive")
    public Boolean canRenameDrive;
    public DriveCapabilities withCanRenameDrive(Boolean canRenameDrive) {
        this.canRenameDrive = canRenameDrive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canResetDriveRestrictions")
    public Boolean canResetDriveRestrictions;
    public DriveCapabilities withCanResetDriveRestrictions(Boolean canResetDriveRestrictions) {
        this.canResetDriveRestrictions = canResetDriveRestrictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canShare")
    public Boolean canShare;
    public DriveCapabilities withCanShare(Boolean canShare) {
        this.canShare = canShare;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canTrashChildren")
    public Boolean canTrashChildren;
    public DriveCapabilities withCanTrashChildren(Boolean canTrashChildren) {
        this.canTrashChildren = canTrashChildren;
        return this;
    }
}