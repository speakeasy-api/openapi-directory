package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ContactInfoInput
 * Contact information for a customer account.
**/
public class GoogleCloudChannelV1ContactInfoInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public GoogleCloudChannelV1ContactInfoInput withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public GoogleCloudChannelV1ContactInfoInput withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public GoogleCloudChannelV1ContactInfoInput withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone")
    public String phone;
    public GoogleCloudChannelV1ContactInfoInput withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GoogleCloudChannelV1ContactInfoInput withTitle(String title) {
        this.title = title;
        return this;
    }
}