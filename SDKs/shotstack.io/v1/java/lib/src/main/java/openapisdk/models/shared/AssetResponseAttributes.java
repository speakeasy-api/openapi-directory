package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetResponseAttributes
 * The list of asset attributes and their values.
**/
public class AssetResponseAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public String created;
    public AssetResponseAttributes withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filename")
    public String filename;
    public AssetResponseAttributes withFilename(String filename) {
        this.filename = filename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AssetResponseAttributes withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public String owner;
    public AssetResponseAttributes withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public AssetResponseAttributes withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renderId")
    public String renderId;
    public AssetResponseAttributes withRenderId(String renderId) {
        this.renderId = renderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AssetResponseAttributesStatusEnum status;
    public AssetResponseAttributes withStatus(AssetResponseAttributesStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated")
    public String updated;
    public AssetResponseAttributes withUpdated(String updated) {
        this.updated = updated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public AssetResponseAttributes withUrl(String url) {
        this.url = url;
        return this;
    }
}