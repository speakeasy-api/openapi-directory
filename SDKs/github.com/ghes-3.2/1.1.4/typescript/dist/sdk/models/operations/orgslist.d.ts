import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrgsListRequest extends SpeakeasyBase {
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * An organization ID. Only return organizations with an ID greater than this ID.
     */
    since?: number;
}
export declare class OrgsListResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    organizationSimples?: shared.OrganizationSimple[];
}
