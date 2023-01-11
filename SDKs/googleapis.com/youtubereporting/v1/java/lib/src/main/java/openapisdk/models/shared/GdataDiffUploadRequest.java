package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GdataDiffUploadRequest
 * gdata
**/
public class GdataDiffUploadRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checksumsInfo")
    public GdataCompositeMedia checksumsInfo;
    public GdataDiffUploadRequest withChecksumsInfo(GdataCompositeMedia checksumsInfo) {
        this.checksumsInfo = checksumsInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectInfo")
    public GdataCompositeMedia objectInfo;
    public GdataDiffUploadRequest withObjectInfo(GdataCompositeMedia objectInfo) {
        this.objectInfo = objectInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectVersion")
    public String objectVersion;
    public GdataDiffUploadRequest withObjectVersion(String objectVersion) {
        this.objectVersion = objectVersion;
        return this;
    }
}