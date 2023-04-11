import { SpeakeasyBase } from "../../../internal/utils";
/**
 * CertificateTemplate (v3 Extension in X.509).
 */
export declare class CertificateTemplate extends SpeakeasyBase {
    /**
     * The template id of the template. Example: "1.3.6.1.4.1.311.21.8.15608621.11768144.5720724.16068415.6889630.81.2472537.7784047".
     */
    id?: string;
    /**
     * The Major version of the template. Example: 100.
     */
    majorVersion?: number;
    /**
     * The minor version of the template. Example: 12.
     */
    minorVersion?: number;
}
