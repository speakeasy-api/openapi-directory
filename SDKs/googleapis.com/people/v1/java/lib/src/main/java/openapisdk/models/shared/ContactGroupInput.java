package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContactGroupInput
 * A contact group.
**/
public class ContactGroupInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientData")
    public GroupClientData[] clientData;
    public ContactGroupInput withClientData(GroupClientData[] clientData) {
        this.clientData = clientData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public ContactGroupInput withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ContactGroupInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceName")
    public String resourceName;
    public ContactGroupInput withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}