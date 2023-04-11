import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The format of the model being downloaded.
 */
export declare enum DownloadModelResponseModelFormatEnum {
    ModelFormatUnspecified = "MODEL_FORMAT_UNSPECIFIED",
    Tflite = "TFLITE"
}
/**
 * The response for downloading a model to device.
 */
export declare class DownloadModelResponse extends SpeakeasyBase {
    /**
     * Output only. A download URI for the model/zip file.
     */
    downloadUri?: string;
    /**
     * Output only. The time that the download URI link expires. If the link has expired, the REST call must be repeated.
     */
    expireTime?: string;
    /**
     * Output only. The format of the model being downloaded.
     */
    modelFormat?: DownloadModelResponseModelFormatEnum;
    /**
     * Output only. The size of the file(s), if this information is available.
     */
    sizeBytes?: string;
}
