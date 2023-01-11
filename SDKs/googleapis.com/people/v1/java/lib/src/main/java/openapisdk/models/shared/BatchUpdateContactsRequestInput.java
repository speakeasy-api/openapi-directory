package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchUpdateContactsRequestInput
 * A request to update a batch of contacts.
**/
public class BatchUpdateContactsRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contacts")
    public java.util.Map<String, PersonInput> contacts;
    public BatchUpdateContactsRequestInput withContacts(java.util.Map<String, PersonInput> contacts) {
        this.contacts = contacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readMask")
    public String readMask;
    public BatchUpdateContactsRequestInput withReadMask(String readMask) {
        this.readMask = readMask;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sources")
    public BatchUpdateContactsRequestSourcesEnum[] sources;
    public BatchUpdateContactsRequestInput withSources(BatchUpdateContactsRequestSourcesEnum[] sources) {
        this.sources = sources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateMask")
    public String updateMask;
    public BatchUpdateContactsRequestInput withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
}