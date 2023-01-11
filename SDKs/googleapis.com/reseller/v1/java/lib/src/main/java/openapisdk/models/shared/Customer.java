package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Customer
 * When a Google customer's account is registered with a reseller, the customer's subscriptions for Google services are managed by this reseller. A customer is described by a primary domain name and a physical address.
**/
public class Customer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternateEmail")
    public String alternateEmail;
    public Customer withAlternateEmail(String alternateEmail) {
        this.alternateEmail = alternateEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerDomain")
    public String customerDomain;
    public Customer withCustomerDomain(String customerDomain) {
        this.customerDomain = customerDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerDomainVerified")
    public Boolean customerDomainVerified;
    public Customer withCustomerDomainVerified(Boolean customerDomainVerified) {
        this.customerDomainVerified = customerDomainVerified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerId")
    public String customerId;
    public Customer withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerType")
    public CustomerCustomerTypeEnum customerType;
    public Customer withCustomerType(CustomerCustomerTypeEnum customerType) {
        this.customerType = customerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Customer withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public Customer withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postalAddress")
    public Address postalAddress;
    public Customer withPostalAddress(Address postalAddress) {
        this.postalAddress = postalAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryAdmin")
    public PrimaryAdmin primaryAdmin;
    public Customer withPrimaryAdmin(PrimaryAdmin primaryAdmin) {
        this.primaryAdmin = primaryAdmin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceUiUrl")
    public String resourceUiUrl;
    public Customer withResourceUiUrl(String resourceUiUrl) {
        this.resourceUiUrl = resourceUiUrl;
        return this;
    }
}