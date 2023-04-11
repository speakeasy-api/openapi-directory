import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesAdditionalProperties } from "./tflapipresentationentitiesadditionalproperties";
/**
 * OK
 */
export declare class TflApiPresentationEntitiesPlace extends SpeakeasyBase {
    /**
     * A bag of additional key/value pairs with extra information about this place.
     */
    additionalProperties?: TflApiPresentationEntitiesAdditionalProperties[];
    children?: TflApiPresentationEntitiesPlace[];
    childrenUrls?: string[];
    /**
     * A human readable name.
     */
    commonName?: string;
    /**
     * The distance of the place from its search point, if this is the result
     *
     * @remarks
     *             of a geographical search, otherwise zero.
     */
    distance?: number;
    /**
     * A unique identifier.
     */
    id?: string;
    /**
     * WGS84 latitude of the location.
     */
    lat?: number;
    /**
     * WGS84 longitude of the location.
     */
    lon?: number;
    /**
     * The type of Place. See /Place/Meta/placeTypes for possible values.
     */
    placeType?: string;
    /**
     * The unique location of this resource.
     */
    url?: string;
}
