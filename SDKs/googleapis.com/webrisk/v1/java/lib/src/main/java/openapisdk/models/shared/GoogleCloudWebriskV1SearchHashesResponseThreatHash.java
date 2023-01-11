package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudWebriskV1SearchHashesResponseThreatHash
 * Contains threat information on a matching hash.
**/
public class GoogleCloudWebriskV1SearchHashesResponseThreatHash {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expireTime")
    public String expireTime;
    public GoogleCloudWebriskV1SearchHashesResponseThreatHash withExpireTime(String expireTime) {
        this.expireTime = expireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hash")
    public String hash;
    public GoogleCloudWebriskV1SearchHashesResponseThreatHash withHash(String hash) {
        this.hash = hash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threatTypes")
    public GoogleCloudWebriskV1SearchHashesResponseThreatHashThreatTypesEnum[] threatTypes;
    public GoogleCloudWebriskV1SearchHashesResponseThreatHash withThreatTypes(GoogleCloudWebriskV1SearchHashesResponseThreatHashThreatTypesEnum[] threatTypes) {
        this.threatTypes = threatTypes;
        return this;
    }
}