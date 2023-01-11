import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetEntitySetPhenotypeSlimmerQueryParams extends SpeakeasyBase {
    excludeAutomaticAssertions?: boolean;
    rows?: number;
    slim: string[];
    start?: number;
    subject: string[];
}
export declare class GetEntitySetPhenotypeSlimmerRequest extends SpeakeasyBase {
    queryParams: GetEntitySetPhenotypeSlimmerQueryParams;
}
export declare class GetEntitySetPhenotypeSlimmerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
