package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Address
 * Address
**/
public class Address {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line1s")
    public java.util.Map<String, String> line1s;
    public Address withLine1s(java.util.Map<String, String> line1s) {
        this.line1s = line1s;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line2s")
    public java.util.Map<String, String> line2s;
    public Address withLine2s(java.util.Map<String, String> line2s) {
        this.line2s = line2s;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line3s")
    public java.util.Map<String, String> line3s;
    public Address withLine3s(java.util.Map<String, String> line3s) {
        this.line3s = line3s;
        return this;
    }
}