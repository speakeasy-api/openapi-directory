package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LegislativeSession {
    @JsonProperty("classification")
    public String classification;
    public LegislativeSession withClassification(String classification) {
        this.classification = classification;
        return this;
    }
    @JsonProperty("end_date")
    public String endDate;
    public LegislativeSession withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonProperty("identifier")
    public String identifier;
    public LegislativeSession withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public LegislativeSession withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("start_date")
    public String startDate;
    public LegislativeSession withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}