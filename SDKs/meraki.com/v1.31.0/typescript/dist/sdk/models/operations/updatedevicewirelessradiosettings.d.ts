import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Sets a manual channel for 5 GHz. Can be '36', '40', '44', '48', '52', '56', '60', '64', '100', '104', '108', '112', '116', '120', '124', '128', '132', '136', '140', '144', '149', '153', '157', '161', '165', '169', '173' or '177' or null for using auto channel.
 */
export declare enum UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelEnum {
    ThirtySix = "36",
    Forty = "40",
    FortyFour = "44",
    FortyEight = "48",
    FiftyTwo = "52",
    FiftySix = "56",
    Sixty = "60",
    SixtyFour = "64",
    OneHundred = "100",
    OneHundredAndFour = "104",
    OneHundredAndEight = "108",
    OneHundredAndTwelve = "112",
    OneHundredAndSixteen = "116",
    OneHundredAndTwenty = "120",
    OneHundredAndTwentyFour = "124",
    OneHundredAndTwentyEight = "128",
    OneHundredAndThirtyTwo = "132",
    OneHundredAndThirtySix = "136",
    OneHundredAndForty = "140",
    OneHundredAndFortyFour = "144",
    OneHundredAndFortyNine = "149",
    OneHundredAndFiftyThree = "153",
    OneHundredAndFiftySeven = "157",
    OneHundredAndSixtyOne = "161",
    OneHundredAndSixtyFive = "165",
    OneHundredAndSixtyNine = "169",
    OneHundredAndSeventyThree = "173",
    OneHundredAndSeventySeven = "177"
}
/**
 * Sets a manual channel for 5 GHz. Can be '0', '20', '40', '80' or '160' or null for using auto channel width.
 */
export declare enum UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelWidthEnum {
    Zero = "0",
    Twenty = "20",
    Forty = "40",
    Eighty = "80",
    OneHundredAndSixty = "160"
}
/**
 * Manual radio settings for 5 GHz.
 */
export declare class UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings extends SpeakeasyBase {
    /**
     * Sets a manual channel for 5 GHz. Can be '36', '40', '44', '48', '52', '56', '60', '64', '100', '104', '108', '112', '116', '120', '124', '128', '132', '136', '140', '144', '149', '153', '157', '161', '165', '169', '173' or '177' or null for using auto channel.
     */
    channel?: UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelEnum;
    /**
     * Sets a manual channel for 5 GHz. Can be '0', '20', '40', '80' or '160' or null for using auto channel width.
     */
    channelWidth?: UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelWidthEnum;
    /**
     * Set a manual target power for 5 GHz. Can be between '8' or '30' or null for using auto power range.
     */
    targetPower?: number;
}
/**
 * Sets a manual channel for 2.4 GHz. Can be '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13' or '14' or null for using auto channel.
 */
export declare enum UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettingsChannelEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8",
    Nine = "9",
    Ten = "10",
    Eleven = "11",
    Twelve = "12",
    Thirteen = "13",
    Fourteen = "14"
}
/**
 * Manual radio settings for 2.4 GHz.
 */
export declare class UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings extends SpeakeasyBase {
    /**
     * Sets a manual channel for 2.4 GHz. Can be '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13' or '14' or null for using auto channel.
     */
    channel?: UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettingsChannelEnum;
    /**
     * Set a manual target power for 2.4 GHz. Can be between '5' or '30' or null for using auto power range.
     */
    targetPower?: number;
}
export declare class UpdateDeviceWirelessRadioSettingsRequestBody extends SpeakeasyBase {
    /**
     * Manual radio settings for 5 GHz.
     */
    fiveGhzSettings?: UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings;
    /**
     * The ID of an RF profile to assign to the device. If the value of this parameter is null, the appropriate basic RF profile (indoor or outdoor) will be assigned to the device. Assigning an RF profile will clear ALL manually configured overrides on the device (channel width, channel, power).
     */
    rfProfileId?: string;
    /**
     * Manual radio settings for 2.4 GHz.
     */
    twoFourGhzSettings?: UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings;
}
export declare class UpdateDeviceWirelessRadioSettingsRequest extends SpeakeasyBase {
    requestBody?: UpdateDeviceWirelessRadioSettingsRequestBody;
    serial: string;
}
export declare class UpdateDeviceWirelessRadioSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateDeviceWirelessRadioSettings200ApplicationJSONObject?: Record<string, any>;
}
