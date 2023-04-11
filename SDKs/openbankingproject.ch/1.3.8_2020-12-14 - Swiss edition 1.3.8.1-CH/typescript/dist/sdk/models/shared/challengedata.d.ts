import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The format type of the OTP to be typed in. The admitted values are "characters" or "integer".
 */
export declare enum ChallengeDataOtpFormatEnum {
    Characters = "characters",
    Integer = "integer"
}
/**
 * It is contained in addition to the data element 'chosenScaMethod' if challenge data is needed for SCA.
 *
 * @remarks
 * In rare cases this attribute is also used in the context of the 'startAuthorisationWithPsuAuthentication' link.
 *
 */
export declare class ChallengeData extends SpeakeasyBase {
    /**
     * Additional explanation for the PSU to explain
     *
     * @remarks
     * e.g. fallback mechanism for the chosen SCA method.
     * The TPP is obliged to show this to the PSU.
     *
     */
    additionalInformation?: string;
    /**
     * A collection of strings as challenge data.
     */
    data?: string[];
    /**
     * PNG data (max. 512 kilobyte) to be displayed to the PSU,
     *
     * @remarks
     * Base64 encoding, cp. [RFC4648].
     * This attribute is used only, when PHOTO_OTP or CHIP_OTP
     * is the selected SCA method.
     *
     */
    image?: string;
    /**
     * A link where the ASPSP will provides the challenge image for the TPP.
     */
    imageLink?: string;
    /**
     * The format type of the OTP to be typed in. The admitted values are "characters" or "integer".
     */
    otpFormat?: ChallengeDataOtpFormatEnum;
    /**
     * The maximal length for the OTP to be typed in by the PSU.
     */
    otpMaxLength?: number;
}
