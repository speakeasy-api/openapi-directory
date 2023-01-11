import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetModelPropertiesQueryParams extends SpeakeasyBase {
    contributor?: string;
    title?: string;
}
export declare class GetModelPropertiesRequest extends SpeakeasyBase {
    queryParams: GetModelPropertiesQueryParams;
}
export declare class GetModelPropertiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
