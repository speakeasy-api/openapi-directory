package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BillSponsorshipOrganization {
    @JsonProperty("classification")
    public String classification;
    public BillSponsorshipOrganization withClassification(String classification) {
        this.classification = classification;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public BillSponsorshipOrganization withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public BillSponsorshipOrganization withName(String name) {
        this.name = name;
        return this;
    }
}