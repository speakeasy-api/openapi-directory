package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstrumentsListResult
 * Image search results
**/
public class InstrumentsListResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Instrument[] data;
    public InstrumentsListResult withData(Instrument[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public InstrumentsListResult withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("per_page")
    public Long perPage;
    public InstrumentsListResult withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}