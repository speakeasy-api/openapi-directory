package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUserContentUrlJson200ApplicationJsonResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api_timestamp")
    public String apiTimestamp;
    public GetUserContentUrlJson200ApplicationJsonResults withApiTimestamp(String apiTimestamp) {
        this.apiTimestamp = apiTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callerID")
    public Object callerID;
    public GetUserContentUrlJson200ApplicationJsonResults withCallerId(Object callerID) {
        this.callerID = callerID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public GetUserContentUrlJson200ApplicationJsonResultsComments[] comments;
    public GetUserContentUrlJson200ApplicationJsonResults withComments(GetUserContentUrlJson200ApplicationJsonResultsComments[] comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("depthLimit")
    public Long depthLimit;
    public GetUserContentUrlJson200ApplicationJsonResults withDepthLimit(Long depthLimit) {
        this.depthLimit = depthLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public GetUserContentUrlJson200ApplicationJsonResults withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public GetUserContentUrlJson200ApplicationJsonResults withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replyLimit")
    public Long replyLimit;
    public GetUserContentUrlJson200ApplicationJsonResults withReplyLimit(Long replyLimit) {
        this.replyLimit = replyLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sort")
    public String sort;
    public GetUserContentUrlJson200ApplicationJsonResults withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCommentsFound")
    public Long totalCommentsFound;
    public GetUserContentUrlJson200ApplicationJsonResults withTotalCommentsFound(Long totalCommentsFound) {
        this.totalCommentsFound = totalCommentsFound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCommentsReturned")
    public Long totalCommentsReturned;
    public GetUserContentUrlJson200ApplicationJsonResults withTotalCommentsReturned(Long totalCommentsReturned) {
        this.totalCommentsReturned = totalCommentsReturned;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalEditorsSelectionFound")
    public Long totalEditorsSelectionFound;
    public GetUserContentUrlJson200ApplicationJsonResults withTotalEditorsSelectionFound(Long totalEditorsSelectionFound) {
        this.totalEditorsSelectionFound = totalEditorsSelectionFound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalEditorsSelectionReturned")
    public Long totalEditorsSelectionReturned;
    public GetUserContentUrlJson200ApplicationJsonResults withTotalEditorsSelectionReturned(Long totalEditorsSelectionReturned) {
        this.totalEditorsSelectionReturned = totalEditorsSelectionReturned;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalParentCommentsFound")
    public Long totalParentCommentsFound;
    public GetUserContentUrlJson200ApplicationJsonResults withTotalParentCommentsFound(Long totalParentCommentsFound) {
        this.totalParentCommentsFound = totalParentCommentsFound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalParentCommentsReturned")
    public Long totalParentCommentsReturned;
    public GetUserContentUrlJson200ApplicationJsonResults withTotalParentCommentsReturned(Long totalParentCommentsReturned) {
        this.totalParentCommentsReturned = totalParentCommentsReturned;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalRecommendationsFound")
    public Long totalRecommendationsFound;
    public GetUserContentUrlJson200ApplicationJsonResults withTotalRecommendationsFound(Long totalRecommendationsFound) {
        this.totalRecommendationsFound = totalRecommendationsFound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalRecommendationsReturned")
    public Long totalRecommendationsReturned;
    public GetUserContentUrlJson200ApplicationJsonResults withTotalRecommendationsReturned(Long totalRecommendationsReturned) {
        this.totalRecommendationsReturned = totalRecommendationsReturned;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalReplyCommentsFound")
    public Long totalReplyCommentsFound;
    public GetUserContentUrlJson200ApplicationJsonResults withTotalReplyCommentsFound(Long totalReplyCommentsFound) {
        this.totalReplyCommentsFound = totalReplyCommentsFound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalReplyCommentsReturned")
    public Long totalReplyCommentsReturned;
    public GetUserContentUrlJson200ApplicationJsonResults withTotalReplyCommentsReturned(Long totalReplyCommentsReturned) {
        this.totalReplyCommentsReturned = totalReplyCommentsReturned;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalReporterReplyCommentsFound")
    public Long totalReporterReplyCommentsFound;
    public GetUserContentUrlJson200ApplicationJsonResults withTotalReporterReplyCommentsFound(Long totalReporterReplyCommentsFound) {
        this.totalReporterReplyCommentsFound = totalReporterReplyCommentsFound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalReporterReplyCommentsReturned")
    public Long totalReporterReplyCommentsReturned;
    public GetUserContentUrlJson200ApplicationJsonResults withTotalReporterReplyCommentsReturned(Long totalReporterReplyCommentsReturned) {
        this.totalReporterReplyCommentsReturned = totalReporterReplyCommentsReturned;
        return this;
    }
}