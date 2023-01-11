package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Volume {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessInfo")
    public VolumeAccessInfo accessInfo;
    public Volume withAccessInfo(VolumeAccessInfo accessInfo) {
        this.accessInfo = accessInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Volume withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Volume withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Volume withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("layerInfo")
    public VolumeLayerInfo layerInfo;
    public Volume withLayerInfo(VolumeLayerInfo layerInfo) {
        this.layerInfo = layerInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendedInfo")
    public VolumeRecommendedInfo recommendedInfo;
    public Volume withRecommendedInfo(VolumeRecommendedInfo recommendedInfo) {
        this.recommendedInfo = recommendedInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("saleInfo")
    public VolumeSaleInfo saleInfo;
    public Volume withSaleInfo(VolumeSaleInfo saleInfo) {
        this.saleInfo = saleInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("searchInfo")
    public VolumeSearchInfo searchInfo;
    public Volume withSearchInfo(VolumeSearchInfo searchInfo) {
        this.searchInfo = searchInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public Volume withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userInfo")
    public VolumeUserInfo userInfo;
    public Volume withUserInfo(VolumeUserInfo userInfo) {
        this.userInfo = userInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeInfo")
    public VolumeVolumeInfo volumeInfo;
    public Volume withVolumeInfo(VolumeVolumeInfo volumeInfo) {
        this.volumeInfo = volumeInfo;
        return this;
    }
}