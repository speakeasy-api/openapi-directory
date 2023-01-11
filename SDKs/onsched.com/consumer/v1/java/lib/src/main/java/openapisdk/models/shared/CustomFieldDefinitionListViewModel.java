package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CustomFieldDefinitionListViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectName")
    public String objectName;
    public CustomFieldDefinitionListViewModel withObjectName(String objectName) {
        this.objectName = objectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Integer total;
    public CustomFieldDefinitionListViewModel withTotal(Integer total) {
        this.total = total;
        return this;
    }
}