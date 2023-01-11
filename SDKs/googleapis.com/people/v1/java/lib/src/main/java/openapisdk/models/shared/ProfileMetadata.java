package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProfileMetadata
 * The metadata about a profile.
**/
public class ProfileMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectType")
    public ProfileMetadataObjectTypeEnum objectType;
    public ProfileMetadata withObjectType(ProfileMetadataObjectTypeEnum objectType) {
        this.objectType = objectType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userTypes")
    public ProfileMetadataUserTypesEnum[] userTypes;
    public ProfileMetadata withUserTypes(ProfileMetadataUserTypesEnum[] userTypes) {
        this.userTypes = userTypes;
        return this;
    }
}