import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PhoneNumberTypeEnum {
    Home = "home",
    Work = "work",
    Mobile = "mobile",
    HomeFax = "home-fax",
    WorkFax = "work-fax",
    Other = "other"
}
export declare class PhoneNumber extends SpeakeasyBase {
    primary: boolean;
    type: PhoneNumberTypeEnum;
    value: string;
}
