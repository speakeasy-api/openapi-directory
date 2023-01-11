package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Meta
 * Meta Data relevant to the payload
**/
public class Meta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirstAvailableDateTime")
    public String firstAvailableDateTime;
    public Meta withFirstAvailableDateTime(String firstAvailableDateTime) {
        this.firstAvailableDateTime = firstAvailableDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastAvailableDateTime")
    public String lastAvailableDateTime;
    public Meta withLastAvailableDateTime(String lastAvailableDateTime) {
        this.lastAvailableDateTime = lastAvailableDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalPages")
    public Integer totalPages;
    public Meta withTotalPages(Integer totalPages) {
        this.totalPages = totalPages;
        return this;
    }
}