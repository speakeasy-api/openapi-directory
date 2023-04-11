import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SubaccountAddRequestSubAccountEditEnum {
    AddAccount = "addAccount"
}
/**
 * add sub account request
 */
export declare class SubaccountAddRequest extends SpeakeasyBase {
    keyid: string;
    subAccountEdit: SubaccountAddRequestSubAccountEditEnum;
    subAccountLogin: string;
    subAccountPassword: string;
}
