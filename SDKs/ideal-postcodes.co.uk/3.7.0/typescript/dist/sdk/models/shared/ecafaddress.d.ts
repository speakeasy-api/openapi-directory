import { SpeakeasyBase } from "../../../internal/utils";
/**
 *   Full country names (ISO 3166)
 *
 * @remarks
 *
 */
export declare enum EcafAddressCountryEnum {
    Ireland = "Ireland"
}
/**
 *   3 letter country code (ISO 3166-1)
 *
 * @remarks
 *
 */
export declare enum EcafAddressCountryIsoEnum {
    Irl = "IRL"
}
/**
 *  2 letter country code (ISO 3166-1)
 *
 * @remarks
 *
 */
export declare enum EcafAddressCountryIso2Enum {
    Ie = "IE"
}
export declare enum EcafAddressDatasetEnum {
    Ecaf = "ecaf"
}
/**
 * Language represented by 2 letter ISO Code (639-1)
 *
 * @remarks
 *
 */
export declare enum EcafAddressLanguageEnum {
    En = "en",
    Ga = "ga"
}
/**
 * ECAF is the Eircode Address File which contains one record for each Postal Address. English language and Irish language versions are available. It is distributed as a flat file, details of data provision and updates are provided in section 2.
 */
export declare class EcafAddress extends SpeakeasyBase {
    /**
     * The address reference is the An Post GeoDirectory address reference identifier used by the Universal Service Provider.
     */
    addressReference: string;
    /**
     * A building group is a collection of buildings with a collective name, located on or near the same thoroughfare.
     */
    buildingGroup: string;
    /**
     * The name given to the building. Prepended by sub building, if any, when the sub building does not appear on a line to itself. The building name is omitted if it is the same as either the Organisation or Building Group.
     */
    buildingName: string;
    /**
     * A number associated with the whole building. The building number may have a numeric and an alphanumeric component, which are concatenated e.g. 2A, or alternatively will have a simple building number or a complex building number. The building number always relates to the whole building and not a sub-unit within it.
     *
     * @remarks
     * A complex building number may be one of the following:
     *   - Dual. Two number separated by '/' e.g. 63/64 = 63, 64
     *   - Sequence. An odd or even sequence of numbers with lower and upper bound separated by an underscore '_' e.g. `1_5` = 1,3,5 and `2_6` = 2,4,6
     *   - Range. A range of consecutive numbers with lower and upper bound separated by a dash '-' e.g. `63-66` = 63, 64, 56, 66
     * The building number never appears on a line by itself and can prepend Building Group, Primary Thoroughfare or Primary Locality.
     */
    buildingNumber: string;
    /**
     *   Full country names (ISO 3166)
     *
     * @remarks
     *
     */
    country: EcafAddressCountryEnum;
    /**
     *   3 letter country code (ISO 3166-1)
     *
     * @remarks
     *
     */
    countryIso: EcafAddressCountryIsoEnum;
    /**
     *  2 letter country code (ISO 3166-1)
     *
     * @remarks
     *
     */
    countryIso2: EcafAddressCountryIso2Enum;
    dataset: EcafAddressDatasetEnum;
    /**
     * The department or division within an organisation. If the department element exists, then the organisation must also exist.
     */
    department: string;
    /**
     * The unique identifier in the ECAF is the `ecaf_id`. This unique identifier allows each address in the ECAF to be uniquely identified. It can also be used as index once the data has been imported into a relational database. This is a numeric field that can store values from 0 to 2,147,483,647. It is represented as a number up to 10 digits long. All other fields in ECAF are alphanumeric.
     */
    ecafId: string;
    /**
     * The seven character Eircode has an A65 F4E2 format. The Eircode is a mandatory address element. The last line of a Postal Address will contain the Eircode, displayed with a space. e.g. `A65 F4E2`.
     *
     * @remarks
     *
     * The Eircode is always the last line of a Postal Address generated within the state, e.g. if an address has four lines then the Eircode will be on its own on Address Line 5. For inbound international mail the country name IRELAND should be appended as the last line of the Postal Address.
     */
    eircode: string;
    /**
     * Global unique internally generated identifier for an address
     */
    id: string;
    /**
     * Language represented by 2 letter ISO Code (639-1)
     *
     * @remarks
     *
     */
    language: EcafAddressLanguageEnum;
    /**
     * The latitude of the postcode (WGS84/ETRS89).
     *
     * @remarks
     *
     * Can be a positive or negative decimal. E.g. `51.5083983`.
     *
     * Returns an empty string if no location data is available.
     */
    latitude: any;
    /**
     * Address Line 1
     */
    line1: string;
    /**
     * Address Line 2
     */
    line2: string;
    /**
     * Address Line 3
     */
    line3: string;
    /**
     * Address Line 4
     */
    line4: string;
    /**
     * Address Line 5
     */
    line5: string;
    /**
     * Address Line 6
     */
    line6: string;
    /**
     * Address Line 7
     */
    line7: string;
    /**
     * Address Line 8
     */
    line8: string;
    /**
     * Address Line 9
     */
    line9: string;
    /**
     * The longitude of the postcode (WGS84/ETRS89).
     *
     * @remarks
     *
     * Can be a positive or negative decimal. E.g. -0.1283983
     *
     * Returns an empty string if no location data is available.
     */
    longitude: any;
    /**
     * Organisation name
     */
    organisation: string;
    /**
     * One of the 26 Counties in the Republic of Ireland. These counties are sub-national divisions used for the purposes of administrative, geographical and political demarcation. Post County is the County associated with the Post Town, not the geographic county in which the building is located. The Post County is normally used as part of the Postal Address with some exceptions e.g. Dublin Postal Districts where the Post County is not used and some Post Towns (e.g. Tipperary, Kildare, etc.) that have the same name as the Post County.
     */
    postCounty: string;
    /**
     * First locality elements which can refer to areas, districts, industrial estates, towns, etc.
     *
     * @remarks
     *
     * The primary locality refers to the specific place the address is.
     *
     * In urban areas, the primary locality can be required to distinguish between two thoroughfares of the same name in the same district or town. Industrial estates with named thoroughfares are also held as localities. In rural areas the primary locality is generally a townland name.
     */
    primaryLocality: string;
    /**
     * The name of the thoroughfare on which premises are located. It may appear on a line by itself or be appended to either a sub building or building number.
     *
     * @remarks
     *
     * Addresses with thoroughfares can sometimes have the thoroughfare excluded where a Building Group exists, such as a Retail Centre or Business Park, and the thoroughfare is not part of the Postal Address.
     */
    primaryThoroughfare: string;
    /**
     * Never present without a primary locality. The secondary locality has a wider geographic scope than the primary locality.
     *
     * @remarks
     *
     * It is the secondary locality therefore which differentiates addresses with the same primary locality name within the same county.
     *
     * Secondary localities are more likely to be required for rural addresses.
     *
     * Second locality elements which can refer to areas, districts, industrial estates, towns, etc
     *
     * The secondary locality helps identify where the primary locality is located.
     */
    secondaryLocality: string;
    /**
     * It is never present without a primary thoroughfare. The primary thoroughfare is dependent on the secondary thoroughfare and appears before the secondary thoroughfare in any address.
     *
     * @remarks
     *
     * Secondary thoroughfare are generally used to assist locating a primary thoroughfare.
     */
    secondaryThoroughfare: string;
    /**
     * The sub-building refers to an apartment, flat or unit within a building.
     */
    subBuildingName: string;
    /**
     * Also known as the Post Town.
     *
     * @remarks
     *
     * The name of the post town associated with the premises for postal delivery purposes. This includes Dublin Postal Districts "Dublin 1" to "Dublin 24".
     *
     * The post town is a significant element of the Postal Address, however it is not always populated in an address. The official post office guide, Eolaí an Phoist4, describes post towns in the following manner:
     *
     * "A provincial postal address may include the name of a town or village several miles distant, with which the addressee has little or no connection, and, in some places, especially if this residence happens to be near a county boundary, the name of the neighbouring county instead of the county in which he actually resides. The explanation is that the main mail despatches have to be sent for more detailed sub division to certain centres known as POST TOWNS, chosen because of their accessibility and convenience."
     */
    tertiaryLocality: string;
}
