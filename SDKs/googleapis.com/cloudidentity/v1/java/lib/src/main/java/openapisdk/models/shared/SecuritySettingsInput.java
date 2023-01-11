package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SecuritySettingsInput
 * The definition of security settings.
**/
public class SecuritySettingsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberRestriction")
    public MemberRestriction memberRestriction;
    public SecuritySettingsInput withMemberRestriction(MemberRestriction memberRestriction) {
        this.memberRestriction = memberRestriction;
        return this;
    }
}