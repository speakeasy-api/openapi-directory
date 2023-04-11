import { SpeakeasyBase } from "../../../internal/utils";
export declare class Address extends SpeakeasyBase {
    buildingNumber?: string;
    /**
     * ISO 3166 ALPHA2 country code.
     */
    country: string;
    postCode?: string;
    streetName?: string;
    townName?: string;
}
