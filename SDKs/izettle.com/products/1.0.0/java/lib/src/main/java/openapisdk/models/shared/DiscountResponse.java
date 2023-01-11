package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DiscountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Price amount;
    public DiscountResponse withAmount(Price amount) {
        this.amount = amount;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public DiscountResponse withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public DiscountResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("etag")
    public String etag;
    public DiscountResponse withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalReference")
    public String externalReference;
    public DiscountResponse withExternalReference(String externalReference) {
        this.externalReference = externalReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageLookupKeys")
    public String[] imageLookupKeys;
    public DiscountResponse withImageLookupKeys(String[] imageLookupKeys) {
        this.imageLookupKeys = imageLookupKeys;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public DiscountResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentage")
    public Double percentage;
    public DiscountResponse withPercentage(Double percentage) {
        this.percentage = percentage;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated")
    public OffsetDateTime updated;
    public DiscountResponse withUpdated(OffsetDateTime updated) {
        this.updated = updated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedBy")
    public String updatedBy;
    public DiscountResponse withUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
        return this;
    }
    @JsonProperty("uuid")
    public String uuid;
    public DiscountResponse withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}