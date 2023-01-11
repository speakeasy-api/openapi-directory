package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Contact
 * A person or group that can be used as a creator or a contact.
**/
public class Contact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acceptCommands")
    public Command[] acceptCommands;
    public Contact withAcceptCommands(Command[] acceptCommands) {
        this.acceptCommands = acceptCommands;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acceptTypes")
    public String[] acceptTypes;
    public Contact withAcceptTypes(String[] acceptTypes) {
        this.acceptTypes = acceptTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Contact withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Contact withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageUrls")
    public String[] imageUrls;
    public Contact withImageUrls(String[] imageUrls) {
        this.imageUrls = imageUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Contact withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public Contact withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public Long priority;
    public Contact withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharingFeatures")
    public String[] sharingFeatures;
    public Contact withSharingFeatures(String[] sharingFeatures) {
        this.sharingFeatures = sharingFeatures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public Contact withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speakableName")
    public String speakableName;
    public Contact withSpeakableName(String speakableName) {
        this.speakableName = speakableName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Contact withType(String type) {
        this.type = type;
        return this;
    }
}