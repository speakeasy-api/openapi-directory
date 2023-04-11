import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a contiguous range of text.
 */
export declare class Range extends SpeakeasyBase {
    /**
     * The zero-based end index of this range, exclusive, in UTF-16 code units. In all current uses, an end index must be provided. This field is an Int32Value in order to accommodate future use cases with open-ended ranges.
     */
    endIndex?: number;
    /**
     * The ID of the header, footer, or footnote that this range is contained in. An empty segment ID signifies the document's body.
     */
    segmentId?: string;
    /**
     * The zero-based start index of this range, in UTF-16 code units. In all current uses, a start index must be provided. This field is an Int32Value in order to accommodate future use cases with open-ended ranges.
     */
    startIndex?: number;
}
