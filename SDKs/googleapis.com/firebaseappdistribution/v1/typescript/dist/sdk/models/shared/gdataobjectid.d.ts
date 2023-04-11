import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This is a copy of the tech.blob.ObjectId proto, which could not be used directly here due to transitive closure issues with JavaScript support; see http://b/8801763.
 */
export declare class GdataObjectId extends SpeakeasyBase {
    /**
     * The name of the bucket to which this object belongs.
     */
    bucketName?: string;
    /**
     * Generation of the object. Generations are monotonically increasing across writes, allowing them to be be compared to determine which generation is newer. If this is omitted in a request, then you are requesting the live object. See http://go/bigstore-versions
     */
    generation?: string;
    /**
     * The name of the object.
     */
    objectName?: string;
}
