package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DimensionProperties
 * Properties about a dimension.
**/
public class DimensionProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceColumnReference")
    public DataSourceColumnReference dataSourceColumnReference;
    public DimensionProperties withDataSourceColumnReference(DataSourceColumnReference dataSourceColumnReference) {
        this.dataSourceColumnReference = dataSourceColumnReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("developerMetadata")
    public DeveloperMetadata[] developerMetadata;
    public DimensionProperties withDeveloperMetadata(DeveloperMetadata[] developerMetadata) {
        this.developerMetadata = developerMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hiddenByFilter")
    public Boolean hiddenByFilter;
    public DimensionProperties withHiddenByFilter(Boolean hiddenByFilter) {
        this.hiddenByFilter = hiddenByFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hiddenByUser")
    public Boolean hiddenByUser;
    public DimensionProperties withHiddenByUser(Boolean hiddenByUser) {
        this.hiddenByUser = hiddenByUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pixelSize")
    public Integer pixelSize;
    public DimensionProperties withPixelSize(Integer pixelSize) {
        this.pixelSize = pixelSize;
        return this;
    }
}