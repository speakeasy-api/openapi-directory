import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveAccountOrganizationSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class RemoveAccountOrganizationRequest extends SpeakeasyBase {
    /**
     * UUID of the organization to retrieve
     */
    orgId: string;
}
export declare class RemoveAccountOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
