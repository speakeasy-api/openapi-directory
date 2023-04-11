import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Files associated with the render
 */
export declare class AudioRendersFilesList extends SpeakeasyBase {
    /**
     * The bit depth of the audio files in bits/sample
     */
    bitsSample: number;
    /**
     * The content-type of the file
     */
    contentType: string;
    /**
     * The internet-accessible URL from which the file can be downloaded. Any redirects encountered when using this URL must be followed
     */
    downloadUrl: string;
    /**
     * The user-specified file name suggestion from the render request; this file name becomes the filename property of the Content-Disposition header when the user downloads the rendered audio file
     */
    filename: string;
    /**
     * The Sample rate of the audio files in Hertz (Hz)
     */
    frequencyHz: number;
    /**
     * The data rate of the audio files in kilobits/second
     */
    kbitsSecond: number;
    /**
     * Size of the file in bytes
     */
    sizeBytes: number;
    /**
     * An array of track names included in the file
     */
    tracks: string[];
}
