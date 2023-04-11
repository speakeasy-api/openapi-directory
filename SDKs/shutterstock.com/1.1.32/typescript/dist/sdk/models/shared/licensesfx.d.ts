import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LicenseSFXAudioLayoutEnum {
    Ambisonic = "ambisonic",
    Five1 = "5.1",
    Stereo = "stereo"
}
export declare enum LicenseSFXFormatEnum {
    Wav = "wav",
    Mp3 = "mp3"
}
export declare class LicenseSFX extends SpeakeasyBase {
    audioLayout?: LicenseSFXAudioLayoutEnum;
    format?: LicenseSFXFormatEnum;
    /**
     * ID of the search that led to this licensing event
     */
    searchId?: string;
    /**
     * ID of the sounds effect being licensed
     */
    sfxId: string;
    /**
     * ID of the subscription to use for the download.
     */
    subscriptionId: string;
}
