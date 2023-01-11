package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TeamDriveCapabilities
 * Capabilities the current user has on this Team Drive.
**/
public class TeamDriveCapabilities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canAddChildren")
    public Boolean canAddChildren;
    public TeamDriveCapabilities withCanAddChildren(Boolean canAddChildren) {
        this.canAddChildren = canAddChildren;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canChangeCopyRequiresWriterPermissionRestriction")
    public Boolean canChangeCopyRequiresWriterPermissionRestriction;
    public TeamDriveCapabilities withCanChangeCopyRequiresWriterPermissionRestriction(Boolean canChangeCopyRequiresWriterPermissionRestriction) {
        this.canChangeCopyRequiresWriterPermissionRestriction = canChangeCopyRequiresWriterPermissionRestriction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canChangeDomainUsersOnlyRestriction")
    public Boolean canChangeDomainUsersOnlyRestriction;
    public TeamDriveCapabilities withCanChangeDomainUsersOnlyRestriction(Boolean canChangeDomainUsersOnlyRestriction) {
        this.canChangeDomainUsersOnlyRestriction = canChangeDomainUsersOnlyRestriction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canChangeTeamDriveBackground")
    public Boolean canChangeTeamDriveBackground;
    public TeamDriveCapabilities withCanChangeTeamDriveBackground(Boolean canChangeTeamDriveBackground) {
        this.canChangeTeamDriveBackground = canChangeTeamDriveBackground;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canChangeTeamMembersOnlyRestriction")
    public Boolean canChangeTeamMembersOnlyRestriction;
    public TeamDriveCapabilities withCanChangeTeamMembersOnlyRestriction(Boolean canChangeTeamMembersOnlyRestriction) {
        this.canChangeTeamMembersOnlyRestriction = canChangeTeamMembersOnlyRestriction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canComment")
    public Boolean canComment;
    public TeamDriveCapabilities withCanComment(Boolean canComment) {
        this.canComment = canComment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canCopy")
    public Boolean canCopy;
    public TeamDriveCapabilities withCanCopy(Boolean canCopy) {
        this.canCopy = canCopy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canDeleteChildren")
    public Boolean canDeleteChildren;
    public TeamDriveCapabilities withCanDeleteChildren(Boolean canDeleteChildren) {
        this.canDeleteChildren = canDeleteChildren;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canDeleteTeamDrive")
    public Boolean canDeleteTeamDrive;
    public TeamDriveCapabilities withCanDeleteTeamDrive(Boolean canDeleteTeamDrive) {
        this.canDeleteTeamDrive = canDeleteTeamDrive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canDownload")
    public Boolean canDownload;
    public TeamDriveCapabilities withCanDownload(Boolean canDownload) {
        this.canDownload = canDownload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canEdit")
    public Boolean canEdit;
    public TeamDriveCapabilities withCanEdit(Boolean canEdit) {
        this.canEdit = canEdit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canListChildren")
    public Boolean canListChildren;
    public TeamDriveCapabilities withCanListChildren(Boolean canListChildren) {
        this.canListChildren = canListChildren;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canManageMembers")
    public Boolean canManageMembers;
    public TeamDriveCapabilities withCanManageMembers(Boolean canManageMembers) {
        this.canManageMembers = canManageMembers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canReadRevisions")
    public Boolean canReadRevisions;
    public TeamDriveCapabilities withCanReadRevisions(Boolean canReadRevisions) {
        this.canReadRevisions = canReadRevisions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canRemoveChildren")
    public Boolean canRemoveChildren;
    public TeamDriveCapabilities withCanRemoveChildren(Boolean canRemoveChildren) {
        this.canRemoveChildren = canRemoveChildren;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canRename")
    public Boolean canRename;
    public TeamDriveCapabilities withCanRename(Boolean canRename) {
        this.canRename = canRename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canRenameTeamDrive")
    public Boolean canRenameTeamDrive;
    public TeamDriveCapabilities withCanRenameTeamDrive(Boolean canRenameTeamDrive) {
        this.canRenameTeamDrive = canRenameTeamDrive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canResetTeamDriveRestrictions")
    public Boolean canResetTeamDriveRestrictions;
    public TeamDriveCapabilities withCanResetTeamDriveRestrictions(Boolean canResetTeamDriveRestrictions) {
        this.canResetTeamDriveRestrictions = canResetTeamDriveRestrictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canShare")
    public Boolean canShare;
    public TeamDriveCapabilities withCanShare(Boolean canShare) {
        this.canShare = canShare;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canTrashChildren")
    public Boolean canTrashChildren;
    public TeamDriveCapabilities withCanTrashChildren(Boolean canTrashChildren) {
        this.canTrashChildren = canTrashChildren;
        return this;
    }
}