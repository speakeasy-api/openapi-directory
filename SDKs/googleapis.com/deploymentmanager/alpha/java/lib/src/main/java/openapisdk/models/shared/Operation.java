package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Operation
 * Represents an Operation resource. Google Compute Engine has three Operation resources: * [Global](/compute/docs/reference/rest/{$api_version}/globalOperations) * [Regional](/compute/docs/reference/rest/{$api_version}/regionOperations) * [Zonal](/compute/docs/reference/rest/{$api_version}/zoneOperations) You can use an operation resource to manage asynchronous API requests. For more information, read Handling API responses. Operations can be global, regional or zonal. - For global operations, use the `globalOperations` resource. - For regional operations, use the `regionOperations` resource. - For zonal operations, use the `zonalOperations` resource. For more information, read Global, Regional, and Zonal Resources.
**/
public class Operation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientOperationId")
    public String clientOperationId;
    public Operation withClientOperationId(String clientOperationId) {
        this.clientOperationId = clientOperationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationTimestamp")
    public String creationTimestamp;
    public Operation withCreationTimestamp(String creationTimestamp) {
        this.creationTimestamp = creationTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Operation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public Operation withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public OperationError error;
    public Operation withError(OperationError error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpErrorMessage")
    public String httpErrorMessage;
    public Operation withHttpErrorMessage(String httpErrorMessage) {
        this.httpErrorMessage = httpErrorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpErrorStatusCode")
    public Integer httpErrorStatusCode;
    public Operation withHttpErrorStatusCode(Integer httpErrorStatusCode) {
        this.httpErrorStatusCode = httpErrorStatusCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Operation withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insertTime")
    public String insertTime;
    public Operation withInsertTime(String insertTime) {
        this.insertTime = insertTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Operation withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Operation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationGroupId")
    public String operationGroupId;
    public Operation withOperationGroupId(String operationGroupId) {
        this.operationGroupId = operationGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationType")
    public String operationType;
    public Operation withOperationType(String operationType) {
        this.operationType = operationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("progress")
    public Integer progress;
    public Operation withProgress(Integer progress) {
        this.progress = progress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public Operation withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public Operation withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public Operation withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public OperationStatusEnum status;
    public Operation withStatus(OperationStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusMessage")
    public String statusMessage;
    public Operation withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetId")
    public String targetId;
    public Operation withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetLink")
    public String targetLink;
    public Operation withTargetLink(String targetLink) {
        this.targetLink = targetLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public String user;
    public Operation withUser(String user) {
        this.user = user;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public OperationWarnings[] warnings;
    public Operation withWarnings(OperationWarnings[] warnings) {
        this.warnings = warnings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zone")
    public String zone;
    public Operation withZone(String zone) {
        this.zone = zone;
        return this;
    }
}