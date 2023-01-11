package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActionDetail
 * Data describing the type and additional information of an action.
**/
public class ActionDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliedLabelChange")
    public AppliedLabelChange appliedLabelChange;
    public ActionDetail withAppliedLabelChange(AppliedLabelChange appliedLabelChange) {
        this.appliedLabelChange = appliedLabelChange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public Comment comment;
    public ActionDetail withComment(Comment comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("create")
    public Create create;
    public ActionDetail withCreate(Create create) {
        this.create = create;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delete")
    public Delete delete;
    public ActionDetail withDelete(Delete delete) {
        this.delete = delete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dlpChange")
    public DataLeakPreventionChange dlpChange;
    public ActionDetail withDlpChange(DataLeakPreventionChange dlpChange) {
        this.dlpChange = dlpChange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("edit")
    public java.util.Map<String, Object> edit;
    public ActionDetail withEdit(java.util.Map<String, Object> edit) {
        this.edit = edit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("move")
    public Move move;
    public ActionDetail withMove(Move move) {
        this.move = move;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissionChange")
    public PermissionChange permissionChange;
    public ActionDetail withPermissionChange(PermissionChange permissionChange) {
        this.permissionChange = permissionChange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reference")
    public ApplicationReference reference;
    public ActionDetail withReference(ApplicationReference reference) {
        this.reference = reference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rename")
    public Rename rename;
    public ActionDetail withRename(Rename rename) {
        this.rename = rename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restore")
    public Restore restore;
    public ActionDetail withRestore(Restore restore) {
        this.restore = restore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settingsChange")
    public SettingsChange settingsChange;
    public ActionDetail withSettingsChange(SettingsChange settingsChange) {
        this.settingsChange = settingsChange;
        return this;
    }
}