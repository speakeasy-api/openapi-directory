package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaUserInfo
 * Information about a user.
**/
public class GoogleAppsDriveLabelsV2betaUserInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("person")
    public String person;
    public GoogleAppsDriveLabelsV2betaUserInfo withPerson(String person) {
        this.person = person;
        return this;
    }
}