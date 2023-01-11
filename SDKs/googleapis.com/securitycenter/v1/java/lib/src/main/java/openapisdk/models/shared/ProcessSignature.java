package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProcessSignature
 * Indicates what signature matched this process.
**/
public class ProcessSignature {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoryHashSignature")
    public MemoryHashSignature memoryHashSignature;
    public ProcessSignature withMemoryHashSignature(MemoryHashSignature memoryHashSignature) {
        this.memoryHashSignature = memoryHashSignature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yaraRuleSignature")
    public YaraRuleSignature yaraRuleSignature;
    public ProcessSignature withYaraRuleSignature(YaraRuleSignature yaraRuleSignature) {
        this.yaraRuleSignature = yaraRuleSignature;
        return this;
    }
}