import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInstanceObjectPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetInstanceObjectQueryParams extends SpeakeasyBase {
    contributor?: string;
    title?: string;
}
export declare class GetInstanceObjectRequest extends SpeakeasyBase {
    pathParams: GetInstanceObjectPathParams;
    queryParams: GetInstanceObjectQueryParams;
}
export declare class GetInstanceObjectResponse extends SpeakeasyBase {
    associations?: shared.Association[];
    contentType: string;
    statusCode: number;
}
