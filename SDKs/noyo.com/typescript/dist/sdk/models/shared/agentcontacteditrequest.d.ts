import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AgentContactEditRequestTypesEnum {
    Billing = "billing",
    Company = "company",
    Executive = "executive",
    Online = "online"
}
export declare class AgentContactEditRequest extends SpeakeasyBase {
    /**
     * Work email address of the agent contact
     */
    email?: string;
    /**
     * First name of the agent contact
     */
    firstName?: string;
    /**
     * Last name of the agent contact
     */
    lastName?: string;
    /**
     * Work phone number of the agent contact in E.164 format
     */
    phoneNumber?: string;
    /**
     * Job title of the agent contact
     */
    title?: string;
    /**
     * List of contact types for the agent contact
     */
    types?: AgentContactEditRequestTypesEnum[];
}
