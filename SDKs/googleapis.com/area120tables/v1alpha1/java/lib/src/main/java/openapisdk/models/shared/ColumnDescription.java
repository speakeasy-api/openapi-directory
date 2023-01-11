package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ColumnDescription
 * Details on a column in the table.
**/
public class ColumnDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataType")
    public String dataType;
    public ColumnDescription withDataType(String dataType) {
        this.dataType = dataType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateDetails")
    public DateDetails dateDetails;
    public ColumnDescription withDateDetails(DateDetails dateDetails) {
        this.dateDetails = dateDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ColumnDescription withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public LabeledItem[] labels;
    public ColumnDescription withLabels(LabeledItem[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lookupDetails")
    public LookupDetails lookupDetails;
    public ColumnDescription withLookupDetails(LookupDetails lookupDetails) {
        this.lookupDetails = lookupDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multipleValuesDisallowed")
    public Boolean multipleValuesDisallowed;
    public ColumnDescription withMultipleValuesDisallowed(Boolean multipleValuesDisallowed) {
        this.multipleValuesDisallowed = multipleValuesDisallowed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ColumnDescription withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readonly")
    public Boolean readonly;
    public ColumnDescription withReadonly(Boolean readonly) {
        this.readonly = readonly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationshipDetails")
    public RelationshipDetails relationshipDetails;
    public ColumnDescription withRelationshipDetails(RelationshipDetails relationshipDetails) {
        this.relationshipDetails = relationshipDetails;
        return this;
    }
}