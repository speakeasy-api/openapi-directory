package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FoodAndDrink
 * Meals, snacks, and beverages available at the property.
**/
public class FoodAndDrink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bar")
    public Boolean bar;
    public FoodAndDrink withBar(Boolean bar) {
        this.bar = bar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("barException")
    public FoodAndDrinkBarExceptionEnum barException;
    public FoodAndDrink withBarException(FoodAndDrinkBarExceptionEnum barException) {
        this.barException = barException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("breakfastAvailable")
    public Boolean breakfastAvailable;
    public FoodAndDrink withBreakfastAvailable(Boolean breakfastAvailable) {
        this.breakfastAvailable = breakfastAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("breakfastAvailableException")
    public FoodAndDrinkBreakfastAvailableExceptionEnum breakfastAvailableException;
    public FoodAndDrink withBreakfastAvailableException(FoodAndDrinkBreakfastAvailableExceptionEnum breakfastAvailableException) {
        this.breakfastAvailableException = breakfastAvailableException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("breakfastBuffet")
    public Boolean breakfastBuffet;
    public FoodAndDrink withBreakfastBuffet(Boolean breakfastBuffet) {
        this.breakfastBuffet = breakfastBuffet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("breakfastBuffetException")
    public FoodAndDrinkBreakfastBuffetExceptionEnum breakfastBuffetException;
    public FoodAndDrink withBreakfastBuffetException(FoodAndDrinkBreakfastBuffetExceptionEnum breakfastBuffetException) {
        this.breakfastBuffetException = breakfastBuffetException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buffet")
    public Boolean buffet;
    public FoodAndDrink withBuffet(Boolean buffet) {
        this.buffet = buffet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buffetException")
    public FoodAndDrinkBuffetExceptionEnum buffetException;
    public FoodAndDrink withBuffetException(FoodAndDrinkBuffetExceptionEnum buffetException) {
        this.buffetException = buffetException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dinnerBuffet")
    public Boolean dinnerBuffet;
    public FoodAndDrink withDinnerBuffet(Boolean dinnerBuffet) {
        this.dinnerBuffet = dinnerBuffet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dinnerBuffetException")
    public FoodAndDrinkDinnerBuffetExceptionEnum dinnerBuffetException;
    public FoodAndDrink withDinnerBuffetException(FoodAndDrinkDinnerBuffetExceptionEnum dinnerBuffetException) {
        this.dinnerBuffetException = dinnerBuffetException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeBreakfast")
    public Boolean freeBreakfast;
    public FoodAndDrink withFreeBreakfast(Boolean freeBreakfast) {
        this.freeBreakfast = freeBreakfast;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeBreakfastException")
    public FoodAndDrinkFreeBreakfastExceptionEnum freeBreakfastException;
    public FoodAndDrink withFreeBreakfastException(FoodAndDrinkFreeBreakfastExceptionEnum freeBreakfastException) {
        this.freeBreakfastException = freeBreakfastException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restaurant")
    public Boolean restaurant;
    public FoodAndDrink withRestaurant(Boolean restaurant) {
        this.restaurant = restaurant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restaurantException")
    public FoodAndDrinkRestaurantExceptionEnum restaurantException;
    public FoodAndDrink withRestaurantException(FoodAndDrinkRestaurantExceptionEnum restaurantException) {
        this.restaurantException = restaurantException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restaurantsCount")
    public Integer restaurantsCount;
    public FoodAndDrink withRestaurantsCount(Integer restaurantsCount) {
        this.restaurantsCount = restaurantsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restaurantsCountException")
    public FoodAndDrinkRestaurantsCountExceptionEnum restaurantsCountException;
    public FoodAndDrink withRestaurantsCountException(FoodAndDrinkRestaurantsCountExceptionEnum restaurantsCountException) {
        this.restaurantsCountException = restaurantsCountException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roomService")
    public Boolean roomService;
    public FoodAndDrink withRoomService(Boolean roomService) {
        this.roomService = roomService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roomServiceException")
    public FoodAndDrinkRoomServiceExceptionEnum roomServiceException;
    public FoodAndDrink withRoomServiceException(FoodAndDrinkRoomServiceExceptionEnum roomServiceException) {
        this.roomServiceException = roomServiceException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tableService")
    public Boolean tableService;
    public FoodAndDrink withTableService(Boolean tableService) {
        this.tableService = tableService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tableServiceException")
    public FoodAndDrinkTableServiceExceptionEnum tableServiceException;
    public FoodAndDrink withTableServiceException(FoodAndDrinkTableServiceExceptionEnum tableServiceException) {
        this.tableServiceException = tableServiceException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("twentyFourHourRoomService")
    public Boolean twentyFourHourRoomService;
    public FoodAndDrink withTwentyFourHourRoomService(Boolean twentyFourHourRoomService) {
        this.twentyFourHourRoomService = twentyFourHourRoomService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("twentyFourHourRoomServiceException")
    public FoodAndDrinkTwentyFourHourRoomServiceExceptionEnum twentyFourHourRoomServiceException;
    public FoodAndDrink withTwentyFourHourRoomServiceException(FoodAndDrinkTwentyFourHourRoomServiceExceptionEnum twentyFourHourRoomServiceException) {
        this.twentyFourHourRoomServiceException = twentyFourHourRoomServiceException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vendingMachine")
    public Boolean vendingMachine;
    public FoodAndDrink withVendingMachine(Boolean vendingMachine) {
        this.vendingMachine = vendingMachine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vendingMachineException")
    public FoodAndDrinkVendingMachineExceptionEnum vendingMachineException;
    public FoodAndDrink withVendingMachineException(FoodAndDrinkVendingMachineExceptionEnum vendingMachineException) {
        this.vendingMachineException = vendingMachineException;
        return this;
    }
}