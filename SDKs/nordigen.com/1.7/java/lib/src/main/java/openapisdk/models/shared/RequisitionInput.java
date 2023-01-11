package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * RequisitionInput
 * RequisitionSerializer.
**/
public class RequisitionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agreements")
@SpeakeasyMetadata("form:name=agreements multipartForm:name=agreements,json")
    public String[] agreements;
    public RequisitionInput withAgreements(String[] agreements) {
        this.agreements = agreements;
        return this;
    }
    @JsonProperty("enduser_id")
@SpeakeasyMetadata("form:name=enduser_id multipartForm:name=enduser_id")
    public String enduserId;
    public RequisitionInput withEnduserId(String enduserId) {
        this.enduserId = enduserId;
        return this;
    }
    @JsonProperty("redirect")
@SpeakeasyMetadata("form:name=redirect multipartForm:name=redirect")
    public String redirect;
    public RequisitionInput withRedirect(String redirect) {
        this.redirect = redirect;
        return this;
    }
    @JsonProperty("reference")
@SpeakeasyMetadata("form:name=reference multipartForm:name=reference")
    public String reference;
    public RequisitionInput withReference(String reference) {
        this.reference = reference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_language")
@SpeakeasyMetadata("form:name=user_language multipartForm:name=user_language")
    public String userLanguage;
    public RequisitionInput withUserLanguage(String userLanguage) {
        this.userLanguage = userLanguage;
        return this;
    }
}