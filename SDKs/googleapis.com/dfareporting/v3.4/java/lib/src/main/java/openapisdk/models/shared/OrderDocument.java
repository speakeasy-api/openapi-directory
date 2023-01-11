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

/**
 * OrderDocument
 * Contains properties of a Planning order document.
**/
public class OrderDocument {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public OrderDocument withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public OrderDocument withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amendedOrderDocumentId")
    public String amendedOrderDocumentId;
    public OrderDocument withAmendedOrderDocumentId(String amendedOrderDocumentId) {
        this.amendedOrderDocumentId = amendedOrderDocumentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvedByUserProfileIds")
    public String[] approvedByUserProfileIds;
    public OrderDocument withApprovedByUserProfileIds(String[] approvedByUserProfileIds) {
        this.approvedByUserProfileIds = approvedByUserProfileIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelled")
    public Boolean cancelled;
    public OrderDocument withCancelled(Boolean cancelled) {
        this.cancelled = cancelled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdInfo")
    public LastModifiedInfo createdInfo;
    public OrderDocument withCreatedInfo(LastModifiedInfo createdInfo) {
        this.createdInfo = createdInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveDate")
    public LocalDate effectiveDate;
    public OrderDocument withEffectiveDate(LocalDate effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public OrderDocument withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public OrderDocument withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastSentRecipients")
    public String[] lastSentRecipients;
    public OrderDocument withLastSentRecipients(String[] lastSentRecipients) {
        this.lastSentRecipients = lastSentRecipients;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastSentTime")
    public OffsetDateTime lastSentTime;
    public OrderDocument withLastSentTime(OffsetDateTime lastSentTime) {
        this.lastSentTime = lastSentTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderId")
    public String orderId;
    public OrderDocument withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public OrderDocument withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signed")
    public Boolean signed;
    public OrderDocument withSigned(Boolean signed) {
        this.signed = signed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subaccountId")
    public String subaccountId;
    public OrderDocument withSubaccountId(String subaccountId) {
        this.subaccountId = subaccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public OrderDocument withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public OrderDocumentTypeEnum type;
    public OrderDocument withType(OrderDocumentTypeEnum type) {
        this.type = type;
        return this;
    }
}