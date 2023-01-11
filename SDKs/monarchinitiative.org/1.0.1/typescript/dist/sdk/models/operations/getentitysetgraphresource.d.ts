import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetEntitySetGraphResourceQueryParams extends SpeakeasyBase {
    background?: string[];
    objectCategory?: string;
    objectSlim?: string;
    subject?: string[];
}
export declare class GetEntitySetGraphResourceRequest extends SpeakeasyBase {
    queryParams: GetEntitySetGraphResourceQueryParams;
}
export declare class GetEntitySetGraphResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
