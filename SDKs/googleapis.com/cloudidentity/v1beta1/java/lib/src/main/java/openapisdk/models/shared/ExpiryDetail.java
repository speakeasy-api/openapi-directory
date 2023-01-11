package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExpiryDetail
 * The `MembershipRole` expiry details.
**/
public class ExpiryDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expireTime")
    public String expireTime;
    public ExpiryDetail withExpireTime(String expireTime) {
        this.expireTime = expireTime;
        return this;
    }
}