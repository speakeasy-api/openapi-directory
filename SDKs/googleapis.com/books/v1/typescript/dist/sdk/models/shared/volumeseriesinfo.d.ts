import { SpeakeasyBase } from "../../../internal/utils";
export declare class VolumeseriesinfoVolumeSeriesIssue extends SpeakeasyBase {
    issueDisplayNumber?: string;
    issueOrderNumber?: number;
}
export declare class VolumeseriesinfoVolumeSeries extends SpeakeasyBase {
    /**
     * List of issues. Applicable only for Collection Edition and Omnibus.
     */
    issue?: VolumeseriesinfoVolumeSeriesIssue[];
    /**
     * The book order number in the series.
     */
    orderNumber?: number;
    /**
     * The book type in the context of series. Examples - Single Issue, Collection Edition, etc.
     */
    seriesBookType?: string;
    /**
     * The series id.
     */
    seriesId?: string;
}
export declare class Volumeseriesinfo extends SpeakeasyBase {
    /**
     * The display number string. This should be used only for display purposes and the actual sequence should be inferred from the below orderNumber.
     */
    bookDisplayNumber?: string;
    /**
     * Resource type.
     */
    kind?: string;
    /**
     * Short book title in the context of the series.
     */
    shortSeriesBookTitle?: string;
    volumeSeries?: VolumeseriesinfoVolumeSeries[];
}
