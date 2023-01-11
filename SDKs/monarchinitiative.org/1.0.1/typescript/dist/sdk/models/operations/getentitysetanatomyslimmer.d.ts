import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetEntitySetAnatomySlimmerQueryParams extends SpeakeasyBase {
    excludeAutomaticAssertions?: boolean;
    rows?: number;
    slim: string[];
    start?: number;
    subject: string[];
}
export declare class GetEntitySetAnatomySlimmerRequest extends SpeakeasyBase {
    queryParams: GetEntitySetAnatomySlimmerQueryParams;
}
export declare class GetEntitySetAnatomySlimmerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
