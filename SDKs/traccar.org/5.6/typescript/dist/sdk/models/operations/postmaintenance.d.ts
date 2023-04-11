import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostMaintenanceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    maintenance?: shared.Maintenance;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
