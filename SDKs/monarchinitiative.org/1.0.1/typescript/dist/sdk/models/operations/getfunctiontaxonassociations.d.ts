import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetFunctionTaxonAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetFunctionTaxonAssociationsQueryParams extends SpeakeasyBase {
    evidence?: string[];
    rows?: number;
    start?: number;
}
export declare class GetFunctionTaxonAssociationsRequest extends SpeakeasyBase {
    pathParams: GetFunctionTaxonAssociationsPathParams;
    queryParams: GetFunctionTaxonAssociationsQueryParams;
}
export declare class GetFunctionTaxonAssociationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
