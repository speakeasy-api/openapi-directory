package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileCapabilities
 * Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.
**/
public class FileCapabilities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canAcceptOwnership")
    public Boolean canAcceptOwnership;
    public FileCapabilities withCanAcceptOwnership(Boolean canAcceptOwnership) {
        this.canAcceptOwnership = canAcceptOwnership;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canAddChildren")
    public Boolean canAddChildren;
    public FileCapabilities withCanAddChildren(Boolean canAddChildren) {
        this.canAddChildren = canAddChildren;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canAddFolderFromAnotherDrive")
    public Boolean canAddFolderFromAnotherDrive;
    public FileCapabilities withCanAddFolderFromAnotherDrive(Boolean canAddFolderFromAnotherDrive) {
        this.canAddFolderFromAnotherDrive = canAddFolderFromAnotherDrive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canAddMyDriveParent")
    public Boolean canAddMyDriveParent;
    public FileCapabilities withCanAddMyDriveParent(Boolean canAddMyDriveParent) {
        this.canAddMyDriveParent = canAddMyDriveParent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canChangeCopyRequiresWriterPermission")
    public Boolean canChangeCopyRequiresWriterPermission;
    public FileCapabilities withCanChangeCopyRequiresWriterPermission(Boolean canChangeCopyRequiresWriterPermission) {
        this.canChangeCopyRequiresWriterPermission = canChangeCopyRequiresWriterPermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canChangeSecurityUpdateEnabled")
    public Boolean canChangeSecurityUpdateEnabled;
    public FileCapabilities withCanChangeSecurityUpdateEnabled(Boolean canChangeSecurityUpdateEnabled) {
        this.canChangeSecurityUpdateEnabled = canChangeSecurityUpdateEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canChangeViewersCanCopyContent")
    public Boolean canChangeViewersCanCopyContent;
    public FileCapabilities withCanChangeViewersCanCopyContent(Boolean canChangeViewersCanCopyContent) {
        this.canChangeViewersCanCopyContent = canChangeViewersCanCopyContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canComment")
    public Boolean canComment;
    public FileCapabilities withCanComment(Boolean canComment) {
        this.canComment = canComment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canCopy")
    public Boolean canCopy;
    public FileCapabilities withCanCopy(Boolean canCopy) {
        this.canCopy = canCopy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canDelete")
    public Boolean canDelete;
    public FileCapabilities withCanDelete(Boolean canDelete) {
        this.canDelete = canDelete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canDeleteChildren")
    public Boolean canDeleteChildren;
    public FileCapabilities withCanDeleteChildren(Boolean canDeleteChildren) {
        this.canDeleteChildren = canDeleteChildren;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canDownload")
    public Boolean canDownload;
    public FileCapabilities withCanDownload(Boolean canDownload) {
        this.canDownload = canDownload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canEdit")
    public Boolean canEdit;
    public FileCapabilities withCanEdit(Boolean canEdit) {
        this.canEdit = canEdit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canListChildren")
    public Boolean canListChildren;
    public FileCapabilities withCanListChildren(Boolean canListChildren) {
        this.canListChildren = canListChildren;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canModifyContent")
    public Boolean canModifyContent;
    public FileCapabilities withCanModifyContent(Boolean canModifyContent) {
        this.canModifyContent = canModifyContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canModifyContentRestriction")
    public Boolean canModifyContentRestriction;
    public FileCapabilities withCanModifyContentRestriction(Boolean canModifyContentRestriction) {
        this.canModifyContentRestriction = canModifyContentRestriction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canModifyLabels")
    public Boolean canModifyLabels;
    public FileCapabilities withCanModifyLabels(Boolean canModifyLabels) {
        this.canModifyLabels = canModifyLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canMoveChildrenOutOfDrive")
    public Boolean canMoveChildrenOutOfDrive;
    public FileCapabilities withCanMoveChildrenOutOfDrive(Boolean canMoveChildrenOutOfDrive) {
        this.canMoveChildrenOutOfDrive = canMoveChildrenOutOfDrive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canMoveChildrenOutOfTeamDrive")
    public Boolean canMoveChildrenOutOfTeamDrive;
    public FileCapabilities withCanMoveChildrenOutOfTeamDrive(Boolean canMoveChildrenOutOfTeamDrive) {
        this.canMoveChildrenOutOfTeamDrive = canMoveChildrenOutOfTeamDrive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canMoveChildrenWithinDrive")
    public Boolean canMoveChildrenWithinDrive;
    public FileCapabilities withCanMoveChildrenWithinDrive(Boolean canMoveChildrenWithinDrive) {
        this.canMoveChildrenWithinDrive = canMoveChildrenWithinDrive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canMoveChildrenWithinTeamDrive")
    public Boolean canMoveChildrenWithinTeamDrive;
    public FileCapabilities withCanMoveChildrenWithinTeamDrive(Boolean canMoveChildrenWithinTeamDrive) {
        this.canMoveChildrenWithinTeamDrive = canMoveChildrenWithinTeamDrive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canMoveItemIntoTeamDrive")
    public Boolean canMoveItemIntoTeamDrive;
    public FileCapabilities withCanMoveItemIntoTeamDrive(Boolean canMoveItemIntoTeamDrive) {
        this.canMoveItemIntoTeamDrive = canMoveItemIntoTeamDrive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canMoveItemOutOfDrive")
    public Boolean canMoveItemOutOfDrive;
    public FileCapabilities withCanMoveItemOutOfDrive(Boolean canMoveItemOutOfDrive) {
        this.canMoveItemOutOfDrive = canMoveItemOutOfDrive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canMoveItemOutOfTeamDrive")
    public Boolean canMoveItemOutOfTeamDrive;
    public FileCapabilities withCanMoveItemOutOfTeamDrive(Boolean canMoveItemOutOfTeamDrive) {
        this.canMoveItemOutOfTeamDrive = canMoveItemOutOfTeamDrive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canMoveItemWithinDrive")
    public Boolean canMoveItemWithinDrive;
    public FileCapabilities withCanMoveItemWithinDrive(Boolean canMoveItemWithinDrive) {
        this.canMoveItemWithinDrive = canMoveItemWithinDrive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canMoveItemWithinTeamDrive")
    public Boolean canMoveItemWithinTeamDrive;
    public FileCapabilities withCanMoveItemWithinTeamDrive(Boolean canMoveItemWithinTeamDrive) {
        this.canMoveItemWithinTeamDrive = canMoveItemWithinTeamDrive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canMoveTeamDriveItem")
    public Boolean canMoveTeamDriveItem;
    public FileCapabilities withCanMoveTeamDriveItem(Boolean canMoveTeamDriveItem) {
        this.canMoveTeamDriveItem = canMoveTeamDriveItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canReadDrive")
    public Boolean canReadDrive;
    public FileCapabilities withCanReadDrive(Boolean canReadDrive) {
        this.canReadDrive = canReadDrive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canReadLabels")
    public Boolean canReadLabels;
    public FileCapabilities withCanReadLabels(Boolean canReadLabels) {
        this.canReadLabels = canReadLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canReadRevisions")
    public Boolean canReadRevisions;
    public FileCapabilities withCanReadRevisions(Boolean canReadRevisions) {
        this.canReadRevisions = canReadRevisions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canReadTeamDrive")
    public Boolean canReadTeamDrive;
    public FileCapabilities withCanReadTeamDrive(Boolean canReadTeamDrive) {
        this.canReadTeamDrive = canReadTeamDrive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canRemoveChildren")
    public Boolean canRemoveChildren;
    public FileCapabilities withCanRemoveChildren(Boolean canRemoveChildren) {
        this.canRemoveChildren = canRemoveChildren;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canRemoveMyDriveParent")
    public Boolean canRemoveMyDriveParent;
    public FileCapabilities withCanRemoveMyDriveParent(Boolean canRemoveMyDriveParent) {
        this.canRemoveMyDriveParent = canRemoveMyDriveParent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canRename")
    public Boolean canRename;
    public FileCapabilities withCanRename(Boolean canRename) {
        this.canRename = canRename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canShare")
    public Boolean canShare;
    public FileCapabilities withCanShare(Boolean canShare) {
        this.canShare = canShare;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canTrash")
    public Boolean canTrash;
    public FileCapabilities withCanTrash(Boolean canTrash) {
        this.canTrash = canTrash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canTrashChildren")
    public Boolean canTrashChildren;
    public FileCapabilities withCanTrashChildren(Boolean canTrashChildren) {
        this.canTrashChildren = canTrashChildren;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canUntrash")
    public Boolean canUntrash;
    public FileCapabilities withCanUntrash(Boolean canUntrash) {
        this.canUntrash = canUntrash;
        return this;
    }
}