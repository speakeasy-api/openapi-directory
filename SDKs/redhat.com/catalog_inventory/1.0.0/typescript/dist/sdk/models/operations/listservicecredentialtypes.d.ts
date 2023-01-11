import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListServiceCredentialTypesQueryParams extends SpeakeasyBase {
    filter?: Record<string, any>;
    limit?: number;
    offset?: number;
    sortBy?: Record<string, any>;
}
export declare class ListServiceCredentialTypesRequest extends SpeakeasyBase {
    queryParams: ListServiceCredentialTypesQueryParams;
}
export declare class ListServiceCredentialTypesResponse extends SpeakeasyBase {
    contentType: string;
    serviceCredentialTypesCollection?: shared.ServiceCredentialTypesCollection;
    statusCode: number;
}
