import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGeneHomologAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetGeneHomologAssociationsHomologyTypeEnum {
    P = "P",
    O = "O",
    Ldo = "LDO"
}
export declare class GetGeneHomologAssociationsQueryParams extends SpeakeasyBase {
    direct?: boolean;
    directTaxon?: boolean;
    evidence?: string;
    excludeAutomaticAssertions?: boolean;
    facet?: boolean;
    facetFields?: string[];
    fetchObjects?: boolean;
    homologyType?: GetGeneHomologAssociationsHomologyTypeEnum;
    rows?: number;
    slim?: string[];
    start?: number;
    taxon?: string[];
    unselectEvidence?: boolean;
    useCompactAssociations?: boolean;
}
export declare class GetGeneHomologAssociationsRequest extends SpeakeasyBase {
    pathParams: GetGeneHomologAssociationsPathParams;
    queryParams: GetGeneHomologAssociationsQueryParams;
}
export declare class GetGeneHomologAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
