package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2Range
 * Generic half-open interval [start, end)
**/
public class GooglePrivacyDlpV2Range {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public String end;
    public GooglePrivacyDlpV2Range withEnd(String end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public String start;
    public GooglePrivacyDlpV2Range withStart(String start) {
        this.start = start;
        return this;
    }
}