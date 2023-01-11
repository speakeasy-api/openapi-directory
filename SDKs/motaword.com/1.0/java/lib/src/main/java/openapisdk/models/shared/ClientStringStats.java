package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ClientStringStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language_counts")
    public LanguageStringStat[] languageCounts;
    public ClientStringStats withLanguageCounts(LanguageStringStat[] languageCounts) {
        this.languageCounts = languageCounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_project_strings_count")
    public Long totalProjectStringsCount;
    public ClientStringStats withTotalProjectStringsCount(Long totalProjectStringsCount) {
        this.totalProjectStringsCount = totalProjectStringsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_tm_strings_count")
    public Long totalTmStringsCount;
    public ClientStringStats withTotalTmStringsCount(Long totalTmStringsCount) {
        this.totalTmStringsCount = totalTmStringsCount;
        return this;
    }
}