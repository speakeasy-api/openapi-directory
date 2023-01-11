package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderCustomer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public OrderCustomer withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explicitMarketingPreference")
    public Boolean explicitMarketingPreference;
    public OrderCustomer withExplicitMarketingPreference(Boolean explicitMarketingPreference) {
        this.explicitMarketingPreference = explicitMarketingPreference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullName")
    public String fullName;
    public OrderCustomer withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceReceivingEmail")
    public String invoiceReceivingEmail;
    public OrderCustomer withInvoiceReceivingEmail(String invoiceReceivingEmail) {
        this.invoiceReceivingEmail = invoiceReceivingEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketingRightsInfo")
    public OrderCustomerMarketingRightsInfo marketingRightsInfo;
    public OrderCustomer withMarketingRightsInfo(OrderCustomerMarketingRightsInfo marketingRightsInfo) {
        this.marketingRightsInfo = marketingRightsInfo;
        return this;
    }
}