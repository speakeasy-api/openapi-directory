import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AgentContactCreateRequestTypesEnum {
    Billing = "billing",
    Company = "company",
    Executive = "executive",
    Online = "online"
}
export declare class AgentContactCreateRequest extends SpeakeasyBase {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    title: string;
    types: AgentContactCreateRequestTypesEnum[];
}
