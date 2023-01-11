package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PathQueryOptions
 * Path Query Options for Report Options.
**/
public class PathQueryOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelGrouping")
    public ChannelGrouping channelGrouping;
    public PathQueryOptions withChannelGrouping(ChannelGrouping channelGrouping) {
        this.channelGrouping = channelGrouping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pathFilters")
    public PathFilter[] pathFilters;
    public PathQueryOptions withPathFilters(PathFilter[] pathFilters) {
        this.pathFilters = pathFilters;
        return this;
    }
}