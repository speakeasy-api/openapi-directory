package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BillSponsorship {
    @JsonProperty("classification")
    public String classification;
    public BillSponsorship withClassification(String classification) {
        this.classification = classification;
        return this;
    }
    @JsonProperty("entity_type")
    public String entityType;
    public BillSponsorship withEntityType(String entityType) {
        this.entityType = entityType;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public BillSponsorship withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization")
    public BillSponsorshipOrganization organization;
    public BillSponsorship withOrganization(BillSponsorshipOrganization organization) {
        this.organization = organization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("person")
    public CompactPerson person;
    public BillSponsorship withPerson(CompactPerson person) {
        this.person = person;
        return this;
    }
    @JsonProperty("primary")
    public Boolean primary;
    public BillSponsorship withPrimary(Boolean primary) {
        this.primary = primary;
        return this;
    }
}