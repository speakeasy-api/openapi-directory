package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GuestUnitFeatures
 * Features and available amenities in the guest unit.
**/
public class GuestUnitFeatures {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bungalowOrVilla")
    public Boolean bungalowOrVilla;
    public GuestUnitFeatures withBungalowOrVilla(Boolean bungalowOrVilla) {
        this.bungalowOrVilla = bungalowOrVilla;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bungalowOrVillaException")
    public GuestUnitFeaturesBungalowOrVillaExceptionEnum bungalowOrVillaException;
    public GuestUnitFeatures withBungalowOrVillaException(GuestUnitFeaturesBungalowOrVillaExceptionEnum bungalowOrVillaException) {
        this.bungalowOrVillaException = bungalowOrVillaException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectingUnitAvailable")
    public Boolean connectingUnitAvailable;
    public GuestUnitFeatures withConnectingUnitAvailable(Boolean connectingUnitAvailable) {
        this.connectingUnitAvailable = connectingUnitAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectingUnitAvailableException")
    public GuestUnitFeaturesConnectingUnitAvailableExceptionEnum connectingUnitAvailableException;
    public GuestUnitFeatures withConnectingUnitAvailableException(GuestUnitFeaturesConnectingUnitAvailableExceptionEnum connectingUnitAvailableException) {
        this.connectingUnitAvailableException = connectingUnitAvailableException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executiveFloor")
    public Boolean executiveFloor;
    public GuestUnitFeatures withExecutiveFloor(Boolean executiveFloor) {
        this.executiveFloor = executiveFloor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executiveFloorException")
    public GuestUnitFeaturesExecutiveFloorExceptionEnum executiveFloorException;
    public GuestUnitFeatures withExecutiveFloorException(GuestUnitFeaturesExecutiveFloorExceptionEnum executiveFloorException) {
        this.executiveFloorException = executiveFloorException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxAdultOccupantsCount")
    public Integer maxAdultOccupantsCount;
    public GuestUnitFeatures withMaxAdultOccupantsCount(Integer maxAdultOccupantsCount) {
        this.maxAdultOccupantsCount = maxAdultOccupantsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxAdultOccupantsCountException")
    public GuestUnitFeaturesMaxAdultOccupantsCountExceptionEnum maxAdultOccupantsCountException;
    public GuestUnitFeatures withMaxAdultOccupantsCountException(GuestUnitFeaturesMaxAdultOccupantsCountExceptionEnum maxAdultOccupantsCountException) {
        this.maxAdultOccupantsCountException = maxAdultOccupantsCountException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxChildOccupantsCount")
    public Integer maxChildOccupantsCount;
    public GuestUnitFeatures withMaxChildOccupantsCount(Integer maxChildOccupantsCount) {
        this.maxChildOccupantsCount = maxChildOccupantsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxChildOccupantsCountException")
    public GuestUnitFeaturesMaxChildOccupantsCountExceptionEnum maxChildOccupantsCountException;
    public GuestUnitFeatures withMaxChildOccupantsCountException(GuestUnitFeaturesMaxChildOccupantsCountExceptionEnum maxChildOccupantsCountException) {
        this.maxChildOccupantsCountException = maxChildOccupantsCountException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxOccupantsCount")
    public Integer maxOccupantsCount;
    public GuestUnitFeatures withMaxOccupantsCount(Integer maxOccupantsCount) {
        this.maxOccupantsCount = maxOccupantsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxOccupantsCountException")
    public GuestUnitFeaturesMaxOccupantsCountExceptionEnum maxOccupantsCountException;
    public GuestUnitFeatures withMaxOccupantsCountException(GuestUnitFeaturesMaxOccupantsCountExceptionEnum maxOccupantsCountException) {
        this.maxOccupantsCountException = maxOccupantsCountException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateHome")
    public Boolean privateHome;
    public GuestUnitFeatures withPrivateHome(Boolean privateHome) {
        this.privateHome = privateHome;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateHomeException")
    public GuestUnitFeaturesPrivateHomeExceptionEnum privateHomeException;
    public GuestUnitFeatures withPrivateHomeException(GuestUnitFeaturesPrivateHomeExceptionEnum privateHomeException) {
        this.privateHomeException = privateHomeException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suite")
    public Boolean suite;
    public GuestUnitFeatures withSuite(Boolean suite) {
        this.suite = suite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suiteException")
    public GuestUnitFeaturesSuiteExceptionEnum suiteException;
    public GuestUnitFeatures withSuiteException(GuestUnitFeaturesSuiteExceptionEnum suiteException) {
        this.suiteException = suiteException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tier")
    public GuestUnitFeaturesTierEnum tier;
    public GuestUnitFeatures withTier(GuestUnitFeaturesTierEnum tier) {
        this.tier = tier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tierException")
    public GuestUnitFeaturesTierExceptionEnum tierException;
    public GuestUnitFeatures withTierException(GuestUnitFeaturesTierExceptionEnum tierException) {
        this.tierException = tierException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalLivingAreas")
    public LivingArea totalLivingAreas;
    public GuestUnitFeatures withTotalLivingAreas(LivingArea totalLivingAreas) {
        this.totalLivingAreas = totalLivingAreas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("views")
    public ViewsFromUnit views;
    public GuestUnitFeatures withViews(ViewsFromUnit views) {
        this.views = views;
        return this;
    }
}