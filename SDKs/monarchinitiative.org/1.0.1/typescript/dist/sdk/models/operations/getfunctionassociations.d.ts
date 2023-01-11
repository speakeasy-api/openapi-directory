import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetFunctionAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetFunctionAssociationsQueryParams extends SpeakeasyBase {
    evidence?: string[];
    rows?: number;
    start?: number;
}
export declare class GetFunctionAssociationsRequest extends SpeakeasyBase {
    pathParams: GetFunctionAssociationsPathParams;
    queryParams: GetFunctionAssociationsQueryParams;
}
export declare class GetFunctionAssociationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
