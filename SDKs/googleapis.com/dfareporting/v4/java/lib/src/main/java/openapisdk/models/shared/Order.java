package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Order
 * Describes properties of a Planning order.
**/
public class Order {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public Order withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public Order withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approverUserProfileIds")
    public String[] approverUserProfileIds;
    public Order withApproverUserProfileIds(String[] approverUserProfileIds) {
        this.approverUserProfileIds = approverUserProfileIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyerInvoiceId")
    public String buyerInvoiceId;
    public Order withBuyerInvoiceId(String buyerInvoiceId) {
        this.buyerInvoiceId = buyerInvoiceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyerOrganizationName")
    public String buyerOrganizationName;
    public Order withBuyerOrganizationName(String buyerOrganizationName) {
        this.buyerOrganizationName = buyerOrganizationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public String comments;
    public Order withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contacts")
    public OrderContact[] contacts;
    public Order withContacts(OrderContact[] contacts) {
        this.contacts = contacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Order withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Order withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModifiedInfo")
    public LastModifiedInfo lastModifiedInfo;
    public Order withLastModifiedInfo(LastModifiedInfo lastModifiedInfo) {
        this.lastModifiedInfo = lastModifiedInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Order withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public Order withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("planningTermId")
    public String planningTermId;
    public Order withPlanningTermId(String planningTermId) {
        this.planningTermId = planningTermId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public Order withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellerOrderId")
    public String sellerOrderId;
    public Order withSellerOrderId(String sellerOrderId) {
        this.sellerOrderId = sellerOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellerOrganizationName")
    public String sellerOrganizationName;
    public Order withSellerOrganizationName(String sellerOrganizationName) {
        this.sellerOrganizationName = sellerOrganizationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteId")
    public String[] siteId;
    public Order withSiteId(String[] siteId) {
        this.siteId = siteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteNames")
    public String[] siteNames;
    public Order withSiteNames(String[] siteNames) {
        this.siteNames = siteNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subaccountId")
    public String subaccountId;
    public Order withSubaccountId(String subaccountId) {
        this.subaccountId = subaccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termsAndConditions")
    public String termsAndConditions;
    public Order withTermsAndConditions(String termsAndConditions) {
        this.termsAndConditions = termsAndConditions;
        return this;
    }
}