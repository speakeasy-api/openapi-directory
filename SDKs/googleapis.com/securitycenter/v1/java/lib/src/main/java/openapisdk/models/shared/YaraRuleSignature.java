package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * YaraRuleSignature
 * A signature corresponding to a YARA rule.
**/
public class YaraRuleSignature {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yaraRule")
    public String yaraRule;
    public YaraRuleSignature withYaraRule(String yaraRule) {
        this.yaraRule = yaraRule;
        return this;
    }
}