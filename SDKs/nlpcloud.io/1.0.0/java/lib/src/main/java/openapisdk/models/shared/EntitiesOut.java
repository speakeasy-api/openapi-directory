package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EntitiesOut {
    @JsonProperty("entities")
    public EntityOut[] entities;
    public EntitiesOut withEntities(EntityOut[] entities) {
        this.entities = entities;
        return this;
    }
}