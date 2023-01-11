package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrderContact
 * Contact of an order.
**/
public class OrderContact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactInfo")
    public String contactInfo;
    public OrderContact withContactInfo(String contactInfo) {
        this.contactInfo = contactInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactName")
    public String contactName;
    public OrderContact withContactName(String contactName) {
        this.contactName = contactName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactTitle")
    public String contactTitle;
    public OrderContact withContactTitle(String contactTitle) {
        this.contactTitle = contactTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactType")
    public OrderContactContactTypeEnum contactType;
    public OrderContact withContactType(OrderContactContactTypeEnum contactType) {
        this.contactType = contactType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signatureUserProfileId")
    public String signatureUserProfileId;
    public OrderContact withSignatureUserProfileId(String signatureUserProfileId) {
        this.signatureUserProfileId = signatureUserProfileId;
        return this;
    }
}