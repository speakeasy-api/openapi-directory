import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The group of relevant businesses where this infoType is commonly used
 */
export declare enum GooglePrivacyDlpV2InfoTypeCategoryIndustryCategoryEnum {
    IndustryUnspecified = "INDUSTRY_UNSPECIFIED",
    Finance = "FINANCE",
    Health = "HEALTH",
    Telecommunications = "TELECOMMUNICATIONS"
}
/**
 * The region or country that issued the ID or document represented by the infoType.
 */
export declare enum GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum {
    LocationUnspecified = "LOCATION_UNSPECIFIED",
    Global = "GLOBAL",
    Argentina = "ARGENTINA",
    Australia = "AUSTRALIA",
    Belgium = "BELGIUM",
    Brazil = "BRAZIL",
    Canada = "CANADA",
    Chile = "CHILE",
    China = "CHINA",
    Colombia = "COLOMBIA",
    Croatia = "CROATIA",
    Denmark = "DENMARK",
    France = "FRANCE",
    Finland = "FINLAND",
    Germany = "GERMANY",
    HongKong = "HONG_KONG",
    India = "INDIA",
    Indonesia = "INDONESIA",
    Ireland = "IRELAND",
    Israel = "ISRAEL",
    Italy = "ITALY",
    Japan = "JAPAN",
    Korea = "KOREA",
    Mexico = "MEXICO",
    NewZealand = "NEW_ZEALAND",
    TheNetherlands = "THE_NETHERLANDS",
    Norway = "NORWAY",
    Paraguay = "PARAGUAY",
    Peru = "PERU",
    Poland = "POLAND",
    Portugal = "PORTUGAL",
    Singapore = "SINGAPORE",
    SouthAfrica = "SOUTH_AFRICA",
    Spain = "SPAIN",
    Sweden = "SWEDEN",
    Taiwan = "TAIWAN",
    Thailand = "THAILAND",
    Turkey = "TURKEY",
    UnitedKingdom = "UNITED_KINGDOM",
    UnitedStates = "UNITED_STATES",
    Uruguay = "URUGUAY",
    Venezuela = "VENEZUELA",
    Internal = "INTERNAL"
}
/**
 * The class of identifiers where this infoType belongs
 */
export declare enum GooglePrivacyDlpV2InfoTypeCategoryTypeCategoryEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Pii = "PII",
    Spii = "SPII",
    Demographic = "DEMOGRAPHIC",
    Credential = "CREDENTIAL",
    GovernmentId = "GOVERNMENT_ID",
    Document = "DOCUMENT",
    ContextualInformation = "CONTEXTUAL_INFORMATION"
}
/**
 * Classification of infoTypes to organize them according to geographic location, industry, and data type.
 */
export declare class GooglePrivacyDlpV2InfoTypeCategory extends SpeakeasyBase {
    /**
     * The group of relevant businesses where this infoType is commonly used
     */
    industryCategory?: GooglePrivacyDlpV2InfoTypeCategoryIndustryCategoryEnum;
    /**
     * The region or country that issued the ID or document represented by the infoType.
     */
    locationCategory?: GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum;
    /**
     * The class of identifiers where this infoType belongs
     */
    typeCategory?: GooglePrivacyDlpV2InfoTypeCategoryTypeCategoryEnum;
}
