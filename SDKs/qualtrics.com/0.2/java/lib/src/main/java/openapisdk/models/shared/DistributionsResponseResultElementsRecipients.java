package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DistributionsResponseResultElementsRecipients {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactId")
    public Object contactId;
    public DistributionsResponseResultElementsRecipients withContactId(Object contactId) {
        this.contactId = contactId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("libraryId")
    public String libraryId;
    public DistributionsResponseResultElementsRecipients withLibraryId(String libraryId) {
        this.libraryId = libraryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mailingListId")
    public String mailingListId;
    public DistributionsResponseResultElementsRecipients withMailingListId(String mailingListId) {
        this.mailingListId = mailingListId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleId")
    public Object sampleId;
    public DistributionsResponseResultElementsRecipients withSampleId(Object sampleId) {
        this.sampleId = sampleId;
        return this;
    }
}