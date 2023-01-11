import { SpeakeasyBase } from "../../../internal/utils";
import { AgencyDetails } from "./agencydetails";
import { SplitCommissionDetails } from "./splitcommissiondetails";
import { GeneralAgencyDetails } from "./generalagencydetails";
/**
 * Details about the agent
**/
export declare class AgentEditRequestAgentDetails extends SpeakeasyBase {
    firstName?: string;
    lastName?: string;
    licenseNumber?: string;
    nationalProducerNumber?: string;
    taxIdNumber?: string;
}
export declare class AgentEditRequest extends SpeakeasyBase {
    agencyDetails?: AgencyDetails;
    agentDetails?: AgentEditRequestAgentDetails;
    commissionDetails?: SplitCommissionDetails[];
    generalAgencyDetails?: GeneralAgencyDetails;
    licenseNumber?: string;
    signatureDate?: Date;
}
