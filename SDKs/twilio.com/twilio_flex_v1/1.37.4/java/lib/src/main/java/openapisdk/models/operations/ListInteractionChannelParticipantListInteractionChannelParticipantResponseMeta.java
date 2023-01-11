package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_page_url")
    public String firstPageUrl;
    public ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta withFirstPageUrl(String firstPageUrl) {
        this.firstPageUrl = firstPageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_url")
    public String nextPageUrl;
    public ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta withNextPageUrl(String nextPageUrl) {
        this.nextPageUrl = nextPageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous_page_url")
    public String previousPageUrl;
    public ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta withPreviousPageUrl(String previousPageUrl) {
        this.previousPageUrl = previousPageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta withUrl(String url) {
        this.url = url;
        return this;
    }
}