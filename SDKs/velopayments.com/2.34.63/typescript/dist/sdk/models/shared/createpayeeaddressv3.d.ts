import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreatePayeeAddressV3 extends SpeakeasyBase {
    city: string;
    /**
     * 2 letter ISO 3166-1 country code
     */
    country: string;
    countyOrProvince?: string;
    line1: string;
    line2?: string;
    line3?: string;
    line4?: string;
    zipOrPostcode?: string;
}
