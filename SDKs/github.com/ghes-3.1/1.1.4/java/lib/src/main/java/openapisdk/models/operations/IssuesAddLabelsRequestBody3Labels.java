package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IssuesAddLabelsRequestBody3Labels {
    @JsonProperty("name")
    public String name;
    public IssuesAddLabelsRequestBody3Labels withName(String name) {
        this.name = name;
        return this;
    }
}