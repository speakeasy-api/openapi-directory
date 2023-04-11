import { SpeakeasyBase } from "../../../internal/utils";
import { SettingsUpdateEnumStatusEnum } from "./settingsupdateenumstatusenum";
export declare class SupersimV1SettingsUpdate extends SpeakeasyBase {
    /**
     * The time, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, when the update successfully completed and the new settings were applied to the SIM.
     */
    dateCompleted?: Date;
    /**
     * The date that this Settings Update was created, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date that this Settings Update was updated, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The [ICCID](https://en.wikipedia.org/wiki/SIM_card#ICCID) associated with the SIM.
     */
    iccid?: string;
    /**
     * Array containing the different Settings Packages that will be applied to the SIM after the update completes. Each object within the array indicates the name and the version of the Settings Package that will be on the SIM if the update is successful.
     */
    packages?: any[];
    /**
     * The unique identifier of this Settings Update.
     */
    sid?: string;
    /**
     * The SID of the Super SIM to which this Settings Update was applied.
     */
    simSid?: string;
    status?: SettingsUpdateEnumStatusEnum;
}
