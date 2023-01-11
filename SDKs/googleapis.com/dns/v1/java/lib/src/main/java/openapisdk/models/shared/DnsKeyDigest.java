package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DnsKeyDigest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("digest")
    public String digest;
    public DnsKeyDigest withDigest(String digest) {
        this.digest = digest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public DnsKeyDigestTypeEnum type;
    public DnsKeyDigest withType(DnsKeyDigestTypeEnum type) {
        this.type = type;
        return this;
    }
}