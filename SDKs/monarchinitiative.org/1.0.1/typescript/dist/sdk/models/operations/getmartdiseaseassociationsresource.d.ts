import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMartDiseaseAssociationsResourcePathParams extends SpeakeasyBase {
    objectCategory: string;
    taxon: string;
}
export declare class GetMartDiseaseAssociationsResourceQueryParams extends SpeakeasyBase {
    slim?: string[];
}
export declare class GetMartDiseaseAssociationsResourceRequest extends SpeakeasyBase {
    pathParams: GetMartDiseaseAssociationsResourcePathParams;
    queryParams: GetMartDiseaseAssociationsResourceQueryParams;
}
export declare class GetMartDiseaseAssociationsResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
