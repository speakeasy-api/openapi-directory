import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AuthorizeRealmEnum {
    Customer = "customer",
    Contributor = "contributor"
}
export declare enum AuthorizeResponseTypeEnum {
    Code = "code"
}
export declare class AuthorizeQueryParams extends SpeakeasyBase {
    clientId: string;
    realm?: AuthorizeRealmEnum;
    redirectUri: string;
    responseType: AuthorizeResponseTypeEnum;
    scope?: string;
    state: string;
}
export declare class AuthorizeRequest extends SpeakeasyBase {
    queryParams: AuthorizeQueryParams;
}
export declare class AuthorizeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
