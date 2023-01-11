package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CampaignRequestFilters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public String[] attributes;
    public CampaignRequestFilters withAttributes(String[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contacts")
    public String[] contacts;
    public CampaignRequestFilters withContacts(String[] contacts) {
        this.contacts = contacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public CampaignRequestFilters withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}