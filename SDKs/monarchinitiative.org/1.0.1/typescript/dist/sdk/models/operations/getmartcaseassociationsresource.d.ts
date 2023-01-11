import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMartCaseAssociationsResourcePathParams extends SpeakeasyBase {
    objectCategory: string;
    taxon: string;
}
export declare class GetMartCaseAssociationsResourceQueryParams extends SpeakeasyBase {
    slim?: string[];
}
export declare class GetMartCaseAssociationsResourceRequest extends SpeakeasyBase {
    pathParams: GetMartCaseAssociationsResourcePathParams;
    queryParams: GetMartCaseAssociationsResourceQueryParams;
}
export declare class GetMartCaseAssociationsResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
