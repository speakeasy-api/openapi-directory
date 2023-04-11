import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGeocodeRequest extends SpeakeasyBase {
    /**
     * If `true`, the output will be formatted.
     */
    debug?: boolean;
    /**
     * Specify the maximum number of results to return
     */
    limit?: number;
    /**
     * Display the search results for the specified locale. Currently French (fr), English (en), German (de) and Italian (it) are supported. If the locale wasn't found the default (en) is used.
     */
    locale?: string;
    /**
     * _Forward geocoding_: The location bias in the format 'latitude,longitude' e.g. point=45.93272,11.58803. _Reverse geocoding_: The location to find amenities, cities.
     */
    point?: string;
    /**
     * The provider parameter is currently under development and can fall back to `default` at any time.
     *
     * @remarks
     * The intend is to provide alternatives to our default geocoder. Each provider has its own strenghts and might fit better for certain scenarios, so it's worth to compare the different providers.
     * To try it append the `provider`parameter to the URL like `&provider=nominatim`,
     * the result structure should be identical in all cases - if not, please report this back to us.
     * Keep in mind that some providers do not support certain parameters or don't return some fields, for example `osm_id` and `osm_type` are not supported by every geocoding provider.
     * If you would like to use additional parameters of one of the providers, but it's not available for the GraphHopper Geocoding API, yet? Please contact us.
     *
     * The credit costs can be different for all providers - see [here](https://support.graphhopper.com/support/solutions/articles/44000718211-what-is-one-credit-) for more information about it.
     *
     * Currently, only the default provider and gisgraphy supports autocompletion of partial search strings.
     *
     * All providers support normal "forward" geocoding and reverse geocoding via `reverse=true`.
     *
     * #### Default (`provider=default`)
     *
     * This provider returns results of our internal geocoding engine, as described above.
     * In addition to the above documented parameters the following parameters are possible:
     * * `bbox` - the expected format is `minLon,minLat,maxLon,maxLat`
     * * `osm_tag` - you can filter `key:value` or exclude places with certain OpenStreetMap tags `!key:value`. E.g. `osm_tag=tourism:museum` or just the key `osm_tag=tourism`. To exclude multiple tags you add multiple `osm_tag` parameters.
     *
     * #### Nominatim (`provider=nominatim`)
     *
     * The GraphHopper Directions API uses a commercially hosted Nominatim geocoder. You can try this provider [here](https://nominatim.openstreetmap.org/). The provider does **not** fall under the [restrictions](https://operations.osmfoundation.org/policies/nominatim/) of the Nominatim instance hosted by OpenStreetMap.
     *
     * In addition to the above documented parameters Nominatim allows to use the following parameters, which can be used as documented [here](https://github.com/openstreetmap/Nominatim/blob/master/docs/api/Search.md#parameters):
     *
     * * `viewbox` - the expected format is `minLon,minLat,maxLon,maxLat`
     * * `bounded` - If 1 and a viewbox is given, restrict the result to items contained within that viewbox. Default is 0.
     *
     * #### Gisgraphy (`provider=gisgraphy`)
     *
     * This provider returns results from the Gisgraphy geocoder which you can try [here](https://services.gisgraphy.com/static/leaflet/index.html).
     *
     * **Limitations:** The `locale` parameter is not supported. Gisgraphy does not return OSM tags or an extent.
     *
     * Gisgraphy has a special autocomplete API, which you can use by adding `autocomplete=true` (does not work with `reverse=true`). The autocomplete API is optimized on predicting text input, but returns less information.
     *
     * In addition to the above documented parameters Gisgraphy allows to use the following parameters, which can be used as documented [here](https://www.gisgraphy.com/documentation/user-guide.php#geocodingservice):
     *
     * * `radius` - radius in meters
     * * `country` - restrict search for the specified country. The value must be the ISO 3166 Alpha 2 code of the country.
     *
     * #### NetToolKit (`provider=nettoolkit`)
     *
     * This provider returns results from the NetToolKit provider which is specialized for US addresses and provides a wrapper around Nominatim for other addresses. You can try it [here](https://www.nettoolkit.com/geo/demo).
     *
     * The following additional NetToolKit parameters are supported (read [here](https://www.nettoolkit.com/docs/geo/geocoding) for more details):
     * - `source`: User can choose which source provider to geocode the address, this value is "NetToolKit" by default
     * - `country_code`: an iso-3166-2 country code (e.g : US) filter the results to the specify country code
     *
     * **Limitations:** NetToolKit does not support the `locale` parameter. NetToolKit does not return OSM tags (e.g. osm_id, osm_type, osm_value).
     *
     * #### OpenCage Data (`provider=opencagedata`)
     *
     * This provider returns results from the OpenCageData geocoder which you can try [here](https://geocoder.opencagedata.com/demo).
     *
     * In addition to the above documented parameters OpenCage Data allows to use the following parameters, which can be used as documented [here](https://geocoder.opencagedata.com/api#forward-opt):
     *
     * * countrycode - The country code is a two letter code as defined by the ISO 3166-1 Alpha 2 standard. E.g. gb for the United Kingdom, fr for France, us for United States.
     * * bounds - the expected format is `minLon,minLat,maxLon,maxLat`
     *
     */
    provider?: string;
    /**
     * If you do forward geocoding, this is `required` and is a textual description of the address you are looking for.
     */
    q?: string;
    /**
     * It is `required` to be `true` if you want to do a reverse geocoding request. If it is `true`, `point` must be defined as well, and `q` must not be used.
     */
    reverse?: boolean;
}
export declare class GetGeocodeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unexpected error
     */
    ghError?: shared.GHError;
    /**
     * An array found locations
     */
    geocodingResponse?: shared.GeocodingResponse;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
