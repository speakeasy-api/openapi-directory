import { SpeakeasyBase } from "../../../internal/utils";
import { AgencyDetails } from "./agencydetails";
import { SplitCommissionDetails } from "./splitcommissiondetails";
import { GeneralAgencyDetails } from "./generalagencydetails";
/**
 * Details about the agent
**/
export declare class AgentCreateRequestAgentDetails extends SpeakeasyBase {
    firstName?: string;
    lastName?: string;
    licenseNumber?: string;
    nationalProducerNumber?: string;
    taxIdNumber?: string;
}
export declare class AgentCreateRequest extends SpeakeasyBase {
    agencyDetails?: AgencyDetails;
    agentDetails?: AgentCreateRequestAgentDetails;
    commissionDetails?: SplitCommissionDetails[];
    generalAgencyDetails?: GeneralAgencyDetails;
    licenseNumber?: string;
    signatureDate?: Date;
}
