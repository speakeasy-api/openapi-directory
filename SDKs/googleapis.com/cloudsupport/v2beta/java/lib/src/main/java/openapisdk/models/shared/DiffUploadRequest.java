package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DiffUploadRequest
 * # gdata.* are outside protos with mising documentation
**/
public class DiffUploadRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checksumsInfo")
    public CompositeMedia checksumsInfo;
    public DiffUploadRequest withChecksumsInfo(CompositeMedia checksumsInfo) {
        this.checksumsInfo = checksumsInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectInfo")
    public CompositeMedia objectInfo;
    public DiffUploadRequest withObjectInfo(CompositeMedia objectInfo) {
        this.objectInfo = objectInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectVersion")
    public String objectVersion;
    public DiffUploadRequest withObjectVersion(String objectVersion) {
        this.objectVersion = objectVersion;
        return this;
    }
}