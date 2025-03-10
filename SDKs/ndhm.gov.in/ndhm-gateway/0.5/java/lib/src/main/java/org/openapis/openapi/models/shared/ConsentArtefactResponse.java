/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

public class ConsentArtefactResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consent")
    public ConsentArtefactResponseConsent consent;

    public ConsentArtefactResponse withConsent(ConsentArtefactResponseConsent consent) {
        this.consent = consent;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Error error;

    public ConsentArtefactResponse withError(Error error) {
        this.error = error;
        return this;
    }
    
    /**
     * a nonce, unique for each HTTP request
     */
    @JsonProperty("requestId")
    public String requestId;

    public ConsentArtefactResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    
    @JsonProperty("resp")
    public RequestReference resp;

    public ConsentArtefactResponse withResp(RequestReference resp) {
        this.resp = resp;
        return this;
    }
    
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("timestamp")
    public OffsetDateTime timestamp;

    public ConsentArtefactResponse withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    
    public ConsentArtefactResponse(@JsonProperty("requestId") String requestId, @JsonProperty("resp") RequestReference resp, @JsonProperty("timestamp") OffsetDateTime timestamp) {
        this.requestId = requestId;
        this.resp = resp;
        this.timestamp = timestamp;
  }
}
