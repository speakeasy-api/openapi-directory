import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSegmentPathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetSegmentIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}
export declare class GetSegmentQueryParams extends SpeakeasyBase {
    includeLicensedContent?: GetSegmentIncludeLicensedContentEnum;
    locale?: string;
}
export declare class GetSegmentRequest extends SpeakeasyBase {
    pathParams: GetSegmentPathParams;
    queryParams: GetSegmentQueryParams;
}
export declare class GetSegmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
