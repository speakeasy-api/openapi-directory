package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2HttpHeader
 * HTTPHeader describes a custom header to be used in HTTP probes
**/
public class GoogleCloudRunV2HttpHeader {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudRunV2HttpHeader withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public GoogleCloudRunV2HttpHeader withValue(String value) {
        this.value = value;
        return this;
    }
}