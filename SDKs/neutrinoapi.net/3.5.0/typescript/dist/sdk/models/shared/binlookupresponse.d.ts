import { SpeakeasyBase } from "../../../internal/utils";
export declare class BinLookupResponse extends SpeakeasyBase {
    cardBrand: string;
    cardCategory: string;
    cardType: string;
    country: string;
    countryCode: string;
    countryCode3: string;
    currencyCode: string;
    ipBlocklisted: boolean;
    ipBlocklists: string[];
    ipCity: string;
    ipCountry: string;
    ipCountryCode: string;
    ipCountryCode3: string;
    ipMatchesBin: boolean;
    ipRegion: string;
    isCommercial: boolean;
    isPrepaid: boolean;
    issuer: string;
    issuerPhone: string;
    issuerWebsite: string;
    valid: boolean;
}
