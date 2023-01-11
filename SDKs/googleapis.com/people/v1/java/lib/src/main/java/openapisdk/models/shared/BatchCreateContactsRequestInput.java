package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchCreateContactsRequestInput
 * A request to create a batch of contacts.
**/
public class BatchCreateContactsRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contacts")
    public ContactToCreateInput[] contacts;
    public BatchCreateContactsRequestInput withContacts(ContactToCreateInput[] contacts) {
        this.contacts = contacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readMask")
    public String readMask;
    public BatchCreateContactsRequestInput withReadMask(String readMask) {
        this.readMask = readMask;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sources")
    public BatchCreateContactsRequestSourcesEnum[] sources;
    public BatchCreateContactsRequestInput withSources(BatchCreateContactsRequestSourcesEnum[] sources) {
        this.sources = sources;
        return this;
    }
}