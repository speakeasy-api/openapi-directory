/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

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
    
    public KeyObject(@JsonProperty("expiry") OffsetDateTime expiry, @JsonProperty("keyValue") String keyValue, @JsonProperty("parameters") String parameters) {
        this.expiry = expiry;
        this.keyValue = keyValue;
        this.parameters = parameters;
  }
}
