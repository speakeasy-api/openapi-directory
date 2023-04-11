import { SpeakeasyBase } from "../../../internal/utils";
import { Accessibility } from "./accessibility";
import { Activities } from "./activities";
import { Business } from "./business";
import { Connectivity } from "./connectivity";
import { Families } from "./families";
import { FoodAndDrink } from "./foodanddrink";
import { GuestUnitFeatures } from "./guestunitfeatures";
import { GuestUnitType } from "./guestunittype";
import { HealthAndSafety } from "./healthandsafety";
import { Housekeeping } from "./housekeeping";
import { LivingArea } from "./livingarea";
import { LodgingMetadata } from "./lodgingmetadata";
import { Parking } from "./parking";
import { Pets } from "./pets";
import { Policies } from "./policies";
import { Pools } from "./pools";
import { Property } from "./property";
import { Services } from "./services";
import { Transportation } from "./transportation";
import { Wellness } from "./wellness";
/**
 * Lodging of a location that provides accomodations.
 */
export declare class Lodging extends SpeakeasyBase {
    /**
     * Physical adaptations made to the property in consideration of varying levels of human physical ability.
     */
    accessibility?: Accessibility;
    /**
     * Amenities and features related to leisure and play.
     */
    activities?: Activities;
    /**
     * Features and available amenities in the guest unit.
     */
    allUnits?: GuestUnitFeatures;
    /**
     * Features of the property of specific interest to the business traveler.
     */
    business?: Business;
    /**
     * An individual room, such as kitchen, bathroom, bedroom, within a bookable guest unit.
     */
    commonLivingArea?: LivingArea;
    /**
     * The ways in which the property provides guests with the ability to access the internet.
     */
    connectivity?: Connectivity;
    /**
     * Services and amenities for families and young guests.
     */
    families?: Families;
    /**
     * Meals, snacks, and beverages available at the property.
     */
    foodAndDrink?: FoodAndDrink;
    /**
     * Individual GuestUnitTypes that are available in this Lodging.
     */
    guestUnits?: GuestUnitType[];
    /**
     * Health and safety measures implemented by the hotel during COVID-19.
     */
    healthAndSafety?: HealthAndSafety;
    /**
     * Conveniences provided in guest units to facilitate an easier, more comfortable stay.
     */
    housekeeping?: Housekeeping;
    /**
     * Metadata for the Lodging.
     */
    metadata?: LodgingMetadata;
    /**
     * Required. Google identifier for this location in the form: `accounts/{account_id}/locations/{location_id}/lodging`
     */
    name?: string;
    /**
     * Parking options at the property.
     */
    parking?: Parking;
    /**
     * Policies regarding guest-owned animals.
     */
    pets?: Pets;
    /**
     * Property rules that impact guests.
     */
    policies?: Policies;
    /**
     * Swimming pool or recreational water facilities available at the hotel.
     */
    pools?: Pools;
    /**
     * General factual information about the property's physical structure and important dates.
     */
    property?: Property;
    /**
     * Conveniences or help provided by the property to facilitate an easier, more comfortable stay.
     */
    services?: Services;
    /**
     * Features and available amenities in the guest unit.
     */
    someUnits?: GuestUnitFeatures;
    /**
     * Vehicles or vehicular services facilitated or owned by the property.
     */
    transportation?: Transportation;
    /**
     * Guest facilities at the property to promote or maintain health, beauty, and fitness.
     */
    wellness?: Wellness;
}
