package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Event
 * Represents the changes associated with an action taken by a user.
**/
public class Event {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalEventTypes")
    public EventAdditionalEventTypesEnum[] additionalEventTypes;
    public Event withAdditionalEventTypes(EventAdditionalEventTypesEnum[] additionalEventTypes) {
        this.additionalEventTypes = additionalEventTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventTimeMillis")
    public String eventTimeMillis;
    public Event withEventTimeMillis(String eventTimeMillis) {
        this.eventTimeMillis = eventTimeMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromUserDeletion")
    public Boolean fromUserDeletion;
    public Event withFromUserDeletion(Boolean fromUserDeletion) {
        this.fromUserDeletion = fromUserDeletion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("move")
    public Move move;
    public Event withMove(Move move) {
        this.move = move;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissionChanges")
    public PermissionChange[] permissionChanges;
    public Event withPermissionChanges(PermissionChange[] permissionChanges) {
        this.permissionChanges = permissionChanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryEventType")
    public EventPrimaryEventTypeEnum primaryEventType;
    public Event withPrimaryEventType(EventPrimaryEventTypeEnum primaryEventType) {
        this.primaryEventType = primaryEventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rename")
    public Rename rename;
    public Event withRename(Rename rename) {
        this.rename = rename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public Target target;
    public Event withTarget(Target target) {
        this.target = target;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public User user;
    public Event withUser(User user) {
        this.user = user;
        return this;
    }
}