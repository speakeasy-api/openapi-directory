package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDeveloperMetadataRequest
 * A request to update properties of developer metadata. Updates the properties of the developer metadata selected by the filters to the values provided in the DeveloperMetadata resource. Callers must specify the properties they wish to update in the fields parameter, as well as specify at least one DataFilter matching the metadata they wish to update.
**/
public class UpdateDeveloperMetadataRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataFilters")
    public DataFilter[] dataFilters;
    public UpdateDeveloperMetadataRequest withDataFilters(DataFilter[] dataFilters) {
        this.dataFilters = dataFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("developerMetadata")
    public DeveloperMetadata developerMetadata;
    public UpdateDeveloperMetadataRequest withDeveloperMetadata(DeveloperMetadata developerMetadata) {
        this.developerMetadata = developerMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public String fields;
    public UpdateDeveloperMetadataRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
}