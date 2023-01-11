package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LabelFieldModification
 * A modification to a label's field.
**/
public class LabelFieldModification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldId")
    public String fieldId;
    public LabelFieldModification withFieldId(String fieldId) {
        this.fieldId = fieldId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public LabelFieldModification withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("setDateValues")
    public LocalDate[] setDateValues;
    public LabelFieldModification withSetDateValues(LocalDate[] setDateValues) {
        this.setDateValues = setDateValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("setIntegerValues")
    public String[] setIntegerValues;
    public LabelFieldModification withSetIntegerValues(String[] setIntegerValues) {
        this.setIntegerValues = setIntegerValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("setSelectionValues")
    public String[] setSelectionValues;
    public LabelFieldModification withSetSelectionValues(String[] setSelectionValues) {
        this.setSelectionValues = setSelectionValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("setTextValues")
    public String[] setTextValues;
    public LabelFieldModification withSetTextValues(String[] setTextValues) {
        this.setTextValues = setTextValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("setUserValues")
    public String[] setUserValues;
    public LabelFieldModification withSetUserValues(String[] setUserValues) {
        this.setUserValues = setUserValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unsetValues")
    public Boolean unsetValues;
    public LabelFieldModification withUnsetValues(Boolean unsetValues) {
        this.unsetValues = unsetValues;
        return this;
    }
}