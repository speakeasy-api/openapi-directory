import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Beach access exception.
 */
export declare enum ActivitiesBeachAccessExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Beach front exception.
 */
export declare enum ActivitiesBeachFrontExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Bicycle rental exception.
 */
export declare enum ActivitiesBicycleRentalExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Boutique stores exception.
 */
export declare enum ActivitiesBoutiqueStoresExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Casino exception.
 */
export declare enum ActivitiesCasinoExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Free bicycle rental exception.
 */
export declare enum ActivitiesFreeBicycleRentalExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Free Watercraft rental exception.
 */
export declare enum ActivitiesFreeWatercraftRentalExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Game room exception.
 */
export declare enum ActivitiesGameRoomExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Golf exception.
 */
export declare enum ActivitiesGolfExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Horseback riding exception.
 */
export declare enum ActivitiesHorsebackRidingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Nightclub exception.
 */
export declare enum ActivitiesNightclubExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Private beach exception.
 */
export declare enum ActivitiesPrivateBeachExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Scuba exception.
 */
export declare enum ActivitiesScubaExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Snorkeling exception.
 */
export declare enum ActivitiesSnorkelingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Tennis exception.
 */
export declare enum ActivitiesTennisExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Water skiing exception.
 */
export declare enum ActivitiesWaterSkiingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Watercraft rental exception.
 */
export declare enum ActivitiesWatercraftRentalExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Amenities and features related to leisure and play.
 */
export declare class Activities extends SpeakeasyBase {
    /**
     * Beach access. The hotel property is in close proximity to a beach and offers a way to get to that beach. This can include a route to the beach such as stairs down if hotel is on a bluff, or a short trail. Not the same as beachfront (with beach access, the hotel's proximity is close to but not right on the beach).
     */
    beachAccess?: boolean;
    /**
     * Beach access exception.
     */
    beachAccessException?: ActivitiesBeachAccessExceptionEnum;
    /**
     * Breach front. The hotel property is physically located on the beach alongside an ocean, sea, gulf, or bay. It is not on a lake, river, stream, or pond. The hotel is not separated from the beach by a public road allowing vehicular, pedestrian, or bicycle traffic.
     */
    beachFront?: boolean;
    /**
     * Beach front exception.
     */
    beachFrontException?: ActivitiesBeachFrontExceptionEnum;
    /**
     * Bicycle rental. The hotel owns bicycles that it permits guests to borrow and use. Can be free or for a fee.
     */
    bicycleRental?: boolean;
    /**
     * Bicycle rental exception.
     */
    bicycleRentalException?: ActivitiesBicycleRentalExceptionEnum;
    /**
     * Boutique stores. There are stores selling clothing, jewelry, art and decor either on hotel premises or very close by. Does not refer to the hotel gift shop or convenience store.
     */
    boutiqueStores?: boolean;
    /**
     * Boutique stores exception.
     */
    boutiqueStoresException?: ActivitiesBoutiqueStoresExceptionEnum;
    /**
     * Casino. A space designated for gambling and gaming featuring croupier-run table and card games, as well as electronic slot machines. May be on hotel premises or located nearby.
     */
    casino?: boolean;
    /**
     * Casino exception.
     */
    casinoException?: ActivitiesCasinoExceptionEnum;
    /**
     * Free bicycle rental. The hotel owns bicycles that it permits guests to borrow and use for free.
     */
    freeBicycleRental?: boolean;
    /**
     * Free bicycle rental exception.
     */
    freeBicycleRentalException?: ActivitiesFreeBicycleRentalExceptionEnum;
    /**
     * Free watercraft rental. The hotel owns watercraft that it permits guests to borrow and use for free.
     */
    freeWatercraftRental?: boolean;
    /**
     * Free Watercraft rental exception.
     */
    freeWatercraftRentalException?: ActivitiesFreeWatercraftRentalExceptionEnum;
    /**
     * Game room. There is a room at the hotel containing electronic machines for play such as pinball, prize machines, driving simulators, and other items commonly found at a family fun center or arcade. May also include non-electronic games like pool, foosball, darts, and more. May or may not be designed for children. Also known as arcade, fun room, or family fun center.
     */
    gameRoom?: boolean;
    /**
     * Game room exception.
     */
    gameRoomException?: ActivitiesGameRoomExceptionEnum;
    /**
     * Golf. There is a golf course on hotel grounds or there is a nearby, independently run golf course that allows use by hotel guests. Can be free or for a fee.
     */
    golf?: boolean;
    /**
     * Golf exception.
     */
    golfException?: ActivitiesGolfExceptionEnum;
    /**
     * Horseback riding. The hotel has a horse barn onsite or an affiliation with a nearby barn to allow for guests to sit astride a horse and direct it to walk, trot, cantor, gallop and/or jump. Can be in a riding ring, on designated paths, or in the wilderness. May or may not involve instruction.
     */
    horsebackRiding?: boolean;
    /**
     * Horseback riding exception.
     */
    horsebackRidingException?: ActivitiesHorsebackRidingExceptionEnum;
    /**
     * Nightclub. There is a room at the hotel with a bar, a dance floor, and seating where designated staffers play dance music. There may also be a designated area for the performance of live music, singing and comedy acts.
     */
    nightclub?: boolean;
    /**
     * Nightclub exception.
     */
    nightclubException?: ActivitiesNightclubExceptionEnum;
    /**
     * Private beach. The beach which is in close proximity to the hotel is open only to guests.
     */
    privateBeach?: boolean;
    /**
     * Private beach exception.
     */
    privateBeachException?: ActivitiesPrivateBeachExceptionEnum;
    /**
     * Scuba. The provision for guests to dive under naturally occurring water fitted with a self-contained underwater breathing apparatus (SCUBA) for the purpose of exploring underwater life. Apparatus consists of a tank providing oxygen to the diver through a mask. Requires certification of the diver and supervision. The hotel may have the activity at its own waterfront or have an affiliation with a nearby facility. Required equipment is most often supplied to guests. Can be free or for a fee. Not snorkeling. Not done in a swimming pool.
     */
    scuba?: boolean;
    /**
     * Scuba exception.
     */
    scubaException?: ActivitiesScubaExceptionEnum;
    /**
     * Snorkeling. The provision for guests to participate in a recreational water activity in which swimmers wear a diving mask, a simple, shaped breathing tube and flippers/swim fins for the purpose of exploring below the surface of an ocean, gulf or lake. Does not usually require user certification or professional supervision. Equipment may or may not be available for rent or purchase. Not scuba diving.
     */
    snorkeling?: boolean;
    /**
     * Snorkeling exception.
     */
    snorkelingException?: ActivitiesSnorkelingExceptionEnum;
    /**
     * Tennis. The hotel has the requisite court(s) on site or has an affiliation with a nearby facility for the purpose of providing guests with the opportunity to play a two-sided court-based game in which players use a stringed racquet to hit a ball across a net to the side of the opposing player. The court can be indoors or outdoors. Instructors, racquets and balls may or may not be provided.
     */
    tennis?: boolean;
    /**
     * Tennis exception.
     */
    tennisException?: ActivitiesTennisExceptionEnum;
    /**
     * Water skiing. The provision of giving guests the opportunity to be pulled across naturally occurring water while standing on skis and holding a tow rope attached to a motorboat. Can occur on hotel premises or at a nearby waterfront. Most often performed in a lake or ocean.
     */
    waterSkiing?: boolean;
    /**
     * Water skiing exception.
     */
    waterSkiingException?: ActivitiesWaterSkiingExceptionEnum;
    /**
     * Watercraft rental. The hotel owns water vessels that it permits guests to borrow and use. Can be free or for a fee. Watercraft may include boats, pedal boats, rowboats, sailboats, powerboats, canoes, kayaks, or personal watercraft (such as a Jet Ski).
     */
    watercraftRental?: boolean;
    /**
     * Watercraft rental exception.
     */
    watercraftRentalException?: ActivitiesWatercraftRentalExceptionEnum;
}
