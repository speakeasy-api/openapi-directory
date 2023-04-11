import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesAdditionalProperties } from "./tflapipresentationentitiesadditionalproperties";
import { TflApiPresentationEntitiesIdentifier } from "./tflapipresentationentitiesidentifier";
import { TflApiPresentationEntitiesLineGroup } from "./tflapipresentationentitieslinegroup";
import { TflApiPresentationEntitiesLineModeGroup } from "./tflapipresentationentitieslinemodegroup";
import { TflApiPresentationEntitiesPlace } from "./tflapipresentationentitiesplace";
export declare class TflApiPresentationEntitiesStopPoint extends SpeakeasyBase {
    accessibilitySummary?: string;
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
    fullName?: string;
    hubNaptanCode?: string;
    icsCode?: string;
    /**
     * A unique identifier.
     */
    id?: string;
    /**
     * The indicator of the stop point e.g. "Stop K"
     */
    indicator?: string;
    individualStopId?: string;
    /**
     * WGS84 latitude of the location.
     */
    lat?: number;
    lineGroup?: TflApiPresentationEntitiesLineGroup[];
    lineModeGroups?: TflApiPresentationEntitiesLineModeGroup[];
    lines?: TflApiPresentationEntitiesIdentifier[];
    /**
     * WGS84 longitude of the location.
     */
    lon?: number;
    modes?: string[];
    naptanId?: string;
    naptanMode?: string;
    /**
     * The type of Place. See /Place/Meta/placeTypes for possible values.
     */
    placeType?: string;
    platformName?: string;
    smsCode?: string;
    stationNaptan?: string;
    status?: boolean;
    /**
     * The stop letter, if it could be cleansed from the Indicator e.g. "K"
     */
    stopLetter?: string;
    stopType?: string;
    /**
     * The unique location of this resource.
     */
    url?: string;
}
