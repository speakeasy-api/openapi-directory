package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class KeyObject {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("expiry")
    public OffsetDateTime expiry;
    public KeyObject withExpiry(OffsetDateTime expiry) {
        this.expiry = expiry;
        return this;
    }
    @JsonProperty("keyValue")
    public String keyValue;
    public KeyObject withKeyValue(String keyValue) {
        this.keyValue = keyValue;
        return this;
    }
    @JsonProperty("parameters")
    public String parameters;
    public KeyObject withParameters(String parameters) {
        this.parameters = parameters;
        return this;
    }
}