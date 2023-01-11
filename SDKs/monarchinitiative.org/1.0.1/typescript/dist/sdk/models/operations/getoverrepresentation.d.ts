import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOverRepresentationQueryParams extends SpeakeasyBase {
    background?: string[];
    maxPValue?: string;
    objectCategory?: string;
    ontology?: string;
    subject?: string[];
    subjectCategory?: string;
    taxon?: string;
}
export declare class GetOverRepresentationRequest extends SpeakeasyBase {
    queryParams: GetOverRepresentationQueryParams;
}
export declare class GetOverRepresentationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
