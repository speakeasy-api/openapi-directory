package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2KindExpression
 * A representation of a Datastore kind.
**/
public class GooglePrivacyDlpV2KindExpression {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GooglePrivacyDlpV2KindExpression withName(String name) {
        this.name = name;
        return this;
    }
}