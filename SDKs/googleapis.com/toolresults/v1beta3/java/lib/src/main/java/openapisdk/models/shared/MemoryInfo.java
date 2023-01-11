package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MemoryInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoryCapInKibibyte")
    public String memoryCapInKibibyte;
    public MemoryInfo withMemoryCapInKibibyte(String memoryCapInKibibyte) {
        this.memoryCapInKibibyte = memoryCapInKibibyte;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoryTotalInKibibyte")
    public String memoryTotalInKibibyte;
    public MemoryInfo withMemoryTotalInKibibyte(String memoryTotalInKibibyte) {
        this.memoryTotalInKibibyte = memoryTotalInKibibyte;
        return this;
    }
}