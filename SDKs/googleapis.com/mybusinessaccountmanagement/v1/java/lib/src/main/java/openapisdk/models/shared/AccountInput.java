package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountInput
 * An account is a container for your location. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325).
**/
public class AccountInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountName")
    public String accountName;
    public AccountInput withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AccountInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizationInfo")
    public OrganizationInfoInput organizationInfo;
    public AccountInput withOrganizationInfo(OrganizationInfoInput organizationInfo) {
        this.organizationInfo = organizationInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryOwner")
    public String primaryOwner;
    public AccountInput withPrimaryOwner(String primaryOwner) {
        this.primaryOwner = primaryOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public AccountTypeEnum type;
    public AccountInput withType(AccountTypeEnum type) {
        this.type = type;
        return this;
    }
}