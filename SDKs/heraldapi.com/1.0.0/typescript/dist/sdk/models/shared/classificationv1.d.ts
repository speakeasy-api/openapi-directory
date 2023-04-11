import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An classification is a set of information for a specific industry, based on NAICs codes.
 */
export declare class ClassificationV1 extends SpeakeasyBase {
    /**
     * Description of the classification, using [NAICS Index Item](https://www.heraldapi.com/docs/naics) descriptions.
     */
    description?: string;
    /**
     * The classifications unique ID assigned by Herald, which should be used as the value for the risk parameter `rsk_b3jm_2017_naics_index` when classifying an applicant. Read more about [Herald Index Codes](https://www.heraldapi.com/docs/classifications#classifications-at-herald).
     */
    id?: string;
    /**
     * 6-digit code from [NAICS 2017](https://www.heraldapi.com/docs/naics) Edition
     */
    naics20176Digit?: number;
    /**
     * Description of the 6-digit code from [NAICS 2017](https://www.heraldapi.com/docs/naics) Edition
     */
    naics20176DigitDescription?: string;
}
