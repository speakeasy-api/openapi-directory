package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EventCategoryDetail {
    @JsonProperty("careContext")
    public CareContextDefinition careContext;
    public EventCategoryDetail withCareContext(CareContextDefinition careContext) {
        this.careContext = careContext;
        return this;
    }
    @JsonProperty("hiTypes")
    public HiTypeEnumEnum[] hiTypes;
    public EventCategoryDetail withHiTypes(HiTypeEnumEnum[] hiTypes) {
        this.hiTypes = hiTypes;
        return this;
    }
}