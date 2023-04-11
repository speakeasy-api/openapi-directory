import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message
 */
export declare enum SoundTouchResponseMessageEnum {
    SoundTouchExecuted = "SoundTouch Executed",
    CallUUIDParameterMissing = "CallUUID Parameter Missing",
    AudioDirectionParameterMustBeInOrOut = "AudioDirection Parameter Must be 'in' or 'out'",
    PitchSemiTonesParameterMustBeFloat = "PitchSemiTones Parameter must be float",
    PitchSemiTonesParameterMustBeBetween14And14 = "PitchSemiTones Parameter must be between -14 and 14",
    PitchOctavesParameterMustBeFloat = "PitchOctaves Parameter must be float",
    PitchOctavesParameterMustBeBetween1And1 = "PitchOctaves Parameter must be between -1 and 1",
    PitchParameterMustBeFloat = "Pitch Parameter must be float",
    PitchParameterMustBeGreaterThan0 = "Pitch Parameter must be > 0",
    RateParameterMustBeFloat = "Rate Parameter must be float",
    RateParameterMustBeGreaterThan0 = "Rate Parameter must be > 0",
    TempoParameterMustBeFloat = "Tempo Parameter must be float",
    TempoParameterMustBeGreaterThan0 = "Tempo Parameter must be > 0",
    SoundTouchFailedCallNotFound = "SoundTouch Failed -- Call not found",
    SoundTouchFailed = "SoundTouch Failed"
}
/**
 * Response
 */
export declare class SoundTouchResponse extends SpeakeasyBase {
    /**
     * Response message
     */
    message: SoundTouchResponseMessageEnum;
    /**
     * Whether the request was successful or not
     */
    success: boolean;
}
