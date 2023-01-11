import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposListForUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare class ReposListForUserQueryParams extends SpeakeasyBase {
    direction?: shared.UsernameEnum4;
    page?: number;
    perPage?: number;
    sort?: shared.UsernameEnum3;
    type?: shared.UsernameEnum2;
}
export declare class ReposListForUserRequest extends SpeakeasyBase {
    pathParams: ReposListForUserPathParams;
    queryParams: ReposListForUserQueryParams;
}
export declare class ReposListForUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    minimalRepositories?: shared.MinimalRepository[];
}
