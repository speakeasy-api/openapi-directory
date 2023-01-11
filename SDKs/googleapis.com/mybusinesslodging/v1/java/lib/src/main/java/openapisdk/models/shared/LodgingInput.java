package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LodgingInput
 * Lodging of a location that provides accomodations.
**/
public class LodgingInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessibility")
    public Accessibility accessibility;
    public LodgingInput withAccessibility(Accessibility accessibility) {
        this.accessibility = accessibility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activities")
    public Activities activities;
    public LodgingInput withActivities(Activities activities) {
        this.activities = activities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allUnits")
    public GuestUnitFeatures allUnits;
    public LodgingInput withAllUnits(GuestUnitFeatures allUnits) {
        this.allUnits = allUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("business")
    public Business business;
    public LodgingInput withBusiness(Business business) {
        this.business = business;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commonLivingArea")
    public LivingArea commonLivingArea;
    public LodgingInput withCommonLivingArea(LivingArea commonLivingArea) {
        this.commonLivingArea = commonLivingArea;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectivity")
    public Connectivity connectivity;
    public LodgingInput withConnectivity(Connectivity connectivity) {
        this.connectivity = connectivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("families")
    public Families families;
    public LodgingInput withFamilies(Families families) {
        this.families = families;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("foodAndDrink")
    public FoodAndDrink foodAndDrink;
    public LodgingInput withFoodAndDrink(FoodAndDrink foodAndDrink) {
        this.foodAndDrink = foodAndDrink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guestUnits")
    public GuestUnitType[] guestUnits;
    public LodgingInput withGuestUnits(GuestUnitType[] guestUnits) {
        this.guestUnits = guestUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthAndSafety")
    public HealthAndSafety healthAndSafety;
    public LodgingInput withHealthAndSafety(HealthAndSafety healthAndSafety) {
        this.healthAndSafety = healthAndSafety;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("housekeeping")
    public Housekeeping housekeeping;
    public LodgingInput withHousekeeping(Housekeeping housekeeping) {
        this.housekeeping = housekeeping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public LodgingMetadata metadata;
    public LodgingInput withMetadata(LodgingMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public LodgingInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parking")
    public Parking parking;
    public LodgingInput withParking(Parking parking) {
        this.parking = parking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pets")
    public Pets pets;
    public LodgingInput withPets(Pets pets) {
        this.pets = pets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policies")
    public Policies policies;
    public LodgingInput withPolicies(Policies policies) {
        this.policies = policies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pools")
    public Pools pools;
    public LodgingInput withPools(Pools pools) {
        this.pools = pools;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("property")
    public Property property;
    public LodgingInput withProperty(Property property) {
        this.property = property;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("services")
    public Services services;
    public LodgingInput withServices(Services services) {
        this.services = services;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("someUnits")
    public GuestUnitFeatures someUnits;
    public LodgingInput withSomeUnits(GuestUnitFeatures someUnits) {
        this.someUnits = someUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sustainability")
    public SustainabilityInput sustainability;
    public LodgingInput withSustainability(SustainabilityInput sustainability) {
        this.sustainability = sustainability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transportation")
    public Transportation transportation;
    public LodgingInput withTransportation(Transportation transportation) {
        this.transportation = transportation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wellness")
    public Wellness wellness;
    public LodgingInput withWellness(Wellness wellness) {
        this.wellness = wellness;
        return this;
    }
}