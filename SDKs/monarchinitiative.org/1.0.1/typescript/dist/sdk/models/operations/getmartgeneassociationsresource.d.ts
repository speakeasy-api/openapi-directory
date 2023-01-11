import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMartGeneAssociationsResourcePathParams extends SpeakeasyBase {
    objectCategory: string;
    taxon: string;
}
export declare class GetMartGeneAssociationsResourceQueryParams extends SpeakeasyBase {
    slim?: string[];
}
export declare class GetMartGeneAssociationsResourceRequest extends SpeakeasyBase {
    pathParams: GetMartGeneAssociationsResourcePathParams;
    queryParams: GetMartGeneAssociationsResourceQueryParams;
}
export declare class GetMartGeneAssociationsResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
