import { SpeakeasyBase } from "../../../internal/utils";
import { Dictlayerdata } from "./dictlayerdata";
/**
 * Successful response
 */
export declare class DictionaryAnnotationdata extends SpeakeasyBase {
    /**
     * The type of annotation this data is for.
     */
    annotationType?: string;
    data?: Dictlayerdata;
    /**
     * Base64 encoded data for this annotation data.
     */
    encodedData?: string;
    /**
     * Unique id for this annotation data.
     */
    id?: string;
    /**
     * Resource Type
     */
    kind?: string;
    /**
     * The Layer id for this data. *
     */
    layerId?: string;
    /**
     * URL for this resource. *
     */
    selfLink?: string;
    /**
     * Timestamp for the last time this data was updated. (RFC 3339 UTC date-time format).
     */
    updated?: string;
    /**
     * The volume id for this data. *
     */
    volumeId?: string;
}
