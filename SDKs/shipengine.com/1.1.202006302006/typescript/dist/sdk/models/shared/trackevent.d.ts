import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A track event
**/
export declare class TrackEvent extends SpeakeasyBase {
    carrierOccurredAt?: Date;
    cityLocality: string;
    companyName?: string;
    countryCode?: string;
    description?: string;
    eventCode?: string;
    latitude?: number;
    longitude?: number;
    occurredAt: Date;
    postalCode: string;
    signer?: string;
    stateProvince: string;
}
