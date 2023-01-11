package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DomainMappingStatus
 * The current state of the Domain Mapping.
**/
public class DomainMappingStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditions")
    public GoogleCloudRunV1Condition[] conditions;
    public DomainMappingStatus withConditions(GoogleCloudRunV1Condition[] conditions) {
        this.conditions = conditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mappedRouteName")
    public String mappedRouteName;
    public DomainMappingStatus withMappedRouteName(String mappedRouteName) {
        this.mappedRouteName = mappedRouteName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("observedGeneration")
    public Integer observedGeneration;
    public DomainMappingStatus withObservedGeneration(Integer observedGeneration) {
        this.observedGeneration = observedGeneration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceRecords")
    public ResourceRecord[] resourceRecords;
    public DomainMappingStatus withResourceRecords(ResourceRecord[] resourceRecords) {
        this.resourceRecords = resourceRecords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public DomainMappingStatus withUrl(String url) {
        this.url = url;
        return this;
    }
}