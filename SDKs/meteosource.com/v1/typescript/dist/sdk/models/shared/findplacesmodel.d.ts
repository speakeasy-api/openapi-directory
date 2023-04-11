import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful Response
 */
export declare class FindPlacesModel extends SpeakeasyBase {
    /**
     * first-level administrative area (a US state, for example)
     */
    admArea1?: string;
    /**
     * second-level administrative area (a US county, for example)
     */
    admArea2?: string;
    /**
     * name of the country
     */
    country?: string;
    /**
     * Latitude of the point, always in the format \<float><N/S>, for example ``23.5S``
     */
    lat?: string;
    /**
     * Longitude of the point, always in format \<float><E/W>, for example ``23.5W``
     */
    lon?: string;
    /**
     * name of the place
     */
    name?: string;
    /**
     * unique identifier of the place, which can be used in /point and /map endpoints
     */
    placeId?: string;
    /**
     * Timezone of the point in tzinfo format.
     */
    timezone?: string;
    /**
     * The character of the place. May be one of the following values:
     *
     * @remarks
     *
     * * administrative areas (states, counties, districts...): ``administrative_area``
     * * country: ``country``
     * * a different political entity from a country (for example, a dependent teritory): ``political_entity``
     * * villages, towns and cities: ``settlement``
     * * air industry locations: ``airbase``, ``airfield``, ``heliport``, ``airport``, ``airport_terminal``
     * * places related to water: ``bay``, ``channel``, ``fjord``, ``lake``, ``pond``, ``falls``, ``gulf``,
     *     ``harbor``, ``reservoir``, ``sea``, ``dam``, ``cape``, ``island``, ``peninsula``
     * * places related to mountain areas: ``hill``, ``mountain``, ``peak``, ``valley``, ``volcano``, ``canyon``
     * * other places related to nature: ``park``, ``reserve``, ``resort``, ``desert``
     * * places based on postcodes: ``postcode``
     *
     */
    type?: string;
}
