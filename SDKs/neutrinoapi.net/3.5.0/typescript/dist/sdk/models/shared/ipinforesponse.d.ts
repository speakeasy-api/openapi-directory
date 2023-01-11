import { SpeakeasyBase } from "../../../internal/utils";
import { Timezone } from "./timezone";
export declare class IpInfoResponse extends SpeakeasyBase {
    city: string;
    continentCode: string;
    country: string;
    countryCode: string;
    countryCode3: string;
    currencyCode: string;
    hostDomain: string;
    hostname: string;
    ip: string;
    isBogon: boolean;
    isV4Mapped: boolean;
    isV6: boolean;
    latitude: number;
    longitude: number;
    region: string;
    timezone: Record<string, Timezone>;
    valid: boolean;
}
