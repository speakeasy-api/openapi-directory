package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Subscription
 * JSON template for a subscription.
**/
public class Subscription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingMethod")
    public String billingMethod;
    public Subscription withBillingMethod(String billingMethod) {
        this.billingMethod = billingMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationTime")
    public String creationTime;
    public Subscription withCreationTime(String creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerDomain")
    public String customerDomain;
    public Subscription withCustomerDomain(String customerDomain) {
        this.customerDomain = customerDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerId")
    public String customerId;
    public Subscription withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealCode")
    public String dealCode;
    public Subscription withDealCode(String dealCode) {
        this.dealCode = dealCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Subscription withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan")
    public SubscriptionPlan plan;
    public Subscription withPlan(SubscriptionPlan plan) {
        this.plan = plan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchaseOrderId")
    public String purchaseOrderId;
    public Subscription withPurchaseOrderId(String purchaseOrderId) {
        this.purchaseOrderId = purchaseOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewalSettings")
    public RenewalSettings renewalSettings;
    public Subscription withRenewalSettings(RenewalSettings renewalSettings) {
        this.renewalSettings = renewalSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceUiUrl")
    public String resourceUiUrl;
    public Subscription withResourceUiUrl(String resourceUiUrl) {
        this.resourceUiUrl = resourceUiUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seats")
    public Seats seats;
    public Subscription withSeats(Seats seats) {
        this.seats = seats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skuId")
    public String skuId;
    public Subscription withSkuId(String skuId) {
        this.skuId = skuId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skuName")
    public String skuName;
    public Subscription withSkuName(String skuName) {
        this.skuName = skuName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public Subscription withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionId")
    public String subscriptionId;
    public Subscription withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspensionReasons")
    public String[] suspensionReasons;
    public Subscription withSuspensionReasons(String[] suspensionReasons) {
        this.suspensionReasons = suspensionReasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transferInfo")
    public SubscriptionTransferInfo transferInfo;
    public Subscription withTransferInfo(SubscriptionTransferInfo transferInfo) {
        this.transferInfo = transferInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trialSettings")
    public SubscriptionTrialSettings trialSettings;
    public Subscription withTrialSettings(SubscriptionTrialSettings trialSettings) {
        this.trialSettings = trialSettings;
        return this;
    }
}