import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ContactResultTypesEnum {
    Billing = "billing",
    Company = "company",
    Executive = "executive",
    Online = "online"
}
export declare class ContactResult extends SpeakeasyBase {
    created: number;
    email: string;
    faxNumber: string;
    firstName?: string;
    groupId: string;
    id: string;
    lastName?: string;
    modified: number;
    phoneNumber: string;
    primaryContact: boolean;
    title: string;
    types: ContactResultTypesEnum[];
    version: string;
}
