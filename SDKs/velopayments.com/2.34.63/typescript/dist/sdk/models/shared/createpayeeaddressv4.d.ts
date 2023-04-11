import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreatePayeeAddressV4 extends SpeakeasyBase {
    city: string;
    /**
     * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
     */
    country: string;
    countyOrProvince?: string;
    line1: string;
    line2?: string;
    line3?: string;
    line4?: string;
    zipOrPostcode?: string;
}
