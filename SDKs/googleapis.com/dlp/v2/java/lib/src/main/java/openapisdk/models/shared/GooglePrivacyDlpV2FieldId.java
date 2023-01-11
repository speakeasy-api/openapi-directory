package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2FieldId
 * General identifier of a data field in a storage service.
**/
public class GooglePrivacyDlpV2FieldId {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GooglePrivacyDlpV2FieldId withName(String name) {
        this.name = name;
        return this;
    }
}