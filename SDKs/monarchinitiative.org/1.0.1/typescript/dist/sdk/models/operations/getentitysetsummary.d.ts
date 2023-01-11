import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetEntitySetSummaryQueryParams extends SpeakeasyBase {
    background?: string[];
    objectCategory?: string;
    objectSlim?: string;
    subject?: string[];
}
export declare class GetEntitySetSummaryRequest extends SpeakeasyBase {
    queryParams: GetEntitySetSummaryQueryParams;
}
export declare class GetEntitySetSummaryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
