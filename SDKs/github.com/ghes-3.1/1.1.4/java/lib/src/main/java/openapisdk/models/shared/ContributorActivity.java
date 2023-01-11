package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ContributorActivity
 * Contributor Activity
**/
public class ContributorActivity {
    @JsonProperty("author")
    public ContributorActivitySimpleUser author;
    public ContributorActivity withAuthor(ContributorActivitySimpleUser author) {
        this.author = author;
        return this;
    }
    @JsonProperty("total")
    public Long total;
    public ContributorActivity withTotal(Long total) {
        this.total = total;
        return this;
    }
    @JsonProperty("weeks")
    public ContributorActivityWeeks[] weeks;
    public ContributorActivity withWeeks(ContributorActivityWeeks[] weeks) {
        this.weeks = weeks;
        return this;
    }
}