package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaLabelLock
 * A Lock that can be applied to a Label, Field, or Choice.
**/
public class GoogleAppsDriveLabelsV2betaLabelLock {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capabilities")
    public GoogleAppsDriveLabelsV2betaLabelLockCapabilities capabilities;
    public GoogleAppsDriveLabelsV2betaLabelLock withCapabilities(GoogleAppsDriveLabelsV2betaLabelLockCapabilities capabilities) {
        this.capabilities = capabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("choiceId")
    public String choiceId;
    public GoogleAppsDriveLabelsV2betaLabelLock withChoiceId(String choiceId) {
        this.choiceId = choiceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleAppsDriveLabelsV2betaLabelLock withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creator")
    public GoogleAppsDriveLabelsV2betaUserInfo creator;
    public GoogleAppsDriveLabelsV2betaLabelLock withCreator(GoogleAppsDriveLabelsV2betaUserInfo creator) {
        this.creator = creator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteTime")
    public String deleteTime;
    public GoogleAppsDriveLabelsV2betaLabelLock withDeleteTime(String deleteTime) {
        this.deleteTime = deleteTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldId")
    public String fieldId;
    public GoogleAppsDriveLabelsV2betaLabelLock withFieldId(String fieldId) {
        this.fieldId = fieldId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleAppsDriveLabelsV2betaLabelLock withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public GoogleAppsDriveLabelsV2betaLabelLockStateEnum state;
    public GoogleAppsDriveLabelsV2betaLabelLock withState(GoogleAppsDriveLabelsV2betaLabelLockStateEnum state) {
        this.state = state;
        return this;
    }
}