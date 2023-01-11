package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1alphaUserEvent
 * UserEvent captures all metadata information Discovery Engine API needs to know about how end users interact with customers' website.
**/
public class GoogleCloudDiscoveryengineV1alphaUserEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public java.util.Map<String, GoogleCloudDiscoveryengineV1alphaCustomAttribute> attributes;
    public GoogleCloudDiscoveryengineV1alphaUserEvent withAttributes(java.util.Map<String, GoogleCloudDiscoveryengineV1alphaCustomAttribute> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributionToken")
    public String attributionToken;
    public GoogleCloudDiscoveryengineV1alphaUserEvent withAttributionToken(String attributionToken) {
        this.attributionToken = attributionToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completionInfo")
    public GoogleCloudDiscoveryengineV1alphaCompletionInfo completionInfo;
    public GoogleCloudDiscoveryengineV1alphaUserEvent withCompletionInfo(GoogleCloudDiscoveryengineV1alphaCompletionInfo completionInfo) {
        this.completionInfo = completionInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directUserRequest")
    public Boolean directUserRequest;
    public GoogleCloudDiscoveryengineV1alphaUserEvent withDirectUserRequest(Boolean directUserRequest) {
        this.directUserRequest = directUserRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documents")
    public GoogleCloudDiscoveryengineV1alphaDocumentInfo[] documents;
    public GoogleCloudDiscoveryengineV1alphaUserEvent withDocuments(GoogleCloudDiscoveryengineV1alphaDocumentInfo[] documents) {
        this.documents = documents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventTime")
    public String eventTime;
    public GoogleCloudDiscoveryengineV1alphaUserEvent withEventTime(String eventTime) {
        this.eventTime = eventTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventType")
    public String eventType;
    public GoogleCloudDiscoveryengineV1alphaUserEvent withEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public GoogleCloudDiscoveryengineV1alphaUserEvent withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediaInfo")
    public GoogleCloudDiscoveryengineV1alphaMediaInfo mediaInfo;
    public GoogleCloudDiscoveryengineV1alphaUserEvent withMediaInfo(GoogleCloudDiscoveryengineV1alphaMediaInfo mediaInfo) {
        this.mediaInfo = mediaInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageInfo")
    public GoogleCloudDiscoveryengineV1alphaPageInfo pageInfo;
    public GoogleCloudDiscoveryengineV1alphaUserEvent withPageInfo(GoogleCloudDiscoveryengineV1alphaPageInfo pageInfo) {
        this.pageInfo = pageInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("panel")
    public GoogleCloudDiscoveryengineV1alphaPanelInfo panel;
    public GoogleCloudDiscoveryengineV1alphaUserEvent withPanel(GoogleCloudDiscoveryengineV1alphaPanelInfo panel) {
        this.panel = panel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionIds")
    public String[] promotionIds;
    public GoogleCloudDiscoveryengineV1alphaUserEvent withPromotionIds(String[] promotionIds) {
        this.promotionIds = promotionIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("searchInfo")
    public GoogleCloudDiscoveryengineV1alphaSearchInfo searchInfo;
    public GoogleCloudDiscoveryengineV1alphaUserEvent withSearchInfo(GoogleCloudDiscoveryengineV1alphaSearchInfo searchInfo) {
        this.searchInfo = searchInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionId")
    public String sessionId;
    public GoogleCloudDiscoveryengineV1alphaUserEvent withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagIds")
    public String[] tagIds;
    public GoogleCloudDiscoveryengineV1alphaUserEvent withTagIds(String[] tagIds) {
        this.tagIds = tagIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionInfo")
    public GoogleCloudDiscoveryengineV1alphaTransactionInfo transactionInfo;
    public GoogleCloudDiscoveryengineV1alphaUserEvent withTransactionInfo(GoogleCloudDiscoveryengineV1alphaTransactionInfo transactionInfo) {
        this.transactionInfo = transactionInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userInfo")
    public GoogleCloudDiscoveryengineV1alphaUserInfo userInfo;
    public GoogleCloudDiscoveryengineV1alphaUserEvent withUserInfo(GoogleCloudDiscoveryengineV1alphaUserInfo userInfo) {
        this.userInfo = userInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userPseudoId")
    public String userPseudoId;
    public GoogleCloudDiscoveryengineV1alphaUserEvent withUserPseudoId(String userPseudoId) {
        this.userPseudoId = userPseudoId;
        return this;
    }
}