package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssessmentGroupRequired {
    @JsonProperty("title")
    public String title;
    public AssessmentGroupRequired withTitle(String title) {
        this.title = title;
        return this;
    }
}