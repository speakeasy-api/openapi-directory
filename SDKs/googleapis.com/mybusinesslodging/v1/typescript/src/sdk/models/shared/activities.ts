/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Beach access exception.
 */
export enum ActivitiesBeachAccessExceptionEnum {
  ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
  UnderConstruction = "UNDER_CONSTRUCTION",
  DependentOnSeason = "DEPENDENT_ON_SEASON",
  DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK",
}

/**
 * Beach front exception.
 */
export enum ActivitiesBeachFrontExceptionEnum {
  ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
  UnderConstruction = "UNDER_CONSTRUCTION",
  DependentOnSeason = "DEPENDENT_ON_SEASON",
  DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK",
}

/**
 * Bicycle rental exception.
 */
export enum ActivitiesBicycleRentalExceptionEnum {
  ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
  UnderConstruction = "UNDER_CONSTRUCTION",
  DependentOnSeason = "DEPENDENT_ON_SEASON",
  DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK",
}

/**
 * Boutique stores exception.
 */
export enum ActivitiesBoutiqueStoresExceptionEnum {
  ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
  UnderConstruction = "UNDER_CONSTRUCTION",
  DependentOnSeason = "DEPENDENT_ON_SEASON",
  DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK",
}

/**
 * Casino exception.
 */
export enum ActivitiesCasinoExceptionEnum {
  ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
  UnderConstruction = "UNDER_CONSTRUCTION",
  DependentOnSeason = "DEPENDENT_ON_SEASON",
  DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK",
}

/**
 * Free bicycle rental exception.
 */
export enum ActivitiesFreeBicycleRentalExceptionEnum {
  ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
  UnderConstruction = "UNDER_CONSTRUCTION",
  DependentOnSeason = "DEPENDENT_ON_SEASON",
  DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK",
}

/**
 * Free Watercraft rental exception.
 */
export enum ActivitiesFreeWatercraftRentalExceptionEnum {
  ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
  UnderConstruction = "UNDER_CONSTRUCTION",
  DependentOnSeason = "DEPENDENT_ON_SEASON",
  DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK",
}

/**
 * Game room exception.
 */
export enum ActivitiesGameRoomExceptionEnum {
  ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
  UnderConstruction = "UNDER_CONSTRUCTION",
  DependentOnSeason = "DEPENDENT_ON_SEASON",
  DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK",
}

/**
 * Golf exception.
 */
export enum ActivitiesGolfExceptionEnum {
  ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
  UnderConstruction = "UNDER_CONSTRUCTION",
  DependentOnSeason = "DEPENDENT_ON_SEASON",
  DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK",
}

/**
 * Horseback riding exception.
 */
export enum ActivitiesHorsebackRidingExceptionEnum {
  ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
  UnderConstruction = "UNDER_CONSTRUCTION",
  DependentOnSeason = "DEPENDENT_ON_SEASON",
  DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK",
}

/**
 * Nightclub exception.
 */
export enum ActivitiesNightclubExceptionEnum {
  ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
  UnderConstruction = "UNDER_CONSTRUCTION",
  DependentOnSeason = "DEPENDENT_ON_SEASON",
  DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK",
}

/**
 * Private beach exception.
 */
export enum ActivitiesPrivateBeachExceptionEnum {
  ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
  UnderConstruction = "UNDER_CONSTRUCTION",
  DependentOnSeason = "DEPENDENT_ON_SEASON",
  DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK",
}

/**
 * Scuba exception.
 */
export enum ActivitiesScubaExceptionEnum {
  ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
  UnderConstruction = "UNDER_CONSTRUCTION",
  DependentOnSeason = "DEPENDENT_ON_SEASON",
  DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK",
}

/**
 * Snorkeling exception.
 */
export enum ActivitiesSnorkelingExceptionEnum {
  ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
  UnderConstruction = "UNDER_CONSTRUCTION",
  DependentOnSeason = "DEPENDENT_ON_SEASON",
  DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK",
}

/**
 * Tennis exception.
 */
export enum ActivitiesTennisExceptionEnum {
  ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
  UnderConstruction = "UNDER_CONSTRUCTION",
  DependentOnSeason = "DEPENDENT_ON_SEASON",
  DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK",
}

/**
 * Water skiing exception.
 */
export enum ActivitiesWaterSkiingExceptionEnum {
  ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
  UnderConstruction = "UNDER_CONSTRUCTION",
  DependentOnSeason = "DEPENDENT_ON_SEASON",
  DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK",
}

/**
 * Watercraft rental exception.
 */
export enum ActivitiesWatercraftRentalExceptionEnum {
  ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
  UnderConstruction = "UNDER_CONSTRUCTION",
  DependentOnSeason = "DEPENDENT_ON_SEASON",
  DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK",
}

/**
 * Amenities and features related to leisure and play.
 */
export class Activities extends SpeakeasyBase {
  /**
   * Beach access. The hotel property is in close proximity to a beach and offers a way to get to that beach. This can include a route to the beach such as stairs down if hotel is on a bluff, or a short trail. Not the same as beachfront (with beach access, the hotel's proximity is close to but not right on the beach).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "beachAccess" })
  beachAccess?: boolean;

  /**
   * Beach access exception.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "beachAccessException" })
  beachAccessException?: ActivitiesBeachAccessExceptionEnum;

  /**
   * Breach front. The hotel property is physically located on the beach alongside an ocean, sea, gulf, or bay. It is not on a lake, river, stream, or pond. The hotel is not separated from the beach by a public road allowing vehicular, pedestrian, or bicycle traffic.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "beachFront" })
  beachFront?: boolean;

  /**
   * Beach front exception.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "beachFrontException" })
  beachFrontException?: ActivitiesBeachFrontExceptionEnum;

  /**
   * Bicycle rental. The hotel owns bicycles that it permits guests to borrow and use. Can be free or for a fee.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "bicycleRental" })
  bicycleRental?: boolean;

  /**
   * Bicycle rental exception.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "bicycleRentalException" })
  bicycleRentalException?: ActivitiesBicycleRentalExceptionEnum;

  /**
   * Boutique stores. There are stores selling clothing, jewelry, art and decor either on hotel premises or very close by. Does not refer to the hotel gift shop or convenience store.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "boutiqueStores" })
  boutiqueStores?: boolean;

  /**
   * Boutique stores exception.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "boutiqueStoresException" })
  boutiqueStoresException?: ActivitiesBoutiqueStoresExceptionEnum;

  /**
   * Casino. A space designated for gambling and gaming featuring croupier-run table and card games, as well as electronic slot machines. May be on hotel premises or located nearby.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "casino" })
  casino?: boolean;

  /**
   * Casino exception.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "casinoException" })
  casinoException?: ActivitiesCasinoExceptionEnum;

  /**
   * Free bicycle rental. The hotel owns bicycles that it permits guests to borrow and use for free.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "freeBicycleRental" })
  freeBicycleRental?: boolean;

  /**
   * Free bicycle rental exception.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "freeBicycleRentalException" })
  freeBicycleRentalException?: ActivitiesFreeBicycleRentalExceptionEnum;

  /**
   * Free watercraft rental. The hotel owns watercraft that it permits guests to borrow and use for free.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "freeWatercraftRental" })
  freeWatercraftRental?: boolean;

  /**
   * Free Watercraft rental exception.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "freeWatercraftRentalException" })
  freeWatercraftRentalException?: ActivitiesFreeWatercraftRentalExceptionEnum;

  /**
   * Game room. There is a room at the hotel containing electronic machines for play such as pinball, prize machines, driving simulators, and other items commonly found at a family fun center or arcade. May also include non-electronic games like pool, foosball, darts, and more. May or may not be designed for children. Also known as arcade, fun room, or family fun center.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "gameRoom" })
  gameRoom?: boolean;

  /**
   * Game room exception.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "gameRoomException" })
  gameRoomException?: ActivitiesGameRoomExceptionEnum;

  /**
   * Golf. There is a golf course on hotel grounds or there is a nearby, independently run golf course that allows use by hotel guests. Can be free or for a fee.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "golf" })
  golf?: boolean;

  /**
   * Golf exception.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "golfException" })
  golfException?: ActivitiesGolfExceptionEnum;

  /**
   * Horseback riding. The hotel has a horse barn onsite or an affiliation with a nearby barn to allow for guests to sit astride a horse and direct it to walk, trot, cantor, gallop and/or jump. Can be in a riding ring, on designated paths, or in the wilderness. May or may not involve instruction.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "horsebackRiding" })
  horsebackRiding?: boolean;

  /**
   * Horseback riding exception.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "horsebackRidingException" })
  horsebackRidingException?: ActivitiesHorsebackRidingExceptionEnum;

  /**
   * Nightclub. There is a room at the hotel with a bar, a dance floor, and seating where designated staffers play dance music. There may also be a designated area for the performance of live music, singing and comedy acts.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "nightclub" })
  nightclub?: boolean;

  /**
   * Nightclub exception.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "nightclubException" })
  nightclubException?: ActivitiesNightclubExceptionEnum;

  /**
   * Private beach. The beach which is in close proximity to the hotel is open only to guests.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "privateBeach" })
  privateBeach?: boolean;

  /**
   * Private beach exception.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "privateBeachException" })
  privateBeachException?: ActivitiesPrivateBeachExceptionEnum;

  /**
   * Scuba. The provision for guests to dive under naturally occurring water fitted with a self-contained underwater breathing apparatus (SCUBA) for the purpose of exploring underwater life. Apparatus consists of a tank providing oxygen to the diver through a mask. Requires certification of the diver and supervision. The hotel may have the activity at its own waterfront or have an affiliation with a nearby facility. Required equipment is most often supplied to guests. Can be free or for a fee. Not snorkeling. Not done in a swimming pool.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "scuba" })
  scuba?: boolean;

  /**
   * Scuba exception.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "scubaException" })
  scubaException?: ActivitiesScubaExceptionEnum;

  /**
   * Snorkeling. The provision for guests to participate in a recreational water activity in which swimmers wear a diving mask, a simple, shaped breathing tube and flippers/swim fins for the purpose of exploring below the surface of an ocean, gulf or lake. Does not usually require user certification or professional supervision. Equipment may or may not be available for rent or purchase. Not scuba diving.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "snorkeling" })
  snorkeling?: boolean;

  /**
   * Snorkeling exception.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "snorkelingException" })
  snorkelingException?: ActivitiesSnorkelingExceptionEnum;

  /**
   * Tennis. The hotel has the requisite court(s) on site or has an affiliation with a nearby facility for the purpose of providing guests with the opportunity to play a two-sided court-based game in which players use a stringed racquet to hit a ball across a net to the side of the opposing player. The court can be indoors or outdoors. Instructors, racquets and balls may or may not be provided.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "tennis" })
  tennis?: boolean;

  /**
   * Tennis exception.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "tennisException" })
  tennisException?: ActivitiesTennisExceptionEnum;

  /**
   * Water skiing. The provision of giving guests the opportunity to be pulled across naturally occurring water while standing on skis and holding a tow rope attached to a motorboat. Can occur on hotel premises or at a nearby waterfront. Most often performed in a lake or ocean.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "waterSkiing" })
  waterSkiing?: boolean;

  /**
   * Water skiing exception.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "waterSkiingException" })
  waterSkiingException?: ActivitiesWaterSkiingExceptionEnum;

  /**
   * Watercraft rental. The hotel owns water vessels that it permits guests to borrow and use. Can be free or for a fee. Watercraft may include boats, pedal boats, rowboats, sailboats, powerboats, canoes, kayaks, or personal watercraft (such as a Jet Ski).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "watercraftRental" })
  watercraftRental?: boolean;

  /**
   * Watercraft rental exception.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "watercraftRentalException" })
  watercraftRentalException?: ActivitiesWatercraftRentalExceptionEnum;
}
