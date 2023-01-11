package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Requisition
 * RequisitionSerializer.
**/
public class Requisition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accounts")
    public String[] accounts;
    public Requisition withAccounts(String[] accounts) {
        this.accounts = accounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agreements")
    public String[] agreements;
    public Requisition withAgreements(String[] agreements) {
        this.agreements = agreements;
        return this;
    }
    @JsonProperty("enduser_id")
    public String enduserId;
    public Requisition withEnduserId(String enduserId) {
        this.enduserId = enduserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Requisition withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("redirect")
    public String redirect;
    public Requisition withRedirect(String redirect) {
        this.redirect = redirect;
        return this;
    }
    @JsonProperty("reference")
    public String reference;
    public Requisition withReference(String reference) {
        this.reference = reference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public java.util.Map<String, Object> status;
    public Requisition withStatus(java.util.Map<String, Object> status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_language")
    public String userLanguage;
    public Requisition withUserLanguage(String userLanguage) {
        this.userLanguage = userLanguage;
        return this;
    }
}