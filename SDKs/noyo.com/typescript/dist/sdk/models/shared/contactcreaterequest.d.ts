import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ContactCreateRequestTypesEnum {
    Billing = "billing",
    Company = "company",
    Executive = "executive",
    Online = "online"
}
export declare class ContactCreateRequest extends SpeakeasyBase {
    email: string;
    faxNumber?: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    primaryContact?: boolean;
    title?: string;
    types: ContactCreateRequestTypesEnum[];
}
