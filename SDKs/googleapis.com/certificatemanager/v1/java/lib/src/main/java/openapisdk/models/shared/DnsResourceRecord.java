package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DnsResourceRecord
 * The structure describing the DNS Resource Record that needs to be added to DNS configuration for the authorization to be usable by certificate.
**/
public class DnsResourceRecord {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;
    public DnsResourceRecord withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DnsResourceRecord withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public DnsResourceRecord withType(String type) {
        this.type = type;
        return this;
    }
}