import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MaintenanceControllerCreateMaintenanceJobJsonRequest extends SpeakeasyBase {
    /**
     * A JSON object containing details of the maintenance job
     */
    maintenanceIssueModel: shared.MaintenanceIssueModel;
    /**
     * The unique ID of the Branch
     */
    branchID: string;
    /**
     * The unique client short-name
     */
    shortName: string;
}
export declare class MaintenanceControllerCreateMaintenanceJobJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    object?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
