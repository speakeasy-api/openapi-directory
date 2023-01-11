import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AgentContactEditRequestTypesEnum {
    Billing = "billing",
    Company = "company",
    Executive = "executive",
    Online = "online"
}
export declare class AgentContactEditRequest extends SpeakeasyBase {
    email?: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    title?: string;
    types?: AgentContactEditRequestTypesEnum[];
}
