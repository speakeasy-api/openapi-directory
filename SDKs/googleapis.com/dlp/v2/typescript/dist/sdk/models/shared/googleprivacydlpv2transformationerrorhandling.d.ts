import { SpeakeasyBase } from "../../../internal/utils";
/**
 * How to handle transformation errors during de-identification. A transformation error occurs when the requested transformation is incompatible with the data. For example, trying to de-identify an IP address using a `DateShift` transformation would result in a transformation error, since date info cannot be extracted from an IP address. Information about any incompatible transformations, and how they were handled, is returned in the response as part of the `TransformationOverviews`.
 */
export declare class GooglePrivacyDlpV2TransformationErrorHandling extends SpeakeasyBase {
    /**
     * Skips the data without modifying it if the requested transformation would cause an error. For example, if a `DateShift` transformation were applied an an IP address, this mode would leave the IP address unchanged in the response.
     */
    leaveUntransformed?: Record<string, any>;
    /**
     * Throw an error and fail the request when a transformation error occurs.
     */
    throwError?: Record<string, any>;
}
