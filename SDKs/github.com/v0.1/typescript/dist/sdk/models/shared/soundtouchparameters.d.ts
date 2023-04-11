import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Media stream to be altered, incoming or outgoing
 */
export declare enum SoundTouchParametersAudioDirectionEnum {
    In = "in",
    Out = "out"
}
/**
 * POST parameters
 */
export declare class SoundTouchParameters extends SpeakeasyBase {
    /**
     * Media stream to be altered, incoming or outgoing
     */
    audioDirection?: SoundTouchParametersAudioDirectionEnum;
    /**
     * Unique identifier of the call to send DTMF to
     */
    callUUID: string;
    /**
     * Adjust the pitch
     */
    pitch?: number;
    /**
     * Adjust the pitch in octaves
     */
    pitchOctaves?: number;
    /**
     * Adjust the pitch in semitones
     */
    pitchSemiTones?: number;
    /**
     * Adjust the rate
     */
    rate?: number;
    /**
     * Adjust the tempo
     */
    tempo?: number;
}
