package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class JiraPriorityMapping {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("10")
    public String ten;
    public JiraPriorityMapping withTen(String ten) {
        this.ten = ten;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("20")
    public String twenty;
    public JiraPriorityMapping withTwenty(String twenty) {
        this.twenty = twenty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("30")
    public String thirty;
    public JiraPriorityMapping withThirty(String thirty) {
        this.thirty = thirty;
        return this;
    }
}