package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProtectedRange
 * A protected range.
**/
public class ProtectedRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ProtectedRange withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("editors")
    public Editors editors;
    public ProtectedRange withEditors(Editors editors) {
        this.editors = editors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namedRangeId")
    public String namedRangeId;
    public ProtectedRange withNamedRangeId(String namedRangeId) {
        this.namedRangeId = namedRangeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protectedRangeId")
    public Integer protectedRangeId;
    public ProtectedRange withProtectedRangeId(Integer protectedRangeId) {
        this.protectedRangeId = protectedRangeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public GridRange range;
    public ProtectedRange withRange(GridRange range) {
        this.range = range;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestingUserCanEdit")
    public Boolean requestingUserCanEdit;
    public ProtectedRange withRequestingUserCanEdit(Boolean requestingUserCanEdit) {
        this.requestingUserCanEdit = requestingUserCanEdit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unprotectedRanges")
    public GridRange[] unprotectedRanges;
    public ProtectedRange withUnprotectedRanges(GridRange[] unprotectedRanges) {
        this.unprotectedRanges = unprotectedRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warningOnly")
    public Boolean warningOnly;
    public ProtectedRange withWarningOnly(Boolean warningOnly) {
        this.warningOnly = warningOnly;
        return this;
    }
}