import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAnnotateQueryParams extends SpeakeasyBase {
    content?: string;
    excludeCategory?: string[];
    includeAbbreviation?: boolean;
    includeAcronym?: boolean;
    includeCategory?: string[];
    includeNumbers?: boolean;
    longestOnly?: boolean;
    minLength?: string;
}
export declare class GetAnnotateRequest extends SpeakeasyBase {
    queryParams: GetAnnotateQueryParams;
}
export declare class GetAnnotateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
