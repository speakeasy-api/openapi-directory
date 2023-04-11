import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TenancyTenantGroupsReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this tenant group.
     */
    id: number;
}
export declare class TenancyTenantGroupsReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    tenantGroup?: shared.TenantGroup;
}
