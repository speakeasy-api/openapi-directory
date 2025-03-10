/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class DatasetListDatasets {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datasetReference")
    public DatasetReference datasetReference;

    public DatasetListDatasets withDatasetReference(DatasetReference datasetReference) {
        this.datasetReference = datasetReference;
        return this;
    }
    
    /**
     * A descriptive name for the dataset, if one exists.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendlyName")
    public String friendlyName;

    public DatasetListDatasets withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    
    /**
     * The fully-qualified, unique, opaque ID of the dataset.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public DatasetListDatasets withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * The resource type. This property always returns the value "bigquery#dataset".
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;

    public DatasetListDatasets withKind(String kind) {
        this.kind = kind;
        return this;
    }
    
    /**
     * The labels associated with this dataset. You can use these to organize and group your datasets.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;

    public DatasetListDatasets withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    
    /**
     * The geographic location where the data resides.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;

    public DatasetListDatasets withLocation(String location) {
        this.location = location;
        return this;
    }
    
    public DatasetListDatasets(){}
}
