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

/**
 * HeartbeatResponse - OK
 */
public class HeartbeatResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Error error;

    public HeartbeatResponse withError(Error error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public HeartbeatResponseStatusEnum status;

    public HeartbeatResponse withStatus(HeartbeatResponseStatusEnum status) {
        this.status = status;
        return this;
    }
    
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("timestamp")
    public OffsetDateTime timestamp;

    public HeartbeatResponse withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    
    public HeartbeatResponse(){}
}
