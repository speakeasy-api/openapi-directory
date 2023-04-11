import { SpeakeasyBase } from "../../../internal/utils";
import { AgencyDetails } from "./agencydetails";
import { GeneralAgencyDetails } from "./generalagencydetails";
import { SplitCommissionDetails } from "./splitcommissiondetails";
/**
 * Details about the agent
 */
export declare class AgentCreateRequestAgentDetails extends SpeakeasyBase {
    /**
     * The first name of the agent
     */
    firstName?: string;
    /**
     * The last name of the agent
     */
    lastName?: string;
    /**
     * The license number for the agent
     */
    licenseNumber?: string;
    /**
     * The national producer number for the agent
     */
    nationalProducerNumber?: string;
    /**
     * The tax ID number for the agent
     */
    taxIdNumber?: string;
}
export declare class AgentCreateRequest extends SpeakeasyBase {
    agencyDetails?: AgencyDetails;
    /**
     * Details about the agent
     */
    agentDetails?: AgentCreateRequestAgentDetails;
    /**
     * Details of the agent commission structure
     */
    commissionDetails?: SplitCommissionDetails[];
    generalAgencyDetails?: GeneralAgencyDetails;
    /**
     * License number of the agent
     */
    licenseNumber?: string;
    /**
     * The signature date for the agent on the application
     */
    signatureDate?: Date;
}
