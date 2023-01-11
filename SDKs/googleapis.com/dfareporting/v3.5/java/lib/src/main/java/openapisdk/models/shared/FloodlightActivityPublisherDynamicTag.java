package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FloodlightActivityPublisherDynamicTag
 * Publisher Dynamic Tag
**/
public class FloodlightActivityPublisherDynamicTag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickThrough")
    public Boolean clickThrough;
    public FloodlightActivityPublisherDynamicTag withClickThrough(Boolean clickThrough) {
        this.clickThrough = clickThrough;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directorySiteId")
    public String directorySiteId;
    public FloodlightActivityPublisherDynamicTag withDirectorySiteId(String directorySiteId) {
        this.directorySiteId = directorySiteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamicTag")
    public FloodlightActivityDynamicTag dynamicTag;
    public FloodlightActivityPublisherDynamicTag withDynamicTag(FloodlightActivityDynamicTag dynamicTag) {
        this.dynamicTag = dynamicTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteId")
    public String siteId;
    public FloodlightActivityPublisherDynamicTag withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteIdDimensionValue")
    public DimensionValue siteIdDimensionValue;
    public FloodlightActivityPublisherDynamicTag withSiteIdDimensionValue(DimensionValue siteIdDimensionValue) {
        this.siteIdDimensionValue = siteIdDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewThrough")
    public Boolean viewThrough;
    public FloodlightActivityPublisherDynamicTag withViewThrough(Boolean viewThrough) {
        this.viewThrough = viewThrough;
        return this;
    }
}