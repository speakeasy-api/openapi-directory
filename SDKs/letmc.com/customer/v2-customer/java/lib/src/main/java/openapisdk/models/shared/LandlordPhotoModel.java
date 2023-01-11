package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LandlordPhotoModel
 * Stores a photo related to a property structure.
**/
public class LandlordPhotoModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ETag")
    public String eTag;
    public LandlordPhotoModel withETag(String eTag) {
        this.eTag = eTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FileName")
    public String fileName;
    public LandlordPhotoModel withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OID")
    public String oid;
    public LandlordPhotoModel withOid(String oid) {
        this.oid = oid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PhotoType")
    public LandlordPhotoModelPhotoTypeEnum photoType;
    public LandlordPhotoModel withPhotoType(LandlordPhotoModelPhotoTypeEnum photoType) {
        this.photoType = photoType;
        return this;
    }
}