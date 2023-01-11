import { SpeakeasyBase } from "../../../internal/utils";
import { Timezone } from "./timezone";
export declare class Location extends SpeakeasyBase {
    address: string;
    addressComponents: Record<string, string>;
    city: string;
    country: string;
    countryCode: string;
    countryCode3: string;
    currencyCode: string;
    latitude: number;
    locationTags: string[];
    locationType: string;
    longitude: number;
    postalCode: string;
    state: string;
    timezone: Record<string, Timezone>;
}
