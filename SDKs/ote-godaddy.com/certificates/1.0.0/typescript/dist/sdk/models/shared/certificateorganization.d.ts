import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateAddress } from "./certificateaddress";
import { JurisdictionOfIncorporation } from "./jurisdictionofincorporation";
export declare class CertificateOrganization extends SpeakeasyBase {
    address: CertificateAddress;
    /**
     * Only for EVSSL. The DBA(does business as) name for the organization.
     */
    assumedName?: string;
    jurisdictionOfIncorporation?: JurisdictionOfIncorporation;
    /**
     * Name of organization that owns common name
     */
    name: string;
    /**
     * Phone number for organization
     */
    phone: string;
    /**
     * Only for EVSSL.
     */
    registrationAgent?: string;
    /**
     * Only for EVSSL.
     */
    registrationNumber?: string;
}
