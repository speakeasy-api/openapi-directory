import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAccountOrganizationSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetAccountOrganizationRequest extends SpeakeasyBase {
    /**
     * UUID of the organization to retrieve
     */
    orgId: string;
}
export declare class GetAccountOrganizationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
