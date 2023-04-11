import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateAddress } from "./certificateaddress";
export declare class CertificateOrganizationCreate extends SpeakeasyBase {
    address?: CertificateAddress;
    /**
     * Only for EVSSL. The DBA(does business as) name for the organization.
     */
    assumedName?: string;
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
