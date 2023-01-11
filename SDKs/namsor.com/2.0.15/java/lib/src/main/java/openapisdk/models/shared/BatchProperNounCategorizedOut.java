package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchProperNounCategorizedOut
 * Represents the output of inferring the common type (anthroponym, toponym, brand, etc.) from a list of proper names.
**/
public class BatchProperNounCategorizedOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properNouns")
    public ProperNounCategorizedOut[] properNouns;
    public BatchProperNounCategorizedOut withProperNouns(ProperNounCategorizedOut[] properNouns) {
        this.properNouns = properNouns;
        return this;
    }
}