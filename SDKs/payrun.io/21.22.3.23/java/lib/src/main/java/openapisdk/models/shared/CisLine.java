package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CisLine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CisLine")
    public CisLineCisLine cisLine;
    public CisLine withCisLine(CisLineCisLine cisLine) {
        this.cisLine = cisLine;
        return this;
    }
}