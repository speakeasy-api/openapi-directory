import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListServiceCredentialsQueryParams extends SpeakeasyBase {
    filter?: Record<string, any>;
    limit?: number;
    offset?: number;
    sortBy?: Record<string, any>;
}
export declare class ListServiceCredentialsRequest extends SpeakeasyBase {
    queryParams: ListServiceCredentialsQueryParams;
}
export declare class ListServiceCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    serviceCredentialsCollection?: shared.ServiceCredentialsCollection;
    statusCode: number;
}
