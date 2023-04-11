import { SpeakeasyBase } from "../../../internal/utils";
export declare class GeolayerdataCommon extends SpeakeasyBase {
    /**
     * The language of the information url and description.
     */
    lang?: string;
    /**
     * The URL for the preview image information.
     */
    previewImageUrl?: string;
    /**
     * The description for this location.
     */
    snippet?: string;
    /**
     * The URL for information for this location. Ex: wikipedia link.
     */
    snippetUrl?: string;
    /**
     * The display title and localized canonical name to use when searching for this entity on Google search.
     */
    title?: string;
}
export declare class GeolayerdataGeoViewportHi extends SpeakeasyBase {
    latitude?: number;
    longitude?: number;
}
export declare class GeolayerdataGeoViewportLo extends SpeakeasyBase {
    latitude?: number;
    longitude?: number;
}
/**
 * The viewport for showing this location. This is a latitude, longitude rectangle.
 */
export declare class GeolayerdataGeoViewport extends SpeakeasyBase {
    hi?: GeolayerdataGeoViewportHi;
    lo?: GeolayerdataGeoViewportLo;
}
export declare class GeolayerdataGeo extends SpeakeasyBase {
    /**
     * The boundary of the location as a set of loops containing pairs of latitude, longitude coordinates.
     */
    boundary?: string[];
    /**
     * The cache policy active for this data. EX: UNRESTRICTED, RESTRICTED, NEVER
     */
    cachePolicy?: string;
    /**
     * The country code of the location.
     */
    countryCode?: string;
    /**
     * The latitude of the location.
     */
    latitude?: number;
    /**
     * The longitude of the location.
     */
    longitude?: number;
    /**
     * The type of map that should be used for this location. EX: HYBRID, ROADMAP, SATELLITE, TERRAIN
     */
    mapType?: string;
    /**
     * The viewport for showing this location. This is a latitude, longitude rectangle.
     */
    viewport?: GeolayerdataGeoViewport;
    /**
     * The Zoom level to use for the map. Zoom levels between 0 (the lowest zoom level, in which the entire world can be seen on one map) to 21+ (down to individual buildings). See: https: //developers.google.com/maps/documentation/staticmaps/#Zoomlevels
     */
    zoom?: number;
}
export declare class Geolayerdata extends SpeakeasyBase {
    common?: GeolayerdataCommon;
    geo?: GeolayerdataGeo;
    kind?: string;
}
