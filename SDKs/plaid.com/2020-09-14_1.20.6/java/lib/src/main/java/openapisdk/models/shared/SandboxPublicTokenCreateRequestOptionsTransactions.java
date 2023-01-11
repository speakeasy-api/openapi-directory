package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SandboxPublicTokenCreateRequestOptionsTransactions
 * SandboxPublicTokenCreateRequestOptionsTransactions is an optional set of parameters corresponding to transactions options.
**/
public class SandboxPublicTokenCreateRequestOptionsTransactions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_date")
    public LocalDate endDate;
    public SandboxPublicTokenCreateRequestOptionsTransactions withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_date")
    public LocalDate startDate;
    public SandboxPublicTokenCreateRequestOptionsTransactions withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
}