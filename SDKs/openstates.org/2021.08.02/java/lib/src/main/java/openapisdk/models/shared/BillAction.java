package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BillAction {
    @JsonProperty("classification")
    public String[] classification;
    public BillAction withClassification(String[] classification) {
        this.classification = classification;
        return this;
    }
    @JsonProperty("date")
    public String date;
    public BillAction withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public BillAction withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("order")
    public Long order;
    public BillAction withOrder(Long order) {
        this.order = order;
        return this;
    }
    @JsonProperty("organization")
    public Organization organization;
    public BillAction withOrganization(Organization organization) {
        this.organization = organization;
        return this;
    }
}