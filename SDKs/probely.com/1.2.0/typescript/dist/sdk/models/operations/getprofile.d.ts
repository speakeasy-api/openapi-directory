import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProfileQueryParams extends SpeakeasyBase {
    length?: number;
    ordering?: string;
    page?: number;
    search?: string;
}
export declare class GetProfileRequest extends SpeakeasyBase {
    queryParams: GetProfileQueryParams;
}
export declare class GetProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
