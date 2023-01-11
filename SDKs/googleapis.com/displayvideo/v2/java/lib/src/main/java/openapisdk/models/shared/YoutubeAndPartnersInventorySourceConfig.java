package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * YoutubeAndPartnersInventorySourceConfig
 * Settings that control what YouTube related inventories the YouTube and Partners line item will target.
**/
public class YoutubeAndPartnersInventorySourceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeYoutubeSearch")
    public Boolean includeYoutubeSearch;
    public YoutubeAndPartnersInventorySourceConfig withIncludeYoutubeSearch(Boolean includeYoutubeSearch) {
        this.includeYoutubeSearch = includeYoutubeSearch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeYoutubeVideoPartners")
    public Boolean includeYoutubeVideoPartners;
    public YoutubeAndPartnersInventorySourceConfig withIncludeYoutubeVideoPartners(Boolean includeYoutubeVideoPartners) {
        this.includeYoutubeVideoPartners = includeYoutubeVideoPartners;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeYoutubeVideos")
    public Boolean includeYoutubeVideos;
    public YoutubeAndPartnersInventorySourceConfig withIncludeYoutubeVideos(Boolean includeYoutubeVideos) {
        this.includeYoutubeVideos = includeYoutubeVideos;
        return this;
    }
}