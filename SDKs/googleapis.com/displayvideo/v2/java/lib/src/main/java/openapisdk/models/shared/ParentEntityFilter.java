package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ParentEntityFilter
 * A filtering option that filters on selected file types belonging to a chosen set of filter entities.
**/
public class ParentEntityFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileType")
    public ParentEntityFilterFileTypeEnum[] fileType;
    public ParentEntityFilter withFileType(ParentEntityFilterFileTypeEnum[] fileType) {
        this.fileType = fileType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterIds")
    public String[] filterIds;
    public ParentEntityFilter withFilterIds(String[] filterIds) {
        this.filterIds = filterIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterType")
    public ParentEntityFilterFilterTypeEnum filterType;
    public ParentEntityFilter withFilterType(ParentEntityFilterFilterTypeEnum filterType) {
        this.filterType = filterType;
        return this;
    }
}