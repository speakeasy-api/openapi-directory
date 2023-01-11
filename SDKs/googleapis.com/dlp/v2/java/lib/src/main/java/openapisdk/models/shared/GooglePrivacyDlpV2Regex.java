package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2Regex
 * Message defining a custom regular expression.
**/
public class GooglePrivacyDlpV2Regex {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupIndexes")
    public Integer[] groupIndexes;
    public GooglePrivacyDlpV2Regex withGroupIndexes(Integer[] groupIndexes) {
        this.groupIndexes = groupIndexes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pattern")
    public String pattern;
    public GooglePrivacyDlpV2Regex withPattern(String pattern) {
        this.pattern = pattern;
        return this;
    }
}