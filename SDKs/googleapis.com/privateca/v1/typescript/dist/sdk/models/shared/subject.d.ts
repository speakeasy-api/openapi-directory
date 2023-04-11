import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Subject describes parts of a distinguished name that, in turn, describes the subject of the certificate.
 */
export declare class Subject extends SpeakeasyBase {
    /**
     * The "common name" of the subject.
     */
    commonName?: string;
    /**
     * The country code of the subject.
     */
    countryCode?: string;
    /**
     * The locality or city of the subject.
     */
    locality?: string;
    /**
     * The organization of the subject.
     */
    organization?: string;
    /**
     * The organizational_unit of the subject.
     */
    organizationalUnit?: string;
    /**
     * The postal code of the subject.
     */
    postalCode?: string;
    /**
     * The province, territory, or regional state of the subject.
     */
    province?: string;
    /**
     * The street address of the subject.
     */
    streetAddress?: string;
}
