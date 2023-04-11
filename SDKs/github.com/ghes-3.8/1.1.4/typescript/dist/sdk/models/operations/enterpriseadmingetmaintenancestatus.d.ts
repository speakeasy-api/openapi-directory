import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const EnterpriseAdminGetMaintenanceStatusServerList: readonly ["https://{protocol}://{hostname}"];
export declare class EnterpriseAdminGetMaintenanceStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    maintenanceStatus?: shared.MaintenanceStatus;
}
