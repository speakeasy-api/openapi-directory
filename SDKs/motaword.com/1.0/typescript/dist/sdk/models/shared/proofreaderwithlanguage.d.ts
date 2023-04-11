import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProofreaderWithLanguage extends SpeakeasyBase {
    /**
     * full name of the proofreader
     */
    fullName?: string;
    /**
     * proofreader id
     */
    id?: number;
    /**
     * language code (i.e en-US)
     */
    language?: string;
    /**
     * link to the vendor that can be only used in motaword admin application
     */
    vendorLink?: string;
}
