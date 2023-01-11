package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DpsMessageDpsMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FormType")
    public String formType;
    public DpsMessageDpsMessage withFormType(String formType) {
        this.formType = formType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IssueDate")
    public LocalDate issueDate;
    public DpsMessageDpsMessage withIssueDate(LocalDate issueDate) {
        this.issueDate = issueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdated")
    public OffsetDateTime lastUpdated;
    public DpsMessageDpsMessage withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public DpsMessageDpsMessage withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessageStatus")
    public DpsMessageDpsMessageMessageStatusEnum messageStatus;
    public DpsMessageDpsMessage withMessageStatus(DpsMessageDpsMessageMessageStatusEnum messageStatus) {
        this.messageStatus = messageStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessageType")
    public String messageType;
    public DpsMessageDpsMessage withMessageType(String messageType) {
        this.messageType = messageType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProcessingResult")
    public String processingResult;
    public DpsMessageDpsMessage withProcessingResult(String processingResult) {
        this.processingResult = processingResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("RetrieveDate")
    public OffsetDateTime retrieveDate;
    public DpsMessageDpsMessage withRetrieveDate(OffsetDateTime retrieveDate) {
        this.retrieveDate = retrieveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SequenceNumber")
    public Integer sequenceNumber;
    public DpsMessageDpsMessage withSequenceNumber(Integer sequenceNumber) {
        this.sequenceNumber = sequenceNumber;
        return this;
    }
}