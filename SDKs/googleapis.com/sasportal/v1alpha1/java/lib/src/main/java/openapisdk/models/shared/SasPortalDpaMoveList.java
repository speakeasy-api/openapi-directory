package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalDpaMoveList
 * An entry in a DPA's move list.
**/
public class SasPortalDpaMoveList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dpaId")
    public String dpaId;
    public SasPortalDpaMoveList withDpaId(String dpaId) {
        this.dpaId = dpaId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequencyRange")
    public SasPortalFrequencyRange frequencyRange;
    public SasPortalDpaMoveList withFrequencyRange(SasPortalFrequencyRange frequencyRange) {
        this.frequencyRange = frequencyRange;
        return this;
    }
}