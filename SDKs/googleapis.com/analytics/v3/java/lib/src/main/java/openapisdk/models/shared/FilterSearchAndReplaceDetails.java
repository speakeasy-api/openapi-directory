package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FilterSearchAndReplaceDetails
 * Details for the filter of the type SEARCH_AND_REPLACE.
**/
public class FilterSearchAndReplaceDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caseSensitive")
    public Boolean caseSensitive;
    public FilterSearchAndReplaceDetails withCaseSensitive(Boolean caseSensitive) {
        this.caseSensitive = caseSensitive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public String field;
    public FilterSearchAndReplaceDetails withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldIndex")
    public Integer fieldIndex;
    public FilterSearchAndReplaceDetails withFieldIndex(Integer fieldIndex) {
        this.fieldIndex = fieldIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replaceString")
    public String replaceString;
    public FilterSearchAndReplaceDetails withReplaceString(String replaceString) {
        this.replaceString = replaceString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("searchString")
    public String searchString;
    public FilterSearchAndReplaceDetails withSearchString(String searchString) {
        this.searchString = searchString;
        return this;
    }
}