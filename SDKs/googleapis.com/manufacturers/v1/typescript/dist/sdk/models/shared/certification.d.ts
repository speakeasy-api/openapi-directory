import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Description of a certification.
 */
export declare class Certification extends SpeakeasyBase {
    /**
     * Required. Name of the certification body.
     */
    authority?: string;
    /**
     * Optional. A URL link to the certification.
     */
    link?: string;
    /**
     * Optional. A URL link to the certification logo.
     */
    logo?: string;
    /**
     * Required. Name of the certification.
     */
    name?: string;
    /**
     * Optional. The expiration date (UTC).
     */
    validUntil?: string;
    /**
     * Required. A custom value of the certification.
     */
    value?: string;
}
