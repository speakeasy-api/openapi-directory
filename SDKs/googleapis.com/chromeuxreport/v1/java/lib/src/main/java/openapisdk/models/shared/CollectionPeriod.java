package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CollectionPeriod
 * The collection period is a date range which includes the `first` and `last` day.
**/
public class CollectionPeriod {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstDate")
    public Date firstDate;
    public CollectionPeriod withFirstDate(Date firstDate) {
        this.firstDate = firstDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastDate")
    public Date lastDate;
    public CollectionPeriod withLastDate(Date lastDate) {
        this.lastDate = lastDate;
        return this;
    }
}