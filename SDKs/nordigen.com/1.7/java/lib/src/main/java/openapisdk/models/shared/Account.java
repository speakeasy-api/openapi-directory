package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Account
 * The representation of a bank account.
**/
public class Account {
    @JsonProperty("aspsp_identifier")
    public String aspspIdentifier;
    public Account withAspspIdentifier(String aspspIdentifier) {
        this.aspspIdentifier = aspspIdentifier;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public Account withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonProperty("iban")
    public String iban;
    public Account withIban(String iban) {
        this.iban = iban;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Account withId(String id) {
        this.id = id;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("last_accessed")
    public OffsetDateTime lastAccessed;
    public Account withLastAccessed(OffsetDateTime lastAccessed) {
        this.lastAccessed = lastAccessed;
        return this;
    }
    @JsonProperty("status")
    public java.util.Map<String, Object> status;
    public Account withStatus(java.util.Map<String, Object> status) {
        this.status = status;
        return this;
    }
}