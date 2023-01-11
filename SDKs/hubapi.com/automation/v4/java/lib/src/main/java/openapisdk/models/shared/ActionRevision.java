package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ActionRevision
 * A revision of this custom action.
**/
public class ActionRevision {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public ActionRevision withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("definition")
    public ExtensionActionDefinition definition;
    public ActionRevision withDefinition(ExtensionActionDefinition definition) {
        this.definition = definition;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ActionRevision withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("revisionId")
    public String revisionId;
    public ActionRevision withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
}