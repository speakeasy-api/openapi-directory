import { SpeakeasyBase } from "../../../internal/utils";
export declare class PEMCertificates extends SpeakeasyBase {
    /**
     * End entity certificate in PEM format
     */
    certificate: string;
    /**
     * CA Cross Intermediate certificate in PEM format
     */
    cross?: string;
    /**
     * CA Signing Intermediate certificate in PEM format
     */
    intermediate?: string;
    /**
     * CA Root certificate in PEM format
     */
    root?: string;
}
