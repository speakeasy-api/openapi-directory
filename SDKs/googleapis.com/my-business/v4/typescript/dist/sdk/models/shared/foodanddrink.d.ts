import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Bar exception.
 */
export declare enum FoodAndDrinkBarExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Breakfast available exception.
 */
export declare enum FoodAndDrinkBreakfastAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Breakfast buffet exception.
 */
export declare enum FoodAndDrinkBreakfastBuffetExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Buffet exception.
 */
export declare enum FoodAndDrinkBuffetExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Dinner buffet exception.
 */
export declare enum FoodAndDrinkDinnerBuffetExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Free breakfast exception.
 */
export declare enum FoodAndDrinkFreeBreakfastExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Restaurant exception.
 */
export declare enum FoodAndDrinkRestaurantExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Restaurants count exception.
 */
export declare enum FoodAndDrinkRestaurantsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Room service exception.
 */
export declare enum FoodAndDrinkRoomServiceExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Table service exception.
 */
export declare enum FoodAndDrinkTableServiceExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * 24hr room service exception.
 */
export declare enum FoodAndDrinkTwentyFourHourRoomServiceExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Vending machine exception.
 */
export declare enum FoodAndDrinkVendingMachineExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Meals, snacks, and beverages available at the property.
 */
export declare class FoodAndDrink extends SpeakeasyBase {
    /**
     * Bar. A designated room, lounge or area of an on-site restaurant with seating at a counter behind which a hotel staffer takes the guest's order and provides the requested alcoholic drink. Can be indoors or outdoors. Also known as Pub.
     */
    bar?: boolean;
    /**
     * Bar exception.
     */
    barException?: FoodAndDrinkBarExceptionEnum;
    /**
     * Breakfast available. The morning meal is offered to all guests. Can be free or for a fee.
     */
    breakfastAvailable?: boolean;
    /**
     * Breakfast available exception.
     */
    breakfastAvailableException?: FoodAndDrinkBreakfastAvailableExceptionEnum;
    /**
     * Breakfast buffet. Breakfast meal service where guests serve themselves from a variety of dishes/foods that are put out on a table.
     */
    breakfastBuffet?: boolean;
    /**
     * Breakfast buffet exception.
     */
    breakfastBuffetException?: FoodAndDrinkBreakfastBuffetExceptionEnum;
    /**
     * Buffet. A type of meal where guests serve themselves from a variety of dishes/foods that are put out on a table. Includes lunch and/or dinner meals. A breakfast-only buffet is not sufficient.
     */
    buffet?: boolean;
    /**
     * Buffet exception.
     */
    buffetException?: FoodAndDrinkBuffetExceptionEnum;
    /**
     * Dinner buffet. Dinner meal service where guests serve themselves from a variety of dishes/foods that are put out on a table.
     */
    dinnerBuffet?: boolean;
    /**
     * Dinner buffet exception.
     */
    dinnerBuffetException?: FoodAndDrinkDinnerBuffetExceptionEnum;
    /**
     * Free breakfast. Breakfast is offered for free to all guests. Does not apply if limited to certain room packages.
     */
    freeBreakfast?: boolean;
    /**
     * Free breakfast exception.
     */
    freeBreakfastException?: FoodAndDrinkFreeBreakfastExceptionEnum;
    /**
     * Restaurant. A business onsite at the hotel that is open to the public as well as guests, and offers meals and beverages to consume at tables or counters. May or may not include table service. Also known as cafe, buffet, eatery. A "breakfast room" where the hotel serves breakfast only to guests (not the general public) does not count as a restaurant.
     */
    restaurant?: boolean;
    /**
     * Restaurant exception.
     */
    restaurantException?: FoodAndDrinkRestaurantExceptionEnum;
    /**
     * Restaurants count. The number of restaurants at the hotel.
     */
    restaurantsCount?: number;
    /**
     * Restaurants count exception.
     */
    restaurantsCountException?: FoodAndDrinkRestaurantsCountExceptionEnum;
    /**
     * Room service. A hotel staffer delivers meals prepared onsite to a guest's room as per their request. May or may not be available during specific hours. Services should be available to all guests (not based on rate/room booked/reward program, etc).
     */
    roomService?: boolean;
    /**
     * Room service exception.
     */
    roomServiceException?: FoodAndDrinkRoomServiceExceptionEnum;
    /**
     * Table service. A restaurant in which a staff member is assigned to a guest's table to take their order, deliver and clear away food, and deliver the bill, if applicable. Also known as sit-down restaurant.
     */
    tableService?: boolean;
    /**
     * Table service exception.
     */
    tableServiceException?: FoodAndDrinkTableServiceExceptionEnum;
    /**
     * 24hr room service. Room service is available 24 hours a day.
     */
    twentyFourHourRoomService?: boolean;
    /**
     * 24hr room service exception.
     */
    twentyFourHourRoomServiceException?: FoodAndDrinkTwentyFourHourRoomServiceExceptionEnum;
    /**
     * Vending machine. A glass-fronted mechanized cabinet displaying and dispensing snacks and beverages for purchase by coins, paper money and/or credit cards.
     */
    vendingMachine?: boolean;
    /**
     * Vending machine exception.
     */
    vendingMachineException?: FoodAndDrinkVendingMachineExceptionEnum;
}
