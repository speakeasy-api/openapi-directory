package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SourceHierarchyDatasets
 * Destination datasets are created so that hierarchy of the destination data objects matches the source hierarchy.
**/
public class SourceHierarchyDatasets {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datasetTemplate")
    public DatasetTemplate datasetTemplate;
    public SourceHierarchyDatasets withDatasetTemplate(DatasetTemplate datasetTemplate) {
        this.datasetTemplate = datasetTemplate;
        return this;
    }
}