import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TenancyTenantGroupsDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this tenant group.
     */
    id: number;
}
export declare class TenancyTenantGroupsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
