package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DistributionsResponseResultElements {
    @JsonProperty("createdDate")
    public String createdDate;
    public DistributionsResponseResultElements withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonProperty("customHeaders")
    public java.util.Map<String, Object> customHeaders;
    public DistributionsResponseResultElements withCustomHeaders(java.util.Map<String, Object> customHeaders) {
        this.customHeaders = customHeaders;
        return this;
    }
    @JsonProperty("embeddedData")
    public Object embeddedData;
    public DistributionsResponseResultElements withEmbeddedData(Object embeddedData) {
        this.embeddedData = embeddedData;
        return this;
    }
    @JsonProperty("headers")
    public DistributionsResponseResultElementsHeaders headers;
    public DistributionsResponseResultElements withHeaders(DistributionsResponseResultElementsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public DistributionsResponseResultElements withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("message")
    public DistributionsResponseResultElementsMessage message;
    public DistributionsResponseResultElements withMessage(DistributionsResponseResultElementsMessage message) {
        this.message = message;
        return this;
    }
    @JsonProperty("modifiedDate")
    public String modifiedDate;
    public DistributionsResponseResultElements withModifiedDate(String modifiedDate) {
        this.modifiedDate = modifiedDate;
        return this;
    }
    @JsonProperty("organizationId")
    public String organizationId;
    public DistributionsResponseResultElements withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @JsonProperty("ownerId")
    public String ownerId;
    public DistributionsResponseResultElements withOwnerId(String ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    @JsonProperty("parentDistributionId")
    public Object parentDistributionId;
    public DistributionsResponseResultElements withParentDistributionId(Object parentDistributionId) {
        this.parentDistributionId = parentDistributionId;
        return this;
    }
    @JsonProperty("recipients")
    public DistributionsResponseResultElementsRecipients recipients;
    public DistributionsResponseResultElements withRecipients(DistributionsResponseResultElementsRecipients recipients) {
        this.recipients = recipients;
        return this;
    }
    @JsonProperty("requestStatus")
    public String requestStatus;
    public DistributionsResponseResultElements withRequestStatus(String requestStatus) {
        this.requestStatus = requestStatus;
        return this;
    }
    @JsonProperty("requestType")
    public String requestType;
    public DistributionsResponseResultElements withRequestType(String requestType) {
        this.requestType = requestType;
        return this;
    }
    @JsonProperty("sendDate")
    public String sendDate;
    public DistributionsResponseResultElements withSendDate(String sendDate) {
        this.sendDate = sendDate;
        return this;
    }
    @JsonProperty("stats")
    public DistributionsResponseResultElementsStats stats;
    public DistributionsResponseResultElements withStats(DistributionsResponseResultElementsStats stats) {
        this.stats = stats;
        return this;
    }
    @JsonProperty("surveyLink")
    public DistributionsResponseResultElementsSurveyLink surveyLink;
    public DistributionsResponseResultElements withSurveyLink(DistributionsResponseResultElementsSurveyLink surveyLink) {
        this.surveyLink = surveyLink;
        return this;
    }
}