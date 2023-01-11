package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DomainMapping
 * A domain serving an App Engine application.
**/
public class DomainMapping {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DomainMapping withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DomainMapping withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceRecords")
    public ResourceRecord[] resourceRecords;
    public DomainMapping withResourceRecords(ResourceRecord[] resourceRecords) {
        this.resourceRecords = resourceRecords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sslSettings")
    public SslSettings sslSettings;
    public DomainMapping withSslSettings(SslSettings sslSettings) {
        this.sslSettings = sslSettings;
        return this;
    }
}