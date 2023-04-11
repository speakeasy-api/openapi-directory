import { SpeakeasyBase } from "../../../internal/utils";
import { PEMCertificates } from "./pemcertificates";
/**
 * Certificate retrieved
 */
export declare class CertificateBundle extends SpeakeasyBase {
    pems: PEMCertificates;
    /**
     * Serial number of certificate requested
     */
    serialNumber: string;
}
