package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudWebriskV1SearchUrisResponseThreatUri
 * Contains threat information on a matching uri.
**/
public class GoogleCloudWebriskV1SearchUrisResponseThreatUri {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expireTime")
    public String expireTime;
    public GoogleCloudWebriskV1SearchUrisResponseThreatUri withExpireTime(String expireTime) {
        this.expireTime = expireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threatTypes")
    public GoogleCloudWebriskV1SearchUrisResponseThreatUriThreatTypesEnum[] threatTypes;
    public GoogleCloudWebriskV1SearchUrisResponseThreatUri withThreatTypes(GoogleCloudWebriskV1SearchUrisResponseThreatUriThreatTypesEnum[] threatTypes) {
        this.threatTypes = threatTypes;
        return this;
    }
}