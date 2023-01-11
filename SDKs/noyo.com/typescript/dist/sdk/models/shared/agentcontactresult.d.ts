import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AgentContactResultTypesEnum {
    Billing = "billing",
    Company = "company",
    Executive = "executive",
    Online = "online"
}
export declare class AgentContactResult extends SpeakeasyBase {
    agentId: string;
    created: number;
    email: string;
    firstName: string;
    id: string;
    lastName: string;
    modified: number;
    phoneNumber?: string;
    title: string;
    types: AgentContactResultTypesEnum[];
    version: string;
}
