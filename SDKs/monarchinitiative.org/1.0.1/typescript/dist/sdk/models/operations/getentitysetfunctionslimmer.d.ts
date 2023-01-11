import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetEntitySetFunctionSlimmerRelationshipTypeEnum {
    InvolvedIn = "involved_in",
    ActsUpstreamOfOrWithin = "acts_upstream_of_or_within"
}
export declare class GetEntitySetFunctionSlimmerQueryParams extends SpeakeasyBase {
    excludeAutomaticAssertions?: boolean;
    relationshipType?: GetEntitySetFunctionSlimmerRelationshipTypeEnum;
    rows?: number;
    slim: string[];
    start?: number;
    subject: string[];
}
export declare class GetEntitySetFunctionSlimmerRequest extends SpeakeasyBase {
    queryParams: GetEntitySetFunctionSlimmerQueryParams;
}
export declare class GetEntitySetFunctionSlimmerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
