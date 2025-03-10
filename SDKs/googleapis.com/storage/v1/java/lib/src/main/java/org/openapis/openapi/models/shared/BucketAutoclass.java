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
 * BucketAutoclass - The bucket's Autoclass configuration.
 */
public class BucketAutoclass {
    /**
     * Whether or not Autoclass is enabled on this bucket
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;

    public BucketAutoclass withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    
    /**
     * A date and time in RFC 3339 format representing the instant at which "enabled" was last toggled.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("toggleTime")
    public OffsetDateTime toggleTime;

    public BucketAutoclass withToggleTime(OffsetDateTime toggleTime) {
        this.toggleTime = toggleTime;
        return this;
    }
    
    public BucketAutoclass(){}
}
