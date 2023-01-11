package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FindReplaceRequest
 * Finds and replaces data in cells over a range, sheet, or all sheets.
**/
public class FindReplaceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allSheets")
    public Boolean allSheets;
    public FindReplaceRequest withAllSheets(Boolean allSheets) {
        this.allSheets = allSheets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("find")
    public String find;
    public FindReplaceRequest withFind(String find) {
        this.find = find;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeFormulas")
    public Boolean includeFormulas;
    public FindReplaceRequest withIncludeFormulas(Boolean includeFormulas) {
        this.includeFormulas = includeFormulas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchCase")
    public Boolean matchCase;
    public FindReplaceRequest withMatchCase(Boolean matchCase) {
        this.matchCase = matchCase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchEntireCell")
    public Boolean matchEntireCell;
    public FindReplaceRequest withMatchEntireCell(Boolean matchEntireCell) {
        this.matchEntireCell = matchEntireCell;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public GridRange range;
    public FindReplaceRequest withRange(GridRange range) {
        this.range = range;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replacement")
    public String replacement;
    public FindReplaceRequest withReplacement(String replacement) {
        this.replacement = replacement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("searchByRegex")
    public Boolean searchByRegex;
    public FindReplaceRequest withSearchByRegex(Boolean searchByRegex) {
        this.searchByRegex = searchByRegex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sheetId")
    public Integer sheetId;
    public FindReplaceRequest withSheetId(Integer sheetId) {
        this.sheetId = sheetId;
        return this;
    }
}