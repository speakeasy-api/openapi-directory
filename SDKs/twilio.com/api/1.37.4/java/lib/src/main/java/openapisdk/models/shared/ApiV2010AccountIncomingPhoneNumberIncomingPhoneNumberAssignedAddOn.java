package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configuration")
    public Object configuration;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn withConfiguration(Object configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_created")
    public String dateCreated;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn withDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_updated")
    public String dateUpdated;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn withDateUpdated(String dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_sid")
    public String resourceSid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn withResourceSid(String resourceSid) {
        this.resourceSid = resourceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subresource_uris")
    public java.util.Map<String, Object> subresourceUris;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn withSubresourceUris(java.util.Map<String, Object> subresourceUris) {
        this.subresourceUris = subresourceUris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unique_name")
    public String uniqueName;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn withUri(String uri) {
        this.uri = uri;
        return this;
    }
}