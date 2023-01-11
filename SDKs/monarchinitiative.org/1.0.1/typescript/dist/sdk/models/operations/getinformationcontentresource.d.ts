import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInformationContentResourcePathParams extends SpeakeasyBase {
    objectCategory: string;
    subjectCategory: string;
    subjectTaxon: string;
}
export declare class GetInformationContentResourceQueryParams extends SpeakeasyBase {
    evidence?: string;
}
export declare class GetInformationContentResourceRequest extends SpeakeasyBase {
    pathParams: GetInformationContentResourcePathParams;
    queryParams: GetInformationContentResourceQueryParams;
}
export declare class GetInformationContentResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
