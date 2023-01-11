package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeUserInfoFamilySharing
 * Information on the ability to share with the family.
**/
public class VolumeUserInfoFamilySharing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("familyRole")
    public String familyRole;
    public VolumeUserInfoFamilySharing withFamilyRole(String familyRole) {
        this.familyRole = familyRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSharingAllowed")
    public Boolean isSharingAllowed;
    public VolumeUserInfoFamilySharing withIsSharingAllowed(Boolean isSharingAllowed) {
        this.isSharingAllowed = isSharingAllowed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSharingDisabledByFop")
    public Boolean isSharingDisabledByFop;
    public VolumeUserInfoFamilySharing withIsSharingDisabledByFop(Boolean isSharingDisabledByFop) {
        this.isSharingDisabledByFop = isSharingDisabledByFop;
        return this;
    }
}