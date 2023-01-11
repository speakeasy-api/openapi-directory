import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ContactEditRequestTypesEnum {
    Billing = "billing",
    Company = "company",
    Executive = "executive",
    Online = "online"
}
export declare class ContactEditRequest extends SpeakeasyBase {
    email?: string;
    faxNumber?: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    primaryContact?: boolean;
    title?: string;
    types?: ContactEditRequestTypesEnum[];
}
