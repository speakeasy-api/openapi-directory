package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1betaUserEvent
 * UserEvent captures all metadata information Discovery Engine API needs to know about how end users interact with customers' website.
**/
public class GoogleCloudDiscoveryengineV1betaUserEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public java.util.Map<String, GoogleCloudDiscoveryengineV1betaCustomAttribute> attributes;
    public GoogleCloudDiscoveryengineV1betaUserEvent withAttributes(java.util.Map<String, GoogleCloudDiscoveryengineV1betaCustomAttribute> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributionToken")
    public String attributionToken;
    public GoogleCloudDiscoveryengineV1betaUserEvent withAttributionToken(String attributionToken) {
        this.attributionToken = attributionToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completionInfo")
    public GoogleCloudDiscoveryengineV1betaCompletionInfo completionInfo;
    public GoogleCloudDiscoveryengineV1betaUserEvent withCompletionInfo(GoogleCloudDiscoveryengineV1betaCompletionInfo completionInfo) {
        this.completionInfo = completionInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directUserRequest")
    public Boolean directUserRequest;
    public GoogleCloudDiscoveryengineV1betaUserEvent withDirectUserRequest(Boolean directUserRequest) {
        this.directUserRequest = directUserRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documents")
    public GoogleCloudDiscoveryengineV1betaDocumentInfo[] documents;
    public GoogleCloudDiscoveryengineV1betaUserEvent withDocuments(GoogleCloudDiscoveryengineV1betaDocumentInfo[] documents) {
        this.documents = documents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventTime")
    public String eventTime;
    public GoogleCloudDiscoveryengineV1betaUserEvent withEventTime(String eventTime) {
        this.eventTime = eventTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventType")
    public String eventType;
    public GoogleCloudDiscoveryengineV1betaUserEvent withEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public GoogleCloudDiscoveryengineV1betaUserEvent withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediaInfo")
    public GoogleCloudDiscoveryengineV1betaMediaInfo mediaInfo;
    public GoogleCloudDiscoveryengineV1betaUserEvent withMediaInfo(GoogleCloudDiscoveryengineV1betaMediaInfo mediaInfo) {
        this.mediaInfo = mediaInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageInfo")
    public GoogleCloudDiscoveryengineV1betaPageInfo pageInfo;
    public GoogleCloudDiscoveryengineV1betaUserEvent withPageInfo(GoogleCloudDiscoveryengineV1betaPageInfo pageInfo) {
        this.pageInfo = pageInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("panel")
    public GoogleCloudDiscoveryengineV1betaPanelInfo panel;
    public GoogleCloudDiscoveryengineV1betaUserEvent withPanel(GoogleCloudDiscoveryengineV1betaPanelInfo panel) {
        this.panel = panel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionIds")
    public String[] promotionIds;
    public GoogleCloudDiscoveryengineV1betaUserEvent withPromotionIds(String[] promotionIds) {
        this.promotionIds = promotionIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("searchInfo")
    public GoogleCloudDiscoveryengineV1betaSearchInfo searchInfo;
    public GoogleCloudDiscoveryengineV1betaUserEvent withSearchInfo(GoogleCloudDiscoveryengineV1betaSearchInfo searchInfo) {
        this.searchInfo = searchInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionId")
    public String sessionId;
    public GoogleCloudDiscoveryengineV1betaUserEvent withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagIds")
    public String[] tagIds;
    public GoogleCloudDiscoveryengineV1betaUserEvent withTagIds(String[] tagIds) {
        this.tagIds = tagIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionInfo")
    public GoogleCloudDiscoveryengineV1betaTransactionInfo transactionInfo;
    public GoogleCloudDiscoveryengineV1betaUserEvent withTransactionInfo(GoogleCloudDiscoveryengineV1betaTransactionInfo transactionInfo) {
        this.transactionInfo = transactionInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userInfo")
    public GoogleCloudDiscoveryengineV1betaUserInfo userInfo;
    public GoogleCloudDiscoveryengineV1betaUserEvent withUserInfo(GoogleCloudDiscoveryengineV1betaUserInfo userInfo) {
        this.userInfo = userInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userPseudoId")
    public String userPseudoId;
    public GoogleCloudDiscoveryengineV1betaUserEvent withUserPseudoId(String userPseudoId) {
        this.userPseudoId = userPseudoId;
        return this;
    }
}