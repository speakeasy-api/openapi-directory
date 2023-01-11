package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1Dataset
 * Dataset is the resource to hold your data. You can request multiple labeling tasks for a dataset while each one will generate an AnnotatedDataset.
**/
public class GoogleCloudDatalabelingV1beta1Dataset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockingResources")
    public String[] blockingResources;
    public GoogleCloudDatalabelingV1beta1Dataset withBlockingResources(String[] blockingResources) {
        this.blockingResources = blockingResources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudDatalabelingV1beta1Dataset withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataItemCount")
    public String dataItemCount;
    public GoogleCloudDatalabelingV1beta1Dataset withDataItemCount(String dataItemCount) {
        this.dataItemCount = dataItemCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudDatalabelingV1beta1Dataset withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudDatalabelingV1beta1Dataset withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputConfigs")
    public GoogleCloudDatalabelingV1beta1InputConfig[] inputConfigs;
    public GoogleCloudDatalabelingV1beta1Dataset withInputConfigs(GoogleCloudDatalabelingV1beta1InputConfig[] inputConfigs) {
        this.inputConfigs = inputConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastMigrateTime")
    public String lastMigrateTime;
    public GoogleCloudDatalabelingV1beta1Dataset withLastMigrateTime(String lastMigrateTime) {
        this.lastMigrateTime = lastMigrateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudDatalabelingV1beta1Dataset withName(String name) {
        this.name = name;
        return this;
    }
}