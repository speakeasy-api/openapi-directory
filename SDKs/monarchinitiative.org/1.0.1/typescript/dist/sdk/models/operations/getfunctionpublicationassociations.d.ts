import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetFunctionPublicationAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetFunctionPublicationAssociationsQueryParams extends SpeakeasyBase {
    evidence?: string[];
    rows?: number;
    start?: number;
}
export declare class GetFunctionPublicationAssociationsRequest extends SpeakeasyBase {
    pathParams: GetFunctionPublicationAssociationsPathParams;
    queryParams: GetFunctionPublicationAssociationsQueryParams;
}
export declare class GetFunctionPublicationAssociationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
