import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AgentContactResultTypesEnum {
    Billing = "billing",
    Company = "company",
    Executive = "executive",
    Online = "online"
}
/**
 * Successful Response - Returns the new Agent Contact
 */
export declare class AgentContactResult extends SpeakeasyBase {
    /**
     * Unique identifier of the agent in Noyo
     */
    agentId: string;
    /**
     * The date the record was created
     */
    created: number;
    /**
     * Work email address of the agent contact
     */
    email: string;
    /**
     * First name of the agent contact
     */
    firstName: string;
    /**
     * Unique identifier of the record in Noyo
     */
    id: string;
    /**
     * Last name of the agent contact
     */
    lastName: string;
    /**
     * The date the record was last updated
     */
    modified: number;
    /**
     * Work phone number of the agent contact in E.164 format
     */
    phoneNumber?: string;
    /**
     * Job title of the agent contact
     */
    title: string;
    /**
     * List of contact types for the agent contact
     */
    types: AgentContactResultTypesEnum[];
    /**
     * Current version of the record
     */
    version: string;
}
