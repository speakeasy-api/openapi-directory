package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDhlExpressSettingsRequestBody
 * A DHL Express account settings
**/
public class UpdateDhlExpressSettingsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_primary_account")
    public Boolean isPrimaryAccount;
    public UpdateDhlExpressSettingsRequestBody withIsPrimaryAccount(Boolean isPrimaryAccount) {
        this.isPrimaryAccount = isPrimaryAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nickname")
    public String nickname;
    public UpdateDhlExpressSettingsRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("should_hide_account_number_on_archive_doc")
    public Boolean shouldHideAccountNumberOnArchiveDoc;
    public UpdateDhlExpressSettingsRequestBody withShouldHideAccountNumberOnArchiveDoc(Boolean shouldHideAccountNumberOnArchiveDoc) {
        this.shouldHideAccountNumberOnArchiveDoc = shouldHideAccountNumberOnArchiveDoc;
        return this;
    }
}