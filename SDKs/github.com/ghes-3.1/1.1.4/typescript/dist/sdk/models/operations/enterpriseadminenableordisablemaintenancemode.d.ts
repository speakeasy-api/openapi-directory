import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const EnterpriseAdminEnableOrDisableMaintenanceModeServerList: readonly ["https://{protocol}://{hostname}"];
export declare class EnterpriseAdminEnableOrDisableMaintenanceModeRequestBody extends SpeakeasyBase {
    /**
     * A JSON string with the attributes `enabled` and `when`.
     *
     * @remarks
     *
     * The possible values for `enabled` are `true` and `false`. When it's `false`, the attribute `when` is ignored and the maintenance mode is turned off. `when` defines the time period when the maintenance was enabled.
     *
     * The possible values for `when` are `now` or any date parseable by [mojombo/chronic](https://github.com/mojombo/chronic).
     */
    maintenance: string;
}
export declare class EnterpriseAdminEnableOrDisableMaintenanceModeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    maintenanceStatus?: shared.MaintenanceStatus;
}
