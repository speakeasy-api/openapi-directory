package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Lodging
 * Lodging of a location that provides accomodations.
**/
public class Lodging {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessibility")
    public Accessibility accessibility;
    public Lodging withAccessibility(Accessibility accessibility) {
        this.accessibility = accessibility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activities")
    public Activities activities;
    public Lodging withActivities(Activities activities) {
        this.activities = activities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allUnits")
    public GuestUnitFeatures allUnits;
    public Lodging withAllUnits(GuestUnitFeatures allUnits) {
        this.allUnits = allUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("business")
    public Business business;
    public Lodging withBusiness(Business business) {
        this.business = business;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commonLivingArea")
    public LivingArea commonLivingArea;
    public Lodging withCommonLivingArea(LivingArea commonLivingArea) {
        this.commonLivingArea = commonLivingArea;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectivity")
    public Connectivity connectivity;
    public Lodging withConnectivity(Connectivity connectivity) {
        this.connectivity = connectivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("families")
    public Families families;
    public Lodging withFamilies(Families families) {
        this.families = families;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("foodAndDrink")
    public FoodAndDrink foodAndDrink;
    public Lodging withFoodAndDrink(FoodAndDrink foodAndDrink) {
        this.foodAndDrink = foodAndDrink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guestUnits")
    public GuestUnitType[] guestUnits;
    public Lodging withGuestUnits(GuestUnitType[] guestUnits) {
        this.guestUnits = guestUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthAndSafety")
    public HealthAndSafety healthAndSafety;
    public Lodging withHealthAndSafety(HealthAndSafety healthAndSafety) {
        this.healthAndSafety = healthAndSafety;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("housekeeping")
    public Housekeeping housekeeping;
    public Lodging withHousekeeping(Housekeeping housekeeping) {
        this.housekeeping = housekeeping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public LodgingMetadata metadata;
    public Lodging withMetadata(LodgingMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Lodging withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parking")
    public Parking parking;
    public Lodging withParking(Parking parking) {
        this.parking = parking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pets")
    public Pets pets;
    public Lodging withPets(Pets pets) {
        this.pets = pets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policies")
    public Policies policies;
    public Lodging withPolicies(Policies policies) {
        this.policies = policies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pools")
    public Pools pools;
    public Lodging withPools(Pools pools) {
        this.pools = pools;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("property")
    public Property property;
    public Lodging withProperty(Property property) {
        this.property = property;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("services")
    public Services services;
    public Lodging withServices(Services services) {
        this.services = services;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("someUnits")
    public GuestUnitFeatures someUnits;
    public Lodging withSomeUnits(GuestUnitFeatures someUnits) {
        this.someUnits = someUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sustainability")
    public Sustainability sustainability;
    public Lodging withSustainability(Sustainability sustainability) {
        this.sustainability = sustainability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transportation")
    public Transportation transportation;
    public Lodging withTransportation(Transportation transportation) {
        this.transportation = transportation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wellness")
    public Wellness wellness;
    public Lodging withWellness(Wellness wellness) {
        this.wellness = wellness;
        return this;
    }
}