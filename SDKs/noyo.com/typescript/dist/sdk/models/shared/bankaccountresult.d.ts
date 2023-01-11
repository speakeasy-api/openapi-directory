import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BankAccountResultStatusEnum {
    Created = "created",
    Wiped = "wiped"
}
export declare class BankAccountResult extends SpeakeasyBase {
    accountNumber: string;
    applicationId: string;
    bankName: string;
    created: number;
    id: string;
    isChecking: boolean;
    modified: number;
    routingNumber: string;
    status: BankAccountResultStatusEnum;
    version: string;
}
