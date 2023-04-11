import { SpeakeasyBase } from "../../../internal/utils";
import { MFADetails } from "./mfadetails";
import { UserType2Enum } from "./usertype2enum";
export declare class UserInfo extends SpeakeasyBase {
    mfaDetails?: MFADetails;
    userType?: UserType2Enum;
    /**
     * the id of the user
     */
    userId?: string;
}
