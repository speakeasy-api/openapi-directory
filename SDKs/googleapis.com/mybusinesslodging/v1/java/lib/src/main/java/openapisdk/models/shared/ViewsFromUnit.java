package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ViewsFromUnit
 * Views available from the guest unit itself.
**/
public class ViewsFromUnit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beachView")
    public Boolean beachView;
    public ViewsFromUnit withBeachView(Boolean beachView) {
        this.beachView = beachView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beachViewException")
    public ViewsFromUnitBeachViewExceptionEnum beachViewException;
    public ViewsFromUnit withBeachViewException(ViewsFromUnitBeachViewExceptionEnum beachViewException) {
        this.beachViewException = beachViewException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cityView")
    public Boolean cityView;
    public ViewsFromUnit withCityView(Boolean cityView) {
        this.cityView = cityView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cityViewException")
    public ViewsFromUnitCityViewExceptionEnum cityViewException;
    public ViewsFromUnit withCityViewException(ViewsFromUnitCityViewExceptionEnum cityViewException) {
        this.cityViewException = cityViewException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gardenView")
    public Boolean gardenView;
    public ViewsFromUnit withGardenView(Boolean gardenView) {
        this.gardenView = gardenView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gardenViewException")
    public ViewsFromUnitGardenViewExceptionEnum gardenViewException;
    public ViewsFromUnit withGardenViewException(ViewsFromUnitGardenViewExceptionEnum gardenViewException) {
        this.gardenViewException = gardenViewException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lakeView")
    public Boolean lakeView;
    public ViewsFromUnit withLakeView(Boolean lakeView) {
        this.lakeView = lakeView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lakeViewException")
    public ViewsFromUnitLakeViewExceptionEnum lakeViewException;
    public ViewsFromUnit withLakeViewException(ViewsFromUnitLakeViewExceptionEnum lakeViewException) {
        this.lakeViewException = lakeViewException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("landmarkView")
    public Boolean landmarkView;
    public ViewsFromUnit withLandmarkView(Boolean landmarkView) {
        this.landmarkView = landmarkView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("landmarkViewException")
    public ViewsFromUnitLandmarkViewExceptionEnum landmarkViewException;
    public ViewsFromUnit withLandmarkViewException(ViewsFromUnitLandmarkViewExceptionEnum landmarkViewException) {
        this.landmarkViewException = landmarkViewException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oceanView")
    public Boolean oceanView;
    public ViewsFromUnit withOceanView(Boolean oceanView) {
        this.oceanView = oceanView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oceanViewException")
    public ViewsFromUnitOceanViewExceptionEnum oceanViewException;
    public ViewsFromUnit withOceanViewException(ViewsFromUnitOceanViewExceptionEnum oceanViewException) {
        this.oceanViewException = oceanViewException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("poolView")
    public Boolean poolView;
    public ViewsFromUnit withPoolView(Boolean poolView) {
        this.poolView = poolView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("poolViewException")
    public ViewsFromUnitPoolViewExceptionEnum poolViewException;
    public ViewsFromUnit withPoolViewException(ViewsFromUnitPoolViewExceptionEnum poolViewException) {
        this.poolViewException = poolViewException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valleyView")
    public Boolean valleyView;
    public ViewsFromUnit withValleyView(Boolean valleyView) {
        this.valleyView = valleyView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valleyViewException")
    public ViewsFromUnitValleyViewExceptionEnum valleyViewException;
    public ViewsFromUnit withValleyViewException(ViewsFromUnitValleyViewExceptionEnum valleyViewException) {
        this.valleyViewException = valleyViewException;
        return this;
    }
}