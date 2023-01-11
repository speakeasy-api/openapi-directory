package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudStorageWorkload
 * Specifies usage of Cloud Storage resources.
**/
public class CloudStorageWorkload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataRetrieval")
    public Usage dataRetrieval;
    public CloudStorageWorkload withDataRetrieval(Usage dataRetrieval) {
        this.dataRetrieval = dataRetrieval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataStored")
    public Usage dataStored;
    public CloudStorageWorkload withDataStored(Usage dataStored) {
        this.dataStored = dataStored;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dualRegion")
    public DualRegional dualRegion;
    public CloudStorageWorkload withDualRegion(DualRegional dualRegion) {
        this.dualRegion = dualRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multiRegion")
    public MultiRegional multiRegion;
    public CloudStorageWorkload withMultiRegion(MultiRegional multiRegion) {
        this.multiRegion = multiRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationA")
    public Usage operationA;
    public CloudStorageWorkload withOperationA(Usage operationA) {
        this.operationA = operationA;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationB")
    public Usage operationB;
    public CloudStorageWorkload withOperationB(Usage operationB) {
        this.operationB = operationB;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public Regional region;
    public CloudStorageWorkload withRegion(Regional region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageClass")
    public String storageClass;
    public CloudStorageWorkload withStorageClass(String storageClass) {
        this.storageClass = storageClass;
        return this;
    }
}