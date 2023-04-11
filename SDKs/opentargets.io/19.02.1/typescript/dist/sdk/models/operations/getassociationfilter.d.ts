import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAssociationFilterRequest extends SpeakeasyBase {
    /**
     * Data source to consider.
     */
    datasource?: string;
    /**
     * Type of data structure to return. Can be 'full', 'simple', 'ids', or 'count'.
     */
    datastructure?: string;
    /**
     * Data type to consider.
     */
    datatype?: string;
    /**
     * If `true`, it returns associations that have at least one direct evidence connecting the target and the disease. If `false` it only returns associations for which there is no direct evidence connecting the target and the disease, but only evidence connecting the target to a children of the disease in the EFO ontology.
     */
    direct?: boolean;
    /**
     * An EFO code listed as disease.id.
     */
    disease?: string;
    /**
     * Returns facets
     */
    facets?: boolean;
    /**
     * Fields you want to retrieve. This will get priority over the data structure requested.
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
     * A Reactome pathway identifier (returning only those targets linked to the specified pathway).
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
     * Score types to apply the score value min and max filters. The default is `overall`.
     */
    scorevalueTypes?: string;
    /**
     * Restrict the filtered results to those matching the passed string. The matching is done with a
     *
     * @remarks
     * phrase match prefix.
     *
     */
    search?: string;
    /**
     * Maximum amount of results to return. Defaults to 10, max is 10000.
     */
    size?: number;
    /**
     * Sort by the given score type. Defaults to 'overall' and descending order. Use '~' prefix to do ascending
     *
     * @remarks
     * order e.g. '~overall'. You will call a data type score like: 'datatypes.literature', and a data source as
     * 'datasources.gwas'. Supports multiple entries.
     *
     */
    sort?: string;
    /**
     * A target identifier listed as target.id.
     */
    target?: string;
    /**
     * A ChEMBL target class identifier (returning only those targets belonging to the specified class).
     */
    targetClass?: string;
    /**
     * An EFO code of a therapeutic area.
     */
    therapeuticArea?: string;
    /**
     * A UniProt keyword (meaning all the targets linked to that keyword).
     */
    uniprotkw?: string;
}
export declare class GetAssociationFilterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
