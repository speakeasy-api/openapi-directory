import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAccount200WildcardDataAttributesApi extends SpeakeasyBase {
    freeCalls?: number;
    sizes?: string;
}
export declare class GetAccount200WildcardDataAttributesCredits extends SpeakeasyBase {
    enterprise?: number;
    payg?: number;
    subscription?: number;
    total?: number;
}
export declare class GetAccount200WildcardDataAttributes extends SpeakeasyBase {
    api?: GetAccount200WildcardDataAttributesApi;
    credits?: GetAccount200WildcardDataAttributesCredits;
}
export declare class GetAccount200WildcardData extends SpeakeasyBase {
    attributes?: GetAccount200WildcardDataAttributes;
}
export declare class GetAccount200Wildcard extends SpeakeasyBase {
    data?: GetAccount200WildcardData;
}
export declare class GetAccountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
