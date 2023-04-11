import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MaintenanceControllerCreateMaintenanceJobRawRequest extends SpeakeasyBase {
    /**
     * A JSON object containing details of the maintenance job
     */
    requestBody: Uint8Array;
    /**
     * The unique ID of the Branch
     */
    branchID: string;
    /**
     * The unique client short-name
     */
    shortName: string;
}
export declare class MaintenanceControllerCreateMaintenanceJobRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    object?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
