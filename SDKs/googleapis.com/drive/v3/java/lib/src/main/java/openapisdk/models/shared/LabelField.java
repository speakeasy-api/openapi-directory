package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LabelField {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateString")
    public LocalDate[] dateString;
    public LabelField withDateString(LocalDate[] dateString) {
        this.dateString = dateString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public LabelField withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integer")
    public String[] integer;
    public LabelField withInteger(String[] integer) {
        this.integer = integer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public LabelField withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selection")
    public String[] selection;
    public LabelField withSelection(String[] selection) {
        this.selection = selection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String[] text;
    public LabelField withText(String[] text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public User[] user;
    public LabelField withUser(User[] user) {
        this.user = user;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueType")
    public String valueType;
    public LabelField withValueType(String valueType) {
        this.valueType = valueType;
        return this;
    }
}