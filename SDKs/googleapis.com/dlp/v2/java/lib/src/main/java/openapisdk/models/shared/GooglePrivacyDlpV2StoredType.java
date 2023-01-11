package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2StoredType
 * A reference to a StoredInfoType to use with scanning.
**/
public class GooglePrivacyDlpV2StoredType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GooglePrivacyDlpV2StoredType withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GooglePrivacyDlpV2StoredType withName(String name) {
        this.name = name;
        return this;
    }
}