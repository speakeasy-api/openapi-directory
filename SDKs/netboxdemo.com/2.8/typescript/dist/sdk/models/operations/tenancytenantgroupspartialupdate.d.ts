import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TenancyTenantGroupsPartialUpdateRequest extends SpeakeasyBase {
    writableTenantGroupInput: shared.WritableTenantGroupInput;
    /**
     * A unique integer value identifying this tenant group.
     */
    id: number;
}
export declare class TenancyTenantGroupsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    tenantGroup?: shared.TenantGroup;
}
