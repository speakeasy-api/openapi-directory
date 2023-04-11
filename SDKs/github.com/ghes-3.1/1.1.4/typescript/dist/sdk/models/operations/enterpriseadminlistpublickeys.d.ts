import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum EnterpriseAdminListPublicKeysSortEnum {
    Created = "created",
    Updated = "updated",
    Accessed = "accessed"
}
export declare class EnterpriseAdminListPublicKeysRequest extends SpeakeasyBase {
    /**
     * The direction to sort the results by.
     */
    direction?: shared.DirectionEnum;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * Only show public keys accessed after the given time.
     */
    since?: string;
    sort?: EnterpriseAdminListPublicKeysSortEnum;
}
export declare class EnterpriseAdminListPublicKeysResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    publicKeyFulls?: shared.PublicKeyFull[];
}
