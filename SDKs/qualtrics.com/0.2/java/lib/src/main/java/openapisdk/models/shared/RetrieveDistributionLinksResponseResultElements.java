package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RetrieveDistributionLinksResponseResultElements {
    @JsonProperty("contactId")
    public String contactId;
    public RetrieveDistributionLinksResponseResultElements withContactId(String contactId) {
        this.contactId = contactId;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public RetrieveDistributionLinksResponseResultElements withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("exceededContactFrequency")
    public Boolean exceededContactFrequency;
    public RetrieveDistributionLinksResponseResultElements withExceededContactFrequency(Boolean exceededContactFrequency) {
        this.exceededContactFrequency = exceededContactFrequency;
        return this;
    }
    @JsonProperty("externalDataReference")
    public Object externalDataReference;
    public RetrieveDistributionLinksResponseResultElements withExternalDataReference(Object externalDataReference) {
        this.externalDataReference = externalDataReference;
        return this;
    }
    @JsonProperty("firstName")
    public String firstName;
    public RetrieveDistributionLinksResponseResultElements withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonProperty("lastName")
    public String lastName;
    public RetrieveDistributionLinksResponseResultElements withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public RetrieveDistributionLinksResponseResultElements withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("linkExpiration")
    public String linkExpiration;
    public RetrieveDistributionLinksResponseResultElements withLinkExpiration(String linkExpiration) {
        this.linkExpiration = linkExpiration;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public RetrieveDistributionLinksResponseResultElements withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("transactionId")
    public Object transactionId;
    public RetrieveDistributionLinksResponseResultElements withTransactionId(Object transactionId) {
        this.transactionId = transactionId;
        return this;
    }
    @JsonProperty("unsubscribed")
    public Boolean unsubscribed;
    public RetrieveDistributionLinksResponseResultElements withUnsubscribed(Boolean unsubscribed) {
        this.unsubscribed = unsubscribed;
        return this;
    }
}