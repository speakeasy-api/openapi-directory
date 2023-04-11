import { SpeakeasyBase } from "../../../internal/utils";
import { MFATypeEnum } from "./mfatypeenum";
export declare class MFADetails extends SpeakeasyBase {
    /**
     * The type of the MFA device
     */
    mfaType?: MFATypeEnum;
    /**
     * true if the user has used the MFA device for login
     */
    verified?: boolean;
}
