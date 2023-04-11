import { SpeakeasyBase } from "../../../internal/utils";
import { AgencyDetails } from "./agencydetails";
import { GeneralAgencyDetails } from "./generalagencydetails";
import { SplitCommissionDetails } from "./splitcommissiondetails";
/**
 * Details about the agent
 */
export declare class AgentResultAgentDetails extends SpeakeasyBase {
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
/**
 * Successful Response - Returns a single Agent
 */
export declare class AgentResult extends SpeakeasyBase {
    agencyDetails: AgencyDetails;
    /**
     * Details about the agent
     */
    agentDetails: AgentResultAgentDetails;
    /**
     * Details of the agent commission structure
     */
    commissionDetails: SplitCommissionDetails[];
    /**
     * The date the record was created
     */
    created: number;
    generalAgencyDetails: GeneralAgencyDetails;
    /**
     * Unique identifier of the record in Noyo
     */
    id: string;
    /**
     * License number of the agent
     */
    licenseNumber: string;
    /**
     * The date the record was last updated
     */
    modified: number;
    /**
     * The signature date for the agent on the application
     */
    signatureDate: Date;
    /**
     * Current version of the record
     */
    version: string;
}
