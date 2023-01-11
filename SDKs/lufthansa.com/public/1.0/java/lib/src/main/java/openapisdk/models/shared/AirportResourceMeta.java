package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AirportResourceMeta
 * Container for meta links.
**/
public class AirportResourceMeta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@Version")
    public String atVersion;
    public AirportResourceMeta withAtVersion(String atVersion) {
        this.atVersion = atVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Link")
    public Link[] link;
    public AirportResourceMeta withLink(Link[] link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalCount")
    public Integer totalCount;
    public AirportResourceMeta withTotalCount(Integer totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}