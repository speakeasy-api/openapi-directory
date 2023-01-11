import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPhenotypeAnatomyAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPhenotypeAnatomyAssociationsQueryParams extends SpeakeasyBase {
    direct?: boolean;
    evidence?: string;
    excludeAutomaticAssertions?: boolean;
    facet?: boolean;
    facetFields?: string[];
    fetchObjects?: boolean;
    rows?: number;
    slim?: string[];
    start?: number;
    unselectEvidence?: boolean;
    useCompactAssociations?: boolean;
}
export declare class GetPhenotypeAnatomyAssociationsRequest extends SpeakeasyBase {
    pathParams: GetPhenotypeAnatomyAssociationsPathParams;
    queryParams: GetPhenotypeAnatomyAssociationsQueryParams;
}
export declare class GetPhenotypeAnatomyAssociationsResponse extends SpeakeasyBase {
    contentType: string;
    namedObjects?: shared.NamedObject[];
    statusCode: number;
}
