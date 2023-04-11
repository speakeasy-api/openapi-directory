import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Representation for transformation matrix, intended to be compatible and used with OpenCV format for image manipulation.
 */
export declare class GoogleCloudDocumentaiV1DocumentPageMatrix extends SpeakeasyBase {
    /**
     * Number of columns in the matrix.
     */
    cols?: number;
    /**
     * The matrix data.
     */
    data?: string;
    /**
     * Number of rows in the matrix.
     */
    rows?: number;
    /**
     * This encodes information about what data type the matrix uses. For example, 0 (CV_8U) is an unsigned 8-bit image. For the full list of OpenCV primitive data types, please refer to https://docs.opencv.org/4.3.0/d1/d1b/group__core__hal__interface.html
     */
    type?: number;
}
