import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetEvidenceFilterRequest extends SpeakeasyBase {
    /**
     * Data source to consider.
     */
    dataSource?: string;
    /**
     * Type of data structure to return. Can be 'full', 'simple', 'ids', or 'count'.
     */
    datastructure?: string;
    /**
     * Data type to consider.
     */
    datatype?: string;
    /**
     * An EFO code listed as disease.id.
     */
    disease?: string;
    /**
     * The fields you want to retrieve. This will get priority over the data structure requested.
     */
    fields?: string;
    /**
     * Format to get the data back. Can be 'json', 'xml', 'tab' or 'csv'. **Note** that this option can only be used when calling the API directly and will not work in this page. The response here will always be JSON.
     */
    format?: string;
    /**
     * How many initial results should be skipped. Defaults to 0.
     */
    from?: number;
    /**
     * A pathway identifier (meaning all the targets linked to that pathway).
     */
    pathway?: string;
    /**
     * Filter by maximum score value.
     */
    scorevalueMax?: number;
    /**
     * Filter by minimum score value. The default is 0, but using 0.2 is a good trade-off to filter lower quality data points.
     */
    scorevalueMin?: number;
    /**
     * Maximum amount of results to return. Defaults to 10, max is 10000.
     */
    size?: number;
    /**
     * Sort by the given field. The default is 'scores.association_score' in descending order. Use '~' prefix to do ascending
     *
     * @remarks
     * order e.g. '~scores.association_score'. It supports multiple entries.
     *
     */
    sort?: string;
    /**
     * A target identifier listed as target.id.
     */
    target?: string;
    /**
     * A UniProt keyword (meaning all the targets linked to that keyword).
     */
    uniprotkw?: string;
}
export declare class GetEvidenceFilterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
