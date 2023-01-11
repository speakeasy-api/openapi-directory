package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateSdfDownloadTaskRequest
 * Request message for [SdfDownloadTaskService.CreateSdfDownloadTask].
**/
public class CreateSdfDownloadTaskRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public CreateSdfDownloadTaskRequest withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idFilter")
    public IdFilter idFilter;
    public CreateSdfDownloadTaskRequest withIdFilter(IdFilter idFilter) {
        this.idFilter = idFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventorySourceFilter")
    public InventorySourceFilter inventorySourceFilter;
    public CreateSdfDownloadTaskRequest withInventorySourceFilter(InventorySourceFilter inventorySourceFilter) {
        this.inventorySourceFilter = inventorySourceFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentEntityFilter")
    public ParentEntityFilter parentEntityFilter;
    public CreateSdfDownloadTaskRequest withParentEntityFilter(ParentEntityFilter parentEntityFilter) {
        this.parentEntityFilter = parentEntityFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerId")
    public String partnerId;
    public CreateSdfDownloadTaskRequest withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public CreateSdfDownloadTaskRequestVersionEnum version;
    public CreateSdfDownloadTaskRequest withVersion(CreateSdfDownloadTaskRequestVersionEnum version) {
        this.version = version;
        return this;
    }
}