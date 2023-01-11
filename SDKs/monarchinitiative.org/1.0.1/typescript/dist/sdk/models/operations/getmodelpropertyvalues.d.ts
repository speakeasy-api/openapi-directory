import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetModelPropertyValuesQueryParams extends SpeakeasyBase {
    contributor?: string;
    title?: string;
}
export declare class GetModelPropertyValuesRequest extends SpeakeasyBase {
    queryParams: GetModelPropertyValuesQueryParams;
}
export declare class GetModelPropertyValuesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
