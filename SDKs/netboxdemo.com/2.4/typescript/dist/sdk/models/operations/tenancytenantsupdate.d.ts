import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TenancyTenantsUpdateRequest extends SpeakeasyBase {
    writableTenantInput: shared.WritableTenantInput;
    /**
     * A unique integer value identifying this tenant.
     */
    id: number;
}
export declare class TenancyTenantsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    tenant?: shared.Tenant;
}
