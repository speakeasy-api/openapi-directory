import { SpeakeasyBase } from "../../../internal/utils";
import { AgencyDetails } from "./agencydetails";
import { SplitCommissionDetails } from "./splitcommissiondetails";
import { GeneralAgencyDetails } from "./generalagencydetails";
/**
 * Details about the agent
**/
export declare class AgentResultAgentDetails extends SpeakeasyBase {
    firstName?: string;
    lastName?: string;
    licenseNumber?: string;
    nationalProducerNumber?: string;
    taxIdNumber?: string;
}
export declare class AgentResult extends SpeakeasyBase {
    agencyDetails: AgencyDetails;
    agentDetails: AgentResultAgentDetails;
    commissionDetails: SplitCommissionDetails[];
    created: number;
    generalAgencyDetails: GeneralAgencyDetails;
    id: string;
    licenseNumber: string;
    modified: number;
    signatureDate: Date;
    version: string;
}
