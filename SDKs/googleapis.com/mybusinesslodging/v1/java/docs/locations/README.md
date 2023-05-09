# locations

### Available Operations

* [mybusinesslodgingLocationsGetLodging](#mybusinesslodginglocationsgetlodging) - Returns the Lodging of a specific location.
* [mybusinesslodgingLocationsLodgingGetGoogleUpdated](#mybusinesslodginglocationslodginggetgoogleupdated) - Returns the Google updated Lodging of a specific location.
* [mybusinesslodgingLocationsUpdateLodging](#mybusinesslodginglocationsupdatelodging) - Updates the Lodging of a specific location.

## mybusinesslodgingLocationsGetLodging

Returns the Lodging of a specific location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinesslodgingLocationsGetLodgingRequest;
import org.openapis.openapi.models.operations.MybusinesslodgingLocationsGetLodgingResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinesslodgingLocationsGetLodgingRequest req = new MybusinesslodgingLocationsGetLodgingRequest("iure") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "debitis";
                alt = AltEnum.JSON;
                callback = "delectus";
                fields = "tempora";
                key = "suscipit";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "minus";
                readMask = "placeat";
                uploadType = "voluptatum";
                uploadProtocol = "iusto";
            }};            

            MybusinesslodgingLocationsGetLodgingResponse res = sdk.locations.mybusinesslodgingLocationsGetLodging(req);

            if (res.lodging != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinesslodgingLocationsLodgingGetGoogleUpdated

Returns the Google updated Lodging of a specific location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinesslodgingLocationsLodgingGetGoogleUpdatedRequest;
import org.openapis.openapi.models.operations.MybusinesslodgingLocationsLodgingGetGoogleUpdatedResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinesslodgingLocationsLodgingGetGoogleUpdatedRequest req = new MybusinesslodgingLocationsLodgingGetGoogleUpdatedRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "recusandae";
                alt = AltEnum.PROTO;
                callback = "ab";
                fields = "quis";
                key = "veritatis";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "perferendis";
                readMask = "ipsam";
                uploadType = "repellendus";
                uploadProtocol = "sapiente";
            }};            

            MybusinesslodgingLocationsLodgingGetGoogleUpdatedResponse res = sdk.locations.mybusinesslodgingLocationsLodgingGetGoogleUpdated(req);

            if (res.getGoogleUpdatedLodgingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinesslodgingLocationsUpdateLodging

Updates the Lodging of a specific location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinesslodgingLocationsUpdateLodgingRequest;
import org.openapis.openapi.models.operations.MybusinesslodgingLocationsUpdateLodgingResponse;
import org.openapis.openapi.models.shared.Accessibility;
import org.openapis.openapi.models.shared.AccessibilityMobilityAccessibleElevatorExceptionEnum;
import org.openapis.openapi.models.shared.AccessibilityMobilityAccessibleExceptionEnum;
import org.openapis.openapi.models.shared.AccessibilityMobilityAccessibleParkingExceptionEnum;
import org.openapis.openapi.models.shared.AccessibilityMobilityAccessiblePoolExceptionEnum;
import org.openapis.openapi.models.shared.Activities;
import org.openapis.openapi.models.shared.ActivitiesBeachAccessExceptionEnum;
import org.openapis.openapi.models.shared.ActivitiesBeachFrontExceptionEnum;
import org.openapis.openapi.models.shared.ActivitiesBicycleRentalExceptionEnum;
import org.openapis.openapi.models.shared.ActivitiesBoutiqueStoresExceptionEnum;
import org.openapis.openapi.models.shared.ActivitiesCasinoExceptionEnum;
import org.openapis.openapi.models.shared.ActivitiesFreeBicycleRentalExceptionEnum;
import org.openapis.openapi.models.shared.ActivitiesFreeWatercraftRentalExceptionEnum;
import org.openapis.openapi.models.shared.ActivitiesGameRoomExceptionEnum;
import org.openapis.openapi.models.shared.ActivitiesGolfExceptionEnum;
import org.openapis.openapi.models.shared.ActivitiesHorsebackRidingExceptionEnum;
import org.openapis.openapi.models.shared.ActivitiesNightclubExceptionEnum;
import org.openapis.openapi.models.shared.ActivitiesPrivateBeachExceptionEnum;
import org.openapis.openapi.models.shared.ActivitiesScubaExceptionEnum;
import org.openapis.openapi.models.shared.ActivitiesSnorkelingExceptionEnum;
import org.openapis.openapi.models.shared.ActivitiesTennisExceptionEnum;
import org.openapis.openapi.models.shared.ActivitiesWaterSkiingExceptionEnum;
import org.openapis.openapi.models.shared.ActivitiesWatercraftRentalExceptionEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Business;
import org.openapis.openapi.models.shared.BusinessBusinessCenterExceptionEnum;
import org.openapis.openapi.models.shared.BusinessMeetingRoomsCountExceptionEnum;
import org.openapis.openapi.models.shared.BusinessMeetingRoomsExceptionEnum;
import org.openapis.openapi.models.shared.Connectivity;
import org.openapis.openapi.models.shared.ConnectivityFreeWifiExceptionEnum;
import org.openapis.openapi.models.shared.ConnectivityPublicAreaWifiAvailableExceptionEnum;
import org.openapis.openapi.models.shared.ConnectivityPublicInternetTerminalExceptionEnum;
import org.openapis.openapi.models.shared.ConnectivityWifiAvailableExceptionEnum;
import org.openapis.openapi.models.shared.EcoCertification;
import org.openapis.openapi.models.shared.EcoCertificationAwardedExceptionEnum;
import org.openapis.openapi.models.shared.EcoCertificationEcoCertificateEnum;
import org.openapis.openapi.models.shared.EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum;
import org.openapis.openapi.models.shared.EnergyEfficiencyEnergyConservationProgramExceptionEnum;
import org.openapis.openapi.models.shared.EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum;
import org.openapis.openapi.models.shared.EnergyEfficiencyEnergyEfficientLightingExceptionEnum;
import org.openapis.openapi.models.shared.EnergyEfficiencyEnergySavingThermostatsExceptionEnum;
import org.openapis.openapi.models.shared.EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum;
import org.openapis.openapi.models.shared.EnergyEfficiencyInput;
import org.openapis.openapi.models.shared.EnhancedCleaning;
import org.openapis.openapi.models.shared.EnhancedCleaningCommercialGradeDisinfectantCleaningExceptionEnum;
import org.openapis.openapi.models.shared.EnhancedCleaningCommonAreasEnhancedCleaningExceptionEnum;
import org.openapis.openapi.models.shared.EnhancedCleaningEmployeesTrainedCleaningProceduresExceptionEnum;
import org.openapis.openapi.models.shared.EnhancedCleaningEmployeesTrainedThoroughHandWashingExceptionEnum;
import org.openapis.openapi.models.shared.EnhancedCleaningEmployeesWearProtectiveEquipmentExceptionEnum;
import org.openapis.openapi.models.shared.EnhancedCleaningGuestRoomsEnhancedCleaningExceptionEnum;
import org.openapis.openapi.models.shared.Families;
import org.openapis.openapi.models.shared.FamiliesBabysittingExceptionEnum;
import org.openapis.openapi.models.shared.FamiliesKidsActivitiesExceptionEnum;
import org.openapis.openapi.models.shared.FamiliesKidsClubExceptionEnum;
import org.openapis.openapi.models.shared.FamiliesKidsFriendlyExceptionEnum;
import org.openapis.openapi.models.shared.FoodAndDrink;
import org.openapis.openapi.models.shared.FoodAndDrinkBarExceptionEnum;
import org.openapis.openapi.models.shared.FoodAndDrinkBreakfastAvailableExceptionEnum;
import org.openapis.openapi.models.shared.FoodAndDrinkBreakfastBuffetExceptionEnum;
import org.openapis.openapi.models.shared.FoodAndDrinkBuffetExceptionEnum;
import org.openapis.openapi.models.shared.FoodAndDrinkDinnerBuffetExceptionEnum;
import org.openapis.openapi.models.shared.FoodAndDrinkFreeBreakfastExceptionEnum;
import org.openapis.openapi.models.shared.FoodAndDrinkRestaurantExceptionEnum;
import org.openapis.openapi.models.shared.FoodAndDrinkRestaurantsCountExceptionEnum;
import org.openapis.openapi.models.shared.FoodAndDrinkRoomServiceExceptionEnum;
import org.openapis.openapi.models.shared.FoodAndDrinkTableServiceExceptionEnum;
import org.openapis.openapi.models.shared.FoodAndDrinkTwentyFourHourRoomServiceExceptionEnum;
import org.openapis.openapi.models.shared.FoodAndDrinkVendingMachineExceptionEnum;
import org.openapis.openapi.models.shared.GuestUnitFeatures;
import org.openapis.openapi.models.shared.GuestUnitFeaturesBungalowOrVillaExceptionEnum;
import org.openapis.openapi.models.shared.GuestUnitFeaturesConnectingUnitAvailableExceptionEnum;
import org.openapis.openapi.models.shared.GuestUnitFeaturesExecutiveFloorExceptionEnum;
import org.openapis.openapi.models.shared.GuestUnitFeaturesMaxAdultOccupantsCountExceptionEnum;
import org.openapis.openapi.models.shared.GuestUnitFeaturesMaxChildOccupantsCountExceptionEnum;
import org.openapis.openapi.models.shared.GuestUnitFeaturesMaxOccupantsCountExceptionEnum;
import org.openapis.openapi.models.shared.GuestUnitFeaturesPrivateHomeExceptionEnum;
import org.openapis.openapi.models.shared.GuestUnitFeaturesSuiteExceptionEnum;
import org.openapis.openapi.models.shared.GuestUnitFeaturesTierEnum;
import org.openapis.openapi.models.shared.GuestUnitFeaturesTierExceptionEnum;
import org.openapis.openapi.models.shared.GuestUnitType;
import org.openapis.openapi.models.shared.HealthAndSafety;
import org.openapis.openapi.models.shared.Housekeeping;
import org.openapis.openapi.models.shared.HousekeepingDailyHousekeepingExceptionEnum;
import org.openapis.openapi.models.shared.HousekeepingHousekeepingAvailableExceptionEnum;
import org.openapis.openapi.models.shared.HousekeepingTurndownServiceExceptionEnum;
import org.openapis.openapi.models.shared.IncreasedFoodSafety;
import org.openapis.openapi.models.shared.IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnum;
import org.openapis.openapi.models.shared.IncreasedFoodSafetyDisposableFlatwareExceptionEnum;
import org.openapis.openapi.models.shared.IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnum;
import org.openapis.openapi.models.shared.IncreasedFoodSafetyIndividualPackagedMealsExceptionEnum;
import org.openapis.openapi.models.shared.IncreasedFoodSafetySingleUseFoodMenusExceptionEnum;
import org.openapis.openapi.models.shared.LanguageSpoken;
import org.openapis.openapi.models.shared.LanguageSpokenSpokenExceptionEnum;
import org.openapis.openapi.models.shared.LivingArea;
import org.openapis.openapi.models.shared.LivingAreaAccessibility;
import org.openapis.openapi.models.shared.LivingAreaAccessibilityAdaCompliantUnitExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaEating;
import org.openapis.openapi.models.shared.LivingAreaEatingCoffeeMakerExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaEatingCookwareExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaEatingDishwasherExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaEatingIndoorGrillExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaEatingKettleExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaEatingKitchenAvailableExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaEatingMicrowaveExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaEatingMinibarExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaEatingOutdoorGrillExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaEatingOvenExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaEatingRefrigeratorExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaEatingSinkExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaEatingSnackbarExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaEatingStoveExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaEatingTeaStationExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaEatingToasterExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaFeatures;
import org.openapis.openapi.models.shared.LivingAreaFeaturesAirConditioningExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaFeaturesBathtubExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaFeaturesBidetExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaFeaturesDryerExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaFeaturesElectronicRoomKeyExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaFeaturesFireplaceExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaFeaturesHairdryerExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaFeaturesHeatingExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaFeaturesInunitSafeExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaFeaturesInunitWifiAvailableExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaFeaturesIroningEquipmentExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaFeaturesPayPerViewMoviesExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaFeaturesPrivateBathroomExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaFeaturesShowerExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaFeaturesToiletExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaFeaturesTvCastingExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaFeaturesTvExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaFeaturesTvStreamingExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaFeaturesUniversalPowerAdaptersExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaFeaturesWasherExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaLayout;
import org.openapis.openapi.models.shared.LivingAreaLayoutBalconyExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaLayoutLivingAreaSqMetersExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaLayoutLoftExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaLayoutNonSmokingExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaLayoutPatioExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaLayoutStairsExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaSleeping;
import org.openapis.openapi.models.shared.LivingAreaSleepingBedsCountExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaSleepingBunkBedsCountExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaSleepingCribsCountExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaSleepingDoubleBedsCountExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaSleepingFeatherPillowsExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaSleepingHypoallergenicBeddingExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaSleepingKingBedsCountExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaSleepingMemoryFoamPillowsExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaSleepingOtherBedsCountExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaSleepingQueenBedsCountExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaSleepingRollAwayBedsCountExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaSleepingSingleOrTwinBedsCountExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaSleepingSofaBedsCountExceptionEnum;
import org.openapis.openapi.models.shared.LivingAreaSleepingSyntheticPillowsExceptionEnum;
import org.openapis.openapi.models.shared.LodgingInput;
import org.openapis.openapi.models.shared.LodgingMetadata;
import org.openapis.openapi.models.shared.MinimizedContact;
import org.openapis.openapi.models.shared.MinimizedContactContactlessCheckinCheckoutExceptionEnum;
import org.openapis.openapi.models.shared.MinimizedContactDigitalGuestRoomKeysExceptionEnum;
import org.openapis.openapi.models.shared.MinimizedContactHousekeepingScheduledRequestOnlyExceptionEnum;
import org.openapis.openapi.models.shared.MinimizedContactNoHighTouchItemsCommonAreasExceptionEnum;
import org.openapis.openapi.models.shared.MinimizedContactNoHighTouchItemsGuestRoomsExceptionEnum;
import org.openapis.openapi.models.shared.MinimizedContactPlasticKeycardsDisinfectedExceptionEnum;
import org.openapis.openapi.models.shared.MinimizedContactRoomBookingsBufferExceptionEnum;
import org.openapis.openapi.models.shared.Parking;
import org.openapis.openapi.models.shared.ParkingElectricCarChargingStationsExceptionEnum;
import org.openapis.openapi.models.shared.ParkingFreeParkingExceptionEnum;
import org.openapis.openapi.models.shared.ParkingFreeSelfParkingExceptionEnum;
import org.openapis.openapi.models.shared.ParkingFreeValetParkingExceptionEnum;
import org.openapis.openapi.models.shared.ParkingParkingAvailableExceptionEnum;
import org.openapis.openapi.models.shared.ParkingSelfParkingAvailableExceptionEnum;
import org.openapis.openapi.models.shared.ParkingValetParkingAvailableExceptionEnum;
import org.openapis.openapi.models.shared.PaymentOptions;
import org.openapis.openapi.models.shared.PaymentOptionsCashExceptionEnum;
import org.openapis.openapi.models.shared.PaymentOptionsChequeExceptionEnum;
import org.openapis.openapi.models.shared.PaymentOptionsCreditCardExceptionEnum;
import org.openapis.openapi.models.shared.PaymentOptionsDebitCardExceptionEnum;
import org.openapis.openapi.models.shared.PaymentOptionsMobileNfcExceptionEnum;
import org.openapis.openapi.models.shared.PersonalProtection;
import org.openapis.openapi.models.shared.PersonalProtectionCommonAreasOfferSanitizingItemsExceptionEnum;
import org.openapis.openapi.models.shared.PersonalProtectionFaceMaskRequiredExceptionEnum;
import org.openapis.openapi.models.shared.PersonalProtectionGuestRoomHygieneKitsAvailableExceptionEnum;
import org.openapis.openapi.models.shared.PersonalProtectionProtectiveEquipmentAvailableExceptionEnum;
import org.openapis.openapi.models.shared.Pets;
import org.openapis.openapi.models.shared.PetsCatsAllowedExceptionEnum;
import org.openapis.openapi.models.shared.PetsDogsAllowedExceptionEnum;
import org.openapis.openapi.models.shared.PetsPetsAllowedExceptionEnum;
import org.openapis.openapi.models.shared.PetsPetsAllowedFreeExceptionEnum;
import org.openapis.openapi.models.shared.PhysicalDistancing;
import org.openapis.openapi.models.shared.PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnum;
import org.openapis.openapi.models.shared.PhysicalDistancingPhysicalDistancingRequiredExceptionEnum;
import org.openapis.openapi.models.shared.PhysicalDistancingSafetyDividersExceptionEnum;
import org.openapis.openapi.models.shared.PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnum;
import org.openapis.openapi.models.shared.PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnum;
import org.openapis.openapi.models.shared.Policies;
import org.openapis.openapi.models.shared.PoliciesAllInclusiveAvailableExceptionEnum;
import org.openapis.openapi.models.shared.PoliciesAllInclusiveOnlyExceptionEnum;
import org.openapis.openapi.models.shared.PoliciesCheckinTimeExceptionEnum;
import org.openapis.openapi.models.shared.PoliciesCheckoutTimeExceptionEnum;
import org.openapis.openapi.models.shared.PoliciesKidsStayFreeExceptionEnum;
import org.openapis.openapi.models.shared.PoliciesMaxChildAgeExceptionEnum;
import org.openapis.openapi.models.shared.PoliciesMaxKidsStayFreeCountExceptionEnum;
import org.openapis.openapi.models.shared.PoliciesSmokeFreePropertyExceptionEnum;
import org.openapis.openapi.models.shared.Pools;
import org.openapis.openapi.models.shared.PoolsAdultPoolExceptionEnum;
import org.openapis.openapi.models.shared.PoolsHotTubExceptionEnum;
import org.openapis.openapi.models.shared.PoolsIndoorPoolExceptionEnum;
import org.openapis.openapi.models.shared.PoolsIndoorPoolsCountExceptionEnum;
import org.openapis.openapi.models.shared.PoolsLazyRiverExceptionEnum;
import org.openapis.openapi.models.shared.PoolsLifeguardExceptionEnum;
import org.openapis.openapi.models.shared.PoolsOutdoorPoolExceptionEnum;
import org.openapis.openapi.models.shared.PoolsOutdoorPoolsCountExceptionEnum;
import org.openapis.openapi.models.shared.PoolsPoolExceptionEnum;
import org.openapis.openapi.models.shared.PoolsPoolsCountExceptionEnum;
import org.openapis.openapi.models.shared.PoolsWadingPoolExceptionEnum;
import org.openapis.openapi.models.shared.PoolsWaterParkExceptionEnum;
import org.openapis.openapi.models.shared.PoolsWaterslideExceptionEnum;
import org.openapis.openapi.models.shared.PoolsWavePoolExceptionEnum;
import org.openapis.openapi.models.shared.Property;
import org.openapis.openapi.models.shared.PropertyBuiltYearExceptionEnum;
import org.openapis.openapi.models.shared.PropertyFloorsCountExceptionEnum;
import org.openapis.openapi.models.shared.PropertyLastRenovatedYearExceptionEnum;
import org.openapis.openapi.models.shared.PropertyRoomsCountExceptionEnum;
import org.openapis.openapi.models.shared.Services;
import org.openapis.openapi.models.shared.ServicesBaggageStorageExceptionEnum;
import org.openapis.openapi.models.shared.ServicesConciergeExceptionEnum;
import org.openapis.openapi.models.shared.ServicesConvenienceStoreExceptionEnum;
import org.openapis.openapi.models.shared.ServicesCurrencyExchangeExceptionEnum;
import org.openapis.openapi.models.shared.ServicesElevatorExceptionEnum;
import org.openapis.openapi.models.shared.ServicesFrontDeskExceptionEnum;
import org.openapis.openapi.models.shared.ServicesFullServiceLaundryExceptionEnum;
import org.openapis.openapi.models.shared.ServicesGiftShopExceptionEnum;
import org.openapis.openapi.models.shared.ServicesSelfServiceLaundryExceptionEnum;
import org.openapis.openapi.models.shared.ServicesSocialHourExceptionEnum;
import org.openapis.openapi.models.shared.ServicesTwentyFourHourFrontDeskExceptionEnum;
import org.openapis.openapi.models.shared.ServicesWakeUpCallsExceptionEnum;
import org.openapis.openapi.models.shared.SustainabilityCertifications;
import org.openapis.openapi.models.shared.SustainabilityCertificationsBreeamCertificationEnum;
import org.openapis.openapi.models.shared.SustainabilityCertificationsBreeamCertificationExceptionEnum;
import org.openapis.openapi.models.shared.SustainabilityCertificationsLeedCertificationEnum;
import org.openapis.openapi.models.shared.SustainabilityCertificationsLeedCertificationExceptionEnum;
import org.openapis.openapi.models.shared.SustainabilityInput;
import org.openapis.openapi.models.shared.SustainableSourcing;
import org.openapis.openapi.models.shared.SustainableSourcingEcoFriendlyToiletriesExceptionEnum;
import org.openapis.openapi.models.shared.SustainableSourcingLocallySourcedFoodAndBeveragesExceptionEnum;
import org.openapis.openapi.models.shared.SustainableSourcingOrganicCageFreeEggsExceptionEnum;
import org.openapis.openapi.models.shared.SustainableSourcingOrganicFoodAndBeveragesExceptionEnum;
import org.openapis.openapi.models.shared.SustainableSourcingResponsiblePurchasingPolicyExceptionEnum;
import org.openapis.openapi.models.shared.SustainableSourcingResponsiblySourcesSeafoodExceptionEnum;
import org.openapis.openapi.models.shared.SustainableSourcingVeganMealsExceptionEnum;
import org.openapis.openapi.models.shared.SustainableSourcingVegetarianMealsExceptionEnum;
import org.openapis.openapi.models.shared.TimeOfDay;
import org.openapis.openapi.models.shared.Transportation;
import org.openapis.openapi.models.shared.TransportationAirportShuttleExceptionEnum;
import org.openapis.openapi.models.shared.TransportationCarRentalOnPropertyExceptionEnum;
import org.openapis.openapi.models.shared.TransportationFreeAirportShuttleExceptionEnum;
import org.openapis.openapi.models.shared.TransportationFreePrivateCarServiceExceptionEnum;
import org.openapis.openapi.models.shared.TransportationLocalShuttleExceptionEnum;
import org.openapis.openapi.models.shared.TransportationPrivateCarServiceExceptionEnum;
import org.openapis.openapi.models.shared.TransportationTransferExceptionEnum;
import org.openapis.openapi.models.shared.ViewsFromUnit;
import org.openapis.openapi.models.shared.ViewsFromUnitBeachViewExceptionEnum;
import org.openapis.openapi.models.shared.ViewsFromUnitCityViewExceptionEnum;
import org.openapis.openapi.models.shared.ViewsFromUnitGardenViewExceptionEnum;
import org.openapis.openapi.models.shared.ViewsFromUnitLakeViewExceptionEnum;
import org.openapis.openapi.models.shared.ViewsFromUnitLandmarkViewExceptionEnum;
import org.openapis.openapi.models.shared.ViewsFromUnitOceanViewExceptionEnum;
import org.openapis.openapi.models.shared.ViewsFromUnitPoolViewExceptionEnum;
import org.openapis.openapi.models.shared.ViewsFromUnitValleyViewExceptionEnum;
import org.openapis.openapi.models.shared.WasteReduction;
import org.openapis.openapi.models.shared.WasteReductionCompostableFoodContainersAndCutleryExceptionEnum;
import org.openapis.openapi.models.shared.WasteReductionCompostsExcessFoodExceptionEnum;
import org.openapis.openapi.models.shared.WasteReductionDonatesExcessFoodExceptionEnum;
import org.openapis.openapi.models.shared.WasteReductionFoodWasteReductionProgramExceptionEnum;
import org.openapis.openapi.models.shared.WasteReductionNoSingleUsePlasticStrawsExceptionEnum;
import org.openapis.openapi.models.shared.WasteReductionNoSingleUsePlasticWaterBottlesExceptionEnum;
import org.openapis.openapi.models.shared.WasteReductionNoStyrofoamFoodContainersExceptionEnum;
import org.openapis.openapi.models.shared.WasteReductionRecyclingProgramExceptionEnum;
import org.openapis.openapi.models.shared.WasteReductionRefillableToiletryContainersExceptionEnum;
import org.openapis.openapi.models.shared.WasteReductionSafelyDisposesBatteriesExceptionEnum;
import org.openapis.openapi.models.shared.WasteReductionSafelyDisposesElectronicsExceptionEnum;
import org.openapis.openapi.models.shared.WasteReductionSafelyDisposesLightbulbsExceptionEnum;
import org.openapis.openapi.models.shared.WasteReductionSafelyHandlesHazardousSubstancesExceptionEnum;
import org.openapis.openapi.models.shared.WasteReductionSoapDonationProgramExceptionEnum;
import org.openapis.openapi.models.shared.WasteReductionToiletryDonationProgramExceptionEnum;
import org.openapis.openapi.models.shared.WasteReductionWaterBottleFillingStationsExceptionEnum;
import org.openapis.openapi.models.shared.WaterConservation;
import org.openapis.openapi.models.shared.WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnum;
import org.openapis.openapi.models.shared.WaterConservationLinenReuseProgramExceptionEnum;
import org.openapis.openapi.models.shared.WaterConservationTowelReuseProgramExceptionEnum;
import org.openapis.openapi.models.shared.WaterConservationWaterSavingShowersExceptionEnum;
import org.openapis.openapi.models.shared.WaterConservationWaterSavingSinksExceptionEnum;
import org.openapis.openapi.models.shared.WaterConservationWaterSavingToiletsExceptionEnum;
import org.openapis.openapi.models.shared.Wellness;
import org.openapis.openapi.models.shared.WellnessDoctorOnCallExceptionEnum;
import org.openapis.openapi.models.shared.WellnessEllipticalMachineExceptionEnum;
import org.openapis.openapi.models.shared.WellnessFitnessCenterExceptionEnum;
import org.openapis.openapi.models.shared.WellnessFreeFitnessCenterExceptionEnum;
import org.openapis.openapi.models.shared.WellnessFreeWeightsExceptionEnum;
import org.openapis.openapi.models.shared.WellnessMassageExceptionEnum;
import org.openapis.openapi.models.shared.WellnessSalonExceptionEnum;
import org.openapis.openapi.models.shared.WellnessSaunaExceptionEnum;
import org.openapis.openapi.models.shared.WellnessSpaExceptionEnum;
import org.openapis.openapi.models.shared.WellnessTreadmillExceptionEnum;
import org.openapis.openapi.models.shared.WellnessWeightMachineExceptionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinesslodgingLocationsUpdateLodgingRequest req = new MybusinesslodgingLocationsUpdateLodgingRequest("quo") {{
                dollarXgafv = XgafvEnum.ONE;
                lodgingInput = new LodgingInput() {{
                    accessibility = new Accessibility() {{
                        mobilityAccessible = false;
                        mobilityAccessibleElevator = false;
                        mobilityAccessibleElevatorException = AccessibilityMobilityAccessibleElevatorExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                        mobilityAccessibleException = AccessibilityMobilityAccessibleExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                        mobilityAccessibleParking = false;
                        mobilityAccessibleParkingException = AccessibilityMobilityAccessibleParkingExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                        mobilityAccessiblePool = false;
                        mobilityAccessiblePoolException = AccessibilityMobilityAccessiblePoolExceptionEnum.UNDER_CONSTRUCTION;
                    }};;
                    activities = new Activities() {{
                        beachAccess = false;
                        beachAccessException = ActivitiesBeachAccessExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                        beachFront = false;
                        beachFrontException = ActivitiesBeachFrontExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                        bicycleRental = false;
                        bicycleRentalException = ActivitiesBicycleRentalExceptionEnum.UNDER_CONSTRUCTION;
                        boutiqueStores = false;
                        boutiqueStoresException = ActivitiesBoutiqueStoresExceptionEnum.DEPENDENT_ON_SEASON;
                        casino = false;
                        casinoException = ActivitiesCasinoExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                        freeBicycleRental = false;
                        freeBicycleRentalException = ActivitiesFreeBicycleRentalExceptionEnum.DEPENDENT_ON_SEASON;
                        freeWatercraftRental = false;
                        freeWatercraftRentalException = ActivitiesFreeWatercraftRentalExceptionEnum.EXCEPTION_UNSPECIFIED;
                        gameRoom = false;
                        gameRoomException = ActivitiesGameRoomExceptionEnum.DEPENDENT_ON_SEASON;
                        golf = false;
                        golfException = ActivitiesGolfExceptionEnum.DEPENDENT_ON_SEASON;
                        horsebackRiding = false;
                        horsebackRidingException = ActivitiesHorsebackRidingExceptionEnum.DEPENDENT_ON_SEASON;
                        nightclub = false;
                        nightclubException = ActivitiesNightclubExceptionEnum.EXCEPTION_UNSPECIFIED;
                        privateBeach = false;
                        privateBeachException = ActivitiesPrivateBeachExceptionEnum.DEPENDENT_ON_SEASON;
                        scuba = false;
                        scubaException = ActivitiesScubaExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                        snorkeling = false;
                        snorkelingException = ActivitiesSnorkelingExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                        tennis = false;
                        tennisException = ActivitiesTennisExceptionEnum.DEPENDENT_ON_SEASON;
                        waterSkiing = false;
                        waterSkiingException = ActivitiesWaterSkiingExceptionEnum.EXCEPTION_UNSPECIFIED;
                        watercraftRental = false;
                        watercraftRentalException = ActivitiesWatercraftRentalExceptionEnum.UNDER_CONSTRUCTION;
                    }};;
                    allUnits = new GuestUnitFeatures() {{
                        bungalowOrVilla = false;
                        bungalowOrVillaException = GuestUnitFeaturesBungalowOrVillaExceptionEnum.UNDER_CONSTRUCTION;
                        connectingUnitAvailable = false;
                        connectingUnitAvailableException = GuestUnitFeaturesConnectingUnitAvailableExceptionEnum.UNDER_CONSTRUCTION;
                        executiveFloor = false;
                        executiveFloorException = GuestUnitFeaturesExecutiveFloorExceptionEnum.EXCEPTION_UNSPECIFIED;
                        maxAdultOccupantsCount = 774234;
                        maxAdultOccupantsCountException = GuestUnitFeaturesMaxAdultOccupantsCountExceptionEnum.DEPENDENT_ON_SEASON;
                        maxChildOccupantsCount = 456150;
                        maxChildOccupantsCountException = GuestUnitFeaturesMaxChildOccupantsCountExceptionEnum.EXCEPTION_UNSPECIFIED;
                        maxOccupantsCount = 568434;
                        maxOccupantsCountException = GuestUnitFeaturesMaxOccupantsCountExceptionEnum.EXCEPTION_UNSPECIFIED;
                        privateHome = false;
                        privateHomeException = GuestUnitFeaturesPrivateHomeExceptionEnum.EXCEPTION_UNSPECIFIED;
                        suite = false;
                        suiteException = GuestUnitFeaturesSuiteExceptionEnum.UNDER_CONSTRUCTION;
                        tier = GuestUnitFeaturesTierEnum.STANDARD_UNIT;
                        tierException = GuestUnitFeaturesTierExceptionEnum.EXCEPTION_UNSPECIFIED;
                        totalLivingAreas = new LivingArea() {{
                            accessibility = new LivingAreaAccessibility() {{
                                adaCompliantUnit = false;
                                adaCompliantUnitException = LivingAreaAccessibilityAdaCompliantUnitExceptionEnum.DEPENDENT_ON_SEASON;
                                hearingAccessibleDoorbell = false;
                                hearingAccessibleDoorbellException = LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum.EXCEPTION_UNSPECIFIED;
                                hearingAccessibleFireAlarm = false;
                                hearingAccessibleFireAlarmException = LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum.DEPENDENT_ON_SEASON;
                                hearingAccessibleUnit = false;
                                hearingAccessibleUnitException = LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum.UNDER_CONSTRUCTION;
                                mobilityAccessibleBathtub = false;
                                mobilityAccessibleBathtubException = LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                mobilityAccessibleShower = false;
                                mobilityAccessibleShowerException = LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                mobilityAccessibleToilet = false;
                                mobilityAccessibleToiletException = LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum.DEPENDENT_ON_SEASON;
                                mobilityAccessibleUnit = false;
                                mobilityAccessibleUnitException = LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum.UNDER_CONSTRUCTION;
                            }};;
                            eating = new LivingAreaEating() {{
                                coffeeMaker = false;
                                coffeeMakerException = LivingAreaEatingCoffeeMakerExceptionEnum.UNDER_CONSTRUCTION;
                                cookware = false;
                                cookwareException = LivingAreaEatingCookwareExceptionEnum.DEPENDENT_ON_SEASON;
                                dishwasher = false;
                                dishwasherException = LivingAreaEatingDishwasherExceptionEnum.UNDER_CONSTRUCTION;
                                indoorGrill = false;
                                indoorGrillException = LivingAreaEatingIndoorGrillExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                kettle = false;
                                kettleException = LivingAreaEatingKettleExceptionEnum.DEPENDENT_ON_SEASON;
                                kitchenAvailable = false;
                                kitchenAvailableException = LivingAreaEatingKitchenAvailableExceptionEnum.EXCEPTION_UNSPECIFIED;
                                microwave = false;
                                microwaveException = LivingAreaEatingMicrowaveExceptionEnum.EXCEPTION_UNSPECIFIED;
                                minibar = false;
                                minibarException = LivingAreaEatingMinibarExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                outdoorGrill = false;
                                outdoorGrillException = LivingAreaEatingOutdoorGrillExceptionEnum.DEPENDENT_ON_SEASON;
                                oven = false;
                                ovenException = LivingAreaEatingOvenExceptionEnum.DEPENDENT_ON_SEASON;
                                refrigerator = false;
                                refrigeratorException = LivingAreaEatingRefrigeratorExceptionEnum.DEPENDENT_ON_SEASON;
                                sink = false;
                                sinkException = LivingAreaEatingSinkExceptionEnum.EXCEPTION_UNSPECIFIED;
                                snackbar = false;
                                snackbarException = LivingAreaEatingSnackbarExceptionEnum.EXCEPTION_UNSPECIFIED;
                                stove = false;
                                stoveException = LivingAreaEatingStoveExceptionEnum.UNDER_CONSTRUCTION;
                                teaStation = false;
                                teaStationException = LivingAreaEatingTeaStationExceptionEnum.EXCEPTION_UNSPECIFIED;
                                toaster = false;
                                toasterException = LivingAreaEatingToasterExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            }};;
                            features = new LivingAreaFeatures() {{
                                airConditioning = false;
                                airConditioningException = LivingAreaFeaturesAirConditioningExceptionEnum.UNDER_CONSTRUCTION;
                                bathtub = false;
                                bathtubException = LivingAreaFeaturesBathtubExceptionEnum.DEPENDENT_ON_SEASON;
                                bidet = false;
                                bidetException = LivingAreaFeaturesBidetExceptionEnum.UNDER_CONSTRUCTION;
                                dryer = false;
                                dryerException = LivingAreaFeaturesDryerExceptionEnum.UNDER_CONSTRUCTION;
                                electronicRoomKey = false;
                                electronicRoomKeyException = LivingAreaFeaturesElectronicRoomKeyExceptionEnum.DEPENDENT_ON_SEASON;
                                fireplace = false;
                                fireplaceException = LivingAreaFeaturesFireplaceExceptionEnum.EXCEPTION_UNSPECIFIED;
                                hairdryer = false;
                                hairdryerException = LivingAreaFeaturesHairdryerExceptionEnum.UNDER_CONSTRUCTION;
                                heating = false;
                                heatingException = LivingAreaFeaturesHeatingExceptionEnum.DEPENDENT_ON_SEASON;
                                inunitSafe = false;
                                inunitSafeException = LivingAreaFeaturesInunitSafeExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                inunitWifiAvailable = false;
                                inunitWifiAvailableException = LivingAreaFeaturesInunitWifiAvailableExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                ironingEquipment = false;
                                ironingEquipmentException = LivingAreaFeaturesIroningEquipmentExceptionEnum.EXCEPTION_UNSPECIFIED;
                                payPerViewMovies = false;
                                payPerViewMoviesException = LivingAreaFeaturesPayPerViewMoviesExceptionEnum.DEPENDENT_ON_SEASON;
                                privateBathroom = false;
                                privateBathroomException = LivingAreaFeaturesPrivateBathroomExceptionEnum.EXCEPTION_UNSPECIFIED;
                                shower = false;
                                showerException = LivingAreaFeaturesShowerExceptionEnum.DEPENDENT_ON_SEASON;
                                toilet = false;
                                toiletException = LivingAreaFeaturesToiletExceptionEnum.EXCEPTION_UNSPECIFIED;
                                tv = false;
                                tvCasting = false;
                                tvCastingException = LivingAreaFeaturesTvCastingExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                tvException = LivingAreaFeaturesTvExceptionEnum.DEPENDENT_ON_SEASON;
                                tvStreaming = false;
                                tvStreamingException = LivingAreaFeaturesTvStreamingExceptionEnum.DEPENDENT_ON_SEASON;
                                universalPowerAdapters = false;
                                universalPowerAdaptersException = LivingAreaFeaturesUniversalPowerAdaptersExceptionEnum.UNDER_CONSTRUCTION;
                                washer = false;
                                washerException = LivingAreaFeaturesWasherExceptionEnum.UNDER_CONSTRUCTION;
                            }};;
                            layout = new LivingAreaLayout() {{
                                balcony = false;
                                balconyException = LivingAreaLayoutBalconyExceptionEnum.UNDER_CONSTRUCTION;
                                livingAreaSqMeters = 4746.97;
                                livingAreaSqMetersException = LivingAreaLayoutLivingAreaSqMetersExceptionEnum.EXCEPTION_UNSPECIFIED;
                                loft = false;
                                loftException = LivingAreaLayoutLoftExceptionEnum.DEPENDENT_ON_SEASON;
                                nonSmoking = false;
                                nonSmokingException = LivingAreaLayoutNonSmokingExceptionEnum.EXCEPTION_UNSPECIFIED;
                                patio = false;
                                patioException = LivingAreaLayoutPatioExceptionEnum.UNDER_CONSTRUCTION;
                                stairs = false;
                                stairsException = LivingAreaLayoutStairsExceptionEnum.EXCEPTION_UNSPECIFIED;
                            }};;
                            sleeping = new LivingAreaSleeping() {{
                                bedsCount = 674752;
                                bedsCountException = LivingAreaSleepingBedsCountExceptionEnum.DEPENDENT_ON_SEASON;
                                bunkBedsCount = 317202;
                                bunkBedsCountException = LivingAreaSleepingBunkBedsCountExceptionEnum.EXCEPTION_UNSPECIFIED;
                                cribsCount = 778346;
                                cribsCountException = LivingAreaSleepingCribsCountExceptionEnum.EXCEPTION_UNSPECIFIED;
                                doubleBedsCount = 949572;
                                doubleBedsCountException = LivingAreaSleepingDoubleBedsCountExceptionEnum.UNDER_CONSTRUCTION;
                                featherPillows = false;
                                featherPillowsException = LivingAreaSleepingFeatherPillowsExceptionEnum.DEPENDENT_ON_SEASON;
                                hypoallergenicBedding = false;
                                hypoallergenicBeddingException = LivingAreaSleepingHypoallergenicBeddingExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                kingBedsCount = 13571;
                                kingBedsCountException = LivingAreaSleepingKingBedsCountExceptionEnum.EXCEPTION_UNSPECIFIED;
                                memoryFoamPillows = false;
                                memoryFoamPillowsException = LivingAreaSleepingMemoryFoamPillowsExceptionEnum.DEPENDENT_ON_SEASON;
                                otherBedsCount = 837945;
                                otherBedsCountException = LivingAreaSleepingOtherBedsCountExceptionEnum.DEPENDENT_ON_SEASON;
                                queenBedsCount = 96098;
                                queenBedsCountException = LivingAreaSleepingQueenBedsCountExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                rollAwayBedsCount = 976460;
                                rollAwayBedsCountException = LivingAreaSleepingRollAwayBedsCountExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                singleOrTwinBedsCount = 468651;
                                singleOrTwinBedsCountException = LivingAreaSleepingSingleOrTwinBedsCountExceptionEnum.DEPENDENT_ON_SEASON;
                                sofaBedsCount = 976762;
                                sofaBedsCountException = LivingAreaSleepingSofaBedsCountExceptionEnum.EXCEPTION_UNSPECIFIED;
                                syntheticPillows = false;
                                syntheticPillowsException = LivingAreaSleepingSyntheticPillowsExceptionEnum.DEPENDENT_ON_SEASON;
                            }};;
                        }};;
                        views = new ViewsFromUnit() {{
                            beachView = false;
                            beachViewException = ViewsFromUnitBeachViewExceptionEnum.UNDER_CONSTRUCTION;
                            cityView = false;
                            cityViewException = ViewsFromUnitCityViewExceptionEnum.DEPENDENT_ON_SEASON;
                            gardenView = false;
                            gardenViewException = ViewsFromUnitGardenViewExceptionEnum.EXCEPTION_UNSPECIFIED;
                            lakeView = false;
                            lakeViewException = ViewsFromUnitLakeViewExceptionEnum.EXCEPTION_UNSPECIFIED;
                            landmarkView = false;
                            landmarkViewException = ViewsFromUnitLandmarkViewExceptionEnum.UNDER_CONSTRUCTION;
                            oceanView = false;
                            oceanViewException = ViewsFromUnitOceanViewExceptionEnum.UNDER_CONSTRUCTION;
                            poolView = false;
                            poolViewException = ViewsFromUnitPoolViewExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            valleyView = false;
                            valleyViewException = ViewsFromUnitValleyViewExceptionEnum.EXCEPTION_UNSPECIFIED;
                        }};;
                    }};;
                    business = new Business() {{
                        businessCenter = false;
                        businessCenterException = BusinessBusinessCenterExceptionEnum.UNDER_CONSTRUCTION;
                        meetingRooms = false;
                        meetingRoomsCount = 296140;
                        meetingRoomsCountException = BusinessMeetingRoomsCountExceptionEnum.UNDER_CONSTRUCTION;
                        meetingRoomsException = BusinessMeetingRoomsExceptionEnum.EXCEPTION_UNSPECIFIED;
                    }};;
                    commonLivingArea = new LivingArea() {{
                        accessibility = new LivingAreaAccessibility() {{
                            adaCompliantUnit = false;
                            adaCompliantUnitException = LivingAreaAccessibilityAdaCompliantUnitExceptionEnum.DEPENDENT_ON_SEASON;
                            hearingAccessibleDoorbell = false;
                            hearingAccessibleDoorbellException = LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum.UNDER_CONSTRUCTION;
                            hearingAccessibleFireAlarm = false;
                            hearingAccessibleFireAlarmException = LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            hearingAccessibleUnit = false;
                            hearingAccessibleUnitException = LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum.UNDER_CONSTRUCTION;
                            mobilityAccessibleBathtub = false;
                            mobilityAccessibleBathtubException = LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            mobilityAccessibleShower = false;
                            mobilityAccessibleShowerException = LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum.EXCEPTION_UNSPECIFIED;
                            mobilityAccessibleToilet = false;
                            mobilityAccessibleToiletException = LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum.EXCEPTION_UNSPECIFIED;
                            mobilityAccessibleUnit = false;
                            mobilityAccessibleUnitException = LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum.DEPENDENT_ON_SEASON;
                        }};;
                        eating = new LivingAreaEating() {{
                            coffeeMaker = false;
                            coffeeMakerException = LivingAreaEatingCoffeeMakerExceptionEnum.DEPENDENT_ON_SEASON;
                            cookware = false;
                            cookwareException = LivingAreaEatingCookwareExceptionEnum.DEPENDENT_ON_SEASON;
                            dishwasher = false;
                            dishwasherException = LivingAreaEatingDishwasherExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            indoorGrill = false;
                            indoorGrillException = LivingAreaEatingIndoorGrillExceptionEnum.UNDER_CONSTRUCTION;
                            kettle = false;
                            kettleException = LivingAreaEatingKettleExceptionEnum.DEPENDENT_ON_SEASON;
                            kitchenAvailable = false;
                            kitchenAvailableException = LivingAreaEatingKitchenAvailableExceptionEnum.DEPENDENT_ON_SEASON;
                            microwave = false;
                            microwaveException = LivingAreaEatingMicrowaveExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            minibar = false;
                            minibarException = LivingAreaEatingMinibarExceptionEnum.EXCEPTION_UNSPECIFIED;
                            outdoorGrill = false;
                            outdoorGrillException = LivingAreaEatingOutdoorGrillExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            oven = false;
                            ovenException = LivingAreaEatingOvenExceptionEnum.DEPENDENT_ON_SEASON;
                            refrigerator = false;
                            refrigeratorException = LivingAreaEatingRefrigeratorExceptionEnum.EXCEPTION_UNSPECIFIED;
                            sink = false;
                            sinkException = LivingAreaEatingSinkExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            snackbar = false;
                            snackbarException = LivingAreaEatingSnackbarExceptionEnum.UNDER_CONSTRUCTION;
                            stove = false;
                            stoveException = LivingAreaEatingStoveExceptionEnum.UNDER_CONSTRUCTION;
                            teaStation = false;
                            teaStationException = LivingAreaEatingTeaStationExceptionEnum.EXCEPTION_UNSPECIFIED;
                            toaster = false;
                            toasterException = LivingAreaEatingToasterExceptionEnum.DEPENDENT_ON_SEASON;
                        }};;
                        features = new LivingAreaFeatures() {{
                            airConditioning = false;
                            airConditioningException = LivingAreaFeaturesAirConditioningExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            bathtub = false;
                            bathtubException = LivingAreaFeaturesBathtubExceptionEnum.EXCEPTION_UNSPECIFIED;
                            bidet = false;
                            bidetException = LivingAreaFeaturesBidetExceptionEnum.DEPENDENT_ON_SEASON;
                            dryer = false;
                            dryerException = LivingAreaFeaturesDryerExceptionEnum.DEPENDENT_ON_SEASON;
                            electronicRoomKey = false;
                            electronicRoomKeyException = LivingAreaFeaturesElectronicRoomKeyExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            fireplace = false;
                            fireplaceException = LivingAreaFeaturesFireplaceExceptionEnum.UNDER_CONSTRUCTION;
                            hairdryer = false;
                            hairdryerException = LivingAreaFeaturesHairdryerExceptionEnum.UNDER_CONSTRUCTION;
                            heating = false;
                            heatingException = LivingAreaFeaturesHeatingExceptionEnum.EXCEPTION_UNSPECIFIED;
                            inunitSafe = false;
                            inunitSafeException = LivingAreaFeaturesInunitSafeExceptionEnum.UNDER_CONSTRUCTION;
                            inunitWifiAvailable = false;
                            inunitWifiAvailableException = LivingAreaFeaturesInunitWifiAvailableExceptionEnum.DEPENDENT_ON_SEASON;
                            ironingEquipment = false;
                            ironingEquipmentException = LivingAreaFeaturesIroningEquipmentExceptionEnum.DEPENDENT_ON_SEASON;
                            payPerViewMovies = false;
                            payPerViewMoviesException = LivingAreaFeaturesPayPerViewMoviesExceptionEnum.EXCEPTION_UNSPECIFIED;
                            privateBathroom = false;
                            privateBathroomException = LivingAreaFeaturesPrivateBathroomExceptionEnum.EXCEPTION_UNSPECIFIED;
                            shower = false;
                            showerException = LivingAreaFeaturesShowerExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            toilet = false;
                            toiletException = LivingAreaFeaturesToiletExceptionEnum.UNDER_CONSTRUCTION;
                            tv = false;
                            tvCasting = false;
                            tvCastingException = LivingAreaFeaturesTvCastingExceptionEnum.EXCEPTION_UNSPECIFIED;
                            tvException = LivingAreaFeaturesTvExceptionEnum.EXCEPTION_UNSPECIFIED;
                            tvStreaming = false;
                            tvStreamingException = LivingAreaFeaturesTvStreamingExceptionEnum.DEPENDENT_ON_SEASON;
                            universalPowerAdapters = false;
                            universalPowerAdaptersException = LivingAreaFeaturesUniversalPowerAdaptersExceptionEnum.DEPENDENT_ON_SEASON;
                            washer = false;
                            washerException = LivingAreaFeaturesWasherExceptionEnum.UNDER_CONSTRUCTION;
                        }};;
                        layout = new LivingAreaLayout() {{
                            balcony = false;
                            balconyException = LivingAreaLayoutBalconyExceptionEnum.DEPENDENT_ON_SEASON;
                            livingAreaSqMeters = 7351.94;
                            livingAreaSqMetersException = LivingAreaLayoutLivingAreaSqMetersExceptionEnum.UNDER_CONSTRUCTION;
                            loft = false;
                            loftException = LivingAreaLayoutLoftExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            nonSmoking = false;
                            nonSmokingException = LivingAreaLayoutNonSmokingExceptionEnum.UNDER_CONSTRUCTION;
                            patio = false;
                            patioException = LivingAreaLayoutPatioExceptionEnum.EXCEPTION_UNSPECIFIED;
                            stairs = false;
                            stairsException = LivingAreaLayoutStairsExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                        }};;
                        sleeping = new LivingAreaSleeping() {{
                            bedsCount = 576157;
                            bedsCountException = LivingAreaSleepingBedsCountExceptionEnum.UNDER_CONSTRUCTION;
                            bunkBedsCount = 592042;
                            bunkBedsCountException = LivingAreaSleepingBunkBedsCountExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            cribsCount = 572252;
                            cribsCountException = LivingAreaSleepingCribsCountExceptionEnum.DEPENDENT_ON_SEASON;
                            doubleBedsCount = 223081;
                            doubleBedsCountException = LivingAreaSleepingDoubleBedsCountExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            featherPillows = false;
                            featherPillowsException = LivingAreaSleepingFeatherPillowsExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            hypoallergenicBedding = false;
                            hypoallergenicBeddingException = LivingAreaSleepingHypoallergenicBeddingExceptionEnum.DEPENDENT_ON_SEASON;
                            kingBedsCount = 447125;
                            kingBedsCountException = LivingAreaSleepingKingBedsCountExceptionEnum.UNDER_CONSTRUCTION;
                            memoryFoamPillows = false;
                            memoryFoamPillowsException = LivingAreaSleepingMemoryFoamPillowsExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            otherBedsCount = 978571;
                            otherBedsCountException = LivingAreaSleepingOtherBedsCountExceptionEnum.DEPENDENT_ON_SEASON;
                            queenBedsCount = 116202;
                            queenBedsCountException = LivingAreaSleepingQueenBedsCountExceptionEnum.UNDER_CONSTRUCTION;
                            rollAwayBedsCount = 767024;
                            rollAwayBedsCountException = LivingAreaSleepingRollAwayBedsCountExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            singleOrTwinBedsCount = 411820;
                            singleOrTwinBedsCountException = LivingAreaSleepingSingleOrTwinBedsCountExceptionEnum.UNDER_CONSTRUCTION;
                            sofaBedsCount = 675439;
                            sofaBedsCountException = LivingAreaSleepingSofaBedsCountExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            syntheticPillows = false;
                            syntheticPillowsException = LivingAreaSleepingSyntheticPillowsExceptionEnum.EXCEPTION_UNSPECIFIED;
                        }};;
                    }};;
                    connectivity = new Connectivity() {{
                        freeWifi = false;
                        freeWifiException = ConnectivityFreeWifiExceptionEnum.DEPENDENT_ON_SEASON;
                        publicAreaWifiAvailable = false;
                        publicAreaWifiAvailableException = ConnectivityPublicAreaWifiAvailableExceptionEnum.UNDER_CONSTRUCTION;
                        publicInternetTerminal = false;
                        publicInternetTerminalException = ConnectivityPublicInternetTerminalExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                        wifiAvailable = false;
                        wifiAvailableException = ConnectivityWifiAvailableExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                    }};;
                    families = new Families() {{
                        babysitting = false;
                        babysittingException = FamiliesBabysittingExceptionEnum.DEPENDENT_ON_SEASON;
                        kidsActivities = false;
                        kidsActivitiesException = FamiliesKidsActivitiesExceptionEnum.DEPENDENT_ON_SEASON;
                        kidsClub = false;
                        kidsClubException = FamiliesKidsClubExceptionEnum.DEPENDENT_ON_SEASON;
                        kidsFriendly = false;
                        kidsFriendlyException = FamiliesKidsFriendlyExceptionEnum.DEPENDENT_ON_SEASON;
                    }};;
                    foodAndDrink = new FoodAndDrink() {{
                        bar = false;
                        barException = FoodAndDrinkBarExceptionEnum.DEPENDENT_ON_SEASON;
                        breakfastAvailable = false;
                        breakfastAvailableException = FoodAndDrinkBreakfastAvailableExceptionEnum.DEPENDENT_ON_SEASON;
                        breakfastBuffet = false;
                        breakfastBuffetException = FoodAndDrinkBreakfastBuffetExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                        buffet = false;
                        buffetException = FoodAndDrinkBuffetExceptionEnum.EXCEPTION_UNSPECIFIED;
                        dinnerBuffet = false;
                        dinnerBuffetException = FoodAndDrinkDinnerBuffetExceptionEnum.DEPENDENT_ON_SEASON;
                        freeBreakfast = false;
                        freeBreakfastException = FoodAndDrinkFreeBreakfastExceptionEnum.UNDER_CONSTRUCTION;
                        restaurant = false;
                        restaurantException = FoodAndDrinkRestaurantExceptionEnum.UNDER_CONSTRUCTION;
                        restaurantsCount = 618809;
                        restaurantsCountException = FoodAndDrinkRestaurantsCountExceptionEnum.DEPENDENT_ON_SEASON;
                        roomService = false;
                        roomServiceException = FoodAndDrinkRoomServiceExceptionEnum.UNDER_CONSTRUCTION;
                        tableService = false;
                        tableServiceException = FoodAndDrinkTableServiceExceptionEnum.EXCEPTION_UNSPECIFIED;
                        twentyFourHourRoomService = false;
                        twentyFourHourRoomServiceException = FoodAndDrinkTwentyFourHourRoomServiceExceptionEnum.UNDER_CONSTRUCTION;
                        vendingMachine = false;
                        vendingMachineException = FoodAndDrinkVendingMachineExceptionEnum.UNDER_CONSTRUCTION;
                    }};;
                    guestUnits = new org.openapis.openapi.models.shared.GuestUnitType[]{{
                        add(new GuestUnitType() {{
                            codes = new String[]{{
                                add("labore"),
                                add("labore"),
                                add("suscipit"),
                            }};
                            features = new GuestUnitFeatures() {{
                                bungalowOrVilla = false;
                                bungalowOrVillaException = GuestUnitFeaturesBungalowOrVillaExceptionEnum.DEPENDENT_ON_SEASON;
                                connectingUnitAvailable = false;
                                connectingUnitAvailableException = GuestUnitFeaturesConnectingUnitAvailableExceptionEnum.DEPENDENT_ON_SEASON;
                                executiveFloor = false;
                                executiveFloorException = GuestUnitFeaturesExecutiveFloorExceptionEnum.UNDER_CONSTRUCTION;
                                maxAdultOccupantsCount = 878453;
                                maxAdultOccupantsCountException = GuestUnitFeaturesMaxAdultOccupantsCountExceptionEnum.EXCEPTION_UNSPECIFIED;
                                maxChildOccupantsCount = 102863;
                                maxChildOccupantsCountException = GuestUnitFeaturesMaxChildOccupantsCountExceptionEnum.UNDER_CONSTRUCTION;
                                maxOccupantsCount = 92373;
                                maxOccupantsCountException = GuestUnitFeaturesMaxOccupantsCountExceptionEnum.DEPENDENT_ON_SEASON;
                                privateHome = false;
                                privateHomeException = GuestUnitFeaturesPrivateHomeExceptionEnum.UNDER_CONSTRUCTION;
                                suite = false;
                                suiteException = GuestUnitFeaturesSuiteExceptionEnum.DEPENDENT_ON_SEASON;
                                tier = GuestUnitFeaturesTierEnum.STANDARD_UNIT;
                                tierException = GuestUnitFeaturesTierExceptionEnum.DEPENDENT_ON_SEASON;
                                totalLivingAreas = new LivingArea() {{
                                    accessibility = new LivingAreaAccessibility() {{
                                        adaCompliantUnit = false;
                                        adaCompliantUnitException = LivingAreaAccessibilityAdaCompliantUnitExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        hearingAccessibleDoorbell = false;
                                        hearingAccessibleDoorbellException = LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum.DEPENDENT_ON_SEASON;
                                        hearingAccessibleFireAlarm = false;
                                        hearingAccessibleFireAlarmException = LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        hearingAccessibleUnit = false;
                                        hearingAccessibleUnitException = LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum.DEPENDENT_ON_SEASON;
                                        mobilityAccessibleBathtub = false;
                                        mobilityAccessibleBathtubException = LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum.UNDER_CONSTRUCTION;
                                        mobilityAccessibleShower = false;
                                        mobilityAccessibleShowerException = LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum.UNDER_CONSTRUCTION;
                                        mobilityAccessibleToilet = false;
                                        mobilityAccessibleToiletException = LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        mobilityAccessibleUnit = false;
                                        mobilityAccessibleUnitException = LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                    }};
                                    eating = new LivingAreaEating() {{
                                        coffeeMaker = false;
                                        coffeeMakerException = LivingAreaEatingCoffeeMakerExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        cookware = false;
                                        cookwareException = LivingAreaEatingCookwareExceptionEnum.UNDER_CONSTRUCTION;
                                        dishwasher = false;
                                        dishwasherException = LivingAreaEatingDishwasherExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        indoorGrill = false;
                                        indoorGrillException = LivingAreaEatingIndoorGrillExceptionEnum.UNDER_CONSTRUCTION;
                                        kettle = false;
                                        kettleException = LivingAreaEatingKettleExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        kitchenAvailable = false;
                                        kitchenAvailableException = LivingAreaEatingKitchenAvailableExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        microwave = false;
                                        microwaveException = LivingAreaEatingMicrowaveExceptionEnum.UNDER_CONSTRUCTION;
                                        minibar = false;
                                        minibarException = LivingAreaEatingMinibarExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        outdoorGrill = false;
                                        outdoorGrillException = LivingAreaEatingOutdoorGrillExceptionEnum.DEPENDENT_ON_SEASON;
                                        oven = false;
                                        ovenException = LivingAreaEatingOvenExceptionEnum.DEPENDENT_ON_SEASON;
                                        refrigerator = false;
                                        refrigeratorException = LivingAreaEatingRefrigeratorExceptionEnum.UNDER_CONSTRUCTION;
                                        sink = false;
                                        sinkException = LivingAreaEatingSinkExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        snackbar = false;
                                        snackbarException = LivingAreaEatingSnackbarExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        stove = false;
                                        stoveException = LivingAreaEatingStoveExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        teaStation = false;
                                        teaStationException = LivingAreaEatingTeaStationExceptionEnum.UNDER_CONSTRUCTION;
                                        toaster = false;
                                        toasterException = LivingAreaEatingToasterExceptionEnum.DEPENDENT_ON_SEASON;
                                    }};
                                    features = new LivingAreaFeatures() {{
                                        airConditioning = false;
                                        airConditioningException = LivingAreaFeaturesAirConditioningExceptionEnum.UNDER_CONSTRUCTION;
                                        bathtub = false;
                                        bathtubException = LivingAreaFeaturesBathtubExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        bidet = false;
                                        bidetException = LivingAreaFeaturesBidetExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        dryer = false;
                                        dryerException = LivingAreaFeaturesDryerExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        electronicRoomKey = false;
                                        electronicRoomKeyException = LivingAreaFeaturesElectronicRoomKeyExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        fireplace = false;
                                        fireplaceException = LivingAreaFeaturesFireplaceExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        hairdryer = false;
                                        hairdryerException = LivingAreaFeaturesHairdryerExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        heating = false;
                                        heatingException = LivingAreaFeaturesHeatingExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        inunitSafe = false;
                                        inunitSafeException = LivingAreaFeaturesInunitSafeExceptionEnum.DEPENDENT_ON_SEASON;
                                        inunitWifiAvailable = false;
                                        inunitWifiAvailableException = LivingAreaFeaturesInunitWifiAvailableExceptionEnum.DEPENDENT_ON_SEASON;
                                        ironingEquipment = false;
                                        ironingEquipmentException = LivingAreaFeaturesIroningEquipmentExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        payPerViewMovies = false;
                                        payPerViewMoviesException = LivingAreaFeaturesPayPerViewMoviesExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        privateBathroom = false;
                                        privateBathroomException = LivingAreaFeaturesPrivateBathroomExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        shower = false;
                                        showerException = LivingAreaFeaturesShowerExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        toilet = false;
                                        toiletException = LivingAreaFeaturesToiletExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        tv = false;
                                        tvCasting = false;
                                        tvCastingException = LivingAreaFeaturesTvCastingExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        tvException = LivingAreaFeaturesTvExceptionEnum.UNDER_CONSTRUCTION;
                                        tvStreaming = false;
                                        tvStreamingException = LivingAreaFeaturesTvStreamingExceptionEnum.DEPENDENT_ON_SEASON;
                                        universalPowerAdapters = false;
                                        universalPowerAdaptersException = LivingAreaFeaturesUniversalPowerAdaptersExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        washer = false;
                                        washerException = LivingAreaFeaturesWasherExceptionEnum.UNDER_CONSTRUCTION;
                                    }};
                                    layout = new LivingAreaLayout() {{
                                        balcony = false;
                                        balconyException = LivingAreaLayoutBalconyExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        livingAreaSqMeters = 691.67;
                                        livingAreaSqMetersException = LivingAreaLayoutLivingAreaSqMetersExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        loft = false;
                                        loftException = LivingAreaLayoutLoftExceptionEnum.DEPENDENT_ON_SEASON;
                                        nonSmoking = false;
                                        nonSmokingException = LivingAreaLayoutNonSmokingExceptionEnum.UNDER_CONSTRUCTION;
                                        patio = false;
                                        patioException = LivingAreaLayoutPatioExceptionEnum.UNDER_CONSTRUCTION;
                                        stairs = false;
                                        stairsException = LivingAreaLayoutStairsExceptionEnum.UNDER_CONSTRUCTION;
                                    }};
                                    sleeping = new LivingAreaSleeping() {{
                                        bedsCount = 722056;
                                        bedsCountException = LivingAreaSleepingBedsCountExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        bunkBedsCount = 866383;
                                        bunkBedsCountException = LivingAreaSleepingBunkBedsCountExceptionEnum.UNDER_CONSTRUCTION;
                                        cribsCount = 975522;
                                        cribsCountException = LivingAreaSleepingCribsCountExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        doubleBedsCount = 855804;
                                        doubleBedsCountException = LivingAreaSleepingDoubleBedsCountExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        featherPillows = false;
                                        featherPillowsException = LivingAreaSleepingFeatherPillowsExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        hypoallergenicBedding = false;
                                        hypoallergenicBeddingException = LivingAreaSleepingHypoallergenicBeddingExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        kingBedsCount = 359978;
                                        kingBedsCountException = LivingAreaSleepingKingBedsCountExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        memoryFoamPillows = false;
                                        memoryFoamPillowsException = LivingAreaSleepingMemoryFoamPillowsExceptionEnum.DEPENDENT_ON_SEASON;
                                        otherBedsCount = 749999;
                                        otherBedsCountException = LivingAreaSleepingOtherBedsCountExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        queenBedsCount = 339404;
                                        queenBedsCountException = LivingAreaSleepingQueenBedsCountExceptionEnum.DEPENDENT_ON_SEASON;
                                        rollAwayBedsCount = 489549;
                                        rollAwayBedsCountException = LivingAreaSleepingRollAwayBedsCountExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        singleOrTwinBedsCount = 338985;
                                        singleOrTwinBedsCountException = LivingAreaSleepingSingleOrTwinBedsCountExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        sofaBedsCount = 179490;
                                        sofaBedsCountException = LivingAreaSleepingSofaBedsCountExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        syntheticPillows = false;
                                        syntheticPillowsException = LivingAreaSleepingSyntheticPillowsExceptionEnum.EXCEPTION_UNSPECIFIED;
                                    }};
                                }};
                                views = new ViewsFromUnit() {{
                                    beachView = false;
                                    beachViewException = ViewsFromUnitBeachViewExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                    cityView = false;
                                    cityViewException = ViewsFromUnitCityViewExceptionEnum.UNDER_CONSTRUCTION;
                                    gardenView = false;
                                    gardenViewException = ViewsFromUnitGardenViewExceptionEnum.EXCEPTION_UNSPECIFIED;
                                    lakeView = false;
                                    lakeViewException = ViewsFromUnitLakeViewExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                    landmarkView = false;
                                    landmarkViewException = ViewsFromUnitLandmarkViewExceptionEnum.UNDER_CONSTRUCTION;
                                    oceanView = false;
                                    oceanViewException = ViewsFromUnitOceanViewExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                    poolView = false;
                                    poolViewException = ViewsFromUnitPoolViewExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                    valleyView = false;
                                    valleyViewException = ViewsFromUnitValleyViewExceptionEnum.DEPENDENT_ON_SEASON;
                                }};
                            }};
                            label = "facilis";
                        }}),
                        add(new GuestUnitType() {{
                            codes = new String[]{{
                                add("voluptatem"),
                                add("porro"),
                                add("consequuntur"),
                            }};
                            features = new GuestUnitFeatures() {{
                                bungalowOrVilla = false;
                                bungalowOrVillaException = GuestUnitFeaturesBungalowOrVillaExceptionEnum.DEPENDENT_ON_SEASON;
                                connectingUnitAvailable = false;
                                connectingUnitAvailableException = GuestUnitFeaturesConnectingUnitAvailableExceptionEnum.DEPENDENT_ON_SEASON;
                                executiveFloor = false;
                                executiveFloorException = GuestUnitFeaturesExecutiveFloorExceptionEnum.EXCEPTION_UNSPECIFIED;
                                maxAdultOccupantsCount = 577229;
                                maxAdultOccupantsCountException = GuestUnitFeaturesMaxAdultOccupantsCountExceptionEnum.DEPENDENT_ON_SEASON;
                                maxChildOccupantsCount = 237893;
                                maxChildOccupantsCountException = GuestUnitFeaturesMaxChildOccupantsCountExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                maxOccupantsCount = 934214;
                                maxOccupantsCountException = GuestUnitFeaturesMaxOccupantsCountExceptionEnum.UNDER_CONSTRUCTION;
                                privateHome = false;
                                privateHomeException = GuestUnitFeaturesPrivateHomeExceptionEnum.DEPENDENT_ON_SEASON;
                                suite = false;
                                suiteException = GuestUnitFeaturesSuiteExceptionEnum.DEPENDENT_ON_SEASON;
                                tier = GuestUnitFeaturesTierEnum.STANDARD_UNIT;
                                tierException = GuestUnitFeaturesTierExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                totalLivingAreas = new LivingArea() {{
                                    accessibility = new LivingAreaAccessibility() {{
                                        adaCompliantUnit = false;
                                        adaCompliantUnitException = LivingAreaAccessibilityAdaCompliantUnitExceptionEnum.DEPENDENT_ON_SEASON;
                                        hearingAccessibleDoorbell = false;
                                        hearingAccessibleDoorbellException = LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        hearingAccessibleFireAlarm = false;
                                        hearingAccessibleFireAlarmException = LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum.DEPENDENT_ON_SEASON;
                                        hearingAccessibleUnit = false;
                                        hearingAccessibleUnitException = LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        mobilityAccessibleBathtub = false;
                                        mobilityAccessibleBathtubException = LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum.UNDER_CONSTRUCTION;
                                        mobilityAccessibleShower = false;
                                        mobilityAccessibleShowerException = LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum.DEPENDENT_ON_SEASON;
                                        mobilityAccessibleToilet = false;
                                        mobilityAccessibleToiletException = LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum.UNDER_CONSTRUCTION;
                                        mobilityAccessibleUnit = false;
                                        mobilityAccessibleUnitException = LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum.EXCEPTION_UNSPECIFIED;
                                    }};
                                    eating = new LivingAreaEating() {{
                                        coffeeMaker = false;
                                        coffeeMakerException = LivingAreaEatingCoffeeMakerExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        cookware = false;
                                        cookwareException = LivingAreaEatingCookwareExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        dishwasher = false;
                                        dishwasherException = LivingAreaEatingDishwasherExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        indoorGrill = false;
                                        indoorGrillException = LivingAreaEatingIndoorGrillExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        kettle = false;
                                        kettleException = LivingAreaEatingKettleExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        kitchenAvailable = false;
                                        kitchenAvailableException = LivingAreaEatingKitchenAvailableExceptionEnum.DEPENDENT_ON_SEASON;
                                        microwave = false;
                                        microwaveException = LivingAreaEatingMicrowaveExceptionEnum.DEPENDENT_ON_SEASON;
                                        minibar = false;
                                        minibarException = LivingAreaEatingMinibarExceptionEnum.UNDER_CONSTRUCTION;
                                        outdoorGrill = false;
                                        outdoorGrillException = LivingAreaEatingOutdoorGrillExceptionEnum.UNDER_CONSTRUCTION;
                                        oven = false;
                                        ovenException = LivingAreaEatingOvenExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        refrigerator = false;
                                        refrigeratorException = LivingAreaEatingRefrigeratorExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        sink = false;
                                        sinkException = LivingAreaEatingSinkExceptionEnum.DEPENDENT_ON_SEASON;
                                        snackbar = false;
                                        snackbarException = LivingAreaEatingSnackbarExceptionEnum.UNDER_CONSTRUCTION;
                                        stove = false;
                                        stoveException = LivingAreaEatingStoveExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        teaStation = false;
                                        teaStationException = LivingAreaEatingTeaStationExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        toaster = false;
                                        toasterException = LivingAreaEatingToasterExceptionEnum.EXCEPTION_UNSPECIFIED;
                                    }};
                                    features = new LivingAreaFeatures() {{
                                        airConditioning = false;
                                        airConditioningException = LivingAreaFeaturesAirConditioningExceptionEnum.UNDER_CONSTRUCTION;
                                        bathtub = false;
                                        bathtubException = LivingAreaFeaturesBathtubExceptionEnum.UNDER_CONSTRUCTION;
                                        bidet = false;
                                        bidetException = LivingAreaFeaturesBidetExceptionEnum.UNDER_CONSTRUCTION;
                                        dryer = false;
                                        dryerException = LivingAreaFeaturesDryerExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        electronicRoomKey = false;
                                        electronicRoomKeyException = LivingAreaFeaturesElectronicRoomKeyExceptionEnum.DEPENDENT_ON_SEASON;
                                        fireplace = false;
                                        fireplaceException = LivingAreaFeaturesFireplaceExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        hairdryer = false;
                                        hairdryerException = LivingAreaFeaturesHairdryerExceptionEnum.UNDER_CONSTRUCTION;
                                        heating = false;
                                        heatingException = LivingAreaFeaturesHeatingExceptionEnum.DEPENDENT_ON_SEASON;
                                        inunitSafe = false;
                                        inunitSafeException = LivingAreaFeaturesInunitSafeExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        inunitWifiAvailable = false;
                                        inunitWifiAvailableException = LivingAreaFeaturesInunitWifiAvailableExceptionEnum.DEPENDENT_ON_SEASON;
                                        ironingEquipment = false;
                                        ironingEquipmentException = LivingAreaFeaturesIroningEquipmentExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        payPerViewMovies = false;
                                        payPerViewMoviesException = LivingAreaFeaturesPayPerViewMoviesExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        privateBathroom = false;
                                        privateBathroomException = LivingAreaFeaturesPrivateBathroomExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        shower = false;
                                        showerException = LivingAreaFeaturesShowerExceptionEnum.DEPENDENT_ON_SEASON;
                                        toilet = false;
                                        toiletException = LivingAreaFeaturesToiletExceptionEnum.DEPENDENT_ON_SEASON;
                                        tv = false;
                                        tvCasting = false;
                                        tvCastingException = LivingAreaFeaturesTvCastingExceptionEnum.UNDER_CONSTRUCTION;
                                        tvException = LivingAreaFeaturesTvExceptionEnum.UNDER_CONSTRUCTION;
                                        tvStreaming = false;
                                        tvStreamingException = LivingAreaFeaturesTvStreamingExceptionEnum.DEPENDENT_ON_SEASON;
                                        universalPowerAdapters = false;
                                        universalPowerAdaptersException = LivingAreaFeaturesUniversalPowerAdaptersExceptionEnum.DEPENDENT_ON_SEASON;
                                        washer = false;
                                        washerException = LivingAreaFeaturesWasherExceptionEnum.DEPENDENT_ON_SEASON;
                                    }};
                                    layout = new LivingAreaLayout() {{
                                        balcony = false;
                                        balconyException = LivingAreaLayoutBalconyExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        livingAreaSqMeters = 7146.97;
                                        livingAreaSqMetersException = LivingAreaLayoutLivingAreaSqMetersExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        loft = false;
                                        loftException = LivingAreaLayoutLoftExceptionEnum.UNDER_CONSTRUCTION;
                                        nonSmoking = false;
                                        nonSmokingException = LivingAreaLayoutNonSmokingExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        patio = false;
                                        patioException = LivingAreaLayoutPatioExceptionEnum.UNDER_CONSTRUCTION;
                                        stairs = false;
                                        stairsException = LivingAreaLayoutStairsExceptionEnum.DEPENDENT_ON_SEASON;
                                    }};
                                    sleeping = new LivingAreaSleeping() {{
                                        bedsCount = 906418;
                                        bedsCountException = LivingAreaSleepingBedsCountExceptionEnum.UNDER_CONSTRUCTION;
                                        bunkBedsCount = 137220;
                                        bunkBedsCountException = LivingAreaSleepingBunkBedsCountExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        cribsCount = 229219;
                                        cribsCountException = LivingAreaSleepingCribsCountExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        doubleBedsCount = 881586;
                                        doubleBedsCountException = LivingAreaSleepingDoubleBedsCountExceptionEnum.UNDER_CONSTRUCTION;
                                        featherPillows = false;
                                        featherPillowsException = LivingAreaSleepingFeatherPillowsExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        hypoallergenicBedding = false;
                                        hypoallergenicBeddingException = LivingAreaSleepingHypoallergenicBeddingExceptionEnum.UNDER_CONSTRUCTION;
                                        kingBedsCount = 645785;
                                        kingBedsCountException = LivingAreaSleepingKingBedsCountExceptionEnum.DEPENDENT_ON_SEASON;
                                        memoryFoamPillows = false;
                                        memoryFoamPillowsException = LivingAreaSleepingMemoryFoamPillowsExceptionEnum.UNDER_CONSTRUCTION;
                                        otherBedsCount = 831049;
                                        otherBedsCountException = LivingAreaSleepingOtherBedsCountExceptionEnum.DEPENDENT_ON_SEASON;
                                        queenBedsCount = 628982;
                                        queenBedsCountException = LivingAreaSleepingQueenBedsCountExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        rollAwayBedsCount = 872651;
                                        rollAwayBedsCountException = LivingAreaSleepingRollAwayBedsCountExceptionEnum.UNDER_CONSTRUCTION;
                                        singleOrTwinBedsCount = 273542;
                                        singleOrTwinBedsCountException = LivingAreaSleepingSingleOrTwinBedsCountExceptionEnum.UNDER_CONSTRUCTION;
                                        sofaBedsCount = 798047;
                                        sofaBedsCountException = LivingAreaSleepingSofaBedsCountExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        syntheticPillows = false;
                                        syntheticPillowsException = LivingAreaSleepingSyntheticPillowsExceptionEnum.EXCEPTION_UNSPECIFIED;
                                    }};
                                }};
                                views = new ViewsFromUnit() {{
                                    beachView = false;
                                    beachViewException = ViewsFromUnitBeachViewExceptionEnum.DEPENDENT_ON_SEASON;
                                    cityView = false;
                                    cityViewException = ViewsFromUnitCityViewExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                    gardenView = false;
                                    gardenViewException = ViewsFromUnitGardenViewExceptionEnum.UNDER_CONSTRUCTION;
                                    lakeView = false;
                                    lakeViewException = ViewsFromUnitLakeViewExceptionEnum.DEPENDENT_ON_SEASON;
                                    landmarkView = false;
                                    landmarkViewException = ViewsFromUnitLandmarkViewExceptionEnum.UNDER_CONSTRUCTION;
                                    oceanView = false;
                                    oceanViewException = ViewsFromUnitOceanViewExceptionEnum.EXCEPTION_UNSPECIFIED;
                                    poolView = false;
                                    poolViewException = ViewsFromUnitPoolViewExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                    valleyView = false;
                                    valleyViewException = ViewsFromUnitValleyViewExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                }};
                            }};
                            label = "amet";
                        }}),
                        add(new GuestUnitType() {{
                            codes = new String[]{{
                                add("accusamus"),
                                add("numquam"),
                                add("enim"),
                            }};
                            features = new GuestUnitFeatures() {{
                                bungalowOrVilla = false;
                                bungalowOrVillaException = GuestUnitFeaturesBungalowOrVillaExceptionEnum.EXCEPTION_UNSPECIFIED;
                                connectingUnitAvailable = false;
                                connectingUnitAvailableException = GuestUnitFeaturesConnectingUnitAvailableExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                executiveFloor = false;
                                executiveFloorException = GuestUnitFeaturesExecutiveFloorExceptionEnum.DEPENDENT_ON_SEASON;
                                maxAdultOccupantsCount = 471752;
                                maxAdultOccupantsCountException = GuestUnitFeaturesMaxAdultOccupantsCountExceptionEnum.EXCEPTION_UNSPECIFIED;
                                maxChildOccupantsCount = 711584;
                                maxChildOccupantsCountException = GuestUnitFeaturesMaxChildOccupantsCountExceptionEnum.EXCEPTION_UNSPECIFIED;
                                maxOccupantsCount = 153694;
                                maxOccupantsCountException = GuestUnitFeaturesMaxOccupantsCountExceptionEnum.UNDER_CONSTRUCTION;
                                privateHome = false;
                                privateHomeException = GuestUnitFeaturesPrivateHomeExceptionEnum.DEPENDENT_ON_SEASON;
                                suite = false;
                                suiteException = GuestUnitFeaturesSuiteExceptionEnum.UNDER_CONSTRUCTION;
                                tier = GuestUnitFeaturesTierEnum.STANDARD_UNIT;
                                tierException = GuestUnitFeaturesTierExceptionEnum.UNDER_CONSTRUCTION;
                                totalLivingAreas = new LivingArea() {{
                                    accessibility = new LivingAreaAccessibility() {{
                                        adaCompliantUnit = false;
                                        adaCompliantUnitException = LivingAreaAccessibilityAdaCompliantUnitExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        hearingAccessibleDoorbell = false;
                                        hearingAccessibleDoorbellException = LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum.UNDER_CONSTRUCTION;
                                        hearingAccessibleFireAlarm = false;
                                        hearingAccessibleFireAlarmException = LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        hearingAccessibleUnit = false;
                                        hearingAccessibleUnitException = LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum.DEPENDENT_ON_SEASON;
                                        mobilityAccessibleBathtub = false;
                                        mobilityAccessibleBathtubException = LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        mobilityAccessibleShower = false;
                                        mobilityAccessibleShowerException = LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        mobilityAccessibleToilet = false;
                                        mobilityAccessibleToiletException = LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum.DEPENDENT_ON_SEASON;
                                        mobilityAccessibleUnit = false;
                                        mobilityAccessibleUnitException = LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum.EXCEPTION_UNSPECIFIED;
                                    }};
                                    eating = new LivingAreaEating() {{
                                        coffeeMaker = false;
                                        coffeeMakerException = LivingAreaEatingCoffeeMakerExceptionEnum.DEPENDENT_ON_SEASON;
                                        cookware = false;
                                        cookwareException = LivingAreaEatingCookwareExceptionEnum.DEPENDENT_ON_SEASON;
                                        dishwasher = false;
                                        dishwasherException = LivingAreaEatingDishwasherExceptionEnum.UNDER_CONSTRUCTION;
                                        indoorGrill = false;
                                        indoorGrillException = LivingAreaEatingIndoorGrillExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        kettle = false;
                                        kettleException = LivingAreaEatingKettleExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        kitchenAvailable = false;
                                        kitchenAvailableException = LivingAreaEatingKitchenAvailableExceptionEnum.DEPENDENT_ON_SEASON;
                                        microwave = false;
                                        microwaveException = LivingAreaEatingMicrowaveExceptionEnum.DEPENDENT_ON_SEASON;
                                        minibar = false;
                                        minibarException = LivingAreaEatingMinibarExceptionEnum.UNDER_CONSTRUCTION;
                                        outdoorGrill = false;
                                        outdoorGrillException = LivingAreaEatingOutdoorGrillExceptionEnum.UNDER_CONSTRUCTION;
                                        oven = false;
                                        ovenException = LivingAreaEatingOvenExceptionEnum.DEPENDENT_ON_SEASON;
                                        refrigerator = false;
                                        refrigeratorException = LivingAreaEatingRefrigeratorExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        sink = false;
                                        sinkException = LivingAreaEatingSinkExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        snackbar = false;
                                        snackbarException = LivingAreaEatingSnackbarExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        stove = false;
                                        stoveException = LivingAreaEatingStoveExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        teaStation = false;
                                        teaStationException = LivingAreaEatingTeaStationExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        toaster = false;
                                        toasterException = LivingAreaEatingToasterExceptionEnum.UNDER_CONSTRUCTION;
                                    }};
                                    features = new LivingAreaFeatures() {{
                                        airConditioning = false;
                                        airConditioningException = LivingAreaFeaturesAirConditioningExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        bathtub = false;
                                        bathtubException = LivingAreaFeaturesBathtubExceptionEnum.UNDER_CONSTRUCTION;
                                        bidet = false;
                                        bidetException = LivingAreaFeaturesBidetExceptionEnum.DEPENDENT_ON_SEASON;
                                        dryer = false;
                                        dryerException = LivingAreaFeaturesDryerExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        electronicRoomKey = false;
                                        electronicRoomKeyException = LivingAreaFeaturesElectronicRoomKeyExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        fireplace = false;
                                        fireplaceException = LivingAreaFeaturesFireplaceExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        hairdryer = false;
                                        hairdryerException = LivingAreaFeaturesHairdryerExceptionEnum.DEPENDENT_ON_SEASON;
                                        heating = false;
                                        heatingException = LivingAreaFeaturesHeatingExceptionEnum.DEPENDENT_ON_SEASON;
                                        inunitSafe = false;
                                        inunitSafeException = LivingAreaFeaturesInunitSafeExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        inunitWifiAvailable = false;
                                        inunitWifiAvailableException = LivingAreaFeaturesInunitWifiAvailableExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        ironingEquipment = false;
                                        ironingEquipmentException = LivingAreaFeaturesIroningEquipmentExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        payPerViewMovies = false;
                                        payPerViewMoviesException = LivingAreaFeaturesPayPerViewMoviesExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        privateBathroom = false;
                                        privateBathroomException = LivingAreaFeaturesPrivateBathroomExceptionEnum.DEPENDENT_ON_SEASON;
                                        shower = false;
                                        showerException = LivingAreaFeaturesShowerExceptionEnum.DEPENDENT_ON_SEASON;
                                        toilet = false;
                                        toiletException = LivingAreaFeaturesToiletExceptionEnum.DEPENDENT_ON_SEASON;
                                        tv = false;
                                        tvCasting = false;
                                        tvCastingException = LivingAreaFeaturesTvCastingExceptionEnum.DEPENDENT_ON_SEASON;
                                        tvException = LivingAreaFeaturesTvExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        tvStreaming = false;
                                        tvStreamingException = LivingAreaFeaturesTvStreamingExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        universalPowerAdapters = false;
                                        universalPowerAdaptersException = LivingAreaFeaturesUniversalPowerAdaptersExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        washer = false;
                                        washerException = LivingAreaFeaturesWasherExceptionEnum.UNDER_CONSTRUCTION;
                                    }};
                                    layout = new LivingAreaLayout() {{
                                        balcony = false;
                                        balconyException = LivingAreaLayoutBalconyExceptionEnum.UNDER_CONSTRUCTION;
                                        livingAreaSqMeters = 2408.29;
                                        livingAreaSqMetersException = LivingAreaLayoutLivingAreaSqMetersExceptionEnum.DEPENDENT_ON_SEASON;
                                        loft = false;
                                        loftException = LivingAreaLayoutLoftExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        nonSmoking = false;
                                        nonSmokingException = LivingAreaLayoutNonSmokingExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        patio = false;
                                        patioException = LivingAreaLayoutPatioExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        stairs = false;
                                        stairsException = LivingAreaLayoutStairsExceptionEnum.DEPENDENT_ON_SEASON;
                                    }};
                                    sleeping = new LivingAreaSleeping() {{
                                        bedsCount = 929530;
                                        bedsCountException = LivingAreaSleepingBedsCountExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        bunkBedsCount = 669917;
                                        bunkBedsCountException = LivingAreaSleepingBunkBedsCountExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        cribsCount = 785153;
                                        cribsCountException = LivingAreaSleepingCribsCountExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        doubleBedsCount = 281730;
                                        doubleBedsCountException = LivingAreaSleepingDoubleBedsCountExceptionEnum.DEPENDENT_ON_SEASON;
                                        featherPillows = false;
                                        featherPillowsException = LivingAreaSleepingFeatherPillowsExceptionEnum.DEPENDENT_ON_SEASON;
                                        hypoallergenicBedding = false;
                                        hypoallergenicBeddingException = LivingAreaSleepingHypoallergenicBeddingExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        kingBedsCount = 63955;
                                        kingBedsCountException = LivingAreaSleepingKingBedsCountExceptionEnum.DEPENDENT_ON_SEASON;
                                        memoryFoamPillows = false;
                                        memoryFoamPillowsException = LivingAreaSleepingMemoryFoamPillowsExceptionEnum.UNDER_CONSTRUCTION;
                                        otherBedsCount = 580447;
                                        otherBedsCountException = LivingAreaSleepingOtherBedsCountExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        queenBedsCount = 787542;
                                        queenBedsCountException = LivingAreaSleepingQueenBedsCountExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        rollAwayBedsCount = 606476;
                                        rollAwayBedsCountException = LivingAreaSleepingRollAwayBedsCountExceptionEnum.UNDER_CONSTRUCTION;
                                        singleOrTwinBedsCount = 218403;
                                        singleOrTwinBedsCountException = LivingAreaSleepingSingleOrTwinBedsCountExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                        sofaBedsCount = 455169;
                                        sofaBedsCountException = LivingAreaSleepingSofaBedsCountExceptionEnum.EXCEPTION_UNSPECIFIED;
                                        syntheticPillows = false;
                                        syntheticPillowsException = LivingAreaSleepingSyntheticPillowsExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                    }};
                                }};
                                views = new ViewsFromUnit() {{
                                    beachView = false;
                                    beachViewException = ViewsFromUnitBeachViewExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                    cityView = false;
                                    cityViewException = ViewsFromUnitCityViewExceptionEnum.UNDER_CONSTRUCTION;
                                    gardenView = false;
                                    gardenViewException = ViewsFromUnitGardenViewExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                    lakeView = false;
                                    lakeViewException = ViewsFromUnitLakeViewExceptionEnum.DEPENDENT_ON_SEASON;
                                    landmarkView = false;
                                    landmarkViewException = ViewsFromUnitLandmarkViewExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                    oceanView = false;
                                    oceanViewException = ViewsFromUnitOceanViewExceptionEnum.UNDER_CONSTRUCTION;
                                    poolView = false;
                                    poolViewException = ViewsFromUnitPoolViewExceptionEnum.DEPENDENT_ON_SEASON;
                                    valleyView = false;
                                    valleyViewException = ViewsFromUnitValleyViewExceptionEnum.DEPENDENT_ON_SEASON;
                                }};
                            }};
                            label = "vero";
                        }}),
                    }};
                    healthAndSafety = new HealthAndSafety() {{
                        enhancedCleaning = new EnhancedCleaning() {{
                            commercialGradeDisinfectantCleaning = false;
                            commercialGradeDisinfectantCleaningException = EnhancedCleaningCommercialGradeDisinfectantCleaningExceptionEnum.UNDER_CONSTRUCTION;
                            commonAreasEnhancedCleaning = false;
                            commonAreasEnhancedCleaningException = EnhancedCleaningCommonAreasEnhancedCleaningExceptionEnum.UNDER_CONSTRUCTION;
                            employeesTrainedCleaningProcedures = false;
                            employeesTrainedCleaningProceduresException = EnhancedCleaningEmployeesTrainedCleaningProceduresExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            employeesTrainedThoroughHandWashing = false;
                            employeesTrainedThoroughHandWashingException = EnhancedCleaningEmployeesTrainedThoroughHandWashingExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            employeesWearProtectiveEquipment = false;
                            employeesWearProtectiveEquipmentException = EnhancedCleaningEmployeesWearProtectiveEquipmentExceptionEnum.EXCEPTION_UNSPECIFIED;
                            guestRoomsEnhancedCleaning = false;
                            guestRoomsEnhancedCleaningException = EnhancedCleaningGuestRoomsEnhancedCleaningExceptionEnum.DEPENDENT_ON_SEASON;
                        }};;
                        increasedFoodSafety = new IncreasedFoodSafety() {{
                            diningAreasAdditionalSanitation = false;
                            diningAreasAdditionalSanitationException = IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            disposableFlatware = false;
                            disposableFlatwareException = IncreasedFoodSafetyDisposableFlatwareExceptionEnum.EXCEPTION_UNSPECIFIED;
                            foodPreparationAndServingAdditionalSafety = false;
                            foodPreparationAndServingAdditionalSafetyException = IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            individualPackagedMeals = false;
                            individualPackagedMealsException = IncreasedFoodSafetyIndividualPackagedMealsExceptionEnum.UNDER_CONSTRUCTION;
                            singleUseFoodMenus = false;
                            singleUseFoodMenusException = IncreasedFoodSafetySingleUseFoodMenusExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                        }};;
                        minimizedContact = new MinimizedContact() {{
                            contactlessCheckinCheckout = false;
                            contactlessCheckinCheckoutException = MinimizedContactContactlessCheckinCheckoutExceptionEnum.EXCEPTION_UNSPECIFIED;
                            digitalGuestRoomKeys = false;
                            digitalGuestRoomKeysException = MinimizedContactDigitalGuestRoomKeysExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            housekeepingScheduledRequestOnly = false;
                            housekeepingScheduledRequestOnlyException = MinimizedContactHousekeepingScheduledRequestOnlyExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            noHighTouchItemsCommonAreas = false;
                            noHighTouchItemsCommonAreasException = MinimizedContactNoHighTouchItemsCommonAreasExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            noHighTouchItemsGuestRooms = false;
                            noHighTouchItemsGuestRoomsException = MinimizedContactNoHighTouchItemsGuestRoomsExceptionEnum.UNDER_CONSTRUCTION;
                            plasticKeycardsDisinfected = false;
                            plasticKeycardsDisinfectedException = MinimizedContactPlasticKeycardsDisinfectedExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            roomBookingsBuffer = false;
                            roomBookingsBufferException = MinimizedContactRoomBookingsBufferExceptionEnum.UNDER_CONSTRUCTION;
                        }};;
                        personalProtection = new PersonalProtection() {{
                            commonAreasOfferSanitizingItems = false;
                            commonAreasOfferSanitizingItemsException = PersonalProtectionCommonAreasOfferSanitizingItemsExceptionEnum.EXCEPTION_UNSPECIFIED;
                            faceMaskRequired = false;
                            faceMaskRequiredException = PersonalProtectionFaceMaskRequiredExceptionEnum.DEPENDENT_ON_SEASON;
                            guestRoomHygieneKitsAvailable = false;
                            guestRoomHygieneKitsAvailableException = PersonalProtectionGuestRoomHygieneKitsAvailableExceptionEnum.UNDER_CONSTRUCTION;
                            protectiveEquipmentAvailable = false;
                            protectiveEquipmentAvailableException = PersonalProtectionProtectiveEquipmentAvailableExceptionEnum.UNDER_CONSTRUCTION;
                        }};;
                        physicalDistancing = new PhysicalDistancing() {{
                            commonAreasPhysicalDistancingArranged = false;
                            commonAreasPhysicalDistancingArrangedException = PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnum.UNDER_CONSTRUCTION;
                            physicalDistancingRequired = false;
                            physicalDistancingRequiredException = PhysicalDistancingPhysicalDistancingRequiredExceptionEnum.EXCEPTION_UNSPECIFIED;
                            safetyDividers = false;
                            safetyDividersException = PhysicalDistancingSafetyDividersExceptionEnum.UNDER_CONSTRUCTION;
                            sharedAreasLimitedOccupancy = false;
                            sharedAreasLimitedOccupancyException = PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            wellnessAreasHavePrivateSpaces = false;
                            wellnessAreasHavePrivateSpacesException = PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnum.UNDER_CONSTRUCTION;
                        }};;
                    }};;
                    housekeeping = new Housekeeping() {{
                        dailyHousekeeping = false;
                        dailyHousekeepingException = HousekeepingDailyHousekeepingExceptionEnum.EXCEPTION_UNSPECIFIED;
                        housekeepingAvailable = false;
                        housekeepingAvailableException = HousekeepingHousekeepingAvailableExceptionEnum.UNDER_CONSTRUCTION;
                        turndownService = false;
                        turndownServiceException = HousekeepingTurndownServiceExceptionEnum.DEPENDENT_ON_SEASON;
                    }};;
                    metadata = new LodgingMetadata() {{
                        updateTime = "dicta";
                    }};;
                    name = "Elisa Boyle";
                    parking = new Parking() {{
                        electricCarChargingStations = false;
                        electricCarChargingStationsException = ParkingElectricCarChargingStationsExceptionEnum.DEPENDENT_ON_SEASON;
                        freeParking = false;
                        freeParkingException = ParkingFreeParkingExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                        freeSelfParking = false;
                        freeSelfParkingException = ParkingFreeSelfParkingExceptionEnum.UNDER_CONSTRUCTION;
                        freeValetParking = false;
                        freeValetParkingException = ParkingFreeValetParkingExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                        parkingAvailable = false;
                        parkingAvailableException = ParkingParkingAvailableExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                        selfParkingAvailable = false;
                        selfParkingAvailableException = ParkingSelfParkingAvailableExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                        valetParkingAvailable = false;
                        valetParkingAvailableException = ParkingValetParkingAvailableExceptionEnum.UNDER_CONSTRUCTION;
                    }};;
                    pets = new Pets() {{
                        catsAllowed = false;
                        catsAllowedException = PetsCatsAllowedExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                        dogsAllowed = false;
                        dogsAllowedException = PetsDogsAllowedExceptionEnum.UNDER_CONSTRUCTION;
                        petsAllowed = false;
                        petsAllowedException = PetsPetsAllowedExceptionEnum.UNDER_CONSTRUCTION;
                        petsAllowedFree = false;
                        petsAllowedFreeException = PetsPetsAllowedFreeExceptionEnum.UNDER_CONSTRUCTION;
                    }};;
                    policies = new Policies() {{
                        allInclusiveAvailable = false;
                        allInclusiveAvailableException = PoliciesAllInclusiveAvailableExceptionEnum.EXCEPTION_UNSPECIFIED;
                        allInclusiveOnly = false;
                        allInclusiveOnlyException = PoliciesAllInclusiveOnlyExceptionEnum.UNDER_CONSTRUCTION;
                        checkinTime = new TimeOfDay() {{
                            hours = 407241;
                            minutes = 775220;
                            nanos = 232234;
                            seconds = 926213;
                        }};;
                        checkinTimeException = PoliciesCheckinTimeExceptionEnum.EXCEPTION_UNSPECIFIED;
                        checkoutTime = new TimeOfDay() {{
                            hours = 325310;
                            minutes = 53427;
                            nanos = 952871;
                            seconds = 725595;
                        }};;
                        checkoutTimeException = PoliciesCheckoutTimeExceptionEnum.EXCEPTION_UNSPECIFIED;
                        kidsStayFree = false;
                        kidsStayFreeException = PoliciesKidsStayFreeExceptionEnum.EXCEPTION_UNSPECIFIED;
                        maxChildAge = 533466;
                        maxChildAgeException = PoliciesMaxChildAgeExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                        maxKidsStayFreeCount = 304582;
                        maxKidsStayFreeCountException = PoliciesMaxKidsStayFreeCountExceptionEnum.EXCEPTION_UNSPECIFIED;
                        paymentOptions = new PaymentOptions() {{
                            cash = false;
                            cashException = PaymentOptionsCashExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            cheque = false;
                            chequeException = PaymentOptionsChequeExceptionEnum.EXCEPTION_UNSPECIFIED;
                            creditCard = false;
                            creditCardException = PaymentOptionsCreditCardExceptionEnum.UNDER_CONSTRUCTION;
                            debitCard = false;
                            debitCardException = PaymentOptionsDebitCardExceptionEnum.EXCEPTION_UNSPECIFIED;
                            mobileNfc = false;
                            mobileNfcException = PaymentOptionsMobileNfcExceptionEnum.DEPENDENT_ON_SEASON;
                        }};;
                        smokeFreeProperty = false;
                        smokeFreePropertyException = PoliciesSmokeFreePropertyExceptionEnum.DEPENDENT_ON_SEASON;
                    }};;
                    pools = new Pools() {{
                        adultPool = false;
                        adultPoolException = PoolsAdultPoolExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                        hotTub = false;
                        hotTubException = PoolsHotTubExceptionEnum.EXCEPTION_UNSPECIFIED;
                        indoorPool = false;
                        indoorPoolException = PoolsIndoorPoolExceptionEnum.UNDER_CONSTRUCTION;
                        indoorPoolsCount = 420539;
                        indoorPoolsCountException = PoolsIndoorPoolsCountExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                        lazyRiver = false;
                        lazyRiverException = PoolsLazyRiverExceptionEnum.DEPENDENT_ON_SEASON;
                        lifeguard = false;
                        lifeguardException = PoolsLifeguardExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                        outdoorPool = false;
                        outdoorPoolException = PoolsOutdoorPoolExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                        outdoorPoolsCount = 379034;
                        outdoorPoolsCountException = PoolsOutdoorPoolsCountExceptionEnum.DEPENDENT_ON_SEASON;
                        pool = false;
                        poolException = PoolsPoolExceptionEnum.EXCEPTION_UNSPECIFIED;
                        poolsCount = 270328;
                        poolsCountException = PoolsPoolsCountExceptionEnum.UNDER_CONSTRUCTION;
                        wadingPool = false;
                        wadingPoolException = PoolsWadingPoolExceptionEnum.EXCEPTION_UNSPECIFIED;
                        waterPark = false;
                        waterParkException = PoolsWaterParkExceptionEnum.DEPENDENT_ON_SEASON;
                        waterslide = false;
                        waterslideException = PoolsWaterslideExceptionEnum.EXCEPTION_UNSPECIFIED;
                        wavePool = false;
                        wavePoolException = PoolsWavePoolExceptionEnum.UNDER_CONSTRUCTION;
                    }};;
                    property = new Property() {{
                        builtYear = 301598;
                        builtYearException = PropertyBuiltYearExceptionEnum.UNDER_CONSTRUCTION;
                        floorsCount = 262118;
                        floorsCountException = PropertyFloorsCountExceptionEnum.UNDER_CONSTRUCTION;
                        lastRenovatedYear = 456141;
                        lastRenovatedYearException = PropertyLastRenovatedYearExceptionEnum.DEPENDENT_ON_SEASON;
                        roomsCount = 683282;
                        roomsCountException = PropertyRoomsCountExceptionEnum.UNDER_CONSTRUCTION;
                    }};;
                    services = new Services() {{
                        baggageStorage = false;
                        baggageStorageException = ServicesBaggageStorageExceptionEnum.DEPENDENT_ON_SEASON;
                        concierge = false;
                        conciergeException = ServicesConciergeExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                        convenienceStore = false;
                        convenienceStoreException = ServicesConvenienceStoreExceptionEnum.UNDER_CONSTRUCTION;
                        currencyExchange = false;
                        currencyExchangeException = ServicesCurrencyExchangeExceptionEnum.UNDER_CONSTRUCTION;
                        elevator = false;
                        elevatorException = ServicesElevatorExceptionEnum.UNDER_CONSTRUCTION;
                        frontDesk = false;
                        frontDeskException = ServicesFrontDeskExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                        fullServiceLaundry = false;
                        fullServiceLaundryException = ServicesFullServiceLaundryExceptionEnum.EXCEPTION_UNSPECIFIED;
                        giftShop = false;
                        giftShopException = ServicesGiftShopExceptionEnum.DEPENDENT_ON_SEASON;
                        languagesSpoken = new org.openapis.openapi.models.shared.LanguageSpoken[]{{
                            add(new LanguageSpoken() {{
                                languageCode = "veritatis";
                                spoken = false;
                                spokenException = LanguageSpokenSpokenExceptionEnum.EXCEPTION_UNSPECIFIED;
                            }}),
                            add(new LanguageSpoken() {{
                                languageCode = "id";
                                spoken = false;
                                spokenException = LanguageSpokenSpokenExceptionEnum.DEPENDENT_ON_SEASON;
                            }}),
                            add(new LanguageSpoken() {{
                                languageCode = "neque";
                                spoken = false;
                                spokenException = LanguageSpokenSpokenExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            }}),
                            add(new LanguageSpoken() {{
                                languageCode = "illum";
                                spoken = false;
                                spokenException = LanguageSpokenSpokenExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            }}),
                        }};
                        selfServiceLaundry = false;
                        selfServiceLaundryException = ServicesSelfServiceLaundryExceptionEnum.DEPENDENT_ON_SEASON;
                        socialHour = false;
                        socialHourException = ServicesSocialHourExceptionEnum.UNDER_CONSTRUCTION;
                        twentyFourHourFrontDesk = false;
                        twentyFourHourFrontDeskException = ServicesTwentyFourHourFrontDeskExceptionEnum.EXCEPTION_UNSPECIFIED;
                        wakeUpCalls = false;
                        wakeUpCallsException = ServicesWakeUpCallsExceptionEnum.UNDER_CONSTRUCTION;
                    }};;
                    someUnits = new GuestUnitFeatures() {{
                        bungalowOrVilla = false;
                        bungalowOrVillaException = GuestUnitFeaturesBungalowOrVillaExceptionEnum.EXCEPTION_UNSPECIFIED;
                        connectingUnitAvailable = false;
                        connectingUnitAvailableException = GuestUnitFeaturesConnectingUnitAvailableExceptionEnum.DEPENDENT_ON_SEASON;
                        executiveFloor = false;
                        executiveFloorException = GuestUnitFeaturesExecutiveFloorExceptionEnum.EXCEPTION_UNSPECIFIED;
                        maxAdultOccupantsCount = 272822;
                        maxAdultOccupantsCountException = GuestUnitFeaturesMaxAdultOccupantsCountExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                        maxChildOccupantsCount = 370853;
                        maxChildOccupantsCountException = GuestUnitFeaturesMaxChildOccupantsCountExceptionEnum.EXCEPTION_UNSPECIFIED;
                        maxOccupantsCount = 197054;
                        maxOccupantsCountException = GuestUnitFeaturesMaxOccupantsCountExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                        privateHome = false;
                        privateHomeException = GuestUnitFeaturesPrivateHomeExceptionEnum.UNDER_CONSTRUCTION;
                        suite = false;
                        suiteException = GuestUnitFeaturesSuiteExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                        tier = GuestUnitFeaturesTierEnum.UNIT_TIER_UNSPECIFIED;
                        tierException = GuestUnitFeaturesTierExceptionEnum.DEPENDENT_ON_SEASON;
                        totalLivingAreas = new LivingArea() {{
                            accessibility = new LivingAreaAccessibility() {{
                                adaCompliantUnit = false;
                                adaCompliantUnitException = LivingAreaAccessibilityAdaCompliantUnitExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                hearingAccessibleDoorbell = false;
                                hearingAccessibleDoorbellException = LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum.UNDER_CONSTRUCTION;
                                hearingAccessibleFireAlarm = false;
                                hearingAccessibleFireAlarmException = LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum.EXCEPTION_UNSPECIFIED;
                                hearingAccessibleUnit = false;
                                hearingAccessibleUnitException = LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum.UNDER_CONSTRUCTION;
                                mobilityAccessibleBathtub = false;
                                mobilityAccessibleBathtubException = LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum.DEPENDENT_ON_SEASON;
                                mobilityAccessibleShower = false;
                                mobilityAccessibleShowerException = LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                mobilityAccessibleToilet = false;
                                mobilityAccessibleToiletException = LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum.UNDER_CONSTRUCTION;
                                mobilityAccessibleUnit = false;
                                mobilityAccessibleUnitException = LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum.UNDER_CONSTRUCTION;
                            }};;
                            eating = new LivingAreaEating() {{
                                coffeeMaker = false;
                                coffeeMakerException = LivingAreaEatingCoffeeMakerExceptionEnum.DEPENDENT_ON_SEASON;
                                cookware = false;
                                cookwareException = LivingAreaEatingCookwareExceptionEnum.UNDER_CONSTRUCTION;
                                dishwasher = false;
                                dishwasherException = LivingAreaEatingDishwasherExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                indoorGrill = false;
                                indoorGrillException = LivingAreaEatingIndoorGrillExceptionEnum.EXCEPTION_UNSPECIFIED;
                                kettle = false;
                                kettleException = LivingAreaEatingKettleExceptionEnum.DEPENDENT_ON_SEASON;
                                kitchenAvailable = false;
                                kitchenAvailableException = LivingAreaEatingKitchenAvailableExceptionEnum.UNDER_CONSTRUCTION;
                                microwave = false;
                                microwaveException = LivingAreaEatingMicrowaveExceptionEnum.EXCEPTION_UNSPECIFIED;
                                minibar = false;
                                minibarException = LivingAreaEatingMinibarExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                outdoorGrill = false;
                                outdoorGrillException = LivingAreaEatingOutdoorGrillExceptionEnum.UNDER_CONSTRUCTION;
                                oven = false;
                                ovenException = LivingAreaEatingOvenExceptionEnum.DEPENDENT_ON_SEASON;
                                refrigerator = false;
                                refrigeratorException = LivingAreaEatingRefrigeratorExceptionEnum.DEPENDENT_ON_SEASON;
                                sink = false;
                                sinkException = LivingAreaEatingSinkExceptionEnum.EXCEPTION_UNSPECIFIED;
                                snackbar = false;
                                snackbarException = LivingAreaEatingSnackbarExceptionEnum.DEPENDENT_ON_SEASON;
                                stove = false;
                                stoveException = LivingAreaEatingStoveExceptionEnum.EXCEPTION_UNSPECIFIED;
                                teaStation = false;
                                teaStationException = LivingAreaEatingTeaStationExceptionEnum.DEPENDENT_ON_SEASON;
                                toaster = false;
                                toasterException = LivingAreaEatingToasterExceptionEnum.DEPENDENT_ON_SEASON;
                            }};;
                            features = new LivingAreaFeatures() {{
                                airConditioning = false;
                                airConditioningException = LivingAreaFeaturesAirConditioningExceptionEnum.UNDER_CONSTRUCTION;
                                bathtub = false;
                                bathtubException = LivingAreaFeaturesBathtubExceptionEnum.DEPENDENT_ON_SEASON;
                                bidet = false;
                                bidetException = LivingAreaFeaturesBidetExceptionEnum.EXCEPTION_UNSPECIFIED;
                                dryer = false;
                                dryerException = LivingAreaFeaturesDryerExceptionEnum.UNDER_CONSTRUCTION;
                                electronicRoomKey = false;
                                electronicRoomKeyException = LivingAreaFeaturesElectronicRoomKeyExceptionEnum.UNDER_CONSTRUCTION;
                                fireplace = false;
                                fireplaceException = LivingAreaFeaturesFireplaceExceptionEnum.EXCEPTION_UNSPECIFIED;
                                hairdryer = false;
                                hairdryerException = LivingAreaFeaturesHairdryerExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                heating = false;
                                heatingException = LivingAreaFeaturesHeatingExceptionEnum.EXCEPTION_UNSPECIFIED;
                                inunitSafe = false;
                                inunitSafeException = LivingAreaFeaturesInunitSafeExceptionEnum.EXCEPTION_UNSPECIFIED;
                                inunitWifiAvailable = false;
                                inunitWifiAvailableException = LivingAreaFeaturesInunitWifiAvailableExceptionEnum.EXCEPTION_UNSPECIFIED;
                                ironingEquipment = false;
                                ironingEquipmentException = LivingAreaFeaturesIroningEquipmentExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                payPerViewMovies = false;
                                payPerViewMoviesException = LivingAreaFeaturesPayPerViewMoviesExceptionEnum.DEPENDENT_ON_SEASON;
                                privateBathroom = false;
                                privateBathroomException = LivingAreaFeaturesPrivateBathroomExceptionEnum.DEPENDENT_ON_SEASON;
                                shower = false;
                                showerException = LivingAreaFeaturesShowerExceptionEnum.EXCEPTION_UNSPECIFIED;
                                toilet = false;
                                toiletException = LivingAreaFeaturesToiletExceptionEnum.UNDER_CONSTRUCTION;
                                tv = false;
                                tvCasting = false;
                                tvCastingException = LivingAreaFeaturesTvCastingExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                tvException = LivingAreaFeaturesTvExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                tvStreaming = false;
                                tvStreamingException = LivingAreaFeaturesTvStreamingExceptionEnum.EXCEPTION_UNSPECIFIED;
                                universalPowerAdapters = false;
                                universalPowerAdaptersException = LivingAreaFeaturesUniversalPowerAdaptersExceptionEnum.UNDER_CONSTRUCTION;
                                washer = false;
                                washerException = LivingAreaFeaturesWasherExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            }};;
                            layout = new LivingAreaLayout() {{
                                balcony = false;
                                balconyException = LivingAreaLayoutBalconyExceptionEnum.DEPENDENT_ON_SEASON;
                                livingAreaSqMeters = 8771.31;
                                livingAreaSqMetersException = LivingAreaLayoutLivingAreaSqMetersExceptionEnum.UNDER_CONSTRUCTION;
                                loft = false;
                                loftException = LivingAreaLayoutLoftExceptionEnum.EXCEPTION_UNSPECIFIED;
                                nonSmoking = false;
                                nonSmokingException = LivingAreaLayoutNonSmokingExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                patio = false;
                                patioException = LivingAreaLayoutPatioExceptionEnum.UNDER_CONSTRUCTION;
                                stairs = false;
                                stairsException = LivingAreaLayoutStairsExceptionEnum.DEPENDENT_ON_SEASON;
                            }};;
                            sleeping = new LivingAreaSleeping() {{
                                bedsCount = 473221;
                                bedsCountException = LivingAreaSleepingBedsCountExceptionEnum.DEPENDENT_ON_SEASON;
                                bunkBedsCount = 580197;
                                bunkBedsCountException = LivingAreaSleepingBunkBedsCountExceptionEnum.UNDER_CONSTRUCTION;
                                cribsCount = 716244;
                                cribsCountException = LivingAreaSleepingCribsCountExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                doubleBedsCount = 27069;
                                doubleBedsCountException = LivingAreaSleepingDoubleBedsCountExceptionEnum.DEPENDENT_ON_SEASON;
                                featherPillows = false;
                                featherPillowsException = LivingAreaSleepingFeatherPillowsExceptionEnum.DEPENDENT_ON_SEASON;
                                hypoallergenicBedding = false;
                                hypoallergenicBeddingException = LivingAreaSleepingHypoallergenicBeddingExceptionEnum.EXCEPTION_UNSPECIFIED;
                                kingBedsCount = 766964;
                                kingBedsCountException = LivingAreaSleepingKingBedsCountExceptionEnum.EXCEPTION_UNSPECIFIED;
                                memoryFoamPillows = false;
                                memoryFoamPillowsException = LivingAreaSleepingMemoryFoamPillowsExceptionEnum.EXCEPTION_UNSPECIFIED;
                                otherBedsCount = 796392;
                                otherBedsCountException = LivingAreaSleepingOtherBedsCountExceptionEnum.UNDER_CONSTRUCTION;
                                queenBedsCount = 959167;
                                queenBedsCountException = LivingAreaSleepingQueenBedsCountExceptionEnum.EXCEPTION_UNSPECIFIED;
                                rollAwayBedsCount = 458139;
                                rollAwayBedsCountException = LivingAreaSleepingRollAwayBedsCountExceptionEnum.DEPENDENT_ON_SEASON;
                                singleOrTwinBedsCount = 590984;
                                singleOrTwinBedsCountException = LivingAreaSleepingSingleOrTwinBedsCountExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                sofaBedsCount = 857723;
                                sofaBedsCountException = LivingAreaSleepingSofaBedsCountExceptionEnum.DEPENDENT_ON_SEASON;
                                syntheticPillows = false;
                                syntheticPillowsException = LivingAreaSleepingSyntheticPillowsExceptionEnum.UNDER_CONSTRUCTION;
                            }};;
                        }};;
                        views = new ViewsFromUnit() {{
                            beachView = false;
                            beachViewException = ViewsFromUnitBeachViewExceptionEnum.EXCEPTION_UNSPECIFIED;
                            cityView = false;
                            cityViewException = ViewsFromUnitCityViewExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            gardenView = false;
                            gardenViewException = ViewsFromUnitGardenViewExceptionEnum.DEPENDENT_ON_SEASON;
                            lakeView = false;
                            lakeViewException = ViewsFromUnitLakeViewExceptionEnum.DEPENDENT_ON_SEASON;
                            landmarkView = false;
                            landmarkViewException = ViewsFromUnitLandmarkViewExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            oceanView = false;
                            oceanViewException = ViewsFromUnitOceanViewExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            poolView = false;
                            poolViewException = ViewsFromUnitPoolViewExceptionEnum.EXCEPTION_UNSPECIFIED;
                            valleyView = false;
                            valleyViewException = ViewsFromUnitValleyViewExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                        }};;
                    }};;
                    sustainability = new SustainabilityInput() {{
                        energyEfficiency = new EnergyEfficiencyInput() {{
                            carbonFreeEnergySources = false;
                            carbonFreeEnergySourcesException = EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            energyConservationProgram = false;
                            energyConservationProgramException = EnergyEfficiencyEnergyConservationProgramExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            energyEfficientHeatingAndCoolingSystems = false;
                            energyEfficientHeatingAndCoolingSystemsException = EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum.EXCEPTION_UNSPECIFIED;
                            energyEfficientLighting = false;
                            energyEfficientLightingException = EnergyEfficiencyEnergyEfficientLightingExceptionEnum.EXCEPTION_UNSPECIFIED;
                            energySavingThermostats = false;
                            energySavingThermostatsException = EnergyEfficiencyEnergySavingThermostatsExceptionEnum.EXCEPTION_UNSPECIFIED;
                            independentOrganizationAuditsEnergyUse = false;
                            independentOrganizationAuditsEnergyUseException = EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum.DEPENDENT_ON_SEASON;
                        }};;
                        sustainabilityCertifications = new SustainabilityCertifications() {{
                            breeamCertification = SustainabilityCertificationsBreeamCertificationEnum.BREEAM_VERY_GOOD;
                            breeamCertificationException = SustainabilityCertificationsBreeamCertificationExceptionEnum.UNDER_CONSTRUCTION;
                            ecoCertifications = new org.openapis.openapi.models.shared.EcoCertification[]{{
                                add(new EcoCertification() {{
                                    awarded = false;
                                    awardedException = EcoCertificationAwardedExceptionEnum.EXCEPTION_UNSPECIFIED;
                                    ecoCertificate = EcoCertificationEcoCertificateEnum.UNITED_CERTIFICATION_SYSTEMS_LIMITED;
                                }}),
                                add(new EcoCertification() {{
                                    awarded = false;
                                    awardedException = EcoCertificationAwardedExceptionEnum.UNDER_CONSTRUCTION;
                                    ecoCertificate = EcoCertificationEcoCertificateEnum.GREEN_GROWTH2050;
                                }}),
                                add(new EcoCertification() {{
                                    awarded = false;
                                    awardedException = EcoCertificationAwardedExceptionEnum.UNDER_CONSTRUCTION;
                                    ecoCertificate = EcoCertificationEcoCertificateEnum.HOTELES_MAS_VERDES;
                                }}),
                                add(new EcoCertification() {{
                                    awarded = false;
                                    awardedException = EcoCertificationAwardedExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                                    ecoCertificate = EcoCertificationEcoCertificateEnum.HOTELES_MAS_VERDES;
                                }}),
                            }};
                            leedCertification = SustainabilityCertificationsLeedCertificationEnum.LEED_CERTIFICATION_UNSPECIFIED;
                            leedCertificationException = SustainabilityCertificationsLeedCertificationExceptionEnum.UNDER_CONSTRUCTION;
                        }};;
                        sustainableSourcing = new SustainableSourcing() {{
                            ecoFriendlyToiletries = false;
                            ecoFriendlyToiletriesException = SustainableSourcingEcoFriendlyToiletriesExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            locallySourcedFoodAndBeverages = false;
                            locallySourcedFoodAndBeveragesException = SustainableSourcingLocallySourcedFoodAndBeveragesExceptionEnum.EXCEPTION_UNSPECIFIED;
                            organicCageFreeEggs = false;
                            organicCageFreeEggsException = SustainableSourcingOrganicCageFreeEggsExceptionEnum.UNDER_CONSTRUCTION;
                            organicFoodAndBeverages = false;
                            organicFoodAndBeveragesException = SustainableSourcingOrganicFoodAndBeveragesExceptionEnum.UNDER_CONSTRUCTION;
                            responsiblePurchasingPolicy = false;
                            responsiblePurchasingPolicyException = SustainableSourcingResponsiblePurchasingPolicyExceptionEnum.UNDER_CONSTRUCTION;
                            responsiblySourcesSeafood = false;
                            responsiblySourcesSeafoodException = SustainableSourcingResponsiblySourcesSeafoodExceptionEnum.UNDER_CONSTRUCTION;
                            veganMeals = false;
                            veganMealsException = SustainableSourcingVeganMealsExceptionEnum.EXCEPTION_UNSPECIFIED;
                            vegetarianMeals = false;
                            vegetarianMealsException = SustainableSourcingVegetarianMealsExceptionEnum.DEPENDENT_ON_SEASON;
                        }};;
                        wasteReduction = new WasteReduction() {{
                            compostableFoodContainersAndCutlery = false;
                            compostableFoodContainersAndCutleryException = WasteReductionCompostableFoodContainersAndCutleryExceptionEnum.EXCEPTION_UNSPECIFIED;
                            compostsExcessFood = false;
                            compostsExcessFoodException = WasteReductionCompostsExcessFoodExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            donatesExcessFood = false;
                            donatesExcessFoodException = WasteReductionDonatesExcessFoodExceptionEnum.UNDER_CONSTRUCTION;
                            foodWasteReductionProgram = false;
                            foodWasteReductionProgramException = WasteReductionFoodWasteReductionProgramExceptionEnum.DEPENDENT_ON_SEASON;
                            noSingleUsePlasticStraws = false;
                            noSingleUsePlasticStrawsException = WasteReductionNoSingleUsePlasticStrawsExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            noSingleUsePlasticWaterBottles = false;
                            noSingleUsePlasticWaterBottlesException = WasteReductionNoSingleUsePlasticWaterBottlesExceptionEnum.DEPENDENT_ON_SEASON;
                            noStyrofoamFoodContainers = false;
                            noStyrofoamFoodContainersException = WasteReductionNoStyrofoamFoodContainersExceptionEnum.EXCEPTION_UNSPECIFIED;
                            recyclingProgram = false;
                            recyclingProgramException = WasteReductionRecyclingProgramExceptionEnum.DEPENDENT_ON_SEASON;
                            refillableToiletryContainers = false;
                            refillableToiletryContainersException = WasteReductionRefillableToiletryContainersExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            safelyDisposesBatteries = false;
                            safelyDisposesBatteriesException = WasteReductionSafelyDisposesBatteriesExceptionEnum.EXCEPTION_UNSPECIFIED;
                            safelyDisposesElectronics = false;
                            safelyDisposesElectronicsException = WasteReductionSafelyDisposesElectronicsExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            safelyDisposesLightbulbs = false;
                            safelyDisposesLightbulbsException = WasteReductionSafelyDisposesLightbulbsExceptionEnum.EXCEPTION_UNSPECIFIED;
                            safelyHandlesHazardousSubstances = false;
                            safelyHandlesHazardousSubstancesException = WasteReductionSafelyHandlesHazardousSubstancesExceptionEnum.UNDER_CONSTRUCTION;
                            soapDonationProgram = false;
                            soapDonationProgramException = WasteReductionSoapDonationProgramExceptionEnum.EXCEPTION_UNSPECIFIED;
                            toiletryDonationProgram = false;
                            toiletryDonationProgramException = WasteReductionToiletryDonationProgramExceptionEnum.UNDER_CONSTRUCTION;
                            waterBottleFillingStations = false;
                            waterBottleFillingStationsException = WasteReductionWaterBottleFillingStationsExceptionEnum.EXCEPTION_UNSPECIFIED;
                        }};;
                        waterConservation = new WaterConservation() {{
                            independentOrganizationAuditsWaterUse = false;
                            independentOrganizationAuditsWaterUseException = WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnum.EXCEPTION_UNSPECIFIED;
                            linenReuseProgram = false;
                            linenReuseProgramException = WaterConservationLinenReuseProgramExceptionEnum.EXCEPTION_UNSPECIFIED;
                            towelReuseProgram = false;
                            towelReuseProgramException = WaterConservationTowelReuseProgramExceptionEnum.DEPENDENT_ON_SEASON;
                            waterSavingShowers = false;
                            waterSavingShowersException = WaterConservationWaterSavingShowersExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                            waterSavingSinks = false;
                            waterSavingSinksException = WaterConservationWaterSavingSinksExceptionEnum.EXCEPTION_UNSPECIFIED;
                            waterSavingToilets = false;
                            waterSavingToiletsException = WaterConservationWaterSavingToiletsExceptionEnum.DEPENDENT_ON_SEASON;
                        }};;
                    }};;
                    transportation = new Transportation() {{
                        airportShuttle = false;
                        airportShuttleException = TransportationAirportShuttleExceptionEnum.EXCEPTION_UNSPECIFIED;
                        carRentalOnProperty = false;
                        carRentalOnPropertyException = TransportationCarRentalOnPropertyExceptionEnum.DEPENDENT_ON_SEASON;
                        freeAirportShuttle = false;
                        freeAirportShuttleException = TransportationFreeAirportShuttleExceptionEnum.UNDER_CONSTRUCTION;
                        freePrivateCarService = false;
                        freePrivateCarServiceException = TransportationFreePrivateCarServiceExceptionEnum.DEPENDENT_ON_SEASON;
                        localShuttle = false;
                        localShuttleException = TransportationLocalShuttleExceptionEnum.EXCEPTION_UNSPECIFIED;
                        privateCarService = false;
                        privateCarServiceException = TransportationPrivateCarServiceExceptionEnum.DEPENDENT_ON_SEASON;
                        transfer = false;
                        transferException = TransportationTransferExceptionEnum.UNDER_CONSTRUCTION;
                    }};;
                    wellness = new Wellness() {{
                        doctorOnCall = false;
                        doctorOnCallException = WellnessDoctorOnCallExceptionEnum.EXCEPTION_UNSPECIFIED;
                        ellipticalMachine = false;
                        ellipticalMachineException = WellnessEllipticalMachineExceptionEnum.EXCEPTION_UNSPECIFIED;
                        fitnessCenter = false;
                        fitnessCenterException = WellnessFitnessCenterExceptionEnum.DEPENDENT_ON_SEASON;
                        freeFitnessCenter = false;
                        freeFitnessCenterException = WellnessFreeFitnessCenterExceptionEnum.UNDER_CONSTRUCTION;
                        freeWeights = false;
                        freeWeightsException = WellnessFreeWeightsExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                        massage = false;
                        massageException = WellnessMassageExceptionEnum.EXCEPTION_UNSPECIFIED;
                        salon = false;
                        salonException = WellnessSalonExceptionEnum.UNDER_CONSTRUCTION;
                        sauna = false;
                        saunaException = WellnessSaunaExceptionEnum.EXCEPTION_UNSPECIFIED;
                        spa = false;
                        spaException = WellnessSpaExceptionEnum.UNDER_CONSTRUCTION;
                        treadmill = false;
                        treadmillException = WellnessTreadmillExceptionEnum.EXCEPTION_UNSPECIFIED;
                        weightMachine = false;
                        weightMachineException = WellnessWeightMachineExceptionEnum.DEPENDENT_ON_DAY_OF_WEEK;
                    }};;
                }};;
                accessToken = "natus";
                alt = AltEnum.JSON;
                callback = "voluptatibus";
                fields = "voluptas";
                key = "asperiores";
                oauthToken = "aperiam";
                prettyPrint = false;
                quotaUser = "ea";
                updateMask = "quaerat";
                uploadType = "consequuntur";
                uploadProtocol = "repellendus";
            }};            

            MybusinesslodgingLocationsUpdateLodgingResponse res = sdk.locations.mybusinesslodgingLocationsUpdateLodging(req);

            if (res.lodging != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
