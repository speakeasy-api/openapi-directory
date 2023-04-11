import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Can be one of:
 *
 * @remarks
 *
 * - `R` Residential
 * - `C` Commercial
 * - `B` Both
 * - `U` Unknown
 */
export declare enum EcadAddressBuildingUseEnum {
    R = "R",
    C = "C",
    B = "B",
    U = "U"
}
/**
 *   Full country names (ISO 3166)
 *
 * @remarks
 *
 */
export declare enum EcadAddressCountryEnum {
    Ireland = "Ireland"
}
/**
 *   3 letter country code (ISO 3166-1)
 *
 * @remarks
 *
 */
export declare enum EcadAddressCountryIsoEnum {
    Irl = "IRL"
}
/**
 *  2 letter country code (ISO 3166-1)
 *
 * @remarks
 *
 */
export declare enum EcadAddressCountryIso2Enum {
    Ie = "IE"
}
export declare enum EcadAddressDatasetEnum {
    Ecad = "ecad"
}
/**
 * A Yes/No field, indicating whether or not the building is a holiday home.
 */
export declare enum EcadAddressHolidayHomeEnum {
    N = "N",
    Y = "Y",
    Unknown = ""
}
/**
 * Language represented by 2 letter ISO Code (639-1)
 *
 * @remarks
 *
 */
export declare enum EcadAddressLanguageEnum {
    En = "en",
    Ga = "ga"
}
/**
 * A Yes/No field, indicating whether the organisation is vacant.
 */
export declare enum EcadAddressOrgVacantEnum {
    Y = "Y",
    N = "N",
    Unknown = ""
}
/**
 * A Yes/No field, indicating whether or not the building is under construction.
 */
export declare enum EcadAddressUnderConstructionEnum {
    N = "N",
    Y = "Y",
    Unknown = ""
}
/**
 * A Yes/No field, indicating whether the building is vacant.
 */
export declare enum EcadAddressVacantEnum {
    Y = "Y",
    N = "N",
    Unknown = ""
}
/**
 * The ECAD contains additional data for each ECAF address.
 */
export declare class EcadAddress extends SpeakeasyBase {
    /**
     * Address Point ID
     */
    addressPointId: string;
    /**
     * The address reference is the An Post GeoDirectory address reference identifier used by the Universal Service Provider.
     */
    addressReference: string;
    /**
     * Addresses points can assume one of the following values:
     *
     * @remarks
     *
     * - Residential Address Point. This type of address point has one residential addresses associated with it.
     * - Non-Residential Address Point. This type of address point has one or more non-residential address (business, club or other organisation) associated with it.
     * - Mixed Address Point. This is a special case where the residential and non residential addresses in the building are essentially the same address. The typical example is a farm house on an active farm. It is important to note that this is a special case. In general a building with both residential and non-residential addresses (e.g. an apartment over a shop) will receive two address points, one commercial and one residential, and hence two Eircodes.
     *
     * Buildings can contain multiple address points of type Residential and/or Non-Residential.
     */
    addressType: string;
    /**
     * The building type can assume one of the following values:
     *
     * @remarks
     *
     * - Single Occupancy Residential Building. This type of building contains one residential address.
     * - Multi Occupancy Residential Building. This type of building contains multiple residential addresses.
     * - Single Occupancy Non-Residential Building. This type of building contains one non-residential address (business, club or other organisation).
     * - Multi Occupancy Non-Residential Building. This type of building contains multiple non-residential addresses (business, club or other organisation).
     * - Multi Occupancy Mixed Use Building. This type of building contains multiple residential and non- residential addresses.
     *
     * Buildings can also have a more specific address types such as a Hospital, School, Shopping Centre, etc.
     */
    buildingAddressType: string;
    /**
     * A building group is a collection of buildings with a collective name, located on or near the same thoroughfare.
     */
    buildingGroup: string;
    /**
     * The building group type can be:
     *
     * @remarks
     *
     * - Residential Building Group. This type of building group contains buildings with residential addresses only.
     * - Non-Residential Building Group This type of building group contains buildings with non-residential addresses (business, club or other organisation) only.
     * - Mixed Building Group. This type of building group contains buildings with residential and non-residential addresses. Can also have a more specific address type such as a Hospital, School, Shopping Centre, etc.
     *
     * Building groups can also have a more specific address type such as a Hospital, School, Shopping Centre, etc.
     */
    buildingGroupAddressType: string;
    /**
     * Building Group ID
     */
    buildingGroupId: string;
    /**
     * Building ID
     */
    buildingId: string;
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
     * Describes the type of building, e.g. detached, semi-detached, bungalow.
     */
    buildingType: string;
    /**
     * Can be one of:
     *
     * @remarks
     *
     * - `R` Residential
     * - `C` Commercial
     * - `B` Both
     * - `U` Unknown
     */
    buildingUse: EcadAddressBuildingUseEnum;
    /**
     *   Full country names (ISO 3166)
     *
     * @remarks
     *
     */
    country: EcadAddressCountryEnum;
    /**
     *   3 letter country code (ISO 3166-1)
     *
     * @remarks
     *
     */
    countryIso: EcadAddressCountryIsoEnum;
    /**
     *  2 letter country code (ISO 3166-1)
     *
     * @remarks
     *
     */
    countryIso2: EcadAddressCountryIso2Enum;
    dataset: EcadAddressDatasetEnum;
    /**
     * Unique Identifier for Electoral Divisions 2017 data.
     *
     * @remarks
     *
     * Note that this field is subject to breaking changes if a new generation of government data IDs is released. Currently this uses 2017 IDs. Contact us to be notified ahead of his change.
     */
    dedId: string;
    /**
     * The department or division within an organisation. If the department element exists, then the organisation must also exist.
     */
    department: string;
    /**
     * Unique 10 digit ECAD ID
     */
    ecadId?: string;
    /**
     * The seven character Eircode has an A65 F4E2 format. The Eircode is a mandatory address element. The last line of a Postal Address will contain the Eircode, displayed with a space. e.g. `A65 F4E2`.
     *
     * @remarks
     *
     * The Eircode is always the last line of a Postal Address generated within the state, e.g. if an address has four lines then the Eircode will be on its own on Address Line 5. For inbound international mail the country name IRELAND should be appended as the last line of the Postal Address.
     */
    eircode: string;
    /**
     * Gaeltact refers to a district where the Irish government recognises that the Irish language is the predominant language.
     *
     * @remarks
     *
     * Returns `true` if address is in a Gaeltacht area and `false` if not.
     */
    gaeltacht: boolean;
    /**
     * Unique Identifier for the 7 Gaeltacht areas 2017 data.
     *
     * @remarks
     *
     * Note that this field is subject to breaking changes if a new generation of government data IDs is released. Currently this uses 2017 IDs. Contact us to be notified ahead of his change.
     */
    gaeltachtId: string;
    /**
     * A Yes/No field, indicating whether or not the building is a holiday home.
     */
    holidayHome: EcadAddressHolidayHomeEnum;
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
    language: EcadAddressLanguageEnum;
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
     * Name of local authority
     */
    localAuthority: string;
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
     * Name of the NACE Category
     */
    naceCategory: string;
    /**
     * The NACE Code for the Category.
     */
    naceCode: string;
    /**
     * NUA means "non-unique address".
     *
     * @remarks
     *
     * The NUA field contains `true` when the address is a non-unique address, and `false` when it is a unique address.
     *
     * Ireland has a very high level of non-unique addresses (NUA), i.e. the address does not contain a unique building number or name. Approximately 35% of all Irish addresses are non-unique which equates to 600,000 addresses.
     *
     * The typical example of NUA addressing is where every address in a townland is the same. The way that post is delivered is by local knowledge of postal delivery personnel of which addressee lives in which house.
     *
     * N.B. For a NUA address, it is impossible to match to a unique record in the ECAD and assign an Eircode.
     */
    nua: boolean;
    /**
     * A Yes/No field, indicating whether the organisation is vacant.
     */
    orgVacant: EcadAddressOrgVacantEnum;
    /**
     * Organisation name
     */
    organisation: string;
    /**
     * Organisation ID
     */
    organisationId: string;
    /**
     * One of the 26 Counties in the Republic of Ireland. These counties are sub-national divisions used for the purposes of administrative, geographical and political demarcation. Post County is the County associated with the Post Town, not the geographic county in which the building is located. The Post County is normally used as part of the Postal Address with some exceptions e.g. Dublin Postal Districts where the Post County is not used and some Post Towns (e.g. Tipperary, Kildare, etc.) that have the same name as the Post County.
     */
    postCounty: string;
    /**
     * Post County ID
     */
    postCountyId: string;
    /**
     * The post town is a significant element of the Postal Address, however it is not always populated in an address. The official post office guide, Eolaí an Phoist1, describes post towns in the following manner:
     *
     * @remarks
     *
     * "A provincial postal address may include the name of a town or village several miles distant, with which the addressee has little or no connection, and, in some places, especially if this residence happens to be near a county boundary, the name of the neighbouring county instead of the county in which he actually resides. The explanation is that the main mail despatches have to be sent for more detailed sub division to certain centres known as post towns, chosen because of their accessibility and convenience."
     */
    postTown: string;
    /**
     * Post Town ID
     */
    postTownId: string;
    /**
     * An Post sorting information.
     */
    postaimPresort152: string;
    /**
     * An Post sorting information.
     */
    postaimPresort61: string;
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
     * The locality type can be:
     *
     * @remarks
     *   - Rural Locality. This is generally a townland.
     *   - Industrial Estate. Industrial Estate, Industrial Park, Business Campus, etc.
     *   - Shopping District. Shopping Centre.
     *   - Housing Estate. Residential Housing Estate.
     *   - Village. Based on Census 2011 population < 1,500.
     *   - Town. Based on Census 2011 population > 1,500.
     *   - Urban Area. Wholly within a village/town/city e.g. Rathmines.
     *   - Suburban Locality. This is an area that is both rural and urban, as it is both a townland, and also an area name applied to houses in a town, as the town has extended partially into the townland.
     *
     * Where the locality is also the post town, the type can be:
     *   - Village. Based on Census 2011 population < 1,500
     *   - Town. Based on Census 2011 population > 1,500
     *   - Postal District. Dublin 1 to 24
     *   - City. Dublin, Cork, Limerick, Galway or Waterford
     */
    primaryLocalityAddressType: string;
    /**
     * Primary Locality ID
     */
    primaryLocalityId: string;
    /**
     * The name of the thoroughfare on which premises are located. It may appear on a line by itself or be appended to either a sub building or building number.
     *
     * @remarks
     *
     * Addresses with thoroughfares can sometimes have the thoroughfare excluded where a Building Group exists, such as a Retail Centre or Business Park, and the thoroughfare is not part of the Postal Address.
     */
    primaryThoroughfare: string;
    /**
     * Primary Thoroughfare ID
     */
    primaryThoroughfareId: string;
    /**
     * An Post publicity post zone information.
     */
    publicityPostZone: string;
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
     * The locality type can be:
     *
     * @remarks
     *   - Rural Locality. This is generally a townland.
     *   - Industrial Estate. Industrial Estate, Industrial Park, Business Campus, etc.
     *   - Shopping District. Shopping Centre.
     *   - Housing Estate. Residential Housing Estate.
     *   - Village. Based on Census 2011 population < 1,500.
     *   - Town. Based on Census 2011 population > 1,500.
     *   - Urban Area. Wholly within a village/town/city e.g. Rathmines.
     *   - Suburban Locality. This is an area that is both rural and urban, as it is both a townland, and also an area name applied to houses in a town, as the town has extended partially into the townland.
     *
     * Where the locality is also the post town, the type can be:
     *   - Village. Based on Census 2011 population < 1,500
     *   - Town. Based on Census 2011 population > 1,500
     *   - Postal District. Dublin 1 to 24
     *   - City. Dublin, Cork, Limerick, Galway or Waterford
     */
    secondaryLocalityAddressType: string;
    /**
     * Secondary Locality ID
     */
    secondaryLocalityId: string;
    /**
     * It is never present without a primary thoroughfare. The primary thoroughfare is dependent on the secondary thoroughfare and appears before the secondary thoroughfare in any address.
     *
     * @remarks
     *
     * Secondary thoroughfare are generally used to assist locating a primary thoroughfare.
     */
    secondaryThoroughfare: string;
    /**
     * Secondary Thoroughfare ID
     */
    secondaryThoroughfareId: string;
    /**
     * Unique Identifier for the Small Area 2017 data.
     *
     * @remarks
     *
     * Note that this field is subject to breaking changes if a new generation of government data IDs is released. Currently this uses 2017 IDs. Contact us to be notified ahead of his change.
     */
    smallAreaId: string;
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
    /**
     * Unique Identifier for townland 2017 data.
     *
     * @remarks
     *
     * Note that this field is subject to breaking changes if a new generation of government data IDs is released. Currently this uses 2017 IDs. Contact us to be notified ahead of his change.
     */
    townlandId: string;
    /**
     * A Yes/No field, indicating whether or not the building is under construction.
     */
    underConstruction: EcadAddressUnderConstructionEnum;
    /**
     * A Yes/No field, indicating whether the building is vacant.
     */
    vacant: EcadAddressVacantEnum;
}
